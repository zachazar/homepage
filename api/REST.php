<?php
/**
 * Available requests
 *
 * /messages/
 * POST: [name, email, message]
 */
class Request
{
    //Request info
    public $action;
    public $url_parts;
    
    public $spamWords;
    
    public $name;
    public $email;
    public $message;

    function __construct()
    {
        //Parse URL and save action
        $this->url_parts = isset($_SERVER['PATH_INFO']) ? explode('/', $_SERVER['PATH_INFO']) : array();
        $this->action = $_SERVER['REQUEST_METHOD'];
        
        //Grab up to 5 parts from URI
        for ($i = 0; $i < 5; $i++)
        {
            $this->url_parts[$i] = isset($this->url_parts[$i]) ? $this->url_parts[$i] : "";
        }
        
        //Create a short list of spam words o check for
        $this->spamWords = array("sex","gucci","buy","singles","credit","loan","hidden","sale","xanax","viagra","russia","lonely");
    }
    
    function processRequest()
    {
        switch ($this->action)
        {
            case "POST":
                $this->processPOST();
                break;
            default:
                header('HTTP/1.1 405 Method Not Allowed');
                header('Allow: GET, DELETE');
                break;
        }
    }
    
    function processPOST()
    {
        //Check if messages
        if ($this->url_parts[1] == "messages")
        {
            //Validate the request
            $this->validateMessage();
        }
        else
        {
          header('HTTP/1.1 404 Not Found');
        }
    }
    
    function validateMessage()
    {
        //Make sure all data is present
        if (!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["message"]) ){
            header('HTTP/1.1 400 Bad Request');
        }
        //Make sure fields aren't empty
        else if ($_POST["name"] === "" || $_POST["email"] === "" || $_POST["message"] === ""){
            header('HTTP/1.1 400 Bad Request');
        }
        //Check for spam words
        else if ($this->containsSpamWord($_POST["name"]) || $this->containsSpamWord($_POST["email"]) || $this->containsSpamWord($_POST["message"])){
            header('HTTP/1.1 400 Bad Request');
        }
        else{
            //Copy over sanitized versions
            $this->name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
            $this->email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
            $this->message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
            
            //Check if email is valid
            if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
                header('HTTP/1.1 400 Bad Request');
            }
            else{
                //Looks good, let's send
                $emailMsg = "Name: {$this->name}" . "\r\n" .
                    "Email: {$this->email}" . "\r\n" .
                    "Message:" . "\r\n" . "{$this->message}" . "/r/n";
                
                //Get the email from an environmental variable
                $success = mail(getenv('HOMEPAGE_EMAIL'),"Message sent from homepage",$emailMsg);
                
                if ($success){
                    header('HTTP/1.1 200 OK');
                }
                else{
                    header('HTTP/1.1 500 Internal Server Error');
                }
            }
        }
    }
    
    function containsSpamWord($item)
    {
        //Check each spam word to see if item contains it
        for ($i=0; $i < count($this->spamWords); $i++) {
            if (stripos($item,$this->spamWords[$i]) !== false)
            {
                return true;
            }
        }
        return false;
    }
}

//Create a new request object and process this request
$req = new Request();
$req->processRequest();

import './contact.scss';
import photo_skate from 'assets/images/ZachAzar_skate.jpg';
import spamWordList from 'raw!../../../api/lib/SpamWordList.txt';

export default class ContactCtrl{
  constructor($http){
    this.$http = $http;
    this.photo = photo_skate;

    //Form fields to bind
    this.form ={
      name: "",
      email: "",
      message: "",
      honeyPot: ""
    };

    //Message statuses
    this.availableStatuses = {
      good : {
        statusClass: "good",
        statusMessage: "Message sent. Thanks!"
      },
      invalid: {
        statusClass: "bad",
        statusMessage: "Form invalid. Please check the fields above."
      },
      empty: {
        statusClass: "bad",
        statusMessage: "Form invalid. No fields can be empty."
      },
      spam: {
        statusClass: "bad",
        statusMessage: "Spam words detected. Please check message for words that might appear often in spam messages."
      },
      error: {
        statusClass: "bad",
        statusMessage: "An error occurred. I'm sorry for the inconvenience. Please feel free to reach out to me on LinkedIn (profile link on bottom of page)"
      },
      sending: {
        statusClass: "processing",
        statusMessage: "Sending..."
      }
    };

    //Status variables that the form binds to
    this.statusMessage="";
    this.statusClass="";

    //Spam word list to help detect spam bots
    this.spamWordList = spamWordList.split('\n');
  }

  SubmitForm(){
    console.log("Validating:");
    console.log(this.form);

    //If honeyPot is filled, don't bother validating. It's a bot
    if (this.form.honeyPot !== ""){
      this.setStatus("invalid");
      return;
    }

    //Copy form fields and validate
    // Note, we could use JSON stringify here, but we'll
    // do it manually and use trim.
    let toValidate = {};
    try{
      toValidate.name = this.form.name.trim();
      toValidate.email = this.form.email.trim();
      toValidate.message = this.form.message.trim();
    }
    catch(e){
      this.setStatus("invalid");
      return;
    }
    
    let validateTuple = this.validate(toValidate);

    if (!validateTuple.success)
    {
      //Invalid
      this.setStatus(validateTuple.status);
      return;
    }
    //Send message
    this.setStatus("sending");
    this.sendMessage(toValidate);
  }

  //helpers ------------------------------------------

  setStatus(statusKey){
    this.statusMessage = this.availableStatuses[statusKey].statusMessage;
    this.statusClass = this.availableStatuses[statusKey].statusClass;
  }

  /**
   * Very simple validate. We'll do most of the heavy lifting server side.
   */
  validate(message){
    //Check for empty
    if (message.name === "" || message.email === "" || message.message === ""){
      return { success: false, status: "empty"};
    }
    //Check for spam words
    else if (this.containsSpamWords(message.message, this.spamWordList)){
      return { success: false, status: "spam"};
    }
    else{
      return { success: true};
    }
  }

  containsSpamWords(msg,spamWordList){
    //Convert message and words to lowercase for string matching
    let msgLower = msg.toLowerCase();
    for(let i = 0; i < spamWordList.length; ++i){
      if (msgLower.includes(spamWordList[i].toLowerCase())){
        //Contains the spam word. Return true
        return true;
      }
    }
    //Ran out of words to check. Return false
    return false;
  }

  sendMessage(message){
    //Send message using ajax
    this.$http.post('/api/REST.php/messages/', 
      $.param(message), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then(() => {
        //Success
        console.log("Sent");
        this.setStatus("good");
        return true;
      }, 
      (response) => {
        //Error
        console.log("Error sending with response:");
        console.log(response);
        this.setStatus("error");
        return true;
      });
  }
}

ContactCtrl.$inject = ['$http'];
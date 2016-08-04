//Prefetch images
import photo_skate from 'assets/images/ZachAzar_skate.jpg';
import photo_zach from 'assets/images/ZachAzar_Professional2_600.jpg';

export default class AppCtrl{ 
  constructor($scope,$window,$document,$http){
    this.$http = $http;

    //When the window loads, remove icon from splash page
    $scope.$on('$viewContentLoaded', function(){
      $document.find('.loading-spinner').fadeOut('slow');
    });

    //Find the body and set to variable
    let body = $document.find('body');

    //Function to remove the loading screen and detach the click handler from body
    function removeLoadingScreen(){
      $window.loading_screen.finish();
      body.off("click",removeLoadingScreen);
    }

    //Attach the click handler
    body.click(removeLoadingScreen);

    //Prefetch the images on the Contact and About views using AJAX
    this.prefetch(photo_skate);
    this.prefetch(photo_zach);
  }
  
  //helpers ------------------------------------------

  prefetch(url){
    //This will prefetch the image using AJAX
    //The user's browser will most likely cache the image
    //This should decrease load times for the pages while the user explores the index page
    this.$http.get(`.${url}`) 
      .then(() => {
        //Success - log in dev
        console.log("Retrieved");
        return true;
      }, 
      (response) => {
        //Error - log in dev
        console.log("Error sending with response:");
        console.log(response);
        return true;
      });
  }
}

AppCtrl.$inject=['$scope','$window','$document','$http'];
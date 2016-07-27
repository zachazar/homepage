
export default class AppCtrl{ 
  constructor($scope,$window,$document){
    this.title = "App Parent Scope Test";
    
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
  } 
}

AppCtrl.$inject=['$scope','$window','$document'];
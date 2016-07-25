import './topbar.scss';

export default class TobBarCtrl {
  constructor($location, $window){
    this.location = $location;
    this.$window = $window;
  }
  
  WhatIsActive(){
    switch(this.location.path()){
      case '/':
        return "Resume";
      case '/about':
        return "About";
      case '/contact':
        return "Contact";
      default:
        return 'error';
    }
  }
  
  IsActive(viewLocation){
    return viewLocation === this.location.path();
  }
  
  
  
}
TobBarCtrl.$inject = ['$location', "$window"];
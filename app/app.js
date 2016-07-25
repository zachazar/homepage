//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

//Custom Styling
import 'styling/master.scss';

//Angular
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';

//Configuration
import Config from './app.config';

console.log("Launching app");

angular.module('homepage',[
                          //Config
                          uiRouter,
                          //ng
                          'ngAnimate', 
                          //Directives
                          
                          //Services
                          
                          ])
  .config(Config);
  
  Config.$inject = ['$stateProvider', '$urlRouterProvider'];
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

//Directives
import resumeList from 'directives/zaResumeList';
import skillTree from 'directives/zaSkillTree';
import resumeTile from 'directives/zaResumeTile';

//Services
import resumeDataService from 'services/ResumeDataService';

angular.module('homepage',[
                          //Config
                          uiRouter,
                          //ng
                          'ngAnimate', 
                          //Directives
                          resumeList,
                          skillTree,
                          resumeTile,
                          //Services,
                          resumeDataService
                          ])
  .config(Config);
  
  Config.$inject = ['$stateProvider', '$urlRouterProvider'];
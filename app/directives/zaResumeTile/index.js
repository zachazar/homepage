import angular from 'angular';
import page from 'directives/zaResumeTile/resumeTile.html';
import './resumeTile.scss';

//Controller
import ResumeTileCtrl from './resumeTile.ctrl';


function resumeTile() {
  return {
    restrict: "E",
    scope: {
      type : '@',
      data : '<'
    },
    template: page,
    controller: ResumeTileCtrl,
    controllerAs: "resumeTile"
  };
}

export default angular.module('directives.zaResumeTile', [])
  .directive('zaResumeTile', resumeTile)
  .name;
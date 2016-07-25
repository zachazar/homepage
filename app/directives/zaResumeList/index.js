import angular from 'angular';
import page from 'directives/zaResumeList/resumeList.html';
import './resumeList.scss';

//Controller
import ResumeListCtrl from './resumeList.ctrl';


function resumeList() {
  return {
    restrict: "E",
    scope: {
      type : '@',
      data : '<'
    },
    template: page,
    controller: ResumeListCtrl,
    controllerAs: "resumeList"
  };
}

export default angular.module('directives.zaResumeList', [])
  .directive('zaResumeList', resumeList)
  .name;
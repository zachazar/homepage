import angular from 'angular';
import page from 'directives/zaSkillTree/skillTree.html';
import './skillTree.scss';

//Controller
import SkillTreeCtrl from './skillTree.ctrl';


function skillTree() {
  return {
    restrict: "E",
    scope: {
      data : '<',
      active: '=',
      skills: '<'
    },
    template: page,
    controller: SkillTreeCtrl,
    controllerAs: "skillTree"
  };
}

export default angular.module('directives.zaSkillTree', [])
  .directive('zaSkillTree', skillTree)
  .name;
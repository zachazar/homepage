import SkillTree from '../../lib/SkillTree';

export default class SkillTreeCtrl{
  constructor($scope){
    this.$scope = $scope;
    this.active = null;

    this.SkillTree = new SkillTree("#skillTree__svg", $scope.data, $scope.skills,500);

    this.$scope.$watch("active", (newVal) => {
      if (newVal){
        this.active = this.$scope.active;
        this.SkillTree.Render(this.active);
      }
    });
  }
}

SkillTreeCtrl.$inject=['$scope'];
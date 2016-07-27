import SkillTree from '../../lib/SkillTree';

export default class SkillTreeCtrl{
  constructor($scope){
    this.$scope = $scope;
    this.active = null;
    this.width = $scope.width;

    this.SkillTree = new SkillTree("#skillTree__svg", $scope.data, $scope.skills,500);

    this.$scope.$watch("active", (newVal) => {
      if (newVal){
        this.active = this.$scope.active;
        this.SkillTree.Render(this.active);
      }
    });

    this.$scope.$watch("width", (newVal) => {
      if(newVal){
        this.width = $scope.width;
        this.SkillTree.Resize(this.width);
      }
    });

  }
}

SkillTreeCtrl.$inject=['$scope'];
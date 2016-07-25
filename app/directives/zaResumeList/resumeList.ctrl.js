export default class ResumeListCtrl{
  constructor($scope){
    this.type = $scope.type;
    this.data = $scope.data;

    this.eduList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "edu";
    });

    this.workList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "work";
    });

    this.projectList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "project";
    });
  }
}

ResumeListCtrl.$inject = ['$scope'];
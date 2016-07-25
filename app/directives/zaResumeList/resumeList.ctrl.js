export default class ResumeListCtrl{
  constructor($scope){
    this.type = $scope.type;
    this.data = $scope.data;
  }
}

ResumeListCtrl.$inject = ['$scope'];
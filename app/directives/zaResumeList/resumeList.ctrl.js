export default class ResumeListCtrl{
  constructor($scope){

    //Retreive directive parameters
    this.$scope = $scope;
    this.type = $scope.type;
    this.data = $scope.data;

    //Initially set to null
    this.active = null;

    //Create lists based on type
    this.eduList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "edu";
    });

    this.workList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "work";
    });

    this.projectList = Object.keys(this.data).filter( (key) => {
      return this.data[key].type === "project";
    });

    //Place the lists in sections
    this.sections = {
      1: {
        name: "Education",
        list: this.eduList
      },
      2: {
        name: "Work Experience",
        list: this.workList
      },
      3: {
        name: "Projects",
        list: this.projectList
      }
    };
  }

  //Change active to this active key
  Clicked(key){
    this.active = key;
  }
}

ResumeListCtrl.$inject = ['$scope'];
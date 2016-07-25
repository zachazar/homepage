export default class ResumeTileCtrl{
  constructor($scope){
    this.$scope = $scope;

    this.data = this.$scope.data;

    this.tile = {
      title: null,
      titleMinor: null,
      org: null,
      duration: null,
      location: null,
      thesis: null,
      skills: this.data.skills
    };
    
    //Decide on tile specifics based on tile type
    if (this.data.type==="edu"){

      //Basic Education Information
      this.tile.title = this.data.degree;
      this.tile.titleMinor = `GPA: ${this.data.gpa.cumulative}`;
      this.tile.org = this.data.organization;
      this.tile.duration = `(${this.data.duration.start} - ${this.data.duration.end})`;
      this.tile.location = this.data.location;

      //Thesis
      if (this.data.thesis){
        this.tile.thesis = {
          title: this.data.thesis.title,
          description: this.data.thesis.description
        };
      }
      
      //Minors
      if (this.data.minors){
        this.tile.minors = `Minors: ${this.data.minors.join(', ')}`;
      }
      
      //Honors
      if (this.data.honors){
        this.tile.honors = `Honors: ${this.data.honors.join(', ')}`;
      }
    }
    else if (this.data.type==="work"){
      //Basic Work Information
      this.tile.title = this.data.position;
      this.tile.titleMinor = this.data.hours;
      this.tile.org = this.data.organization;
      this.tile.duration = `(${this.data.duration.start} - ${this.data.duration.end})`;
      this.tile.location = this.data.location;

      //Responsibilities
      this.tile.responsibilities = this.data.responsibilities;
    }
    else{
      console.log("resumeTile: Type error");
    }
  }
}

ResumeTileCtrl.$inject=["$scope"];
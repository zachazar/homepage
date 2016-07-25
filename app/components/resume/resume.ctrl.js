import './resume.scss';

export default class ResumeCtrl{
  constructor(ResumeDataService){
    this.ResumeDataService = ResumeDataService;
    this.data = this.ResumeDataService.GetData();
    
    console.log("Retrieved data:");
    console.log(this.data);
  }
}

ResumeCtrl.$inject=["ResumeDataService"];
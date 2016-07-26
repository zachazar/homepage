import './resume.scss';

export default class ResumeCtrl{
  constructor(ResumeDataService){
    this.ResumeDataService = ResumeDataService;
    this.data = this.ResumeDataService.GetData();
    this.skills = this.ResumeDataService.GetAllSkills();
    
    this.active = null;
    console.log("Retrieved data:");
    console.log(this.data);
  }

  Activate(key){
    console.log(key);
    this.active = key;
  }
}

ResumeCtrl.$inject=["ResumeDataService"];
import './resume.scss';

export default class ResumeCtrl{
  constructor(ResumeDataService){
    this.ResumeDataService = ResumeDataService;
    this.data = this.ResumeDataService.GetData();
    this.skills = this.ResumeDataService.GetAllSkills();
    
    this.active = null;

    //This is bound to the size of resume
    this.resumeWidth = null;

    //This is bound to the size of the skill tree container
    this.skillTreeWidth = null;
  }

  Activate(key){
    this.active = key;
  }
}

ResumeCtrl.$inject=["ResumeDataService"];
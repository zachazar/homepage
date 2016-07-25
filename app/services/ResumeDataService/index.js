import angular from 'angular';

class ResumeDataService {
  constructor() { }
  
  GetData(){
    return {
      1: {
        id : 1,
        type: "edu",
        institution: "University of Denver",
        location: "Denver, CO",
        degree: "M.S. in Computer Science",
        gpa: {
            cumulative: "3.97",
        },
        duration:{
          start: "2013",
          end: "2016"
        },
        thesis: {
          title: "PECCit - An Omniscient Debugger for Web Development",
          description: "PECCit is a multi-application software system which offers a tool for improved backend debugging. Built using PHP, C++, Linux, MySQL, JavaScript, jQuery, AJAX, a REST API, HTML, CSS, Bootstrap, etc."
        },
        skills:{
          1:{id:1,name:"Java",val:80},
          2:{id:2,name:"C#",val:40},
        }
      },
      2: {
        id : 2,
        type: "edu",
        institution: "Vanderbilt University",
        location: "Nashville, TN",
        degree: "B.S. in Computer Science",
        gpa: {
            cumulative: "3.70",
            cs: "3.90"
        },
        duration:{
          start: "2007",
          end: "2011"
        },
        minors: ["Engineering Management", "Mathematics"],
        honors: ["Cum Laude", "Honors in Computer Science", "Dean's List"],
        skills:{
          1:{id:1,name:"Java",val:80},
          2:{id:2,name:"C#",val:40},
        }
      },
      
    };
  }
}

export default angular.module('services.ResumeDataService', [])
  .service('ResumeDataService', ResumeDataService)
  .name;
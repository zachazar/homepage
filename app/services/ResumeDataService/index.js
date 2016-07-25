import angular from 'angular';

class ResumeDataService {
  constructor() { }
  
  GetData(){
    return {
      1: {
        id : 1,
        type: "edu",
        organization: "University of Denver",
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
        organization: "Vanderbilt University",
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
      3: {
        id : 3,
        type: "work",
        organization: "Lever Insights, LLC",
        location: "Seattle, WA",
        position: "Co-founder and CTO",
        hours: "Full-time",
        responsibilities:{
          1: "Designed and developed a data visualization dashboard as lead software engineer",
          2: "Built a powerful Single-Page Application using Node.js, Express, AngularJS, D3, Bootstrap, Sass"
        },
        duration:{
          start: "February 2016",
          end: "July 2016"
        },
        skills:{
          1:{id:1,name:"Java",val:80},
          2:{id:2,name:"C#",val:40},
        }
      },
      4: {
        id : 4,
        type: "work",
        organization: "Department of Computer Science",
        location: "University of Denver",
        position: "Graduate Teaching Assistant",
        hours: "20+ hours per week",
        responsibilities:{
          1: "Assisted professors with grading and teaching, regularly working one-on-one with students",
          2: "Classes: Web Programming, Parallel and Distributed Programming, Programming Languages, AI, etc."
        },
        duration:{
          start: "September 2013",
          end: "September 2015"
        },
        skills:{
          1:{id:1,name:"Java",val:80},
          2:{id:2,name:"C#",val:40},
        }
      },
      5: {
        id : 5,
        type: "work",
        organization: "New Signature",
        location: "Albuquerque, NM",
        position: "Software Engineer",
        hours: "Full-time",
        responsibilities:{
          1: "Executed many Full Stack tasks such as backend server admin/security, site migrations and deployments, and testing and framework updates (PHP, Drupal, WordPress, LAMP)",
          2: "Independently designed/implemented software for handling internal client tickets and emails (C#)"
        },
        duration:{
          start: "November 2012",
          end: " June 2013"
        },
        skills:{
          1:{id:1,name:"Java",val:80},
          2:{id:2,name:"C#",val:40},
        }
      },
      6: {
        id : 6,
        type: "work",
        organization: "OVATION, Inc",
        location: "Nashville, TN",
        position: "Technology Specialist",
        hours: "Full-time",
        responsibilities:{
          1: "Managed infrastructure, data streaming, and software at large, data-driven conferences",
          2: "Designed and implemented two client-facing software packages (C#)"
        },
        duration:{
          start: "January 2012",
          end: "May 2012"
        },
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
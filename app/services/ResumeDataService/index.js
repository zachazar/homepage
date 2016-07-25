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
          2:{id:2,name:"Bootstrap",val:0},
          4:{id:4,name:"Node.js",val:0},
          5:{id:5,name:"Express",val:0},
          6:{id:6,name:"MySQL",val:0},
          7:{id:7,name:"PHP",val:0},
          10:{id:10,name:"HTML",val:0},
          11:{id:11,name:"CSS",val:0},
          12:{id:12,name:"JavaScript",val:0},
          13:{id:13,name:"jQuery",val:0},
          14:{id:14,name:"AJAX",val:0},
          15:{id:15,name:"REST API",val:0},
          20:{id:20,name:"npm",val:0},
          21:{id:21,name:"Bower",val:0},
          24:{id:24,name:"Command Line",val:0},
          25:{id:25,name:"LAMP",val:0}, 
          26:{id:26,name:"NoSQL with MongoDB",val:0},
          28:{id:28,name:"Java",val:0},
          30:{id:30,name:"C/C++",val:0},
          31:{id:31,name:"Unix",val:0},
          32:{id:32,name:"Git and SVN",val:0},
          33:{id:33,name:"iOS with Objective-C",val:0},
          34:{id:34,name:"R",val:0},
          35:{id:35,name:"MapReduce with Hadoop",val:0},
          36:{id:36,name:"OpenMP",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          39:{id:39,name:"Model-View-Controller (MVC)",val:0},
          40:{id:40,name:"Parallel and Distributed Computing",val:0},
          41:{id:41,name:"Design Patterns",val:0},
          42:{id:42,name:"Advanced Data Structures and Algorithms",val:0},
          43:{id:43,name:"Ruby on Rails",val:0}
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
          6:{id:6,name:"MySQL",val:0},
          24:{id:24,name:"Command Line",val:0},
          28:{id:28,name:"Java",val:0},
          29:{id:29,name:"C#",val:0},
          30:{id:30,name:"C/C++",val:0},
          31:{id:31,name:"Unix",val:0},
          32:{id:32,name:"Git and SVN",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          39:{id:39,name:"Model-View-Controller (MVC)",val:0},
          40:{id:40,name:"Parallel and Distributed Computing",val:0},
          41:{id:41,name:"Design Patterns",val:0},
          42:{id:42,name:"Advanced Data Structures and Algorithms",val:0},
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
          1:{id:1,name:"AngularJS",val:0},
          2:{id:2,name:"Bootstrap",val:0},
          3:{id:3,name:"D3",val:0},
          4:{id:4,name:"Node.js",val:0},
          5:{id:5,name:"Express",val:0},
          10:{id:10,name:"HTML",val:0},
          11:{id:11,name:"CSS",val:0},
          12:{id:12,name:"JavaScript",val:0},
          13:{id:13,name:"jQuery",val:0},
          16:{id:16,name:"HTTPS",val:0},
          17:{id:17,name:"Sass",val:0},
          18:{id:18,name:"ES6",val:0},
          19:{id:19,name:"SVG",val:0},
          20:{id:20,name:"npm",val:0},
          21:{id:21,name:"Bower",val:0},
          22:{id:22,name:"Webpack",val:0},
          23:{id:23,name:"grunt",val:0},
          24:{id:24,name:"Command Line",val:0},
          27:{id:27,name:"Amazon Web Services (AWS)",val:0},
          31:{id:31,name:"Unix",val:0},
          32:{id:32,name:"Git and SVN",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          38:{id:38,name:"Responsive Web Design",val:0},
          39:{id:39,name:"Model-View-Controller (MVC)",val:0},
          41:{id:41,name:"Design Patterns",val:0},
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
          6:{id:6,name:"MySQL",val:0},
          7:{id:7,name:"PHP",val:0},
          10:{id:10,name:"HTML",val:0},
          11:{id:11,name:"CSS",val:0},
          12:{id:12,name:"JavaScript",val:0},
          13:{id:13,name:"jQuery",val:0},
          14:{id:14,name:"AJAX",val:0},
          15:{id:15,name:"REST API",val:0},
          24:{id:24,name:"Command Line",val:0},
          25:{id:25,name:"LAMP",val:0}, 
          28:{id:28,name:"Java",val:0},
          30:{id:30,name:"C/C++",val:0},
          31:{id:31,name:"Unix",val:0},
          32:{id:32,name:"Git and SVN",val:0},
          33:{id:33,name:"iOS with Objective-C",val:0},
          35:{id:35,name:"MapReduce with Hadoop",val:0},
          36:{id:36,name:"OpenMP",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          38:{id:38,name:"Responsive Web Design",val:0},
          39:{id:39,name:"Model-View-Controller (MVC)",val:0},
          40:{id:40,name:"Parallel and Distributed Computing",val:0},
          41:{id:41,name:"Design Patterns",val:0},
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
          6:{id:6,name:"MySQL",val:0},
          7:{id:7,name:"PHP",val:0},
          8:{id:8,name:"Drupal",val:0},
          9:{id:9,name:"WordPress",val:0},
          10:{id:10,name:"HTML",val:0},
          11:{id:11,name:"CSS",val:0},
          12:{id:12,name:"JavaScript",val:0},
          13:{id:13,name:"jQuery",val:0},
          14:{id:14,name:"AJAX",val:0},
          24:{id:24,name:"Command Line",val:0},
          25:{id:25,name:"LAMP",val:0}, 
          28:{id:28,name:"Java",val:0},
          29:{id:29,name:"C#",val:0},
          31:{id:31,name:"Unix",val:0},
          32:{id:32,name:"Git and SVN",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          38:{id:38,name:"Responsive Web Design",val:0},
          39:{id:39,name:"Model-View-Controller (MVC)",val:0},
          40:{id:40,name:"Parallel and Distributed Computing",val:0},
          41:{id:41,name:"Design Patterns",val:0},
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
          6:{id:6,name:"MySQL",val:0},
          24:{id:24,name:"Command Line",val:0},
          29:{id:29,name:"C#",val:0},
          31:{id:31,name:"Unix",val:0},
          37:{id:37,name:"Object-Oriented Design",val:0},
          40:{id:40,name:"Parallel and Distributed Computing",val:0},
          41:{id:41,name:"Design Patterns",val:0},
        }
      },
    };
  }
}

export default angular.module('services.ResumeDataService', [])
  .service('ResumeDataService', ResumeDataService)
  .name;
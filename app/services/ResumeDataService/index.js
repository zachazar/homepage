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
          2:{id:2,name:"Bootstrap",val:8},
          4:{id:4,name:"Node.js",val:4},
          5:{id:5,name:"Express",val:4},
          6:{id:6,name:"MySQL",val:8},
          7:{id:7,name:"PHP",val:8},
          10:{id:10,name:"HTML",val:8},
          11:{id:11,name:"CSS",val:8},
          12:{id:12,name:"JavaScript",val:8},
          13:{id:13,name:"jQuery",val:8},
          14:{id:14,name:"AJAX",val:8},
          15:{id:15,name:"REST API",val:8},
          20:{id:20,name:"npm",val:4},
          21:{id:21,name:"Bower",val:4},
          24:{id:24,name:"Command Line",val:8},
          25:{id:25,name:"LAMP",val:8}, 
          26:{id:26,name:"NoSQL with MongoDB",val:2},
          28:{id:28,name:"Java",val:8},
          30:{id:30,name:"C/C++",val:8},
          31:{id:31,name:"Unix",val:8},
          32:{id:32,name:"Git and SVN",val:6},
          33:{id:33,name:"iOS with Objective-C",val:8},
          34:{id:34,name:"R",val:6},
          35:{id:35,name:"MapReduce with Hadoop",val:6},
          36:{id:36,name:"OpenMP",val:8},
          37:{id:37,name:"Object-Oriented Design",val:6},
          39:{id:39,name:"Model-View-Controller (MVC)",val:8},
          40:{id:40,name:"Parallel and Distributed Computing",val:8},
          41:{id:41,name:"Design Patterns",val:4},
          42:{id:42,name:"Advanced Data Structures and Algorithms",val:9},
          43:{id:43,name:"Ruby on Rails",val:2},
          44:{id:44,name:"Problem Solving and Critical Thinking",val:10}
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
          6:{id:6,name:"MySQL",val:4},
          24:{id:24,name:"Command Line",val:6},
          28:{id:28,name:"Java",val:8},
          29:{id:29,name:"C#",val:2},
          30:{id:30,name:"C/C++",val:6},
          31:{id:31,name:"Unix",val:6},
          32:{id:32,name:"Git and SVN",val:4},
          37:{id:37,name:"Object-Oriented Design",val:10},
          39:{id:39,name:"Model-View-Controller (MVC)",val:4},
          40:{id:40,name:"Parallel and Distributed Computing",val:6},
          41:{id:41,name:"Design Patterns",val:8},
          42:{id:42,name:"Advanced Data Structures and Algorithms",val:6},
          44:{id:44,name:"Problem Solving and Critical Thinking",val:10}
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
          1:{id:1,name:"AngularJS",val:10},
          2:{id:2,name:"Bootstrap",val:8},
          3:{id:3,name:"D3",val:10},
          4:{id:4,name:"Node.js",val:6},
          5:{id:5,name:"Express",val:6},
          10:{id:10,name:"HTML",val:10},
          11:{id:11,name:"CSS",val:10},
          12:{id:12,name:"JavaScript",val:10},
          13:{id:13,name:"jQuery",val:6},
          16:{id:16,name:"HTTPS",val:4},
          17:{id:17,name:"Sass",val:8},
          18:{id:18,name:"ES6",val:8},
          19:{id:19,name:"SVG",val:8},
          20:{id:20,name:"npm",val:8},
          21:{id:21,name:"Bower",val:8},
          22:{id:22,name:"Webpack",val:9},
          23:{id:23,name:"grunt",val:3},
          24:{id:24,name:"Command Line",val:6},
          27:{id:27,name:"Amazon Web Services (AWS)",val:2},
          31:{id:31,name:"Unix",val:6},
          32:{id:32,name:"Git and SVN",val:6},
          37:{id:37,name:"Object-Oriented Design",val:8},
          38:{id:38,name:"Responsive Web Design",val:9},
          39:{id:39,name:"Model-View-Controller (MVC)",val:5},
          41:{id:41,name:"Design Patterns",val:5},
          44:{id:44,name:"Problem Solving and Critical Thinking",val:8},
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
          6:{id:6,name:"MySQL",val:3},
          7:{id:7,name:"PHP",val:2},
          10:{id:10,name:"HTML",val:6},
          11:{id:11,name:"CSS",val:6},
          12:{id:12,name:"JavaScript",val:6},
          13:{id:13,name:"jQuery",val:6},
          14:{id:14,name:"AJAX",val:4},
          15:{id:15,name:"REST API",val:4},
          24:{id:24,name:"Command Line",val:8},
          25:{id:25,name:"LAMP",val:6}, 
          28:{id:28,name:"Java",val:8},
          30:{id:30,name:"C/C++",val:8},
          31:{id:31,name:"Unix",val:8},
          32:{id:32,name:"Git and SVN",val:6},
          33:{id:33,name:"iOS with Objective-C",val:9},
          35:{id:35,name:"MapReduce with Hadoop",val:8},
          36:{id:36,name:"OpenMP",val:9},
          37:{id:37,name:"Object-Oriented Design",val:10},
          38:{id:38,name:"Responsive Web Design",val:6},
          39:{id:39,name:"Model-View-Controller (MVC)",val:8},
          40:{id:40,name:"Parallel and Distributed Computing",val:8},
          41:{id:41,name:"Design Patterns",val:6},
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
          6:{id:6,name:"MySQL",val:6},
          7:{id:7,name:"PHP",val:8},
          8:{id:8,name:"Drupal",val:8},
          9:{id:9,name:"WordPress",val:9},
          10:{id:10,name:"HTML",val:8},
          11:{id:11,name:"CSS",val:8},
          12:{id:12,name:"JavaScript",val:6},
          13:{id:13,name:"jQuery",val:4},
          14:{id:14,name:"AJAX",val:4},
          24:{id:24,name:"Command Line",val:6},
          25:{id:25,name:"LAMP",val:8}, 
          28:{id:28,name:"Java",val:8},
          29:{id:29,name:"C#",val:9},
          31:{id:31,name:"Unix",val:6},
          32:{id:32,name:"Git and SVN",val:6},
          37:{id:37,name:"Object-Oriented Design",val:8},
          38:{id:38,name:"Responsive Web Design",val:4},
          39:{id:39,name:"Model-View-Controller (MVC)",val:4},
          40:{id:40,name:"Parallel and Distributed Computing",val:6},
          41:{id:41,name:"Design Patterns",val:6},
          44:{id:44,name:"Problem Solving and Critical Thinking",val:9}
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
          6:{id:6,name:"MySQL",val:4},
          24:{id:24,name:"Command Line",val:4},
          29:{id:29,name:"C#",val:6},
          31:{id:31,name:"Unix",val:4},
          37:{id:37,name:"Object-Oriented Design",val:6},
          40:{id:40,name:"Parallel and Distributed Computing",val:8},
          41:{id:41,name:"Design Patterns",val:6},
          44:{id:44,name:"Problem Solving and Critical Thinking",val:10}
        }
      },
      7: {
        id : 7,
        type: "project",
        name: "Homepage",
        url: "https://github.com/zachazar/homepage",
        description: "Built a personal homepage (this website) using Angular, D3, Bootstrap, PHP, Webpack, Sass",
        skills:{
          1:{id:1,name:"AngularJS",val:10},
          2:{id:2,name:"Bootstrap",val:8},
          3:{id:3,name:"D3",val:10},
          10:{id:10,name:"HTML",val:8},
          11:{id:11,name:"CSS",val:8},
          12:{id:12,name:"JavaScript",val:8},
          17:{id:17,name:"Sass",val:8},
          18:{id:18,name:"ES6",val:6},
          19:{id:19,name:"SVG",val:6},
          20:{id:20,name:"npm",val:4},
          21:{id:21,name:"Bower",val:5},
          22:{id:22,name:"Webpack",val:5},
          24:{id:24,name:"Command Line",val:4},
          31:{id:31,name:"Unix",val:4},
          32:{id:32,name:"Git and SVN",val:6},
          37:{id:37,name:"Object-Oriented Design",val:6},
          38:{id:38,name:"Responsive Web Design",val:7},
          39:{id:39,name:"Model-View-Controller (MVC)",val:6},
          7:{id:7,name:"PHP",val:7}
        }
      },
      8: {
        id : 6,
        type: "work",
        organization: "Institute for Software Integrated Systems",
        location: "Nashville, TN",
        position: "Undergraduate Research Assistant",
        hours: "Full-time",
        responsibilities:{
          1: "Researched intelligent transportation and complex event processing",
          2: "Developed a web server and practiced the rapid prototyping software life-cycle model"
        },
        duration:{
          start: "May 2010",
          end: "August 2010"
        },
        skills:{
          10:{id:10,name:"HTML", val:4},
          11:{id:11,name:"CSS", val:2},
          12:{id:12,name:"JavaScript", val:3},
          24:{id:24,name:"Command Line", val:2},
          28:{id:28,name:"Java", val:5},
          31:{id:31,name:"Unix", val:2},
          40:{id:40,name:"Parallel and Distributed Computing", val:6},
          44:{id:44,name:"Problem Solving and Critical Thinking", val:5}
        }
      },
      9: {
        id : 9,
        type: "work",
        organization: "Visible Light Solar Technologies",
        location: "Albuquerque,NM",
        position: "Student Intern",
        hours: "Full-time",
        responsibilities:{
          1: "Designed firmware and software with C that created a user-interface for lighting profiles",
          2: "Built solar panels and researched photovoltaic cell design",
          3: "Tested and debugged software for microprocessor-based light control"
        },
        duration:{
          start: "May 2009",
          end: "August 2009"
        },
        skills:{
          30:{id:30,name:"C/C++", val:4},
          44:{id:44,name:"Problem Solving and Critical Thinking", val:6}
        }
      }
    };
  }

  GetAllSkills(){
    return {
      1:{id:1,name:"AngularJS"},
      2:{id:2,name:"Bootstrap"},
      3:{id:3,name:"D3"},
      4:{id:4,name:"Node.js"},
      5:{id:5,name:"Express"},
      6:{id:6,name:"MySQL"},
      7:{id:7,name:"PHP"},
      8:{id:8,name:"Drupal"},
      9:{id:9,name:"WordPress"},
      10:{id:10,name:"HTML"},
      11:{id:11,name:"CSS"},
      12:{id:12,name:"JavaScript"},
      13:{id:13,name:"jQuery"},
      14:{id:14,name:"AJAX"},
      15:{id:15,name:"REST API"},
      16:{id:16,name:"HTTPS"},
      17:{id:17,name:"Sass"},
      18:{id:18,name:"ES6"},
      19:{id:19,name:"SVG"},
      20:{id:20,name:"npm"},
      21:{id:21,name:"Bower"},
      22:{id:22,name:"Webpack"},
      23:{id:23,name:"grunt"},
      24:{id:24,name:"Command Line"},
      25:{id:25,name:"LAMP"}, 
      26:{id:26,name:"NoSQL with MongoDB"},
      27:{id:27,name:"Amazon Web Services (AWS)"},
      28:{id:28,name:"Java"},
      29:{id:29,name:"C#"},
      30:{id:30,name:"C/C++"},
      31:{id:31,name:"Unix"},
      32:{id:32,name:"Git and SVN"},
      33:{id:33,name:"iOS with Objective-C"},
      34:{id:34,name:"R"},
      35:{id:35,name:"MapReduce with Hadoop"},
      36:{id:36,name:"OpenMP"},
      37:{id:37,name:"Object-Oriented Design"},
      38:{id:38,name:"Responsive Web Design"},
      39:{id:39,name:"Model-View-Controller (MVC)"},
      40:{id:40,name:"Parallel and Distributed Computing"},
      41:{id:41,name:"Design Patterns"},
      42:{id:42,name:"Advanced Data Structures and Algorithms"},
      43:{id:43,name:"Ruby on Rails"},
      44:{id:44,name:"Problem Solving and Critical Thinking"}
    };
  }
}

export default angular.module('services.ResumeDataService', [])
  .service('ResumeDataService', ResumeDataService)
  .name;
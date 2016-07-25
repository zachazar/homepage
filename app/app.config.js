//Controllers
import AppCtrl from './app.ctrl';
import TopBarCtrl from 'components/topbar/topbar.ctrl';
import ResumeCtrl from 'components/resume/resume.ctrl';
import AboutCtrl from 'components/about/about.ctrl';
import ContactCtrl from 'components/contact/contact.ctrl';
import FooterCtrl from 'components/footer/footer.ctrl';

//Templates
import topbarTemplate from 'components/topbar/topbar.html';
import resumeTemplate from 'components/resume/resume.html';
import aboutTemplate from 'components/about/about.html';
import contactTemplate from 'components/contact/contact.html';
import footerTemplate from 'components/footer/footer.html';

export default function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      //Overall abstract state which houses inner applications
      .state('app', {
        url: "",
        abstract: true,
        views: {
          topbar:{
            template: topbarTemplate,
            controller: TopBarCtrl,
            controllerAs: "topbar"
          },
          footer:{
            template: footerTemplate,
            controller: FooterCtrl,
            controllerAs: "footer"
          },
          main: {
            //Template is it's own view for inner applications
            template: '<ui-view/>',
            controller: AppCtrl,
            controllerAs: "app"
          }
        }
      })
      
      //Resume application
      .state('app.resume',{
        url: "/",
        template: resumeTemplate,
        controller: ResumeCtrl,
        controllerAs: "resume"
      })
      
      //About application
      .state('app.about',{
        url: "/about",
        template: aboutTemplate,
        controller: AboutCtrl,
        controllerAs: "about"
      })
      
      //Contact application
      .state('app.contact',{
        url: "/contact",
        template: contactTemplate,
        controller: ContactCtrl,
        controllerAs: "contact"
      });
  }
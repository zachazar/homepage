import angular from 'angular';

function zaResizeDigest($window) {
  return {
    restrict: "A",
    
    link: function(scope) {
      
      function resize(){
        console.log("Resized - Digesting");
        scope.$apply();
      }
      
      //Bind to window's resize event
      angular.element($window).on('resize', resize);
      
      //When the directive is destroyed, unbind
      scope.$on("$destroy",()=>{
        angular.element($window).off('resize', resize);
      });
    }
  };
}

export default angular.module('directives.zaResizeDigest', [])
  .directive('zaResizeDigest', zaResizeDigest)
  .name;

zaResizeDigest.$inject = ['$window'];
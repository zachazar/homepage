import angular from 'angular';

function zaBindToWidth() {
  return {
    restrict: "A",
    scope : {
      zaBindToWidth : "="
    },
    link: function(scope,element) {
      //Create anonymous function to return the width of the element
      scope.watchWidth = () => { return element[0].clientWidth;};
      
      //Watch the width bind it to scope variable if it changes
      scope.$watch('watchWidth()', function (){
        scope.zaBindToWidth = element[0].clientWidth;
      });
    }
  };
}

export default angular.module('directives.zaBindToWidth', [])
  .directive('zaBindToWidth', zaBindToWidth)
  .name;
  
(function(){
  'use strict';

  angular.module('angular-autofocus', []);

  angular
    .module('angular-autofocus')
    .directive('autofocus', ['$timeout', '$parse', directiveImpl]);

  function directiveImpl($timeout, $parse) {
    return {
      restrict: 'A',
      link: linkImpl
    };

    function linkImpl(scope, elem, attrs) {
      var input = elem[0].nodeName === 'INPUT' ? elem : elem.find('input');
      var isFocused = false;

      attrs.$observe('autofocus', function(newVal, oldVal){
        var shouldAutofocus = scope.$eval(attrs.autofocus);
        if(shouldAutofocus) {
          $timeout(function(){
            input[0].focus();
          });
        } else if(!shouldAutofocus && isFocused) {
          $timeout(function(){
            input[0].blur();
          });
        }
        isFocused = shouldAutofocus;
      });
    }
  }
})();

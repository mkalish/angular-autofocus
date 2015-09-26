/*eslint-env jasmine */
describe('angular auto focus', function(){
  'use strict';

    var $rootScope,
        $compile,
        $document,
        $timeout;

    beforeEach(module('angular-autofocus'));

    beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_, _$document_){
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $timeout = _$timeout_;
      $document = _$document_;
    }));

    it('should focus on an input when the expression is true', function(){
      var elm = angular.element('<input type="text" autofocus="{{true}}"/><');
      spyOn(elm[0], 'focus');
      $compile(elm)($rootScope);
      $rootScope.$digest();
      $timeout.flush();

      expect(elm[0].focus).toHaveBeenCalled();
    });

    it('should find a focusable element if the parent is not focusable', function(){
      var elm = angular.element('<div autofocus="{{true}}"><input type="text"/></div>');
      spyOn(elm.find('input')[0], 'focus');
      $compile(elm)($rootScope);
      $rootScope.$digest();
      $timeout.flush();

      expect(elm.find('input')[0].focus).toHaveBeenCalled();
    });

    it('should blur the element if the expression changes to false', function(){
      $rootScope.autofocusExp = true;
      var elm = angular.element('<input type="text" autofocus="{{autofocusExp}}"/>');
      $compile(elm)($rootScope);
      $rootScope.$digest();
      $timeout.flush();
      
      spyOn(elm[0], 'blur');
      $rootScope.autofocusExp = false;
      $rootScope.$digest();
      $timeout.flush();

      expect(elm[0].blur).toHaveBeenCalled();
    })
});

# angular-autofoucs
Simple directive that observes a passed in attribute that sets focus on the
element or finds an input that can be focused on.

# Usage

```javascript
angular.module('testModule', ['angular-booleanTranslator']);

angular.module('testController', function($scope) {
  $scope.testCondition = true;
});
```
```html
<div ng-controller="testControler">
  <input type="text" autofocus="{{testCondition}}"/>
</div>
```

# Nice To Haves:
Add a more definitive list of focusable inputs other than just INPUT

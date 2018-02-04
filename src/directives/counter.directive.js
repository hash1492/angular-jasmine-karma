var app = angular.module('AppModule.directives');

app.directive('counter', function() {
    return {
        restrict: 'E',
        template: `
            <div>
                Counter: <span ng-bind="counter"></span>
                <button type="button" ng-click="increment()">Increment</button>
                <button type="button" ng-click="decrement()">Decrement</button>
            </div>
        `,
        link: function(scope, element, attrs) {
            scope.counter = 0;
            scope.increment = function() {
                scope.counter++;
            }

            scope.decrement = function() {
                scope.counter--;
            }
        }
    }
});
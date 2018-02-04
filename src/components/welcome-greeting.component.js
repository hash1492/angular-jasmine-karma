var app = angular.module('AppModule.components');

app.component('welcomeGreeting', {
    bindings: {
        // Two way binding
        user: '=',
        // String binding
        background: '@',
        // One-way binding
        subtext: '<',
        // method binding (callback functionality )
        ongreetingnameclicked: '&'
    },
    template: `
    <div ng-style="{'background-color': $ctrl.background}">
        <h3>Hello <span ng-bind="$ctrl.user" ng-click="$ctrl.ongreetingnameclicked()"></span></h3>
        <input type="text" name='user' ng-model="$ctrl.user">
        <p ng-bind="$ctrl.subtext" ng-click="$ctrl.subtextClicked()"></p>
    </div>
    `,
    controller: welcomeGreetingController
});

function welcomeGreetingController() {
    // This is a local controller method
    this.subtextClicked = function () {
        alert('This subtext was clicked!')
    }
}
var app = angular.module('AppModule.controllers');


class UsersListController {
    constructor(UsersService, $log) {
        this._UsersService = UsersService;
        this._$log = $log;
        this.title = 'Users List Page';
        this.subtext = 'welcome to the app';
    
        this.subtext2 = 'welcome!';
    
        this.selectedUser = '';
        this.count = 1;
        this.getUsers()        
    }

    getUsers () {
        this._$log.info('GET_USERS_CALLED');
        this.users = this._UsersService.getUsers();
    }

    selectUser (user) {
        this.selectedUser = user;
    }

    greetingNameClicked () {        
        alert('the greeting name was clicked!')
    }

}

app.controller('UsersListController', UsersListController)


// function UsersListController($scope, UsersService, $log) {
//     $scope.title = 'Users List Page';
//     $scope.getUsers = function() {
//         $log.info('GET_USERS_CALLED');
//         $scope.users = UsersService.getUsers();
//     }
//     $scope.getUsers();
//     $scope.subtext = 'welcome to the app';

//     $scope.subtext2 = 'welcome!';

//     $scope.selectedUser = '';
//     $scope.count = 1;
//     $scope.selectUser = function(user) {
//         $scope.selectedUser = user;
//     }

//     $scope.greetingNameClicked = function() {        
//         alert('the greeting name was clicked!')
//     }
// }
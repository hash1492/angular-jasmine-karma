var app = angular.module('AppModule.services');

app.factory('UsersService', UsersService);

function UsersService (){
    var users = [
        'Harshil',
        'Kartik',
        'Deep',
        'Hemal'
    ];
    
    var getUsers = function() {
        return users;
    }
    return {
        getUsers: getUsers
    }
}
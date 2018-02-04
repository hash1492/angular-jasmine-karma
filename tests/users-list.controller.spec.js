describe('AppModule.controllers', function() {
    var scope, UsersListController, UsersService, $log;
    beforeEach(module('AppModule'));
    
    beforeEach(inject(function($controller, $rootScope, _UsersService_, _$log_) {
        $log = _$log_;
        UsersService = _UsersService_;
        scope = $rootScope.$new();
        // Spy on the UsersService.getUsers method and also stub the return value of that method
        spyOn(UsersService, 'getUsers').and.returnValue(['harshil','hemal']);
        // Spy on the $log.info method, to check if it was called or not
        spyOn($log, 'info');
        UsersListController = $controller('UsersListController', {'$scope': scope, 'UsersService': UsersService, '$log': $log});
        
    }));

    describe('UsersListController', function(){
        it('must be defined', function() {
            expect(UsersListController).toBeDefined();
        });
        it('title must be Users List Page', function() {
            expect(UsersListController.title).toBe('Users List Page');
        });
        it('should call UsersService.getUsers', function() {
            expect(UsersService.getUsers).toHaveBeenCalled();
        });
        it('should set users to scope.users array', function() {
            expect(Array.isArray(UsersListController.users)).toBe(true);
        });
        it('should call $log.info', function() {
            expect($log.info).toHaveBeenCalled();
        });
    }); 
});
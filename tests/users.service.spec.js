describe('AppModule.services', function() {
    
    beforeEach(module('AppModule'));
    
    beforeEach(inject(function(_UsersService_) {
        UsersService = _UsersService_;
    }));

    describe('UsersService', function(){
        it('must be defined', function() {
            expect(UsersService).toBeDefined();
        });

        it('getUsers should return an array', function() {
            var users = UsersService.getUsers();
            expect(Array.isArray(users)).toEqual(true);
        });
    }); 
});
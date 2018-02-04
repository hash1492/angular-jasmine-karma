describe('AppModule.directives', () => {
    var element, scope;
    beforeEach(module('AppModule.directives'))

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile(angular.element('<counter></counter>'))(scope);
        scope.$digest();
    }));

    it('should have increment and decrement buttons', () => {
        var buttonElements = element.find('button');
        
        expect(buttonElements[0].innerText).toEqual('Increment');
        expect(buttonElements[1].innerText).toEqual('Decrement');
    });

    it('should increment the counter correctly', () => {
        scope.increment();
        expect(scope.counter).toEqual(1);
    });

    it('should decrement the counter correctly', () => {
        scope.decrement();
        expect(scope.counter).toEqual(-1);
    });
});
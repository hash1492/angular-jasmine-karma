describe('AppModule.components', () => {
    var scope, controller, element;

    beforeEach(module('AppModule.components'))

    beforeEach(inject(function($componentController, $rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<welcome-greeting user="selectedUser" background="blue" subtext="subtext" ongreetingnameclicked="greetingNameClicked()"></welcome-greeting>')
        element = $compile(element)(scope)
        scope.$digest();
        controller = $componentController('welcomeGreeting', {$scope: scope});
    }));

    it('should have a method called subtextClicked', () => {
        expect(controller.subtextClicked).toBeDefined();
    });

    it('subtextClicked should display an alert', () => {
        spyOn(window, 'alert');
        controller.subtextClicked();
        expect(window.alert).toHaveBeenCalled();
    });

    it('should render an h3 tag', () => {
        var h3elements = element.find('h3');
        
        expect(h3elements[0]).toBeDefined();
    });
});
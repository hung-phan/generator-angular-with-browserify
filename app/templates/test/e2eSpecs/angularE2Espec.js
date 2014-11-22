describe('frontpage', function() {
    var ptor = protractor.getInstance();
    it('should get the title', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('<%= _.slugify(appname) %>');
    });
});

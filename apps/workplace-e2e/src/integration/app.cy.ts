describe('workplace', () => {
    beforeEach(() => cy.visit('/'));

    it('should display landing page', () => {
        cy.visit('/?mock=true');
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
    });
});

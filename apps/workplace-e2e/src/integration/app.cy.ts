describe('workplace', () => {
    beforeEach(() => cy.visit('/?mock=true'));

    it('should display landing page', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
    });

    //Side bar - colleagues tab
    it('should display the colleague tab by default', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('app-landing landing-colleagues').as('colleagueComponent');
        cy.get('@colleagueComponent').should('be.visible');
    });

    it('should display a menu when the ellipse button is clicked next to each colleague', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="colleague-more"]', {
                withinSubject: childComponent,
            }).each(($btn) => {
                cy.wrap($btn).click({ force: true });
            });
        });
    });
});

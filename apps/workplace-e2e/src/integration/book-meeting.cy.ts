describe('Booking Meetings', () => {
    beforeEach(() => cy.visit('/#/book/meeting?mock=true'));

    it('should display booking form', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
    });

    it('should require a meeting title to be entered before proceeding to booking confirmation', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('input[name="title"]')
            .invoke('val')
            .should((value) => expect(value).to.not.be.null);
        cy.get('input[name="title"]').should('have.attr', 'required');
    });
});

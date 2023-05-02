describe('Booking Meetings', () => {
    beforeEach(() => cy.visit('/#/book/meeting?mock=true'));

    it('should display booking form', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
    });
});

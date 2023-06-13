describe('Your Bookings', () => {
    beforeEach(() => cy.visit('/#/your-bookings?mock=true'));

    it('should display calendar', () => {
        cy.get('global-loading');
        cy.get('schedule-sidebar');
    });

    // #region ROOM BOOKINGS
    it('should display a booking on the Your Booking page', () => {
        cy.visit('/#/book/meeting?mock=true');

        cy.get('input[name="title"]')
            .type('Cypress Test Booking')
            .then(() => {
                cy.get('button[name="add-space"]')
                    .click({ force: true })
                    .then(() => {
                        cy.wait(6000);
                        cy.get('button[name="select-space"]')
                            .first()
                            .click({ force: true })
                            .then(() => {
                                cy.get('button[name="toggle-space"]')
                                    .click({ force: true })
                                    .then(() => {
                                        cy.get(
                                            'button[name="open-meeting-confirm"]'
                                        )
                                            .click({ force: true })
                                            .then(() => {
                                                cy.get(
                                                    'button[name="confirm-meeting"]'
                                                )
                                                    .click({ force: true })
                                                    .then(() => {
                                                        cy.wait(3000);
                                                        cy.get(
                                                            'a[name="meeting-created-continue"]'
                                                        ).click({
                                                            force: true,
                                                        });
                                                        cy.wait(3000);
                                                        cy.visit(
                                                            '/#/your-bookings?mock=true'
                                                        );
                                                        cy.wait(3000);
                                                        cy.get('event-card')
                                                            .contains(
                                                                'Cypress Test Booking'
                                                            )
                                                            .click({
                                                                force: true,
                                                            })
                                                            .then(() => {
                                                                cy.get(
                                                                    'event-details-modal'
                                                                ).should(
                                                                    'be.visible',
                                                                    true
                                                                );
                                                                cy.contains(
                                                                    'Cypress Test Booking'
                                                                ).should(
                                                                    'exist'
                                                                );
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    });

    // #endregion

    // #region DESK BOOKINGS

    // #endregion

    // #region VISITOR BOOKINGS

    // #endregion

    // #region VISIBILITY

    // #endregion
});

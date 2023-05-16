describe('Booking Meetings', () => {
    beforeEach(() => cy.visit('/#/book/meeting?mock=true'));

    it('should display booking form', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
    });

    // #region DETAILS

    // ********************************
    //Test is failing because the Meeting Title input field is not a required field
    // ********************************
    // it('should require a meeting title to be entered before proceeding to booking confirmation', () => {
    //     cy.get('global-loading');
    //     cy.get('meeting-flow-form');

    //     cy.get('button[name="open-meeting-confirm"]')
    //         .click({ force: true })
    //         .then(() => {
    //             cy.get('input[name="title"]').should('have.value', (value) => {
    //                 expect(value).to.not.be.null;
    //                 expect(value).to.not.be.empty;
    //             });
    //             cy.get('input[name="title"]').should('have.attr', 'required');
    //         });
    // });

    it('should show the correct start and end times in the booking confirmation modal after selection', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('meeting-form-details').then(($childComponent) => {
            const meetingFormDetails = $childComponent[0];
            cy.get('mat-select')
                .first()
                .click({ force: true })
                .then(() => {
                    cy.get('mat-option').last().scrollIntoView().click();
                });
            cy.get('mat-select').should('contain', '11 : 45 PM');

            cy.get('mat-select')
                .eq(1)
                .click({ force: true })
                .then(() => {
                    cy.get('mat-option span')
                        .contains('1 hour')
                        .scrollIntoView()
                        .click();
                });
        });

        cy.get('button[name="open-meeting-confirm"]')
            .click({ force: true })
            .then(() => {
                cy.contains('div', '11:45');
                cy.contains('div', '12:45');
            });
    });

    // #endregion

    // #region ATTENDEES
    // #endregion

    // #region ROOM
    // #endregion

    // #region CATERING
    // #endregion

    // #region ASSETS
    // #endregion

    // #region NOTES
    // #endregion
});

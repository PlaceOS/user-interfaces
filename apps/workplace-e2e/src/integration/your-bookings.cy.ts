describe('Your Bookings', () => {
    beforeEach(() => cy.visit('/#/your-bookings?mock=true'));

    it('should display calendar', () => {
        cy.get('global-loading');
        cy.get('schedule-sidebar');
    });

    // #region ROOM BOOKINGS
    // it('should display a booking on the Your Booking page', () => {
    //     cy.visit('/#/book/meeting?mock=true');

    //     cy.get('input[name="title"]')
    //         .type('Cypress Test Booking')
    //         .then(() => {
    //             cy.get('button[name="add-space"]')
    //                 .click({ force: true })
    //                 .then(() => {
    //                     cy.wait(6000);
    //                     cy.get('button[name="select-space"]')
    //                         .first()
    //                         .click({ force: true })
    //                         .then(() => {
    //                             cy.get('button[name="toggle-space"]')
    //                                 .click({ force: true })
    //                                 .then(() => {
    //                                     cy.get(
    //                                         'button[name="open-meeting-confirm"]'
    //                                     )
    //                                         .click({ force: true })
    //                                         .then(() => {
    //                                             cy.get(
    //                                                 'button[name="confirm-meeting"]'
    //                                             )
    //                                                 .click({ force: true })
    //                                                 .then(() => {
    //                                                     cy.wait(3000);
    //                                                     cy.get(
    //                                                         'a[name="meeting-created-continue"]'
    //                                                     ).click({
    //                                                         force: true,
    //                                                     });
    //                                                     cy.wait(3000);
    //                                                     cy.visit(
    //                                                         '/#/your-bookings?mock=true'
    //                                                     );
    //                                                     cy.wait(3000);
    //                                                     cy.get('event-card')
    //                                                         .contains(
    //                                                             'Cypress Test Booking'
    //                                                         )
    //                                                         .click({
    //                                                             force: true,
    //                                                         })
    //                                                         .then(() => {
    //                                                             cy.get(
    //                                                                 'event-details-modal'
    //                                                             ).should(
    //                                                                 'be.visible',
    //                                                                 true
    //                                                             );
    //                                                             cy.contains(
    //                                                                 'Cypress Test Booking'
    //                                                             ).should(
    //                                                                 'exist'
    //                                                             );
    //                                                         });
    //                                                 });
    //                                         });
    //                                 });
    //                         });
    //                 });
    //         });
    // });

    // it('should remove and add a filter to view bookings', () => {
    //     cy.get('schedule-filters').should('be.visible');
    //     cy.get('schedule-filters').contains('Lockers').should('be.visible');
    //     cy.get('button[name="schedule-remove-locker-filter"]')
    //         .click({
    //             force: true,
    //         })
    //         .then(() => {
    //             cy.contains('Lockers').should('not.be.visible');
    //         });

    //     cy.get('button[name="schedule-toggle-locker-filter"]')
    //         .find('mat-checkbox')
    //         .should('not.be.checked');

    //     cy.get('button[name="schedule-toggle-locker-filter"]')
    //         .find('mat-checkbox')
    //         .click({ force: true })
    //         .then(() => {
    //             cy.get('schedule-filters')
    //                 .contains('Lockers')
    //                 .should('be.visible');
    //         });
    // });

    // it('should allow a future date to be selected in the calendar view to view a future booking', () => {
    //     cy.visit('/#/book/meeting?mock=true');
    //     cy.get('input[name="title"]')
    //         .type('Cypress Future Booking')
    //         .then(() => {
    //             cy.get('mat-datepicker-toggle')
    //                 .find('button')
    //                 .first()
    //                 .click({ force: true })
    //                 .then(() => {
    //                     cy.get('mat-calendar-header')
    //                         .find('button[aria-label="Next month"]')
    //                         .click({ force: true })
    //                         .then(() => {
    //                             cy.get('mat-month-view')
    //                                 .contains('button', '20')
    //                                 .click({
    //                                     force: true,
    //                                 });
    //                         });
    //                 });

    //             cy.get('button[name="add-space"]')
    //                 .click({ force: true })
    //                 .then(() => {
    //                     cy.wait(6000);
    //                     cy.get('button[name="select-space"]')
    //                         .first()
    //                         .click({ force: true })
    //                         .then(() => {
    //                             cy.get('button[name="toggle-space"]')
    //                                 .click({ force: true })
    //                                 .then(() => {
    //                                     cy.get(
    //                                         'button[name="open-meeting-confirm"]'
    //                                     )
    //                                         .click({ force: true })
    //                                         .then(() => {
    //                                             cy.get(
    //                                                 'button[name="confirm-meeting"]'
    //                                             )
    //                                                 .click({ force: true })
    //                                                 .then(() => {
    //                                                     cy.wait(3000);
    //                                                     cy.get(
    //                                                         'a[name="meeting-created-continue"]'
    //                                                     ).click({
    //                                                         force: true,
    //                                                     });
    //                                                 });
    //                                         });
    //                                 });
    //                         });
    //                 });
    //         });

    //     cy.visit('/#/your-bookings?mock=true');
    //     cy.get('schedule-calendar')
    //         .find('button')
    //         .eq(1)
    //         .click({ force: true })
    //         .then(() => {
    //             cy.contains('button[name="schedule-set-date"]', '20')

    //                 .click({ force: true })
    //                 .then(() => {
    //                     cy.wait(3000);
    //                     cy.get('event-card')
    //                         .contains('Cypress Future Booking')
    //                         .click({ force: true })
    //                         .then(() => {
    //                             cy.get('event-details-modal').should(
    //                                 'be.visible'
    //                             );
    //                             cy.contains('Cypress Future Booking').should(
    //                                 'exist'
    //                             );
    //                         });
    //                 });
    //         });
    // });

    it('should open the booking details modal when a booking is clicked and should be close-able', () => {
        cy.get('.cdk-overlay-container').should('not.be.visible');
        cy.get('booking-card')
            .find('a')
            .first()
            .click({ force: true })
            .then(() => {
                cy.wait(3000);
                cy.get('.cdk-overlay-container').should('be.visible');
            });

        cy.get('booking-details-modal')
            .find('button[mat-dialog-close]')
            .click({ force: true })
            .then(() => {
                cy.get('.cdk-overlay-container').should('not.be.visible');
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

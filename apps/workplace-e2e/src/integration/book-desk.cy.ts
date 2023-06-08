describe('Booking Desks', () => {
    beforeEach(() => cy.visit('/#/book/new-desks/form?mock=true'));

    it('should display booking form', () => {
        cy.get('global-loading');
        cy.get('new-desk-flow-form');
    });

    // #region SINGLE BOOKINGS

    // it('should ensure the meeting title is a required field', () => {
    //     cy.get('input[name="title"]')
    //         .clear()
    //         .then(() => {
    //             cy.get('button[name="add-desk"]')
    //                 .click({ force: true })
    //                 .then(() => {
    //                     cy.wait(6000);

    //                     cy.get('desk-select-modal button[name="select-desk"]')
    //                         .first()
    //                         .click({ force: true })
    //                         .then(() => {
    //                             cy.get('button[name="toggle-desk"]').click({
    //                                 force: true,
    //                             });
    //                         });
    //                 });

    //             cy.get('button[name="open-desk-confirm"]')
    //                 .click({
    //                     force: true,
    //                 })
    //                 .then(() => {
    //                     cy.get('new-desk-flow-confirm').should('not.exist');
    //                 });

    //             // ********************************
    //             //This part of the test is failing. Dismissing the error message lets you proceed to book without a title
    //             // ********************************

    //             //After dismissing the initial error message, clicking the 'Confirm' button again
    //             //should not result in the booking proceeding without a meeting title
    //             // cy.get('button[name="open-desk-confirm"]')
    //             //     .click({
    //             //         force: true,
    //             //     })
    //             //     .then(() => {
    //             //         cy.get('new-desk-flow-confirm').should('not.exist');
    //             //     });
    //         });
    // });

    it('should allow All Day bookings to be added to the form', () => {
        // cy.wait(3000);
        // cy.get('new-desk-flow-confirm').should('not.exist');
        // cy.get('mat-checkbox[formcontrolname="all_day"]')
        //     .find('input[type=checkbox]')
        //     .check()
        //     .then(() => {
        //         cy.get('button[name="add-desk"]')
        //             .click({ force: true })
        //             .then(() => {
        //                 cy.wait(6000);
        //                 cy.get('desk-select-modal button[name="select-desk"]')
        //                     .first()
        //                     .click({ force: true })
        //                     .then(() => {
        //                         cy.get('button[name="toggle-desk"]').click({
        //                             force: true,
        //                         });
        //                     })
        //                     .then(() => {
        //                         cy.wait(5000);
        //                         cy.get('button[name="open-desk-confirm"]')
        //                             .click({
        //                                 force: true,
        //                             })
        //                             .then(() => {
        //                                 cy.get('new-desk-flow-confirm').should(
        //                                     'exist'
        //                                 );
        //                                 cy.get('new-desk-flow-confirm')
        //                                     .contains('div', 'All Day')
        //                                     .should('be.visible');
        //                                 cy.get('button[name="confirm-desk"]')
        //                                     .click({ force: true })
        //                                     .then(() => {
        //                                         cy.url().should(
        //                                             'include',
        //                                             'success'
        //                                         );
        //                                     });
        //                             });
        //                     });
        //             });
        //     });
    });

    it('should allow a selected desk to be changed to another desk in the booking form', () => {
        // cy.wait(3000);
        // cy.get('button[name="add-desk"]')
        //     .click({ force: true })
        //     .then(() => {
        //         cy.wait(6000);
        //         cy.get('desk-select-modal button[name="select-desk"]')
        //             .first()
        //             .click({ force: true })
        //             .then(() => {
        //                 cy.get('button[name="toggle-desk"]').click({
        //                     force: true,
        //                 });
        //             })
        //             .then(() => {
        //                 cy.wait(3000);
        //                 cy.get('button[name="edit-desk"]')
        //                     .click({ force: true })
        //                     .then(() => {
        //                         cy.get(
        //                             'desk-select-modal button[name="select-desk"]'
        //                         )
        //                             .eq(1)
        //                             .click({ force: true })
        //                             .then(() => {
        //                                 cy.get(
        //                                     'button[name="toggle-desk"]'
        //                                 ).click({
        //                                     force: true,
        //                                 });
        //                                 cy.wait(5000);
        //                                 cy.get(
        //                                     'button[name="open-desk-confirm"]'
        //                                 )
        //                                     .click({
        //                                         force: true,
        //                                     })
        //                                     .then(() => {
        //                                         cy.get(
        //                                             'new-desk-flow-confirm'
        //                                         ).should('exist');
        //                                         cy.get(
        //                                             'button[name="confirm-desk"]'
        //                                         )
        //                                             .click({ force: true })
        //                                             .then(() => {
        //                                                 cy.url().should(
        //                                                     'include',
        //                                                     'success'
        //                                                 );
        //                                             });
        //                                     });
        //                             });
        //                     });
        //             });
        //     });
    });

    it('should allow a desk to be filtered by type', () => {
        cy.wait(3000);
        cy.get('button[name="add-desk"]')
            .click({ force: true })
            .then(() => {
                cy.wait(6000);
                cy.get('desk-select-modal')
                    .find('div:contains("dual_monitor")')
                    .next('mat-checkbox')
                    .find('input[type="checkbox"]')
                    .check()
                    .then(() => {
                        cy.get('desk-filters-display')
                            .contains('dual_monitor')
                            .should('be.visible');

                        cy.get('desk-select-modal button[name="select-desk"]')
                            .first()
                            .click({ force: true })
                            .then(() => {
                                cy.get('desk-details')
                                    .contains('dual_monitor')
                                    .should('be.visible');

                                cy.get('button[name="toggle-desk"]').click({
                                    force: true,
                                });
                                cy.wait(5000);
                                cy.get('button[name="open-desk-confirm"]')
                                    .click({
                                        force: true,
                                    })
                                    .then(() => {
                                        cy.get('new-desk-flow-confirm')
                                            .contains('dual_monitor')
                                            .should('be.visible');
                                    });
                            });
                    });
            });
    });

    // #endregion

    // #region GROUP BOOKINGS
    // #endregion
});

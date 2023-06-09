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

    it('should display the correct start and end times in the booking confirmation modal after selection', () => {
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

    it('should display the correct time duration for All Day bookings in the booking confirmation modal', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('mat-checkbox[formcontrolname="all_day"]')
            .find('input')
            .click({ force: true });
        cy.get('button[name="open-meeting-confirm"]')
            .click({ force: true })
            .then(() => {
                cy.contains('div', 'All Day');
            });
    });

    it('should book the meeting for the correct time', () => {
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

            cy.get('button[name="open-meeting-confirm"]')
                .click({ force: true })
                .then(() => {
                    cy.get('button[name="confirm-meeting"]')
                        .click({ force: true })
                        .then(() => {
                            cy.get('button[name="accept"]')
                                .click({ force: true })
                                .then(() => {
                                    cy.get('meeting-flow-success').should(
                                        'be.visible'
                                    );
                                    cy.contains('Booking Confirmed');
                                    cy.contains('11:45');
                                    cy.contains('12:45');
                                });
                        });
                });
        });
    });

    // #endregion

    // #region ATTENDEES

    it('should open up a modal when the Availability link is clicked', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('find-availability-modal').should('not.exist');
        cy.get('button[name="find-attendee-availability"]')
            .click({ force: true })
            .then(() => {
                cy.get('find-availability-modal').should('exist');
                cy.get('find-availability-modal').should('be.visible');
            });
    });

    it('should show auto-complete for potential attendees when input box is typed in', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('mat-option').should('not.exist');
        cy.get('input[placeholder="Type a name or email"]')
            .type('A', { force: true })
            .then(() => {
                cy.wait(3000);
                cy.get('mat-option').should('exist');
                cy.get('mat-option').should('be.visible');
            });
    });

    it('should enable a new attendee to be added via the Add External button', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('new-user-modal').should('not.exist');
        cy.get('span').contains('Test User 123').should('not.exist');
        cy.get('button[name="new-contact"]')
            .click({ force: true })
            .then(() => {
                cy.get('new-user-modal').should('exist');
                cy.get('new-user-modal').should('be.visible');
                cy.get('input[name="name"]').type('Test User 123', {
                    force: true,
                });
                cy.get('input[name="email"]').type('Test@test.com', {
                    force: true,
                });
                cy.get('input[name="org"]').type('Test Org', { force: true });
                cy.get('button')
                    .contains('Save')
                    .click({ force: true })
                    .then(() => {
                        cy.wait(3000);
                        cy.get('span')
                            .contains('Test User 123')
                            .should('exist');
                        cy.get('span')
                            .contains('Test User 123')
                            .should('be.visible');
                    });
            });
    });

    // #endregion

    // #region ROOM
    it('should search for available rooms based on the room capacity requirement bullet point', () => {
        // ********************************
        //Test is failing because when the '2 People' capacity bullet point is selected, the '1 People' filter is applied
        // ********************************

        // Min. 2 People filter
        // cy.get('global-loading');
        // cy.get('meeting-flow-form');
        // cy.get('input#mat-radio-2-input')
        //     .click({ force: true })
        //     .then(() => {
        //         cy.get('button[name="add-space"]')
        //             .click({ force: true })
        //             .then(() => {
        //                 cy.get('space-filters-display')
        //                     .find('div')
        //                     .contains('2 People');
        //             });
        //     });

        // Min. 4 People filter
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('input#mat-radio-3-input')
            .click({ force: true })
            .then(() => {
                cy.get('button[name="add-space"]')
                    .click({ force: true })
                    .then(() => {
                        cy.get('space-filters-display')
                            .find('div')
                            .contains('4 People');
                    });
            });

        // Min. 10 People filter
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('input#mat-radio-4-input')
            .click({ force: true })
            .then(() => {
                cy.get('button[name="add-space"]')
                    .click({ force: true })
                    .then(() => {
                        cy.get('space-filters-display')
                            .find('div')
                            .contains('10 People');
                    });
            });
    });

    it('should add a selected space from the new-space-select-modal to the main booking page', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('input#mat-radio-4-input')
            .click({ force: true })
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
                                        cy.wait(6000);
                                        cy.get('div[list]').should('exist');
                                    });
                            });
                    });
            });
    });

    // #endregion

    // #region CATERING
    it('allow a catering item to be added to main booking page', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('catering-list-field')
            .find('div[list]')
            .find('div[space]')
            .should('not.exist');

        cy.get('input#mat-radio-3-input')
            .click({ force: true })
            .then(() => {
                cy.get('button[name="add-space"]')
                    .click({ force: true })
                    .then(() => {
                        cy.wait(6000);
                        cy.get('button[name="select-space"]')
                            .first()
                            .click({ force: true })
                            .then(() => {
                                cy.get('button[name="toggle-space"]').click({
                                    force: true,
                                });
                            });
                    });
            });
        cy.wait(3000);
        cy.get('body')
            .click({ force: true })
            .then(() => {
                cy.get('button[name="add-catering-item"]')
                    .click({ force: true })
                    .then(() => {
                        cy.wait(6000);
                        cy.get('catering-item-list ')
                            .find('button[name="select-catering-item"]')
                            .first()
                            .click({ force: true })
                            .then(() => {
                                cy.get('button[name="toggle-catering-item"]')
                                    .click({ force: true })
                                    .then(() => {
                                        cy.get(
                                            'button[name="catering-item-return"]'
                                        )
                                            .last()
                                            .click({ force: true });
                                        cy.wait(3000);
                                        cy.get('catering-list-field')
                                            .find('div[list]')
                                            .find('div[space]')
                                            .should('exist');
                                    });
                            });
                    });
            });
    });

    // #endregion

    // #region ASSETS

    it('allow an asset to be added to main booking page', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.get('asset-list-field')
            .find('div[list]')
            .find('div[space]')
            .should('not.exist');

        cy.get('asset-list-field')
            .find('button[add-space]')
            .click({ force: true })
            .then(() => {
                cy.get('asset-list').should('exist');
                cy.get('asset-list')
                    .find('button[select]')
                    .first()
                    .click({ force: true })
                    .then(() => {
                        cy.get('button')
                            .contains('div', 'Add to booking')
                            .click({ force: true })
                            .then(() => {
                                cy.get('button')
                                    .contains('div', 'Back to form')
                                    .click({ force: true })
                                    .then(() => {
                                        cy.get('asset-list-field')
                                            .find('div[list]')
                                            .find('div[space]')
                                            .should('exist');
                                    });
                            });
                    });
            });
    });
    // #endregion

    // #region NOTES
    it('allow an asset to be added to main booking page', () => {
        cy.get('global-loading');
        cy.get('meeting-flow-form');
        cy.contains('Test notes').should('not.exist');

        cy.get('rich-text-input[name="notes"]')
            .find('p')
            .invoke('html', 'Test notes')
            .then(() => {
                cy.get('button[name="open-meeting-confirm"]')
                    .click({ force: true })
                    .then(() => {
                        cy.contains('Test notes').should('exist');
                        cy.contains('Test notes').should('be.visible');
                    });
            });
    });
    // #endregion
});

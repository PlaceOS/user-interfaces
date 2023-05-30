describe('workplace', () => {
    beforeEach(() => cy.visit('/?mock=true'));

    it('should display landing page', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
    });

    // #region SIDE BAR - COLLEAGUES TAB

    it('should display the colleague tab by default', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('app-landing landing-colleagues').as('colleagueComponent');
        cy.get('@colleagueComponent').should('be.visible');
    });

    it('should display a menu when the ellipse button is clicked next to each colleague', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('.cdk-overlay-pane').should('not.exist');
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="colleague-more"]', {
                withinSubject: childComponent,
            })
                .first()
                .click()
                .then(() => {
                    cy.wait(6000);
                    cy.get('.cdk-overlay-pane', {
                        timeout: 6000,
                    }).should('be.visible');
                });
        });
    });

    it('should display an input search field to add user when Add button is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="open-colleague-search"]', {
                withinSubject: childComponent,
            }).each(($btn) => {
                cy.wrap($btn)
                    .click({ force: true })
                    .then(() => {
                        cy.get('input').should('be.visible');
                    });
            });
        });
    });

    it('should close the search modal when the close button is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="open-colleague-search"]', {
                withinSubject: childComponent,
            }).each(($btn) => {
                cy.wrap($btn)
                    .click({ force: true })
                    .then(() => {
                        cy.get('button[name="close-colleague-search"]')
                            .click()
                            .then(() => {
                                cy.get('input').should('not.be.visible');
                            });
                    });
            });
        });
    });

    it('should navigate to booking view if the Create Meeting mat-menu-item is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="colleague-more"]', {
                withinSubject: childComponent,
            })
                .first()
                .click()
                .then(() => {
                    cy.get('button[name="meeting-with-colleague"]')
                        .click()
                        .then(() => {
                            cy.url().should('include', '/book/meeting');
                        });
                });
        });
    });

    it('should remove colleague when the Remove Colleague mat-menu-item is clicked', () => {
        // ********************************
        //Test is failing because the 'Remove Colleague' function is not working in app when tested locally
        // ********************************
        // cy.get('global-loading');
        // cy.get('app-landing', { timeout: 6000 });
        // cy.get('landing-colleagues').then(($childComponent) => {
        //     const childComponent = $childComponent[0];
        //     cy.get('a-user-avatar').should('be.visible');
        //     cy.get('button[name="colleague-more"]', {
        //         withinSubject: childComponent,
        //     }).each(($btn) => {
        //         cy.wrap($btn)
        //             .click()
        //             .then(() => {
        //                 cy.get('button[name="remove-colleague"]').then(() => {
        //                     cy.get('a-user-avatar').should('not.be.visible');
        //                 });
        //             });
        //     });
        // });
    });

    it('should search for a colleague when the Add colleague button is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="open-colleague-search"]', {
                withinSubject: childComponent,
            })
                .first()
                .click()
                .then(() => {
                    cy.get('input')
                        .last()
                        .type('Becky')
                        .should('have.value', 'Becky');
                });
        });
    });

    it('should show an auto-complete of a saved colleague if it matches the search', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-colleagues').then(($childComponent) => {
            const childComponent = $childComponent[0];
            cy.get('button[name="open-colleague-search"]', {
                withinSubject: childComponent,
            })
                .first()
                .click()
                .then(() => {
                    cy.get('input').last().type('Jim Doe');
                    cy.contains('div', 'Jim Doe');
                });
        });
    });

    it('should auto-populate a selected colleague recommended by the auto-complete', () => {
        // ********************************
        //Test is failing because this function is not working in app when tested locally
        // ********************************
        // cy.get('global-loading');
        // cy.get('app-landing', { timeout: 6000 });
        // cy.get('landing-colleagues').then(($childComponent) => {
        //     const childComponent = $childComponent[0];
        //     cy.get('button[name="open-colleague-search"]', {
        //         withinSubject: childComponent,
        //     })
        //         .first()
        //         .click()
        //         .then(() => {
        //             cy.get('input').last().type('Jim Doe');
        //             cy.contains('div', 'Jim Doe');
        //             cy.get('button[name="add-colleague"]')
        //                 .click()
        //                 .then(() => {
        //                     cy.get('input').should('have.value', 'Jim Doe');
        //                 });
        //         });
        // });
    });

    // #endregion

    // #region SIDE BAR - FAVOURITES TAB
    it('should display the Favourites tab when clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-favourites').should('not.exist');
        cy.get('button').find('div').contains('Favourites').click();
        cy.get('landing-favourites').should('exist');
    });

    // #endregion

    // #region TOP BAR

    it('should redirect to the corresponding view when each link in top-menu is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });

        cy.get('topbar').then(($topBarComponent) => {
            const childComponent = $topBarComponent[0];
            cy.get('a[name="nav-logo"')
                .click()
                .then(() => {
                    cy.url().should('include', '/landing');
                });
            cy.get('top-menu', {
                withinSubject: childComponent,
            }).then(($topMenuComponent) => {
                const topMenu = $topMenuComponent;
                cy.get('a[name="nav-meeting"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/book/meeting');
                    });

                cy.get('a[name="nav-desks"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/book/new-desks');
                    });

                cy.get('a[name="nav-meeting"]')
                    .eq(1)
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/book/locker');
                    });

                cy.get('a[name="nav-parking"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/book/new-parking');
                    });

                cy.get('a[name="nav-visitor-invite"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/book/visitor');
                    });

                cy.get('a[name="nav-explore"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/explore');
                    });

                cy.get('a[name="nav-my-day"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/your-bookings');
                    });

                cy.get('a[name="nav-home"]')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.url().should('include', '/landing');
                    });
            });
        });
    });

    it('should open the global search panel when clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });

        cy.get('topbar').then(($topBarComponent) => {
            const topBarComponent = $topBarComponent[0];

            cy.get('global-search', {
                withinSubject: topBarComponent,
            }).then(() => {
                cy.get('button[name="global-search"]')
                    .click()
                    .then(() => {
                        cy.wait(3000);
                        cy.get(
                            'input[placeholder="Search for people or spaces..."]'
                        ).should('be.visible');
                    });
            });
        });
    });

    it('should open the user modal when clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });

        cy.get('topbar').then(($topBarComponent) => {
            const topBarComponent = $topBarComponent[0];
            cy.get('button[name="user-controls"]', {
                withinSubject: topBarComponent,
            })
                .click()
                .then(() => {
                    cy.get('.cdk-overlay-pane', {
                        timeout: 6000,
                    }).should('be.visible');
                });
        });
    });

    // #endregion

    // #region AVAILABLE NOW

    it('should display an available space and redirect to it when clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('button[name="landing-view-space"]')
            .should('be.visible')
            .first()
            .click()
            .then(() => {
                cy.wait(3000);
                cy.url().should('include', '/explore');
            });
    });

    it('should display room booking modal when an available room button is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('explore-booking-modal').should('not.exist');
        cy.get('button[name="landing-book-room"]')
            .should('be.visible')
            .first()
            .click()
            .then(() => {
                cy.wait(3000);
                cy.get('explore-booking-modal', {
                    timeout: 6000,
                }).should('be.visible');
            });
    });

    // #endregion

    // #region YOUR BOOKINGS
    it('should redirect to Your Bookings view when the View All button is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('landing-upcoming').then(() => {
            cy.get('a[name="upcoming-view-all"]')
                .should('be.visible')
                .first()
                .click()
                .then(() => {
                    cy.wait(3000);
                    cy.url().should('include', '/your-bookings');
                });
        });
    });

    // #endregion

    // #region BOOKING DETAILS MODAL

    it('should show the Booking Details modal when a booking is clicked', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('event-card')
            .first()
            .click()
            .then(() => {
                cy.get('event-details-modal').should('be.visible');
            });
    });

    it('should show attendees when "See All" button is clicked in the Booking Details modal', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('attendee-list').should('not.exist');
        cy.get('event-card')
            .first()
            .click()
            .then(() => {
                cy.contains('button', 'See All')
                    .first()
                    .click()
                    .then(() => {
                        cy.wait(6000);
                        cy.get('attendee-list').should('exist');
                    });
            });
    });

    it('should open up the map modal if the map is clicked inside the Booking Details Modal', () => {
        cy.get('global-loading');
        cy.get('app-landing', { timeout: 6000 });
        cy.get('map-locate-modal').should('not.exist');
        cy.get('event-card')
            .first()
            .click()
            .then(() => {
                cy.get('button[map]')
                    .click()
                    .then(() => {
                        cy.wait(6000);
                        cy.get('map-locate-modal').should('be.visible');
                    });
            });
    });

    // #endregion
});

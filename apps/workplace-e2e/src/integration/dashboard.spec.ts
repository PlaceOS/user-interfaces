import { timeout10s, timeout50s } from '../support/constants';

describe('Dashboard Flow', () => {
    before(() => {
        cy.exception();
        cy.authentication();
        cy.get('dashboard', timeout50s).should('be.visible');
    });

    beforeEach(() => {
        cy.setUpToken();
        cy.url('/#/dashboard');
    });

    it('should show most free levels', () => {
        cy.get('dashboard [free-levels] a', timeout10s)
            .should('be.visible')
            .first()
            .click()
            .wait(400);
        cy.url().then((url) => url.includes('explore'));
    });

    it('should show a few free spaces', () => {
        cy.get('dashboard [free-spaces] a', timeout10s)
            .should('be.visible')
            .first()
            .click()
            .wait(400);
        cy.url().then((url) => url.includes('explore'));
    });

    it('should list upcoming events', () => {});

    it('should show contacts', () => {});
});

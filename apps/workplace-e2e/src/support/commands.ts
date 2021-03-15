// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { CONFIG } from '../plugins/config';
import { Md5 } from 'ts-md5';

declare namespace Cypress {
    interface Chainable<Subject> {
        exception(): void;
        signIn(email: string, password: string): void;
        authentication(): void;
        setupToken(path?: string): void;
    }
}

Cypress.Commands.add('exception', () => {
    Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.error(err);
        return false;
    });
});

Cypress.Commands.add(
    'signIn',
    (email = CONFIG.creds.email, password = CONFIG.creds.password) => {
        cy.url().then(($val) => {
            if ($val.includes('login')) {
                cy.get('[type="email"]').type(email);
                cy.get('[type="password"]').type(password);
                cy.get('form button').click();
            } else {
                cy.end();
            }
        });
    }
);

Cypress.Commands.add('authentication', () => {
    cy.server();
    cy.visit('');
    cy.url().should('include', 'login');
    cy.signIn();
    cy.intercept('/api', (req) => {
        // If we have a bearer token in the request, grab it and store in an env var
        if (req.headers.authorization.length >= 64) {
            Cypress.env('TOKEN', req.headers.authorization);
        }
    });
});

Cypress.Commands.add('setUpToken', (path: string = '/') => {
    // Set our access token before doing anything so we don't get randomly shot off to a login page
    // Expires at field is in the far future
    const client_id = Md5.hashStr(
        `${window.location.origin}${path}oauth-resp.html`
    );
    localStorage.setItem(
        `${client_id}_access_token`,
        Cypress.env('TOKEN').split(' ')[1]
    );
    localStorage.setItem(
        `${client_id}_expires_at`,
        `${new Date().valueOf() * 10}`
    );
});

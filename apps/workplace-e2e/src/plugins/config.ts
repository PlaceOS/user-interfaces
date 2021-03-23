//Set up different environments and corresponding credentials
const config = {
    uat: {
        baseUrl: 'https://apps.placeos.com',
        creds: {
            email: '',
            password: '',
        },
    },
    dev: {
        baseUrl: 'https://poc.placeos.com',
        creds: {
            email: 'support@place.tech',
            password: '',
        },
    },
    local: {
        baseUrl: 'http://localhost:4200',
        creds: {
            email: '',
            password: '',
        },
    },
};

export const CONFIG =
    typeof Cypress !== 'undefined'
        ? config[Cypress.env('APP_ENV')]
        : (env) => config[env];

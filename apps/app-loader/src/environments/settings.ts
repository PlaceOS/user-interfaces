const general = {};

const app = {
    name: 'Applications',
    title: 'PlaceOS',
    description: 'Application launcher',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    general,
    prevent_space_init: true,
    application_restrictions: [],
};

export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/app-loader',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

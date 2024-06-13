const general = {};

const app = {
    name: 'Assistant',
    title: 'PlaceOS',
    description: 'Assistant UI',
    short_name: 'PlaceOS',
    logo: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    general,
    prevent_space_init: true,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/assistant-panel',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

const general = {};

const app = {
    name: 'Control',
    title: 'PlaceOS',
    description: 'Room Control UI',
    short_name: 'PlaceOS',
    logo_light: {
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
        route: '/control',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

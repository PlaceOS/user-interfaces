const app = {
    name: 'Signage',
    title: 'PlaceOS',
    description: 'Signage Panel',
    short_name: 'PlaceOS',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    diagnostics: true,
    default_animation_time: 1000,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/signage',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

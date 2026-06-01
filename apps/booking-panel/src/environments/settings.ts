const general = {};

const app = {
    name: 'Bookings',
    title: 'PlaceOS',
    description: 'Bookings UI',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    general,
    prevent_space_init: true,
    allow_dark_mode: false,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    composer: {
        domain: '',
        route: '/bookings',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    service_worker: {
        auto_reload: true,
    },
    dont_load_metadata: true,
    app,
};

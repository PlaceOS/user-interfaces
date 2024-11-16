const general = {};

const app = {
    name: 'Bookings',
    title: 'PlaceOS',
    description: 'Bookings UI',
    short_name: 'PlaceOS',
    logo: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    general,
    prevent_space_init: true,
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
    dont_load_metadata: true,
    app,
};

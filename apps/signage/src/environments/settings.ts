const general = {};

const desks = {
    hide_reason: true,
    can_set_host: true,
};

const events = {
    can_book_for_others: true,
};

const app = {
    name: 'MapKiosk',
    title: 'PlaceOS',
    description: 'Map Kiosk UI',
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
    desks,
    events,
    explore: {
        search_enabled: true,
    },
    show_qr_for_booking: true,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/kiosk',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

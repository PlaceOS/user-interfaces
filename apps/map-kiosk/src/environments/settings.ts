const general = {};

const desks = {
    use_assets: false,
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
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
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
    service_worker: {
        auto_reload: true,
    },
    app,
};

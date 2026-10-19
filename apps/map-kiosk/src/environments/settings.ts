const desks = {
    use_assets: false,
};

const events = {
    can_book_for_others: true,
};

const app = {
    name: 'MapKiosk',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    desks,
    events,
    explore: {
        search_enabled: true,
    },
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

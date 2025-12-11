const general = {};

const desks = {
    hide_reason: true,
    can_set_host: true,
};

const events = {
    can_book_for_others: true,
};

const app = {
    name: 'Stagehand',
    title: 'PlaceOS',
    description: 'Stagehand UI',
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
    /** Default push notification settings per severity level */
    push_notification_defaults: {
        critical: true,
        high: false,
        medium: false,
        low: false,
    },
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/stagehand',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

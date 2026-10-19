const app = {
    name: 'Signage',
    short_name: 'PlaceOS',
    default_animation_time: 1000,
    templates_enabled: true,
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
    service_worker: {
        auto_reload: true,
    },
    app,
};

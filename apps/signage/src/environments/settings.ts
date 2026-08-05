const app = {
    name: 'Signage',
    title: 'PlaceOS',
    description: 'Signage Panel',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    diagnostics: true,
    default_animation_time: 1000,
    /** Start from cached organisation data when the backend is unreachable */
    offline_boot: true,
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

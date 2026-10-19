const app = {
    name: 'Stagehand',
    short_name: 'PlaceOS',
    /** Group subsystem this app's permissions are granted through */
    access_subsystem: 'support',
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

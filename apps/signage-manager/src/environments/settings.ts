const app = {
    name: 'Signage Manager',
    title: 'PlaceOS',
    description: 'Signage Manager UI',
    short_name: 'Signage Manager',
    /** Group subsystem this app's permissions are granted through */
    access_subsystem: 'signage',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    diagnostics: true,
    show_locale_selector: false,
    show_group_selector: false,
    default_animation_time: 1000,
    media_allow_extended_video_codecs: false,
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
    dont_load_metadata: true,
    app,
};

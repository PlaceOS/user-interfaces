/**
 * ROOT APPLICATION SETTINGS
 */
const app: any = {
    name: 'timetable',
    title: 'Timetable Application',
    description: 'PlaceOS Timetable UI written with Angular Framework',
    short_name: 'TIMETABLE',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    block_start: 0,
    block_end: 24,
    use_24_hour_time: false,
    analytics: {
        enabled: true,
        tracking_id: '',
    },
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    composer: {
        domain: '',
        route: '/timetable',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

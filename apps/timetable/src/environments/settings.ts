
/**
 * ROOT APPLICATION SETTINGS
 */
const app: any = {
    name: 'Timetable',
    title: 'Timetable Application',
    description: 'PlaceOS Timetable UI written with Angular Framework',
    short_name: 'TIMETABLE',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    features: ['spaces', 'desks', 'explore', 'help', 'schedule'],
    can_deliver: true,
    desks: {
        can_book_for_others: true,
        allow_groups: true
    },
    analytics: {
        enabled: true,
        tracking_id: '',
    },
    hide_contacts: false,
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

const general = {
    start_time: new Date().setHours(7, 30, 0, 0),
    end_time: new Date().setHours(20, 30, 0, 0),
    block_minutes: 30,
};

const app = {
    name: 'Timetable',
    title: 'PlaceOS',
    description: 'Timetable UI',
    short_name: 'PlaceOS',
    logo: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    general,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/bookings',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

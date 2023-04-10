const general = {
    menu: [
        {
            route: 'day-view',
            name: 'Calendar',
            icon: { class: 'material-icons', content: 'event' },
        },
        {
            route: 'facilities',
            name: 'Facilities',
            icon: { class: 'material-icons', content: 'meeting_room' },
        },
        {
            route: 'asset-manager',
            name: 'Asset Manager',
            icon: { class: 'material-icons', content: 'inventory' },
        },
        {
            route: 'catering',
            name: 'Catering',
            icon: { class: 'material-icons', content: 'room_service' },
        },
        {
            route: 'visitors',
            name: 'Visitors',
            icon: { class: 'material-icons', content: 'group' },
        },
        {
            route: 'desks',
            name: 'Desks',
            icon: { class: 'material-icons', content: 'article' },
        },
        {
            route: 'staff',
            name: 'Staff',
            icon: { class: 'material-icons', content: 'account_box' },
        },
        {
            route: 'points',
            name: 'Points',
            icon: { class: 'material-icons', content: 'loyalty' },
        },
        {
            route: 'parking',
            name: 'Parking',
            icon: { class: 'material-icons', content: 'local_parking' },
        },
        {
            route: 'reports',
            name: 'Reports',
            icon: { class: 'material-icons', content: 'analytics' },
        },
    ],
};

const custom_reports = [];

const app = {
    name: 'Concierge',
    title: 'PlaceOS',
    description: 'Concierge UI',
    short_name: 'PlaceOS',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    default_route: '/day-view',
    general,
    guests: { vaccine_check: true },
    delegated: false,
    has_uploads: true,
    custom_reports,
    desks: { can_book_for_others: true },
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/concierge',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

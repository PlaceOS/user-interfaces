const general = {
    menu: [
        {
            route: 'book/rooms',
            name: 'Calendar',
            icon: { class: 'material-icons', content: 'event' },
        },
        {
            route: 'facilities',
            name: 'Facilities',
            icon: { class: 'material-icons', content: 'meeting_room' },
        },
        {
            route: 'book/assets',
            name: 'Asset Manager',
            icon: { class: 'material-icons', content: 'inventory' },
        },
        {
            route: 'book/catering',
            name: 'Catering',
            icon: { class: 'material-icons', content: 'room_service' },
        },
        {
            route: 'book/visitors',
            name: 'Visitors',
            icon: { class: 'material-icons', content: 'group' },
        },
        {
            route: 'book/desks',
            name: 'Desks',
            icon: { class: 'material-icons', content: 'article' },
        },
        {
            route: 'users/staff',
            name: 'Staff',
            icon: { class: 'material-icons', content: 'account_box' },
        },
        {
            route: 'facilities/points',
            name: 'Points',
            icon: { class: 'material-icons', content: 'loyalty' },
        },
        {
            route: 'book/parking',
            name: 'Parking',
            icon: { class: 'material-icons', content: 'local_parking' },
        },
        {
            route: 'reports',
            name: 'Reports',
            icon: { class: 'material-icons', content: 'analytics' },
        },
        {
            route: 'room-management',
            name: 'Room Management',
            icon: { class: 'material-icons', content: 'analytics' },
        },
    ],
    dark_mode: true,
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
    default_route: '/book/rooms/new',
    use_24_hour_time: false,
    admin_group: 'concierge_admins',
    features: [
        'spaces',
        'zones',
        'desks',
        'parking',
        'visitors',
        'assets',
        'facilities',
        'internal-users',
        'points',
        'surveys',
        'catering',
        'events',
        'booking-report',
        'contact-tracing-report',
        'signage',
        'events',
    ],
    general,
    guests: { vaccine_check: true },
    delegated: false,
    has_uploads: true,
    custom_reports,
    desks: { can_book_for_others: true },
    events: {
        allow_setup_breakdown: false,
        custom_actions: [
            {
                id: 'set_setup_breakdown',
                name: 'Set Setup/Breakdown',
                icon: 'manage_history',
            },
        ],
    },
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

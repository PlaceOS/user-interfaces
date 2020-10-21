

/**
 * GENERAL APPLICATION SETTINGS
 */
const general = {
    menu: {
        items: [
            {
                name: 'Home',
                route: '/home',
            },
            {
                name: 'Booking',
                route: '/book',
                children: [
                    {
                        name: 'Spaces',
                        route: '/book/spaces',
                    },
                    {
                        name: 'Desks',
                        route: '/book/desks',
                    },
                ],
            },
            {
                name: 'Explore',
                route: '/explore',
                children: [
                    {
                        name: 'People',
                        route: '/explore/people',
                    },
                    {
                        name: 'Spaces',
                        route: '/explore/spaces',
                    },
                ],
            },
            {
                name: 'Help',
                route: '/help',
            },
            {
                name: 'Schedule',
                route: '/schedule',
            },
            {
                name: 'Control',
                route: '/control',
            },
            {
                name: 'Directory',
                route: '/directory',
            },
        ],
        copyright: 'ACA Projects',
        position: 'left',
    },
    checkin: {
        stages: [
            'qrcode',
            'details',
            // 'photo',
            // 'visitor-pass',
            'result',
            'preferences',
            'final',
        ],
    },
} as any;

/**
 * HOME PAGE SETTINGS
 */
const home = {
    background: 'assets/img/skyline.jpg',
    tiles: [
        {
            name: 'Booking',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'event',
            },
        },
        {
            name: 'Desks',
            route: '/book/desks',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'pin_drop',
            },
        },
        {
            name: 'Explore',
            route: '/explore',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'map',
            },
        },
        {
            name: 'Help',
            route: '/help',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'help_outline',
            },
        },
        {
            name: 'Schedule',
            route: '/schedule',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'today',
            },
        },
        {
            name: 'Control',
            route: '/control',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'settings_remote',
            },
        },
        {
            name: 'Directory',
            route: '/directory',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'search',
            },
        },
    ],
};

/**
 * HELP/SUPPORT SETTINGS
 */

const help = {
    tiles: [
        {
            name: 'About Engine',
            link: 'https://acaprojects.com/resources',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'dns',
            },
            background:
                'https://static1.squarespace.com/static/52142586e4b0c09536a144ad/5c8ed203a4222fa1927bbab3/5cb7cba66e9a7f63584b4d39/1555549341622/too-many-buttons.jpg?format=2500w',
        },
        {
            name: 'General Enquiries',
            link: 'mailto:equiries@acaprojects.com?subject=Staff%20App%20Demo',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'mail',
            },
            background: 'assets/img/it-banner.jpg',
        },
        {
            name: 'Contact ACA Projects',
            link: 'https://acaprojects.com/contact-1',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'call',
            },
            background:
                'https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569984759306-M6ZOKD64OG009U68MYUL/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_zZdtnDCZTLKcP2mivxmYi50xvY5saIGKMgOza9mH4XA/image-asset.jpeg?format=2500w',
        },
        {
            name: 'About Us',
            link: 'https://acaprojects.com/',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'business',
            },
            background:
                'https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569985184499-QF839PTJ2EV30KIZF59X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w',
        },
    ],
    columns: 2,
};

/**
 * BOOKING FLOW SETTINGS
 */

const booking = {
    booking_types: [
        { display: 'Internal', value: 'internal' },
        { display: 'Client', value: 'client' },
        { display: 'External', value: 'external' },
        { display: 'Setup', value: 'setup' },
        { display: 'Training', value: 'training' },
        { display: 'Interview', value: 'interview' },
    ],
    show_fields: [
        'attendees',
        'body',
        'catering',
        'date',
        'duration',
        'organiser',
        'recurrence',
        'title',
        'type',
    ],
    html_body: true,
    multiple_spaces: false,
    desk_start: 9,
};

/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/

const space_display = {
    show_images: false,
};

/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/

const directory = {
    show_avatars: true,
    min_search_length: 3,
};

/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/

const explore = {
    colors: {
        'space-available': '#43a047',
        'space-requestable': '#ffb300',
        'space-unavailable': '#e53935',
        'space-not-bookable': '#ccc',

        'desk-available': '#43a047',
        'desk-available-stroke': '#1b5e20',
        'desk-unavailable': '#e53935',
        'desk-unavailable-stroke': '#b71c1c',
        'desk-reserved': '#ffb300',
        'desk-reserved-stroke': '#ff6f00',
        'desk-not-bookable': '#fff',
        'desk-not-bookable-stroke': '#ccc',

        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935',
    },
    can_select_building: false,
    show_legend_group_names: true,
    legend: {
        Spaces: [
            { key: 'space-available', name: 'Space Available' },
            { key: 'space-requestable', name: 'Space available by request' },
            { key: 'space-unavailable', name: 'Space in use' },
            { key: 'space-not-bookable', name: 'Space not Bookable' },
        ],
        Desks: [
            { key: 'desk-available', name: 'Desk Available' },
            { key: 'desk-reserved', name: 'Desk Reserved' },
            { key: 'desk-unavailable', name: 'Desk in use' },
            { key: 'desk-not-bookable', name: 'Desk not bookable' },
        ],
        Zones: [
            { key: 'zone-low', name: 'Low Zone Utilisation' },
            { key: 'zone-medium', name: 'Medium Zone Utilisation' },
            { key: 'zone-high', name: 'High Zone Utilisation' },
        ],
        Icons: [
            {
                key: 'icon-bin',
                name: 'Bin',
                icon: { type: 'icon', class: 'material-icons', content: 'delete' },
            },
        ],
    },
};

/**
 * ROOT APPLICATION SETTINGS
 */
const app = {
    name: 'VisitorKiosk',
    title: 'Visitor Kiosk',
    description: 'Kiosk UI written with Angular Framework',
    short_name: 'KIOSK',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg'
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg'
    },
    general,
    home,
    help,
    booking,
    space_display,
    directory,
    explore
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/visitor-kiosk',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
    mock: false,
};

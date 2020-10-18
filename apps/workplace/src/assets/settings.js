/**
 * ROOT SETTIGNS
 */
var settings = {
    debug: true,
    composer: {
        domain: '',
        route: '/staff',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app: {},
    mock: undefined,
};
/**
 * ROOT APPLICATION SETTINGS
 */
settings.app = {
    title: 'ACA Projects',
    description: 'ACA Staff UI written with Angular Framework',
    short_name: 'STAFF',
    logo_dark: {
        type: 'img',
        src: 'assets/img/logo.png',
        background: '',
    },
    logo_light: {
        type: 'img',
        src: 'assets/img/logo.png',
        background: '',
    },
    general: {},
    home: {},
    help: {},
    booking: {},
    space_display: {},
    directory: {},
    explore: {},
    analytics: {
        enabled: true,
        tracking_id: '',
    },
    schedule: {},
};
/**
 * GENERAL APPLICATION SETTINGS
 */
settings.app.general = {
    menu: {
        items: [
            {
                name: 'Home',
                route: '/home',
            },
            {
                name: 'Book',
                route: '/book',
            },
            {
                name: 'Desk',
                route: '/book/desks',
            },
            {
                name: 'Spaces',
                route: '/explore',
            },
            // {
            //     name: 'Help',
            //     route: '/help',
            // },
            {
                name: 'My Day',
                route: '/schedule',
            },
        ],
        copyright: 'ACA Projects',
        position: 'right',
    },
};
/**
 * HOME PAGE SETTINGS
 */
settings.app.home = {
    background: 'assets/img/skyline.jpg',
    tiles: [
        {
            name: 'Book',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'add_circle_outline',
            },
            query_params: { new: true },
        },
        // {
        //     name: 'Desks',
        //     route: '/book/desks',
        //     icon: {
        //         type: 'img',
        //         src: 'assets/img/desk.svg',
        //     },
        //     query_params: { new: true },
        // },
        // {
        //     name: 'People',
        //     route: '/directory',
        //     icon: {
        //         type: 'icon',
        //         class: 'material-icons',
        //         content: 'people',
        //     },
        // },
        {
            name: 'Spaces',
            route: '/explore',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'place',
            },
        },
        // {
        //     name: 'My Day',
        //     route: '/schedule',
        //     icon: {
        //         type: 'icon',
        //         class: 'material-icons',
        //         content: 'today',
        //     },
        // },
    ],
    footer: [
        {
            name: 'Book',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'add_circle_outline',
            },
            query_params: { new: true },
        },
        // {
        //     name: 'Desks',
        //     route: '/book/desks',
        //     icon: {
        //         type: 'img',
        //         src: 'assets/img/desk_dark.svg',
        //     },
        //     query_params: { new: true },
        // },
        // {
        //     name: 'People',
        //     route: '/directory',
        //     icon: {
        //         type: 'icon',
        //         class: 'material-icons',
        //         content: 'people',
        //     },
        // },
        {
            name: 'Spaces',
            route: '/explore',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'place',
            },
        },
        // {
        //     name: 'My Day',
        //     route: '/schedule',
        //     icon: {
        //         type: 'icon',
        //         class: 'material-icons',
        //         content: 'today',
        //     },
        // },
    ],
};
/**
 * HELP/SUPPORT SETTINGS
 */
settings.app.help = {
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
settings.app.booking = {
    booking_types: [
        { display: 'Internal', value: 'internal' },
        { display: 'Client', value: 'client' },
        { display: 'External', value: 'external' },
        { display: 'Setup', value: 'setup' },
        { display: 'Training', value: 'training' },
        { display: 'Interview', value: 'interview' },
    ],
    los_groups: {
        ifs: 'Internal Firm Services',
        deals: 'Deals',
        assurance: 'Assurance',
        tax: 'Tax',
        consulting: 'Consulting',
        ladies: 'Ladies',
        it: 'IT',
    },
    capacity_filters: [
        { display: '< 10', value: '0' },
        { display: '10 - 15', value: '10' },
        { display: '16 - 20', value: '16' },
        { display: '21 - 25', value: '21' },
        { display: '> 25', value: '26' },
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
        'configuration',
    ],
    html_body: true,
    multiple_spaces: false,
    desk_start: 9,
    breakdown: 15,
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
settings.app.space_display = {
    show_images: false,
};
/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/
settings.app.directory = {
    show_avatars: true,
    min_search_length: 3,
};
/*===========================*\
||    SCHEULDE SETTINGS   ||
\*===========================*/
settings.app.schedule = {
    legend: [
        { name: 'Accepted', color: '#21A453' },
        { name: 'Pending', color: '#ffbf1f' },
        { name: 'Rejected', color: '#f44336' },
    ],
};
/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/
settings.app.explore = {
    colors: {
        'space-free': '#43a047',
        'space-pending': '#ffb300',
        'space-busy': '#e53935',
        'space-not-bookable': '#ccc',
        'space-unknown': '#000',
        // 'desk-available': '#43a047',
        // 'desk-available-stroke': '#1b5e20',
        // 'desk-unavailable': '#e53935',
        // 'desk-unavailable-stroke': '#b71c1c',
        // 'desk-reserved': '#ffb300',
        // 'desk-reserved-stroke': '#ff6f00',
        // 'desk-not-bookable': '#fff',
        // 'desk-not-bookable-stroke': '#ccc',
        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935',
    },
    can_select_building: true,
    show_legend_group_names: true,
    legend: {
        Spaces: [
            { key: 'space-free', name: 'Space Available' },
            { key: 'space-pending', name: 'Space Pending' },
            { key: 'space-busy', name: 'Space in Use' },
            { key: 'space-not-bookable', name: 'Space not Bookable' },
            { key: 'space-unknown', name: 'Unknown' },
        ],
    },
};
// Add settings to global space
window['settings.json'] = settings;
console.log('Embedded setting.json');

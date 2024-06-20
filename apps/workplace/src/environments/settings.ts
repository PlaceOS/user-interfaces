/**
 * GENERAL APPLICATION SETTINGS
 */
const general: any = {
    banner: {
        id: '2',
        type: 'info',
        content: ``,
    },
    search: true,
    dark_mode: true,
};
/**
 * HELP/SUPPORT SETTINGS
 */
const help: any = [
    {
        name: 'About PlaceOS',
        link: 'https://place.technology/resources',
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
        link: 'mailto:equiries@place.technology?subject=Staff%20App%20Demo',
        icon: {
            type: 'icon',
            class: 'material-icons',
            content: 'mail',
        },
        background: 'assets/img/it-banner.jpg',
    },
    {
        name: 'Contact PlaceOS',
        link: 'https://place.technology/contact-1',
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
        link: 'https://place.technology/',
        icon: {
            type: 'icon',
            class: 'material-icons',
            content: 'business',
        },
        background:
            'https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569985184499-QF839PTJ2EV30KIZF59X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w',
    },
];
/**
 * BOOKING FLOW SETTINGS
 */
const events: any = {
    multiple_spaces: false,
    desk_start: 9,
    can_book_for_others: false,
    has_catering: true,
    has_assets: true,
    catering_enabled: 'bld-01',
    allow_all_day: true,
    hide_notes: false,
    hide_attendees: false,
    features_label: '',
    features_on_form: false,
    booking_unavailable: false,
    allow_externals: true,
    allow_recurrence: false,
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
const space_display: any = {
    show_images: false,
};
/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/
const directory: any = {
    show_avatars: true,
    min_search_length: 3,
};
/*===========================*\
||    SCHEULDE SETTINGS   ||
\*===========================*/
const schedule = {
    use_websocket: false,
    legend: [
        { name: 'Accepted', color: '#21A453' },
        { name: 'Pending', color: '#ffbf1f' },
        { name: 'Rejected', color: '#f44336' },
    ],
};
/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/
const explore: any = {
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
    show_legend: true,
    hide_zones: true,
    use_zone_polygons: false,
    show_simple_sensor_info: false,
    legend: [
        ['Available', '#43a047'],
        ['In Use', '#e53935'],
        ['Pending', '#ffb300'],
        ['Signs of Life', '#1565c0'],
    ],
};
/**
 * ROOT APPLICATION SETTINGS
 */
const app: any = {
    name: 'Workplace',
    title: 'Workplace Application',
    description: 'PlaceOS Workplace UI written with Angular Framework',
    short_name: 'STAFF',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg',
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg',
    },
    locales: [
        { id: 'en', name: 'English', flag: '🇦🇺' },
        // { id: 'fr', name: 'French', flag: '🇫🇷' },
    ],
    features: [
        'spaces',
        'desks',
        'explore',
        'parking',
        'help',
        'schedule',
        'wfh',
        'lockers',
        'visitor-invite',
        'group-events',
    ],
    currency: '',
    default_route: '/landing',
    use_geolocation: false,
    use_24_hour_time: false,
    new_features: true,
    can_deliver: true,
    no_user_calendar: false,
    basic_user_search: false,
    no_maps: true,
    general,
    help,
    events,
    space_display,
    directory,
    explore,
    bookings: {
        no_approval: false,
        all_day_default: false,
        allowed_daily_visitor_count: 100,
        multiple_visitors: true,
    },
    desks: {
        can_book_lockers: true,
        can_book_for_others: true,
        allow_groups: true,
        allow_time_changes: true,
        allow_all_day: true,
        auto_allocation: false,
        show_calendar_links: true,
        hide_map: false,
    },
    analytics: {
        enabled: true,
        tracking_id: '',
    },
    chat: {
        enabled: false,
    },
    hide_contacts: false,
    schedule,
};
/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    composer: {
        domain: '',
        route: '/staff',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

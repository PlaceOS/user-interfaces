/**
 * BOOKING FLOW SETTINGS
 */
const events: any = {
    multiple_spaces: false,
    can_book_for_others: false,
    has_catering: true,
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
const space_display: any = {
    show_images: false,
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
};
/**
 * ROOT APPLICATION SETTINGS
 */
const app: any = {
    name: 'Workplace',
    short_name: 'WorkMate Outlook',
    features: [
        'spaces',
        'desks',
        'explore',
        'parking',
        'parking-requests',
        'help',
        'schedule',
    ],
    events,
    space_display,
    explore,
    desks: {
        use_assets: false,
    },
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

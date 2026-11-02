/**
 * Feature pages that the top menu and the footer menu link to, in top menu
 * order. `id` is the app feature that shows the item and `name` is a locale
 * key. `footer_icon` replaces `icon` in the footer menu.
 */
export const FEATURE_MENU_ITEMS = [
    {
        id: 'desks',
        route: '/book/desk',
        icon: 'desk',
        name: 'APP.WORKPLACE.MENU_DESKS',
    },
    {
        id: 'spaces',
        route: '/book/meeting',
        icon: 'meeting_room',
        name: 'APP.WORKPLACE.MENU_ROOMS',
    },
    {
        id: 'lockers',
        route: '/book/locker',
        icon: 'lock',
        name: 'APP.WORKPLACE.MENU_LOCKERS',
    },
    {
        id: 'parking',
        route: '/book/parking',
        icon: 'directions_car',
        name: 'APP.WORKPLACE.MENU_PARKING',
    },
    {
        id: 'parking-requests',
        route: '/book/parking-request',
        icon: 'local_parking',
        name: 'APP.WORKPLACE.MENU_PARKING_REQUESTS',
    },
    {
        id: 'visitor-invite',
        route: '/book/visitor',
        icon: 'person',
        footer_icon: 'person_add',
        name: 'APP.WORKPLACE.MENU_VISITORS',
    },
    {
        id: 'explore',
        route: '/explore',
        icon: 'place',
        name: 'APP.WORKPLACE.MENU_EXPLORE',
    },
    {
        id: 'schedule',
        route: '/your-bookings',
        icon: 'event',
        footer_icon: 'today',
        name: 'APP.WORKPLACE.MENU_SCHEDULE',
    },
    {
        id: 'control',
        route: '/control',
        icon: 'remote_gen',
        name: 'APP.WORKPLACE.MENU_CONTROL',
    },
    {
        id: 'group-events',
        route: '/group-events',
        icon: 'local_activity',
        name: 'APP.WORKPLACE.MENU_EVENTS',
    },
    {
        id: 'deals-n-offers',
        route: '/deals-n-offers',
        icon: 'confirmation_number',
        name: 'APP.WORKPLACE.MENU_DEALS',
    },
    {
        id: 'team-schedule',
        route: '/team-schedule',
        icon: 'groups',
        name: 'APP.WORKPLACE.MENU_TEAM_SCHEDULE',
    },
];

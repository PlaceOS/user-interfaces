
const general = {
    menu: [
        { route: 'day-view', name: 'Calendar', icon: { class: 'material-icons', content: 'event' } },
        { route: 'facilities', name: 'Facilities', icon: { class: 'material-icons', content: 'plot' } },
        { route: 'visitors', name: 'Visitors', icon: { class: 'material-icons', content: 'group' } }
    ]
}


const app = {
    title: 'PlaceOS',
    description: 'Concierge UI',
    short_name: 'PlaceOS',
    logo_dark: {

    },
    general
}

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
    app
};

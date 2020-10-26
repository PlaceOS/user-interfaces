
const general = {
    menu: [
        { route: 'day-view', name: 'Calendar', icon: { class: 'material-icons', content: 'event' } },
        { route: 'facilities', name: 'Facilities', icon: { class: 'material-icons', content: 'plot' } },
        { route: 'catering', name: 'Catering', icon: { class: 'material-icons', content: 'room_service' } },
        { route: 'visitors', name: 'Visitors', icon: { class: 'material-icons', content: 'group' } }
    ]
}


const app = {
    name: 'Concierge',
    title: 'PlaceOS',
    description: 'Concierge UI',
    short_name: 'PlaceOS',
    logo: {
        type: 'img',
        src: 'assets/logo-light.svg'
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg'
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

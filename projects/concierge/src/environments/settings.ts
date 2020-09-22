
const general = {
    menu: [
        { route: 'day-view', name: 'Calendar', icon: { class: 'material-icons', content: 'event' } }
    ]
}


const app = {
    title: 'PwC Middle East',
    description: 'Catering UI',
    short_name: 'PwC ME',
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
        route: '/catering',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app
};

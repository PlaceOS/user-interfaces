
const general = {
}


const app = {
    name: 'Catering',
    title: 'PlaceOS',
    description: 'Caterers UI',
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
        route: '/catering',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app
};

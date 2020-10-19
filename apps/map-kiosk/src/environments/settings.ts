
const general = {
}


const app = {
    title: 'PlaceOS',
    description: 'Map Kiosk UI',
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
        route: '/kiosk',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app
};

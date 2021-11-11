/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    composer: {
        domain: '',
        route: '/enrolment',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: true,
    },
    app: {
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
    },
};

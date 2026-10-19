const app = {
    name: 'Applications',
    application_restrictions: [],
};

export const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/app-loader',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

const app = {
    name: 'Venue Booking',
    title: 'PlaceOS',
    description: 'Venue Booking UI',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    default_route: '/discover',
    use_24_hour_time: false,
    features: [
        'spaces',
        'events',
        'catering',
    ],
    delegated: false,
    has_uploads: true,
    events: {
        allow_setup_breakdown: false,
        use_building_timezone: false,
    },
};

/**
 * ROOT SETTINGS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    mock: true,
    composer: {
        domain: '',
        route: '/venue-booking',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
};

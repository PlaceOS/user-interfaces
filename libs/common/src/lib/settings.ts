import { ApplicationIcon } from './types';

export interface SettingsOptions {
    /** Whether to add debugging messages to the console */
    debug: boolean;
    /** Settings for initialising composer service */
    composer: ComposerSettings;
    /** Settings for service worker update handling */
    service_worker: ServiceWorkerSettings;
    /** Settings for the application */
    app: ApplicationSettings;
    /** Whether to use mock systems and services */
    mock?: boolean;
}

export interface ServiceWorkerSettings {
    /** Whether to reload the app as soon as a new service worker version is ready */
    auto_reload: boolean;
}

export interface ComposerSettings {
    /** Host name of the ACAEngine server */
    domain: string;
    /** Port number used on the ACAEngine server */
    port: string;
    /** Route that the root of the application lies */
    route: string;
    /** Protocol used by the ACAEngine server */
    protocol: 'http:' | 'https:' | '';
    /** Whether login is handled locally inside the application */
    local_login?: boolean;
    /** Whether composer should use the settings domain instead of the origin */
    use_domain?: boolean;
    /** Which browser keystore ts-client should use for auth credentials */
    storage?: 'local' | 'session';
}

export interface ApplicationSettings {
    /** Name of the application */
    title: string;
    /** Description of the application */
    description: string;
    /** Short name of the application */
    short_name: string;
    /** Logo to use on dark background */
    logo_dark: ApplicationIcon;
    /** Logo to use on light background */
    logo_light?: ApplicationIcon;
    /** Generalised settings for the application */
    general: GeneralAppSettings;
    /** Colour for thin environment identifier bars shown at the top and bottom of the app */
    environment_bar?: string;
}

export interface GeneralAppSettings {}

const app: any = {
    title: 'PlaceOS',
    description: 'PlaceOS UI',
    short_name: 'PlaceOS',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    general: {},
    bookings: {
        force_current_user_for_booking_rules: false,
    },
    events: {
        force_current_user_for_booking_rules: false,
    },
    allow_dark_mode: true,
    show_changelog: true,
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: SettingsOptions = {
    debug: true,
    composer: {
        domain: '',
        route: '/placeos',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    service_worker: {
        auto_reload: false,
    },
    app,
};

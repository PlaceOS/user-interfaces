
import { ApplicationIcon } from './types';

export interface SettingsOptions {
    /** Whether to add debugging messages to the console */
    debug: boolean;
    /** Settings for initialising composer service */
    composer: ComposerSettings;
    /** Settings for the application */
    app: ApplicationSettings;
    /** Whether to use mock systems and services */
    mock?: boolean;
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
}

export interface GeneralAppSettings { }

const app: any = {
    title: 'PlaceOS',
    description: 'PlaceOS UI',
    short_name: 'PwC ME',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg'
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg'
    },
    general: {}
}

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
    app
};

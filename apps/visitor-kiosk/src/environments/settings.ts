const home = {};

/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/

const explore = {
    colors: {
        'space-available': '#43a047',
        'space-requestable': '#ffb300',
        'space-unavailable': '#e53935',
        'space-not-bookable': '#ccc',

        'desk-available': '#43a047',
        'desk-available-stroke': '#1b5e20',
        'desk-unavailable': '#e53935',
        'desk-unavailable-stroke': '#b71c1c',
        'desk-reserved': '#ffb300',
        'desk-reserved-stroke': '#ff6f00',
        'desk-not-bookable': '#fff',
        'desk-not-bookable-stroke': '#ccc',

        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935',
    },
    can_select_building: false,
    show_legend_group_names: true,
    legend: {
        Spaces: [
            { key: 'space-available', name: 'Space Available' },
            { key: 'space-requestable', name: 'Space available by request' },
            { key: 'space-unavailable', name: 'Space in use' },
            { key: 'space-not-bookable', name: 'Space not Bookable' },
        ],
        Desks: [
            { key: 'desk-available', name: 'Desk Available' },
            { key: 'desk-reserved', name: 'Desk Reserved' },
            { key: 'desk-unavailable', name: 'Desk in use' },
            { key: 'desk-not-bookable', name: 'Desk not bookable' },
        ],
        Zones: [
            { key: 'zone-low', name: 'Low Zone Utilisation' },
            { key: 'zone-medium', name: 'Medium Zone Utilisation' },
            { key: 'zone-high', name: 'High Zone Utilisation' },
        ],
        Icons: [
            {
                key: 'icon-bin',
                name: 'Bin',
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'delete',
                },
            },
        ],
    },
};

/**
 * ROOT APPLICATION SETTINGS
 */
const app = {
    name: 'Visitor-Kiosk',
    title: 'Visitor Kiosk',
    description: 'Kiosk UI written with Angular Framework',
    short_name: 'KIOSK',
    logo_light: 'assets/logo-light.svg',
    logo_dark: 'assets/logo-dark.svg',
    allow_self_registration: true,
    allow_user_photo: true,
    explore,
    home,
    welcome_background: 'assets/img/skyline.png',
    locales: [
        { id: 'en-AU', name: 'LANGUAGE.ENGLISH', local: 'English', flag: '🇦🇺' },
        {
            id: 'en-US',
            name: 'LANGUAGE.ENGLISH_US',
            local: 'English (US)',
            flag: '🇺🇸',
        },
        { id: 'fr', name: 'LANGUAGE.FRENCH', local: 'Français', flag: '🇫🇷' },
        {
            id: 'fr-CA',
            name: 'LANGUAGE.FRENCH_CA',
            local: 'Français (Canada)',
            flag: '🇨🇦',
        },
        { id: 'es', name: 'LANGUAGE.SPANISH', local: 'Español', flag: '🇪🇸' },
        {
            id: 'pt',
            name: 'LANGUAGE.PORTUGESE',
            local: 'Português',
            flag: '🇵🇹',
        },
        { id: 'it', name: 'LANGUAGE.ITALIAN', local: 'Italiano', flag: '🇮🇹' },
        { id: 'zh', name: 'LANGUAGE.CHINESE', local: '中文', flag: '🇨🇳' },
        { id: 'ja-JP', name: 'LANGUAGE.JAPANESE', local: '日本語', flag: '🇯🇵' },
        { id: 'ar', name: 'LANGUAGE.ARABIC', local: 'عربية', flag: '' },
    ],
};

/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS: any = {
    debug: true,
    composer: {
        domain: '',
        route: '/visitor-kiosk',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
    mock: false,
};

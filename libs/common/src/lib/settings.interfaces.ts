import { HashMap, Identity } from './types';

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
    /** Settings for the home page */
    home: HomePageSettings;
    /** Settings for the Help/Support page */
    help: HelpPageSettings;
    /** Settings for making bookings */
    booking: BookingFlowSettings;
    /** Settings for configuring the display of spaces on the UI */
    space_display: SpaceDisplaySettings;
    /** Settings for configuring user search */
    directory: UserDirectorySettings;
    /** Settings for the mapping sections */
    explore: ExploreMapSettings;
    /** Settings for Google Analytics */
    analytics: AnalyticsSettings;
    /** Settings for Schedule page */
    schedule: any;
}

export interface GeneralAppSettings {
    /** Settings for the overlay menu */
    menu: OverlayMenuSettings;
}

export interface OverlayMenuSettings {
    /** List of available links on the overlay menu */
    items: ApplicationLink[];
    /** Copyright display for the application */
    copyright?: string;
    /** Display position of the overlay menu */
    position: 'right' | 'middle' | 'left';
}

export interface HomePageSettings {
    /** List of tiles to display on the home page */
    tiles: ApplicationLink[];
    /** Background CSS for home page */
    background?: string;
    /** List of tiles to display on the footer */
    footer?: ApplicationLink[];
}

export interface HelpPageSettings {
    /** List of tiles to display on the help page */
    tiles: ApplicationLink[];
    /** Background CSS for help page */
    background?: string;
    /** Number of columns to display the tiles */
    columns?: number;
}

export type AvailableBookingFields =
    | 'id'
    | 'space_list'
    | 'title'
    | 'date'
    | 'duration'
    | 'organiser'
    | 'attendees'
    | 'title'
    | 'type'
    | 'catering'
    | 'recurrence'
    | 'body'
    | 'configuration';

export type AvailableMapBookingFields =
    | 'id'
    | 'title'
    | 'organiser'
    | 'date'
    | 'duration'
    | 'notes'
    | 'head_count';

export interface BookingFlowSettings {
    /** List of available booking types */
    booking_types: Identity[];
    /** List of LOS group */
    los_groups: HashMap<string>;
    /** Fields to show on the booking form */
    show_fields: AvailableBookingFields[];
    /** Whether notes and booking descriptions should use HTML */
    html_body: boolean;
    /** Whether booking flow should allow the user to book multiple spaces in one booking */
    multiple_spaces: boolean;
    /** Default start time in hours for desk booking */
    desk_start: number;
    /** Defaut breakdown in minutes */
    breakdown: number;

    capacity_filters: Identity[];
    [name: string]: any;
}

export interface SpaceDisplaySettings {
    /** Show images for space UI elements */
    show_images: boolean;
}

export interface UserDirectorySettings {
    /** Whether to show user avatars */
    show_avatars: boolean;
    /** Minimum character length of search string to need before starting a user search */
    min_search_length?: number;
}

export interface ExploreMapSettings {
    /** Mapping for statuses for elements on the map with the keys in the format `<type>-<status>`. May also be used for legend items with matching keys */
    colors: HashMap<string>;
    /** Whether user is allowed to change from the default building on the view */
    can_select_building: boolean;
    /** Whether legend group names should be shown */
    show_legend_group_names: boolean;
    /** Mapping of groups of lists of map legend items */
    legend: HashMap<MapLegendItem[]>;
}

export interface AnalyticsSettings {
    /** Setting to enable google analytics */
    enabled: boolean;
    /** Google analytics tracking id */
    tracking_id: string;
}

/** Metadata for creating legend items for a map */
export type MapLegendItem = MapLegendColourItem | MapLegendIconItem | BasicMapLegendItem;

/** Metadata for creating legend items for a map */
export interface BasicMapLegendItem {
    /** ID of the item */
    key: string;
    /** Display name of the legend item */
    name: string;
    /** Colour of the legend item */
    color?: string;
    /** Icon of the legend item */
    icon?: ApplicationIcon;
}

/** Metadata for creating legend items with an icon for a map */
export interface MapLegendIconItem extends BasicMapLegendItem {
    icon: ApplicationIcon;
}

/** Metadata for creating legend items with a colour for a map */
export interface MapLegendColourItem extends BasicMapLegendItem {
    color: string;
}

export interface AppLink {
    /** Name of the tile */
    name: string;
    /** Application route the tile will navigate */
    route?: string;
    /** External link the tile will navigate */
    link?: string;
    /** Query parameters to add to the route being navigated to */
    query_params?: HashMap<string | number | boolean>;
    /** Icon associated with the tile */
    icon?: ApplicationIcon;
    /** List of sub-links */
    children?: ApplicationLink[];
    /** Image URL to display with the link */
    background?: string;
}

export interface ApplicationLinkInternal extends AppLink {
    route: string;
}

export interface ApplicationLinkExternal extends AppLink {
    link: string;
}

/** Metadata for linking to internal or external URLs */
export type ApplicationLink = ApplicationLinkExternal | ApplicationLinkInternal;

export interface ApplicationIcon {
    /** Type of icon */
    type: 'img' | 'icon';
    /** URL to the image used for the icon */
    src?: string;
    /** CSS class to add to icon element */
    class?: string;
    /** Contents to add to icon element */
    content?: string;
    /** Background color for icon */
    background?: string;
}

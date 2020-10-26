
/** Generic Dictionary type */
export interface HashMap<T = any> {
    [key: string]: T;
}

/** Generic data type with identification details */
export interface Identity extends HashMap {
    id: string | number;
    name: string;
    email?: string;
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
    type?: 'img' | 'icon';
    /** URL to the image used for the icon */
    src?: string;
    /** CSS class to add to icon element */
    class?: string;
    /** Contents to add to icon element */
    content?: string;
    /** Background color for icon */
    background?: string;
}

/** Generic event for dialog boxes */
export interface DialogEvent<T = any> {
    /** Reason the event was called */
    reason: 'action' | 'close' | 'reset' | 'loading' | 'done' | 'other',
    metadata?: T;
}

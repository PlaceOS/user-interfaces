/**
 * Assortment of useful types and interfaces
 */

/** Interface for a generic key value object */
export interface HashMap<T = any> {
    [name: string]: T;
}

/** Interface for key value pairs */
export interface Pair<T = any, U = string> {
    key: U;
    value: T;
}

/** Generic interface for objects with identification details */
export interface Identity extends HashMap {
    id: string;
    name: string;
}

/** Loading states for the application */
export interface ApplicationLoadingState {
    [module: string]: LoadingState;
}

/** Loading state of an application module */
export interface LoadingState {
    /** Message to display for the module state */
    message: string;
    /** Whether the loading is completed for the module */
    state: 'loading' | 'complete' | 'failed';
}

/** Basic option used for a select field item */
export interface OptionBlock {
    /** Display string for the time option */
    display: string;
    /** Form field value for the time option */
    value: string;
}

/** Generic event for dialog boxes */
export interface DialogEvent {
    /** Reason the event was called */
    reason: 'action' | 'close' | 'reset' | 'loading' | 'done' | 'other';
    metadata?: any;
}

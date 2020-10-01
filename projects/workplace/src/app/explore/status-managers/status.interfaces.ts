import { HashMap } from 'src/app/common/types';

export interface MapStatus {
    /** Element ID to apply the statuses */
    id: string;
    /** Mapping of CSS styles to add the the element */
    styles: HashMap<string | number>;
    /** Identifier for the current status of the element */
    status_id: string;
}

export interface MapListener {
    /** CSS selector of the element to listen to the event on */
    id: string;
    /** Name of the event to listen */
    event: string;
    /** Optional callback when the event occurs */
    callback?: (_?: any) => void;
}

/** Available statuses for a space */
export type SpaceStatus = 'available' | 'unavailable' | 'requestable' | 'not-bookable';

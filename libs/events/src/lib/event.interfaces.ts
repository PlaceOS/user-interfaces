import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';

export interface FileDetails {
    /** Name of the file */
    name: string;

    /** Blob contents of the file */
    blob: Blob;
}

export interface EventExtensionData {
    /** Whether event is cleaned */
    cleaned?: boolean;
    /** Catering */
    catering?: CateringOrder[];
    /** List of assets assigned to event */
    assets?: AssetRequest[];
    /** Parking */
    needs_parking?: boolean;
    /** Configuration */
    configuration?: any;
    /** Notes */
    notes?: EventNote[];
    /** Catergorisation of external attendees in the event */
    visitor_type?: string;
    /** List of remote attendees */
    remote?: string[];
    /** URL to a meeting/call associated with the booking */
    meeting_link: string;
    /** URL to a meeting/call associated with the booking */
    online_meeting_url: string;
    /** URL to a meeting/call associated with the booking */
    online_meeting_id: string;
    /** URL to a meeting/call associated with the booking */
    online_meeting_provider: string;
    /** Email to override the host of the event with */
    host_override: string;
    /** Name of the organisational department of the host */
    department: string;
    event_type?: string;
    category?: string;
    tags?: string[];
    system_id?: string;
    event_id?: string;
}

export interface RecurrenceDetails {
    /** Start of the recurrence in unix ms */
    start: number;
    /** End of the recurrence in unix ms */
    end: number;
    /** Days of the week (or month) on which the event should be repeated */
    days_of_week: number[];
    _pattern?:
        | 'none'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'month_day'
        | 'yearly'
        | 'custom_display';
    /** Frequency of the event */
    pattern: 'daily' | 'weekly' | 'monthly' | 'month_day' | 'yearly';
    /** Interval to be used with pattern */
    interval: number;
    /** Number of re-occurences to create for this event */
    occurrences?: number;
}

export interface EventListQueryParams {
    /** Comma seperated list of zone ids to filter the events on */
    zone_ids?: string;
    /** Comma seperated list of systems ids to grab events from  */
    system_ids?: string;
    /** Comma seperated list of calendars to grab events from */
    calendars?: string;
    /** Minimum capacity required */
    capacity?: number;
    /** Comma seperated list of features to filter for */
    features?: string;
    /** Unix epoch start time in seconds */
    period_start?: number;
    /** Unix epoch end time in seconds */
    period_end?: number;
}

export interface EventShowQueryParams {
    /** Calendar that the event is associated with  */
    calendar?: string;
    /** System that the event is associated with  */
    system_id?: string;
}

export interface EventDeleteQueryParams extends EventShowQueryParams {
    /** Whether attendees should be notified of this action. Defaults to `true` */
    notify?: boolean;
}

export interface EventNote {
    /** Type of note */
    type?: 'equipment' | 'catering' | 'description' | 'private' | 'other';
    /** Name of the note's author */
    author: string;
    /** Contents of the note */
    message: string;
    /** Time the note was added to the event */
    date: number;
    /** Display value for the time */
    time?: string;
    /** ID of the space associated with the note */
    space?: string;
    /** ID of the catering order associated with the note */
    order_id?: string;
}

export interface TimeBlock {
    start: number;
    end: number;
}

export interface TimePeriod extends Record<string, any> {
    date: number;
    duration: number;
    setup_time?: number;
    breakdown_time?: number;
}

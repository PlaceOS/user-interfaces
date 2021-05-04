import { HashMap } from '@placeos/common';
import { Space } from '@placeos/spaces';
import { User } from '@placeos/users';

import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';

export interface FileDetails {
    /** Name of the file */
    name: string;

    /** Blob contents of the file */
    blob: Blob;
}

export interface EventExtensionData {
    /** Setup in minutes */
    setup?: number;
    /** Breakdown in minutes */
    breakdown?: number;
    /** Whether event is cleaned */
    cleaned?: boolean;
    /** Catering */
    catering?: CateringOrder[];
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
}

export interface RecurrenceDetails {
    /** Start of the recurrence in unix ms */
    start: number;
    /** End of the recurrence in unix ms */
    end: number;
    /** Days of the week (or month) on which the event should be repeated */
    days_of_week: number;
    /** Frequency of the event */
    pattern: 'daily' | 'weekly' | 'monthly';
    /** Interval to be used with pattern */
    interval: number;
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

export interface SpaceRules {
    auto_approve: boolean;
    hide: boolean;
    room_type?: 'client' | 'partner';
    max_length?: number;
    min_length?: number;
}

export interface SpaceCheckOptions {
    user: User;
    space: Space;
    time?: number;
    visitor_type?: string;
    recurr_end?: number;
    duration?: number;
    rules: BookingRuleConditions;
}

export interface BookingRule {
    conditions: BookingRuleConditions;
    rules: {
        book_ahead?: string;
        book_length?: string;
        auto_approve?: boolean;
    };
}

export interface SpaceRuleOptions {
    user: User;
    space: Space;
    time?: number;
    visitor_type?: string;
    recurr_end?: number;
    duration?: number;
    rules?: HashMap<readonly BookingRule[]>;
}

export interface BookingRuleConditions {
    /** List of user groups that the host must be in */
    groups?: string[];
    /** List of locations that the host must be */
    locations?: string[];
    /** Minimum length of a booking */
    min_length?: string;
    /** Maximum length of a booking */
    max_length?: string;
    /** How far in the future this bookings are allowed */
    is_before?: string;
    /** How far in the future this bookings must be */
    is_after?: string;
}

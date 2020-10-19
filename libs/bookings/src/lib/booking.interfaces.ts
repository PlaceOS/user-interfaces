import { HashMap } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';
import { User } from '@user-interfaces/users';

export interface IBookingOptions {
    space: Space;
    date?: number;
    title?: string;
    max_duration?: number;
    min_duration?: number;
}
export interface BookingNote {
    /** Type of note */
    type: 'equipment' | 'catering' | 'description' | 'private' | 'other';
    /** Name of the note's author */
    author: string;
    /** Contents of the note */
    message: string;
    /** Time the note was added to the booking */
    date: number;
    /** Display value for the time */
    time?: string;
    /** ID of the space associated with the note */
    space?: string;
}

export const BOOKING_MUTABLE_FIELDS = [
    'name',
    'email',
    'title',
    'date',
    'duration',
    'organiser',
    'body',
    'type',
    'has_catering',
    'recurrence',
    'space_list',
    'attendees',
    'configuration',
] as const;
type BookingMutableTuple = typeof BOOKING_MUTABLE_FIELDS;
export type BookingMutableFields = BookingMutableTuple[number];

/** Details about recurrence associated with the booking */
export interface BookingRecurrenceDetails {
    /** CRON tab of the recurrence of the event */
    readonly pattern: string;
    /** Interval */
    readonly interval: number;
    /** Unix epoch in ms of the recurrence end date */
    readonly end: number;
    /** Calendar UID of the initial event */
    readonly icaluid: string;
}

export interface SpaceRules {
    auto_approve: boolean;
    hide: boolean;
    room_type?: string;
    max_length?: number;
    min_length?: number;
}

export interface BookingRule {
    conditions: HashMap<string>;
    rules: {
        room_type?: string;
        book_ahead?: string;
        book_length?: string;
        auto_approve?: boolean;
    };
}

export interface SpaceRuleOptions {
    user: User;
    space: Space;
    time?: number;
    duration?: number;
    visitor_type?: string;
    rules?: HashMap<readonly BookingRule[]>;
}

export interface SpaceCheckOptions {
    user: User;
    space: Space;
    time?: number;
    visitor_type?: string;
    duration?: number;
    rules: HashMap<readonly string[] | string>;
}

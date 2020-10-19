import { PlaceSystem } from '@placeos/ts-client';
import {
    startOfDay,
    differenceInMinutes,
    isSameDay,
    add,
    isBefore,
    roundToNearestMinutes,
    addMinutes,
} from 'date-fns';

import { HashMap, Identity, unique } from '@user-interfaces/common';
import { CateringOrder } from '../../../catering/src/lib/catering-order.class';
import { User } from '../../../users/src/lib/user.class';
import { Space } from '../../../spaces/src/lib/space.class';

import { EventNote } from './event.interfaces';
import { eventStatus } from './helpers';

let _default_user: Identity = { id: 'default', name: 'Default User' };

export function setDefaultCreator(user: Identity) {
    if (user) _default_user = user;
}

export interface FileDetails {
    /** Name of the file */
    name: string;
    /** Blob contents of the file */
    blob: Blob;
}

export interface ExtDataDetails extends HashMap {
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

/** User's calendar event/booking */
export class CalendarEvent {
    /** ID of the calendar event */
    public readonly id: string;
    /** Status of the event */
    public readonly status: 'confirmed' | 'tentative' | 'cancelled' | 'none';
    /** Email address of the host */
    public readonly host: string;
    /** ID of the calendar associated with the event */
    public readonly calendar: string;
    /** Email address of the event creator */
    public readonly creator: string;
    /** List of attendees of the event */
    public readonly attendees: User[];
    /** List of attendees of the event */
    public readonly resources: Space[];
    /** Summary of the event details */
    public readonly title: string;
    /** Extended details of the event */
    public readonly body: string;
    /** Whether event details should be private */
    public readonly private: boolean;
    /** Whether event occurs over the full day */
    public readonly all_day: boolean;
    /** Unix epoch of the start time of the event */
    public readonly date: number;
    /** Duration of the event in minutes */
    public readonly duration: number;
    /** IANA timezone string for the event location */
    public readonly timezone: string;
    /** Location details for the event */
    public readonly location: string;
    /** Whether this event is recurring */
    public readonly recurring: boolean;
    /** URL to a conference call application instance */
    public readonly meeting_link: string;
    /** Details about the event's recurrence */
    public readonly recurrence: RecurrenceDetails;
    /** ID of the parent recurring event */
    public readonly recurring_master_id: string;
    /** File attachements for the event */
    public readonly attachments: FileDetails[];
    /** Extra data associated with the event */
    public readonly extension_data: ExtDataDetails;
    /** System */
    public readonly system: PlaceSystem;
    /** Old System id */
    public readonly old_system: PlaceSystem;
    /** Host user details of the event */
    public readonly organiser: Identity;
    /** Whether user is allowed to access the lift */
    public readonly can_access_lift: boolean;
    /** Whether the host has requested catering for this event */
    public readonly has_catering: boolean;
    /** Whether the event has external attendees */
    public readonly has_visitors: boolean;
    /** List of catering orders for the event */
    public readonly catering: CateringOrder[];
    /** Whether a parking spot is needed for attendees */
    public readonly needs_parking: boolean;
    /** Name of the type of external attendees */
    public readonly visitor_type: string;
    /** Setup time before event start in minutes */
    public readonly setup: number;
    /** Breakdown/Cleanup time after event start in minutes */
    public readonly breakdown: number;
    /** List of email addresses associated with the event attendees */
    public readonly attendee_emails: readonly string[];
    /** List of external attendees associated with the event */
    public readonly guests: readonly Identity[];
    /** Type of event */
    public readonly type: 'cancelled' | 'external' | 'internal';
    /** List of notes associated with the event */
    public readonly notes: readonly EventNote[];
    /** First space in the resources list */
    public readonly space: Identity;
    /** Whether the time of the booking has been changed */
    public time_changed: boolean;
    /** Master event */
    public master?: CalendarEvent;

    constructor(data: Partial<CalendarEvent> = {}) {
        this.id = data.id || '';
        this.calendar = data.calendar || '';
        this.creator = (data.creator || _default_user.email).toLowerCase();
        this.host = (data.host || this.creator || '').toLowerCase();
        const attendees = data.attendees || [];
        this.attendees = attendees.filter((user: any) => !user.resource).map(u => new User(u));
        this.resources =
            data.resources ||
            attendees.filter((user: any) => user.resource).map(s => new Space(s as any));
        this.title = data.title || '';
        this.body = data.body || '';
        this.private = !!data.private;
        this.all_day = !!data.all_day;
        const time = data.event_start * 1000 || data.date;
        const start = time
            ? new Date(time)
            : roundToNearestMinutes(new Date().setMinutes(new Date().getMinutes() + 3), {
                  nearestTo: 5,
              });
        this.date = this.all_day ? startOfDay(start).valueOf() : start.valueOf();
        this.duration = this.all_day
            ? 24 * 60
            : data.duration || differenceInMinutes(new Date(data.event_end * 1000), start) || 60;
        this.timezone = data.timezone;
        this.location = data.location || '';
        this.recurring = data.recurring;
        this.recurring_master_id = data.recurring_master_id;
        this.meeting_link = data.meeting_link || '';
        this.organiser = this.attendees.find((user) => user.email === this.host);
        this.master = data.master ? new CalendarEvent(data.master) : null;
        if (data.recurring) {
            this.recurrence = {
                start:
                    start.valueOf() ||
                    new Date((data.recurrence as any).range_start * 1000).valueOf(),
                end:
                    data.recurrence.end ||
                    new Date((data.recurrence as any).range_end * 1000).valueOf(),
                interval: data.recurrence.interval,
                pattern: data.recurrence.pattern,
                days_of_week: data.recurrence.days_of_week,
            };
        } else {
            this.recurrence = {} as any;
        }
        this.system = data.system;
        if (this.system?.email) {
            this.resources.push(new Space(this.system as any));
        }
        this.old_system = data.old_system || data.system;
        this.attachments = data.attachments || [];
        this.extension_data = data.extension_data || {};
        this.extension_data.catering = (data.catering || this.extension_data.catering || []).map(
            (i) => new CateringOrder({ ...i, event: this })
        );
        this.extension_data.needs_parking = !!data.needs_parking;
        this.extension_data.visitor_type =
            data.visitor_type || this.extension_data.visitor_type || '';
        this.can_access_lift = data.can_access_lift || this.extension_data.can_access_lift || false;
        this.resources = unique(this.resources, 'email');
        this.status = eventStatus(this) || 'none';
        /** Simplified extension properties */
        this.has_visitors = !!this.attendees.find(
            (user) => user.visit_expected || user.is_external
        );
        this.has_catering = this.extension_data.catering && !!this.extension_data.catering.length;
        this.catering = this.extension_data.catering || [];
        this.needs_parking = !!this.extension_data.needs_parking;
        this.setup = this.extension_data.setup || 0;
        this.breakdown = this.extension_data.breakdown || 0;
        this.visitor_type = this.extension_data.visitor_type || '';
        this.type =
            this.status === 'cancelled' ? 'cancelled' : this.has_visitors ? 'external' : 'internal';
        this.attendee_emails = this.attendees.map((u) => u.email);
        this.guests = this.attendees.filter((f) => !!f.visit_expected) as any;
        this.notes = this.extension_data.notes || [];
        this.space = this.resources[0] || null;
    }

    public get is_today(): boolean {
        return isSameDay(new Date(this.date), new Date());
    }

    /** Cleaning status */
    public get cleaning_status(): 'pending' | 'done' | '' {
        return this.extension_data.cleaned ? 'done' : '';
    }

    /**
     * Convert class data to simple JSON object
     */
    public toJSON(): HashMap {
        const obj: HashMap = { ...this };
        const end = Math.floor(
            add(new Date(this.date), { minutes: this.duration }).valueOf() / 1000
        );
        obj.event_start = Math.floor(this.date / 1000);
        obj.event_end = end;
        const attendees = this.attendees;
        if (this.recurring) {
            obj.recurrence = {
                ...this.recurrence,
                range_start: obj.event_start,
                range_end: Math.floor(new Date(this.recurrence.end).valueOf() / 1000),
            };
        } else {
            obj.recurrence = null;
        }
        obj.attendees = unique(attendees, 'email');
        if (!this.all_day) {
            obj.extension_data.breakdown = 15;
        }
        obj.extension_data.catering = obj.extension_data.catering.map(
            (i) => new CateringOrder({ ...i, event: null })
        );
        obj.system_id = this.system?.id;
        delete obj.date;
        delete obj.duration;
        return obj;
    }

    /** Status of the booking */
    public get state(): 'future' | 'upcoming' | 'done' | 'started' | 'in_progress' {
        const now = new Date();
        const date = new Date(this.date);
        if (isBefore(now, add(date, { minutes: -15 }))) {
            return 'future';
        } else if (isBefore(now, date)) {
            return 'upcoming';
        } else if (isBefore(now, add(date, { minutes: 15 }))) {
            return 'started';
        } else if (isBefore(now, add(date, { minutes: this.duration }))) {
            return 'in_progress';
        }
        return 'done';
    }

    public get event_start(): number {
        return Math.floor(new Date(this.date).valueOf() / 1000);
    }

    public get event_end(): number {
        return Math.floor(addMinutes(new Date(this.date), this.duration).valueOf() / 1000);
    }

    public get can_check_in(): boolean {
        return isSameDay(new Date(), new Date(this.date));
    }
}

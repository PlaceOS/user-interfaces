import { HashMap, Identity, unique } from '@placeos/common';
import { PlaceSystem } from '@placeos/ts-client';
import {
    add,
    addMinutes,
    differenceInMinutes,
    getUnixTime,
    isAfter,
    isBefore,
    isSameDay,
    roundToNearestMinutes,
    set,
} from 'date-fns';
import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';
import { Space } from 'libs/spaces/src/lib/space.class';
import { GuestUser, User } from 'libs/users/src/lib/user.class';
import {
    EventExtensionData,
    FileDetails,
    RecurrenceDetails,
} from './event.interfaces';
import { eventStatus } from './helpers';

let _default_user: Identity = { id: 'default', name: 'Default User' };

export function setDefaultCreator(user: Identity) {
    if (user) _default_user = user;
}

type CalendarEventExtended = CalendarEvent & EventExtensionData;

/** User's calendar event/booking */
export class CalendarEvent {
    /** ID of the calendar event */
    public readonly id: string;
    /** Status of the event */
    public readonly status: 'approved' | 'tentative' | 'declined' | 'none';
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
    /** Unix epoch in seconds of the start time of the event */
    public readonly event_start: number;
    /** Unix epoch in seconds of the end time of the event */
    public readonly event_end: number;
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
    /** URL of the associated meeting */
    public readonly meeting_url: string;
    /** URL of the associated meeting */
    public readonly meeting_id: string;
    /** URL of the associated meeting */
    public readonly meeting_provider: string;
    /** Whether this event is recurring */
    public readonly recurring: boolean;
    /** Details about the event's recurrence */
    public readonly recurrence: RecurrenceDetails;
    /** ID of the parent recurring event */
    public readonly recurring_master_id: string;
    /** Whether event details should be private */
    public readonly private: boolean;
    /** File attachements for the event */
    public readonly attachments: FileDetails[];
    /** Extra data associated with the event */
    public readonly extension_data: Partial<EventExtensionData>;
    /** System associated with the event */
    public readonly system: PlaceSystem;
    /** Previous system associated with the event */
    public readonly old_system: PlaceSystem;
    /** Host user details of the event */
    public readonly organiser: User;
    /** Type of event */
    public readonly type: 'cancelled' | 'external' | 'internal';
    /** Master event */
    public master?: CalendarEvent;

    /** Get field from extension data */
    public ext<K extends keyof EventExtensionData>(key: K) {
        return this.extension_data[key];
    }

    constructor(data: Partial<CalendarEventExtended> = {}) {
        this.id = data.id || '';
        this.event_start =
            data.event_start ||
            getUnixTime(
                data.date ||
                    roundToNearestMinutes(addMinutes(new Date(), 3), {
                        nearestTo: 5,
                    })
            );
        this.event_end =
            data.event_end ||
            getUnixTime(
                addMinutes(this.event_start * 1000, data.duration || 30)
            );
        this.calendar = data.calendar || '';
        this.creator =
            (data.creator || _default_user.email)?.toLowerCase() || '';
        this.host = (
            data.host ||
            this.creator ||
            _default_user.email ||
            ''
        ).toLowerCase();
        const attendees: HashMap = data.attendees || [];
        this.attendees = attendees
            .filter((user: any) => !user.resource)
            .map((u) => new User(u));
        this.resources =
            unique(
                data.resources ||
                    attendees
                        .filter((user) => user.resource)
                        .map((s) => new Space(s)),
                'email'
            ) || [];
        this.title = data.title || '';
        this.body = data.body || '';
        this.private = !!data.private;
        this.all_day = !!data.all_day;
        this.date = this.event_start * 1000;
        this.duration = this.all_day
            ? 24 * 60
            : data.duration ||
              differenceInMinutes(data.event_end * 1000, this.date) ||
              30;
        this.timezone = data.timezone || '';
        this.meeting_url = data.meeting_url || data.online_meeting_url || '';
        this.meeting_id = data.meeting_id || data.online_meeting_id || '';
        this.meeting_provider =
            data.meeting_provider || data.online_meeting_provider || '';
        this.recurring = !!data.recurring;
        this.recurring_master_id = data.recurring_master_id || '';
        this.organiser = this.attendees.find(
            (user) => user.email === this.host
        );
        this.master = data.master ? new CalendarEvent(data.master) : null;
        if (data.recurring) {
            this.recurrence = {
                start:
                    this.event_start * 1000 ||
                    new Date(
                        (data.recurrence as any).range_start * 1000
                    ).valueOf(),
                end:
                    data.recurrence.end ||
                    new Date(
                        (data.recurrence as any).range_end * 1000
                    ).valueOf(),
                interval: data.recurrence.interval,
                pattern: data.recurrence.pattern,
                days_of_week: data.recurrence.days_of_week,
            };
        } else {
            this.recurrence = {} as any;
        }
        const system = data.system;
        if (
            system?.email &&
            !this.resources.find((_) => _.email === system.email)
        ) {
            this.resources.push(new Space(system as any));
        }
        this.system = system || (this.resources[0] as any) || null;
        this.old_system = data.old_system || data.system;
        this.attachments = data.attachments || [];
        this.extension_data = data.extension_data || {};
        this.status = eventStatus(this) || 'none';
        this.location = data.location || this.space?.display_name || this.space?.name || '';
        this.type =
            this.status === 'declined'
                ? 'cancelled'
                : this.attendees.find((_) => _.is_external)
                ? 'external'
                : 'internal';
        for (const key in data) {
            if (!(key in this)) {
                this.extension_data[key] =
                    data[key] || this.extension_data[key];
            }
        }
        this.extension_data.catering = (this.extension_data.catering || []).map(
            (i) => new CateringOrder({ ...i, event: this })
        );
    }

    /** List of external attendees associated with the event */
    public get guests() {
        return this.attendees.filter((f) => !!f.is_external) as GuestUser[];
    }
    /** Primary space associated with the booking */
    public get space() {
        return this.resources[0] || null;
    }
    public get is_today(): boolean {
        return isSameDay(new Date(this.date), new Date());
    }

    /**
     * Convert class data to simple JSON object
     */
    public toJSON(): HashMap {
        const obj: HashMap = { ...this };
        const end = getUnixTime(addMinutes(this.date, this.duration));
        const date = this.all_day ? set(this.date, { hours: 12 }) : this.date;
        obj.event_start = getUnixTime(date);
        obj.event_end = end;
        const attendees = this.attendees;
        if (this.recurring) {
            obj.recurrence = {
                ...this.recurrence,
                range_start: obj.event_start,
                range_end: getUnixTime(this.recurrence.end),
            };
        }
        obj.recurrence = obj.recurrence
            ? Object.keys(obj.recurrence).length
                ? obj.recurrence
                : null
            : null;
        obj.attendees = unique(attendees, 'email');
        if (!this.all_day) {
            obj.extension_data.breakdown = 15;
        }
        obj.extension_data.catering = obj.extension_data.catering.map(
            (i) => new CateringOrder({ ...i, event: null })
        );
        obj.system_id = this.system?.id;
        delete obj.catering;
        delete obj.date;
        delete obj.duration;
        delete obj.status;
        return obj;
    }

    /** Status of the booking */
    public get state():
        | 'future'
        | 'upcoming'
        | 'done'
        | 'started'
        | 'in_progress' {
        const now = new Date();
        const date = this.date;
        if (isBefore(now, add(date, { minutes: -15 }))) return 'future';
        if (isBefore(now, date)) return 'upcoming';
        if (isBefore(now, add(date, { minutes: 15 }))) return 'started';
        if (isBefore(now, add(date, { minutes: this.duration })))
            return 'in_progress';
        return 'done';
    }

    public get can_check_in(): boolean {
        const now = new Date();
        return (
            this.is_today ||
            (isAfter(now, this.date) &&
                isBefore(now, addMinutes(this.date, this.duration)))
        );
    }
}

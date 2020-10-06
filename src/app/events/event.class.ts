import {
    startOfDay,
    differenceInMinutes,
    isSameDay,
    add,
    format,
    formatDuration,
    isBefore,
    roundToNearestMinutes,
} from 'date-fns';

import { HashMap } from '../common/types';
import { EventNote } from './event.interfaces';
import { User, GuestUser } from '../users/user.class';
import { Space } from '../spaces/space.class';
import { unique } from '../common/general';
import { CateringOrder } from '../catering/catering-order.class';

let _default_user = new User();

export function setDefaultCreator(user: User) {
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
    /** Master event */
    public master: CalendarEvent;
    /** File attachements for the event */
    public readonly attachments: FileDetails[];
    /** Extra data associated with the event */
    public readonly extension_data: ExtDataDetails;
    /** System */
    public readonly system: Space;
    /** Old System id */
    public readonly old_system: Space;
    /** Host user details of the meeting */
    public readonly organiser: User;
    /** Whether user is allowed to access the lift */
    public readonly can_access_lift: boolean;
    /** Whether the time of the booking has been changed */
    public time_changed: boolean;

    /** List of catering orders for event */
    public get catering(): CateringOrder[] {
        return this.extension_data.catering || [];
    }

    /** List of catering orders for event */
    public get configuration(): string {
        return this.extension_data.configuration;
    }

    /** Whether a parking spot is needed for attendees */
    public get needs_parking(): boolean {
        return this.extension_data.needs_parking;
    }

    /** Whether booking has catering */
    public get has_catering(): boolean {
        return this.extension_data.catering && !!this.extension_data.catering.length;
    }

    public get has_visitors(): boolean {
        return !!this.attendees.find((user) => user.visit_expected || user.is_external);
    }

    constructor(data: Partial<CalendarEvent> = {}) {
        this.id = data.id || '';
        this.status = data.status || 'none';
        this.host = (data.host || '').toLowerCase();
        this.calendar = data.calendar || '';
        this.creator = (data.creator || _default_user.email).toLowerCase();
        const attendees = data.attendees || [];
        this.attendees = attendees.filter((user: any) => !user.resource).map((u) => new User(u));
        this.resources =
            data.resources ||
            attendees.filter((user: any) => user.resource).map((s) => new Space(s));
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
        this.organiser = this.attendees.find((user) => user.email === this.host);;
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
            this.resources.push(new Space(this.system));
        }
        this.old_system = data.old_system || data.system;
        this.attachments = data.attachments || [];
        this.extension_data = data.extension_data || {};
        this.extension_data.catering = (data.catering || this.extension_data.catering || []).map(
            (i) => new CateringOrder({ ...i, event: this })
        );
        this.extension_data.configuration = data.configuration || '';
        this.extension_data.needs_parking = !!data.needs_parking;
        this.extension_data.visitor_type =
            data.visitor_type || this.extension_data.visitor_type || '';
        this.can_access_lift = data.can_access_lift || this.extension_data.can_access_lift || false;
        this.resources = unique(this.resources, 'email');
    }

    public get visitor_type(): string {
        return this.extension_data.visitor_type;
    }

    public get is_today(): boolean {
        return isSameDay(new Date(this.date), new Date());
    }

    public get type(): string {
        return this.cancelled ? 'cancelled' : this.has_visitors ? 'external' : 'internal';
    }

    /** Map of display strings */
    public get display(): { [id: string]: any } {
        const start = new Date(this.date);
        const end = add(new Date(this.date), { minutes: this.duration });

        return {
            date: format(start, 'do MMM yyyy'),
            time: `${format(start, 'h:mma')} - ${format(end, 'h:mma')}`,
            start: format(start, 'h:mma'),
            start_long: format(start, 'do MMM yyyy, h:mm B'),
            end: format(end, 'h:mma'),
            end_long: format(end, 'do MMM yyyy, h:mm B'),
            duration: formatDuration({ minutes: this.duration }),
        };
    }

    /** Cleaning status */
    public get cleaning_status(): 'pending' | 'done' | '' {
        return this.extension_data.cleaned ? 'done' : ''
    }

    /** Display cleaning time */
    public get cleaning_time(): string {
        if (this.all_day) {
            return '';
        }
        if (!this.breakdown) {
            return this.display.end;
        }
        const end = add(new Date(this.date), { minutes: this.duration });
        const breakdown_end = format(add(end, { minutes: this.breakdown }), 'h:mm');
        return `${format(end, 'h:mm')}-${breakdown_end}`;
    }

    public get notes(): any[] {
        return this.extension_data.notes || [];
    }

    /** Room status - Based on the reponse_status of the resources */
    public get room_status(): 'confirmed' | 'tentative' | 'cancelled' {
        if (this.resources?.length) {
            if (this.resources.every((i) => i.response_status === 'accepted')) {
                return 'confirmed';
            } else if (
                this.resources.some(
                    (i) => i.response_status === 'tentative' || i.response_status === 'needsAction'
                )
            ) {
                return 'tentative';
            } else {
                return 'cancelled';
            }
        } else {
            return 'confirmed';
        }
    }

    /** Return the first space in the resource array */
    public get space(): Space {
        return this.resources[0];
    }

    public get cancelled(): boolean {
        return this.room_status === 'cancelled';
    }

    public get confirmed(): boolean {
        return this.room_status === 'confirmed';
    }

    public get tentative(): boolean {
        return this.room_status === 'tentative';
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
                range_start: obj.event_start,
                range_end: Math.floor(new Date(this.recurrence.end).valueOf() / 1000),
                days_of_week: this.recurrence.days_of_week,
                interval: this.recurrence.interval,
                pattern: this.recurrence.pattern,
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

    /** Setup  */
    public get setup(): number {
        return this.extension_data.setup || 0;
    }

    /** Breakdown */
    public get breakdown(): number {
        return this.extension_data.breakdown || 0;
    }

    public get event_start(): number {
        return Math.floor(new Date(this.date).valueOf() / 1000);
    }

    public get event_end(): number {
        return Math.floor(add(new Date(this.date), { minutes: this.duration }).valueOf() / 1000);
    }

    /** Display value for the date */
    public get date_string(): string {
        return this.display.date;
    }
    /** Display valuie for the start and end times of the event */
    public get time_period(): string {
        return this.display.time;
    }
    /** Display value for the start time of the event */
    public get start_time(): string {
        return this.display.start;
    }
    /** Display value for the end time of the event */
    public get end_time(): string {
        return this.display.end;
    }
    /** Display value for the duration of the event */
    public get length_string(): string {
        return this.display.duration;
    }

    /** Display value for the level of the first space in the event */
    public get level(): string {
        return this.display.level;
    }

    public get attendee_emails(): string[] {
        return (this.attendees || []).map((m) => m.email);
    }

    public get guests(): GuestUser[] {
        return this.attendees.filter((f) => !!f.visit_expected) as any;
    }

    public get can_check_in(): boolean {
        return isSameDay(new Date(), new Date(this.date));
    }

    /** Show recurrence details */
    public get recurrence_details(): string {
        let details = '';
        if (this.recurrence) {
            const { interval, pattern, start, end } = this.recurrence;
            if (interval && interval > 1) {
                details = details.concat(`Every ${interval}`);
            }
            switch (pattern) {
                case 'daily':
                    if (interval && interval > 1) {
                        details = details.concat(' days');
                    } else {
                        details = details.concat('Daily');
                    }
                    break;
                case 'weekly':
                    if (interval && interval > 1) {
                        details = details.concat(' weeks');
                    } else {
                        details = details.concat('Weekly');
                    }
                    break;
                case 'monthly':
                    if (interval && interval > 1) {
                        details = details.concat(' months');
                    } else {
                        details = details.concat('Monthly');
                    }
                    break;
            }
            details = details.concat(`, until ${format(end, 'MMM do, yyyy')}`);
        }
        return details;
    }
}

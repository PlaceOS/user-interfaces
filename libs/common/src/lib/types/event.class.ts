import { PlaceSystem } from '@placeos/ts-client';
import {
    add,
    addDays,
    addMinutes,
    addMonths,
    addWeeks,
    addYears,
    differenceInMinutes,
    endOfDay,
    format,
    getUnixTime,
    isAfter,
    isBefore,
    isSameDay,
    roundToNearestMinutes,
    startOfDay,
} from 'date-fns';
import { RecurrenceDetails } from '../formatting';
import { removeEmptyFields, unique } from '../general';
import { endOfDayInTimezone, startOfDayInTimezone } from '../timezone-helpers';
import { LinkedBooking } from '../types';
import { AssetRequest } from './asset-request.class';
import { CateringOrder } from './catering.class';
import { Space } from './space.class';
import { GuestUser, User } from './user.class';

let _default_user = {
    id: 'default',
    name: 'Default User',
    email: 'default@example.com',
} as User;

export function setDefaultCreator(user: User) {
    if (user) _default_user = user;
}

const DAYS_OF_WEEK = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
];

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
    /** Whether a custom-period booking should still behave as all day in the UI */
    custom_all_day?: boolean;
    event_type?: string;
    /** Event category */
    category?: string;
    /** List of tags associated with the event */
    tags?: string[];
    system_id?: string;
    event_id?: string;
    /** Whether event is featured */
    featured?: boolean;
    /** Whether the event is in-person, online or both */
    attendance_type?: 'ONLINE' | 'ONSITE' | 'ANY';
    /** List of image URLs associated with the event */
    images?: string[];
    /** Whether the event is a shared group event */
    shared_event?: boolean;
    /** Access level of the event */
    view_access: 'PRIVATE' | 'OPEN' | 'PUBLIC';
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

type CalendarEventExtended = CalendarEvent & EventExtensionData;

type Visibility = 'normal' | 'personal' | 'public' | 'private' | 'confidential';

export function eventStatus(
    details: Record<string, any>,
): 'approved' | 'tentative' | 'declined' {
    if (details.status === 'cancelled') return 'declined';
    if (details.resources?.length) {
        if (
            details.resources.every(
                (i) =>
                    i.response_status === 'accepted' ||
                    i.response_status === 'confirmed' ||
                    details.approved,
            )
        ) {
            return 'approved';
        } else if (
            details.resources.some(
                (i) =>
                    i.response_status === 'tentative' ||
                    i.response_status === 'needsAction',
            )
        ) {
            return 'tentative';
        }
        return 'declined';
    }
    return 'approved';
}

export function parseRecurrence(data: RecurrenceDetails) {
    const start = data.start || (data as any).range_start * 1000;
    let end =
        data.end ||
        ((data as any).range_end ? (data as any).range_end * 1000 : undefined);
    if (!end && data.occurrences > 1) {
        switch (data.pattern) {
            case 'daily':
                end = addDays(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval,
                ).valueOf();
                break;
            case 'weekly':
                end = addWeeks(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval,
                ).valueOf();
                break;
            case 'month_day':
            case 'monthly':
                end = addMonths(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval,
                ).valueOf();
                end = addDays(end, 7).valueOf();
                break;
            case 'yearly':
                end = addYears(
                    start || Date.now(),
                    (data.occurrences - 1) * data.interval,
                ).valueOf();
                break;
        }
    }
    return {
        range_start: getUnixTime(startOfDay(start)),
        range_end: getUnixTime(endOfDay(end)),
        interval: data.interval,
        pattern: data.pattern,
        days_of_week:
            data.days_of_week?.map((_) =>
                typeof _ === 'number' ? DAYS_OF_WEEK[_] : _,
            ) || [],
    };
}

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
    public readonly recurring_event_id: string;
    /** Whether event details should be private */
    public readonly private: boolean;
    /** Permission level for the event */
    public readonly permission: string;
    /** Visibility level for the event */
    public readonly visibility: Visibility;
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
    /** Whether event has been deleted */
    public readonly deleted: boolean;
    /** Whether this event was from a PlaceOS booking instead of a user calendar */
    public readonly from_bookings: boolean;
    /** Master event */
    public master?: CalendarEvent;
    /** Unique identifier of the event */
    public readonly ical_uid: string;
    /** Mailbox email address of the event */
    public readonly mailbox: string;
    /** Setup in seconds */
    public readonly setup_time?: number;
    /** Breakdown in seconds */
    public readonly breakdown_time?: number;
    /** Bookings that a linked to this event */
    public readonly linked_bookings: LinkedBooking[];
    /** Whether changes to this event should update the parent event */
    public readonly update_master: boolean;
    /**  */
    public readonly date_end: number;

    public readonly is_system_event: boolean;

    public get images() {
        return this.extension_data.images || [];
    }

    public get is_all_day() {
        return this.all_day || this.duration >= 12 * 60;
    }

    public get view_access() {
        return this.extension_data.view_access || 'OPEN';
    }

    /** Get field from extension data */
    public ext<K extends keyof EventExtensionData>(key: K) {
        return this.extension_data[key];
    }

    constructor(data: Partial<CalendarEventExtended> = {}) {
        const custom_all_day = !!(
            data.extension_data?.custom_all_day || (data as any).custom_all_day
        );
        this.id = data.event_id || data.id || '';
        this.event_start =
            data.event_start ||
            getUnixTime(
                data.date ||
                    roundToNearestMinutes(addMinutes(new Date(), 3), {
                        nearestTo: 5,
                    }),
            );
        this.event_end =
            data.event_end ||
            getUnixTime(data.date_end || 0) ||
            getUnixTime(
                addMinutes(this.event_start * 1000, data.duration || 30),
            );
        this.calendar = data.calendar || '';
        this.creator =
            (data.creator || _default_user.email)?.toLowerCase() || '';
        this.host = (
            data.host ||
            this.creator ||
            (data as any).host_email ||
            _default_user.email ||
            ''
        ).toLowerCase();
        const attendees = data.attendees || [];
        const system_email = (data.system?.email || '').toLowerCase();
        const is_system_resource = (user: Partial<User>) =>
            !!(user as any).resource ||
            (!!system_email && user.email?.toLowerCase() === system_email);
        this.attendees = attendees
            .filter((user: any) => !is_system_resource(user))
            .map((u) => new User(u));
        this.resources =
            unique(
                data.resources ||
                    attendees
                        .filter((user) => is_system_resource(user as any))
                        .map((s) => new Space(s as any)),
                'email',
            ) || [];
        this.title = data.title;
        this.body = (data.body || '').replace(
            /&lt;&lt;&lt;.*&gt;&gt;&gt;/g,
            '',
        );
        this.is_system_event = (data.body || this.body).includes(
            'main_event_id',
        );
        this.private = !!data.private;
        this.all_day = !!data.all_day || custom_all_day;
        this.timezone =
            data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.date = this.event_start * 1000 || this.date;
        this.date_end = this.event_end * 1000 || this.date_end;
        this.duration = differenceInMinutes(this.date_end, this.date);
        if (this.all_day) {
            if (!data.duration && !data.date_end && !data.event_end) {
                (this as any).date = startOfDayInTimezone(
                    this.date,
                    this.timezone,
                );
                (this as any).duration = 24 * 60 - 1;
                (this as any).date_end = endOfDayInTimezone(
                    this.date,
                    this.timezone,
                );
            } else if (this.duration % (24 * 60) === 0) {
                (this as any).date = startOfDayInTimezone(
                    this.date,
                    this.timezone,
                );
                (this as any).duration = Math.max(1, this.duration - 1);
                (this as any).date_end = endOfDayInTimezone(
                    this.date,
                    this.timezone,
                );
            }
        }
        const matches = this.body.match(/\[ID\|([^\]]+)\]/);
        const associated_id = matches ? matches[1] : null;
        this.meeting_url = data.meeting_url || data.online_meeting_url || '';
        this.meeting_id =
            associated_id || data.meeting_id || data.online_meeting_id || '';
        this.meeting_provider =
            data.meeting_provider || data.online_meeting_provider || '';
        this.recurring = !!data.recurring;
        this.recurring_event_id = data.recurring_event_id || '';
        this.organiser = this.attendees.find(
            (user) => user.email === this.host,
        );
        this.from_bookings = data.from_bookings ?? false;
        this.master = data.master ? new CalendarEvent(data.master) : null;
        this.mailbox = data.mailbox || '';
        this.ical_uid = data.ical_uid;
        this.linked_bookings = data.linked_bookings || [];
        this.update_master = data.update_master ?? false;
        if (data.recurring) {
            this.recurrence = {
                start:
                    data.recurrence?.start ||
                    this.event_start * 1000 ||
                    new Date(
                        (data.recurrence as any).range_start * 1000,
                    ).valueOf(),
                end:
                    data.recurrence.end ||
                    new Date(
                        (data.recurrence as any).range_end * 1000,
                    ).valueOf(),
                interval: data.recurrence.interval,
                pattern: data.recurrence.pattern,
                occurrences: data.recurrence.occurrences,
                days_of_week:
                    data.recurrence.days_of_week?.map((_) =>
                        typeof _ === 'number' ? _ : DAYS_OF_WEEK.indexOf(_),
                    ) || [],
                nth_of_month: data.recurrence.nth_of_month,
            };
        } else {
            this.recurrence = {} as any;
        }
        const system = data.system;
        if (
            system?.email &&
            !this.resources.find(
                (_) => _.email.toLowerCase() === system.email.toLowerCase(),
            )
        ) {
            this.resources.push(
                new Space({
                    ...(system as any),
                    response_status: data.status || 'needsAction',
                }),
            );
        }
        this.system = system || (this.resources[0] as any) || null;
        if (!system && data.system_id) {
            this.system = { id: data.system_id } as any;
        }
        this.old_system = data.old_system || data.system;
        this.attachments = data.attachments || [];
        this.extension_data = data.extension_data || {};
        this.deleted = !!(data as any).deleted;
        this.status = eventStatus({ ...data, ...this }) || 'none';
        this.location =
            data.location || this.space?.display_name || this.space?.name || '';
        this.setup_time = data.setup_time || 0;
        this.breakdown_time = data.breakdown_time || 0;
        this.visibility = data.visibility || 'normal';
        this.type =
            this.deleted || this.status === 'declined'
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
        const simple_event = {
            date: this.date,
            duration: this.duration,
            date_end: this.date_end,
            all_day: this.all_day,
            space: this.space,
            organiser: this.organiser,
        };
        this.extension_data.catering = (this.extension_data.catering || []).map(
            (i) => new CateringOrder({ ...i, event: simple_event } as any),
        );
        const linked_assets = this.linked_bookings
            .filter((_) => _.booking_type === 'asset-request')
            .map((_) => _.extension_data?.request)
            .filter((_) => !!_);
        const asset_requests =
            (linked_assets.length
                ? linked_assets
                : this.extension_data.assets) || [];
        this.extension_data.images =
            this.extension_data.images || data.images || [];
        this.extension_data.view_access =
            this.extension_data.view_access ||
            data.view_access ||
            (data.permission?.toUpperCase() as any) ||
            'OPEN';
        this.permission = data.permission || this.extension_data.view_access;
        this.extension_data.assets = asset_requests.map(
            (i) => new AssetRequest({ ...i, event: simple_event } as any),
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
        return isSameDay(this.date, Date.now());
    }

    public get valid_catering() {
        return (this.ext('catering') || []).filter(
            (order) => order.deliver_at < this.date_end,
        );
    }

    _valid_asset_cache = [];
    _valid_cache_expiry = 0;

    public get valid_assets() {
        if (
            this._valid_cache_expiry > Date.now() &&
            this._valid_asset_cache.length
        ) {
            return this._valid_asset_cache;
        }
        const list = this.linked_bookings;
        this._valid_asset_cache = (this.ext('assets') || [])
            .map((request) => new AssetRequest({ ...request, event: this }))
            .filter((request) => request.deliver_at < this.date_end)
            .map((request) => {
                const booking = list.find(
                    (_: any) => _.extension_data.request_id === request.id,
                );
                if (booking) {
                    (request as any).state = booking.approved
                        ? 'approved'
                        : booking.rejected
                          ? 'rejected'
                          : 'pending';
                }
                return request;
            });
        this._valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
        return this._valid_asset_cache;
    }

    /**
     * Convert class data to simple JSON object
     */
    public toJSON(): Record<string, any> {
        const obj: Record<string, any> = { ...this };
        const is_full_day_period =
            this.all_day &&
            this.date === startOfDayInTimezone(this.date, this.timezone) &&
            this.date_end === endOfDayInTimezone(this.date_end, this.timezone);
        const is_custom_all_day = this.all_day && !is_full_day_period;
        const date = is_full_day_period
            ? startOfDayInTimezone(this.date, this.timezone)
            : this.date;
        const end = is_full_day_period
            ? endOfDayInTimezone(this.date_end, this.timezone) + 1
            : this.date_end;
        obj.event_start = getUnixTime(date);
        obj.event_end = getUnixTime(end);
        const attendees = this.attendees;
        (this as any).recurring =
            this.recurrence?.pattern && this.recurrence._pattern !== 'none';
        if (this.recurring) {
            obj.recurrence = parseRecurrence({
                ...this.recurrence,
                start: this.recurrence.start || this.date,
            });
            delete obj.recurrence.start;
            delete obj.recurrence.end;
        }
        obj.recurrence = obj.recurrence
            ? Object.keys(obj.recurrence).length
                ? obj.recurrence
                : null
            : null;
        obj.attendees = unique(
            [
                ...attendees,
                ...this.resources.map((_) => ({ ..._, resource: true })),
            ],
            'email',
        );
        if (this.all_day) {
            obj.setup_time = 0;
            obj.breakdown_time = 0;
            obj.extension_data.all_day_date = format(date, 'yyyy-MM-dd');
        }
        if (is_custom_all_day) {
            obj.all_day = false;
            obj.extension_data.custom_all_day = true;
        } else {
            if (this.id) {
                obj.extension_data.custom_all_day = false;
            } else {
                delete obj.extension_data.custom_all_day;
            }
        }
        obj.extension_data.catering = obj.extension_data.catering.map(
            (i) => new CateringOrder({ ...i, event: null }),
        );
        obj.extension_data.assets = obj.extension_data.assets.map(
            (i) => new AssetRequest({ ...i, event: null }),
        );
        obj.system_id = this.system?.id;
        obj.online_meeting_provider = this.meeting_provider;
        for (const key of [
            'catering',
            'date',
            'date_end',
            'duration',
            'status',
            'linked_bookings',
            '_valid_asset_cache',
            '_valid_cache_expiry',
            'type',
        ]) {
            if (key in obj) delete obj[key];
        }
        if (!obj.update_master) delete obj.recurring_event_id;
        removeEmptyFields(obj);
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
            (isAfter(now, addMinutes(this.date, -5)) &&
                isBefore(now, addMinutes(this.date, this.duration)))
        );
    }
}

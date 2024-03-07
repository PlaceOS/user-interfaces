import { randomString } from 'libs/common/src/lib/general';
import { MapLocation } from './location.class';
import { USER_DOMAIN } from './user.utilities';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import { format, isSameDay } from 'date-fns';

export interface Attachment {
    id?: string;
    name: string;
    url: string;
    size?: number;
    created_at?: number;
    progress?: number;
}

export interface UserComplete extends User {
    sys_admin?: boolean;
    support?: boolean;
}

export type EventResponseStatus =
    | 'needsAction'
    | 'declined'
    | 'tentative'
    | 'accepted'
    | '';

export class User {
    /** ID of the user */
    public readonly id: string;
    /** Display name of the user */
    public readonly name: string;
    /** Email address of the user */
    public readonly email: string;
    /** First name of the user */
    public readonly first_name: string;
    /** Last name of the user */
    public readonly last_name: string;
    /** Username of the user */
    public readonly username: string;
    /** Phone number of the user */
    public readonly phone: string;
    /** Organisation associated with the user */
    public readonly organisation: string;
    /** Details about the user */
    public readonly notes: string;
    /** Organisation department of the user */
    public readonly department: string;
    /** URL to the user's photo */
    public readonly photo: string;
    /** Whether user attendance is required */
    public readonly required: boolean;
    /** Whether user is the event organiser */
    public readonly organizer: boolean;
    /** Whether the users is expected for an event */
    public readonly response_status: EventResponseStatus;
    /** Whether the users is expected for an event */
    public visit_expected: boolean;
    /** Whether user has been checked in */
    public readonly checked_in: boolean;
    /** Organisational groups that the user belongs */
    public readonly groups: string[];
    /** Extra metadata associated with the user */
    public readonly extension_data: Record<string, any>;
    /** Whether user is external from the organisation */
    public readonly is_external: boolean;
    /** Whether user needs assistance when attending an event */
    public readonly assistance_required: boolean;
    /** Whether user is a resource */
    public readonly resource: boolean;

    constructor(data: Partial<UserComplete> = {}) {
        this.id = data.id || data.email || `USER::${randomString(8)}`;
        this.name = data.name || '';
        this.email = data.email || '';
        this.first_name = data.first_name || data.name || '';
        this.last_name = data.last_name || '';
        this.phone = data.phone || '';
        this.organisation = data.organisation || '';
        this.notes = data.notes || '';
        this.photo = data.photo || '';
        this.username = data.username || '';
        this.organizer = !!data.organizer;
        this.checked_in = !!data.checked_in;
        this.required = data.required ?? true;
        this.resource = data.resource ?? false;
        this.response_status = data.response_status || '';
        const groups = data.groups || [];
        this.department = data.department ?? '';
        if (data.sys_admin) groups.push('placeos_admin');
        if (data.support) groups.push('placeos_support');
        if (data.department) groups.push(data.department);
        this.groups = groups;
        this.extension_data = data.extension_data || {};
        this.extension_data.assistance_required =
            data.assistance_required || this.extension_data.assistance_required;
        this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
        this.visit_expected = data.visit_expected ?? true;
        this.assistance_required = !!this.extension_data?.assistance_required;
        for (const key in data) {
            if (!(key in this)) this.extension_data[key] = data[key] as any;
        }
    }
}

export class GuestUser extends User {
    /** Preferred beverage of the guest */
    public readonly preferred_beverage: string;
    /** Whether guest has accepted the terms and conditions */
    public readonly accepted_terms_conditions: boolean;
    /** List of links to associated attachments */
    public readonly attachments: Attachment[];
    /** Status of the guest attendance */
    public readonly status: 'pending' | 'approved' | 'declined';
    /** Booking Associated with the guest */
    public readonly booking?: Booking;

    constructor(data: Partial<GuestUser> = {}) {
        super(data);
        this.preferred_beverage = data.preferred_beverage || '';
        this.accepted_terms_conditions =
            data.accepted_terms_conditions || false;
        this.attachments =
            data.extension_data?.attachments || data.attachments || [];
        this.status = data.booking?.approved
            ? 'approved'
            : data.booking?.rejected
            ? 'declined'
            : data.extension_data?.status || data.status || 'pending';
        this.booking = data.booking;
        this.extension_data.event = (data as any).event_metadata;
    }
}

export interface WorktimePreference {
    /* Index of the day of the week. `0` being Sunday */
    day_of_week: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /* Start time of work hours. e.g. `7.5` being 7:30AM */
    start_time: number;
    /* End time of work hours. e.g. `18.5` being 6:30PM */
    end_time: number;
    /** Name of the location the work is being performed at */
    location?: string;
}

export class StaffUser extends User {
    /** Number associated with the user's access card */
    public readonly card_number: string;
    /** ID of the user */
    public readonly staff_id: string;
    /** Whether user is logged in */
    public readonly is_logged_in: boolean;
    /** Default worktime preferences for the user */
    public readonly work_preferences: WorktimePreference[];
    /** Overrides of the worktime preferences for the user */
    public readonly work_overrides: Record<string, WorktimePreference>;

    public get location() {
        return this.location_time(Date.now());
    }

    public location_time(datetime: number) {
        if (!datetime) datetime = Date.now();
        const date = new Date(datetime);
        const day = date.getDay();
        const date_string = format(date, 'yyyy-MM-dd');
        return (
            this.work_overrides[date_string]?.location ||
            this.work_preferences.find((_) => _.day_of_week === day)
                ?.location ||
            'wfo'
        );
    }

    public get location_name() {
        return this.location_name_time(Date.now());
    }

    public location_name_time(datetime: number) {
        if (!datetime) datetime = Date.now();
        const location = this.location_time(datetime);
        const in_hours = this.in_hours_time(datetime);
        if (location.includes('w') && !in_hours) {
            return 'Outside working hours';
        }
        switch (location) {
            case 'wfh':
                return 'Working from Home';
            case 'wfo':
                return 'Working from Office';
            case 'ooo':
                return 'Out of Office';
            case 'aol':
                return 'Away on Leave';
            default:
                return 'Unknown';
        }
    }

    public get in_hours() {
        return this.in_hours_time(Date.now());
    }

    public location_icon(datetime: number) {
        if (!datetime) datetime = Date.now();
        const location = this.location_time(datetime);
        const in_hours = this.in_hours_time(datetime);
        if (location === 'wfh' && in_hours) return 'home';
        if (location === 'wfo' && in_hours) return 'business';
        return 'event_busy';
    }

    public in_hours_time(datetime: number) {
        if (!datetime) datetime = Date.now();
        const date = new Date(datetime);
        const day = date.getDay();
        const date_string = format(date, 'yyyy-MM-dd');
        const pref =
            this.work_overrides[date_string] ||
            this.work_preferences.find((_) => _.day_of_week === day);
        if (!pref) return false;
        const start = pref.start_time;
        const end = pref.end_time;
        const now = date.getHours() + date.getMinutes() / 60;
        return start <= now && now < end;
    }

    constructor(data: Partial<StaffUser> = {}) {
        super(data);
        this.card_number = data.card_number || '';
        this.staff_id = data.staff_id || '';
        this.is_logged_in = !!data.is_logged_in;
        this.work_preferences = data.work_preferences || [];
        this.work_overrides = data.work_overrides || ({} as any);
    }
}

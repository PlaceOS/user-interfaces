import { capitalizeFirstLetter, removeEmptyFields } from '@placeos/common';
import { User } from 'libs/users/src/lib/user.class';
import {
    add,
    addHours,
    addMinutes,
    differenceInMinutes,
    getUnixTime,
    isAfter,
    isBefore,
    isSameDay,
    roundToNearestMinutes,
} from 'date-fns';

export type BookingType =
    | 'desk'
    | 'parking'
    | 'locker'
    | 'room'
    | 'visitor'
    | 'asset-request'
    | 'staff'
    | 'wfh-setting'
    | '';
const IGNORE_EXT_KEYS = ['user', 'booked_by', 'resources', 'assets', 'members'];

export interface BookingComplete extends Booking {
    members?: User[];
}

/** General purpose booking class */
export class Booking {
    /** Unique Identifier of the object */
    public readonly id: string;
    /** Unix epoch for the start time of the booking in seconds */
    public readonly booking_start: number;
    /** Unix epoch for the start time of the booking in seconds */
    public readonly booking_end: number;
    /** ID of the user who owns the booking */
    public readonly booked_by_id: string;
    /** Email of the user who owns the booking */
    public readonly booked_by_email: string;
    /** Display name of the user who owns the booking */
    public readonly booked_by_name: string;
    /** ID of the user who owns the booking */
    public readonly user_id: string;
    /** Email of the user who owns the booking */
    public readonly user_email: string;
    /** Display name of the user who owns the booking */
    public readonly user_name: string;
    /** ID of an associated calendar event */
    public readonly event_id?: string;
    /** Identifier of the physical asset assocated with the booking */
    public readonly asset_id: string;
    /** Name of the physical asset assocated with the booking */
    public readonly asset_name: string;
    /** Zones associated with the asset ID */
    public readonly zones: string[];
    /** Type of booking */
    public readonly booking_type: BookingType;
    /** Start time of booking in ms */
    public readonly date: number;
    /** Duration of the event in minutes */
    public readonly duration: number;
    /** Whether it is an all day booking */
    public readonly all_day: boolean;
    /** Timezone of the booking */
    public readonly timezone: string;
    /** Title of the booking */
    public readonly title: string;
    /** Description */
    public readonly description: string;
    /** Whether user checked in */
    public readonly checked_in: boolean;
    /** Whether booking is rejected */
    public readonly rejected: boolean;
    /** Whether booking is approved */
    public readonly approved: boolean;
    /** Id of the approver */
    public readonly approver_id: string;
    /** Email of the approver */
    public readonly approver_email: string;
    /** Name of the approver */
    public readonly approver_name: string;
    /** Extra non-standard metadata associated with the booking */
    public readonly extension_data: Record<string, any>;
    /** Default type */
    public readonly type: string;
    /** Default type */
    public readonly access: boolean;
    /** Status of the booking */
    public readonly status: 'declined' | 'approved' | 'tentative';
    /** New deleted field */
    public readonly deleted: boolean;
    /** List of attendees for the booking */
    public readonly attendees: User[];

    constructor(data: Partial<BookingComplete> = {}) {
        this.id = data.id || '';
        this.asset_id = data.asset_id || '';
        this.asset_name =
            data.asset_name ||
            data.extension_data?.asset_name ||
            data.extension_data?.name ||
            data.description ||
            '';
        this.zones = data.zones || [];
        this.booking_start =
            data.date / 1000 ||
            data.booking_start ||
            getUnixTime(
                roundToNearestMinutes(addMinutes(Date.now(), 5), {
                    nearestTo: 5,
                })
            );
        this.booking_end =
            data.date / 1000 + data.duration * 60 ||
            data.booking_end ||
            getUnixTime(
                addMinutes(this.booking_start * 1000, data.duration || 60)
            );
        this.booking_type = data.booking_type || '';
        this.type = data.type || data.booking_type || 'booking';
        this.date = data.date || this.booking_start * 1000;
        this.duration =
            data.duration ||
            Math.abs(
                differenceInMinutes(
                    this.booking_start * 1000,
                    this.booking_end * 1000
                )
            );
        this.timezone =
            data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.user_email = data.user_email || '';
        this.user_id = data.user_id || '';
        this.user_name = data.user_name || '';
        this.title =
            data.title || this.booking_type
                ? `${capitalizeFirstLetter(this.booking_type)} Booking`
                : '';
        this.description = data.description || '';
        this.checked_in = !!data.checked_in;
        this.rejected = !!data.rejected;
        this.approved = !!data.approved;
        this.deleted = !!data.deleted;
        this.booked_by_id = data.booked_by_id || '';
        this.booked_by_name = data.booked_by_name || '';
        this.booked_by_email = data.booked_by_email || '';
        this.approver_id = data.approver_id || '';
        this.approver_email = data.approver_email || '';
        this.approver_name = data.approver_name || '';
        this.extension_data = data.extension_data || {};
        this.access = !!data.extension_data?.access;
        this.event_id = data.event_id;
        this.attendees = data.attendees || data.members || [];
        this.all_day = data.all_day ?? this.duration >= 12 * 60;
        this.status =
            this.rejected || this.extension_data.current_state === 'checked_out'
                ? 'declined'
                : this.approved
                ? 'approved'
                : 'tentative';
        for (const key in data) {
            if (!(key in this) && !IGNORE_EXT_KEYS.includes(key) && data[key]) {
                this.extension_data[key] =
                    data[key] || this.extension_data[key];
            }
        }
    }

    public toJSON(this: Booking): Partial<Booking> {
        const data = { ...this };
        if (!this.id) delete data.id;
        delete data.date;
        delete data.duration;
        removeEmptyFields(data);
        return data;
    }

    public get location(): string {
        return this.description;
    }

    /** Whether the booking occurs today */
    public get is_today(): boolean {
        return isSameDay(this.date, new Date());
    }

    /** Whether booking is done */
    public get is_done(): boolean {
        const start = new Date();
        const end = this.all_day
            ? addHours(this.date, 24)
            : addMinutes(this.date, this.duration);
        const checked_out = (this.extension_data['checked_out_at'] || 0) * 1000;
        let end_time = end.getTime();
        if(this.date <= checked_out && checked_out <= end_time){
            end_time = Math.min(checked_out,end_time);
        }
        return isAfter(start, new Date(end_time));
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
}

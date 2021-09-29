import {
    addHours,
    addMinutes,
    differenceInMinutes,
    getUnixTime,
    isAfter,
    isSameDay,
    roundToNearestMinutes,
    startOfDay,
} from 'date-fns';

export type BookingType = 'desk' | 'parking' | 'locker' | '';

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
    /** Identifier of the physical asset assocated with the booking */
    public readonly asset_id: string;
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

    constructor(data: Partial<Booking> = {}) {
        this.id = data.id || '';
        this.asset_id = data.asset_id || '';
        this.zones = data.zones || [];
        this.booking_start =
            data.date / 1000 ||
            data.booking_start ||
            getUnixTime(startOfDay(Date.now()));
        this.booking_end =
            (data.date / 1000 + data.duration * 60) ||
            data.booking_end ||
            getUnixTime(
                addMinutes(this.booking_start * 1000, data.duration || 60)
            );
        this.booking_type = data.booking_type || '';
        this.type = data.type || 'booking';
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
        this.title = data.title || 'Desk booking';
        this.description = data.description || '';
        this.checked_in = !!data.checked_in;
        this.rejected = !!data.rejected;
        this.approved = !!data.approved;
        this.approver_id = data.approver_id || '';
        this.approver_email = data.approver_email || '';
        this.approver_name = data.approver_name || '';
        this.extension_data = data.extension_data || {};
        this.access = !!data.extension_data?.access;
        this.all_day = data.all_day ?? this.duration > 12 * 60;
        this.status = this.rejected
            ? 'declined'
            : this.approved
            ? 'approved'
            : 'tentative';
        for (const key in data) {
            if (!(key in this)) {
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
        return isAfter(start, end);
    }
}

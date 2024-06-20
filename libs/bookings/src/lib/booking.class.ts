import {
    LinkedBooking,
    capitalizeFirstLetter,
    removeEmptyFields,
} from '@placeos/common';
import { User } from 'libs/users/src/lib/user.class';
import {
    add,
    addHours,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    getUnixTime,
    isAfter,
    isBefore,
    isSameDay,
    roundToNearestMinutes,
    startOfDay,
} from 'date-fns';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';

export type BookingType =
    | 'desk'
    | 'parking'
    | 'locker'
    | 'room'
    | 'visitor'
    | 'asset-request'
    | 'staff'
    | 'group-event'
    | ' ';
const IGNORE_EXT_KEYS = ['user', 'booked_by', 'resources', 'assets', 'members'];

export interface BookingComplete extends Booking {
    members?: User[];
    guests?: User[];
}

export interface LinkedCalendarEvent {
    id?: string;
    date: number;
    duration: number;
    date_end: number;
    system_id: string;
    resource_calendar: string;
    event_id: string;
    host_email: string;
}

/** General purpose booking class */
export class Booking {
    /** Unique Identifier of the object */
    public readonly id: string;
    /** Identifier of the parent booking */
    public readonly parent_id: string;
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
    /** List of identifier of the physical assets assocated with the booking */
    public readonly asset_ids: string[];
    /** Name of the physical asset assocated with the booking */
    public readonly asset_name: string;
    /** Zones associated with the asset ID */
    public readonly zones: string[];
    /** Type of booking */
    public readonly booking_type: BookingType;
    /** Start time of booking in ms */
    public readonly date: number;
    /** End time of booking in ms */
    public readonly date_end: number;
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
    /** List of URLs for associated booking images */
    public readonly images: string[];
    /** List of user defined tags associated with the booking */
    public readonly tags: string[];

    public readonly permission: 'PRIVATE' | 'OPEN' | 'PUBLIC';
    /** Default type */
    public readonly access: boolean;
    /** Whether asset has been inducted */
    public readonly induction: boolean;
    /** Status of the booking */
    public readonly status:
        | 'declined'
        | 'cancelled'
        | 'approved'
        | 'tentative'
        | 'ended';
    /** New deleted field */
    public readonly deleted: boolean;
    /** List of attendees for the booking */
    public readonly attendees: User[];
    /** Time  */
    public readonly checked_out_at?: number;

    public readonly linked_event?: LinkedCalendarEvent;

    public readonly linked_bookings: LinkedBooking[];

    public readonly process_state: string;

    public get group() {
        return this.extension_data.group || '';
    }

    public get is_all_day() {
        return this.all_day || this.duration >= 12 * 60;
    }

    private _b_valid_asset_cache = [];
    private _b_valid_cache_expiry = 0;

    public get valid_assets() {
        if (
            this._b_valid_cache_expiry > Date.now() &&
            this._b_valid_asset_cache.length
        ) {
            return this._b_valid_asset_cache;
        }
        const list = this.linked_bookings;
        this._b_valid_asset_cache = (this.extension_data.assets || [])
            .map((request) => new AssetRequest({ ...request, event: this }))
            .filter((request) => request.deliver_at < this.date_end)
            .map((request) => {
                const booking = list.find(
                    (_: any) => _.extension_data.request_id === request.id
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
        this._b_valid_cache_expiry = addMinutes(Date.now(), 5).valueOf();
        return this._b_valid_asset_cache;
    }

    constructor(data: Partial<BookingComplete> = {}) {
        this.id = data.id || '';
        this.parent_id = data.parent_id || '';
        this.asset_id = data.asset_id || '';
        this.asset_ids = data.asset_ids || [data.asset_id].filter((_) => _);
        this.asset_name =
            data.asset_name ||
            data.extension_data?.asset_name ||
            data.extension_data?.name ||
            data.description ||
            data.asset_id ||
            '';
        this.zones = data.zones || [];
        this.booking_start =
            Math.floor(data.date / 1000) ||
            data.booking_start ||
            getUnixTime(
                roundToNearestMinutes(addMinutes(Date.now(), 5), {
                    nearestTo: 5,
                })
            );
        this.booking_end =
            Math.floor(data.date / 1000) + data.duration * 60 ||
            data.booking_end ||
            getUnixTime(
                addMinutes(this.booking_start * 1000, data.duration || 60)
            );
        this.booking_type = data.booking_type || ' ';
        this.type = data.type || data.booking_type || 'booking';
        this.date = data.date || this.booking_start * 1000 || Date.now();
        this.duration =
            data.duration ||
            Math.abs(
                differenceInMinutes(
                    this.booking_start * 1000,
                    this.booking_end * 1000
                )
            ) ||
            60;
        this.date_end =
            this.booking_end * 1000 || this.date + this.duration * 60 * 1000;
        this.timezone =
            data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.user_email = data.user_email || '';
        this.user_id = data.user_id || '';
        this.user_name = data.user_name || '';
        this.title =
            data.title ??
            (this.booking_type
                ? `${capitalizeFirstLetter(this.booking_type)} Booking`.trim()
                : '');
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
        this.permission = (data.permission || 'PRIVATE').toUpperCase() as any;
        this.attendees = data.attendees || data.guests || data.members || [];
        this.tags = data.tags || data.extension_data?.tags || [];
        this.images = data.images || [];
        this.all_day = data.all_day || this.duration >= 24 * 60;
        this.induction =
            (data.induction ||
                data.extension_data?.induction ||
                data.process_state === 'inducted') ??
            false;
        if (this.all_day) {
            (this as any).date = startOfDay(this.date).getTime();
            (this as any).duration = Math.max(
                24 * 60 - 1,
                this.duration - ((this.duration % 24) * 60 === 0 ? 1 : 0)
            );
            (this as any).date_end = endOfDay(
                addMinutes(this.date, this.duration - 1).valueOf()
            ).getTime();
        }
        this.checked_out_at = data.checked_out_at;
        this.linked_event = data.linked_event || null;
        this.linked_bookings = data.linked_bookings || [];
        this.images = data.images || [];
        this.status =
            this.checked_out_at > 0
                ? 'ended'
                : this.rejected
                ? 'declined'
                : this.approved
                ? 'approved'
                : 'tentative';
        this.process_state = data.process_state || 'pending';
        for (const key in data) {
            if (!(key in this) && !IGNORE_EXT_KEYS.includes(key) && data[key]) {
                this.extension_data[key] =
                    data[key] || this.extension_data[key];
            }
        }
        this.extension_data.assets = (this.extension_data.assets || []).map(
            (i) =>
                new AssetRequest({ ...i, event: this, date: this.date } as any)
        );
        this.extension_data.tags = data.tags || [];
        if (this.extension_data.request) {
            this.extension_data.request = new AssetRequest({
                ...this.extension_data.request,
                event: this,
                date: this.date,
            } as any);
        }
    }

    public toJSON(this: Booking): Partial<Booking> {
        const data = { ...this };
        if (!this.id) delete data.id;
        data.extension_data.assets = data.extension_data.assets.map(
            (i) => new AssetRequest({ ...i, event: null })
        );
        if (data.extension_data.request) {
            data.extension_data.request = new AssetRequest({
                ...data.extension_data.request,
                event: null,
            });
        }
        if (!data.parent_id) delete data.parent_id;
        delete data.date;
        delete data.duration;
        removeEmptyFields(data);
        return data;
    }

    public get location(): string {
        return this.extension_data?.location || this.description;
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
        const checked_out =
            (this.checked_out_at || this.extension_data.checked_out_at || 0) *
            1000;
        let end_time = end.getTime();
        if (checked_out && Date.now() > checked_out) return true;
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

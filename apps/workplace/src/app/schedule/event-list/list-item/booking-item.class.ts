import { HashMap } from 'src/app/common/types';
import * as dayjs from 'dayjs';

export class BookingItem {
    /** ID of the item */
    public id: string;
    /** Sorting weight of the item */
    public order_id?: string;
    /** Type of item to render */
    public type: 'date' | 'event' | 'empty' | 'desk';
    /** Title of the event */
    public title: string;
    /** Date in UTC milliseconds */
    public date: number;
    /** Duration in minutes */
    public duration: number;
    /** All day */
    public _all_day: boolean;
    /** Display location */
    public location?: 'string';
    /** Whether booking has external visitors */
    public has_visitors?: boolean;
    /** Status of the booking */
    public status?: 'accepted' | 'cancelled' | null;
    /** Approved used for type desk */
    public approved?: boolean;
    /** Rejected used for type desk */
    public rejected?: boolean;

    constructor(data: HashMap<any>) {
        this.id = data.id;
        this.order_id = data.order_id;
        this.type = data.type || data.booking_type || 'event';
        this.title = data.title || data.description;
        this.date = data.date;
        this.duration = data.duration;
        this.location = data.location || data.description;
        this.has_visitors = data.has_visitors;
        this.status = data.status;
        this._all_day = data.all_day;
        this.approved = data.approved;
        this.rejected = data.rejected;
    }

    public get is_today(): boolean {
        return dayjs(this.date).isSame(dayjs(), 'd');
    }

    public get all_day(): boolean {
        return this._all_day || this.duration > 23 * 60;
    }

    /** Current state of the booking */
    public get state(): 'future' | 'done' | 'in_progress' {
        const now = dayjs();
        const date = dayjs(this.date);
        const end = dayjs(this.date).add(this.duration, 'm');
        if (date.isAfter(now, 'm')) {
            return 'future';
        } else if (date.add(this.duration, 'm').isBefore(now)) {
            return 'done';
        } else if (this.all_day || (date.isAfter(now, 'm') && end.isBefore(now, 'm'))) {
            return 'in_progress';
        }
    }
}

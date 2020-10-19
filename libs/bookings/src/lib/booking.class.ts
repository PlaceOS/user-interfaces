
import { BaseDataClass, HashMap } from '@user-interfaces/common'

import * as dayjs from 'dayjs';

/** General purpose booking class */
export class Booking extends BaseDataClass {
    /** User Id */
    public readonly user_id: string;
    /** User email */
    public readonly user_email: string;
    /** User name */
    public readonly user_name: string;
    /** Desk asset id */
    public readonly asset_id: string;
    /** Zones */
    public readonly zones: string[];
    /** Type of booking */
    public readonly booking_type: 'desk' | null;
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
    /** Metadata */
    public readonly extension_data: HashMap<any>;
    /** Default type */
    public readonly type: string;
    /** Status of the booking */
    public readonly status: 'declined' | 'approved' | 'tentative';

    constructor(data: Partial<Booking> = {}) {
        super(data);
        this.asset_id = data.asset_id;
        this.zones = data.zones;
        this.booking_type = data.booking_type;
        this.type = data.type || 'booking';
        const time = (data as any).booking_start * 1000 || data.date;
        const start = time
            ? dayjs(time).valueOf()
            : dayjs()
                  .minute(Math.ceil(dayjs().minute() / 5) * 5)
                  .startOf('m')
                  .valueOf();
        this.date = start;
        this.duration = data.duration || dayjs((data as any).booking_end * 1000).diff(start, 'm') || 60;
        this.timezone = data.timezone;
        this.user_email = data.user_email;
        this.user_id = data.user_id;
        this.user_name = data.user_name;
        this.title = data.title || 'Desk booking';
        this.description = data.description;
        this.checked_in = data.checked_in;
        this.rejected = !!data.rejected;
        this.approved = !!data.approved;
        this.approver_id = data.approver_id;
        this.approver_email = data.approver_email;
        this.approver_name = data.approver_name;
        this.extension_data = data.extension_data;
        this.all_day = data.all_day || true;
        this.status = this.rejected ? 'declined' : this.approved ? 'approved' : 'tentative';
    }

    public toJSON(this: Booking): HashMap<any> {
        const data = super.toJSON();
        data.booking_start = dayjs(this.date).unix();
        if (this.all_day) {
            data.booking_end = dayjs(this.date).endOf('d').unix();
        } else {
            data.booking_end = dayjs(this.date).add(this.duration, 'm').unix();
        }
        if (!data.timezone) {
            data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        if (!this.id) {
            delete data.id;
        }
        delete data.date;
        delete data.duration;
        delete data.email;
        delete data.name;
        return data;
    }

    public get location(): string {
        return this.description;
    }

    public get is_today(): boolean {
        return dayjs(this.date).isSame(dayjs(), 'd');
    }

    /** Whether booking is done */
    public get is_done(): boolean {
        const start = dayjs(this.date);
        const end = this.all_day ? dayjs(this.date).endOf('d') : start.add(this.duration, 'm');
        return start.isAfter(end, 'm');
    }
}

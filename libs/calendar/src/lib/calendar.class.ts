import { differenceInMinutes } from 'date-fns';

import { Space } from 'libs/spaces/src/lib/space.class';

import { CalendarAvailability } from './calendar.interfaces';

export class Calendar {
    /** ID of the calendar */
    public readonly id: string;
    /** Name of the calendar */
    public readonly name: string;
    /** System associated with the calendar */
    public readonly resource: Space;
    /** Primary calendar of the user */
    public readonly primary: boolean;
    /** Summary */
    public readonly summary: string;
    /** Whether the user can edit events associated to this calendar */
    public readonly can_edit: boolean;
    /** Availability */
    public readonly availability: CalendarAvailability[];
    /** Whether calendar should be hidden from the user */
    public readonly hidden: boolean;

    constructor(data: Partial<Calendar> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.primary = !!data.primary;
        this.summary = data.summary || '';
        this.can_edit = !!data.can_edit;
        this.resource = new Space(data.resource || (data as any).system);
        this.availability = (data.availability || []).map(
            ({ starts_at, ends_at, date, duration, status }: any) => {
                return {
                    date: new Date(date || starts_at * 1000).valueOf(),
                    duration:
                        duration ||
                        differenceInMinutes(ends_at * 1000, starts_at * 1000),
                    status: status,
                };
            }
        );
        this.hidden = !!data.hidden;
    }
}

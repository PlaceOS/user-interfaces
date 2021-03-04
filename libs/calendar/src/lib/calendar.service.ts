import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { startOfDay } from 'date-fns';

import { Calendar } from './calendar.class';

import { BaseClass, notifyError } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { CalendarEvent } from '../../../events/src/lib/event.class';
import { CalendarAvailabilityQueryParams } from './calendar.interfaces';
import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceFreeBusy,
} from './calendar.fn';

import * as dayjs from 'dayjs';

@Injectable({
    providedIn: 'root',
})
export class CalendarService extends BaseClass {
    private readonly _calendars = new BehaviorSubject<Calendar[]>([]);

    /** Observable for the list of calendars */
    public readonly calendar_list = this._calendars.asObservable();

    public readonly query = () => queryCalendars();
    public readonly freeBusy = (q: CalendarAvailabilityQueryParams) =>
        querySpaceFreeBusy(q, this._org);
    public readonly availability = (q: CalendarAvailabilityQueryParams) =>
        queryCalendarAvailability(q);

    constructor(private _org: OrganisationService) {
        super();
        this._org.initialised
            .pipe(first((_) => _))
            .subscribe(() => this.init());
    }

    public async init() {
        await this.load().catch((err) => {
            notifyError('Error loading calendars data');
        });
        this._initialised.next(true);
    }

    public get calendars(): Calendar[] {
        return this._calendars.getValue();
    }

    /** Get Free busy for the selected day
     * @param calendars User calendar
     * @param date Selected day
     */
    public getFreeBusyDate(date: number, calendars: string) {
        return this.freeBusy({
            period_start: Math.floor(startOfDay(date).valueOf() / 1000),
            period_end: Math.floor(startOfDay(date).valueOf() / 1000),
            calendars,
        });
    }

    /** Check rooms availability */
    public async checkSpacesAvailability(
        system_ids: string[],
        period_start: number,
        period_end: number,
        old_booking?: CalendarEvent
    ) {
        const result = await this.availability({
            period_start,
            period_end,
            system_ids: system_ids.join(','),
        }).toPromise();
        const start = dayjs(old_booking?.date).valueOf();
        const end = dayjs(start).add(old_booking?.duration, 'm').valueOf();
        const available = result.every((i) => {
            const availability = i.availability;
            if (old_booking && i.id === old_booking.system?.email) {
                const index = availability.findIndex((block) => {
                    return (
                        block.date >= start &&
                        dayjs(block.date).add(block.duration, 'm').valueOf() <=
                            end
                    );
                });
                if (index !== -1) {
                    availability.splice(index, 1);
                }
            }
            return !availability.length;
        });
        return available ? true : false;
    }

    public async load(): Promise<void> {
        this._calendars.next(await queryCalendars().toPromise());
    }
}

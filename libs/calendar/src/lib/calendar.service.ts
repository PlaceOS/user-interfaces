import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';

import { Calendar } from './calendar.class';

import { BaseClass, notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { CalendarEvent } from '../../../events/src/lib/event.class';
import { CalendarAvailabilityQueryParams } from './calendar.interfaces';
import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceFreeBusy,
} from './calendar.fn';

@Injectable({
    providedIn: 'root',
})
export class CalendarService extends BaseClass {
    private readonly _calendars = new BehaviorSubject<Calendar[]>([]);

    /** Observable for the list of calendars */
    public readonly calendar_list = this._calendars.asObservable();

    /* istanbul ignore next */
    public readonly query = () => queryCalendars();
    /* istanbul ignore next */
    public readonly freeBusy = (q: CalendarAvailabilityQueryParams) =>
        querySpaceFreeBusy(q, this._org);
    /* istanbul ignore next */
    public readonly availability = (q: CalendarAvailabilityQueryParams) =>
        queryCalendarAvailability(q);

    constructor(private _org: OrganisationService) {
        super();
        this._org.initialised
            .pipe(first((_) => _))
            .subscribe(() => this.init());
    }

    public async init() {
        await this.load().catch((err) =>
            notifyError('Error loading calendars data')
        );
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
        return querySpaceFreeBusy(
            {
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                calendars,
            },
            this._org
        );
    }

    /** Check rooms availability */
    public async checkSpacesAvailability(
        system_ids: string[],
        period_start: number,
        period_end: number,
        old_booking?: CalendarEvent
    ) {
        const result = await queryCalendarAvailability({
            period_start,
            period_end,
            system_ids: system_ids.join(','),
        }).toPromise();
        const start = new Date(old_booking?.date).valueOf();
        const end = addMinutes(start, old_booking?.duration).valueOf();
        const available = result.every((i) => {
            const availability = i.availability;
            if (old_booking && i.id === old_booking.system?.email) {
                const index = availability.findIndex((block) => {
                    return (
                        block.date >= start &&
                        addMinutes(block.date, block.duration).valueOf() <= end
                    );
                });
                if (index !== -1) {
                    availability.splice(index, 1);
                }
            }
            return !availability.length;
        });
        return !!available;
    }

    public async load(): Promise<void> {
        this._calendars.next(await queryCalendars().toPromise());
    }
}

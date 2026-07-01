import { Injectable, inject, signal } from '@angular/core';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';

import {
    AsyncHandler,
    Calendar,
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceFreeBusy,
} from './calendar.fn';
import { CalendarAvailabilityQueryParams } from './calendar.interfaces';

@Injectable({
    providedIn: 'root',
})
export class CalendarService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private readonly _calendars = signal<Calendar[]>([]);
    private _calendars_request: Promise<void> = null;

    /** Signal for the list of calendars */
    public readonly calendar_list = this._calendars.asReadonly();

    /* istanbul ignore next */
    public readonly query = () => queryCalendars();
    /* istanbul ignore next */
    public readonly freeBusy = (q: CalendarAvailabilityQueryParams) =>
        querySpaceFreeBusy(q, this._org);
    /* istanbul ignore next */
    public readonly availability = (q: CalendarAvailabilityQueryParams) =>
        queryCalendarAvailability(q);

    constructor() {
        super();
        this._waitForOrg();
    }

    public async init() {
        if (this._settings.get('app.events.use_bookings')) return;
        this._initialised.next(true);
    }

    public get calendars(): Calendar[] {
        return this._calendars();
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
            this._org,
        );
    }

    /** Check rooms availability */
    public async checkSpacesAvailability(
        system_ids: string[],
        period_start: number,
        period_end: number,
        old_booking?: CalendarEvent,
    ) {
        const result = await queryCalendarAvailability({
            period_start,
            period_end,
            system_ids: system_ids.join(','),
        });
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

    public async loadCalendars() {
        if (this._calendars().length) return;
        this._calendars_request =
            this._calendars_request ||
            queryCalendars()
                .then((list) => this._calendars.set(list))
                .finally(() => (this._calendars_request = null));
        await this._calendars_request;
    }

    private _waitForOrg() {
        const check = () => {
            if (this._org.initialised()) return this.init();
            this.timeout('init', check, 100);
        };
        check();
    }
}

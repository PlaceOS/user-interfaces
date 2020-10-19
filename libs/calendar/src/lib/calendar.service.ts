import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Calendar } from './calendar.class';
import { CalenderAvailabilityParams } from './calendar.interfaces';

import { BaseAPIService, HashMap, notifyError, SettingsService } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { Space } from '../../../spaces/src/lib/space.class';
import { CalendarEvent } from '../../../events/src/lib/event.class';

import * as dayjs from 'dayjs';

@Injectable({
    providedIn: 'root',
})
export class CalendarService extends BaseAPIService<Calendar> {
    private readonly calendars_subject = new BehaviorSubject<Calendar[]>([]);

    /** Observable for the list of calendars */
    public readonly calendar_list = this.calendars_subject.asObservable();

    constructor(private _settings: SettingsService, private _org: OrganisationService) {
        super();
        this._name = 'Calendars';
        this._api_route = 'calendars';
        this._org.initialised.pipe(first((_) => _)).subscribe(() => this.init());
    }

    public async init() {
        await this.load().catch((err) => {
            notifyError('Error loading calendars data');
        });
        this._initialised.next(true);
    }

    public get calendars(): Calendar[] {
        return this.calendars_subject.getValue();
    }

    /**
     * List available rooms
     * @param q Query parameters to pass to the request
     * @param all_day Whether it is an all day booking
     */
    public availability(q: CalenderAvailabilityParams = {}, all_day: boolean = false) {
        const query = { ...q };
        const breakdown = this._settings.get('app.booking.breakdown') || 0;
        if (all_day) {
            query.period_start = dayjs(q.period_start * 1000)
                .startOf('d')
                .unix();
            query.period_end = dayjs(q.period_end * 1000)
                .endOf('d')
                .unix();
        } else {
            query.period_start = dayjs(q.period_start * 1000)
                .subtract(breakdown, 'm')
                .unix();
            query.period_end = dayjs(q.period_end * 1000)
                .add(breakdown, 'm')
                .unix();
        }
        return this.query({
            ...query,
            subroute: 'availability',
        }).then((list) => {
            return list
                .map(
                    (i) =>
                        new Space({ ...i.resource, level: this._org.levelWithID(i.resource.zones) })
                )
                .filter((i) => i.bookable);
        });
    }

    /** List periods where room or calendars are busy */
    public freeBusy(q: CalenderAvailabilityParams = {}) {
        const query = { ...q };
        return this.query({
            ...query,
            subroute: 'free_busy',
        });
    }

    /** Get Free busy for the selected day
     * @param calendar_id User calendar
     * @param date Selected day
     */
    public getFreeBusyDate(date: number, calendar_id: string) {
        const period_start = dayjs(date).startOf('d').unix();
        const period_end = dayjs(date).endOf('d').unix();
        const calendars = calendar_id;
        return this.freeBusy({
            period_start,
            period_end,
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
        const result = await this.freeBusy({
            period_start,
            period_end,
            system_ids: system_ids.join(','),
        });
        const available = result.every((i) => {
            const availability = i.availability;
            if (old_booking && i.id === old_booking.system?.email) {
                const start = dayjs(old_booking.date).valueOf();
                const end = dayjs(start).add(old_booking.duration, 'm').valueOf();
                const index = availability.findIndex((block) => {
                    return (
                        block.date >= start &&
                        dayjs(block.date).add(block.duration, 'm').valueOf() <= end
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

    /** Load calendars */
    public async loadCalendars(): Promise<void> {
        const calendars = await this.query();
        this.calendars_subject.next(calendars);
    }

    public async load(): Promise<void> {
        await this.loadCalendars();
    }

    protected process(raw_data: HashMap): Calendar {
        return new Calendar(raw_data);
    }
}

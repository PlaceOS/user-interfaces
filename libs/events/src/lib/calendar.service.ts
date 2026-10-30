import { inject, Injectable, signal } from '@angular/core';

import {
    AsyncHandler,
    Calendar,
    log,
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

    public async loadCalendars() {
        if (this._calendars().length) return;
        this._calendars_request =
            this._calendars_request ||
            queryCalendars()
                .then((list) => this._calendars.set(list))
                .catch((error: unknown) => {
                    log(
                        'CalendarService',
                        'Failed to load calendars',
                        error,
                        'warn',
                    );
                })
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

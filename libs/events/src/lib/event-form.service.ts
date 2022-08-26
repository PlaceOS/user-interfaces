import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { getUnixTime } from 'date-fns';
import {
    BaseClass,
    currentUser,
    flatten,
    getInvalidFields,
    SettingsService,
    unique,
} from '@placeos/common';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import {
    queryResourceAvailability,
    saveBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { querySpaceAvailability } from 'libs/calendar/src/lib/calendar.fn';
import { CalendarEvent } from './event.class';
import { saveEvent } from './events.fn';
import { generateEventForm, newCalendarEventFromBooking } from './utilities';
import { newBookingFromCalendarEvent } from 'libs/bookings/src/lib/booking.utilities';
import { PaymentsService } from 'libs/payments/src/lib/payments.service';

const BOOKING_URLS = [
    'book/spaces',
    'book/meeting',
    'schedule/view',
    'confirm/success',
    'upcoming',
];

const MINUTES = 60 * 1000;

export type EventFlowView =
    | 'form'
    | 'find'
    | 'catering'
    | 'confirm'
    | 'success';

export interface EventFlowOptions {
    /** Calendar to associate event with */
    calendar_id?: string;
    /** List of features to filter spaces on */
    features?: string[];
    /** List of zones to filter spaces on */
    zone_ids?: string[];
    /** Minimum number of attendees to filter space on */
    capacity?: number;
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class EventFormService extends BaseClass {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({ zone_ids: [] });
    private _form = generateEventForm();
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');

    public last_success: CalendarEvent = new CalendarEvent(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_event') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.asObservable();

    public readonly spaces = combineLatest([
        this._options.pipe(distinctUntilKeyChanged('zone_ids')),
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id')
        ),
    ]).pipe(
        debounceTime(300),
        switchMap(([{ zone_ids }]) => {
            this._loading.next('Loading space list for location...');
            if (!zone_ids?.length) zone_ids = [this._org.building?.id];
            return forkJoin(
                zone_ids.map(
                    (_) =>
                        querySystems({ zone_id: _ }).pipe(map((_) => _.data)),
                    catchError((_) => of([]))
                )
            );
        }),
        map((l) => flatten(l).map((_) => new Space(_ as any))),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public readonly features = this.spaces.pipe(
        map((l) => unique(flatten(l.map((_) => _.features))))
    );

    public readonly filtered_spaces = combineLatest([
        this.spaces,
        this.options,
    ]).pipe(
        map(([spaces, { show_fav, features, capacity }]) =>
            spaces.filter(
                (s) =>
                    (!show_fav || this.favorite_spaces.includes(s.id)) &&
                    (features || []).every((f) => s.features.includes(f)) &&
                    s.capacity >= Math.max(0, capacity || 0)
            )
        ),
        shareReplay(1)
    );

    public readonly available_spaces: Observable<Space[]> = combineLatest([
        this.filtered_spaces,
        this._form.valueChanges,
    ]).pipe(
        filter(() => !this._loading.getValue()),
        debounceTime(300),
        switchMap(([spaces]) => {
            if (!spaces.length) return of([]);
            this._loading.next('Retrieving available spaces...');
            const { date, duration } = this._form.getRawValue();
            const query = {
                period_start: getUnixTime(date),
                period_end: getUnixTime(date + duration * MINUTES),
            };
            return (
                !this.has_calendar
                    ? queryResourceAvailability(
                          spaces.map(({ id }) => id),
                          { ...query, type: 'room' }
                      ).pipe(
                          map((_) =>
                              _.map((id) => spaces.find((s) => id === s.id))
                          ),
                          catchError((_) => [])
                      )
                    : querySpaceAvailability(
                          {
                              ...query,
                              system_ids: spaces.map(({ id }) => id).join(','),
                          },
                          this._org
                      )
            ).pipe(catchError((_) => []));
        }),
        map((_) =>
            _.filter(
                (space) =>
                    !space.availability?.length ||
                    space.availability?.find((_) => _.status !== 'busy')
            )
        ),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public get view() {
        return this._view.getValue();
    }
    public get form() {
        return this._form;
    }
    public get event() {
        return this._event.getValue();
    }

    public get favorite_spaces() {
        return this._settings.get<string[]>('favourite_spaces') || [];
    }

    public get has_calendar() {
        return this._settings.get('app.no_user_calendar') !== true;
    }

    constructor(
        private _org: OrganisationService,
        private _router: Router,
        private _payments: PaymentsService,
        private _settings: SettingsService
    ) {
        super();
        this.available_spaces.subscribe();
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => event.url.includes(_))
                ) {
                    this.clearForm();
                }
            })
        );
        this.subscription(
            'form_change',
            this._form.valueChanges.subscribe(() => this.storeForm())
        );
    }

    public setView(value: EventFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<EventFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public newForm(event: CalendarEvent = new CalendarEvent()) {
        this._event.next(event);
        this.resetForm();
    }

    public resetForm() {
        this._form.reset();
        const event = this._event.getValue();
        this._form.patchValue({
            ...(event || {}),
            ...(event?.extension_data || {}),
            host: event?.host || currentUser().email,
        });
        this._options.next({});
        this.storeForm();
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.event_form');
        this.newForm();
    }

    public storeForm() {
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify(this._form.getRawValue() || {})
        );
    }

    public loadForm() {
        if (!this._form) this.newForm();
        this._form.patchValue({
            ...JSON.parse(sessionStorage.getItem('PLACEOS.event_form') || '{}'),
        });
    }

    public readonly cancelPostForm = () => this.unsub('post-event-form');

    public postForm(force: boolean = false) {
        return new Promise<CalendarEvent>(async (resolve, reject) => {
            const form = this._form;
            form.markAllAsTouched();
            const event = this.event || new CalendarEvent();
            if (!form.valid && !force)
                return reject(
                    `Some form fields are invalid. [${getInvalidFields(
                        form
                    ).join(', ')}]`
                );
            const { id, host, date, duration, creator, all_day } =
                form.getRawValue();
            const spaces = form.get('resources')?.value || [];
            if (
                (!id || date !== event.date || duration !== event.duration) &&
                spaces.length
            ) {
                const start = getUnixTime(event.date);
                await this.checkSelectedSpacesAreAvailable(
                    spaces,
                    date,
                    duration,
                    id
                        ? { start, end: start + event.duration * 60 }
                        : undefined,
                    id || ''
                ).catch((_) => {
                    reject(_);
                    throw _;
                });
            }
            const is_owner =
                host === currentUser()?.email ||
                creator === currentUser()?.email;
            const space_id = spaces[0]?.id;
            const query = id
                ? is_owner
                    ? { calendar: host || creator }
                    : { system_id: space_id }
                : {};
            if (this._payments.payment_module && spaces.length) {
                const receipt = await this._payments.makePayment({
                    type: 'space',
                    resource_name: spaces[0].display_name || spaces[0].name,
                    date,
                    duration,
                    all_day,
                });
                if (!receipt?.success) return;
            }
            const result = await this._makeBooking(
                new CalendarEvent(this._form.getRawValue()),
                query
            ).catch((e) => {
                reject(e);
                throw e;
            });
            this.clearForm();
            this.last_success = result;
            sessionStorage.setItem(
                'PLACEOS.last_booked_event',
                JSON.stringify(result)
            );
            this.setView('success');
            resolve(result);
        });
    }

    private async _makeBooking(
        event: CalendarEvent,
        query: Record<string, any>
    ) {
        return (
            !this.has_calendar
                ? saveBooking(
                      newBookingFromCalendarEvent({
                          ...event.toJSON(),
                          status: this._settings.get('app.bookings.no_approval')
                              ? 'approved'
                              : 'tentative',
                      } as any)
                  ).pipe(map((_) => newCalendarEventFromBooking(_)))
                : saveEvent(event, query)
        ).toPromise();
    }

    private async checkSelectedSpacesAreAvailable(
        spaces: Space[],
        date: number,
        duration: number,
        exclude?: { start: number; end: number },
        ignore?: string
    ) {
        const space_ids = spaces.map((s) => s.id);
        const query: any = {
            period_start: getUnixTime(date),
            period_end: getUnixTime(date + duration * 60 * 1000),
        };
        if (exclude) query.exclude_range = `${exclude.start}...${exclude.end}`;
        const space_list: any[] = spaces.length
            ? await (!this.has_calendar
                  ? (queryResourceAvailability(space_ids, {
                        ...query,
                        type: 'room',
                        ignore,
                    }) as any)
                  : querySpaceAvailability({
                        ...query,
                        system_ids: space_ids.join(','),
                    })
              ).toPromise()
            : [];
        if (space_list.length !== spaces.length)
            throw `${
                spaces.length - space_list.length
            } space(s) are not available at the selected time`;
        return true;
    }
}

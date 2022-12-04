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
import { getUnixTime, startOfDay } from 'date-fns';
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
import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';
import { MatDialog } from '@angular/material/dialog';
import { EventLinkModalComponent } from './event-link-modal.component';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';

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
    features: string[];
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
    private _options = new BehaviorSubject<EventFlowOptions>({
        zone_ids: [],
        features: [],
    });
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
            return forkJoin(zone_ids.map((id) => requestSpacesForZone(id)));
        }),
        map((l) => flatten(l)),
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
            spaces.filter((s) => {
                const domain = (currentUser()?.email || '@').split('@')[1];
                const zone = (this._settings.get(
                    'app.events.restrict_spaces'
                ) || {})[domain];
                const limit_map =
                    this._settings.get('app.events.limit_spaces') || {};
                const limited_zones = Object.keys(limit_map);
                const zone_limit = s.zones.find((_) =>
                    limited_zones.includes(_)
                );
                return (
                    (!zone || s.zones.includes(zone)) &&
                    (!zone_limit || limit_map[zone_limit] === domain) &&
                    (!show_fav || this.favorite_spaces.includes(s.id)) &&
                    features.every((f) => s.features.includes(f)) &&
                    s.capacity >= Math.max(0, capacity || 0)
                );
            })
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
                          )
                      )
                    : querySpaceAvailability(
                          {
                              ...query,
                              system_ids: spaces.map(({ id }) => id).join(','),
                          },
                          this._org
                      )
            ).pipe(
                map((_) => _.map(({ id }) => spaces.find((s) => id === s.id))),
                catchError((_) => [])
            );
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
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {
        super();
        this.available_spaces.subscribe();
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => event.url.includes(_)) &&
                    this._form.touched
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
        this._options.next({ features: [] });
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

    public openEventLinkModal(force: boolean = false) {
        const form = this._form;
        form.markAllAsTouched();
        if (!form.valid && !force) return;
        const event = new CalendarEvent({ ...form.getRawValue() });
        const ref = this._dialog.open(EventLinkModalComponent, { data: event });
        ref.afterClosed().subscribe((d) =>
            d ? this._router.navigate(['/']) : ''
        );
    }

    public postForm(force: boolean = false) {
        return new Promise<CalendarEvent>(async (resolve, reject) => {
            this._loading.next('Creating event...');
            const form = this._form;
            form.markAllAsTouched();
            const event = this.event || new CalendarEvent();
            if (!form.valid && !force) {
                this._loading.next('');
                return reject(
                    `Some form fields are invalid. [${getInvalidFields(
                        form
                    ).join(', ')}]`
                );
            }
            const { id, host, date, duration, creator, all_day } =
                form.getRawValue();
            const spaces = form.get('resources')?.value || [];
            let catering = form.get('catering')?.value || [];
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
                    this._loading.next('');
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
            const value = this._form.getRawValue();
            console.log(
                'Payments:',
                this._payments.payment_module,
                spaces.length
            );
            if (this._payments.payment_module && spaces.length) {
                console.log('Make Payment...');
                const receipt = await this._payments.makePayment({
                    type: 'space',
                    resource_name: spaces[0].display_name || spaces[0].name,
                    date,
                    duration,
                    all_day,
                });
                if (!receipt?.success) return this._loading.next('');
                (value as any).extension_data = {
                    invoice: receipt,
                    invoice_id: receipt.invoice_id,
                };
                console.log('Payment success.', receipt);
            }
            const d = value.all_day
                ? startOfDay(value.date).valueOf()
                : value.date;
            if (catering.length && !('items' in catering[0])) {
                catering = [new CateringOrder({ items: catering as any })];
            }
            const result = await this._makeBooking(
                new CalendarEvent({
                    ...value,
                    date: d,
                    catering,
                }),
                query
            ).catch((e) => {
                reject(e);
                this._loading.next('');
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
            this._loading.next('');
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
                : saveEvent(event.toJSON(), query)
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

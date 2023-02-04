import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { getModule, querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { differenceInDays, getUnixTime, isBefore, startOfDay } from 'date-fns';
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
import { CalendarEvent } from './event.class';
import { querySpaceAvailability, saveEvent } from './events.fn';
import { generateEventForm, newCalendarEventFromBooking } from './utilities';
import { newBookingFromCalendarEvent } from 'libs/bookings/src/lib/booking.utilities';
import { PaymentsService } from 'libs/payments/src/lib/payments.service';
import { CateringOrder } from 'libs/catering/src/lib/catering-order.class';
import { MatDialog } from '@angular/material/dialog';
import { EventLinkModalComponent } from './event-link-modal.component';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { periodInFreeTimeSlot } from './helpers';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { Validators } from '@angular/forms';

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
    private _date = new BehaviorSubject(Date.now());
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');
    private _space_pipe: SpacePipe;

    public last_success: CalendarEvent = new CalendarEvent(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_event') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.asObservable();

    public readonly spaces: Observable<Space[]> = combineLatest([
        this._options.pipe(distinctUntilKeyChanged('zone_ids')),
        this._org.active_building.pipe(
            filter((_) => !!_),
            distinctUntilKeyChanged('id')
        ),
    ]).pipe(
        debounceTime(300),
        tap((_) => this.unsubWith('bind:')),
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
            spaces
                .filter((s: Space) => {
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
                        s.bookable &&
                        (!zone || s.zones.includes(zone)) &&
                        (!zone_limit || limit_map[zone_limit] === domain) &&
                        (!show_fav || this.favorite_spaces.includes(s.id)) &&
                        features.every((f) => s.features.includes(f)) &&
                        s.capacity >= Math.max(0, capacity || 0)
                    );
                })
                .slice(0, Math.min(100, spaces.length))
        ),
        shareReplay(1)
    );

    private _space_bookings = combineLatest([
        this.spaces,
        this.filtered_spaces,
    ]).pipe(
        distinctUntilChanged(([s1], [s2]) => s1 !== s2),
        switchMap(([_, list]) => {
            return combineLatest(
                (list || []).map((_) => {
                    const binding = getModule(_.id, 'Bookings').binding(
                        'bookings'
                    );
                    const obs = binding
                        .listen()
                        .pipe(
                            map((_) =>
                                (_ || []).map((i) => new CalendarEvent(i))
                            )
                        );
                    if (!this.hasSubscription(`bind:${_.id}`)) {
                        this.subscription(`bind:${_.id}`, binding.bind());
                    }
                    return obs;
                })
            );
        }),
        shareReplay(1)
    );

    public readonly current_available_spaces = combineLatest([
        this.filtered_spaces,
        this._space_bookings,
    ]).pipe(
        map(([list, bookings]) => {
            const { date, duration } = this._form.getRawValue();
            return (list || [])
                .filter((_, idx) =>
                    periodInFreeTimeSlot(
                        date,
                        date + duration * MINUTES,
                        bookings[idx] || []
                    )
                )
                .sort((a, b) => a.capacity - b.capacity);
        }),
        shareReplay(1)
    );

    public readonly future_available_spaces: Observable<Space[]> =
        combineLatest([this.filtered_spaces]).pipe(
            filter(() => !this._loading.getValue()),
            debounceTime(300),
            switchMap(([spaces]) => {
                if (!spaces.length) return of([]);
                this._loading.next('Retrieving available spaces...');
                const { date, duration } = this._form.getRawValue();
                const availability_method = this.has_calendar
                    ? querySpaceAvailability
                    : queryResourceAvailability;
                return availability_method(
                    spaces.map(({ id }) => id),
                    date,
                    duration,
                    this.event?.id || undefined
                ).pipe(
                    map((_) => spaces.filter((_, i) => _[i])),
                    catchError((_) => [])
                );
            }),
            tap((_) => this._loading.next('')),
            shareReplay(1)
        );

    public readonly available_spaces = this._date.pipe(
        switchMap((d) => {
            const diff = Math.abs(differenceInDays(d, Date.now()));
            return diff < 14
                ? this.current_available_spaces
                : this.future_available_spaces;
        })
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
        return this._settings.get('app.events.use_bookings') !== true;
    }

    constructor(
        private _org: OrganisationService,
        private _router: Router,
        private _payments: PaymentsService,
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {
        super();
        this._space_pipe = new SpacePipe(this._org);
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
            this._form.valueChanges.subscribe(({ date, catering }) => {
                if (date && date !== this._date.getValue())
                    this._date.next(date);
                this.storeForm();
            })
        );
        let count = 0;
        this.interval(
            'catering',
            () => {
                const catering = this._form.value.catering;
                if (count === catering?.length) return;
                count = catering?.length;
                if (
                    catering?.length &&
                    (this._settings.get('app.events.catering_notes_required') ||
                        this._settings.value('require_catering_notes'))
                ) {
                    this._form
                        .get('catering_notes')
                        ?.setValidators([Validators.required]);
                    this._form
                        .get('catering_notes')
                        .patchValue(this._form.value.catering_notes);
                } else {
                    this._form.get('catering_notes')?.clearValidators();
                    this._form.get('catering_notes').setErrors(null);
                }
                this._form.updateValueAndValidity();
            },
            500
        );
    }

    public listenForStatusChanges() {
        this.subscription('status:rooms', this.available_spaces.subscribe());
    }

    public setView(value: EventFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<EventFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public newForm(event: CalendarEvent = new CalendarEvent()) {
        this._event.next(event);
        this._date.next(event.date);
        this.resetForm();
    }

    public resetForm() {
        this._form.reset();
        const event = this._event.getValue() || ({} as Partial<CalendarEvent>);
        this._form.patchValue({
            ...event,
            ...event.extension_data,
            date:
                !event.id && isBefore(event.date || 0, Date.now())
                    ? Date.now()
                    : event.date,
            host: event?.host || currentUser().email,
        });
        this._options.next({ features: [] });
        this.storeForm();
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.event_form');
        this.unsubWith('status:');
        this.unsubWith('bind:');
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
                    : {
                          system_id:
                              this._event.getValue()?.system?.id || space_id,
                      }
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
                const items = catering.map((_) => ({
                    ..._,
                    options: _.options.map((o) => ({ ...o, active: false })),
                }));
                catering = [
                    new CateringOrder({
                        items,
                        notes: value.catering_notes,
                        charge_code: value.catering_charge_code,
                    }),
                ];
            } else {
                catering.notes = value.catering_notes;
                catering.charge_code = value.catering_charge_code;
            }
            const attendees = unique(
                [...value.attendees, value.organiser || currentUser()],
                'email'
            );
            const result = await this._makeBooking(
                new CalendarEvent({
                    ...value,
                    old_system: this._event.getValue()?.system,
                    host:
                        this._settings.get('app.events.force_host') ||
                        (this._settings.get('app.events.room_as_host')
                            ? value.resources[0].email
                            : '') ||
                        value.host,
                    title: value.title || 'Space Booking',
                    attendees,
                    date: d,
                    catering,
                    extension_data:
                        this._settings.get('app.events.force_host') ||
                        this._settings.get('app.events.room_as_host')
                            ? { host_override: value.host }
                            : {},
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
        const space_ids = (
            await Promise.all(
                spaces.map((_) => this._space_pipe.transform(_.id || _.email))
            )
        ).map((_) => _.id);
        const query: any = {
            period_start: getUnixTime(date),
            period_end: getUnixTime(date + duration * 60 * 1000),
        };
        if (exclude) query.exclude_range = `${exclude.start}...${exclude.end}`;
        const availability_method = this.has_calendar
            ? querySpaceAvailability
            : queryResourceAvailability;
        let availability: boolean[] = await availability_method(
            spaces.map((_) => _.id),
            date,
            duration,
            ignore
        ).toPromise();
        if (!availability.every((_) => _))
            throw `${
                availability.filter((_) => _).length
            } space(s) are not available at the selected time`;
        return true;
    }
}

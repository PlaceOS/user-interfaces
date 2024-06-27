import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { getModule, showMetadata } from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    merge,
    Observable,
    of,
    timer,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import { differenceInDays, startOfDay } from 'date-fns';
import {
    AsyncHandler,
    BookingRuleset,
    currentUser,
    filterResourcesFromRules,
    flatten,
    getInvalidFields,
    notifyError,
    unique,
} from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import {
    createBookingsForEvent,
    queryResourceAvailability,
    saveBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { CalendarEvent } from './event.class';
import { querySpaceAvailability, saveEvent, showEvent } from './events.fn';
import { generateEventForm, newCalendarEventFromBooking } from './utilities';
import { newBookingFromCalendarEvent } from 'libs/bookings/src/lib/booking.utilities';
import { PaymentsService } from 'libs/payments/src/lib/payments.service';
import { EventLinkModalComponent } from './event-link-modal.component';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { periodInFreeTimeSlot } from './helpers';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { validateAssetRequestsForResource } from 'libs/assets/src/lib/assets.fn';
import { User } from 'libs/users/src/lib/user.class';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { removeEvent } from './events.fn';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';

const BOOKING_URLS = [
    'book/rooms',
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
export class EventFormService extends AsyncHandler {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({
        zone_ids: [],
        features: [],
    });
    private _form = generateEventForm(undefined, this._settings);
    private _date = new BehaviorSubject(Date.now());
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');
    private _changed = new BehaviorSubject<number>(0);
    private _space_pipe: SpacePipe;

    public last_success: CalendarEvent = new CalendarEvent(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_event') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.asObservable();

    public get is_multiday() {
        return this._event.getValue()?.duration > 24 * 60;
    }

    public readonly booking_rules: Observable<
        Record<string, BookingRuleset[]>
    > = this._org.building_list.pipe(
        switchMap((list) =>
            Promise.all(
                list.map((bld) =>
                    showMetadata(bld.id, 'booking_rules').toPromise()
                )
            )
        ),
        map((building_rules) => {
            const mapping = {};
            for (const rules of building_rules) {
                mapping[rules.id] =
                    rules.details instanceof Array ? rules.details : [];
            }
            return mapping;
        }),
        shareReplay(1)
    );

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
            const use_region = this._settings.get('app.use_region');
            if (!zone_ids?.length) {
                zone_ids = [
                    (use_region
                        ? this._org.building?.parent_id
                        : this._org.building?.id) || this._org.building?.id,
                ];
            }
            return forkJoin(
                zone_ids.map((id) =>
                    requestSpacesForZone(id).pipe(catchError(() => of([])))
                )
            );
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
        this.booking_rules,
        merge(this.form.valueChanges, timer(1000)),
        this._changed,
    ]).pipe(
        debounceTime(300),
        map(([list, bookings, booking_rules]) => {
            this._loading.next('Updating available spaces...');
            let { ical_uid, date, duration, all_day } =
                this._form.getRawValue();
            list = filterResourcesFromRules(
                list,
                { date, duration, resource: null, host: currentUser() },
                booking_rules[this._org.building?.id] || []
            ) as any;
            return (list || [])
                .filter((_, idx) => {
                    const start = all_day ? startOfDay(date).valueOf() : date;
                    const end =
                        start +
                        (all_day ? Math.max(24 * 60, duration) : duration) *
                            MINUTES;
                    let booking_list = bookings[idx] || [];
                    if (this.last_success?.system?.id === _.id) {
                        booking_list = [...booking_list, this.last_success];
                    }
                    return periodInFreeTimeSlot(
                        start,
                        end,
                        booking_list.filter((_) => _.ical_uid !== ical_uid)
                    );
                })
                .sort((a, b) => a.capacity - b.capacity);
        }),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public readonly future_available_spaces: Observable<Space[]> =
        combineLatest([
            this.filtered_spaces,
            this.booking_rules,
            this.form.valueChanges.pipe(debounceTime(400), startWith({})),
        ]).pipe(
            filter(() => !this._loading.getValue()),
            debounceTime(300),
            switchMap(([spaces, booking_rules]) => {
                if (!spaces.length) return of([]);
                this._loading.next('Retrieving available spaces...');
                let { date, duration, all_day } = this._form.getRawValue();
                const availability_method = this.has_calendar
                    ? querySpaceAvailability
                    : queryResourceAvailability;
                spaces = filterResourcesFromRules(
                    spaces,
                    { date, duration, resource: null, host: currentUser() },
                    booking_rules[this._org.building?.id] || []
                ) as any;
                return availability_method(
                    spaces.map(({ id }) => id),
                    all_day ? startOfDay(date).valueOf() : date,
                    all_day ? Math.max(24 * 60, duration) : duration,
                    this?.event?.resources[0]?.id ||
                        this.event?.system?.id ||
                        this.event?.id ||
                        undefined,
                    undefined,
                    [this.event?.date, this.event?.duration]
                ).pipe(
                    map((availability) => {
                        var list = spaces.filter((_, i) => availability[i]);
                        list = filterResourcesFromRules(
                            list,
                            {
                                date,
                                duration,
                                resource: null,
                                host: currentUser(),
                            },
                            booking_rules[this._org.building?.id] || []
                        ) as any;
                        return list;
                    }),
                    catchError((_) => [])
                );
            }),
            tap((_) => this._loading.next('')),
            shareReplay(1)
        );

    public readonly available_spaces = this._date.pipe(
        switchMap((d) => {
            const diff = Math.abs(differenceInDays(d, Date.now()));
            const cache_length =
                this._settings.get('app.events.cache_duration_in_days') || 14;
            return diff < cache_length
                ? this.current_available_spaces
                : this.future_available_spaces;
        }),
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
        return this._settings.get('app.events.use_bookings') !== true;
    }

    constructor(
        private _org: OrganisationService,
        private _router: Router,
        private _payments: PaymentsService,
        private _settings: SettingsService,
        private _assets: AssetStateService,
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
        const previous = {};
        this.subscription(
            'form_change',
            this._form.valueChanges.subscribe(({ date, duration, assets }) => {
                if (
                    (date && date !== previous['date']) ||
                    (duration && duration !== previous['duration'])
                ) {
                    this._assets.setOptions({
                        date: this.form.value.date,
                        duration: this.form.value.duration,
                    });
                    previous['date'] = date;
                    previous['duration'] = duration;
                }
                if (date && date !== this._date.getValue()) {
                    this._date.next(date);
                }
                this.storeForm();
            })
        );
    }

    public listenForStatusChanges() {
        this.subscription('status:rooms', this.available_spaces.subscribe());
    }

    public setView(value: EventFlowView) {
        this.timeout('set_view', () => this._view.next(value), 50);
    }

    public setOptions(value: Partial<EventFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public async newForm(
        event: CalendarEvent = new CalendarEvent({
            all_day: this._settings.get('app.events.all_day_default'),
        })
    ) {
        this._event.next(event);
        if (event.recurring_event_id) {
            const master = await showEvent(event.recurring_event_id)
                .toPromise()
                .catch((_) => null);
            if (master) {
                (this._event.getValue() as any).recurrence = {
                    ...master.recurrence,
                    _pattern: master.recurrence.pattern,
                };
            }
        }
        this._assets.setOptions({
            ignore: flatten(
                event.linked_bookings?.map(
                    (_) => _.asset_ids || [_.asset_id]
                ) || []
            ),
        });
        for (const idx in event.resources) {
            const space = event.resources[idx];
            event.resources[idx] = await this._space_pipe.transform(
                space.id || space.email
            );
        }
        this._date.next(event.date);
        this.timeout(
            'post-event-form',
            () => {
                this._form.patchValue({
                    date: event.date || this._form.value.date,
                });
            },
            1000
        );
        this.resetForm();
    }

    public resetForm() {
        this._form.reset();
        const event =
            this._event.getValue() ||
            ({ extension_data: {} } as Partial<CalendarEvent>);

        this._assets.setOptions({
            ignore: flatten(
                event.linked_bookings?.map(
                    (_) => _.asset_ids || [_.asset_id]
                ) || []
            ),
        });
        const has_catering = !!event.extension_data.catering[0];
        this._form.patchValue({
            ...event.extension_data,
            ...event,
            duration: event.duration >= 12 * 60 ? 30 : event.duration,
            organiser:
                event?.organiser ||
                currentUser() ||
                new User({ email: event?.host }),
            catering_charge_code:
                event.extension_data.catering[0]?.charge_code ||
                (event.id && has_catering ? ' ' : ''),
            assets: (event.extension_data.assets || []).map(
                (_) => new AssetRequest({ ..._, event })
            ),
        });
        this._form.patchValue({
            date: event.date || this._form.value.date,
            date_end: event.date_end || this._form.value.date_end,
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
        if (!sessionStorage.getItem('PLACEOS.event_form')) {
            return this.newForm();
        }
        const form_data = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form') || '{}'
        );
        if (form_data.id && form_data.id !== this._event.getValue()?.id) {
            showEvent(form_data.id).subscribe((event) => {
                this._event.next(event);
                this._assets.setOptions({
                    ignore: flatten(
                        event.linked_bookings?.map(
                            (_) => _.asset_ids || [_.asset_id]
                        ) || []
                    ),
                });
            });
        }
        this._form.patchValue({ ...form_data });
    }

    public readonly cancelPostForm = () => this.unsub('post-event-form');

    public openEventLinkModal(force: boolean = false) {
        const form = this._form;
        form.markAllAsTouched();
        if (!form.valid && !force) return;
        const event = new CalendarEvent({ ...form.getRawValue(), assets: [] });
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
            const ical_uid = this.event?.ical_uid;
            let value = this._form.getRawValue();
            let {
                id,
                host,
                date,
                duration,
                creator,
                all_day,
                assets,
                recurrence,
            } = value;
            const spaces = form.get('resources')?.value || [];
            let catering = form.get('catering')?.value || [];
            if (recurrence?._pattern && recurrence?._pattern !== 'none') {
                this.form.patchValue({ recurring: true });
                value = this._form.getRawValue();
            }
            let changed_times = false;
            let changed_spaces = spaces.some(
                (s) => !event.resources?.find((_) => _.id === s.id)
            );
            if (
                (!id || date !== event.date || duration !== event.duration) &&
                spaces.length
            ) {
                changed_times = true;
                await this.checkSelectedSpacesAreAvailable(
                    spaces,
                    all_day ? startOfDay(date).valueOf() : date,
                    all_day ? Math.max(24 * 60, duration) : duration,
                    ical_uid || id || ''
                ).catch((_) => {
                    this._loading.next('');
                    reject(_);
                    throw _;
                });
            }
            const is_owner =
                host === currentUser()?.email ||
                creator === currentUser()?.email;
            if (
                !spaces.length &&
                this._settings.get('app.events.no_space_resource')
            ) {
                const space = await this._space_pipe.transform(
                    this._settings.get('app.events.no_space_resource')
                );
                spaces.push(space);
            }
            const attendees = unique(
                [...value.attendees, value.organiser || currentUser()],
                'email'
            );
            if (!spaces.length && attendees.find((_) => _.is_external)) {
                this._loading.next('');
                const message =
                    'External attendees require a space to be booked';
                reject(message);
                throw message;
            }
            const space_id = spaces[0]?.id;
            const query: any = id
                ? {
                      system_id:
                          this.event?.resources[0]?.id ||
                          this.event?.system?.id ||
                          space_id,
                  }
                : {};
            if (is_owner) query.calendar = host || creator;
            if (this._payments.payment_module && spaces.length) {
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
            }
            const d = value.date;
            for (const order of catering) {
                order.notes = value.catering_notes;
                order.charge_code = value.catering_charge_code;
            }
            if (spaces.length) {
                let [setup, breakdown] = [0, 0];
                for (const space of spaces) {
                    const overflow = this._settings.get(
                        `app.events.overflow.${space.id}`
                    );
                    if (overflow?.setup) setup = overflow.setup;
                    if (overflow?.breakdown) breakdown = overflow.breakdown;
                }
                (value as any).setup = value.setup_time || setup;
                (value as any).breakdown = value.breakdown_time || breakdown;
            }
            const processed_assets = (assets || []).map((_) =>
                new AssetRequest(_).toJSON()
            );
            const result = await this._makeBooking(
                new CalendarEvent({
                    ...value,
                    old_system: this.event?.system,
                    host:
                        this._settings.get('app.events.force_host') ||
                        (this._settings.get('app.events.room_as_host')
                            ? value.resources[0].email
                            : '') ||
                        value.host,
                    title: value.title || 'Space Booking',
                    attendees: attendees.map((_) => {
                        const v = { ..._ };
                        delete v.visit_expected;
                        return v;
                    }),
                    date: d,
                    catering,
                    assets: processed_assets,
                    extension_data:
                        this._settings.get('app.events.force_host') ||
                        this._settings.get('app.events.room_as_host')
                            ? {
                                  host_override: value.host,
                                  department:
                                      value.organiser?.department ||
                                      currentUser()?.department,
                              }
                            : {
                                  department:
                                      value.organiser?.department ||
                                      currentUser()?.department,
                              },
                }),
                query
            ).catch((e) => {
                reject(e);
                this._loading.next('');
                throw e;
            });
            const domain = (currentUser()?.email || '@').split('@')[1];
            const visitors = attendees.filter(
                (user) =>
                    user.is_external &&
                    user.email !== event.host &&
                    !user.email.includes(domain) &&
                    user.visit_expected
            );
            let creating_assets = false;
            const on_error = async (e) => {
                if (!this.form.value.id) {
                    await removeEvent(
                        result.id,
                        spaces.length
                            ? {
                                  calendar:
                                      this.form.value.host ||
                                      currentUser()?.email,
                                  system_id: spaces[0].id,
                              }
                            : {}
                    ).toPromise();
                    console.warn("Couldn't update asset requests", e);
                    if (e?.status === 409) {
                        notifyError(
                            'Some assets are already booked for the selected time'
                        );
                    } else notifyError('Unable to book the selected assets.');
                } else if (creating_assets) {
                    notifyError(
                        `Unable to update all asset requests for event.\n${e}`
                    );
                    return;
                }
                this._loading.next('');
                throw e;
            };
            if (visitors.length) {
                await createBookingsForEvent(
                    result,
                    'visitor',
                    visitors as any
                ).catch(on_error);
            }

            if (assets?.length || event.extension_data.assets?.length) {
                creating_assets = true;
                const requests = await validateAssetRequestsForResource(
                    result,
                    {
                        date,
                        duration,
                        host,
                        all_day,
                        location_name:
                            spaces[0]?.display_name || spaces[0]?.name || '',
                        location_id: spaces[0]?.id || '',
                        zones: spaces[0]?.level?.parent_id
                            ? [spaces[0]?.level?.parent_id]
                            : [this._org.building?.id],
                        reset_state: changed_times,
                    },
                    assets,
                    changed_spaces || changed_times
                ).catch(on_error);
                if (!requests) throw 'Unable to validate asset requests';
                await requests();
                creating_assets = false;
            }
            this.clearForm();
            this.last_success = result;
            sessionStorage.setItem(
                'PLACEOS.last_booked_event',
                JSON.stringify(result)
            );
            this.setView('success');
            this.timeout('post_finshed', () => this._changed.next(Date.now()));
            resolve(result);
            this._loading.next('');
        });
    }

    private async _makeBooking(
        event: CalendarEvent,
        query: Record<string, any>
    ) {
        this._updateVisitorList(event.attendees);
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
        ignore?: string
    ) {
        if (!spaces?.length) return true;
        if (this.has_calendar) {
            const response = await querySpaceAvailability(
                spaces.map(({ id }) => id),
                date,
                duration,
                this?.event?.resources[0]?.id ||
                    this.event?.system?.id ||
                    this.event?.id ||
                    undefined,
                undefined,
                [this.event?.date, this.event?.duration]
            ).toPromise();
            if (!response.every((_) => _)) {
                throw `${
                    spaces.length > 1
                        ? 'The selected space'
                        : 'Some of the selected spaces'
                } is not available at the selected time`;
            }
        } else {
            const availability = await queryResourceAvailability(
                spaces.map((_) => _.id),
                date,
                duration,
                ignore
            ).toPromise();
            if (!availability.every((_) => _))
                throw `${
                    spaces.length > 1
                        ? 'The selected space'
                        : 'Some of the selected spaces'
                } are not available at the selected time`;
        }
        return true;
    }

    private _updateVisitorList(attendees: User[]) {
        const visitors = attendees.filter((user) => user.is_external);
        if (!visitors?.length) return;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting(
            'visitor-invitees',
            unique([
                ...old_visitors.filter((_) => !_.includes(_.email)),
                ...visitors.map(
                    (_) => `${_.email}|${_.name}|${_.organisation}`
                ),
            ])
        );
    }
}

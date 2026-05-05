import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    AsyncHandler,
    BookingClash,
    BookingRuleset,
    CalendarEvent,
    current_user,
    currentUser,
    filterResourcesFromRules,
    firstTruthyValueFrom,
    flatten,
    getAllDayTimeRange,
    getFormTimeSyncHandle,
    getInvalidFields,
    getTimeInTimezone,
    i18n,
    isWithinBookableHours,
    nextValueFrom,
    rulesForResource,
    setDefaultCreator,
    SETTING_KEYS,
    SettingsService,
    Space,
    unique,
    User,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    lastValueFrom,
    Observable,
    of,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

import { AssetRequest, OrganisationService } from '@placeos/common';
import { UserPipe } from '@placeos/users';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { validateAssetRequestsForResource } from 'libs/assets/src/lib/assets.fn';
import { newBookingFromCalendarEvent } from 'libs/bookings/src/lib/booking.utilities';
import {
    createBookingsForEvent,
    queryResourceAvailability,
    saveBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { openRecurringClashModal } from 'libs/components/src/lib/recurring-clash-modal.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { requestSpacesForZone } from 'libs/events/src/lib/space.utilities';
import { EventLinkModalComponent } from './event-link-modal.component';
import {
    findEventClashes,
    querySpaceAvailability,
    removeEvent,
    saveEvent,
} from './events.fn';
import { generateEventForm, newCalendarEventFromBooking } from './utilities';

const BOOKING_URLS = [
    'book/rooms',
    'book/spaces',
    'book/meeting',
    'schedule/view',
    'confirm/success',
    'upcoming',
];
const PERSISTED_EVENT_CONTEXT_URLS = ['landing'];

enum Tags {
    Availability = 'AVAILABILITY',
    BookingRules = 'BOOKING_RULES',
    ListingRooms = 'LIST_ROOMS',
    PostBooking = 'MAKING_BOOKING',
}

type EventFlowView = 'form' | 'find' | 'catering' | 'confirm' | 'success';

export interface EventFormOptions {
    zones?: string[];
    date?: number;
    duration?: number;
    all_day?: boolean;
}

export interface EventFormFilters {
    capacity?: number;
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
    features?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class EventFormService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _assets = inject(AssetStateService);
    private _dialog = inject(MatDialog);
    private _user_pipe = new UserPipe();

    private get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFormOptions>({
        date: Date.now(),
        zones: [],
    });
    private _filters = new BehaviorSubject<EventFormFilters>({
        capacity: -1,
        features: [],
    });
    private _loading = new BehaviorSubject('');
    private _changed = new BehaviorSubject(0);
    private _event = new BehaviorSubject(new CalendarEvent());
    private _form = generateEventForm(undefined, this._settings);
    private _space_pipe = new SpacePipe();

    private removeLoadingTag = (t) =>
        this._loading.next(
            this._loading.getValue().replace(`[${t}]`, '').trim(),
        );
    private addLoadingTag = (t) =>
        t
            ? this._loading.next(
                  `${this._loading.getValue().replace(`[${t}]`, '')}[${t}]`.trim(),
              )
            : '';
    private _overflow = (id = '') =>
        id
            ? this._settings.get(`app.events.overflow.${id}`) || {}
            : {
                  setup: this._settings.get(`app.events.setup`) || 0,
                  breakdown: this._settings.get(`app.events.breakdown`) || 0,
              };
    private _host = (host, space) =>
        this._settings.get('app.events.force_host') ||
        (this._settings.get('app.events.room_as_host') ? space : '') ||
        host;

    public readonly options$ = this._options.asObservable();
    public readonly filters$ = this._filters.asObservable();
    public readonly loading$ = this._loading.asObservable();
    // List of all the booking rules for the available buildings
    public readonly booking_rules$: Observable<
        Record<string, BookingRuleset[]>
    > = this._org.building_list.pipe(
        switchMap((list) => {
            this.addLoadingTag(Tags.BookingRules);
            return forkJoin(
                list.map((bld) =>
                    showMetadata(bld.id, 'room_booking_rules').pipe(
                        map((_) => ({
                            id: bld.id,
                            details:
                                _.details instanceof Array ? _.details : [],
                        })),
                        catchError(() => of({ id: bld.id, details: [] })),
                    ),
                ),
            );
        }),
        map((building_rules) => {
            const mapping = {};
            for (const rules of building_rules) {
                mapping[rules.id] = rules?.details;
            }
            return mapping;
        }),
        tap(() => this.removeLoadingTag(Tags.BookingRules)),
        shareReplay(1),
    );
    public readonly spaces$: Observable<Space[]> =
        this._org.active_building.pipe(
            switchMap(() =>
                this._settings.get('app.use_region')
                    ? this._org.active_region.pipe(filter((_) => !!_))
                    : this._org.active_building.pipe(filter((_) => !!_)),
            ),
            distinctUntilKeyChanged('id'),
            switchMap((zone) => {
                if (!zone) return of([]);
                this.addLoadingTag(Tags.ListingRooms);
                return requestSpacesForZone(zone.id).pipe(
                    catchError(() => of([])),
                );
            }),
            map((list: Space[]) =>
                list.filter(
                    (_) => _.bookable && _.email && !_.room_booking_url,
                ),
            ),
            tap(() => this.removeLoadingTag(Tags.ListingRooms)),
            startWith([]),
            shareReplay(1),
        );
    public readonly features = this.spaces$.pipe(
        map((l) => unique(flatten(l.map((_) => _.features)))),
    );
    public readonly room_alerts = this._changed.pipe(
        switchMap(() => showMetadata(this._org.organisation.id, 'room_alerts')),
        map((r) => r.details as Record<string, [string, string]>),
        startWith({}),
        shareReplay(1),
    );
    public readonly filtered_spaces = combineLatest([
        this.spaces$,
        this._options,
        this._filters,
        (this._org.initialised || of(true)).pipe(filter((_) => _)),
    ]).pipe(
        map(([list, { zones }, filters]) => {
            if (!list.length) return list;
            if (!zones?.length) {
                zones = this._settings.get('app.use_region')
                    ? [this._org.region.id]
                    : [this._org.building.id];
            }
            if (zones.length) {
                list = list.filter((space) =>
                    zones.find((id) => space.zones.includes(id)),
                );
            }
            if (filters.show_fav) {
                list = list.filter(({ id }) =>
                    this.favorite_spaces.includes(id),
                );
            }
            if (filters.capacity > 0) {
                // Map capacity values to ranges based on room size categories
                const capacityRanges = {
                    1: { min: 1, max: 2 }, // 1-2 people
                    3: { min: 3, max: 4 }, // 3-4 people
                    5: { min: 5, max: 8 }, // 5-8 people
                    9: { min: 9, max: 999 }, // 9+ people
                };
                const range = capacityRanges[filters.capacity] || {
                    min: filters.capacity,
                    max: 999,
                };
                list = list.filter(
                    ({ capacity }) =>
                        capacity < 0 || // Unlimited capacity
                        (capacity >= range.min && capacity <= range.max),
                );
            }
            if (filters.features) {
                list = list.filter(({ features }) =>
                    filters.features.every((f) => features.includes(f)),
                );
            }
            return list;
        }),
    );

    public readonly available_spaces: Observable<Space[]> = combineLatest([
        this.filtered_spaces,
        this.booking_rules$,
        this._event,
        this._options,
    ]).pipe(
        debounceTime(300),
        switchMap(([spaces, rules, event, { date, duration, all_day }]) => {
            this.addLoadingTag(Tags.Availability);
            const period = all_day
                ? this._allDayTimeRange(date)
                : { date, duration };
            const method = this.book_internal
                ? queryResourceAvailability
                : querySpaceAvailability;
            spaces = filterResourcesFromRules(
                spaces,
                {
                    date: period.date,
                    duration: period.duration,
                    resource: null,
                    host: currentUser(),
                },
                rules[this._org.building?.id] || [],
            ) as Space[];

            return method(
                spaces.map(({ id }) => id),
                period.date || 60,
                period.duration || 60,
                event?.resources[0]?.id || event?.system?.id || event?.id,
                undefined,
                [event?.date, event?.duration],
            ).pipe(
                map((availability) => {
                    let list = spaces.filter((_, i) => availability[i]);
                    list = filterResourcesFromRules(
                        list,
                        {
                            date: period.date,
                            duration: period.duration,
                            resource: null,
                            host: currentUser(),
                        },
                        rules[this._org.building?.id] || [],
                    ) as Space[];
                    list.sort((a, b) => {
                        const cap_diff = (a.capacity || 0) - (b.capacity || 0);
                        if (cap_diff !== 0) return cap_diff;
                        return (a.display_name || a.name).localeCompare(
                            b.display_name || b.name,
                        );
                    });
                    return list;
                }),
                catchError(() => of([] as Space[])),
            );
        }),
        tap(() => this.removeLoadingTag(Tags.Availability)),
        startWith([]),
        shareReplay(1),
    );

    public readonly view$ = this._view.asObservable();
    public readonly last_success = signal<CalendarEvent | null>(null);

    public loadLastSuccess() {
        const event = new CalendarEvent(
            JSON.parse(
                sessionStorage?.getItem('PLACEOS.last_modified_event') || '{}',
            ),
        );
        this.last_success.set(event);
        return event;
    }

    public get form() {
        return this._form;
    }

    public get view() {
        return this._view.getValue();
    }

    public get options() {
        return this._options.getValue();
    }

    public get filters() {
        return this._filters.getValue();
    }
    public get event() {
        return this._event.getValue();
    }

    public get is_multiday() {
        return this._event.getValue()?.duration > 24 * 60;
    }

    public get favorite_spaces() {
        return this._settings.get<string[]>(SETTING_KEYS.FAVORITE_ROOMS) || [];
    }

    public get book_internal() {
        return this._settings.get('app.events.use_bookings') === true;
    }

    public get lone_space() {
        return this._settings.get('app.events.no_space_resource');
    }

    constructor() {
        super();
        this._space_pipe.org = this._org;
        this.init();
    }

    public async init() {
        await firstTruthyValueFrom(current_user);
        setDefaultCreator(currentUser());
        this.form.controls.date.valueChanges.subscribe((date) =>
            this.setOptions({ date }),
        );
        this.form.controls.duration.valueChanges.subscribe((duration) =>
            this.setOptions({ duration }),
        );
        this.form.controls.all_day.valueChanges.subscribe((all_day) =>
            this.setOptions({ all_day }),
        );
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                const url =
                    event instanceof NavigationEnd
                        ? event.urlAfterRedirects || event.url
                        : '';
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => url.includes(_)) &&
                    !PERSISTED_EVENT_CONTEXT_URLS.some((_) => url.includes(_))
                ) {
                    this.clearForm();
                }
            }),
        );
        const previous = {};
        this.form.valueChanges.subscribe(({ date, duration }) => {
            const { date: raw_date, duration: raw_duration } =
                this.form.getRawValue();
            if (
                (raw_date && raw_date !== previous['date']) ||
                (raw_duration && raw_duration !== previous['duration'])
            ) {
                this._assets.setOptions({
                    date: raw_date,
                    duration: raw_duration,
                });
                previous['date'] = raw_date;
                previous['duration'] = raw_duration;
            }
            this.storeForm();
        });
        this.subscription(
            'settings_change',
            (this._settings.overrides$ || of([]))
                .pipe(filter((_) => !!_?.length))
                .subscribe(() => this._applyDurationSettings()),
        );
        this.loadLastSuccess();
    }

    /** Push the current building's duration and bookable-hours settings into the time sync. */
    private _applyDurationSettings() {
        const handle = getFormTimeSyncHandle(this._form);
        const period = this._settings.get<{ start?: number; end?: number }>(
            'app.events.all_day_period',
        );
        handle?.updateOptions({
            min_duration: this._settings.get('app.events.min_duration') ?? 30,
            max_duration: this._settings.get('app.events.max_duration') ?? 0,
            default_duration:
                this._settings.get('app.events.default_duration') ?? 60,
            custom_duration_options:
                this._settings.get('app.events.custom_duration_options') ?? [],
            bookable_hours:
                this._settings.get('app.events.bookable_hours') ?? null,
            timezone: this.timezone,
            all_day_start: period?.start,
            all_day_end: period?.end,
        });
    }

    private _allDayTimeRange(date: number) {
        const period = this._settings.get<{ start?: number; end?: number }>(
            'app.events.all_day_period',
        );
        return getAllDayTimeRange(
            date,
            this.timezone,
            period?.start,
            period?.end,
            this._form.getRawValue().id ? undefined : Date.now(),
        );
    }

    public setView(value: EventFlowView) {
        this.timeout('set_view', () => this._view.next(value), 50);
    }

    public setFilters(filters: Partial<EventFormFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setOptions(options: Partial<EventFormOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public newForm(event = new CalendarEvent()) {
        this._loading.next('');
        const lock_start_time =
            !!event.id &&
            (event.state === 'started' || event.state === 'in_progress');
        (this._form as any)._lock_start_time = lock_start_time;
        this._form.reset({
            ...event,
            catering: event.extension_data.catering,
            catering_charge_code:
                event.extension_data.catering?.[0]?.charge_code,
            catering_notes: event.extension_data.catering?.[0]?.notes,
            assets: (event.extension_data.assets || []).map(
                (_) => new AssetRequest({ ..._, event }),
            ),
        });
        this._form.controls.date[lock_start_time ? 'disable' : 'enable']({
            emitEvent: false,
        });
        this._applyDurationSettings();
        if (!event.id) return;
        sessionStorage.setItem(
            'PLACEOS.event',
            JSON.stringify(event?.toJSON() || {}),
        );
        this._event.next(event);
    }

    public resetForm() {
        this._form.reset(this._event.getValue() || {});
    }

    public storeForm() {
        this.timeout('store', () => {
            sessionStorage.setItem(
                'PLACEOS.event_form',
                JSON.stringify(this._form.getRawValue() || {}),
            );
        });
    }

    public loadForm() {
        const event_data = JSON.parse(
            sessionStorage.getItem('PLACEOS.event') || '{}',
        );
        const event = new CalendarEvent(event_data);
        this._event.next(event);
        const form_data = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form') || '{}',
        );
        this._form.patchValue({ ...event, ...form_data });
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.removeItem('PLACEOS.event_form');
        this.newForm();
    }

    public openEventLinkModal(force = false) {
        const form = this._form;
        form.markAllAsTouched();
        if (!form.valid && !force) return;
        const event = new CalendarEvent({ ...form.getRawValue(), assets: [] });
        const ref = this._dialog.open(EventLinkModalComponent, { data: event });
        ref.afterClosed().subscribe((d) =>
            d ? this._router.navigate(['/']) : '',
        );
    }

    public cancelPostForm() {}

    public async postForm(
        force = false,
        ignore_space_check: string[] = [],
        ignore_owner = false,
        force_calendar = false,
    ) {
        this.form.markAllAsTouched();
        if (this.form.invalid && !force) {
            throw i18n('FORM.INVALID_FIELDS', {
                field_list: getInvalidFields(this.form).join(', '),
            });
        }
        const on_error = (e) => {
            this.removeLoadingTag(Tags.PostBooking);
            throw e;
        };
        this.addLoadingTag(Tags.PostBooking);
        try {
            const event = this._event.getValue();
            const space_list = this.form.value.resources || [];
            let spaces = space_list.filter(
                (_) => !ignore_space_check.includes(_.id),
            );
            const recurr = this.form.value.recurrence;
            const raw_value = this.form.getRawValue();
            this.form.patchValue({
                recurring: recurr?._pattern && recurr?._pattern !== 'none',
            });
            if (!this.form.value.recurring) {
                this.form.patchValue({ recurrence: null });
            }
            const changed_spaces = spaces.filter(
                (_) => !event.resources.find((s) => s.id === _.id),
            );
            const all_day_period = raw_value.all_day
                ? this._allDayTimeRange(raw_value.date)
                : {
                      date: raw_value.date,
                      duration: raw_value.duration,
                      date_end: raw_value.date_end,
                  };
            const has_time_changed =
                !event.id ||
                event.date !== raw_value.date ||
                event.duration !== raw_value.duration;
            this.form.patchValue(
                { timezone: this.timezone || raw_value.timezone },
                { emitEvent: false },
            );
            const bookable_hours = this._settings.get(
                'app.events.bookable_hours',
            );
            if (
                !isWithinBookableHours(
                    raw_value.date,
                    bookable_hours,
                    raw_value.timezone,
                )
            ) {
                throw i18n('FORM.BOOKABLE_HOURS_ERROR');
            }
            // For multiday bookings, also validate the end time.
            // The end wall-clock may land exactly on the configured
            // closing hour, which is valid even though start times use
            // an exclusive end bound.
            if (
                raw_value.date_end &&
                raw_value.duration > 24 * 60 &&
                bookable_hours
            ) {
                const { hours, minutes } = getTimeInTimezone(
                    raw_value.date_end,
                    raw_value.timezone,
                );
                const end_minutes = hours * 60 + minutes;
                const within_end_window =
                    end_minutes >= bookable_hours.start * 60 &&
                    end_minutes <= bookable_hours.end * 60;
                if (!within_end_window) {
                    throw i18n('FORM.BOOKABLE_HOURS_ERROR');
                }
            }

            // Validate that all selected room resource are available
            if (spaces.length && has_time_changed) {
                const space_list = await Promise.all(
                    changed_spaces.map((_) =>
                        this._space_pipe.transform(_.email),
                    ),
                );
                const date = raw_value.all_day
                    ? all_day_period.date
                    : raw_value.date;
                const duration = raw_value.all_day
                    ? all_day_period.duration
                    : raw_value.duration;
                await this._checkResourcesAvailable(
                    space_list,
                    date,
                    duration,
                    event.ical_uid || event.id || '',
                ).catch(on_error);
                await this._checkResourceRules(
                    space_list,
                    date,
                    duration,
                    this._host(this.form.value.host, spaces[0]?.email),
                ).catch(on_error);
            } else if (!space_list.length && this.lone_space) {
                spaces = [await this._space_pipe.transform(this.lone_space)];
                this.form.patchValue({ resources: spaces });
            }
            // Check for clashing events in recurring series
            if (this.form.value.recurring && spaces.length) {
                await this._checkRecurringClashes(
                    new CalendarEvent({
                        ...this.form.getRawValue(),
                        date: all_day_period.date,
                        duration: all_day_period.duration,
                        date_end: all_day_period.date_end,
                        resources: spaces,
                    }),
                ).catch(on_error);
            }
            // Make sure host is an attendee
            this.form.patchValue({
                attendees: unique(
                    [
                        ...this.form.value.attendees,
                        this.form.value.organiser || currentUser(),
                    ],
                    'email',
                ),
            });
            // Prevent meeting with external users without a space set
            if (
                !spaces.length &&
                this.form.value.attendees.find((_) => _.is_external)
            ) {
                this.removeLoadingTag(Tags.PostBooking);
                throw i18n('CALENDAR_EVENT.SPACE_EXTERNALS_ERROR');
            }
            // Handle payments for room resources
            // if (false) await this._handlePayments().catch(on_error);
            // Handle setup and breakdown times
            const default_oflow = this._overflow();
            let [setup, breakdown] = [
                this.form.value.setup_time || default_oflow.setup,
                this.form.value.breakdown_time || default_oflow.breakdown,
            ];
            for (const space of spaces) {
                const overflow = this._overflow(space.id);
                setup = Math.max(overflow.setup || 0, setup);
                breakdown = Math.max(overflow.breakdown || 0, breakdown);
            }
            this.form.patchValue({
                setup_time: setup,
                breakdown_time: breakdown,
            });
            // Apply shared catering fields to all orders
            for (const order of this.form.value.catering || []) {
                order.notes = this.form.value.catering_notes;
                order.charge_code = this.form.value.catering_charge_code;
            }
            // Perform Booking
            const query: any = event.id
                ? {
                      system_id:
                          event?.resources[0]?.id ||
                          event?.system?.id ||
                          spaces[0]?.id,
                  }
                : {};
            const user_email = currentUser()?.email.toLowerCase() || '';
            const is_owner =
                this.form.value.host.toLowerCase() === user_email ||
                this.form.value.creator.toLowerCase() === user_email ||
                this.form.value.calendar.toLowerCase() === user_email;
            if ((is_owner && !ignore_owner) || force_calendar)
                query.calendar =
                    this.form.value.host || this.form.value.creator;
            if (force_calendar) delete query.system_id;
            const processed_assets = (this.form.value.assets || []).map((_) =>
                new AssetRequest(_).toJSON(),
            );
            const host = this._host(this.form.value.host, spaces[0]?.email);
            const ext: any = {
                department:
                    this.form.value.organiser?.department ||
                    currentUser()?.department,
            };
            if (this.form.value.host !== host)
                ext.host_override = this.form.value.host;
            const value = this.form.getRawValue();
            const created_event = await this._performBooking(
                new CalendarEvent({
                    ...this.form.getRawValue(),
                    date: all_day_period.date,
                    duration: all_day_period.duration,
                    date_end: all_day_period.date_end,
                    old_system: event?.system,
                    host,
                    title: this.form.value.title || 'Space Booking',
                    attendees: this.form.value.attendees.map((_: any) => {
                        const v: any = { ..._ };
                        delete v.visit_expected;
                        delete v.extension_data;
                        return v;
                    }),
                    assets: processed_assets,
                    extension_data: ext,
                }),
                query,
            ).catch(on_error);
            // Create visitor bookings for external attendees
            const domain = (currentUser()?.email || '@').split('@')[1];
            const visitors = this.form.value.attendees.filter(
                (user) =>
                    user.is_external &&
                    user.email !== event.host &&
                    !user.email.includes(domain) &&
                    user.visit_expected,
            );
            if (visitors.length) {
                await createBookingsForEvent(
                    created_event,
                    'visitor',
                    visitors as any,
                ).catch((e) =>
                    this._removeBookingAfterError(
                        !event.id,
                        created_event,
                        false,
                        e,
                    ),
                );
            }
            // Create bookings for each catering order in the event
            if (this.form.value.catering?.length) {
                await createBookingsForEvent(
                    created_event,
                    'catering-order',
                    this.form.value.catering as any,
                ).catch((e) =>
                    this._removeBookingAfterError(
                        !event.id,
                        created_event,
                        false,
                        e,
                    ),
                );
            }
            // Create asset bookings for each request in the event
            const assets =
                this.form.value.assets || event.extension_data.assets || [];
            if (assets.length) {
                const requests = await validateAssetRequestsForResource(
                    created_event,
                    {
                        date: all_day_period.date,
                        duration: all_day_period.duration,
                        host: value.host,
                        all_day: value.all_day,
                        location_name:
                            spaces[0]?.display_name || spaces[0]?.name || '',
                        location_id: spaces[0]?.id || '',
                        zones: unique([
                            this._org.organisation.id,
                            this._org.region?.id,
                            this._org.building?.id,
                            ...(spaces[0]?.zones || []),
                        ]).filter((_) => !!_),
                        reset_state: has_time_changed,
                    },
                    assets,
                    changed_spaces.length > 0 || has_time_changed,
                ).catch((e) =>
                    this._removeBookingAfterError(
                        !event.id,
                        created_event,
                        true,
                        e,
                    ),
                );
                if (!requests)
                    throw i18n('CALENDAR_EVENT.ASSETS_INVALID_ERROR');
                await requests();
            }
            this.clearForm();
            sessionStorage.setItem(
                'PLACEOS.last_modified_event',
                JSON.stringify(created_event.toJSON()),
            );
            this.loadLastSuccess();
            return true;
        } catch (e) {
            this.removeLoadingTag(Tags.PostBooking);
            if (this._isPermissionError(e)) this._clearSavedHostChange();
            throw e;
        }
    }

    private _isPermissionError(error: any) {
        const status = error?.status || error?.error?.status;
        if (status === 403) return true;
        const message = this._errorMessage(error).toLowerCase();
        return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
    }

    private _errorMessage(error: any) {
        if (typeof error === 'string') return error;
        if (error instanceof Error && error.message) return error.message;
        if (typeof error?.error === 'string') return error.error;
        if (typeof error?.message === 'string') return error.message;
        if (typeof error?.error?.message === 'string') return error.error.message;
        return '';
    }

    private _clearSavedHostChange() {
        const user = currentUser();
        if (!user) return;
        const host_data = {
            host: user.email,
            organiser: user,
            creator: user.email,
            calendar: user.email,
        };
        this.form.patchValue(host_data, { emitEvent: false });
        const saved_form = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form') || '{}',
        );
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({ ...saved_form, ...host_data }),
        );
    }

    private async _handlePayments() {
        return 'INV-000_001';
    }

    private async _checkResourcesAvailable(
        spaces: Space[],
        date: number,
        duration: number,
        ignore?: string,
    ) {
        if (!spaces?.length) return true;
        const event = this._event.getValue();
        const id_list = spaces.map((_) => _.id);
        const response = await lastValueFrom(
            this.book_internal
                ? queryResourceAvailability(id_list, date, duration, ignore)
                : querySpaceAvailability(
                      id_list,
                      date,
                      duration,
                      event?.resources[0]?.id ||
                          event?.system?.id ||
                          event?.id ||
                          undefined,
                      undefined,
                      [event?.date, event?.duration],
                  ),
        );
        if (!response.every((_) => _)) {
            throw i18n(
                spaces.length > 1
                    ? 'CALENDAR_EVENT.SPACES_UNAVAILABLE'
                    : 'CALENDAR_EVENT.SPACE_UNAVAILABLE',
            );
        }
        return true;
    }

    private async _checkResourceRules(
        spaces: Space[],
        date: number,
        duration: number,
        host: string,
    ) {
        const current_user = currentUser();
        const user =
            host === current_user.email
                ? current_user
                : await this._user_pipe
                      .transform(host)
                      .catch(() => ({ email: host, name: host }));
        const rules = await nextValueFrom(this.booking_rules$);
        const space_rules = spaces.map((space) => {
            const bld = this._org.buildings.find((b) =>
                space.zones.includes(b.id),
            );
            return rulesForResource(
                {
                    date,
                    duration,
                    host: new User(user),
                    resource: space,
                },
                rules[bld.id],
            );
        });
        if (!space_rules.every((_) => !_.hidden)) {
            throw i18n(
                'CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN',
                undefined,
                spaces.length,
            );
        }
        return true;
    }

    /**
     * Check for clashing events in a recurring event series
     * @param event The calendar event to check for clashes
     * @returns true if no clashes or user confirmed to continue
     * @throws Error if first instance clashes or clashes not allowed
     */
    private async _checkRecurringClashes(
        event: CalendarEvent,
    ): Promise<boolean> {
        if (!event.recurring) {
            return true;
        }

        const clashes = (await lastValueFrom(
            findEventClashes(event, { include_clash_time: true }),
        )) as BookingClash[];

        if (!clashes?.length) {
            return true;
        }

        const sorted_clashes = [...clashes].sort(
            (a, b) => a.booking_start - b.booking_start,
        );

        const event_start_unix = Math.floor(event.date / 1000);
        const first_clash = sorted_clashes[0];
        const is_first_instance_clash =
            first_clash.booking_start === event_start_unix;

        if (is_first_instance_clash) {
            throw i18n('CALENDAR_EVENT.FIRST_INSTANCE_CLASH');
        }

        const allow_clashes =
            this._settings.get('app.events.allow_recurring_instance_clashes') ??
            true;

        if (!allow_clashes) {
            throw i18n('CALENDAR_EVENT.RECURRING_CLASHES_NOT_ALLOWED', {
                count: clashes.length,
            });
        }

        const result = await openRecurringClashModal(
            { clashes: sorted_clashes },
            this._dialog,
        );

        if (result?.reason !== 'done') {
            throw 'User cancelled';
        }

        return true;
    }

    private async _performBooking(
        event: CalendarEvent,
        query: Record<string, string | number>,
    ) {
        this._updateVisitorList(event.attendees);
        const old_system =
            event.old_system?.id ||
            event.old_system?.email ||
            event.resources[0]?.email;
        const system_id =
            event.system?.id ||
            event.system?.email ||
            event.resources[0]?.email;
        if (old_system !== system_id) {
            (event as any).attendees = event.attendees.filter(
                (_) => _.email !== old_system || _.id !== old_system,
            );
        }
        return lastValueFrom(
            this.book_internal
                ? saveBooking(
                      newBookingFromCalendarEvent({
                          ...event.toJSON(),
                          status:
                              this._settings.get('app.bookings.no_approval') ===
                              true
                                  ? 'approved'
                                  : 'tentative',
                      } as any),
                  ).pipe(map((_) => newCalendarEventFromBooking(_)))
                : saveEvent(event, query),
        );
    }

    private async _removeBookingAfterError(
        is_new: boolean,
        event: CalendarEvent,
        assets = false,
        e,
    ) {
        if (is_new) {
            await lastValueFrom(
                removeEvent(
                    event.id,
                    event.resources.length
                        ? {
                              calendar:
                                  this.form.value.host || currentUser()?.email,
                              system_id: event.resources[0].id,
                          }
                        : {},
                ),
            );
            throw e?.status === 409
                ? i18n('CALENDAR_EVENT.ASSETS_CLASH_ERROR')
                : i18n('CALENDAR_EVENT.ASSETS_ERROR');
        } else if (assets) {
            throw i18n('CALENDAR_EVENT.ASSETS_PARTIAL_ERROR', {
                error: e,
            });
        }
        this.removeLoadingTag(Tags.PostBooking);
        throw e;
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
                    (_) => `${_.email}|${_.name}|${_.organisation}`,
                ),
            ]),
        );
    }
}

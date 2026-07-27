import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    Injector,
    resource,
    signal,
    type Signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    AsyncHandler,
    BookingClash,
    BookingRuleset,
    CalendarEvent,
    currentUser,
    currentUserIsLoaded,
    currentUserLoaded,
    filterResourcesFromRules,
    firstValueWhere,
    flatten,
    getAllDayTimeRange,
    getInvalidSignalFields,
    getTimeInTimezone,
    isEmptyUser,
    onFieldChange,
    i18n,
    isWithinBookableHours,
    rulesForResource,
    setDefaultCreator,
    SETTING_KEYS,
    SettingsService,
    Space,
    unique,
    User,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';

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
import { CalendarService } from './calendar.service';
import {
    findEventClashes,
    querySpaceAvailability,
    removeEvent,
    saveEvent,
} from './events.fn';
import {
    eventFormValue,
    generateEventForm,
    newCalendarEventFromBooking,
} from './utilities';

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

const ROOM_CAPACITY_RANGES: Record<number, { min: number; max: number }> = {
    1: { min: 1, max: 2 },
    3: { min: 3, max: 4 },
    5: { min: 5, max: 8 },
    9: { min: 9, max: 999 },
};

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
    private _calendar = inject(CalendarService);
    private _dialog = inject(MatDialog);
    private _injector = inject(Injector);
    private _user_pipe = new UserPipe();

    private get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    private _view = signal<EventFlowView>('form');
    private _options = signal<EventFormOptions>({
        date: Date.now(),
        zones: [],
    });
    private _filters = signal<EventFormFilters>({
        capacity: -1,
        features: [],
    });
    private _loading = signal('');
    private _event = signal(new CalendarEvent());
    private _network_requested = false;
    private _network_consumed = signal(false);
    private _space_requests = new Map<string, Promise<Space[]>>();
    private _availability_requests = new Map<string, Promise<boolean[]>>();
    private _form_ref = generateEventForm(
        undefined,
        this._settings,
        this._injector,
    );
    /** FieldTree for the event form (used for template binding + validation). */
    private _form = this._form_ref.form;
    /** Writable signal holding the raw event form value. */
    private _model = this._form_ref.model;
    private _initial_attendees: string[] = [];
    private _space_pipe = new SpacePipe();

    public readonly notify_new_attendees_only = signal(false);
    public readonly can_notify_new_attendees_only = computed(() => {
        if (!this._model().id) return false;
        const attendee_emails = this._model().attendees.map((_) =>
            (_.email || _).toLowerCase(),
        );
        return (
            attendee_emails.some((_) => !this._initial_attendees.includes(_))
        );
    });

    private removeLoadingTag = (t) =>
        this._loading.set(this._loading().replace(`[${t}]`, '').trim());
    private addLoadingTag = (t) =>
        t
            ? this._loading.set(
                  `${this._loading().replace(`[${t}]`, '')}[${t}]`.trim(),
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
    private _startNetwork() {
        this._network_requested = true;
        this._network_consumed.set(true);
    }
    private readonly _requests_ready = computed(() => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return (
            this._org.initialised() &&
            (!this._org.regions.length || !!region?.id) &&
            !!building?.id &&
            overrides.length >= required_overrides
        );
    });

    /** Signal emitting the current loading message, empty when idle */
    public readonly loading = this._loading.asReadonly();
    /** Signal for the active event flow view */
    public readonly view = this._view.asReadonly();
    /** Signal for the active event flow options */
    public readonly options = this._options.asReadonly();
    /** Signal for the active space filters */
    public readonly filters = this._filters.asReadonly();
    public readonly last_success = signal<CalendarEvent | null>(null);

    /** Booking rules for the active buildings, grouped by building id */
    private readonly _booking_rules_resource = resource({
        params: () => {
            if (!this._network_consumed() || !this._requests_ready()) {
                return undefined;
            }
            const list = this._org.building_list();
            return list.length ? list.map((bld) => bld.id) : undefined;
        },
        loader: ({ params: ids }) => {
            this.addLoadingTag(Tags.BookingRules);
            return Promise.all(
                ids.map((id) =>
                    showMetadata(id, 'room_booking_rules')
                        .then((_) => ({
                            id,
                            details:
                                _.details instanceof Array ? _.details : [],
                        }))
                        .catch(() => ({ id, details: [] })),
                ),
            )
                .then((building_rules) => {
                    const mapping: Record<string, BookingRuleset[]> = {};
                    for (const rules of building_rules) {
                        mapping[rules.id] = rules.details;
                    }
                    return mapping;
                })
                .finally(() => this.removeLoadingTag(Tags.BookingRules));
        },
    });
    /** Signal for the booking rules of the active buildings, grouped by id */
    public readonly booking_rules = computed<Record<string, BookingRuleset[]>>(() => {
        return this._booking_rules_resource.value() ?? {};
    });

    /** Active zone used to load the bookable space list */
    private readonly _space_zone = computed(() => {
        const zone = this._settings.get('app.use_region')
            ? this._org.active_region()
            : this._org.active_building();
        return zone?.id || '';
    });
    private readonly _space_zone_debounced = debounced(
        this._space_zone,
        300,
        { injector: this._injector, equal: Object.is },
    );
    /** Bookable spaces for the active zone */
    private readonly _spaces_resource = resource({
        params: () =>
            this._network_consumed() && this._requests_ready()
                ? this._space_zone_debounced.value() || undefined
                : undefined,
        loader: ({ params: zone_id }) => {
            this.addLoadingTag(Tags.ListingRooms);
            return this._requestSpaces(zone_id)
                .then((list) =>
                    list.filter(
                        (_) => _.bookable && _.email && !_.room_booking_url,
                    ),
                )
                .catch(() => [] as Space[])
                .finally(() => this.removeLoadingTag(Tags.ListingRooms));
        },
    });
    /** Signal for the list of bookable spaces in the active zone */
    public readonly spaces = computed<Space[]>(() => {
        return this._spaces_resource.value() ?? [];
    });

    /** Signal for the available features across the loaded spaces */
    public readonly features = computed<string[]>(() =>
        unique(flatten(this.spaces().map((_) => _.features))),
    );

    /** Room alert messaging for the active organisation */
    private readonly _room_alerts_resource = resource({
        params: () =>
            this._network_consumed() && this._requests_ready()
                ? this._org.organisation?.id || undefined
                : undefined,
        loader: ({ params: id }) =>
            showMetadata(id, 'room_alerts')
                .then((r) => r.details as Record<string, [string, string]>)
                .catch(() => ({}) as Record<string, [string, string]>),
    });
    /** Signal for the room alert messaging grouped by space */
    public readonly room_alerts = computed<Record<string, [string, string]>>(
        () => {
            return this._room_alerts_resource.value() ?? {};
        },
    );

    /** Signal for the spaces matching the active zone and filters */
    public readonly filtered_spaces = computed<Space[]>(() => {
        if (!this._org.initialised()) return [];
        let list = this.spaces();
        if (!list.length) return list;
        const filters = this._filters();
        let zones = this._options().zones;
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
            list = list.filter(({ id }) => this.favorite_spaces.includes(id));
        }
        if (filters.capacity > 0) {
            const range = ROOM_CAPACITY_RANGES[filters.capacity] || {
                min: filters.capacity,
                max: 999,
            };
            list = list.filter(
                ({ capacity }) =>
                    capacity < 0 ||
                    (capacity >= range.min && capacity <= range.max),
            );
        }
        if (filters.features) {
            list = list.filter(({ features }) =>
                filters.features.every((f) => features.includes(f)),
            );
        }
        return list.sort((a, b) => {
            const cap_diff = (a.capacity || 0) - (b.capacity || 0);
            if (cap_diff !== 0) return cap_diff;
            return (a.display_name || a.name).localeCompare(
                b.display_name || b.name,
            );
        });
    });

    /** Params driving the available space calculation */
    private readonly _available_params = computed(() => ({
        spaces: this.filtered_spaces(),
        rules: this.booking_rules(),
        event: this._event(),
        options: this._options(),
    }));
    /** Debounced params to coalesce rapid form and filter changes */
    private readonly _available_params_debounced = debounced(
        this._available_params,
        300,
        { injector: this._injector, equal: Object.is },
    );
    /** Spaces available to book for the current event selection */
    private readonly _available_resource = resource({
        params: () => {
            if (!this._network_consumed() || !this._requests_ready()) {
                return undefined;
            }
            if (
                this._spaces_resource.isLoading() ||
                this._booking_rules_resource.isLoading()
            ) {
                return undefined;
            }
            return this._available_params_debounced.value();
        },
        loader: ({ params: { spaces, rules, event, options } }) => {
            if (!spaces.length) return Promise.resolve([] as Space[]);
            this.addLoadingTag(Tags.Availability);
            return this._computeAvailableSpaces(spaces, rules, event, options)
                .catch(() => [] as Space[])
                .finally(() => this.removeLoadingTag(Tags.Availability));
        },
    });
    /** Signal for the spaces available to book for the current selection */
    public readonly available_spaces = computed<Space[]>(() => {
        return this._available_resource.value() ?? [];
    });

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

    public get model() {
        return this._model;
    }

    public get event() {
        return this._event();
    }

    public get is_multiday() {
        return this._event()?.duration > 24 * 60;
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
        // Re-apply duration settings when the settings overrides change
        effect(() => {
            const overrides = this._settings.overrides();
            if (overrides?.length) this._applyDurationSettings();
        });
        this.init();
    }

    public async init() {
        await currentUserLoaded();
        setDefaultCreator(currentUser());
        onFieldChange(
            this._model,
            (v) => v.date,
            (date) => this.setOptions({ date }),
            this._injector,
        );
        onFieldChange(
            this._model,
            (v) => v.duration,
            (duration) => this.setOptions({ duration }),
            this._injector,
        );
        onFieldChange(
            this._model,
            (v) => v.all_day,
            (all_day) => this.setOptions({ all_day }),
            this._injector,
        );
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => event.url.includes(_)) &&
                    !PERSISTED_EVENT_CONTEXT_URLS.some((_) =>
                        event.url.includes(_),
                    )
                ) {
                    this.clearForm();
                }
            }),
        );
        const previous = {};
        effect(
            () => {
                const { date: raw_date, duration: raw_duration } = this._model();
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
            },
            { injector: this._injector },
        );
        this.loadLastSuccess();
    }

    /** Push the current building's duration and bookable-hours settings into the time sync. */
    private _applyDurationSettings() {
        const handle = this._form_ref.time_sync;
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
        );
    }

    /** Resolve the bookable space list for the given zone */
    private _requestSpaces(zone_id: string): Promise<Space[]> {
        if (!zone_id) return Promise.resolve([]);
        const existing = this._space_requests.get(zone_id);
        if (existing) return existing;
        const request = new Promise<Space[]>((resolve) => {
            requestSpacesForZone(zone_id).subscribe({
                next: (list) => resolve(list || []),
                error: () => resolve([]),
            });
        }).finally(() => this._space_requests.delete(zone_id));
        this._space_requests.set(zone_id, request);
        return request;
    }

    private _queryAvailability(
        ids: string[],
        date: number,
        duration: number,
        ignore: string,
        event: CalendarEvent,
    ) {
        const key = JSON.stringify({
            book_internal: this.book_internal,
            ids,
            date,
            duration,
            ignore,
            event: [event?.date, event?.duration],
        });
        const existing = this._availability_requests.get(key);
        if (existing) return existing;
        const request = (this.book_internal
            ? queryResourceAvailability(ids, date, duration, ignore, undefined)
            : querySpaceAvailability(ids, date, duration, ignore, undefined, [
                  event?.date,
                  event?.duration,
              ])
        ).finally(() => this._availability_requests.delete(key));
        this._availability_requests.set(key, request);
        return request;
    }

    /** Filter the given spaces down to those available for the selection */
    private async _computeAvailableSpaces(
        spaces: Space[],
        rules: Record<string, BookingRuleset[]>,
        event: CalendarEvent,
        { date, duration, all_day }: EventFormOptions,
    ): Promise<Space[]> {
        const period = all_day
            ? this._allDayTimeRange(date)
            : { date, duration };
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
        const ignore =
            event?.resources[0]?.id || event?.system?.id || event?.id;
        const availability = await this._queryAvailability(
            spaces.map(({ id }) => id),
            period.date || 60,
            period.duration || 60,
            ignore,
            event,
        );
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
        return list;
    }

    /** Resolve once the given resource has finished loading */
    private _whenSettled(ref: {
        isLoading: Signal<boolean>;
    }): Promise<boolean> {
        return firstValueWhere(
            ref.isLoading,
            (loading) => !loading,
            this._injector,
        );
    }

    /** Resolve with the spaces available to book once the list has loaded */
    public async listAvailableSpaces(): Promise<Space[]> {
        this._startNetwork();
        await this._whenSettled(this._available_resource);
        return this.available_spaces();
    }

    public setView(value: EventFlowView) {
        this.timeout('set_view', () => this._view.set(value), 50);
    }

    public setFilters(filters: Partial<EventFormFilters>) {
        this._filters.set({ ...this._filters(), ...filters });
    }

    public setOptions(options: Partial<EventFormOptions>) {
        this._options.set({ ...this._options(), ...options });
    }

    public newForm(event = new CalendarEvent()) {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.newForm(event));
            return;
        }
        this._startNetwork();
        this._calendar.loadCalendars();
        this._loading.set('');
        const lock_start_time =
            !!event.id &&
            (event.state === 'started' || event.state === 'in_progress');
        this._form_ref.lock_start_time.set(lock_start_time);
        const value = eventFormValue(event);
        this.notify_new_attendees_only.set(false);
        value.assets = (event.extension_data.assets || []).map(
            (_) => new AssetRequest({ ..._, event }),
        );
        this._setInitialAttendees(value.attendees);
        this._model.set(value);
        this._form().reset();
        this._applyDurationSettings();
        if (!event.id) return;
        sessionStorage.setItem(
            'PLACEOS.event',
            JSON.stringify(event?.toJSON() || {}),
        );
        this._event.set(event);
    }

    public resetForm() {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.resetForm());
            return;
        }
        this._model.set(eventFormValue(this._event() || new CalendarEvent()));
        this._form().reset();
    }

    public storeForm() {
        this.timeout('store', () => {
            sessionStorage.setItem(
                'PLACEOS.event_form',
                JSON.stringify(this._model() || {}),
            );
        });
    }

    public loadForm() {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.loadForm());
            return;
        }
        this._startNetwork();
        this._calendar.loadCalendars();
        const event_data = JSON.parse(
            sessionStorage.getItem('PLACEOS.event') || '{}',
        );
        const event = new CalendarEvent(event_data);
        this._event.set(event);
        this._setInitialAttendees(event.attendees);
        this.notify_new_attendees_only.set(false);
        const form_data = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form') || '{}',
        );
        this._model.update((m) => ({
            ...m,
            ...eventFormValue(event),
            ...form_data,
        }));
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.removeItem('PLACEOS.event_form');
        this.newForm();
    }

    public openEventLinkModal(force = false) {
        this._form().markAsTouched();
        if (!this._form().valid() && !force) return;
        const event = new CalendarEvent({ ...(this._model() as any), assets: [] });
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
        const notify_new_attendees_only =
            this.notify_new_attendees_only() &&
            this.can_notify_new_attendees_only();
        // host/creator may have been seeded with the placeholder EMPTY_USER
        // before the signed-in user loaded. Refresh them from the now-loaded
        // current user so events are never saved against the empty user.
        if (isEmptyUser({ email: this._model().host } as any)) {
            this._model.update((m) => ({ ...m, host: currentUser().email }));
        }
        if (isEmptyUser({ email: this._model().creator } as any)) {
            this._model.update((m) => ({ ...m, creator: currentUser().email }));
        }
        this._form().markAsTouched();
        if (this._form().invalid() && !force) {
            throw i18n('FORM.INVALID_FIELDS', {
                field_list: getInvalidSignalFields(
                    this._form,
                    this._model,
                ).join(', '),
            });
        }
        const on_error = (e) => {
            this.removeLoadingTag(Tags.PostBooking);
            throw e;
        };
        this.addLoadingTag(Tags.PostBooking);
        try {
            const event = this._event();
            const space_list = this._model().resources || [];
            let spaces = space_list.filter(
                (_) => !ignore_space_check.includes(_.id),
            );
            const recurr = this._model().recurrence;
            const raw_value = this._model();
            this._model.update((m) => ({
                ...m,
                recurring: recurr?._pattern && recurr?._pattern !== 'none',
            }));
            if (!this._model().recurring) {
                this._model.update((m) => ({ ...m, recurrence: null }));
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
            this._model.update((m) => ({
                ...m,
                timezone: this.timezone || raw_value.timezone,
            }));
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
                    this._host(this._model().host, spaces[0]?.email),
                ).catch(on_error);
            } else if (!space_list.length && this.lone_space) {
                spaces = [await this._space_pipe.transform(this.lone_space)];
                this._model.update((m) => ({ ...m, resources: spaces }));
            }
            // Check for clashing events in recurring series
            if (this._model().recurring && spaces.length) {
                await this._checkRecurringClashes(
                    new CalendarEvent({
                        ...(this._model() as any),
                        date: all_day_period.date,
                        duration: all_day_period.duration,
                        date_end: all_day_period.date_end,
                        resources: spaces,
                    }),
                ).catch(on_error);
            }
            // Make sure host is an attendee
            this._model.update((m) => ({
                ...m,
                attendees: unique(
                    [...m.attendees, m.organiser || currentUser()],
                    'email',
                ),
            }));
            // Prevent meeting with external users without a space set
            if (
                !spaces.length &&
                this._model().attendees.find((_) => _.is_external)
            ) {
                this.removeLoadingTag(Tags.PostBooking);
                throw i18n('CALENDAR_EVENT.SPACE_EXTERNALS_ERROR');
            }
            // Handle setup and breakdown times
            const default_oflow = this._overflow();
            let [setup, breakdown] = [
                this._model().setup_time || default_oflow.setup,
                this._model().breakdown_time || default_oflow.breakdown,
            ];
            for (const space of spaces) {
                const overflow = this._overflow(space.id);
                setup = Math.max(overflow.setup || 0, setup);
                breakdown = Math.max(overflow.breakdown || 0, breakdown);
            }
            this._model.update((m) => ({
                ...m,
                setup_time: setup,
                breakdown_time: breakdown,
            }));
            // Apply shared catering fields to all orders
            for (const order of this._model().catering || []) {
                order.notes = this._model().catering_notes;
                order.charge_code = this._model().catering_charge_code;
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
            if (notify_new_attendees_only)
                query.notify_existing_attendees = false;
            const user_email = currentUser()?.email?.toLowerCase() || '';
            const source_calendar =
                event.calendar ||
                event.host ||
                event.creator ||
                raw_value.calendar ||
                raw_value.creator;
            const target_calendar = raw_value.host || raw_value.creator;
            const query_calendar = event.id ? source_calendar : target_calendar;
            const owner_fields = event.id
                ? [event.host, event.creator, event.calendar]
                : [raw_value.host, raw_value.creator, raw_value.calendar];
            const is_owner = owner_fields.some(
                (_) => _?.toLowerCase?.() === user_email,
            );
            if (
                ((is_owner && !ignore_owner) || force_calendar) &&
                query_calendar
            )
                query.calendar = query_calendar;
            if (force_calendar) delete query.system_id;
            const processed_assets = (this._model().assets || []).map((_) =>
                new AssetRequest(_).toJSON(),
            );
            const host = this._host(this._model().host, spaces[0]?.email);
            const ext: any = {
                department:
                    this._model().organiser?.department ||
                    currentUser()?.department,
            };
            if (this._model().host !== host)
                ext.host_override = this._model().host;
            const value = this._model();
            let created_event = await this._performBooking(
                new CalendarEvent({
                    ...(this._model() as any),
                    date: all_day_period.date,
                    duration: all_day_period.duration,
                    date_end: all_day_period.date_end,
                    old_system: event?.system,
                    host,
                    title: this._model().title || 'Space Booking',
                    attendees: this._model().attendees.map((_: any) => {
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
            const date_end =
                all_day_period.date_end ||
                all_day_period.date + all_day_period.duration * 60 * 1000;
            created_event = new CalendarEvent({
                ...created_event,
                event_start: Math.floor(all_day_period.date / 1000),
                event_end: Math.floor(date_end / 1000),
                date: all_day_period.date,
                duration: all_day_period.duration,
                date_end,
                resources: space_list,
                system: space_list[0] || null,
            });
            // Create visitor bookings for external attendees
            const domain = (currentUser()?.email || '@').split('@')[1];
            const visitors = this._model().attendees.filter(
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
            if (this._model().catering?.length) {
                await createBookingsForEvent(
                    created_event,
                    'catering-order',
                    this._model().catering as any,
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
                this._model().assets || event.extension_data.assets || [];
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
            this.last_success.set(created_event);
            return created_event;
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
        if (typeof error?.error?.message === 'string')
            return error.error.message;
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
        this._model.update((m) => ({ ...m, ...host_data }));
        const saved_form = JSON.parse(
            sessionStorage.getItem('PLACEOS.event_form') || '{}',
        );
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({ ...saved_form, ...host_data }),
        );
    }

    private async _checkResourcesAvailable(
        spaces: Space[],
        date: number,
        duration: number,
        ignore?: string,
    ) {
        if (!spaces?.length) return true;
        const event = this._event();
        const id_list = spaces.map((_) => _.id);
        const response = await (this.book_internal
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
              ));
        const unavailable = spaces.filter((_, i) => !response[i]);
        if (unavailable.length) {
            const names = unavailable
                .map((_) => _.display_name || _.name || _.email)
                .join(', ');
            throw i18n(
                unavailable.length > 1
                    ? 'CALENDAR_EVENT.SPACES_UNAVAILABLE'
                    : 'CALENDAR_EVENT.SPACE_UNAVAILABLE',
                { spaces: names },
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
        const user = await this._bookingRulesHost(host);
        await this._whenSettled(this._booking_rules_resource);
        const rules = { ...this.booking_rules() };
        // The booking panel does not eagerly load zone metadata, so the
        // reactive rules resource may still be empty when a booking is
        // submitted. Fetch any missing building rules on demand so they are
        // always enforced regardless of which app submitted the booking.
        for (const space of spaces) {
            const bld = this._org.buildings.find((b) =>
                space.zones.includes(b.id),
            );
            if (!bld || rules[bld.id]) continue;
            const metadata = await showMetadata(
                bld.id,
                'room_booking_rules',
            ).catch(() => ({ details: [] }) as any);
            rules[bld.id] =
                metadata.details instanceof Array ? metadata.details : [];
        }
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
                rules[bld?.id],
            );
        });
        const hidden = spaces.filter((_, i) => space_rules[i]?.hidden);
        if (hidden.length) {
            const names = hidden
                .map((_) => _.display_name || _.name || _.email)
                .join(', ');
            throw i18n(
                'CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN',
                { spaces: names },
                hidden.length,
            );
        }
        return true;
    }

    private async _bookingRulesHost(host: string) {
        const current_user = currentUser();
        if (
            this._settings.get(
                'app.events.force_current_user_for_booking_rules',
            ) === true ||
            host === current_user.email
        ) {
            return current_user;
        }
        return this._user_pipe
            .transform(host)
            .catch(() => ({ email: host, name: host }));
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

        const clashes = (await findEventClashes(event, {
            include_clash_time: true,
        })) as BookingClash[];

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
            false;

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
        return this.book_internal
            ? saveBooking(
                  newBookingFromCalendarEvent({
                      ...event.toJSON(),
                      status:
                          this._settings.get('app.bookings.no_approval') ===
                          true
                              ? 'approved'
                              : 'tentative',
                  } as any),
              ).then((_) => newCalendarEventFromBooking(_))
            : saveEvent(event, query);
    }

    private _setInitialAttendees(attendees: any[]) {
        this._initial_attendees = attendees.map((_) =>
            (_.email || _).toLowerCase(),
        );
    }

    private async _removeBookingAfterError(
        is_new: boolean,
        event: CalendarEvent,
        assets = false,
        e,
    ) {
        if (is_new) {
            await removeEvent(
                event.id,
                event.resources.length
                    ? {
                          calendar:
                              this._model().host || currentUser()?.email,
                          system_id: event.resources[0].id,
                      }
                    : {},
            );
            throw e?.status === 409
                ? i18n('CALENDAR_EVENT.ASSETS_CLASH_ERROR')
                : i18n('CALENDAR_EVENT.ASSETS_ERROR');
        } else if (assets) {
            throw i18n('CALENDAR_EVENT.ASSETS_PARTIAL_ERROR', {
                error: this._errorMessage(e) || e,
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

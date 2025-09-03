import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { startOfDay } from 'date-fns';
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

import { showMetadata, showUser } from '@placeos/ts-client';

import { EventLinkModalComponent } from './event-link-modal.component';
import { CalendarEvent, setDefaultCreator } from './event.class';
import { querySpaceAvailability, removeEvent, saveEvent } from './events.fn';
import { generateEventForm, newCalendarEventFromBooking } from './utilities';

import {
    AsyncHandler,
    BookingRuleset,
    current_user,
    currentUser,
    filterResourcesFromRules,
    firstTruthyValueFrom,
    flatten,
    getInvalidFields,
    i18n,
    nextValueFrom,
    rulesForResource,
    SettingsService,
    unique,
} from '@placeos/common';
import { newBookingFromCalendarEvent } from 'libs/bookings/src/lib/booking.utilities';
import {
    createBookingsForEvent,
    queryResourceAvailability,
    saveBooking,
} from 'libs/bookings/src/lib/bookings.fn';
import { Space } from 'libs/spaces/src/lib/space.class';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';

import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { validateAssetRequestsForResource } from 'libs/assets/src/lib/assets.fn';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { User } from 'libs/users/src/lib/user.class';

const BOOKING_URLS = [
    'book/rooms',
    'book/spaces',
    'book/meeting',
    'schedule/view',
    'confirm/success',
    'upcoming',
];

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
            map((list) => list.filter((_) => _.bookable && _.email)),
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
        this._org.initialised.pipe(filter((_) => _)),
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
                list = list.filter(
                    ({ capacity }) =>
                        filters.capacity <= capacity || capacity < 0,
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
    public readonly available_spaces = combineLatest([
        this.filtered_spaces,
        this.booking_rules$,
        this._event,
        this._options,
    ]).pipe(
        debounceTime(300),
        switchMap(([spaces, rules, event, { date, duration, all_day }]) => {
            this.addLoadingTag(Tags.Availability);
            const method = this.book_internal
                ? queryResourceAvailability
                : querySpaceAvailability;
            spaces = filterResourcesFromRules(
                spaces,
                { date, duration, resource: null, host: currentUser() },
                rules[this._org.building?.id] || [],
            ) as Space[];

            return method(
                spaces.map(({ id }) => id),
                (all_day ? startOfDay(date).valueOf() : date) || 60,
                (all_day ? Math.max(24 * 60, duration) : duration) || 60,
                event?.resources[0]?.id || event?.system?.id || event?.id,
                undefined,
                [event?.date, event?.duration],
            ).pipe(
                map((availability) => {
                    let list = spaces.filter((_, i) => availability[i]);
                    list = filterResourcesFromRules(
                        list,
                        {
                            date,
                            duration,
                            resource: null,
                            host: currentUser(),
                        },
                        rules[this._org.building?.id] || [],
                    ) as Space[];
                    return list;
                }),
                catchError(() => of([])),
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
        if (this.last_success()?.date === event.date)
            return this.last_success();
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
        return this._settings.get<string[]>('favourite_spaces') || [];
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
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => event.url.includes(_))
                ) {
                    this.clearForm();
                }
            }),
        );
        const previous = {};
        this.form.valueChanges.subscribe(({ date, duration }) => {
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
            this.storeForm();
        });
        this.loadLastSuccess();
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
        this._form.reset({
            ...event,
            catering: event.extension_data.catering,
            catering_charge_code:
                event.extension_data.catering?.[0]?.charge_code,
            catering_notes: event.extension_data.catering?.[0]?.notes,
        });
        if (!event.id) return;
        sessionStorage.setItem('PLACEOS.event', JSON.stringify(event.toJSON()));
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
        const event = this._event.getValue();
        const space_list = this.form.value.resources || [];
        let spaces = space_list.filter(
            (_) => !ignore_space_check.includes(_.id),
        );
        const recurr = this.form.value.recurrence;
        this.form.patchValue({
            recurring: recurr?._pattern && recurr?._pattern !== 'none',
        });
        if (!this.form.value.recurring) {
            this.form.patchValue({ recurrence: null });
        }
        const changed_spaces = spaces.filter(
            (_) => !event.resources.find((s) => s.id === _.id),
        );
        const has_time_changed =
            !event.id ||
            event.date !== this.form.value.date ||
            event.duration !== this.form.value.duration;

        // Validate that all selected room resource are available
        if (spaces.length && has_time_changed) {
            const space_list = await Promise.all(
                changed_spaces.map((_) => this._space_pipe.transform(_.email)),
            );
            const date = this.form.value.all_day
                ? startOfDay(this.form.value.date).valueOf()
                : this.form.value.date;
            const duration = this.form.value.all_day
                ? Math.max(24 * 60, this.form.value.duration)
                : this.form.value.duration;
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
        this.form.patchValue({ setup_time: setup, breakdown_time: breakdown });
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
        const is_owner =
            this.form.value.host === currentUser()?.email ||
            this.form.value.creator === currentUser()?.email;
        if ((is_owner && !ignore_owner) || force_calendar)
            query.calendar = this.form.value.host || this.form.value.creator;
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
                old_system: event?.system,
                host,
                title: this.form.value.title || 'Space Booking',
                attendees: this.form.value.attendees.map((_) => {
                    const v = { ..._ };
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
                    date: value.date,
                    duration: value.duration,
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
            if (!requests) throw i18n('CALENDAR_EVENT.ASSETS_INVALID_ERROR');
            await requests();
        }
        this.clearForm();
        sessionStorage.setItem(
            'PLACEOS.last_modified_event',
            JSON.stringify(created_event.toJSON()),
        );
        this.loadLastSuccess();
        return true;
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
        const user = await lastValueFrom(showUser(host)).catch(() => ({
            email: host,
        }));
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

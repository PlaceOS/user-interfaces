import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { queryParkingSpacesForZones } from '@placeos/assets';
import {
    AsyncHandler,
    Booking,
    BookingClash,
    BookingRuleset,
    BookingType,
    currentUser,
    Desk,
    endOfDayInTimezone,
    flatten,
    getInvalidFields,
    getNextBookableTime,
    i18n,
    isWithinBookableHours,
    nextValueFrom,
    notifyError,
    notifyWarn,
    OrganisationService,
    rulesForResource,
    SETTING_KEYS,
    settingSignal,
    SettingsService,
    startOfDayInTimezone,
    unique,
    User,
} from '@placeos/common';
import {
    cleanObject,
    listChildMetadata,
    PlaceZone,
    showMetadata,
    showUser,
} from '@placeos/ts-client';
import { addDays, addMinutes, endOfDay, format, getUnixTime } from 'date-fns';
import { openRecurringClashModal } from 'libs/components/src/lib/recurring-clash-modal.component';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    lastValueFrom,
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
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { BookingLinkModalComponent } from './booking-link-modal.component';
import {
    findNearbyFeature,
    generateBookingForm,
    loadLockerBanks,
    loadLockers,
} from './booking.utilities';
import {
    bookedResourceList,
    findBookingClashes,
    queryBookings,
    removeBooking,
    saveBooking,
} from './bookings.fn';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';

import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { validateAssetRequestsForResource } from 'libs/assets/src/lib/assets.fn';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { PaymentsService } from 'libs/payments/src/lib/payments.service';

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

const BOOKING_TYPES = ['desk', 'parking', 'locker', 'catering'];

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: BookingType;
    /** Zone to check available */
    zone_id?: string;
    /** List of zones to check available */
    zones?: string[];
    /** List of features that the asset should associate */
    features?: string[];
    /** Whether booking is for a group */
    group?: boolean;
    /** Recurrence Pattern */
    pattern?: 'none' | 'daily' | 'weekly' | 'monthly';
    /** Recurrence ending */
    recurr_end?: number;
    /** List of group members to book for */
    members?: User[];
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
    /** Whether to group bookings */
    disable_date?: boolean;
    /** Whether resource has accessibility options */
    show_accessible?: boolean;
}

export interface BookingAsset {
    id: string;
    map_id?: string;
    display_name?: string;
    name: string;
    bookable: boolean;
    zone?: PlaceZone;
    level?: PlaceZone;
    location?: string;
    images?: string[];
    groups?: string[];
    assigned_to?: string;
    features: string[];
}

@Injectable({
    providedIn: 'root',
})
export class BookingFormService extends AsyncHandler {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _payments = inject(PaymentsService);
    private _assets = inject(AssetStateService);
    private _options = new BehaviorSubject<BookingFlowOptions>({
        type: 'desk',
    });
    private _booking = new BehaviorSubject<Booking>(null);
    private _resource_use: Record<string, string> = {};
    private _loading = new BehaviorSubject<string>('');
    private readonly _rules_options = this._options.pipe(
        map(({ type }) => type),
        distinctUntilChanged(),
    );
    private readonly _availability_options = this._options.pipe(
        map(({ type, zones, zone_id, features, show_fav }) => ({
            type,
            zones: zones || [],
            zone_id: zone_id || '',
            features: features || [],
            show_fav: !!show_fav,
        })),
        distinctUntilChanged((prev, next) => {
            const same_zones =
                prev.zones.length === next.zones.length &&
                prev.zones.every((zone, idx) => zone === next.zones[idx]);
            const same_features =
                prev.features.length === next.features.length &&
                prev.features.every(
                    (feature, idx) => feature === next.features[idx],
                );
            return (
                prev.type === next.type &&
                prev.zone_id === next.zone_id &&
                prev.show_fav === next.show_fav &&
                same_zones &&
                same_features
            );
        }),
    );
    private _favourites: Record<BookingType, WritableSignal<string[]>> = {
        ' ': settingSignal('favorites', [], true),
        room: settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true),
        desk: settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true),
        locker: settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true),
        parking: settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true),
        staff: settingSignal('favorites', [], true),
        visitor: settingSignal('favorites', [], true),
        'group-event': settingSignal('favorites', [], true),
        'asset-request': settingSignal('favorites', [], true),
        'catering-order': settingSignal('favorites', [], true),
    };

    public last_success: Booking = new Booking(
        JSON.parse(
            sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}',
        ),
    );
    public get last_count(): number {
        return parseInt(
            sessionStorage.getItem('PLACEOS.last_booked_count') || '1',
            10,
        );
    }
    public set last_count(value: number) {
        sessionStorage.setItem('PLACEOS.last_booked_count', String(value));
    }
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly form = generateBookingForm();
    public readonly view = signal<BookingFlowView>('form');

    public readonly resources: Observable<BookingAsset[]> = combineLatest([
        this._org.active_building,
        this.options.pipe(distinctUntilKeyChanged('type')),
    ]).pipe(
        debounceTime(300),
        switchMap(([bld, { type }]) => {
            if (!bld) return of([]);
            const useRegion = () => this._settings.get('app.use_region');
            switch (type) {
                case 'desk':
                    this._loading.next(i18n('BOOKINGS.DESKS_LOADING'));
                    return this.loadResourceList('desks' as any);
                case 'parking':
                    this._loading.next(i18n('BOOKINGS.PARKING_LOADING'));
                    return this.loadParkingResources();
                case 'locker':
                    this._loading.next(i18n('BOOKINGS.LOCKERS_LOADING'));
                    return loadLockers(
                        this._org,
                        of([bld]),
                        loadLockerBanks(this._org, of([bld]), useRegion),
                        useRegion,
                    );
            }
            return of([]);
        }),
        tap(() => this._loading.next(``)),
        shareReplay(1),
    );

    public readonly features: Observable<string[]> = this.resources.pipe(
        map((resource) => {
            const list: string[] = [];
            for (const { features } of resource) {
                features instanceof Array
                    ? features.forEach((_) => list.push(_))
                    : null;
            }
            return unique(list).sort((a, b) => a.localeCompare(b));
        }),
        shareReplay(1),
    );

    public readonly booking_rules: Observable<
        Record<string, BookingRuleset[]>
    > = combineLatest([this._org.building_list, this._rules_options]).pipe(
        switchMap(([list, type]) =>
            Promise.all(
                list.map((bld) =>
                    lastValueFrom(
                        showMetadata(bld.id, `${type}_booking_rules`),
                    ),
                ),
            ),
        ),
        map((building_rules) => {
            const mapping = {};
            for (const rules of building_rules) {
                mapping[rules.id] =
                    rules.details instanceof Array ? rules.details : [];
            }
            return mapping;
        }),
        shareReplay(1),
    );

    public readonly available_resources: Observable<BookingAsset[]> =
        combineLatest([
            this._availability_options,
            this.resources,
            this.booking_rules,
            merge(this.form.get('user').valueChanges, timer(1000)),
            merge(this.form.get('date').valueChanges, timer(1000)),
            merge(this.form.get('duration').valueChanges, timer(1000)),
        ]).pipe(
            filter(
                () =>
                    this.form.getRawValue().date > 0 &&
                    this.form.getRawValue().duration > 0,
            ),
            debounceTime(500),
            tap(([{ type }]) =>
                this._loading.next(
                    i18n('BOOKINGS.LOADING_AVAILABILITY', { type }),
                ),
            ),
            switchMap(([options, resources, restrictions]) => {
                let { all_day, date, duration, user } = this.form.getRawValue();
                if (all_day) {
                    date = startOfDayInTimezone(date, this.timezone);
                    duration = 24 * 60 - 1;
                }
                const favourites = this._favourites[options.type]?.() || [];
                const default_zone =
                    (this._settings.get('app.use_region')
                        ? this._org.region?.id
                        : this._org.building?.id) || this._org.organisation.id;
                return bookedResourceList({
                    period_start: getUnixTime(date),
                    period_end: getUnixTime(addMinutes(date, duration)),
                    type: options.type,
                    zones: options.zones?.length
                        ? options.zones.join(',')
                        : options.zone_id || default_zone,
                }).pipe(
                    map((booked_ids) => {
                        this._resource_use = {};
                        for (const id of booked_ids) {
                            this._resource_use[id] = ' ';
                        }
                        const available = resources.filter((asset) => {
                            const is_restricted = rulesForResource(
                                {
                                    date,
                                    duration,
                                    resource: asset,
                                    host: user || currentUser(),
                                },
                                restrictions[asset.zone?.id] ||
                                    restrictions[asset.zone?.parent_id] ||
                                    restrictions[this._org.building.id] ||
                                    [],
                            ).hidden;
                            // Check zone filtering
                            const zone_filter = options.zones?.length
                                ? options.zones.some(
                                      (zone_id) =>
                                          zone_id === asset.zone?.id ||
                                          zone_id === asset.zone?.parent_id,
                                  )
                                : options.zone_id
                                  ? options.zone_id === asset.zone?.id ||
                                    options.zone_id === asset.zone?.parent_id
                                  : true;
                            return (
                                !is_restricted &&
                                (!options.show_fav ||
                                    favourites.includes(asset.id)) &&
                                (!asset.groups?.length ||
                                    asset.groups.some((grp) =>
                                        currentUser().groups.includes(grp),
                                    )) &&
                                asset.bookable !== false &&
                                (!options.features ||
                                    options.features?.every((_) =>
                                        asset.features.includes(_),
                                    )) &&
                                zone_filter &&
                                !booked_ids.includes(asset.id)
                            );
                        });
                        return available;
                    }),
                    catchError(() => of([])),
                );
            }),
            tap(() => this._loading.next('')),
            shareReplay(1),
        );

    public readonly grouped_availability = combineLatest([
        this.options,
        this.available_resources,
    ]).pipe(
        map(([options, resource]) => {
            const groups = [];
            const asset_list = [...resource].sort((a, b) =>
                a.zone?.id?.localeCompare(b.zone?.id),
            );
            const members = options.members?.length
                ? options.members
                : [currentUser()];
            while (asset_list.length) {
                const group = [];
                let asset = asset_list.pop();
                while (group.length < members.length) {
                    if (
                        group.length &&
                        !group.find((_) => _.zone?.id === asset.zone?.id)
                    ) {
                        break;
                    }
                    group.push(asset);
                    asset = asset_list.pop();
                }
                if (group.length < members.length) continue;
                groups.push(group);
            }
            return groups;
        }),
    );

    public get booking() {
        return this._booking.getValue();
    }

    public resourceUserName(id: string) {
        return this._resource_use[id];
    }

    private get timezone() {
        const use_building_timezone = this.setting('use_building_timezone');
        return use_building_timezone ? this._org.building?.timezone || '' : '';
    }

    public newForm(type: BookingType, booking: Booking = new Booking({})) {
        if (type !== this._options.getValue().type) this.clearForm();
        this.setOptions({ type });
        if (!booking.id) {
            (booking as any).all_day =
                this._settings.get(`app.${type}s.all_day_default`) ??
                this._settings.get(`app.${type}.all_day_default`) ??
                this._settings.get('app.bookings.all_day_default');
        }
        this.form.reset();
        this.form.patchValue(
            cleanObject(
                {
                    ...booking.extension_data,
                    ...booking,
                    _in_progress:
                        booking.state === 'started' ||
                        booking.state === 'in_progress',
                },
                [null, undefined, ''],
            ),
            { emitEvent: false },
        );
        if (!booking.id) {
            const bookable_hours =
                this._settings.get(`app.${type}s.bookable_hours`) ||
                this._settings.get('app.bookings.bookable_hours');
            const next_time = getNextBookableTime(bookable_hours);
            if (next_time) {
                (booking as any).date = next_time;
                this.form.patchValue({ date: next_time }, { emitEvent: false });
            }
        }
        this.subscription(
            'form_change',
            this.form.valueChanges.subscribe(() => {
                const { date, duration } = this.form.getRawValue();
                this._assets.setOptions({ date, duration });
                this.storeForm();
            }),
        );
        this.subscription(
            'all_day_change',
            this.form.get('all_day').valueChanges.subscribe((all_day) => {
                if (!all_day) this.form.patchValue({ duration: 60 });
            }),
        );
        this.timeout('date', async () =>
            this.form.patchValue({
                date: booking.date,
                duration: booking.duration,
            }),
        );
        this._booking.next(new Booking(booking));
        this._options.next({ type: this._options.getValue().type });
        // Persist immediately to avoid edit-flow races where the consumer
        // reloads from session before async form change events occur.
        this.storeForm();
        this.timeout('set-resource', async () => {
            const resources = this.form.getRawValue().resources;
            if (!resources?.length) return;
            const item_list = await nextValueFrom(this.resources);
            const new_list = resources.map(
                (asset) => item_list.find((_) => _.id == asset.id) || asset,
            );
            this.form.patchValue({ resources: new_list });
        });
    }

    constructor() {
        super();
        this.subscription(
            'router.bookings',
            this._router.events.subscribe((booking: Event) => {
                if (
                    booking instanceof NavigationEnd &&
                    !booking.url.includes('book') &&
                    !BOOKING_TYPES.find((_) => booking.url.includes(_))
                ) {
                    this.clearForm();
                }
            }),
        );
        this._org.initialised
            .pipe(first((_) => _))
            .subscribe(() => this.setOptions({}));
    }

    public setView(value: BookingFlowView) {
        this.view.set(value);
    }

    public setOptions(value: Partial<BookingFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public setFeature(feature: string, enable: boolean) {
        if (!feature?.length) return;
        const features = this._options.getValue()?.features || [];
        if (enable && !features.includes(feature)) features.push(feature);
        if (!enable && features.includes(feature))
            features.splice(
                features.findIndex((e) => e === feature),
                1,
            );
        this.setOptions({ features });
    }

    public resetForm() {
        if (!sessionStorage.getItem('PLACEOS.booking_form')) {
            return this.newForm(this._options.getValue().type);
        }
        const booking = this._booking.getValue();
        this.form.reset({ user: currentUser(), booked_by: currentUser() });
        this.form.patchValue(
            cleanObject(
                {
                    ...(booking || {}),
                    ...(booking?.extension_data || {}),
                    _in_progress: booking?.state === 'started',
                },
                [null, undefined, ''],
            ),
        );
        this._options.next({ type: this._options.getValue().type });
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.booking_form');
        sessionStorage.removeItem('PLACEOS.booking_form_options');
        this.newForm(this._options.getValue().type);
    }

    public storeForm() {
        sessionStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify({
                ...this._booking.getValue(),
                ...cleanObject(this.form.getRawValue() || {}, [
                    null,
                    undefined,
                    '',
                ]),
            }),
        );
        sessionStorage.setItem(
            'PLACEOS.booking_form_filters',
            JSON.stringify(this._options.getValue() || {}),
        );
    }

    public loadForm() {
        this.form.reset({ user: currentUser(), booked_by: currentUser() });
        const data = JSON.parse(
            sessionStorage.getItem('PLACEOS.booking_form') || '{}',
        );
        const booking = new Booking(data);
        this._booking.next(booking);
        const booking_data = cleanObject(
            {
                ...data,
                ...(booking || {}),
                ...(booking?.extension_data || {}),
                _in_progress: booking?.state === 'started',
            },
            [null, undefined, ''],
        );
        this.form.patchValue(booking_data, { emitEvent: false });
        this.timeout('load-date', async () =>
            this.form.patchValue({
                date: booking.date,
                duration: booking.duration,
            }),
        );
        this.setOptions({
            ...JSON.parse(
                sessionStorage.getItem('PLACEOS.booking_form_filters') || '{}',
            ),
        });
    }

    public setting(key: string) {
        const type =
            this.form.getRawValue().booking_type ||
            this._options.getValue().type;
        return (
            this._settings.get(`app.${type}s.${key}`) ??
            this._settings.get(`app.${type}.${key}`) ??
            this._settings.get(`app.bookings.${key}`)
        );
    }

    public clearOldState() {
        sessionStorage.removeItem('PLACEOS.last_booked_booking');
        sessionStorage.removeItem('PLACEOS.last_booked_count');
        this.last_success = new Booking();
    }

    public openBookingLinkModal(force = false) {
        this.form.markAllAsTouched();
        if (!this.form.valid && !force) return;
        const event = new Booking({
            ...this.booking,
            ...this.form.getRawValue(),
        });
        this._dialog.open(BookingLinkModalComponent, { data: event });
    }

    public async confirmPost() {
        await this.checkQuestions();
        const options = this._options.getValue();
        const value = this.form.getRawValue();

        const content = i18n(
            options.group
                ? 'BOOKINGS.CONFIRM_MSG_GROUP'
                : 'BOOKINGS.CONFIRM_MSG',
            {
                type: options.type,
                date:
                    format(value.date, 'dd MMM yyyy') +
                    (value.duration < 12 * 60
                        ? ' at ' + format(value.date, 'h:mm a')
                        : ''),
            },
        );

        const details = await openConfirmModal(
            {
                title: i18n('BOOKINGS.CONFIRM_TITLE', { type: options.type }),
                content,
                icon: { content: 'event_available' },
            },
            this._dialog,
        );
        if (details?.reason !== 'done') throw 'User cancelled';
        details.loading(i18n('BOOKINGS.CONFIRM_LOADING'));
        if (options.group) {
            await this.postFormForGroup().catch((_) => {
                notifyError(this._error_message(_));
                details.close();
                throw _;
            });
        } else
            await this.postForm().catch((_) => {
                notifyError(this._error_message(_));
                details.close();
                throw _;
            });
        details.close();
    }

    public async postForm(ignore_check = false, reset_form = true) {
        if (!this.form) throw 'No form for booking';
        if (!this.form.valid) {
            const invalid_fields = getInvalidFields(
                this.form,
                this._invalid_field_mappings(),
            );
            throw i18n('FORM.INVALID_FIELDS', {
                field_list: invalid_fields.join(', '),
            });
        }
        this.form.patchValue({
            booking_type:
                this.form.getRawValue().booking_type ||
                this._options.getValue().type,
        });
        localStorage.removeItem('PLACEOS.last_group_booking_ids');
        const value = this.form.getRawValue();
        const booking = this._booking.getValue() || new Booking();
        const bookable_hours = this.setting('bookable_hours');
        if (
            !isWithinBookableHours(
                value.date,
                bookable_hours,
                this.timezone || value.timezone,
            )
        ) {
            throw i18n('FORM.BOOKABLE_HOURS_ERROR');
        }
        if (!ignore_check) {
            const host =
                value.user?.email || value.user_email || currentUser()?.email;
            const booking_type =
                value.booking_type || this._options.getValue().type;
            const skip_asset_availability = booking_type === 'visitor';
            if (!skip_asset_availability) {
                await this._checkResourceAvailable(
                    {
                        ...booking,
                        ...value,
                        user_email: host,
                    },
                    this._options.getValue().type,
                );
            }
            await this._checkResourceRules(
                value.resources,
                value.date,
                value.duration,
                host,
            );
            await this._checkRecurringClashes(
                {
                    ...booking,
                    ...value,
                    user_email: host,
                },
                this._options.getValue().type,
            );
        }
        if (this._payments.enabled) {
            const receipt = await this._payments.makePayment({
                type: this._options.getValue().type,
                resource_name: value.asset_name,
                date: value.date,
                duration: value.duration,
                all_day: value.all_day,
            });
            if (!receipt?.success) return;
            (value as any).extension_data = {
                invoice: receipt,
                invoice_id: receipt.invoice_id,
            };
        }
        this._loading.next('Saving booking');
        delete value.booking_asset;
        value.timezone = this.timezone || value.timezone;
        if (value.all_day) {
            value.date = startOfDayInTimezone(value.date, value.timezone);
            value.duration = 24 * 60 - 1;
        }
        const { event_id, parent_id } = value;
        delete value.event_id;
        const resources = value.resources || [];
        const zone =
            this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
        const zones = unique(
            [
                this._org.organisation?.id,
                this._org.region?.id,
                zone?.parent_id,
                zone?.id,
                ...value.zones,
            ].filter((_) => _),
        );
        const q: Record<string, any> = event_id
            ? { ical_uid: value.ical_uid, event_id: event_id }
            : parent_id
              ? { booking_id: parent_id }
              : {};
        if (booking.instance && !value.update_master) {
            q.instance = true;
            q.start_time = booking.booking_start;
        }
        if (value.recurrence_type && value.recurrence_type !== 'none') {
            const available_period = getUnixTime(
                endOfDay(
                    addDays(
                        Date.now(),
                        this._settings.get(
                            `app.${value.booking_type}s.available_period`,
                        ) || 90,
                    ),
                ),
            );
            if (
                !value.recurrence_end ||
                value.recurrence_end > available_period
            ) {
                value.recurrence_end = available_period;
            }
        }
        const group_members =
            this._options.getValue().group &&
            this._options.getValue().members?.length
                ? this.mapGroupMembers(
                      value.booking_type,
                      this._options.getValue().members,
                  )
                : [];
        const result = await lastValueFrom(
            saveBooking(
                new Booking({
                    ...this._options.getValue(),
                    ...value,
                    description:
                        value.booking_type === 'visitor'
                            ? value.description ||
                              value.title ||
                              value.asset_name
                            : value.asset_name || value.description,
                    user_name: value.user?.name || value.user_name,
                    user_email: value.user?.email || value.user_email,
                    extension_data: {
                        ...((value as any).extension_data || {}),
                        assigned_asset_id:
                            value.booking_type === 'desk'
                                ? value.asset_id
                                : undefined,
                        assigned_asset_name:
                            value.booking_type === 'desk'
                                ? value.asset_name || value.asset_id
                                : undefined,
                        assets: value.assets.map((_) => _.toJSON()),
                        group: value.group,
                        phone: value.phone,
                        company: value.company,
                        ...(value.booking_type === 'visitor'
                            ? {
                                  international: !!value.international,
                                  visitor_name:
                                      value.asset_name || value.asset_id || '',
                              }
                            : {}),
                        ...(group_members.length
                            ? {
                                  group_members,
                              }
                            : {}),
                        department:
                            value.user?.department || currentUser()?.department,
                    },
                    approved: this.setting('no_approval') === true,
                    zones,
                }),
                q,
            ),
        ).catch((e) => {
            this._loading.next('');
            throw e?.error || e;
        });
        if (value.assets?.length || booking.extension_data.assets?.length) {
            const requests = await validateAssetRequestsForResource(
                { ...result, from_booking: true },
                {
                    date: value.date,
                    duration: value.duration,
                    all_day: value.all_day,
                    host: value.booked_by_email,
                    zones,
                },
                value.assets,
            ).catch((e) => {
                console.error("Couldn't update asset requests", e);
                if (e?.status === 409) {
                    notifyError(i18n('BOOKINGS.ASSETS_CLASH_ERROR'));
                }
                this._loading.next('');
                throw e?.error || e;
            });
            if (!requests) throw i18n('BOOKINGS.ASSETS_INVALID_ERROR');
            await requests();
        }
        this._loading.next('');
        const { booking_type } = value;
        if (reset_form) {
            this.clearForm();
            this.form?.patchValue({ booking_type });
        }
        this.last_success = result;
        sessionStorage.setItem(
            'PLACEOS.last_booked_booking',
            JSON.stringify(result),
        );
        if (reset_form) this.setView('success');
        return result;
    }

    /** Whether auto-allocation is enabled for the current booking type */
    public get auto_allocation(): boolean {
        return !!this.setting('auto_allocation');
    }

    /**
     * Auto-allocate a desk from the active building.
     * Picks the level with the most available desks, then selects one at random.
     */
    public async autoAllocateDesk(): Promise<void> {
        const available = await nextValueFrom(this.available_resources);
        if (!available?.length) {
            throw i18n('BOOKINGS.DESK_AVAILABLE_ERROR');
        }
        // Group available desks by zone (level) id
        const zone_map: Record<string, BookingAsset[]> = {};
        for (const asset of available) {
            const zone_id = asset.zone?.id || 'unknown';
            if (!zone_map[zone_id]) zone_map[zone_id] = [];
            zone_map[zone_id].push(asset);
        }
        // Find the level with the most free desks
        let best_zone_id = '';
        let best_count = 0;
        for (const zone_id in zone_map) {
            if (zone_map[zone_id].length > best_count) {
                best_count = zone_map[zone_id].length;
                best_zone_id = zone_id;
            }
        }
        const candidates = zone_map[best_zone_id];
        // Select a random desk from that level
        const selected =
            candidates[Math.floor(Math.random() * candidates.length)];
        const zone = selected.zone;
        this.form.patchValue({
            resources: [selected],
            asset_id: selected.id,
            asset_name: selected.name || selected.id,
            map_id: selected.map_id || selected.id,
            booking_asset: selected,
            zones: (zone
                ? unique([
                      this._org.organisation.id,
                      this._org.region?.id,
                      zone.parent_id,
                      zone.id,
                  ])
                : [this._org.organisation.id, this._org.region?.id]
            ).filter((_) => _),
        });
    }

    public async postFormForGroup() {
        const { members, group, type } = this._options.getValue();
        if (!group) throw i18n('BOOKINGS.GROUP_NOT_SET');
        const rollback_on_group_error =
            this.setting('rollback_group_bookings') === true;
        const member_list = members || [];
        const extra_members = member_list.filter(
            (_) => _.email !== currentUser().email,
        );
        if (extra_members.length <= 0) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const form = this.form.getRawValue();
        const group_members = unique(
            [currentUser(), ...extra_members],
            'email',
        );
        const resources = await this._resolveDeskGroupResources(
            group_members,
            form,
        );
        const unavailable_errors: string[] = [];
        const available = await Promise.all(
            group_members.map(async (member, idx) => {
                const resource = resources[idx];
                if (!resource) {
                    unavailable_errors.push(
                        `${member.name || member.email}: ${i18n('BOOKINGS.GROUP_MEMBER_NO_RESOURCE')}`,
                    );
                    return false;
                }
                try {
                    return await this._checkResourceAvailable(
                        {
                            ...form,
                            asset_id: resource.id,
                            user_email: member.email,
                        },
                        type,
                    );
                } catch (error) {
                    unavailable_errors.push(
                        `${member.name || member.email}: ${this._error_message(error)}`,
                    );
                    return false;
                }
            }),
        );
        const unavailable = group_members.filter((_, idx) => !available[idx]);
        const group_name = `${currentUser().email}[${format(
            Date.now(),
            'yyyy-MM-dd',
        )}]`;
        const group_error = i18n('BOOKINGS.GROUP_SOME_HAVE_BOOKINGS', {
            members: unavailable.map((_) => _.name || _.email)?.join(', '),
        });
        let user_booking: Booking = null;
        const booking_ids: string[] = [];
        let id = '';
        try {
            for (let i = 0; i < group_members.length; i++) {
                if (!available[i]) continue;
                const user = group_members[i];
                const asset = resources[i];
                const assets =
                    user.email == currentUser().email ? form.assets : [];
                const zones = unique(
                    [
                        this._org.organisation?.id,
                        this._org.region?.id,
                        asset?.zone?.parent_id,
                        asset?.zone?.id,
                        ...form.zones,
                    ].filter((_) => _),
                );
                this.form.patchValue({
                    ...form,
                    assets,
                    parent_id: id,
                    user: user as any,
                    user_email: user.email,
                    user_id: user.id,
                    asset_id: asset?.id,
                    asset_name: asset.name || asset.id,
                    description: asset.name || asset.id,
                    map_id: asset?.map_id || asset?.id,
                    group: group_name,
                    zones,
                });
                const bkn = await this.postForm(true, false).catch((error) => {
                    throw `${user.name || user.email}: ${this._error_message(error)}`;
                });
                if (bkn?.id) booking_ids.push(bkn.id);
                if (bkn.id && !id) id = bkn.id;
                if (bkn.user_email === currentUser().email) user_booking = bkn;
            }
            if (unavailable.length) {
                const unavailable_error = unavailable_errors.length
                    ? unavailable_errors.join('\n')
                    : group_error;
                if (rollback_on_group_error) {
                    await this.rollbackGroupBookings(booking_ids);
                    throw unavailable_error;
                }
                notifyWarn(unavailable_error);
            }
        } catch (error) {
            if (rollback_on_group_error && booking_ids.length) {
                await this.rollbackGroupBookings(booking_ids);
            }
            throw this._error_message(error);
        }
        this.clearForm();
        this.form?.patchValue({ booking_type: type });
        this.setView('success');
        return user_booking;
    }

    public async postFormForVisitorGroup() {
        const { members, group } = this._options.getValue();
        if (!group) throw i18n('BOOKINGS.GROUP_NOT_SET');
        if (!members?.length) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const rollback_on_group_error =
            this.setting('rollback_group_bookings') === true;
        const form = this.form.getRawValue();
        const group_name = `${currentUser().email}[${format(
            Date.now(),
            'yyyy-MM-dd',
        )}]`;
        const booking_ids: string[] = [];
        let parent_id = '';
        let first_booking: Booking = null;
        try {
            for (const visitor of members) {
                if (!visitor.email) continue;
                const visitor_name = visitor.name || visitor.email;
                this.form.patchValue({
                    ...form,
                    id: '',
                    asset_id: visitor.email,
                    asset_name: visitor_name,
                    international:
                        (visitor as any).international ||
                        !!visitor.extension_data?.international,
                    company: (visitor as any).company || visitor.organisation,
                    phone: visitor.phone,
                    parent_id,
                    group: group_name,
                    zones: form.zones?.length
                        ? [...form.zones]
                        : [...(this._booking.getValue()?.zones || [])],
                    assets: [],
                    attendees: [
                        new User({
                            name: visitor_name,
                            email: visitor.email,
                            organisation:
                                (visitor as any).company ||
                                visitor.organisation,
                            phone: visitor.phone,
                        }),
                    ],
                });
                const bkn = await this.postForm(true, false).catch((error) => {
                    throw `${visitor.name || visitor.email}: ${this._error_message(error)}`;
                });
                if (bkn?.id) booking_ids.push(bkn.id);
                if (bkn?.id && !parent_id) {
                    parent_id = bkn.id;
                    first_booking = bkn;
                }
            }
        } catch (error) {
            if (rollback_on_group_error && booking_ids.length) {
                await this.rollbackGroupBookings(booking_ids);
            }
            throw this._error_message(error);
        }
        this.clearForm();
        this.form?.patchValue({ booking_type: 'visitor' });
        this.setView('success');
        return first_booking;
    }

    public async loadGroupSiblings(booking: Booking): Promise<Booking[]> {
        if (!booking?.id) return [];
        const parent_id = booking.parent_id || booking.id;
        const { type } = this._options.getValue();
        return lastValueFrom(
            queryBookings({
                period_start: getUnixTime(booking.date),
                period_end: getUnixTime(
                    addMinutes(booking.date, booking.duration),
                ),
                type,
            }).pipe(
                map((list) =>
                    list.filter(
                        (b) => b.id === parent_id || b.parent_id === parent_id,
                    ),
                ),
            ),
        );
    }

    public async loadGroupMembersForBooking(booking: Booking): Promise<User[]> {
        if (!booking?.id) return [];
        const type =
            this._options.getValue().type || booking.booking_type || 'desk';
        const is_visitor = type === 'visitor';
        const sibling_list = await this.loadGroupSiblings(booking);
        if (sibling_list.length) {
            return this.mapGroupMembersFromBookings(sibling_list, is_visitor);
        }
        return this.mapGroupMembersFromExtension(
            booking.extension_data?.group_members || [],
            is_visitor,
        );
    }

    public async editFormForGroup(
        existing_siblings: Booking[],
    ): Promise<Booking> {
        const { members, type } = this._options.getValue();
        if (!members?.length) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const form = this.form.getRawValue();
        const base_form = { ...form, id: '' };
        const parent_id = form.parent_id || form.id;
        const group_name =
            form.group ||
            `${currentUser().email}[${format(Date.now(), 'yyyy-MM-dd')}]`;
        const is_visitor = type === 'visitor';
        const sibling_map: Record<string, Booking> = {};
        for (const s of existing_siblings) {
            const key = is_visitor ? s.asset_id : s.user_email;
            if (key) sibling_map[key] = s;
        }
        const member_keys = new Set(members.map((m) => m.email));
        const to_delete = existing_siblings.filter((s) => {
            const key = is_visitor ? s.asset_id : s.user_email;
            return key && !member_keys.has(key);
        });
        await Promise.all(
            to_delete.map((s) => lastValueFrom(removeBooking(s.id))),
        );
        const desk_resources =
            !is_visitor && type === 'desk'
                ? await this._resolveDeskGroupResources(members, form, [
                      ...existing_siblings.filter(
                          (s) => !to_delete.find((item) => item.id === s.id),
                      ),
                  ])
                : [];
        let first_result: Booking = null;
        try {
            const zones = unique(
                [
                    this._org.organisation?.id,
                    this._org.region.id,
                    ...base_form.zones,
                ].filter((_) => _),
            );
            for (let index = 0; index < members.length; index++) {
                const member = members[index];
                if (!member.email) continue;
                const existing = sibling_map[member.email];
                const booking_id = existing?.id || '';
                if (is_visitor) {
                    const member_name = member.name || member.email;
                    this.form.patchValue({
                        ...base_form,
                        id: booking_id,
                        parent_id: booking_id === parent_id ? '' : parent_id,
                        group: group_name,
                        asset_id: member.email,
                        asset_name: member_name,
                        international:
                            (member as any).international ||
                            !!member.extension_data?.international,
                        company: (member as any).company || member.organisation,
                        phone: member.phone,
                        assets: [],
                        attendees: [
                            new User({
                                name: member_name,
                                email: member.email,
                                organisation:
                                    (member as any).company ||
                                    member.organisation,
                                phone: member.phone,
                            }),
                        ],
                    });
                } else {
                    const asset = desk_resources[index] || ({} as Desk);
                    this.form.patchValue({
                        ...base_form,
                        id: booking_id,
                        parent_id: booking_id === parent_id ? '' : parent_id,
                        group: group_name,
                        user: member as any,
                        user_email: member.email,
                        user_id: member.id,
                        asset_id: asset.id,
                        asset_name: asset.name || asset.id,
                        description: asset.name || asset.id,
                        map_id: asset.map_id || asset.id,
                    });
                }
                this.form.controls.zones.setValue(zones);
                const bkn = await this.postForm(true, false);
                if (!first_result) first_result = bkn;
            }
        } catch (error) {
            throw this._error_message(error);
        }
        this.clearForm();
        this.form?.patchValue({ booking_type: type });
        this.setView('success');
        return first_result;
    }

    private _error_message(error: any) {
        if (typeof error === 'string') return error;
        if (error instanceof Error && error.message) return error.message;
        if (typeof error?.error === 'string') return error.error;
        if (typeof error?.message === 'string') return error.message;
        if (typeof error?.error?.message === 'string') {
            return error.error.message;
        }
        return i18n('BOOKINGS.ERROR_GENERIC');
    }

    private _invalid_field_mappings(): Record<string, string> {
        const resource_label = this._resource_type_label();
        return {
            date: 'Start Time',
            duration: 'Duration',
            asset_id: resource_label,
        };
    }

    private _resource_type_label(): string {
        const form_booking_type = this.form.getRawValue().booking_type;
        const booking_type =
            form_booking_type && form_booking_type !== ' '
                ? form_booking_type
                : this._options.getValue().type;
        switch (booking_type) {
            case 'desk':
                return 'Desk';
            case 'parking':
                return 'Parking Space';
            case 'locker':
                return 'Locker';
            case 'room':
            case 'group-event':
                return 'Room';
            case 'visitor':
                return 'Visitor';
            default:
                return 'Resource';
        }
    }

    private mapGroupMembers(type: BookingType, members: User[] = []) {
        const user_list =
            type === 'visitor'
                ? members
                : unique([currentUser(), ...(members || [])], 'email');
        return user_list
            .filter((member) => !!member?.email)
            .map((member) => ({
                id: member.id || '',
                name: member.name || member.email,
                email: member.email,
                company: (member as any).company || member.organisation || '',
                phone: member.phone || '',
                international:
                    !!(member as any).international ||
                    !!member.extension_data?.international,
            }));
    }

    private mapGroupMembersFromBookings(
        bookings: Booking[] = [],
        is_visitor = false,
    ) {
        return unique(
            bookings
                .map((booking) => {
                    const group_member = (
                        booking.extension_data?.group_members || []
                    ).find((member) => member?.email === booking.asset_id);
                    return is_visitor
                        ? new User({
                              name:
                                  group_member?.name ||
                                  booking.extension_data?.visitor_name ||
                                  booking.asset_name ||
                                  booking.asset_id,
                              email: booking.asset_id,
                              organisation:
                                  group_member?.company ||
                                  booking.extension_data?.company,
                              phone:
                                  group_member?.phone ||
                                  booking.extension_data?.phone,
                              extension_data: {
                                  international: !!(
                                      group_member?.international ||
                                      booking.extension_data?.international
                                  ),
                              },
                          })
                        : new User({
                              id: booking.user_id,
                              name: booking.user_name || booking.user_email,
                              email: booking.user_email,
                              organisation: booking.extension_data?.company,
                              phone: booking.extension_data?.phone,
                          });
                })
                .filter((member) => !!member?.email),
            'email',
        );
    }

    private mapGroupMembersFromExtension(
        members: any[] = [],
        is_visitor = false,
    ) {
        return unique(
            (members || [])
                .filter((member) => !!member?.email)
                .map(
                    (member) =>
                        new User({
                            id: member.id || '',
                            name: member.name || member.email,
                            email: member.email,
                            organisation:
                                member.company || member.organisation || '',
                            phone: member.phone || '',
                            extension_data: {
                                ...(member.extension_data || {}),
                                international: !!member.international,
                            },
                            international: is_visitor
                                ? !!member.international
                                : false,
                        } as any),
                ),
            'email',
        );
    }

    private async rollbackGroupBookings(booking_ids: string[]) {
        const rollback_errors = (
            await Promise.allSettled(
                booking_ids.map((id) => lastValueFrom(removeBooking(id))),
            )
        ).filter((_) => _.status === 'rejected');
        if (rollback_errors.length) {
            console.error('Failed to rollback group bookings', rollback_errors);
        }
    }

    private async checkQuestions() {
        if (this._settings.get('app.desks.ignore_questions') !== false) return;
        const ref = this._dialog.open(DeskQuestionsModalComponent);
        const result = await Promise.race([
            lastValueFrom(
                ref.componentInstance.event.pipe(
                    first((_) => _.reason === 'done'),
                ),
            ),
            lastValueFrom(ref.afterClosed()),
        ]);
        if (result?.reason !== 'done') throw 'User cancelled';
        const form = ref.componentInstance.form.getRawValue();
        for (const key in form) {
            if (form[key]) throw 'User failed questionaire';
        }
        ref.close();
    }

    /** Check if the given resource is available for the selected user to book */
    private async _checkResourceAvailable(
        { id, asset_id, date, duration, all_day, user_email }: Partial<Booking>,
        type: BookingType,
    ) {
        if (!user_email) throw i18n('BOOKINGS.NO_USER');
        if (type === 'group-event') return true;
        const bookings = await lastValueFrom(
            queryBookings({
                period_start: all_day
                    ? getUnixTime(startOfDayInTimezone(date, this.timezone))
                    : getUnixTime(date),
                period_end: all_day
                    ? getUnixTime(endOfDayInTimezone(date, this.timezone))
                    : getUnixTime(date + duration * 60 * 1000),
                type,
                email: user_email,
                limit: 1000,
            }),
        );
        const active_bookings = bookings.filter(
            (_) =>
                _.status !== 'declined' &&
                _.status !== 'cancelled' &&
                !_.rejected,
        );
        if (
            active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)
        ) {
            throw i18n(
                asset_id.includes('@')
                    ? 'BOOKINGS.VISITOR_BOOKED'
                    : 'BOOKINGS.RESOURCE_BOOKED',
                { name: asset_id },
            );
        }
        const allowed_bookings =
            this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
        if (
            allowed_bookings > 0 &&
            active_bookings.filter(
                (_) =>
                    _.user_email.toLowerCase() ===
                        (
                            user_email ||
                            currentUser()?.email ||
                            ''
                        ).toLowerCase() && _.id !== id,
            ).length >= allowed_bookings
        ) {
            const current = user_email === currentUser()?.email;
            throw i18n(
                current
                    ? 'BOOKINGS.CLASH_CURRENT_USER'
                    : 'BOOKINGS.CLASH_OTHER_USER',
                { name: user_email },
            );
        }
        return true;
    }

    private async _checkResourceRules(
        assets: BookingAsset[],
        date: number,
        duration: number,
        host: string,
    ) {
        const current_user = currentUser();
        const user =
            current_user.email === host
                ? current_user
                : await lastValueFrom(showUser(host)).catch(() => ({
                      email: host,
                  }));
        if (!assets?.length) return true;
        const rules = await nextValueFrom(this.booking_rules);
        const resource_rules = assets
            ?.filter((s) => s?.zone)
            ?.map((space) => {
                const bld = this._org.buildings.find(
                    (b) => space.zone?.parent_id === b.id,
                );
                return rulesForResource(
                    {
                        date,
                        duration,
                        host: new User(user),
                        resource: space,
                    },
                    rules[bld?.id] || [],
                );
            });
        if (!resource_rules.every((_) => !_.hidden)) {
            throw i18n(
                'BOOKINGS.RULES_HIDDEN',
                { type: this._options.getValue().type || 'resource' },
                assets.length,
            );
        }
        return true;
    }

    /**
     * Check for clashing bookings in a recurring booking series
     * @param booking The booking to check for clashes
     * @param type The booking type
     * @returns true if no clashes or user confirmed to continue
     * @throws Error if first instance clashes or clashes not allowed
     */
    private async _checkRecurringClashes(
        booking: Partial<Booking>,
        type: BookingType,
    ): Promise<boolean> {
        // Only check for recurring bookings
        if (!booking.recurrence_type || booking.recurrence_type === 'none') {
            return true;
        }

        const temp_booking = new Booking({
            ...booking,
            booking_type: type,
        });

        const clashes = (await lastValueFrom(
            findBookingClashes(temp_booking, { include_clash_time: true }),
        )) as BookingClash[];

        if (!clashes?.length) {
            return true;
        }

        // Sort clashes by booking_start to identify first instance
        const sorted_clashes = [...clashes].sort(
            (a, b) => a.booking_start - b.booking_start,
        );

        // Check if first instance clashes (compare with booking start time)
        const booking_start_unix = Math.floor(booking.date / 1000);
        const first_clash = sorted_clashes[0];
        const is_first_instance_clash =
            first_clash.booking_start === booking_start_unix;

        if (is_first_instance_clash) {
            throw i18n('BOOKINGS.FIRST_INSTANCE_CLASH');
        }

        // Check setting for allow_recurring_instance_clashes
        const allow_clashes =
            this._settings.get(
                `app.${type}s.allow_recurring_instance_clashes`,
            ) ??
            this._settings.get(
                `app.${type}.allow_recurring_instance_clashes`,
            ) ??
            this._settings.get(
                'app.bookings.allow_recurring_instance_clashes',
            ) ??
            true;

        if (!allow_clashes) {
            throw i18n('BOOKINGS.RECURRING_CLASHES_NOT_ALLOWED', {
                count: clashes.length,
            });
        }

        // Show modal to confirm with user
        const result = await openRecurringClashModal(
            { clashes: sorted_clashes },
            this._dialog,
        );

        if (result?.reason !== 'done') {
            throw 'User cancelled';
        }

        return true;
    }

    public loadParkingResources(): Observable<BookingAsset[]> {
        const use_region = this._settings.get('app.use_region');
        const levels = (
            use_region
                ? this._org.levelsForRegion()
                : this._org.levelsForBuilding()
        ).filter((_) => _.tags.includes('parking'));
        return queryParkingSpacesForZones(levels.map((l) => l.id)).pipe(
            map(
                (spaces) =>
                    spaces.map((s) => ({
                        ...s,
                        id: s.id || s.map_id,
                        groups: s.place_groups,
                        zone: this._org.levelWithID([s.zone_id]) as any,
                    })) as BookingAsset[],
            ),
        );
    }

    public loadResourceList(type: string) {
        const use_region = this._settings.get('app.use_region');
        const map_metadata = (_) =>
            (_?.metadata[type]?.details instanceof Array
                ? _.metadata[type].details
                : []
            ).map((d) => ({
                ...d,
                id: d.id || d.map_id,
                zone: _.zone,
            }));
        const id = use_region
            ? this._org.building?.parent_id
            : this._org.building?.id;
        if (!id) return of([]);
        if (use_region) {
            const id = this._org.building.parent_id;
            const buildings = this._org.buildings.filter(
                (_) => _.parent_id === id,
            );
            return forkJoin(
                buildings.map((_) =>
                    listChildMetadata(_.id, { name: type }).pipe(
                        map((data) => flatten(data.map(map_metadata))),
                    ),
                ),
            ).pipe(map((_) => flatten(_)));
        }
        return listChildMetadata(id, {
            name: type,
        }).pipe(map((data) => flatten(data.map(map_metadata))));
    }

    private async _getNearbyResources(
        map_url: string,
        id: string,
        resources: BookingAsset[],
        count: number,
        reserved_ids = new Set<string>(),
    ): Promise<BookingAsset[]> {
        const nearby_resources = [];
        let asset_list = resources.filter(
            (_) =>
                !this._resourceReserved(_, reserved_ids) &&
                !this._resourceMatches(_, id),
        );
        for (let i = 0; i < count; i++) {
            const item = await findNearbyFeature(
                map_url,
                id,
                asset_list.map((_) => _.map_id || _.id),
            );
            if (item) {
                const resource = resources.find((_) =>
                    this._resourceMatches(_, item),
                );
                if (
                    !resource ||
                    this._resourceReserved(resource, reserved_ids)
                ) {
                    asset_list = asset_list.filter(
                        (_) => !this._resourceMatches(_, item),
                    );
                    continue;
                }
                nearby_resources.push(resource);
                this._reserveResource(resource, reserved_ids);
                asset_list = asset_list.filter(
                    (_) => !this._resourceMatches(_, item),
                );
            }
        }
        return nearby_resources;
    }

    private async _resolveDeskGroupResources(
        group_members: User[],
        form: Partial<Booking> & { map_id?: string },
        existing_siblings: Booking[] = [],
    ): Promise<BookingAsset[]> {
        const available_resources = await nextValueFrom(
            this.available_resources,
        );
        const all_resources = await nextValueFrom(this.resources);
        const preferred_id = `${form.map_id || form.asset_id || ''}`;
        const existing_map: Record<string, Booking> = {};
        for (const booking of existing_siblings) {
            if (booking.user_email) existing_map[booking.user_email] = booking;
        }
        const selected_resource = this._findResourceById(
            available_resources,
            preferred_id,
        );
        const preferred_resource =
            selected_resource ||
            (existing_siblings.length
                ? this._findResourceById(all_resources, preferred_id)
                : null);
        if (!selected_resource && !existing_siblings.length) {
            throw i18n('BOOKINGS.DESK_AVAILABLE_ERROR');
        }
        const anchor_resource =
            preferred_resource ||
            this._findResourceById(
                all_resources,
                existing_siblings[0]?.asset_id || '',
            );
        const level = this._org.levelWithID([anchor_resource?.zone?.id]);
        if (!level?.map_id) {
            throw i18n('BOOKINGS.GROUP_MAP_UNAVAILABLE');
        }
        const reserved_ids = new Set<string>();
        const resolved = group_members.map((member) => {
            const booking = existing_map[member.email];
            const resource_id =
                member.email === currentUser().email
                    ? preferred_id
                    : booking?.asset_id || '';
            const resource =
                this._findResourceById(all_resources, resource_id) ||
                this._findResourceById(available_resources, resource_id);
            if (!resource || this._resourceReserved(resource, reserved_ids)) {
                return null;
            }
            this._reserveResource(resource, reserved_ids);
            return resource;
        });
        const missing_count = resolved.filter((_) => !_).length;
        const nearby_resources = missing_count
            ? await this._getNearbyResources(
                  level.map_id,
                  anchor_resource?.map_id ||
                      anchor_resource?.id ||
                      preferred_id,
                  available_resources,
                  missing_count,
                  reserved_ids,
              )
            : [];
        let available = resolved.filter((_) => !!_).length;
        let nearby_index = 0;
        const final_resources = resolved.map((resource) => {
            if (resource) return resource;
            const next_resource = nearby_resources[nearby_index++];
            if (next_resource) available++;
            return next_resource || null;
        });
        if (final_resources.some((_) => !_)) {
            throw i18n('BOOKINGS.GROUP_INSUFFICIENT_RESOURCES', {
                available,
                members: group_members.length,
            });
        }
        return final_resources;
    }

    private _findResourceById(resources: BookingAsset[], id: string) {
        return (resources || []).find((_) => this._resourceMatches(_, id));
    }

    private _resourceMatches(resource: Partial<BookingAsset>, id: string) {
        if (!resource || !id) return false;
        return resource.id === id || resource.map_id === id;
    }

    private _resourceReserved(
        resource: Partial<BookingAsset>,
        reserved_ids: Set<string>,
    ) {
        return !!(
            resource &&
            ((resource.id && reserved_ids.has(resource.id)) ||
                (resource.map_id && reserved_ids.has(resource.map_id)))
        );
    }

    private _reserveResource(
        resource: Partial<BookingAsset>,
        reserved_ids: Set<string>,
    ) {
        if (!resource) return;
        if (resource.id) reserved_ids.add(resource.id);
        if (resource.map_id) reserved_ids.add(resource.map_id);
    }
}

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
    untracked,
} from '@angular/core';
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
    currentUserIsLoaded,
    currentUserLoaded,
    Desk,
    firstValueWhere,
    flatten,
    getAllDayTimeRange,
    getInvalidSignalFields,
    i18n,
    isEmptyUser,
    isWithinBookableHours,
    notifyError,
    notifyWarn,
    OrganisationService,
    rulesForResource,
    SettingsService,
    unique,
    User,
} from '@placeos/common';
import {
    cleanObject,
    isMock,
    listChildMetadata,
    PlaceZone,
    showMetadata,
    showUser,
} from '@placeos/ts-client';
import { addDays, addMinutes, endOfDay, format, getUnixTime } from 'date-fns';
import { openRecurringClashModal } from 'libs/components/src/lib/recurring-clash-modal.component';
import { CalendarService } from 'libs/events/src/lib/calendar.service';
import { BookingLinkModalComponent } from './booking-link-modal.component';
import {
    bookingAttachments,
    bookingFormValue,
    type BookingFormValue,
    bookingHostUser,
    findNearbyFeature,
    generateBookingForm,
    loadLockerResources,
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

const STORAGE_KEYS = {
    booking_form: 'PLACEOS.booking_form',
    booking_form_options: 'PLACEOS.booking_form_options',
    booking_form_filters: 'PLACEOS.booking_form_filters',
    last_booked_booking: 'PLACEOS.last_booked_booking',
    last_group_booking_ids: 'PLACEOS.last_group_booking_ids',
    last_group_booking_errors: 'PLACEOS.last_group_booking_errors',
} as const;

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: BookingType;
    /** Zone to check available */
    zone_id?: string;
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

function bookingOptionsMatch(a: BookingFlowOptions, b: BookingFlowOptions) {
    const keys = Array.from(
        new Set([
            ...(Object.keys(a) as (keyof BookingFlowOptions)[]),
            ...(Object.keys(b) as (keyof BookingFlowOptions)[]),
        ]),
    );
    return keys.every((key) => a[key] === b[key]);
}

function assetDateValue(date: unknown) {
    const date_value = date instanceof Date ? date.valueOf() : Number(date);
    return Number.isFinite(date_value) ? date_value : null;
}

function assetDurationValue(duration: unknown) {
    const duration_value = Number(duration);
    return Number.isFinite(duration_value) ? duration_value : null;
}

function assetWindowKey(date: unknown, duration: unknown) {
    const date_value = assetDateValue(date);
    const duration_value = assetDurationValue(duration);
    return date_value && duration_value
        ? `${date_value}:${duration_value}`
        : '';
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

type GroupContainerForm = Partial<Booking> & {
    user?: User;
    extension_data?: Record<string, unknown>;
};

export interface GroupBookingFailure {
    email: string;
    name: string;
    asset_id?: string;
    asset_name?: string;
    error: string;
}

/** Keys that live on the `Booking` model itself. `extension_data` must never
 * duplicate these — built once from a throwaway instance. */
const BOOKING_MODEL_KEYS = new Set(Object.keys(new Booking()));
const BOOKING_FORM_KEYS = new Set(Object.keys(bookingFormValue(new Booking())));
const BOOKING_EXTENSION_FIELD_BLACKLIST = new Set([
    'resources',
    'assets',
    'level',
]);

/** Keep only real form fields from carried `extension_data`. */
function formExtensionData(data: Record<string, any> = {}) {
    const extra: Record<string, any> = {};
    for (const key in data) {
        if (
            BOOKING_FORM_KEYS.has(key) &&
            !BOOKING_MODEL_KEYS.has(key) &&
            !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key)
        ) {
            extra[key] = data[key];
        }
    }
    return extra;
}

function formBookingData(value: Record<string, any>) {
    const data: Record<string, any> = {};
    for (const key in value) {
        if (key === 'extension_data') {
            data.extension_data = formExtensionData(value.extension_data);
        } else if (
            // `asset_ids` is spread into the form model from the booking being
            // edited and never updated when `asset_id` changes, so sending it
            // back would overwrite the new resource with the old one. The
            // `Booking` constructor rebuilds it from `asset_id`.
            key !== 'asset_ids' &&
            !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key) &&
            (BOOKING_FORM_KEYS.has(key) || BOOKING_MODEL_KEYS.has(key))
        ) {
            data[key] = value[key];
        }
    }
    return data;
}

/** Whether a booking carries edit state from a different booking type, i.e. an
 * existing booking being opened in the wrong type's form. */
function isCrossTypeEdit(booking: Booking, type: BookingType) {
    return (
        !!booking?.id && !!booking.booking_type && booking.booking_type !== type
    );
}

/** Build the `extension_data` payload saved with a booking. Only fields that
 * need renaming, coercion, computing or a fallback live here — plain flat form
 * fields (e.g. `phone`, `company`, `recurrence_instances`, `plate_number`,
 * `notes`) are copied into `extension_data` automatically by the `Booking`
 * constructor, so they must NOT be duplicated below. */
function buildBookingExtensionData(
    value: Record<string, any>,
    group_members: any[],
) {
    const type = value.booking_type;
    return {
        ...formExtensionData(value.extension_data),
        ...(value.extension_data?.invoice
            ? {
                  invoice: value.extension_data.invoice,
                  invoice_id: value.extension_data.invoice_id,
              }
            : {}),
        // `group` is a getter on `Booking`, so the constructor skips the
        // top-level form value — it has to be set into `extension_data` here.
        group: value.group,
        // `assets` is ignored by the constructor's auto-copy, so map it here.
        assets: value.assets.map((_: any) => _.toJSON()),
        ...(type === 'desk'
            ? {
                  assigned_asset_id: value.asset_id,
                  assigned_asset_name: value.asset_name || value.asset_id,
              }
            : {}),
        ...(type === 'visitor'
            ? {
                  international: !!value.international,
                  visitor_name: value.asset_name || value.asset_id || '',
              }
            : {}),
        ...(type === 'parking'
            ? {
                  requires_manual_approval: !!value.requires_manual_approval,
                  user_groups: [
                      ...(value.user
                          ? value.user.groups || []
                          : currentUser()?.groups || []),
                  ],
              }
            : {}),
        ...(group_members.length ? { group_members } : {}),
        department: value.user?.department || currentUser()?.department,
    };
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
    private _calendar = inject(CalendarService);
    private _injector = inject(Injector);
    private _options = signal<BookingFlowOptions>({
        type: 'desk',
    });
    private _booking = signal<Booking>(null);
    private _resource_use: Record<string, string> = {};
    private _loading = signal<string>('');
    private _network_requested = false;
    private _network_consumed = signal(false);
    private _booked_resource_requests = new Map<string, Promise<string[]>>();
    private _booked_resource_debounce: {
        query: Parameters<typeof bookedResourceList>[0];
        resource_count?: number;
        resolve: (value: string[]) => void;
        reject: (reason?: unknown) => void;
    }[] = [];
    private _recurring_clash_requests = new Map<string, Promise<string[]>>();

    public last_success: Booking = new Booking(
        JSON.parse(
            sessionStorage.getItem(STORAGE_KEYS.last_booked_booking) || '{}',
        ),
    );
    /** Signal emitting the current loading message, empty when idle */
    public readonly loading = this._loading.asReadonly();
    /** Signal for the active booking flow options */
    public readonly options = this._options.asReadonly();
    private _form_ref = generateBookingForm(new Booking(), this._injector);
    /** FieldTree for the booking form (used for template binding + validation). */
    public readonly form = this._form_ref.form;
    /** Writable signal holding the raw booking form value. */
    public readonly model = this._form_ref.model;
    private _asset_window = '';
    public readonly view = signal<BookingFlowView>('form');

    /** Apply a partial patch to the booking form model. */
    private _patch(value: Partial<BookingFormValue>, _opts?: unknown) {
        this.model.update((m) => ({ ...m, ...value }));
    }

    private _syncAssetOptions() {
        const { date, duration } = untracked(this.model);
        const next_asset_window = assetWindowKey(date, duration);
        if (!next_asset_window || this._asset_window === next_asset_window) {
            return;
        }
        const date_value = assetDateValue(date);
        const duration_value = assetDurationValue(duration);
        if (!date_value || !duration_value) return;
        this._asset_window = next_asset_window;
        this._assets.setOptions({
            date: date_value,
            duration: duration_value,
        });
    }

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
            // The override count can be satisfied by placeholder `{}` building
            // settings before `loadBuildingData` populates them, so also wait
            // for the active building's metadata to actually land. Otherwise
            // building/region-level settings (e.g. assigned_resource_booking)
            // read as their defaults during the load window.
            this._org.active_building_loaded() &&
            overrides.length >= required_overrides
        );
    });

    /** Latest raw form value, used to drive availability recalculation */
    private readonly _form_value = signal<Record<string, any>>(null);
    private readonly _form_value_debounced = debounced(this._form_value, 500, {
        injector: this._injector,
        equal: Object.is,
    });

    /** Params driving the resource list, debounced to coalesce rapid changes */
    private readonly _resource_params = computed(() => {
        const building = this._org.active_building();
        if (!building?.id) return undefined;
        return { building: building.id, type: this._options().type };
    });
    private readonly _resource_params_debounced = debounced(
        this._resource_params,
        300,
        { injector: this._injector, equal: Object.is },
    );
    /** Resource list for the active building and booking type */
    private readonly _resources_resource = resource({
        params: () =>
            this._network_consumed() && this._requests_ready()
                ? this._resource_params_debounced.value()
                : undefined,
        loader: ({ params }) => this._loadResourcesForType(params.type),
    });
    /** Signal for the list of resources for the current booking type */
    public readonly resources = computed<BookingAsset[]>(() => {
        return this._resources_resource.value() ?? [];
    });

    /** Signal for the available features across the loaded resources */
    public readonly features = computed<string[]>(() => {
        const list: string[] = [];
        for (const { features } of this.resources()) {
            features instanceof Array
                ? features.forEach((_) => list.push(_))
                : null;
        }
        return unique(list).sort((a, b) => a.localeCompare(b));
    });

    private readonly _booking_rules_params = computed(() => {
        const list = this._org.building_list();
        const { type } = this._options();
        return list.length
            ? { ids: list.map((bld) => bld.id), type }
            : undefined;
    });
    private readonly _booking_rules_params_debounced = debounced(
        this._booking_rules_params,
        300,
        { injector: this._injector, equal: Object.is },
    );
    /** Booking rules for the current buildings and booking type */
    private readonly _booking_rules_resource = resource({
        params: () =>
            this._network_consumed() && this._requests_ready()
                ? this._booking_rules_params_debounced.value()
                : undefined,
        loader: ({ params }) => {
            const { ids, type } = params;
            return Promise.all(
                ids.map((id) => showMetadata(id, `${type}_booking_rules`)),
            )
                .then((building_rules) => {
                    const mapping: Record<string, BookingRuleset[]> = {};
                    for (const rules of building_rules) {
                        mapping[rules.id] =
                            rules.details instanceof Array ? rules.details : [];
                    }
                    return mapping;
                })
                .catch(() => ({}) as Record<string, BookingRuleset[]>);
        },
    });
    /** Signal for the booking rules grouped by building */
    public readonly booking_rules = computed<Record<string, BookingRuleset[]>>(
        () => {
            return this._booking_rules_resource.value() ?? {};
        },
    );

    /** Whether the current user has an assigned desk in any active building */
    private readonly _has_assigned_desk_resource = resource({
        params: () => {
            if (!this._network_consumed() || !this._requests_ready()) {
                return undefined;
            }
            const buildings = this._org.building_list();
            const email = currentUser()?.email;
            return buildings.length && email ? { buildings, email } : undefined;
        },
        loader: () => this._computeHasAssignedDesk(),
    });
    /** Whether the current user has a desk reserved (assigned) to them */
    public readonly has_assigned_desk = computed<boolean>(() => {
        return this._has_assigned_desk_resource.value() ?? false;
    });

    /** Resources available to book for the current form selection */
    private readonly _available_resource = resource({
        params: () => {
            if (!this._network_consumed() || !this._requests_ready()) {
                return undefined;
            }
            if (
                this._resources_resource.isLoading() ||
                this._booking_rules_resource.isLoading()
            ) {
                return undefined;
            }
            return {
                options: this._options(),
                resources: this.resources(),
                rules: this.booking_rules(),
                form: this._form_value_debounced.value(),
            };
        },
        loader: ({ params: { options, resources, rules, form } }) => {
            const raw = form;
            if (!(raw?.date > 0 && raw?.duration > 0)) {
                return Promise.resolve([] as BookingAsset[]);
            }
            if (!resources.length) return Promise.resolve([] as BookingAsset[]);
            this._loading.set(
                i18n('BOOKINGS.LOADING_AVAILABILITY', { type: options.type }),
            );
            return this._computeAvailableResources(
                options,
                resources,
                rules,
                raw,
            )
                .catch(() => [] as BookingAsset[])
                .then((available) => {
                    this._loading.set('');
                    return available;
                });
        },
    });
    /** Signal for the resources available to book for the current selection */
    public readonly available_resources = computed<BookingAsset[]>(() => {
        return this._available_resource.value() ?? [];
    });

    /** Signal grouping available resources for group bookings */
    public readonly grouped_availability = computed<BookingAsset[][]>(() => {
        const options = this._options();
        const resource = this.available_resources();
        const groups: BookingAsset[][] = [];
        const asset_list = [...resource].sort((a, b) =>
            a.zone?.id?.localeCompare(b.zone?.id),
        );
        const members = options.members?.length
            ? options.members
            : [currentUser()];
        while (asset_list.length) {
            const group: BookingAsset[] = [];
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
    });

    public get booking() {
        return this._booking();
    }

    /** Resolve with the resources for the current booking type once loaded */
    public async listResources(): Promise<BookingAsset[]> {
        this._startNetwork();
        await this._whenSettled(this._resources_resource);
        return this.resources();
    }

    /** Resolve with the available resources for the current selection */
    public async listAvailableResources(): Promise<BookingAsset[]> {
        this._startNetwork();
        await this._whenSettled(this._available_resource);
        return this.available_resources();
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

    /** Load the resource list for the given booking type */
    private _loadResourcesForType(type: string): Promise<BookingAsset[]> {
        switch (type) {
            case 'desk':
                this._loading.set(i18n('BOOKINGS.DESKS_LOADING'));
                return this._finishResourceLoad(this.loadResourceList('desks'));
            case 'parking':
                this._loading.set(i18n('BOOKINGS.PARKING_LOADING'));
                return this._finishResourceLoad(this.loadParkingResources());
            case 'locker':
                this._loading.set(i18n('BOOKINGS.LOCKERS_LOADING'));
                return this._finishResourceLoad(this._loadLockerResources());
        }
        return Promise.resolve([]);
    }

    private _finishResourceLoad(
        load: Promise<BookingAsset[]>,
    ): Promise<BookingAsset[]> {
        return load
            .catch(() => [] as BookingAsset[])
            .then((list) => {
                this._loading.set('');
                return list;
            });
    }

    private async _computeHasAssignedDesk(
        user_email = currentUser()?.email,
    ): Promise<boolean> {
        const buildings = this._org.building_list();
        if (!(buildings?.length > 0)) return false;
        const email = user_email?.toLowerCase();
        if (!email) return false;
        const map_metadata = (meta) =>
            (meta?.metadata?.desks?.details instanceof Array
                ? meta.metadata.desks.details
                : []
            ).map((desk) => new Desk({ ...desk, zone: meta.zone }));
        const desk_lists = await Promise.all(
            buildings.map((building) =>
                listChildMetadata(building.id, { name: 'desks' })
                    .then((data) => flatten<Desk>(data.map(map_metadata)))
                    .catch(() => [] as Desk[]),
            ),
        );
        return flatten(desk_lists).some(
            (desk) => desk.assigned_to?.toLowerCase() === email,
        );
    }

    /**
     * Whether the given user has a resource of `type` reserved (assigned) to
     * them. Only desk/parking/locker support assignment; any other type resolves
     * to `false` so it is never blocked by the reserved-resource restriction.
     */
    private async _computeHasAssignedResource(
        type: BookingType,
        user_email = currentUser()?.email,
    ): Promise<boolean> {
        if (type === 'desk') return this._computeHasAssignedDesk(user_email);
        const email = user_email?.toLowerCase();
        if (!email) return false;
        const resources = await this._loadRawResourcesForType(type).catch(
            () => [] as BookingAsset[],
        );
        return resources.some(
            (resource) =>
                (resource as any).assigned_to?.toLowerCase() === email,
        );
    }

    /**
     * Load the resource list for `type` without the loading-message side effects
     * of `_loadResourcesForType`, so it can be used for background checks (e.g.
     * detecting an assigned resource during submission).
     */
    private _loadRawResourcesForType(
        type: BookingType,
    ): Promise<BookingAsset[]> {
        switch (type) {
            case 'parking':
                return this.loadParkingResources();
            case 'locker':
                return this._loadLockerResources();
        }
        return Promise.resolve([]);
    }

    private async _computeAvailableResources(
        options: BookingFlowOptions,
        resources: BookingAsset[],
        restrictions: Record<string, BookingRuleset[]>,
        raw: Record<string, any>,
    ): Promise<BookingAsset[]> {
        const { all_day, user } = raw;
        let { date, duration } = raw;
        if (all_day) {
            ({ date, duration } = this._allDayTimeRange(date));
        }
        const zones =
            options.zone_id ||
            (this._settings.get('app.use_region')
                ? this._org.region?.id
                : this._org.building?.id) ||
            this._org.organisation.id;
        let booked_ids: string[] = [];
        if (!isMock()) {
            // Always exclude resources booked in the first-instance window.
            booked_ids = await this._bookedResourceList(
                {
                    period_start: getUnixTime(date),
                    period_end: getUnixTime(addMinutes(date, duration)),
                    type: options.type,
                    zones,
                },
                resources.length,
            );
            // For recurring desk bookings, also exclude any resource that
            // clashes with a later instance in the series. Union with (not
            // replace) the base booked list so enabling recurrence can only
            // remove availability, never add it back.
            if (
                options.type === 'desk' &&
                raw.recurrence_type &&
                raw.recurrence_type !== 'none'
            ) {
                const recurring_clashes =
                    await this._recurringBookedResourceList(
                        resources,
                        zones,
                        raw,
                    );
                booked_ids = unique([...booked_ids, ...recurring_clashes]);
            }
        }
        this._resource_use = {};
        for (const id of booked_ids) {
            this._resource_use[id] = ' ';
        }
        return resources.filter((asset) => {
            const is_restricted = rulesForResource(
                {
                    date,
                    duration,
                    resource: asset,
                    host: this._bookingRulesHost(user),
                },
                restrictions[asset.zone?.id] ||
                    restrictions[asset.zone?.parent_id] ||
                    restrictions[this._org.building?.id] ||
                    [],
            ).hidden;
            return (
                !is_restricted &&
                (!asset.groups?.length ||
                    asset.groups.some((grp) =>
                        currentUser().groups.includes(grp),
                    )) &&
                asset.bookable !== false &&
                (!options.features ||
                    options.features?.every((_) =>
                        asset.features.includes(_),
                    )) &&
                (!options.zone_id ||
                    options.zone_id === asset.zone?.id ||
                    options.zone_id === asset.zone?.parent_id) &&
                !booked_ids.includes(asset.id)
            );
        });
    }

    private _bookedResourceList(
        query: {
            period_start: number;
            period_end: number;
            type: BookingType;
            zones: string;
        },
        resource_count?: number,
    ) {
        const key = JSON.stringify({ ...query, resource_count });
        const existing = this._booked_resource_requests.get(key);
        if (existing) return existing;
        // Debounce 300ms and coalesce: rapid distinct queries collapse to a
        // single network call for the latest query; every queued waiter
        // resolves with that result. Identical queries share one promise via
        // the request cache above.
        const request = new Promise<string[]>((resolve, reject) => {
            this._booked_resource_debounce.push({
                query,
                resource_count,
                resolve,
                reject,
            });
            this.timeout('booked-resource', () => {
                const queue = this._booked_resource_debounce;
                this._booked_resource_debounce = [];
                const latest = queue[queue.length - 1];
                bookedResourceList(latest.query, latest.resource_count).then(
                    (result) => queue.forEach((item) => item.resolve(result)),
                    (error) => queue.forEach((item) => item.reject(error)),
                );
            });
        }).finally(() => this._booked_resource_requests.delete(key));
        this._booked_resource_requests.set(key, request);
        return request;
    }

    public resourceUserName(id: string) {
        return this._resource_use[id];
    }

    private get timezone() {
        const use_building_timezone = this.setting('use_building_timezone');
        return use_building_timezone ? this._org.building?.timezone || '' : '';
    }

    public newForm(type: BookingType, booking: Booking = new Booking({})) {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.newForm(type, booking));
            return;
        }
        // Never apply an existing booking's edit state to a different type
        // (e.g. editing parking then opening the desk form).
        if (isCrossTypeEdit(booking, type)) booking = new Booking({});
        this._startNetwork();
        this._calendar.loadCalendars();
        if (type !== this._options().type) {
            this._clearStoredForm();
        }
        this.setOptions({ type });
        this._asset_window = untracked(() => {
            const { date, duration } = this._assets.getOptions();
            return assetWindowKey(date, duration);
        });
        const initial_date = booking.date;
        const initial_duration = booking.duration;
        if (!booking.id) {
            (booking as any).all_day = this.setting('all_day_default');
        }
        this.model.set(bookingFormValue(new Booking()));
        this.form().reset();
        this._patch(
            cleanObject(
                {
                    ...booking.extension_data,
                    attachments: bookingAttachments(booking),
                    ...booking,
                    // `Booking` has no `user` object, only the flat `user_*`
                    // fields, so the host has to be rebuilt from those. Without
                    // it the form keeps the signed-in user and editing a
                    // delegate booking reassigns the host on save.
                    user: bookingHostUser(booking),
                },
                [null, undefined, ''],
            ),
            { emitEvent: false },
        );
        this.applyDurationSettings();
        this._syncAssetOptions();
        const form_change = effect(
            () => {
                this._form_value.set(this.model());
                this._syncAssetOptions();
                this.storeForm();
            },
            { injector: this._injector },
        );
        this.subscription('form_change', {
            unsubscribe: () => form_change.destroy(),
        } as any);
        this._syncWindowIfUnchanged(
            'date',
            initial_date,
            initial_duration,
            booking.date,
            booking.duration,
        );
        this._booking.set(new Booking(booking));
        this._options.set({ type: this._options().type });
        // Persist immediately to avoid edit-flow races where the consumer
        // reloads from session before async form change events occur.
        this.storeForm();
        this.timeout('set-resource', async () => {
            const resources = this.model().resources;
            if (!resources?.length) return;
            const item_list = await this.listResources();
            const new_list = resources.map(
                (asset) => item_list.find((_) => _.id == asset.id) || asset,
            );
            this._patch({ resources: new_list });
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
        this._org.waitUntilInitialised().then(() => this.setOptions({}));
        this._form_value.set(this.model());
        // Re-apply duration settings when the settings overrides change
        effect(() => {
            const overrides = this._settings.overrides();
            if (overrides?.length) this.applyDurationSettings();
        });
    }

    /** Push the current building's duration and bookable-hours settings into the time sync. */
    public applyDurationSettings() {
        const handle = this._form_ref.time_sync;
        const period = this.setting('all_day_period');
        handle?.updateOptions({
            min_duration: this.setting('min_duration') ?? 30,
            max_duration: this.setting('max_duration') ?? 0,
            default_duration: this.setting('default_duration') ?? 60,
            custom_duration_options:
                this.setting('custom_duration_options') ?? [],
            bookable_hours: this.setting('bookable_hours') ?? null,
            timezone: this.timezone,
            all_day_start: period?.start,
            all_day_end: period?.end,
        });
    }

    private _allDayTimeRange(date: number) {
        const period = this.setting('all_day_period');
        return getAllDayTimeRange(
            date,
            this.timezone,
            period?.start,
            period?.end,
        );
    }

    /**
     * Re-apply the supplied booking window after async form setup only if no
     * other consumer has already changed it.
     */
    private _syncWindowIfUnchanged(
        timeout_name: string,
        initial_date: number,
        initial_duration: number,
        date: number,
        duration: number,
    ) {
        this.timeout(timeout_name, async () => {
            const window = this.model();
            if (
                window.date !== initial_date ||
                window.duration !== initial_duration
            ) {
                return;
            }
            this._patch({ date, duration });
        });
    }

    public setView(value: BookingFlowView) {
        this.view.set(value);
    }

    public setOptions(value: Partial<BookingFlowOptions>) {
        // Field-level validators (e.g. the parking form's required
        // plate_number) are now declared in the signal-form schema, so there
        // is no stale reactive validator to clear when switching types.
        const current = this._options();
        const next = { ...current, ...value };
        if (bookingOptionsMatch(current, next)) return;
        this._options.set(next);
    }

    public setFeature(feature: string, enable: boolean) {
        if (!feature?.length) return;
        const features = this._options()?.features || [];
        if (enable && !features.includes(feature)) {
            this.setOptions({ features: [...features, feature] });
        }
        if (!enable && features.includes(feature)) {
            this.setOptions({
                features: features.filter((e) => e !== feature),
            });
        }
    }

    public resetForm() {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.resetForm());
            return;
        }
        if (!sessionStorage.getItem(STORAGE_KEYS.booking_form)) {
            return this.newForm(this._options().type);
        }
        const booking = this._booking();
        this.model.set({
            ...bookingFormValue(new Booking()),
            user: currentUser(),
            booked_by: currentUser(),
        });
        this.form().reset();
        this._patch(
            cleanObject(
                {
                    ...(booking || {}),
                    ...(booking?.extension_data || {}),
                    attachments: bookingAttachments(booking),
                    user: bookingHostUser(booking),
                    _in_progress: booking?.state === 'started',
                },
                [null, undefined, ''],
            ),
        );
        this._options.set({ type: this._options().type });
    }

    public clearForm() {
        this._clearStoredForm();
        this.newForm(this._options().type);
    }

    private _clearStoredForm() {
        sessionStorage.removeItem(STORAGE_KEYS.booking_form);
        sessionStorage.removeItem(STORAGE_KEYS.booking_form_options);
        sessionStorage.removeItem(STORAGE_KEYS.booking_form_filters);
    }

    public storeForm() {
        sessionStorage.setItem(
            STORAGE_KEYS.booking_form,
            JSON.stringify({
                ...this._booking(),
                // `cleanObject` mutates its argument in place, so clone the
                // live form value first. Passing `this.model()` directly would
                // strip every empty/`null` key (e.g. `asset_id: ''`) out of the
                // signal-forms model, orphaning the matching `[formField]`
                // bindings (`field() is not a function` / NG01902).
                ...cleanObject({ ...this.model() }, [null, undefined, '']),
            }),
        );
        sessionStorage.setItem(
            STORAGE_KEYS.booking_form_filters,
            JSON.stringify(this._options() || {}),
        );
    }

    public loadForm(expected_type?: BookingType) {
        if (!currentUserIsLoaded()) {
            currentUserLoaded().then(() => this.loadForm(expected_type));
            return;
        }
        this._startNetwork();
        this._calendar.loadCalendars();
        const data = JSON.parse(
            sessionStorage.getItem(STORAGE_KEYS.booking_form) || '{}',
        );
        const booking = new Booking(data);
        // Discard persisted edit state that belongs to a different type
        // (e.g. a parking edit opened in the desk/locker form).
        if (expected_type && isCrossTypeEdit(booking, expected_type)) {
            return this.newForm(expected_type);
        }
        const initial_date = booking.date;
        const initial_duration = booking.duration;
        this.setOptions({
            ...JSON.parse(
                sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) ||
                    '{}',
            ),
        });
        this._booking.set(booking);
        this.model.set({
            ...bookingFormValue(new Booking()),
            user: currentUser(),
            booked_by: currentUser(),
        });
        this.form().reset();
        const booking_data = cleanObject(
            {
                ...data,
                ...(booking || {}),
                ...(booking?.extension_data || {}),
                attachments: bookingAttachments(booking),
                user: bookingHostUser(booking),
                _in_progress: booking?.state === 'started',
            },
            [null, undefined, ''],
        );
        this._patch(booking_data, { emitEvent: false });
        this.applyDurationSettings();
        this._form_value.set(this.model());
        this._syncAssetOptions();
        this.storeForm();
        this._syncWindowIfUnchanged(
            'load-date',
            initial_date,
            initial_duration,
            booking.date,
            booking.duration,
        );
        this.setOptions({
            ...JSON.parse(
                sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) ||
                    '{}',
            ),
        });
    }

    public clearOldState() {
        sessionStorage.removeItem(STORAGE_KEYS.last_booked_booking);
        this.last_success = new Booking();
    }

    public openBookingLinkModal(force = false) {
        this.form().markAsTouched();
        if (!this.form().valid() && !force) return;
        const event = new Booking({
            ...this.booking,
            ...(this.model() as any),
        });
        this._dialog.open(BookingLinkModalComponent, { data: event });
    }

    public async confirmPost() {
        await this.checkQuestions();
        const options = this._options();
        const value = this.model() as any;

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
        // user/booked_by may have been seeded with the placeholder EMPTY_USER
        // before the signed-in user loaded. Refresh them from the now-loaded
        // current user so bookings are never saved against the empty user.
        if (isEmptyUser(this.model().user as any)) {
            this._patch({ user: currentUser(), booked_by: currentUser() });
        }
        // For all-day bookings the date/duration window is derived from the
        // all-day period at post time. Apply that clamped window up-front so the
        // form's duration validator sees the real (valid) window rather than a
        // stale duration left over from before the all-day toggle. The time-sync
        // effect does this asynchronously; doing it here keeps posting correct
        // even when the reactive flush has not yet run.
        if (this.model().all_day && this.model().date) {
            const { date, duration, date_end } = this._allDayTimeRange(
                this.model().date,
            );
            this._patch({ date, duration, date_end });
        }
        if (!this.form().valid()) {
            const invalid_fields = getInvalidSignalFields(
                this.form,
                this.model,
                this._invalid_field_mappings(),
            );
            throw i18n('FORM.INVALID_FIELDS', {
                field_list: invalid_fields.join(', '),
            });
        }
        this._patch({
            booking_type: this.model().booking_type || this._options().type,
        });
        const value = this.model() as any;
        const effective_timezone = this.timezone || value.timezone;
        const booking = this._booking() || new Booking();
        const all_day_period = value.all_day
            ? this._allDayTimeRange(value.date)
            : {
                  date: value.date,
                  duration: value.duration,
                  date_end: value.date_end,
              };
        const bookable_hours = this.setting('bookable_hours');
        if (
            !isWithinBookableHours(
                value.date,
                bookable_hours,
                effective_timezone,
            )
        ) {
            throw i18n('FORM.BOOKABLE_HOURS_ERROR');
        }
        const host =
            value.user?.email || value.user_email || currentUser()?.email;
        if (ignore_check) {
            await this._checkAssignedResourceRestriction(
                host,
                this._options().type,
            );
        } else {
            await this._checkResourceAvailable(
                {
                    ...booking,
                    ...value,
                    user_email: host,
                },
                this._options().type,
            );
            await this._checkResourceRules(
                value.resources,
                all_day_period.date,
                all_day_period.duration,
                host,
            );
            await this._checkRecurringClashes(
                {
                    ...booking,
                    ...value,
                    date: all_day_period.date,
                    duration: all_day_period.duration,
                    date_end: all_day_period.date_end,
                    user_email: host,
                    timezone: effective_timezone,
                },
                this._options().type,
            );
        }
        if (this._payments.enabled) {
            const receipt = await this._payments.makePayment({
                type: this._options().type,
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
        const selected_zones = [
            ...(value?.zones || []),
            ...(value.booking_asset?.zones || []),
        ].filter((_) => _);
        value.zones = unique(
            selected_zones.length
                ? selected_zones
                : [...(this._booking()?.zones || [])],
        );
        this._loading.set('Saving booking');
        delete value.booking_asset;
        value.timezone = effective_timezone;
        if (value.all_day) {
            value.date = all_day_period.date;
            value.duration = all_day_period.duration;
            value.date_end = all_day_period.date_end;
        }
        const { event_id, parent_id } = value;
        delete value.event_id;
        const resources = value.resources || [];
        const zone =
            this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
        const zones =
            zone && zone instanceof Object
                ? unique([
                      this._org.organisation.id,
                      this._org.region?.id,
                      zone.parent_id,
                      zone.id,
                  ])
                : [
                      this._org.organisation.id,
                      this._org.region?.id,
                      this._org.building?.id,
                  ];
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
            this._options().group && this._options().members?.length
                ? this.mapGroupMembers(
                      value.booking_type,
                      this._options().members,
                  )
                : [];
        const result = await saveBooking(
            new Booking({
                type: this._options().type,
                ...formBookingData(value),
                description:
                    value.booking_type === 'visitor'
                        ? value.description || value.title || value.asset_name
                        : value.asset_name || value.description,
                user_id: value.user?.id ?? value.user_id,
                user_name: value.user?.name || value.user_name,
                user_email: value.user?.email || value.user_email,
                extension_data: buildBookingExtensionData(value, group_members),
                approved:
                    this._settings.get('app.bookings.no_approval') === true,
                zones: unique([...zones, ...(value.zones || [])]).filter(
                    (_) => _,
                ),
            }).toJSON(),
            q,
        ).catch((e) => {
            this._loading.set('');
            const error = e?.error || e;
            if (e?.status) {
                if (typeof error === 'object' && error !== null) {
                    error.status = e.status;
                } else {
                    if (this._isPermissionError(e))
                        this._clearSavedHostChange();
                    throw { message: error, status: e.status };
                }
            }
            if (this._isPermissionError(error)) this._clearSavedHostChange();
            throw error;
        });
        if (value.assets?.length || booking.extension_data.assets?.length) {
            const requests = await validateAssetRequestsForResource(
                { ...result, from_booking: true },
                {
                    date: value.date,
                    duration: value.duration,
                    all_day: value.all_day,
                    host: value.booked_by_email,
                    zones: unique([...zones, ...(value.zones || [])]).filter(
                        (_) => _,
                    ),
                },
                value.assets,
            ).catch((e) => {
                console.error("Couldn't update asset requests", e);
                if (e?.status === 409) {
                    notifyError(i18n('BOOKINGS.ASSETS_CLASH_ERROR'));
                }
                this._loading.set('');
                throw e?.error || e;
            });
            if (!requests) throw i18n('BOOKINGS.ASSETS_INVALID_ERROR');
            await requests();
        }
        this._loading.set('');
        const { booking_type } = value;
        if (reset_form) {
            this.clearForm();
            this._patch({ booking_type });
        }
        this.last_success = result;
        sessionStorage.setItem(
            STORAGE_KEYS.last_booked_booking,
            JSON.stringify(result),
        );
        if (reset_form) this.setView('success');
        return result;
    }

    public setting(key: string) {
        return this.settingForType(this._options().type, key);
    }

    /**
     * Resolve a setting for a specific booking type. Prefer this over `setting()`
     * when the relevant type is known (e.g. at submission), since this service is
     * a shared singleton and `setting()` resolves against whichever flow's
     * `_options().type` happens to be active.
     */
    public settingForType(type: string, key: string) {
        return (
            this._settings.get(`app.${type}.${key}`) ??
            this._settings.get(`app.${type}s.${key}`) ??
            this._settings.get(`app.bookings.${key}`)
        );
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
        const available = await this.listAvailableResources();
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
        this._patch({
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
        const { members, group, type } = this._options();
        if (!group) throw i18n('BOOKINGS.GROUP_NOT_SET');
        const rollback_on_group_error =
            this.setting('rollback_group_bookings') === true;
        localStorage.removeItem(STORAGE_KEYS.last_group_booking_errors);
        const member_list = members || [];
        const extra_members = member_list.filter(
            (_) => _.email !== currentUser().email,
        );
        if (extra_members.length <= 0) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const form = this.model() as any;
        const group_members = unique(
            [currentUser(), ...extra_members],
            'email',
        );
        const resources = await this._resolveDeskGroupResources(
            group_members,
            form,
        );
        const unavailable_errors: string[] = [];
        const booking_failures: GroupBookingFailure[] = [];
        const available = await Promise.all(
            group_members.map(async (member, idx) => {
                const resource = resources[idx];
                if (!resource) {
                    const message = i18n('BOOKINGS.GROUP_MEMBER_NO_RESOURCE');
                    unavailable_errors.push(
                        `${member.name || member.email}: ${message}`,
                    );
                    booking_failures.push({
                        email: member.email,
                        name: member.name || member.email,
                        error: message,
                    });
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
                    const message = this._error_message(error);
                    unavailable_errors.push(
                        `${member.name || member.email}: ${message}`,
                    );
                    booking_failures.push({
                        email: member.email,
                        name: member.name || member.email,
                        asset_id: resource.id,
                        asset_name: resource.name || resource.id,
                        error: message,
                    });
                    return false;
                }
            }),
        );
        const unavailable = group_members.filter((_, idx) => !available[idx]);
        const group_name = this._groupName();
        const group_error = i18n('BOOKINGS.GROUP_SOME_HAVE_BOOKINGS', {
            members: unavailable.map((_) => _.name || _.email)?.join(', '),
        });
        let user_booking: Booking = null;
        const booking_ids: string[] = [];
        const booking_errors: string[] = [];
        let parent_id = '';
        try {
            if (available.some((_) => _)) {
                const group_booking = await this.createGroupContainerBooking(
                    form,
                    group_name,
                    group_members,
                    type,
                );
                parent_id = group_booking.id;
                if (parent_id) booking_ids.push(parent_id);
            }
            for (let i = 0; i < group_members.length; i++) {
                if (!available[i]) continue;
                const user = group_members[i];
                const asset = resources[i];
                const assets =
                    user.email == currentUser().email ? form.assets : [];
                this._patch({
                    ...form,
                    assets,
                    parent_id,
                    user: user as any,
                    user_email: user.email,
                    user_id: user.id,
                    ...this._resourceFormData(asset),
                    group: group_name,
                });
                const bkn = await this.postForm(true, false).catch((error) => {
                    const message = this._error_message(error);
                    const error_message = `${user.name || user.email}: ${message}`;
                    if (rollback_on_group_error) throw error_message;
                    booking_errors.push(error_message);
                    booking_failures.push({
                        email: user.email,
                        name: user.name || user.email,
                        asset_id: asset.id,
                        asset_name: asset.name || asset.id,
                        error: message,
                    });
                    return null;
                });
                if (bkn?.id) booking_ids.push(bkn.id);
                if (
                    bkn?.user_email?.toLowerCase() ===
                    currentUser().email?.toLowerCase()
                )
                    user_booking = bkn;
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
            if (booking_errors.length) {
                notifyWarn(booking_errors.join('\n'));
            }
        } catch (error) {
            if (rollback_on_group_error && booking_ids.length) {
                await this.rollbackGroupBookings(booking_ids);
            }
            throw this._error_message(error);
        }
        if (user_booking) {
            this.last_success = user_booking;
            sessionStorage.setItem(
                STORAGE_KEYS.last_booked_booking,
                JSON.stringify(user_booking),
            );
        }
        if (booking_ids.length > 1) {
            localStorage.setItem(
                STORAGE_KEYS.last_group_booking_ids,
                JSON.stringify(booking_ids),
            );
        }
        if (booking_failures.length) {
            localStorage.setItem(
                STORAGE_KEYS.last_group_booking_errors,
                JSON.stringify(booking_failures),
            );
        }
        this._finishGroupFlow(type);
        return user_booking;
    }

    public async postFormForVisitorGroup() {
        const { members, group } = this._options();
        if (!group) throw i18n('BOOKINGS.GROUP_NOT_SET');
        if (!members?.length) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const rollback_on_group_error =
            this.setting('rollback_group_bookings') === true;
        const form = this.model() as any;
        const group_name = this._groupName();
        const booking_ids: string[] = [];
        let parent_id = '';
        let first_booking: Booking = null;
        try {
            const group_booking = await this.createGroupContainerBooking(
                form,
                group_name,
                members,
                'visitor',
            );
            parent_id = group_booking.id;
            if (parent_id) booking_ids.push(parent_id);
            for (const visitor of members) {
                if (!visitor.email) continue;
                this._patch(
                    this._visitorMemberPatch(visitor, form, {
                        id: '',
                        parent_id,
                        group_name,
                    }),
                );
                const bkn = await this.postForm(true, false).catch((error) => {
                    throw `${visitor.name || visitor.email}: ${this._error_message(error)}`;
                });
                if (bkn?.id) booking_ids.push(bkn.id);
                if (bkn?.id && !first_booking) first_booking = bkn;
            }
        } catch (error) {
            if (rollback_on_group_error && booking_ids.length) {
                await this.rollbackGroupBookings(booking_ids);
            }
            throw this._error_message(error);
        }
        this._finishGroupFlow('visitor');
        return first_booking;
    }

    public async loadGroupSiblings(booking: Booking): Promise<Booking[]> {
        if (!booking?.id) return [];
        const parent_id = booking.parent_id || booking.id;
        // Visitor groups made before group containers existed have no parent
        // link — their only shared marker is the generated `grp-*` description.
        const legacy_group = `${booking.description || ''}`.startsWith('grp-')
            ? booking.description
            : '';
        const { type } = this._options();
        const list = await queryBookings({
            period_start: getUnixTime(booking.date),
            period_end: getUnixTime(addMinutes(booking.date, booking.duration)),
            type,
            include_booked_by: true,
        });
        return list.filter(
            (b) =>
                b.id === parent_id ||
                b.parent_id === parent_id ||
                (!!legacy_group && b.description === legacy_group),
        );
    }

    public async loadGroupMembersForBooking(booking: Booking): Promise<User[]> {
        if (!booking?.id) return [];
        const type = this._options().type || booking.booking_type || 'desk';
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
        const { members, type } = this._options();
        if (!members?.length) throw i18n('BOOKINGS.GROUP_NO_MEMBERS');
        const form = this.model() as any;
        const base_form = { ...form, id: '' };
        let parent_id = form.parent_id || form.id;
        const group_name = this._groupName(form.group);
        const is_visitor = type === 'visitor';
        const needs_group_container_parent = is_visitor && !form.parent_id;
        const has_group_container_parent =
            !!form.parent_id &&
            !existing_siblings.some((s) => s.id === form.parent_id);
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
        await Promise.all(to_delete.map((s) => removeBooking(s.id)));
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
            if (needs_group_container_parent) {
                const group_booking = await this.createGroupContainerBooking(
                    form,
                    group_name,
                    members,
                    type,
                );
                parent_id = group_booking.id;
            } else if (has_group_container_parent) {
                await this.saveGroupContainerBooking(
                    form,
                    group_name,
                    members,
                    type,
                    parent_id,
                );
            }
            for (let index = 0; index < members.length; index++) {
                const member = members[index];
                if (!member.email) continue;
                const existing = sibling_map[member.email];
                const booking_id = existing?.id || '';
                if (is_visitor) {
                    this._patch(
                        this._visitorMemberPatch(member, base_form, {
                            id: booking_id,
                            parent_id:
                                booking_id === parent_id ? '' : parent_id,
                            group_name,
                            existing_zones: existing?.zones,
                        }),
                    );
                } else {
                    const asset = desk_resources[index];
                    this._patch({
                        ...base_form,
                        id: booking_id,
                        parent_id: booking_id === parent_id ? '' : parent_id,
                        group: group_name,
                        user: member as any,
                        user_email: member.email,
                        user_id: member.id,
                        ...(asset ? this._resourceFormData(asset) : {}),
                    });
                }
                const bkn = await this.postForm(true, false);
                if (!first_result) first_result = bkn;
            }
        } catch (error) {
            throw this._error_message(error);
        }
        this._finishGroupFlow(type);
        return first_result;
    }

    /** Build the group identifier, reusing an existing one when supplied. */
    private _groupName(existing?: string) {
        return (
            existing ||
            `${currentUser().email}[${format(Date.now(), 'yyyy-MM-dd')}]`
        );
    }

    /** Form patch for a single visitor in a group flow. */
    private _visitorMemberPatch(
        member: User,
        base_form: any,
        opts: {
            id: string;
            parent_id: string;
            group_name: string;
            existing_zones?: string[];
        },
    ) {
        const member_name = member.name || member.email;
        return {
            ...base_form,
            id: opts.id,
            parent_id: opts.parent_id,
            group: opts.group_name,
            asset_id: member.email,
            asset_name: member_name,
            international:
                (member as any).international ||
                !!member.extension_data?.international,
            company: (member as any).company || member.organisation,
            phone: member.phone,
            zones: base_form.zones?.length
                ? [...base_form.zones]
                : opts.existing_zones?.length
                  ? [...opts.existing_zones]
                  : [...(this._booking()?.zones || [])],
            assets: [],
            attendees: [
                new User({
                    name: member_name,
                    email: member.email,
                    organisation:
                        (member as any).company || member.organisation,
                    phone: member.phone,
                }),
            ],
        };
    }

    /** Shared success tail for every group flow: reset, retag, show success. */
    private _finishGroupFlow(booking_type: BookingType) {
        this.clearForm();
        this._patch({ booking_type });
        this.setView('success');
    }

    private _resourceFormData(asset: BookingAsset) {
        return {
            resources: asset ? [asset] : [],
            booking_asset: asset || null,
            asset_id: asset?.id,
            asset_name: asset?.name || asset?.id,
            name: asset?.display_name || asset?.name || asset?.id,
            description: asset?.name || asset?.id,
            map_id: asset?.map_id || asset?.id,
            zones: (asset?.zone
                ? unique([
                      this._org.organisation.id,
                      this._org.region?.id,
                      asset.zone?.parent_id,
                      asset.zone?.id,
                  ])
                : [this._org.organisation.id, this._org.region?.id]
            ).filter((_) => _),
        };
    }

    private async createGroupContainerBooking(
        form: GroupContainerForm,
        group_name: string,
        members: User[],
        resource_type: BookingType,
    ) {
        return this.saveGroupContainerBooking(
            form,
            group_name,
            members,
            resource_type,
        );
    }

    private async saveGroupContainerBooking(
        form: GroupContainerForm,
        group_name: string,
        members: User[],
        resource_type: BookingType,
        id = '',
    ) {
        const group_members = this.mapGroupMembers(resource_type, members);
        // The form model carries a stale top-level `group_members` (spread from
        // the source booking's extension_data when the form was created). The
        // Booking constructor copies unknown top-level keys into
        // `extension_data`, so that stale value would clobber the freshly
        // computed `group_members` below. Drop it from the spread.
        const { group_members: _stale_group_members, ...form_data } =
            form as any;
        const zones = unique(
            [
                ...(form.zones || []),
                this._org.organisation.id,
                this._org.region?.id,
            ].filter((_) => _),
        );
        return saveBooking(
            new Booking({
                ...formBookingData(form_data),
                id,
                parent_id: '',
                asset_id: group_name,
                asset_name: 'Group Booking',
                booking_type: 'group',
                type: 'group',
                description: form.title || 'Group Booking',
                title: form.title || 'Group Booking',
                user_name: form.user?.name || form.user_name,
                user_email: form.user?.email || form.user_email,
                user_id: form.user?.id || form.user_id,
                approved:
                    this._settings.get('app.bookings.no_approval') === true,
                zones,
                extension_data: {
                    ...formExtensionData(form.extension_data),
                    group: group_name,
                    group_members,
                    group_resource_type: resource_type,
                },
            }).toJSON(),
        ).catch((error) => {
            this._loading.set('');
            throw error;
        });
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

    private _isPermissionError(error: any) {
        const status = error?.status || error?.error?.status;
        if (status === 403) return true;
        const message = this._error_message(error).toLowerCase();
        return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
    }

    private _clearSavedHostChange() {
        const user = currentUser();
        if (!user) return;
        const host_data = {
            user,
            user_id: user.id,
            user_email: user.email,
            user_name: user.name,
        };
        this._patch(host_data, { emitEvent: false });
        const saved_form = JSON.parse(
            sessionStorage.getItem(STORAGE_KEYS.booking_form) || '{}',
        );
        sessionStorage.setItem(
            STORAGE_KEYS.booking_form,
            JSON.stringify({ ...saved_form, ...host_data }),
        );
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
        const form_booking_type = this.model().booking_type;
        const booking_type =
            form_booking_type && form_booking_type !== ' '
                ? form_booking_type
                : this._options().type;
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
            await Promise.allSettled(booking_ids.map((id) => removeBooking(id)))
        ).filter((_) => _.status === 'rejected');
        if (rollback_errors.length) {
            console.error('Failed to rollback group bookings', rollback_errors);
        }
    }

    private async checkQuestions() {
        if (this._settings.get('app.desks.ignore_questions') !== false) return;
        const ref = this._dialog.open(DeskQuestionsModalComponent);
        const result = await new Promise<any>((resolve) => {
            const subs: { unsubscribe: () => void }[] = [];
            const finish = (value: any) => {
                subs.forEach((s) => s.unsubscribe());
                resolve(value);
            };
            subs.push(
                ref.componentInstance.event.subscribe((event: any) => {
                    if (event?.reason === 'done') finish(event);
                }),
            );
            subs.push(ref.afterClosed().subscribe((event) => finish(event)));
        });
        if (result?.reason !== 'done') throw 'User cancelled';
        const form = ref.componentInstance.model();
        for (const key in form) {
            if (form[key]) throw 'User failed questionaire';
        }
        ref.close();
    }

    public assignedResourceBooking(type: BookingType) {
        const setting = this.settingForType(type, 'assigned_resource_booking');
        return setting === 'allow' ||
            setting === 'deny' ||
            setting === 'other_only'
            ? setting
            : 'other_only';
    }

    /**
     * Enforce the assigned-resource restriction for any assignable resource type
     * (desk/parking/locker).
     *
     * `other_only` is evaluated here at submission so the form remains available
     * for booking on behalf of others. `deny` blanket-blocks the form in the UI.
     */
    private async _checkAssignedResourceRestriction(
        user_email: string,
        type: BookingType,
    ) {
        const is_self =
            !user_email ||
            user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
        const setting = this.assignedResourceBooking(type);
        if (setting === 'allow') return true;
        if (
            setting === 'deny' &&
            !is_self &&
            (await this._computeHasAssignedResource(type))
        ) {
            throw `You have an assigned ${type} and cannot book another ${type}.`;
        }
        if (await this._computeHasAssignedResource(type, user_email)) {
            throw `${is_self ? 'You have' : 'This user has'} an assigned ${type} and cannot book another ${type}.`;
        }
        return true;
    }

    /** Check if the given resource is available for the selected user to book */
    private async _checkResourceAvailable(
        { id, asset_id, date, duration, all_day, user_email }: Partial<Booking>,
        type: BookingType,
    ) {
        if (!user_email) throw i18n('BOOKINGS.NO_USER');
        if (type === 'group-event') return true;
        await this._checkAssignedResourceRestriction(user_email, type);
        const period = all_day
            ? this._allDayTimeRange(date)
            : { date, date_end: date + duration * 60 * 1000 };
        const bookings = await queryBookings({
            period_start: getUnixTime(period.date),
            period_end: getUnixTime(period.date_end),
            type,
            email: user_email,
            limit: 1000,
        });
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
        // A permanent allocation is stored as a booking tagged `is_assigned`
        // (see the concierge assignment flows). It always consumes the user's
        // allowance, so booking on top of it double-books them even when the
        // daily limit is higher than one. `allow` opts out of the restriction.
        const is_self =
            user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
        if (
            this.assignedResourceBooking(type) !== 'allow' &&
            active_bookings.some(
                (_) => _.id !== id && (_.extension_data as any)?.is_assigned,
            )
        ) {
            throw `${is_self ? 'You have' : 'This user has'} an assigned ${type} and cannot book another ${type}.`;
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
        const user = await this._loadBookingRulesHost(host);
        if (!assets?.length) return true;
        await this._whenSettled(this._booking_rules_resource);
        const rules = this.booking_rules();
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
                { type: this._options().type || 'resource' },
                assets.length,
            );
        }
        return true;
    }

    private _useCurrentUserForBookingRules() {
        return (
            this._settings.get(
                'app.bookings.force_current_user_for_booking_rules',
            ) === true || this._settings.get('app.basic_user_search') === false
        );
    }

    private _bookingRulesHost(user?: User) {
        return this._useCurrentUserForBookingRules()
            ? currentUser()
            : user || currentUser();
    }

    private async _loadBookingRulesHost(host: string) {
        const current_user = currentUser();
        if (
            this._useCurrentUserForBookingRules() ||
            current_user.email === host
        ) {
            return current_user;
        }
        return showUser(host).catch(() => ({ email: host }));
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

        const clashes = (await findBookingClashes(temp_booking, {
            include_clash_time: true,
        })) as BookingClash[];

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
            this.setting('allow_recurring_instance_clashes') ?? true;

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

    private async _recurringBookedResourceList(
        resources: BookingAsset[],
        zones: string,
        value: Record<string, any>,
    ): Promise<string[]> {
        const effective_timezone = this.timezone || value.timezone;
        const booking = new Booking({
            ...value,
            booking_type: 'desk',
            zones: [zones],
            asset_ids: resources.map((_) => _.id),
            timezone: effective_timezone,
        });
        const key = JSON.stringify({
            date: booking.date,
            duration: booking.duration,
            timezone: effective_timezone,
            recurrence_type: (booking as any).recurrence_type,
            recurrence_end: (booking as any).recurrence_end,
            zones,
            asset_ids: resources.map((_) => _.id),
        });
        const existing = this._recurring_clash_requests.get(key);
        if (existing) return existing;
        const request = findBookingClashes(booking)
            .then((ids) => ids as string[])
            .catch(() => [] as string[])
            .finally(() => this._recurring_clash_requests.delete(key));
        this._recurring_clash_requests.set(key, request);
        return request;
    }

    /** Load the locker resources for the active building or region */
    private _loadLockerResources(): Promise<BookingAsset[]> {
        const use_region = this._settings.get('app.use_region');
        const scope_id = use_region
            ? this._org.region?.id
            : this._org.building?.id;
        return loadLockerResources(this._org, scope_id) as Promise<
            BookingAsset[]
        >;
    }

    public async loadParkingResources(): Promise<BookingAsset[]> {
        const use_region = this._settings.get('app.use_region');
        const levels = (
            use_region
                ? this._org.levelsForRegion()
                : this._org.levelsForBuilding()
        ).filter((_) => _.tags.includes('parking'));
        const spaces = await queryParkingSpacesForZones(
            levels.map((l) => l.id),
        );
        return spaces.map((s) => ({
            ...s,
            id: s.id || s.map_id,
            groups: s.place_groups,
            zone: this._org.levelWithID([s.zone_id]) as any,
        })) as BookingAsset[];
    }

    public async loadResourceList(type: string): Promise<BookingAsset[]> {
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
        if (use_region) {
            const id = this._org.building.parent_id;
            const buildings = this._org.buildings.filter(
                (_) => _.parent_id === id,
            );
            const lists = await Promise.all(
                buildings.map((_) =>
                    listChildMetadata(_.id, { name: type }).then((data) =>
                        flatten(data.map(map_metadata)),
                    ),
                ),
            );
            return flatten(lists);
        }
        const data = await listChildMetadata(this._org.building.id, {
            name: type,
        });
        return flatten(data.map(map_metadata));
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
        const available_resources = await this.listAvailableResources();
        const all_resources = await this.listResources();
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
            throw i18n(
                'BOOKINGS.GROUP_INSUFFICIENT_RESOURCES',
                {
                    available,
                    members: group_members.length,
                },
                available,
            );
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

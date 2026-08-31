import {
    computed,
    effect,
    inject,
    Injectable,
    Injector,
    OnDestroy,
    resource,
    signal,
    untracked,
    WritableSignal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { deskFromAsset, queryDeskAssets } from '@placeos/assets';
import { showMetadata } from '@placeos/ts-client';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';

import {
    alignDateToBookableHours,
    AsyncHandler,
    BookableHoursRange,
    Booking,
    BookingRuleset,
    currentUser,
    Desk,
    firstValueWhere,
    i18n,
    isWithinBookableHours,
    notifyError,
    notifySuccess,
    OrganisationService,
    rulesForResource,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';

import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { SetDatetimeModalComponent } from 'libs/explore/src/lib/set-datetime-modal.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';

export interface DeskOptions {
    enable_booking?: boolean;
    date?: number;
    all_day?: boolean;
    zones?: string[];
    host?: StaffUser;
    custom?: boolean;
    use_api?: boolean;
}
export interface DesksStats {
    free: number;
    occupied: number;
    total: number;
}

@Injectable()
export class ExploreDesksService extends AsyncHandler implements OnDestroy {
    private _state = inject(ExploreStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _bookings = inject(BookingFormService);
    private _dialog = inject(MatDialog);
    private _injector = inject(Injector);

    private _org_initialised = this._org.initialised;
    private _building = this._org.active_building;

    private _in_use = signal<string[]>([]);
    private _options = signal<DeskOptions>({});
    private _presence = signal<string[]>([]);
    private _signs_of_life = signal<string[]>([]);
    private _checked_in = signal<string[]>([]);
    private _statuses: Record<string, WritableSignal<string>> = {};

    private _users: Record<string, WritableSignal<string>> = {};
    private _departments: Record<string, string> = {};
    private _desk_bookings: Record<string, WritableSignal<Booking[]>> = {};

    private _desk_key(desk: Partial<Desk>) {
        return desk?.map_id || desk?.id || '';
    }

    private _booking_rules = resource({
        params: () => this._building() || undefined,
        loader: ({ params: bld }) =>
            showMetadata(bld.id, `desk_booking_rules`)
                .then((_) =>
                    _?.details instanceof Array
                        ? (_.details as any as BookingRuleset[])
                        : [],
                )
                .catch(() => [] as BookingRuleset[]),
    });
    public readonly booking_rules = computed<BookingRuleset[]>(
        () => this._booking_rules.value() ?? [],
    );

    private _desk_list = resource({
        params: () => this._state.level() || undefined,
        loader: ({ params: lvl }) => {
            if (this._settings.get('app.desks.use_assets')) {
                return queryDeskAssets(lvl.id)
                    .then((assets) =>
                        assets.map((asset) => deskFromAsset(asset, lvl)),
                    )
                    .catch(() => [] as Desk[]);
            }
            return showMetadata(lvl.id, 'desks')
                .catch(() => ({ details: [] }))
                .then((i) =>
                    (i?.details instanceof Array ? i.details : []).map(
                        (j: Record<string, any>) =>
                            new Desk({ ...j, zone: lvl as any }),
                    ),
                );
        },
    });
    public readonly desk_list = computed<Desk[]>(
        () => this._desk_list.value() ?? [],
    );

    private _booking_list = resource({
        params: () => {
            const options = this._options();
            const level = this._state.level();
            const wanted =
                options.use_api ||
                options.date > endOfDay(Date.now()).valueOf();
            return wanted && level
                ? { date: options.date, zone: level.id }
                : undefined;
        },
        loader: ({ params: { date, zone } }) =>
            queryBookings({
                type: 'desk',
                period_start: getUnixTime(startOfDay(date || Date.now())),
                period_end: getUnixTime(endOfDay(date || Date.now())),
                zones: zone,
            }).catch(() => [] as Booking[]),
    });

    constructor() {
        super();
        // Bind to level state from the AreaManagement driver
        effect(() => {
            const lvl = this._state.level();
            const { is_public } = this._state.options();
            if (!this._org_initialised() || !lvl || is_public) return;
            this.timeout('bind', () => this._bindToLevel(lvl.id), 300);
        });
        // Store booking list changes for in-use and checked-in states
        effect(() => {
            const bookings = this._booking_list.value();
            if (!bookings) return;
            untracked(() => {
                this._in_use.set(bookings.map((_) => _.asset_id));
                this._checked_in.set(
                    bookings.filter((_) => _.checked_in).map((_) => _.asset_id),
                );
            });
        });
        // Update desk statuses when any of the inputs change
        effect(() => {
            const desks = this.desk_list();
            const in_use = this._in_use();
            const presence = this._presence();
            const checked_in = this._checked_in();
            const signs = this._signs_of_life();
            const restrictions = this.booking_rules();
            this._options();
            this.timeout(
                'state_change',
                () =>
                    this._updateDeskStatuses(
                        desks,
                        in_use,
                        presence,
                        checked_in,
                        signs,
                        restrictions,
                    ),
                50,
            );
        });
        this.init();
    }

    public async init() {
        await firstValueWhere(
            this._org_initialised,
            (_) => !!_,
            this._injector,
        );
        this.setOptions({
            enable_booking:
                this._settings.get('app.desks.enable_maps') !== false,
        });
    }

    public setOptions(options: DeskOptions) {
        this._options.update((value) => ({ ...value, ...options }));
    }

    private _bindToLevel(zone_id: string) {
        const mod = this._org.module('area_management', 'AreaManagement');
        if (!mod) return;
        const binding = mod.variable(zone_id);
        if (binding) {
            this.subscription(
                `lvl-in_use`,
                binding.bindThenSubscribe((d) =>
                    this.processBindingChange(d || ({} as any), mod.id),
                ),
            );
        }
        const bookings_binding = mod.variable(`${zone_id}:desk_bookings`);
        if (bookings_binding) {
            this.subscription(
                `lvl-desk_bookings`,
                bookings_binding.bindThenSubscribe((d) => {
                    const value = { ...(d || {}) };
                    for (const id in value) {
                        const new_bookings = value[id].map(
                            (_) =>
                                new Booking({
                                    ..._,
                                    booking_start:
                                        _.booking_start || _.started_at,
                                    booking_end: _.booking_end || _.ends_at,
                                    duration: _.duration / 60,
                                }),
                        );
                        if (!this._desk_bookings[id]) {
                            this._desk_bookings[id] = signal(new_bookings);
                        } else {
                            this._desk_bookings[id].set(new_bookings);
                        }
                    }
                }),
            );
        }
    }

    private _updateDeskStatuses(
        desks: Desk[],
        in_use: string[],
        presence: string[],
        checked_in: string[],
        signs: string[],
        restrictions: BookingRuleset[],
    ) {
        const level = this._state.level();
        const active_keys = new Set<string>();
        for (const { id, bookable, map_id } of desks) {
            const d_id = map_id || id;
            active_keys.add(d_id);
            const is_used = in_use.some((i) => d_id === i);
            const has_presence = presence.some((i) => d_id === i);
            const has_signs = signs.some((i) => d_id === i);
            const is_checked_in =
                checked_in.some((i) => d_id === i) ||
                (is_used && this._settings.get(`app.desks.auto_checkin`));
            const is_restricted = rulesForResource(
                {
                    date: Date.now(),
                    duration: 60,
                    host: currentUser(),
                    resource: {
                        id,
                        zones: [level?.parent_id, level?.id],
                    },
                },
                restrictions,
            )?.hidden;
            if (!this._statuses[d_id]) this._statuses[d_id] = signal('free');
            this._statuses[d_id].set(
                bookable && !is_restricted
                    ? !is_used && !has_presence && !is_checked_in
                        ? has_signs
                            ? 'signs-of-life'
                            : 'free'
                        : !has_presence && !is_checked_in
                          ? 'pending'
                          : 'busy'
                    : 'not-bookable',
            );
        }
        for (const d_id in this._statuses) {
            if (!active_keys.has(d_id)) delete this._statuses[d_id];
        }
        this.processDesks(desks);
    }

    public processBindingChange(
        { value }: { value: any[] },
        system_id: string,
    ) {
        const devices = (value || []).filter(
            (v) => !['desk', 'booking'].includes(v.location),
        );
        const desks = (value || []).filter(
            (v) =>
                v.location === 'desk' ||
                (v.location === 'booking' && v.type === 'desk'),
        );

        const date = this._options().date || Date.now();
        if (
            date <= endOfDay(Date.now()).valueOf() &&
            !this._options().use_api
        ) {
            this._in_use.set(
                desks
                    .filter((v) => v.location === 'booking')
                    .map((v) => v.map_id || v.asset_id),
            );
            this._checked_in.set(
                desks
                    .filter((v) => v.location === 'booking' && v.checked_in)
                    .map((v) => v.map_id || v.asset_id),
            );
            this._presence.set(
                desks
                    .filter((v) => v.at_location)
                    .map((v) => v.map_id || v.asset_id),
            );
            this._signs_of_life.set(
                desks
                    .filter((v) => v.signs_of_life)
                    .map((v) => v.map_id || v.asset_id),
            );
        }
        const departments = this._settings.get('app.department_map') || {};
        for (const desk of desks) {
            const d_id = desk.map_id || desk.asset_id;
            if (!this._users[d_id]) {
                this._users[d_id] = signal('');
            }
            this._users[d_id].set(desk.staff_name);
            this._departments[d_id] = departments[desk.department] || '';
        }
        this.processDevices(devices, system_id);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk_id in this._statuses) {
            if (!this._statuses[desk_id])
                this._statuses[desk_id] = signal('free');
            const s = this._statuses[desk_id]();
            style_map[`#${desk_id}`] = {
                fill:
                    colours[`desk-${s}`] ||
                    colours[`${s}`] ||
                    DEFAULT_COLOURS[`${s}`],
            };
        }
        this._state.setStyles('desks', style_map);
    }

    private processDevices(devices: Record<string, any>[], system_id: string) {
        const list = [];
        for (const device of devices) {
            const x = device.x / device.map_width;
            const y = device.y / device.map_height;
            list.push({
                track_id: `device:hover:${x},${y}`,
                location: {
                    x: device.coordinates_from?.includes('right') ? 1 - x : x,
                    y: device.coordinates_from?.includes('bottom') ? 1 - y : y,
                },
                content: ExploreDeviceInfoComponent,
                z_index: 20,
                data: { ...device, system: system_id },
            });
        }
        this._state.setFeatures('devices', list);
    }

    private processDesks(desks: Desk[]) {
        const list = [];
        const actions = [];
        const options = this._options();
        const show_desk_users =
            this._settings.get('app.desks.show_users') ?? true;
        for (const desk of desks) {
            const d_id = this._desk_key(desk);

            if (!this._statuses[d_id]) {
                this._statuses[d_id] = signal('free');
            }
            if (!this._desk_bookings[d_id])
                this._desk_bookings[d_id] = signal([]);
            if (!this._users[d_id]) {
                this._users[d_id] = signal('');
            }
            if (show_desk_users) {
                const user_value =
                    this._users[d_id]() ||
                    desk.staff_name ||
                    (desk as any).assigned_name ||
                    '';
                this._users[d_id].set(user_value);
            } else {
                this._users[d_id].set('');
            }
            list.push({
                track_id: `desk:hover:${d_id}`,
                location: d_id,
                content: ExploreDeskInfoComponent,
                full_size: true,
                no_scale: true,
                data: {
                    id: d_id,
                    map_id: desk.name,
                    name: desk.name || desk.map_id,
                    user: this._users[d_id],
                    status: this._statuses[d_id],
                    department: this._departments[d_id] || '',
                    bookings: this._desk_bookings[d_id],
                    date: options.date || Date.now(),
                },
                z_index: 20,
            });
            if (!desk.bookable) continue;
            let can_book = true;
            const book_fn = async () => {
                if (!can_book) return;
                await this._bookDesk(desk, options);
            };
            ['mousedown', 'touchstart'].forEach((event) =>
                actions.push({
                    id: d_id,
                    action: event,
                    priority: 10,
                    callback: () => {
                        can_book = true;
                        this.timeout('booking', () => (can_book = false));
                    },
                }),
            );
            ['mouseup', 'touchend'].forEach((event) =>
                actions.push({
                    id: d_id,
                    action: event,
                    priority: 10,
                    callback: book_fn,
                }),
            );
        }
        this._state.setActions(
            'desks',
            this._options().enable_booking ? actions : [],
        );
        this._state.setFeatures('desks', list);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private async _setBookingTime(
        date: number,
        duration: number,
        host = false,
        resource: Desk = null,
        all_day = false,
        bookable_hours: BookableHoursRange | null = null,
    ) {
        let user = null;
        if (this._settings.get('app.desks.allow_time_changes')) {
            const until = endOfDay(
                addDays(
                    Date.now(),
                    this._settings.get('app.desks.available_period') || 90,
                ),
            );
            const allow_all_day = !!this._settings.get(
                'app.desks.allow_all_day',
            );
            const ref = this._dialog.open(SetDatetimeModalComponent, {
                data: {
                    date,
                    duration,
                    until,
                    host,
                    resource_type: 'Desk',
                    resource,
                    all_day,
                    allow_all_day,
                    bookable_hours,
                },
            });
            const details = await new Promise<any>((resolve) =>
                ref.afterClosed().subscribe(resolve),
            );
            if (!details) throw 'User cancelled';
            date = details.date;
            duration = details.duration;
            user = details.user;
            all_day = details.all_day;
        }
        return { date, duration, user, all_day };
    }

    private async _bookDesk(desk: Desk, options: DeskOptions) {
        const d_id = this._desk_key(desk);
        const asset_id = desk.id || desk.map_id;
        const resource = { ...desk, id: asset_id };
        if (this._statuses[d_id]?.() !== 'free') {
            return notifyError(
                i18n('EXPLORE.DESK_AVAILABLE_ERROR', {
                    name: desk.name || 'Desk',
                }),
            );
        }
        if (
            desk.groups?.length &&
            !desk.groups.find((_) => currentUser().groups.includes(_))
        ) {
            return notifyError(
                i18n('EXPLORE.DESK_GROUP_ERROR', { name: desk.name || 'Desk' }),
            );
        }
        this._bookings.newForm('desk');
        this._bookings.setOptions({ type: 'desk' });
        const bookable_hours: BookableHoursRange | null =
            this._settings.get('app.desks.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours') ||
            null;
        if (
            bookable_hours &&
            !this._settings.get('app.desks.allow_time_changes') &&
            !isWithinBookableHours(Date.now(), bookable_hours)
        ) {
            return notifyError(i18n('EXPLORE.OUTSIDE_BOOKABLE_HOURS'));
        }
        if (options.date) {
            this._bookings.model.update((m) => ({
                ...m,
                date: bookable_hours
                    ? alignDateToBookableHours(options.date, bookable_hours)
                    : options.date,
            }));
            this._bookings.model.update((m) => ({
                ...m,
                all_day: options.all_day ?? m.all_day,
            }));
        } else if (bookable_hours) {
            this._bookings.model.update((m) => ({
                ...m,
                date: alignDateToBookableHours(
                    this._bookings.model().date,
                    bookable_hours,
                ),
            }));
        }
        let { date, duration, user, all_day } = await this._setBookingTime(
            this._bookings.model().date,
            this._bookings.model().duration,
            this._options()?.custom ?? false,
            desk as any,
            options.all_day ?? this._bookings.model().all_day,
            bookable_hours,
        );
        user = user || options.host || currentUser();
        const user_email = user?.email;
        this._bookings.model.update((m) => ({
            ...m,
            resources: [resource],
            asset_id,
            asset_name: desk.name,
            date,
            duration: all_day ? 12 * 60 : duration,
            all_day,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            user,
            user_email,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
        }));

        const restrictions = this.booking_rules();
        const is_restricted = rulesForResource(
            {
                date,
                duration,
                host: currentUser(),
                resource: {
                    id: asset_id,
                    zones: [desk.zone?.parent_id, desk.zone?.id],
                },
            },
            restrictions,
        )?.hidden;

        if (is_restricted) {
            return notifyError(
                i18n('EXPLORE.DESK_RESTRICTION_ERROR', {
                    name: desk.name || 'Desk',
                }),
            );
        }

        await this._bookings.confirmPost().catch((e) => {
            console.log(e);
            notifyError(
                i18n('EXPLORE.DESK_BOOKING_ERROR', {
                    name: desk.name || 'Desk',
                    error: e.message || e.error || e,
                }),
            );
            throw e;
        });
        if (!this._users[d_id]) {
            this._users[d_id] = signal('');
        }
        this._users[d_id].set((options.host || currentUser())?.name);
        notifySuccess(
            i18n('EXPLORE.DESK_BOOKING_SUCCESS', { name: desk.name || 'Desk' }),
        );
    }
}

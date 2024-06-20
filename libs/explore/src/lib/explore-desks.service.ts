import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule, showMetadata } from '@placeos/ts-client';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import {
    AsyncHandler,
    BookingRuleset,
    currentUser,
    notifyError,
    notifySuccess,
    rulesForResource,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Desk } from 'libs/organisation/src/lib/desk.class';
import { StaffUser } from 'libs/users/src/lib/user.class';

import { SetDatetimeModalComponent } from 'libs/explore/src/lib/set-datetime-modal.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';

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
    private _in_use = new BehaviorSubject<string[]>([]);
    private _options = new BehaviorSubject<DeskOptions>({});
    private _presence = new BehaviorSubject<string[]>([]);
    private _signs_of_life = new BehaviorSubject<string[]>([]);
    private _statuses: Record<string, string> = {};
    private _users: Record<string, string> = {};
    private _departments: Record<string, string> = {};

    private _checked_in = new BehaviorSubject<string[]>([]);

    public readonly booking_rules: Observable<BookingRuleset[]> =
        this._org.active_building.pipe(
            filter((bld) => !!bld),
            switchMap((bld) =>
                showMetadata(bld.id, `desk_booking_rules`).pipe(
                    catchError(() => of({ details: [] }))
                )
            ),
            map((_) => (_?.details instanceof Array ? _.details : [])),
            shareReplay(1)
        );

    public readonly desk_list = this._state.level.pipe(
        debounceTime(50),
        switchMap((lvl) =>
            showMetadata(lvl.id, 'desks').pipe(
                catchError(() => of({ details: [] })),
                map((i) =>
                    (i?.details instanceof Array ? i.details : []).map(
                        (j: Record<string, any>) =>
                            new Desk({ ...j, zone: lvl as any })
                    )
                )
            )
        ),
        catchError((e) => []),
        shareReplay(1)
    );

    private _bind = combineLatest([
        this._state.level,
        this._state.options,
    ]).pipe(
        debounceTime(300),
        filter(([_, { is_public }]) => !!_ && !is_public),
        map(([lvl]) => {
            this._statuses = {};
            const system_id = this._org.binding('area_management');
            if (!system_id) return;
            let binding = getModule(system_id, 'AreaManagement')?.binding(
                lvl.id
            );
            if (!binding) return;
            this.subscription(
                `lvl-in_use`,
                binding
                    .listen()
                    .subscribe((d) =>
                        this.processBindingChange(d || {}, system_id)
                    )
            );
            this.subscription('lvl-in_use_bind', binding.bind());
        })
    );

    private _booking_list = combineLatest([
        this._options,
        this._state.level,
    ]).pipe(
        filter(
            ([_, lvl]) =>
                (_.use_api || _.date > endOfDay(Date.now()).valueOf()) && !!lvl
        ),
        switchMap(([_, level]) => {
            return queryBookings({
                type: 'desk',
                period_start: getUnixTime(startOfDay(_.date || Date.now())),
                period_end: getUnixTime(endOfDay(_.date || Date.now())),
                zones: level.id,
            });
        }),
        debounceTime(200),
        tap((bookings) => {
            this._in_use.next(bookings.map((_) => _.asset_id));
            this._checked_in.next(
                bookings.filter((_) => _.checked_in).map((_) => _.asset_id)
            );
        }),
        shareReplay(1)
    );

    private _state_change = combineLatest([
        this.desk_list,
        this._in_use,
        this._presence,
        this._checked_in,
        this._signs_of_life,
        this.booking_rules,
        this._options,
    ]).pipe(
        debounceTime(50),
        map(
            async ([
                desks,
                in_use,
                presence,
                checked_in,
                signs,
                restrictions,
            ]) => {
                this._statuses = {};
                const level = await this._state.level.pipe(take(1)).toPromise();
                for (const { id, bookable } of desks) {
                    const is_used = in_use.some((i) => id === i);
                    const has_presence = presence.some((i) => id === i);
                    const has_signs = signs.some((i) => id === i);
                    const is_checked_in =
                        checked_in.some((i) => id === i) ||
                        (is_used &&
                            this._settings.get(`app.desk.auto_checkin`));
                    const is_restricted = rulesForResource(
                        {
                            date: Date.now(),
                            duration: 60,
                            host: currentUser(),
                            resource: {
                                id,
                                zones: [level.parent_id, level.id],
                            },
                        },
                        restrictions
                    )?.hidden;
                    this._statuses[id] =
                        bookable && !is_restricted
                            ? !is_used && !has_presence && !is_checked_in
                                ? has_signs
                                    ? 'signs-of-life'
                                    : 'free'
                                : !has_presence && !is_checked_in
                                ? 'pending'
                                : 'busy'
                            : 'not-bookable';
                }
                this.processDesks(desks);
            }
        )
    );

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _bookings: BookingFormService,
        private _dialog: MatDialog
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.setOptions({
            enable_booking:
                this._settings.get('app.desks.enable_maps') !== false,
        });
        this.subscription('bookings', this._booking_list.subscribe());
        this.subscription('bind', this._bind.subscribe());
        this.subscription('booking_rules', this.booking_rules.subscribe());
        this.subscription('changes', this._state_change.subscribe());
        this.subscription(
            'desks',
            this.desk_list.subscribe((desks) => this.processDesks(desks))
        );
    }

    public setOptions(options: DeskOptions) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public processBindingChange(
        { value }: { value: any[] },
        system_id: string
    ) {
        const devices = (value || []).filter(
            (v) => !['desk', 'booking'].includes(v.location)
        );
        const desks = (value || []).filter(
            (v) =>
                v.location === 'desk' ||
                (v.location === 'booking' && v.type === 'desk')
        );
        const date = this._options.getValue().date || Date.now();
        if (
            date <= endOfDay(Date.now()).valueOf() &&
            !this._options.getValue().use_api
        ) {
            this._in_use.next(
                desks
                    .filter((v) => v.location === 'booking')
                    .map((v) => v.map_id || v.asset_id)
            );
            this._checked_in.next(
                desks
                    .filter((v) => v.location === 'booking' && v.checked_in)
                    .map((v) => v.map_id || v.asset_id)
            );
            this._presence.next(
                desks
                    .filter((v) => v.at_location)
                    .map((v) => v.map_id || v.asset_id)
            );
            this._signs_of_life.next(
                desks
                    .filter((v) => v.signs_of_life)
                    .map((v) => v.map_id || v.asset_id)
            );
        }
        const departments = this._settings.get('app.department_map') || {};
        for (const desk of desks) {
            this._users[desk.map_id || desk.asset_id] = desk.staff_name;
            this._departments[desk.map_id || desk.asset_id] =
                departments[desk.department] || '';
        }
        this.processDevices(devices, system_id);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk_id in this._statuses) {
            if (!this._statuses[desk_id]) continue;
            style_map[`#${desk_id}`] = {
                fill:
                    colours[`desk-${this._statuses[desk_id]}`] ||
                    colours[`${this._statuses[desk_id]}`] ||
                    DEFAULT_COLOURS[`${this._statuses[desk_id]}`],
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
        const options = this._options.getValue();
        for (const desk of desks) {
            list.push({
                track_id: `desk:hover:${desk.map_id || desk.id}`,
                location: desk.id,
                content: ExploreDeskInfoComponent,
                full_size: true,
                no_scale: true,
                data: {
                    id: desk.map_id || desk.id,
                    map_id: desk.name,
                    name: desk.name || desk.map_id,
                    user: this._users[desk.map_id] || desk.staff_name,
                    status: this._statuses[desk.map_id],
                    department: this._departments[desk.map_id] || '',
                },
                z_index: 20,
            });
            if (!desk.bookable) continue;
            let can_book = true;
            const book_fn = async () => {
                if (!can_book) return;
                if (this._statuses[desk.id] !== 'free') {
                    return notifyError(
                        `${desk.name || 'Desk'} is unavailable at this time.`
                    );
                }
                if (
                    desk.groups?.length &&
                    !desk.groups.find((_) => currentUser().groups.includes(_))
                ) {
                    return notifyError(
                        `You are not allowed to book ${desk.name}.`
                    );
                }
                this._bookings.newForm();
                this._bookings.setOptions({ type: 'desk' });
                if (options.date) {
                    this._bookings.form.patchValue({
                        date: options.date,
                    });
                    this._bookings.form.patchValue({
                        all_day: !!options.all_day,
                    });
                }
                let { date, duration, user } = await this._setBookingTime(
                    this._bookings.form.value.date,
                    this._bookings.form.value.duration,
                    this._options.getValue()?.custom ?? false,
                    desk as any
                );
                user = user || options.host || currentUser();
                const user_email = user?.email;
                this._bookings.form.patchValue({
                    resources: [desk],
                    asset_id: desk.id,
                    asset_name: desk.name,
                    date,
                    duration: options.all_day ? 12 * 60 : duration,
                    map_id: desk?.map_id || desk?.id,
                    description: desk.name,
                    user,
                    user_email,
                    booking_type: 'desk',
                    zones: desk.zone
                        ? [desk.zone?.parent_id, desk.zone?.id]
                        : [],
                });
                await this._bookings.confirmPost().catch((e) => {
                    console.log(e);
                    notifyError(
                        `Failed to book desk ${desk.name || desk.id}. ${
                            e.message || e.error || e
                        }`
                    );
                    throw e;
                });
                this._users[desk.map_id] = (
                    options.host || currentUser()
                )?.name;
                notifySuccess(
                    `Successfully booked desk ${desk.name || desk.id}`
                );
            };
            ['mousedown', 'touchstart'].forEach((event) =>
                actions.push({
                    id: desk.id,
                    action: event,
                    priority: 10,
                    callback: () => {
                        can_book = true;
                        this.timeout('booking', () => (can_book = false));
                    },
                })
            );
            ['mouseup', 'touchend'].forEach((event) =>
                actions.push({
                    id: desk.id,
                    action: event,
                    priority: 10,
                    callback: book_fn,
                })
            );
        }
        this._state.setActions(
            'desks',
            this._options.getValue().enable_booking ? actions : []
        );
        this._state.setFeatures('desks', list);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private async _setBookingTime(
        date: number,
        duration: number,
        host: boolean = false,
        resource: Desk = null
    ) {
        let user = null;
        if (!!this._settings.get('app.desks.allow_time_changes')) {
            const until = endOfDay(
                addDays(
                    Date.now(),
                    this._settings.get('app.desks.available_period') || 90
                )
            );
            const ref = this._dialog.open(SetDatetimeModalComponent, {
                data: { date, duration, until, host, resource },
            });
            const details = await ref.afterClosed().toPromise();
            if (!details) throw 'User cancelled';
            date = details.date;
            duration = details.duration;
            user = details.user;
        }
        return { date, duration, user };
    }
}

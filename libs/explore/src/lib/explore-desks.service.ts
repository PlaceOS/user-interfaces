import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule, showMetadata } from '@placeos/ts-client';
import {
    addDays,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfMinute,
} from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    catchError,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import {
    BaseClass,
    currentUser,
    notifySuccess,
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

export interface DeskOptions {
    enable_booking?: boolean;
    date?: number | Date;
    zones?: string[];
    host?: StaffUser;
}
export interface DesksStats {
    free: number;
    occupied: number;
    total: number;
}

@Injectable()
export class ExploreDesksService extends BaseClass implements OnDestroy {
    private _in_use = new BehaviorSubject<string[]>([]);
    private _options = new BehaviorSubject<DeskOptions>({});
    private _presence = new BehaviorSubject<string[]>([]);
    private _signs_of_life = new BehaviorSubject<string[]>([]);
    private _statuses: Record<string, string> = {};
    private _users: Record<string, string> = {};
    private _departments: Record<string, string> = {};
    private _poll = new BehaviorSubject<number>(0);

    private _checked_in = new BehaviorSubject<string[]>([]);

    private _desk_bookings = combineLatest([
        this._state.level,
        this._poll,
    ]).pipe(
        switchMap(([lvl]) =>
            queryBookings({
                period_start: getUnixTime(startOfMinute(new Date())),
                period_end: getUnixTime(addMinutes(new Date(), 60)),
                type: 'desk',
                zones: lvl.id,
            })
        ),
        tap((l) => {
            this._users = {};
            this._departments = {};
            l.forEach((b) => {
                const departments =
                    this._settings.get('app.department_map') || {};
                this._users[b.asset_id] = b.user_name;
                this._departments[b.asset_id] =
                    departments[b.extension_data.department] || '';
            });
        }),
        shareReplay(1)
    );

    public readonly desk_list = this._state.level.pipe(
        switchMap((lvl) =>
            showMetadata(lvl.id, 'desks').pipe(
                map((i) =>
                    (i.details instanceof Array ? i.details : []).map(
                        (j: Record<string, any>) =>
                            new Desk({ ...j, zone: lvl as any })
                    )
                )
            )
        ),
        catchError((e) => []),
        shareReplay(1)
    );

    private _bind = this._state.level.pipe(
        map((lvl) => {
            this._statuses = {};
            this.unsubWith('lvl');
            if (!lvl) return;
            const system_id = this._org.binding('area_management');
            if (!system_id) return;
            let binding = getModule(system_id, 'AreaManagement').binding(
                lvl.id
            );
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

    private _state_change = combineLatest([
        this.desk_list,
        this._in_use,
        this._presence,
        this._checked_in,
        this._signs_of_life,
        this._options,
    ]).pipe(
        // debounceTime(50),
        map(([desks, in_use, presence, checked_in, signs]) => {
            this._statuses = {};
            for (const { id, bookable } of desks) {
                const is_used = in_use.some((i) => id === i);
                const has_presence = presence.some((i) => id === i);
                const has_signs = signs.some((i) => id === i);
                const is_checked_in = checked_in.some((i) => id === i);
                this._statuses[id] = bookable
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
        })
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
        this.subscription('bind', this._bind.subscribe());
        this.subscription('changes', this._state_change.subscribe());
        this.subscription(
            'desks',
            this.desk_list.subscribe((desks) => this.processDesks(desks))
        );
    }

    public startPolling(delay: number = 10 * 1000) {
        this.subscription(
            'desks_in_use_bookings',
            this._desk_bookings.subscribe((_) => {
                const actives = _.filter(
                    (e) =>
                        !(
                            e.rejected ||
                            e.deleted ||
                            e.extension_data.current_state === 'ended' ||
                            e.is_done
                        )
                );
                this._in_use.next(actives.map((i) => i.asset_id));
                this._checked_in.next(
                    actives.filter((e) => e.checked_in).map((i) => i.asset_id)
                );
            })
        );
        this.interval(
            'poll',
            () => this._poll.next(new Date().valueOf()),
            delay
        );
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
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
        // this._in_use.next(desks.map((v) => v.map_id || v.asset_id));
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
        const departments = this._settings.get('app.department_map') || {};
        for (const desk of desks) {
            this._users[desk.map_id] = desk.staff_name;
            this._departments[desk.map_id] = departments[desk.department] || '';
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

    private processDesks(desks: Record<string, any>[]) {
        const list = [];
        const actions = [];
        const options = this._options.getValue();
        for (const desk of desks) {
            list.push({
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
            const book_fn = async () => {
                if (this._statuses[desk.id] !== 'free') return;
                this._bookings.newForm();
                this._bookings.setOptions({ type: 'desk' });
                const { date, duration } = await this._setBookingTime(
                    this._bookings.form.value.date,
                    this._bookings.form.value.duration
                );
                this._bookings.form.patchValue({
                    asset_id: desk.id,
                    asset_name: desk.name,
                    date,
                    duration,
                    map_id: desk?.map_id || desk?.id,
                    description: desk.name,
                    user: options.host || currentUser(),
                    booking_type: 'desk',
                    zones: desk.zone
                        ? [desk.zone?.parent_id, desk.zone?.id]
                        : [],
                });
                await this._bookings.confirmPost();
                this._users[desk.map_id] = (
                    options.host || currentUser()
                )?.name;
                notifySuccess(
                    `Successfully booked desk ${desk.name || desk.id}`
                );
            };
            actions.push({
                id: desk.id,
                action: 'click',
                callback: book_fn,
            });
            actions.push({
                id: desk.id,
                action: 'touchend',
                callback: book_fn,
            });
        }
        this._state.setActions(
            'desks',
            this._options.getValue().enable_booking ? actions : []
        );
        this._state.setFeatures('desks', list);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private async _setBookingTime(date: number, duration: number) {
        if (!!this._settings.get('app.desks.allow_time_changes')) {
            const until = endOfDay(
                addDays(
                    Date.now(),
                    this._settings.get('app.desks.available_period') || 90
                )
            );
            const ref = this._dialog.open(SetDatetimeModalComponent, {
                data: { date, duration, until },
            });
            const details = await ref.afterClosed().toPromise();
            if (!details) throw 'User cancelled';
            date = details.date;
            duration = details.duration;
        }
        return { date, duration };
    }
}

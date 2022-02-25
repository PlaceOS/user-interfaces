import { Injectable, OnDestroy } from '@angular/core';
import { getModule, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { addDays, endOfDay, getUnixTime, startOfDay } from 'date-fns';

import {
    BaseClass,
    currentUser,
    HashMap,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { BookingFormService, queryBookings } from '@placeos/bookings';
import { StaffUser } from '@placeos/users';
import { Desk, OrganisationService } from '@placeos/organisation';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';
import { SetDatetimeModalComponent } from 'libs/explore/src/lib/set-datetime-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
    private _desks = new BehaviorSubject<string[]>([]);
    private _reserved = new BehaviorSubject<string[]>([]);
    private _statuses: HashMap<string> = {};
    private _users: HashMap<string> = {};
    private _poll = new BehaviorSubject<number>(0);

    private _desk_bookings = combineLatest([
        this._state.level,
        this._poll,
    ]).pipe(
        switchMap(([lvl]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(new Date())),
                period_end: getUnixTime(endOfDay(new Date())),
                type: 'desk',
                zones: lvl.id,
            })
        ),
        shareReplay(1)
    );

    public readonly desk_list = this._state.level.pipe(
        switchMap((lvl) =>
            showMetadata(lvl.id, 'desks').pipe(
                map((i) =>
                    (i.details instanceof Array ? i.details : []).map(
                        (j: HashMap) => new Desk({ ...j, zone: lvl as any })
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
            const building = this._org.buildings.find(
                (bld) => bld.id === lvl.parent_id
            );
            if (!building) return;
            const system_id =
                building.bindings?.area_management ||
                this._org.organisation.bindings?.area_management;
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
            binding = getModule(system_id, 'AreaManagement').binding(
                `${lvl.id}:desk_ids`
            );
            this.subscription(
                `lvl-desks_list`,
                binding.listen().subscribe((d) => this._desks.next(d || []))
            );
            this.subscription('lvl-desk_list_bind', binding.bind());
        })
    );

    private _state_change = combineLatest([
        this.desk_list,
        this._in_use,
        this._reserved,
        this._options,
    ]).pipe(
        // debounceTime(50),
        map(([desks, in_use, reserved]) => {
            this._statuses = {};
            for (const { id, bookable } of desks) {
                const is_used = in_use.some((i) => id === i);
                const has_presence = reserved.some((i) => id === i);
                this._statuses[id] = bookable
                    ? !is_used
                        ? 'free'
                        : !has_presence
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
            enable_booking: this._settings.get('app.desks.enabled') !== false,
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
            this._desk_bookings.subscribe((_) =>
                this._in_use.next(_.map((i) => i.asset_id))
            )
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
        this._reserved.next(
            desks
                .filter((v) => !v.at_location)
                .map((v) => v.map_id || v.asset_id)
        );
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

    private processDevices(devices: HashMap[], system_id: string) {
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

    private processDesks(desks: HashMap[]) {
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
                    user: this._users[desk.map_id] || desk.staff_name,
                    status: this._statuses[desk.map_id],
                },
                z_index: 20,
            });
            if (!desk.bookable) continue;
            const book_fn = async () => {
                this._bookings.newForm();
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
                this._users[desk.map_id] = (options.host || currentUser())?.name;
                notifySuccess(
                    `Successfull booked desk ${desk.name || desk.id}`
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

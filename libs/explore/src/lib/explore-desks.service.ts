import { Injectable, OnDestroy } from '@angular/core';
import {
    getModule,
    PlaceVariableBinding,
    showMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

import { BaseClass, HashMap, SettingsService } from '@placeos/common';
import { DesksService, queryBookings } from '@placeos/bookings';
import { StaffUser } from '@placeos/users';
import {
    BuildingLevel,
    Desk,
    OrganisationService,
} from '@placeos/organisation';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreDeviceInfoComponent } from './explore-device-info.component';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';

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
    private _bindings: PlaceVariableBinding[] = [];
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
        )
    );

    public readonly desk_list = this._state.level.pipe(
        switchMap((lvl) =>
            showMetadata(lvl.id, { name: 'desks' }).pipe(
                map((i) =>
                    (i.details instanceof Array ? i.details : []).map(
                        (j: HashMap) => new Desk({ ...j, zone: lvl })
                    )
                )
            )
        ),
        catchError(() => [])
    );

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _desks_service: DesksService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.setOptions({
            enable_booking: this._settings.get('app.desks.enabled') !== false,
        });
        this.subscription(
            'level_change',
            this._state.level.subscribe((level) => this.bindToDesks(level))
        );
        this.subscription(
            'changes',
            combineLatest([
                this.desk_list,
                this._in_use,
                this._reserved,
                this._options,
            ]).subscribe(([desks, in_use, reserved]) => {
                this._statuses = {};
                for (const { id, bookable } of desks) {
                    const is_used = in_use.some((i) => id === i);
                    const is_reserved = reserved.some((i) => id === i);
                    this._statuses[id] = bookable
                        ? !is_used
                            ? 'free'
                            : is_reserved
                            ? 'reserved'
                            : 'busy'
                        : 'not-bookable';
                }
                this.processDesks(desks);
            })
        );
        this.subscription(
            'desks',
            this.desk_list.subscribe((desks) => {
                this.processDesks(desks);
            })
        );
        this.subscription(
            'desks_in_use_bookings',
            this._desk_bookings.subscribe((_) =>
                this._in_use.next(_.map((i) => i.asset_id))
            )
        );
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.clearBindings();
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval(
            'poll',
            () => this._poll.next(new Date().valueOf()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: DeskOptions) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public clearBindings() {
        const bindings = ['desks_in_use', 'desk_list'];
        for (const id of bindings) {
            this.unsub(id);
        }
        this._bindings.forEach((b) => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }

    public bindToDesks(level: BuildingLevel) {
        this.clearBindings();
        if (!level) return;
        const building = this._org.buildings.find(
            (bld) => bld.id === level.parent_id
        );
        if (!building) return;
        const system_id =
            this._org.building.bindings.area_management ||
            this._org.organisation.bindings.area_management;
        if (!system_id) {
            this.startPolling();
            return;
        }
        let binding = getModule(system_id, 'AreaManagement').binding(level.id);
        this.subscription(
            `desks_in_use`,
            binding
                .listen()
                .subscribe((d) => this.processBindingChange(d, system_id))
        );
        binding.bind();
        this._bindings.push(binding);
        binding = getModule(system_id, 'AreaManagement').binding(
            `${level.id}:desk_ids`
        );
        this.subscription(
            `desks_list`,
            binding.listen().subscribe((d) => this._desks.next(d || []))
        );
        binding.bind();
        this._bindings.push(binding);
    }

    private processBindingChange(d, system_id) {
        const devices = (d?.value || []).filter((v) => v.location !== 'desk');
        const desks = (d?.value || []).filter(
            (v) =>
                v.location === 'desk' ||
                (v.location === 'booking' && v.type === 'desk')
        );
        this._in_use.next(desks.map((v) => v.map_id));
        this._reserved.next(
            desks.filter((v) => !v.at_location).map((v) => v.map_id)
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
                opacity: 0.6,
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
                data: { ...device, system: system_id },
            });
        }
        list.sort((a, b) => {
            const dist_a =
                1 - Math.sqrt(Math.pow(a.x - 0.5, 2) + Math.pow(a.x - 0.5, 2));
            const dist_b =
                1 - Math.sqrt(Math.pow(b.x - 0.5, 2) + Math.pow(b.x - 0.5, 2));
            return dist_a - dist_b;
        });
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
                hover: true,
                data: {
                    map_id: desk.name,
                    status: this._statuses[desk.map_id],
                },
            });
            actions.push({
                id: desk.id,
                action: 'click',
                callback: () =>
                    this._desks_service.bookDesk({
                        desks: [desk as Desk],
                        host: options.host,
                        date: options.date as Date,
                    }),
            });
            actions.push({
                id: desk.id,
                action: 'touchend',
                callback: () =>
                    this._desks_service.bookDesk({
                        desks: [desk as Desk],
                        host: options.host,
                        date: options.date as Date,
                    }),
            });
        }
        this._state.setActions(
            'desks',
            this._options.getValue().enable_booking ? actions : []
        );
        this._state.setFeatures('desks', list);
        this.timeout('update', () => this.updateStatus(), 100);
    }
}

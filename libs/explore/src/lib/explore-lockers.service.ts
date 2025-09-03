import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncHandler, SettingsService, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import {
    loadLockerBanks,
    loadLockers,
} from 'libs/bookings/src/lib/booking.utilities';
import { Locker, LockerBank } from 'libs/bookings/src/lib/locker.class';

import { ExploreLockerBankInfoComponent } from './explore-locker-bank-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';

@Injectable({
    providedIn: 'root',
})
export class ExploreLockersService extends AsyncHandler {
    private _explore = inject(ExploreStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _status = new BehaviorSubject([]);
    private _change = new BehaviorSubject(0);

    public readonly lockers_banks$: Observable<LockerBank[]> = loadLockerBanks(
        this._org,
        combineLatest([
            this._org.active_building,
            this._org.active_region,
            this._change,
        ]),
        () => this._settings.get('app.use_region'),
    );

    public readonly lockers$: Observable<Locker[]> = loadLockers(
        this._org,
        combineLatest([
            this._org.active_building,
            this._org.active_region,
            this._change,
        ]),
        this.lockers_banks$,
        () => this._settings.get('app.use_region'),
    );

    public filtered_lockers = combineLatest([
        this._explore.level,
        this.lockers$,
    ]).pipe(
        map(([level, list]) =>
            list.filter(
                (item) =>
                    !level ||
                    ((item as any).zones || item.bank?.zones || []).includes(
                        level.id,
                    ),
            ),
        ),
    );

    public filtered_banks = combineLatest([
        this._explore.level,
        this.lockers_banks$,
    ]).pipe(
        map(([level, list]) =>
            list.filter((item) => !level || item.zones.includes(level.id)),
        ),
    );

    public readonly status = combineLatest([
        this._explore.level,
        this._explore.options,
        this._org.active_building,
    ]).pipe(
        map(([lvl, { is_public }]) => {
            if (!lvl || is_public) return [];
            const mod = this._org.module('area_management', 'AreaManagement');
            if (!mod) return of({});
            const binding = mod.variable(lvl.id);
            this.subscription(
                `lvl-in_use`,
                binding.bindThenSubscribe((data) =>
                    this._status.next(
                        data?.value?.filter((_) => _.location === 'locker') ||
                            [],
                    ),
                ),
            );
        }),
    );

    public readonly locker_status = combineLatest([
        this._explore.level,
        this.lockers_banks$,
        this.lockers$,
        this._status,
    ]).pipe(
        map(([lvl, locker_banks, lockers, status]) => {
            if (!lvl) return [];
            const features = [];
            const map_status = {};
            const colours = this._settings.get('app.explore.colors') || {};
            const banks = unique(
                locker_banks
                    .filter((_) => _.level_id === lvl.id)
                    .map((_) => _.id),
            );
            for (const bank of banks) {
                const bank_lockers = lockers.filter((_) => _.bank_id === bank);
                let in_use_count = 0;
                for (const locker of bank_lockers) {
                    const in_use = status.find(
                        (_) => _.locker_id === locker.id && _.allocated,
                    );
                    in_use_count += in_use ? 1 : 0;
                }
                const bank_info = locker_banks.find((_) => _.id === bank);
                features.push({
                    location: bank_info.map_id,
                    content: ExploreLockerBankInfoComponent,
                    full_size: true,
                    no_scale: true,
                    z_index: 20,
                    data: {
                        bank: bank_info,
                        lockers,
                        in_use_count,
                        locker_count: bank_lockers.length,
                        system: this._org.binding('area_management'),
                    },
                });
                const in_use_percent = in_use_count / bank_lockers.length;
                const value =
                    in_use_percent > 0.8
                        ? 'busy'
                        : in_use_percent > 0.3
                          ? 'pending'
                          : 'free';
                map_status[`#${bank_info.map_id}`] = {
                    fill:
                        colours[`lockers-${value}`] ||
                        colours[`${value}`] ||
                        DEFAULT_COLOURS[`${value}`],
                };
            }
            this._explore.setStyles('lockers', map_status);
            this._explore.setFeatures('lockers', features);
        }),
    );

    constructor() {
        super();
        this.subscription('status', this.status.subscribe());
        this.subscription('locker_status', this.locker_status.subscribe());
    }
}

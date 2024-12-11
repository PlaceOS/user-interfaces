import { Injectable } from '@angular/core';
import { getModule, PlaceMetadata, showMetadata } from '@placeos/ts-client';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';

import {
    AsyncHandler,
    flatten,
    SettingsService,
    unique,
} from '@placeos/common';
import { LockerBank, Locker } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';

import { ExploreLockerBankInfoComponent } from './explore-locker-bank-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';

@Injectable({
    providedIn: 'root',
})
export class ExploreLockersService extends AsyncHandler {
    private _status = new BehaviorSubject([]);
    private _change = new BehaviorSubject(0);

    public readonly lockers_banks$: Observable<LockerBank[]> = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            this._settings.get('app.use_region')
                ? forkJoin(
                      this._org.buildingsForRegion().map((building) =>
                          showMetadata(building.id, 'locker_banks').pipe(
                              catchError(() => of(new PlaceMetadata())),
                              map((_) =>
                                  _.details instanceof Array ? _.details : [],
                              ),
                          ),
                      ),
                  ).pipe(map((_: LockerBank[][]) => flatten(_)))
                : showMetadata(bld.id, 'locker_banks').pipe(
                      catchError(() => of(new PlaceMetadata())),
                      map((_) => (_.details instanceof Array ? _.details : [])),
                  ),
        ),
        shareReplay(1),
    );

    public readonly lockers$: Observable<Locker[]> = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            combineLatest([
                this._settings.get('app.use_region')
                    ? forkJoin(
                          this._org.buildingsForRegion().map((building) =>
                              showMetadata(building.id, 'lockers').pipe(
                                  catchError(() => of(new PlaceMetadata())),
                                  map((_) =>
                                      _.details instanceof Array
                                          ? _.details
                                          : [],
                                  ),
                              ),
                          ),
                      ).pipe(map((_: Locker[][]) => flatten(_)))
                    : showMetadata(bld.id, 'lockers').pipe(
                          catchError(() => of(new PlaceMetadata())),
                          map((_) =>
                              _.details instanceof Array ? _.details : [],
                          ),
                      ),
                this.lockers_banks$,
            ]),
        ),
        map(([lockers, banks]: any) => {
            const locker_list = lockers;
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter((_) => _.bank_id === bank.id)
                    .map((_) => ({ ..._ }));
            }
            for (const locker of locker_list) {
                const bank = banks.find((b) => b.id === locker.bank_id);
                locker.bank = bank;
                locker.zone = bank.zone;
            }
            return lockers.filter((_) => _.bank);
        }),
        shareReplay(1),
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
            const sys_id = this._org.binding('area_management');
            if (!sys_id) return of({});
            let binding = getModule(sys_id, 'AreaManagement').binding(lvl.id);
            this.subscription(
                `lvl-in_use`,
                binding
                    .listen()
                    .subscribe((data) =>
                        this._status.next(
                            data?.value?.filter(
                                (_) => _.location === 'locker',
                            ) || [],
                        ),
                    ),
            );
            this.subscription('lvl-in_use_bind', binding.bind());
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

    constructor(
        private _explore: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {
        super();
        this.subscription('status', this.status.subscribe());
        this.subscription('locker_status', this.locker_status.subscribe());
    }
}

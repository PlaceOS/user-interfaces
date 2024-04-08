import { Injectable } from '@angular/core';
import { LockersService } from 'libs/bookings/src/lib/lockers.service';
import { ExploreStateService } from './explore-state.service';
import { AsyncHandler, SettingsService, unique } from '@placeos/common';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { getModule } from '@placeos/ts-client';
import { OrganisationService } from '@placeos/organisation';
import { ExploreLockerBankInfoComponent } from './explore-locker-bank-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';

@Injectable({
    providedIn: 'root',
})
export class ExploreLockersService extends AsyncHandler {
    private _status = new BehaviorSubject([]);
    public readonly lockers$ = this._lockers.filtered_lockers$;
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
                                (_) => _.location === 'locker'
                            ) || []
                        )
                    )
            );
            this.subscription('lvl-in_use_bind', binding.bind());
        })
    );

    public readonly locker_status = combineLatest([
        this._explore.level,
        this._lockers.lockers_banks$,
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
                    .map((_) => _.id)
            );
            for (const bank of banks) {
                const bank_lockers = lockers.filter((_) => _.bank_id === bank);
                let in_use_count = 0;
                for (const locker of bank_lockers) {
                    const in_use = status.find(
                        (_) => _.locker_id === locker.id && _.allocated
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
        })
    );

    constructor(
        private _lockers: LockersService,
        private _explore: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.subscription(
            'level',
            this._explore.level
                .pipe(filter((_) => !!_))
                .subscribe((level) => this._lockers.setLevel(level.id))
        );
        this.subscription('status', this.status.subscribe());
        this.subscription('locker_status', this.locker_status.subscribe());
    }
}

import {
    computed,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';

import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';

import {
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
} from '@placeos/assets';
import {
    lockerBankFromAsset,
    lockerFromAsset,
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

    private _building = this._org.active_building;
    private _region = this._org.active_region;

    private _status = signal<Record<string, any>[]>([]);
    private _change = signal(0);

    /** ID of the zone used to scope locker queries */
    private _scope_id = computed(() => {
        const bld = this._building();
        const region = this._region();
        return this._settings.get('app.use_region')
            ? region?.id || this._org.region?.id
            : bld?.id;
    });

    private _locker_banks = resource({
        params: () => {
            const scope_id = this._scope_id();
            const changed = this._change();
            return scope_id ? { scope_id, changed } : undefined;
        },
        loader: async ({ params: { scope_id } }) => {
            const assets = await queryLockerBankAssetsForZones([
                scope_id,
            ]).catch(() => []);
            const banks = assets.map(lockerBankFromAsset);
            for (const bank of banks) {
                bank.zone = this._org.levelWithID(bank.zones || []) as any;
            }
            return banks;
        },
    });
    public readonly locker_banks = computed<LockerBank[]>(
        () => this._locker_banks.value() ?? [],
    );

    private _lockers = resource({
        params: () => {
            const scope_id = this._scope_id();
            const banks = this.locker_banks();
            return scope_id && banks.length ? { scope_id, banks } : undefined;
        },
        loader: async ({ params: { scope_id, banks } }) => {
            const assets = await queryLockerAssetsForZones([scope_id]).catch(
                () => [],
            );
            const lockers = assets.map((_) => lockerFromAsset(_, banks));
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter((_) => _.bank_id === bank.id)
                    .map((_) => ({ ..._ }));
            }
            return lockers.filter((_) => _.bank);
        },
    });
    public readonly lockers = computed<Locker[]>(
        () => this._lockers.value() ?? [],
    );

    public readonly filtered_lockers = computed(() => {
        const level = this._explore.level();
        return this.lockers().filter(
            (item) =>
                !level ||
                ((item as any).zones || item.bank?.zones || []).includes(
                    level.id,
                ),
        );
    });

    public readonly filtered_banks = computed(() => {
        const level = this._explore.level();
        return this.locker_banks().filter(
            (item) => !level || item.zones.includes(level.id),
        );
    });

    constructor() {
        super();
        // Bind to the in-use state of lockers for the active level
        effect(() => {
            const lvl = this._explore.level();
            const { is_public } = this._explore.options();
            this._building();
            if (!lvl || is_public) return;
            untracked(() => {
                const mod = this._org.module(
                    'area_management',
                    'AreaManagement',
                );
                if (!mod) return;
                const binding = mod.variable(lvl.id);
                this.subscription(
                    `lvl-in_use`,
                    binding.bindThenSubscribe((data) =>
                        this._status.set(
                            data?.value?.filter(
                                (_) => _.location === 'locker',
                            ) || [],
                        ),
                    ),
                );
            });
        });
        // Update map styling and features for the active level's locker banks
        effect(() => {
            const lvl = this._explore.level();
            const locker_banks = this.locker_banks();
            const lockers = this.lockers();
            const status = this._status();
            if (!lvl) return;
            untracked(() => {
                const features = [];
                const map_status = {};
                const colours = this._settings.get('app.explore.colors') || {};
                const banks = unique(
                    locker_banks
                        .filter((_) => _.level_id === lvl.id)
                        .map((_) => _.id),
                );
                for (const bank of banks) {
                    const bank_lockers = lockers.filter(
                        (_) => _.bank_id === bank,
                    );
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
                    const in_use_percent = bank_lockers.length
                        ? in_use_count / bank_lockers.length
                        : 0;
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
            });
        });
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import {
    queryAssetCategories,
    queryAssets,
    queryGroupAvailability,
} from './assets.fn';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import {
    addMinutes,
    endOfDay,
    endOfMinute,
    getUnixTime,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { AssetGroup } from './asset.class';
import { updateAssetGroupList } from './asset-group.pipe';
import { OrganisationService } from '@placeos/organisation';
import { assetAvailable, getAssetRulesForZone } from './asset.utilities';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { unique } from '@placeos/common';

export interface AssetOptions {
    zone?: string;
    date: number;
    duration?: number;
    ignore?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class AssetStateService {
    private _options = new BehaviorSubject<AssetOptions>({ date: Date.now() });
    private _search = new BehaviorSubject<string>('');
    private _category = new BehaviorSubject<string[]>([]);
    private _loading = new BehaviorSubject<string>('');

    public readonly search = this._search.asObservable();
    public readonly category = this._category.asObservable();
    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    public readonly rules = combineLatest([
        this._options,
        this._org.active_building,
    ]).pipe(
        filter(([_, bld]) => !!bld),
        debounceTime(300),
        switchMap(([options, bld]) => {
            this._loading.next(this._loading.getValue() + '[Rules]');
            return getAssetRulesForZone(bld.id || options.zone || '');
        }),
        tap((_) =>
            this._loading.next(
                this._loading.getValue().replace(/\[Rules\]/g, '')
            )
        ),
        shareReplay(1)
    );

    public readonly asset_list = of(0).pipe(
        switchMap(() => {
            this._loading.next(this._loading.getValue() + '[Assets]');
            return queryAssets();
        }),
        tap((_) =>
            this._loading.next(
                this._loading.getValue().replace(/\[Assets\]/g, '')
            )
        ),
        shareReplay(1)
    );

    public readonly asset_bookings = this._options.pipe(
        debounceTime(300),
        switchMap(({ zone, date }) => {
            this._loading.next(this._loading.getValue() + '[Bookings]');
            return queryBookings({
                zones: zone || '',
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'asset-request',
            });
        }),
        tap((_) =>
            this._loading.next(
                this._loading.getValue().replace(/\[Bookings\]/g, '')
            )
        ),
        shareReplay(1)
    );

    public readonly available_groups = combineLatest([
        this._options,
        this._org.active_building,
    ]).pipe(
        debounceTime(300),
        switchMap(([{ zone, date, duration, ignore }, bld]) => {
            return queryGroupAvailability(
                {
                    zones: bld.id || zone || '',
                    period_start: getUnixTime(startOfMinute(date)),
                    period_end: getUnixTime(
                        endOfMinute(addMinutes(date, duration || 30))
                    ),
                    type: 'asset-request',
                    rejected: false,
                } as any,
                ignore
            ).pipe(catchError(() => of([] as AssetGroup[])));
        }),
        map((list) => list.sort((a, b) => a.name.localeCompare(b.name))),
        tap((_) => updateAssetGroupList(_)),
        shareReplay(1)
    );

    public readonly category_list = this._org.active_building.pipe(
        switchMap((bld) => queryAssetCategories({ zone_id: bld.id })),
        map((_) => _.sort((a, b) => a.name.localeCompare(b.name))),
        shareReplay(1)
    );

    public readonly filtered_assets = combineLatest([
        this._search,
        this._category,
        this.available_groups,
        this.rules,
    ]).pipe(
        map(([search, category, assets, rules]) => {
            const s = search.toLowerCase();
            let list = assets.filter(
                (_) =>
                    _.assets?.length &&
                    (!category.length || category.includes(_.category_id)) &&
                    (_.name.toLowerCase().includes(s) ||
                        _.description.toLowerCase().includes(s)) &&
                    assetAvailable(_, rules, this._options.getValue() as any)
            );
            return list;
        }),
        shareReplay(1)
    );

    public readonly settings = combineLatest([this._org.active_building]).pipe(
        filter(([_]) => !!_),
        switchMap(([_]) =>
            showMetadata(_.id, 'assets-settings').pipe(
                catchError((_) => of({} as PlaceMetadata))
            )
        ),
        map((_) => (_.details as Record<string, any>) || {}),
        shareReplay(1)
    );
    public readonly disabled_rooms = this.settings.pipe(
        map((_) => _.disabled_rooms || [])
    );

    constructor(private _org: OrganisationService) {}

    public setSearch(value: string) {
        this._search.next(`${value}`);
    }

    public toggleCategory(value: string) {
        const categories = this._category.getValue();
        if (categories.includes(value)) {
            this._category.next(categories.filter((_) => _ !== value));
        } else {
            this._category.next([...categories, value]);
        }
    }

    public getOptions() {
        return this._options.getValue();
    }

    public setOptions(options: Partial<AssetOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }
}

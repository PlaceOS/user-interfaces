import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { queryAssets, queryGroupAvailability } from './assets.fn';
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
    private _loading = new BehaviorSubject<string>('');

    public readonly search = this._search.asObservable();
    public readonly loading = this._loading.asObservable();

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
                    zone_id: bld.id || zone || '',
                    zones: zone || '',
                    period_start: getUnixTime(startOfMinute(date)),
                    period_end: getUnixTime(
                        endOfMinute(addMinutes(date, duration || 30))
                    ),
                    type: 'asset-request',
                } as any,
                ignore
            ).pipe(catchError(() => of([] as AssetGroup[])));
        }),
        map((list) => list.sort((a, b) => a.name.localeCompare(b.name))),
        tap((_) => updateAssetGroupList(_)),
        shareReplay(1)
    );

    public readonly filtered_assets = combineLatest([
        this._search,
        this.available_groups,
    ]).pipe(
        map(([search, assets]) => {
            const s = search.toLowerCase();
            return assets.filter(
                (_) =>
                    _.assets?.length &&
                    (_.name.toLowerCase().includes(s) ||
                        _.description.toLowerCase().includes(s))
            );
        }),
        shareReplay(1)
    );

    constructor(private _org: OrganisationService) {}

    public setSearch(value: string) {
        this._search.next(`${value}`);
    }

    public setOptions(options: Partial<AssetOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }
}

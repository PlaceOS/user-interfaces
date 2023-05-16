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
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { AssetGroup } from './asset.class';

export interface AssetOptions {
    zone?: string;
    date: number;
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

    public readonly available_groups = combineLatest([this._options]).pipe(
        switchMap((options) =>
            queryGroupAvailability(options as any).pipe(
                catchError(() => of([] as AssetGroup[]))
            )
        ),
        map((list) => list.sort((a, b) => a.name.localeCompare(b.name))),
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
                    _.name.toLowerCase().includes(s) ||
                    _.description.toLowerCase().includes(s)
            );
        }),
        shareReplay(1)
    );

    public setSearch(value: string) {
        this._search.next(`${value}`);
    }

    public setOptions(options: Partial<AssetOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }
}

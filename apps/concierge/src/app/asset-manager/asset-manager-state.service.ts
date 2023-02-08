import { Injectable } from '@angular/core';
import { Booking, queryBookings, updateBooking } from '@placeos/bookings';
import { AsyncHandler, notifySuccess, unique } from '@placeos/common';
import { SpacesService } from '@placeos/spaces';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
    debounceTime,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import {
    Asset,
    deleteAsset,
    generateAssetForm,
    queryAssets,
    saveAsset,
} from '@placeos/assets';

export interface AssetOptions {
    search?: string;
    sort_by?: string;
    view: 'grid' | 'list';
    active_asset?: string;
}

export interface AssetRequest {
    id: string;
    assets: { id: string; name: string; amount?: number }[];
    date: number;
    duration: number;
    user_id: string;
    user_name: string;
    location_id: string;
    location_name: string;
    location_floor: string;
    status: 'approved' | 'pending' | 'declined';
    tracking: 'in_storage' | 'in_transit' | 'at_location' | 'unknown';
}

@Injectable({
    providedIn: 'root',
})
export class AssetManagerStateService extends AsyncHandler {
    private _options = new BehaviorSubject<AssetOptions>({ view: 'grid' });
    private _change = new BehaviorSubject(0);
    private _poll = new BehaviorSubject(0);
    private _form = generateAssetForm();
    private _loading = new BehaviorSubject(false);
    /** List of available assets */
    public readonly assets: Observable<Asset[]> = this._change.pipe(
        switchMap(() => {
            this._loading.next(true);
            return queryAssets();
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    ) as any;
    /** Whether asset list is loading */
    public readonly loading = this._loading.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** List of requests made by users for assets */
    public readonly requests = combineLatest([
        this._poll,
        this._change,
        this._spaces.initialised,
    ]).pipe(
        debounceTime(200),
        switchMap((_) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'asset-request',
            })
        ),
        map((_) =>
            _.map(
                (b) =>
                    new Booking({
                        ...b,
                        extension_data: {
                            ...b.extension_data,
                            space: this._spaces.find(b.extension_data.space_id),
                        },
                    })
            )
        ),
        shareReplay(1)
    );
    /** Filtered list of asset requests */
    public readonly filtered_requests = combineLatest([
        this.requests,
        this._options,
    ]).pipe(
        map(([list, options]) => {
            const search = (options.search || '').toLowerCase();
            return search
                ? list.filter(
                      (i) =>
                          i.user_name.toLowerCase().includes(search) ||
                          i.extension_data.location_name
                              .toLowerCase()
                              .includes(search) ||
                          i.extension_data.assets.find((_) =>
                              _.name.toLowerCase().includes(search)
                          ) ||
                          i.status.includes(search) ||
                          i.extension_data.tracking.includes(search)
                  )
                : list;
        })
    );
    /** Currently active asset */
    public readonly active_asset = combineLatest([
        this.assets,
        this._options,
    ]).pipe(
        map(([list, options]) =>
            list.find((_) => _.id === options.active_asset)
        )
    );
    /** List of requests for the currently active asset */
    public readonly active_asset_requests = this.active_asset.pipe(
        switchMap((asset) => {
            return this.requests.pipe(
                map((_) =>
                    _.filter((i) =>
                        i.extension_data.assets.find((a) => a.id === asset.id)
                    )
                )
            );
        }),
        map((_) => _.filter((i) => i.status !== 'declined'))
    );
    /** list of filtered assets */
    public readonly filtered_assets = combineLatest([
        this.assets,
        this._options,
    ]).pipe(
        map(([list, options]) =>
            options.search
                ? list.filter((i) =>
                      i.name
                          .toLowerCase()
                          .includes(options.search.toLowerCase())
                  )
                : list
        )
    );
    /** Mapping of available assets to categories */
    public readonly asset_mapping = this.filtered_assets.pipe(
        map((_) => {
            const map = {};
            const categories = unique(_.map((i) => i.category));
            for (const group of categories) {
                map[group] = _.filter((i) => i.category === group);
            }
            return map;
        })
    );
    /** List of asset categories */
    public readonly asset_categories = this.asset_mapping.pipe(
        map((_) => Object.keys(_ || {}))
    );

    public get form() {
        return this._form;
    }

    constructor(private _spaces: SpacesService) {
        super();
    }

    public startPolling(delay = 15 * 1000) {
        this.interval('polling', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('polling');
    }

    public resetForm() {
        this._form = generateAssetForm();
    }

    /** Update the set view options */
    public setOptions(options: Partial<AssetOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public async setStatus(item: Booking, status: any) {
        const result = await updateBooking(item.id, {
            ...item,
            approved: status === 'approved',
            rejected: status === 'declined',
        }).toPromise();
        this._change.next(Date.now());
        return result;
    }

    public async setTracking(item: Booking, tracking: string) {
        const result = await updateBooking(item.id, {
            ...item,
            extension_data: { ...item.extension_data, tracking },
        }).toPromise();
        this._change.next(Date.now());
        return result;
    }

    public clearActiveAsset() {
        this.setOptions({ active_asset: '' });
        this.resetForm();
    }

    public async deleteActiveAsset() {
        const asset = await this.active_asset.pipe(take(1)).toPromise();
        if (!asset?.id) return;
        await deleteAsset(asset.id).toPromise();
        this._change.next(Date.now());
        notifySuccess('Successfully deleted asset');
        this.clearActiveAsset();
    }

    public async postForm() {
        if (!this.form?.valid) return;
        const data = this.form.value;
        const asset = await saveAsset(data as any).toPromise();
        this._change.next(Date.now());
        notifySuccess(`Successfully ${data.id ? 'updated' : 'created'} asset`);
        this.resetForm();
        return asset.id;
    }
}

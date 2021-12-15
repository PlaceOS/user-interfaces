import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { queryBookings } from '@placeos/bookings';
import { BaseClass, notifySuccess, unique } from '@placeos/common';
import { del, get } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';

export interface AssetOptions {
    search?: string;
    sort_by?: string;
    view: 'grid' | 'list';
    active_asset?: string;
}

export interface Asset {
    id: string;
    name: string;
    category: string;
    images: { name: string; url: string }[];
    barcode: string;
    brand: string;
    description: string;
    specifications: Record<string, string>;
    purchase_details: Record<string, string>;
    invoices: { name: string; url: string; price?: number }[];
    count: number;
    locations: [string, string][];
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

export function generateAssetForm() {
    return new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        count: new FormControl(0, [Validators.required]),
        size: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        barcode: new FormControl('', [Validators.required]),
        brand: new FormControl('', [Validators.required]),
        specifications: new FormControl({}),
        purchase_date: new FormControl(Date.now(), [Validators.required]),
        expiry_date: new FormControl(null),
        invoices: new FormControl([]),
        purchase_details: new FormControl({}),
        locations: new FormControl([]),
    });
}

const ASSET_ENDPOINT = '/api/engine/v1/assets';

@Injectable({
    providedIn: 'root',
})
export class AssetManagerStateService extends BaseClass {
    private _options = new BehaviorSubject<AssetOptions>({ view: 'grid' });
    private _change = new BehaviorSubject(0);
    private _poll = new BehaviorSubject(0);
    private _form = generateAssetForm();
    private _loading = new BehaviorSubject(false);
    /** List of available assets */
    public readonly assets: Observable<Asset[]> = this._change.pipe(
        switchMap(() => {
            console.log('Get Assets');
            this._loading.next(true);
            return get(`${ASSET_ENDPOINT}`);
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    ) as any;
    /** Whether asset list is loading */
    public readonly loading = this._loading.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** List of requests made by users for assets */
    public readonly requests = this._poll.pipe(
        switchMap((_) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'asset-request',
            })
        )
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
    public readonly active_asset_requests =
        this.active_asset.pipe(
            switchMap((asset) => {
                return this.requests.pipe(
                    map((_) =>
                        _.filter((i) =>
                            i.extension_data.assets.find(
                                (a) => a.id === asset.id
                            )
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

    public resetForm() {
        this._form = generateAssetForm();
    }

    /** Update the set view options */
    public setOptions(options: Partial<AssetOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public async deleteActiveAsset() {
        const asset = await this.active_asset.pipe(take(1)).toPromise();
        if (!asset?.id) return;
        await del(`${ASSET_ENDPOINT}/${asset.id}`).toPromise();
        this._change.next(Date.now());
        notifySuccess('Successfully deleted asset');
    }
}

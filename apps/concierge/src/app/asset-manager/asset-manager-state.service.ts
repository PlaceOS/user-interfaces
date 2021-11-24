import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseClass, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

@Injectable({
    providedIn: 'root',
})
export class AssetManagerStateService extends BaseClass {
    private _options = new BehaviorSubject<AssetOptions>({ view: 'grid' });
    private _poll = new BehaviorSubject(0);
    private _form = generateAssetForm();

    private _assets = new BehaviorSubject<Asset[]>([
        {
            id: '1',
            name: 'iPad',
            category: 'Technology',
            images: [
                { url: 'assets/support/chrome-logo.svg' },
                { url: 'assets/support/firefox-logo.svg' },
                { url: 'assets/support/safari-logo.svg' },
            ],
        },
        { id: '2', name: 'iPhone', category: 'Technology' },
        { id: '3', name: 'iWatch', category: 'Technology' },
        { id: '4', name: 'Chair', category: 'Furniture' },
        { id: '5', name: 'Lounge', category: 'Furniture' },
        { id: '6', name: 'Table', category: 'Furniture' },
        { id: '7', name: 'Couch', category: 'Furniture' },
        { id: '8', name: 'Something', category: 'Other' },
    ] as any);
    /** List of available assets */
    public readonly assets = this._assets.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** List of requests made by users for assets */
    public readonly requests: Observable<AssetRequest[]> = this._poll.pipe(
        map((_) => {
            return [
                {
                    id: '1',
                    assets: [{ id: '1', name: 'iPad' }],
                    user_name: 'Alex S',
                    location_name: 'Room 1',
                    location_floor: '99',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                    tracking: 'at_location',
                },
            ] as any;
        })
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
                          i.location_name.toLowerCase().includes(search) ||
                          i.assets.find((_) =>
                              _.name.toLowerCase().includes(search)
                          ) ||
                          i.status.includes(search) ||
                          i.tracking.includes(search)
                  )
                : list;
        })
    );
    /** Currently active asset */
    public readonly active_asset = combineLatest([
        this._assets,
        this._options,
    ]).pipe(
        map(([list, options]) =>
            list.find((_) => _.id === options.active_asset)
        )
    );
    /** List of requests for the currently active asset */
    public readonly active_asset_requests: Observable<AssetRequest[]> =
        this.active_asset.pipe(
            switchMap((asset) => {
                return this.requests.pipe(
                    map((_) =>
                        _.filter((i) => i.assets.find((a) => a.id === asset.id))
                    )
                );
            }),
            map((_) => _.filter((i) => i.status !== 'declined'))
        );
    /** list of filtered assets */
    public readonly filtered_assets = combineLatest([
        this._assets,
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
}

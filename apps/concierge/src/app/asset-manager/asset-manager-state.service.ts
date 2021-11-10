import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
    images: string[];
    barcode: string;
    brand: string;
    description: string;
    specifications: Record<string, string>;
    purchase_details: Record<string, string>;
    invoices: string[];
    count: number;
    locations: [string, string][];
}

function generateAssetForm() {
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
        locations: new FormControl([])
    })
}

@Injectable({
    providedIn: 'root',
})
export class AssetManagerStateService {
    private _options = new BehaviorSubject<AssetOptions>({ view: 'grid' });
    private _form = generateAssetForm();

    private _assets = new BehaviorSubject<Asset[]>([
        { id: '1', name: 'iPad', category: 'Technology', images: ['assets/support/chrome-logo.svg', 'assets/support/firefox-logo.svg', 'assets/support/safari-logo.svg'] },
        { id: '2', name: 'iPhone', category: 'Technology' },
        { id: '3', name: 'iWatch', category: 'Technology' },
        { id: '4', name: 'Chair', category: 'Furniture' },
        { id: '4', name: 'Lounge', category: 'Furniture' },
        { id: '4', name: 'Table', category: 'Furniture' },
        { id: '4', name: 'Couch', category: 'Furniture' },
    ] as any);
    /** List of available assets */
    public readonly assets = this._assets.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** Currently active asset */
    public readonly active_asset = combineLatest([
        this._assets,
        this._options,
    ]).pipe(
        map(([list, options]) =>
            list.find((_) => _.id === options.active_asset)
        )
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

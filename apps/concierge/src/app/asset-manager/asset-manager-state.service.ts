import { Injectable } from '@angular/core';
import {
    Booking,
    approveBooking,
    queryBookings,
    rejectBooking,
    updateBooking,
} from '@placeos/bookings';
import { AsyncHandler, notifySuccess, unique } from '@placeos/common';
import { SpacesService } from '@placeos/spaces';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import {
    AssetGroup,
    AssetPurchaseOrder,
    deleteAssetGroup,
    generateAssetForm,
    getGroupsWithAssets,
    queryAssetCategories,
    queryAssetPurchaseOrders,
    saveAsset,
    showGroupFull,
} from '@placeos/assets';
import { cleanObject } from '@placeos/ts-client';

export interface AssetOptions {
    date?: number;
    search?: string;
    sort_by?: string;
    view: 'grid' | 'list';
    active_item?: string;
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
    /** Whether asset list is loading */
    public readonly loading = this._loading.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** List of available assets */
    public readonly products: Observable<AssetGroup[]> = this._change.pipe(
        switchMap(() => {
            this._loading.next(true);
            return getGroupsWithAssets();
        }),
        tap((_) => this._loading.next(false)),
        shareReplay(1)
    ) as any;
    /** List of available assets */
    public readonly purchase_orders: Observable<AssetPurchaseOrder[]> =
        this._change.pipe(
            switchMap(() => {
                this._loading.next(true);
                return queryAssetPurchaseOrders();
            }),
            tap(() => this._loading.next(false)),
            shareReplay(1)
        ) as any;
    /** List of requests made by users for assets */
    public readonly requests = combineLatest([
        this._options,
        this._poll,
        this._change,
        this._spaces.initialised,
    ]).pipe(
        debounceTime(200),
        switchMap(([{ date }]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date || Date.now())),
                period_end: getUnixTime(endOfDay(date || Date.now())),
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
    public readonly categories = combineLatest([
        this._options,
        this._change,
    ]).pipe(
        switchMap(() => queryAssetCategories()),
        shareReplay(1)
    );
    /** Currently active asset */
    public readonly active_product = combineLatest([
        this._options,
        this._change,
    ]).pipe(
        filter(([{ active_item }]) => !!active_item),
        map(([options, t]) => [options.active_item, t] as any),
        distinctUntilChanged(),
        switchMap(([active_item]) => showGroupFull(active_item)),
        shareReplay(1)
    );
    /** List of requests for the currently active asset */
    public readonly active_product_requests = this.active_product.pipe(
        switchMap((item) => {
            return this.requests.pipe(
                map((_) =>
                    _.filter((i) =>
                        item.assets.find((asset) => asset.id === i.asset_id)
                    )
                )
            );
        }),
        map((_) => _.filter((i) => i.status !== 'declined'))
    );
    /** list of filtered assets */
    public readonly filtered_products = combineLatest([
        this.products,
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
    public readonly product_mapping = this.filtered_products.pipe(
        map((_) => {
            const map = { _count: _.length };
            const categories = unique(_.map((i) => i.category_id));
            for (const group of categories) {
                map[group] = _.filter((i) => i.category_id === group);
            }
            return map;
        })
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

    public postChange() {
        this.timeout('change', () => this._change.next(Date.now()), 1000);
    }

    public async setStatus(item: Booking, status: any) {
        let result = item;
        if (status === 'declined') {
            result = await rejectBooking(item.id).toPromise();
        } else if (status === 'approved') {
            result = await approveBooking(item.id).toPromise();
        }
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

    public async deleteActiveProduct() {
        const item = await this.active_product.pipe(take(1)).toPromise();
        if (!item?.id) return;
        await deleteAssetGroup(item.id).toPromise();
        this._change.next(Date.now());
        notifySuccess('Successfully deleted asset');
    }

    public async postForm() {
        if (!this.form?.valid) return;
        const data: any = this.form.value;
        const other_data = { ...data };
        const drop_keys = [
            'other_data',
            'id',
            'name',
            'quantity',
            'category',
            'purchase_date',
            'brand',
            'images',
        ];
        for (const key of drop_keys) {
            delete other_data[key];
        }
        data.other_data = cleanObject(other_data, [undefined, null, '']);
        const asset = await saveAsset(data as any).toPromise();
        this._change.next(Date.now());
        notifySuccess(`Successfully ${data.id ? 'updated' : 'created'} asset`);
        this.resetForm();
        return asset.id;
    }
}

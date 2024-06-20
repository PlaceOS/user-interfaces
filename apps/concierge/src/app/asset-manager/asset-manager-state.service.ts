import { Injectable } from '@angular/core';
import {
    Booking,
    approveBooking,
    queryBookings,
    rejectBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    flatten,
    notifySuccess,
    unique,
} from '@placeos/common';
import { SpacesService } from '@placeos/spaces';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import {
    Asset,
    AssetCategory,
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
import {
    PlaceMetadata,
    cleanObject,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { OrganisationService } from '@placeos/organisation';
import { MatDialog } from '@angular/material/dialog';
import { AssetCategoryManagementModalComponent } from './asset-category-management-modal.component';
import { AssetCategoryFormComponent } from './asset-category-form.component';
import {
    AttachedResourceConfigModalComponent,
    AttachedResourceConfigModalData,
    AttachedResourceRuleset,
} from '@placeos/components';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';

export interface AssetOptions {
    date?: number;
    search?: string;
    sort_by?: string;
    view: 'grid' | 'list';
    active_item?: string;
}

@Injectable({
    providedIn: 'root',
})
export class AssetManagerStateService extends AsyncHandler {
    private _options = new BehaviorSubject<AssetOptions>({ view: 'grid' });
    private _change = new BehaviorSubject(0);
    private _poll = new BehaviorSubject(0);
    private _extra_assets = new BehaviorSubject<Asset[]>([]);
    private _form = generateAssetForm();
    private _loading = new BehaviorSubject(false);
    /** Whether asset list is loading */
    public readonly loading = this._loading.asObservable();
    /** List of options set for the view */
    public readonly options = this._options.asObservable();
    /** List of extra assets to display */
    public readonly extra_assets = this._extra_assets.asObservable();
    /** List of available assets */
    public readonly products: Observable<AssetGroup[]> = combineLatest([
        this._change,
        this._org.active_building,
    ]).pipe(
        switchMap(() => {
            this._loading.next(true);
            return getGroupsWithAssets({ zone_id: this._org.building?.id });
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
        this._org.active_building,
        this._org.active_region,
        this._poll,
        this._change,
        this._spaces.initialised,
    ]).pipe(
        debounceTime(200),
        switchMap(([{ date }, bld, region]) => {
            const start = startOfDay(date || Date.now()).valueOf();
            const end = endOfDay(date || Date.now()).valueOf();
            const zones = this._settings.get('app.use_region')
                ? this._org
                      .buildingsForRegion()
                      .map((_) => _.id)
                      .join(',')
                : bld?.id;
            return queryBookings({
                zones,
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                type: 'asset-request',
            }).pipe(
                map((_) =>
                    _.map(
                        (b) =>
                            new Booking({
                                ...b,
                                extension_data: {
                                    ...b.extension_data,
                                    space: this._spaces.find(
                                        b.extension_data.space_id
                                    ),
                                },
                            })
                    ).filter((b) => {
                        const event: any =
                            b.linked_event || b.linked_bookings[0];
                        if (!event) return false;
                        const request = new AssetRequest({
                            ...b.extension_data?.request,
                        });
                        const event_start =
                            event.date ||
                            event.event_start * 1000 ||
                            event.booking_start * 1000 ||
                            start;
                        (request as any)._time = event_start;
                        const event_end =
                            event.date_end ||
                            event.event_end * 1000 ||
                            event.booking_end * 1000 ||
                            end;
                        return (
                            request?.deliver_at >= start &&
                            request?.deliver_at < end &&
                            request?.deliver_at < event_end
                        );
                    })
                )
            );
        }),
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
                          i.title.toLowerCase().includes(search) ||
                          i.extension_data.location_name
                              ?.toLowerCase()
                              .includes(search) ||
                          i.extension_data.assets?.find((_) =>
                              _.name.toLowerCase().includes(search)
                          ) ||
                          i.status.includes(search) ||
                          i.extension_data.tracking?.includes(search)
                  )
                : list;
        })
    );
    public readonly categories = combineLatest([
        this._options,
        this._change,
    ]).pipe(
        switchMap(() => queryAssetCategories()),
        map((list) => [
            new AssetCategory({ id: '', name: 'Uncategorised' }),
            ...list,
        ]),
        shareReplay(1)
    );
    /** Currently active asset */
    public readonly active_product = combineLatest([
        this._options,
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([{ active_item }]) => !!active_item),
        map(([options, t]) => [options.active_item, t] as any),
        distinctUntilChanged(),
        switchMap(([active_item]) =>
            showGroupFull(active_item, { zone_id: this._org.building.id })
        ),
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
    public readonly product_mapping = combineLatest([
        this.filtered_products,
        this.categories,
    ]).pipe(
        map(([products, category_list]) => {
            const map = { _count: products.length };
            products.forEach(
                (item) =>
                    (item.category_id = category_list.find(
                        (_) => _.id === item.category_id
                    )
                        ? item.category_id
                        : '')
            );
            const categories = unique(products.map((i) => i.category_id));
            for (const group of categories) {
                map[group] = products.filter((i) => i.category_id === group);
            }
            return map;
        })
    );

    public readonly settings = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_),
        switchMap(([_]) =>
            showMetadata(_.id, 'assets-settings').pipe(
                catchError((_) => of({} as PlaceMetadata))
            )
        ),
        map((_) => (_.details as Record<string, any>) || {}),
        shareReplay(1)
    );
    public readonly availability = this.settings.pipe(
        map((_) => _.disabled_rooms || [])
    );

    public get form() {
        return this._form;
    }

    public get is_new_ui() {
        return (
            location.hash.includes('new') || location.pathname.includes('new')
        );
    }

    public get base_route() {
        return this.is_new_ui ? '/book/assets/new' : '/book/assets';
    }

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
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

    public manageCategories() {
        const ref = this._dialog.open(AssetCategoryManagementModalComponent, {
            data: { list: this.categories, edit: (i) => this.editCategory(i) },
        });
        this.subscription(
            'category_modal',
            ref.componentInstance.changed.subscribe(() =>
                this._change.next(Date.now())
            )
        );
        ref.afterClosed().subscribe(() => this.unsub('category_modal'));
    }

    public async editCategory(
        category: Partial<AssetCategory> = {}
    ): Promise<AssetCategory | null> {
        const ref = this._dialog.open(AssetCategoryFormComponent, {
            data: { category },
        });
        const result = await ref.afterClosed().toPromise();
        if (!result) return null;
        this._change.next(Date.now());
        return result;
    }

    public setExtraAssets(list: Asset[]) {
        this._extra_assets.next(list);
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
            ...item.toJSON(),
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

    public async editConfig() {
        const config = await this.getConfig(this._org.building.id);
        const items = await this.products.pipe(take(1)).toPromise();
        const types = unique(flatten(items.map((i) => [i.name])));
        const ref = this._dialog.open<
            AttachedResourceConfigModalComponent,
            AttachedResourceConfigModalData
        >(AttachedResourceConfigModalComponent, {
            data: {
                resource_name: 'Assets',
                config,
                types,
                require_notes: false,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        this.updateConfig(this._org.building.id, details.metadata).then(
            () => ref.close(),
            () => (ref.componentInstance.loading = false)
        );
    }

    public async getConfig(
        zone_id: string = this._org.building.id
    ): Promise<AttachedResourceRuleset[]> {
        const rules = (await showMetadata(zone_id, 'assets_config').toPromise())
            .details;
        return rules instanceof Array ? (rules as any) : [];
    }

    private updateConfig(zone_id: string, config: AttachedResourceRuleset[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'assets_config',
            details: config,
            description: `Assets config for ${zone_id}`,
        }).toPromise();
    }

    public async saveSettings(settings: Record<string, any>) {
        const old_settings = await this.settings.pipe(take(1)).toPromise();
        const result = await updateMetadata(this._org.building.id, {
            id: this._org.building.id,
            name: 'assets-settings',
            details: { ...old_settings, ...settings },
            description: `Assets settings for ${this._org.building.id}`,
        }).toPromise();
        this._change.next(Date.now());
        return result;
    }
}

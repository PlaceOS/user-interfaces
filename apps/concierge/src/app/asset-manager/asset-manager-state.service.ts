import {
    Injectable,
    Injector,
    Signal,
    computed,
    inject,
    resource,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    generateAssetForm,
    getGroupsWithAssets,
    queryAssetCategories,
    queryAssetPurchaseOrders,
    saveAsset,
    showGroupFull,
} from '@placeos/assets';
import {
    approveBooking,
    queryBookings,
    rejectBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    AssetPurchaseOrder,
    AssetRequest,
    AsyncHandler,
    Booking,
    OrganisationService,
    SettingsService,
    flatten,
    nextValueFrom,
    notifySuccess,
    unique,
} from '@placeos/common';
import {
    AttachedResourceConfigModalComponent,
    AttachedResourceConfigModalData,
    AttachedResourceRuleset,
} from '@placeos/components';
import { SpacesService } from '@placeos/events';
import {
    PlaceMetadata,
    cleanObject,
    removeAssetType,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { AssetCategoryFormComponent } from './asset-category-form.component';
import { AssetCategoryManagementModalComponent } from './asset-category-management-modal.component';

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
    private _spaces = inject(SpacesService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _options = signal<AssetOptions>({ view: 'grid' });
    private _change = signal(0);
    private _injector = inject(Injector);
    private _poll = signal(0);
    private _extra_assets = signal<Asset[]>([]);
    private _form_ref = generateAssetForm(undefined, this._injector);
    private _loading = signal(false);
    /** Whether asset list is loading */
    public readonly loading = this._loading.asReadonly();
    /** List of options set for the view */
    public readonly options = this._options.asReadonly();
    /** List of extra assets to display */
    public readonly extra_assets = this._extra_assets.asReadonly();

    /** List of available assets */
    private readonly _products = resource({
        params: () => ({
            change: this._change(),
            building: this._org.active_building()?.id,
        }),
        defaultValue: [] as AssetGroup[],
        loader: async () => {
            this._loading.set(true);
            try {
                const resp = await getGroupsWithAssets({
                    zone_id: this._org.building?.id,
                }).catch(() => ({ data: [] }) as any);
                return resp.data;
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly products: Signal<AssetGroup[]> = this._products.value;

    /** List of available purchase orders */
    private readonly _purchase_orders = resource({
        params: () => this._change(),
        defaultValue: [] as AssetPurchaseOrder[],
        loader: async () => {
            this._loading.set(true);
            try {
                const resp = await queryAssetPurchaseOrders();
                return resp.data as AssetPurchaseOrder[];
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly purchase_orders: Signal<AssetPurchaseOrder[]> =
        this._purchase_orders.value;

    /**
     * Inputs that affect the asset request listing. Search is intentionally
     * excluded — it is applied client side and must not trigger a reload.
     */
    private readonly _request_params = computed(
        () => ({
            date: this._options().date,
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
            poll: this._poll(),
            change: this._change(),
            initialised: this._spaces.initialised(),
        }),
        {
            equal: (a, b) =>
                a.date === b.date &&
                a.building === b.building &&
                a.region === b.region &&
                a.poll === b.poll &&
                a.change === b.change &&
                a.initialised === b.initialised,
        },
    );

    /** List of requests made by users for assets */
    private readonly _requests = resource({
        params: () => this._request_params(),
        defaultValue: [] as Booking[],
        loader: async ({ params }) => {
            const start = startOfDay(params.date || Date.now()).valueOf();
            const end = endOfDay(params.date || Date.now()).valueOf();
            const zones = this._settings.get('app.use_region')
                ? this._org
                      .buildingsForRegion()
                      .map((_) => _.id)
                      .join(',')
                : params.building;
            const list = await queryBookings({
                zones,
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                include_parent_bookings: true,
                type: 'asset-request',
            } as any).catch(() => [] as Booking[]);
            return list
                .map(
                    (b) =>
                        new Booking({
                            ...b,
                            extension_data: {
                                ...b.extension_data,
                                space: this._spaces.find(
                                    b.extension_data.space_id,
                                ),
                            },
                        }),
                )
                .filter((b) => {
                    const event: any =
                        b.linked_event ||
                        b.linked_bookings[0] ||
                        b.linked_parent_booking;
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
                        request?.deliver_at < event_end
                    );
                });
        },
    });
    public readonly requests: Signal<Booking[]> = this._requests.value;

    /** Filtered list of asset requests */
    public readonly filtered_requests = computed(() => {
        const list = this.requests();
        const search = (this._options().search || '').toLowerCase();
        return search
            ? list.filter(
                  (i) =>
                      i.user_name.toLowerCase().includes(search) ||
                      i.title.toLowerCase().includes(search) ||
                      i.extension_data.location_name
                          ?.toLowerCase()
                          .includes(search) ||
                      i.extension_data.assets?.find((_) =>
                          _.name.toLowerCase().includes(search),
                      ) ||
                      i.status.includes(search) ||
                      i.extension_data.tracking?.includes(search),
              )
            : list;
    });

    /** List of asset categories */
    private readonly _categories = resource({
        params: () => this._change(),
        defaultValue: [] as AssetCategory[],
        loader: async () => {
            const list = await queryAssetCategories();
            return [
                new AssetCategory({ id: '', name: 'Uncategorised' }),
                ...list.data,
            ];
        },
    });
    public readonly categories: Signal<AssetCategory[]> =
        this._categories.value;

    /** Currently active asset */
    private readonly _active_product = resource({
        params: () => ({
            active_item: this._options().active_item,
            building: this._org.active_building()?.id,
            change: this._change(),
        }),
        defaultValue: null as AssetGroup | null,
        loader: async ({ params }) => {
            if (!params.active_item || !params.building) return null;
            return showGroupFull(params.active_item, {
                zone_id: params.building,
            });
        },
    });
    public readonly active_product: Signal<AssetGroup | null> =
        this._active_product.value;

    /** List of requests for the currently active asset */
    public readonly active_product_requests = computed(() => {
        const item = this.active_product();
        if (!item) return [];
        return this.requests()
            .filter((i) => item.assets.find((asset) => asset.id === i.asset_id))
            .filter((i) => i.status !== 'declined');
    });

    /** list of filtered assets */
    public readonly filtered_products = computed(() => {
        const list = this.products();
        const search = this._options().search;
        return search
            ? list.filter((i) =>
                  i.name.toLowerCase().includes(search.toLowerCase()),
              )
            : list;
    });

    /** Mapping of available assets to categories */
    public readonly product_mapping = computed(() => {
        const products = this.filtered_products();
        const category_list = this.categories();
        const map: Record<string, any> = { _count: products.length };
        const mapped_products = products.map((item) => ({
            ...item,
            category_id: category_list.find((_) => _.id === item.category_id)
                ? item.category_id
                : '',
        }));
        const categories = unique(
            mapped_products?.map((i) => i.category_id) || [],
        );
        for (const group of categories) {
            map[group] = mapped_products.filter((i) => i.category_id === group);
        }
        return map;
    });

    /** Asset settings metadata for the active building */
    private readonly _settings_data = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            change: this._change(),
        }),
        defaultValue: {} as Record<string, any>,
        loader: async ({ params }) => {
            if (!params.building) return {};
            const metadata = await showMetadata(
                params.building,
                'assets-settings',
            ).catch(() => ({}) as PlaceMetadata);
            return (metadata.details as Record<string, any>) || {};
        },
    });
    public readonly settings: Signal<Record<string, any>> =
        this._settings_data.value;

    public readonly availability = computed(
        () => this.settings().disabled_rooms || [],
    );

    public get form() {
        return this._form_ref.form;
    }

    public get model() {
        return this._form_ref.model;
    }

    public get is_new_ui() {
        return true;
    }

    public get base_route() {
        return '/book/assets';
    }

    public startPolling(delay = 15 * 1000) {
        this.interval('polling', () => this._poll.set(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('polling');
    }

    public resetForm() {
        this._form_ref = generateAssetForm(undefined, this._injector);
    }

    public manageCategories() {
        const ref = this._dialog.open(AssetCategoryManagementModalComponent, {
            data: { list: this.categories, edit: (i) => this.editCategory(i) },
        });
        this.subscription(
            'category_modal',
            ref.componentInstance.changed.subscribe(() =>
                this._change.set(Date.now()),
            ),
        );
        ref.afterClosed().subscribe(() => this.unsub('category_modal'));
    }

    public async editCategory(
        category: Partial<AssetCategory> = {},
    ): Promise<AssetCategory | null> {
        const ref = this._dialog.open(AssetCategoryFormComponent, {
            data: { category },
        });
        const result = await nextValueFrom(ref.afterClosed());
        if (!result) return null;
        this._change.set(Date.now());
        return result;
    }

    public setExtraAssets(list: Asset[]) {
        this._extra_assets.set(list);
    }

    /** Update the set view options */
    public setOptions(options: Partial<AssetOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public postChange() {
        this.timeout('change', () => this._change.set(Date.now()), 1000);
    }

    public async setStatus(item: Booking, status: any) {
        let result = item;
        if (status === 'declined') {
            result = await rejectBooking(item.id);
        } else if (status === 'approved') {
            result = await approveBooking(item.id);
        }
        this._change.set(Date.now());
        return result;
    }

    public async setTracking(item: Booking, tracking: string) {
        const result = await updateBooking(item.id, {
            ...item.toJSON(),
            extension_data: { ...item.extension_data, tracking },
        });
        this._change.set(Date.now());
        return result;
    }

    public async deleteActiveProduct() {
        const item = this.active_product();
        if (!item?.id) return;
        await removeAssetType(item.id);
        this._change.set(Date.now());
        notifySuccess('Successfully deleted asset');
    }

    public async postForm() {
        if (!this.form().valid()) return;
        const data: any = { ...this.model() };
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
        const asset = await saveAsset(data as any);
        this._change.set(Date.now());
        notifySuccess(`Successfully ${data.id ? 'updated' : 'created'} asset`);
        this.resetForm();
        return asset.id;
    }

    public async editConfig() {
        const config = await this.getConfig(this._org.building.id);
        const items = this.products();
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
            new Promise<any>((resolve) => {
                const sub = ref.componentInstance.event.subscribe((event) => {
                    if (event?.reason !== 'done') return;
                    sub.unsubscribe();
                    resolve(event);
                });
            }),
            nextValueFrom(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        this.updateConfig(this._org.building.id, details.metadata).then(
            () => ref.close(),
            () => ref.componentInstance.loading.set(false),
        );
    }

    public async getConfig(
        zone_id: string = this._org.building.id,
    ): Promise<AttachedResourceRuleset[]> {
        const rules = (await showMetadata(zone_id, 'assets_config')).details;
        return rules instanceof Array ? (rules as any) : [];
    }

    private updateConfig(zone_id: string, config: AttachedResourceRuleset[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'assets_config',
            details: config,
            description: `Assets config for ${zone_id}`,
        });
    }

    public async saveSettings(settings: Record<string, any>) {
        const old_settings = this.settings();
        const result = await updateMetadata(this._org.building.id, {
            id: this._org.building.id,
            name: 'assets-settings',
            details: { ...old_settings, ...settings },
            description: `Assets settings for ${this._org.building.id}`,
        });
        this._change.set(Date.now());
        return result;
    }
}

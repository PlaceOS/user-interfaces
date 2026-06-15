import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import { AssetGroup, OrganisationService } from '@placeos/common';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import {
    addMinutes,
    endOfDay,
    endOfMinute,
    getUnixTime,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { updateAssetGroupList } from './asset-group.pipe';
import { assetAvailable, getAssetRulesForZone } from './asset.utilities';
import {
    queryAssetCategories,
    queryAssets,
    queryGroupAvailability,
} from './assets.fn';

export interface AssetOptions {
    zone?: string;
    zone_id?: string;
    date: number;
    duration?: number;
    ignore?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class AssetStateService {
    private _org = inject(OrganisationService);

    private _options = signal<AssetOptions>({ date: Date.now() });
    private _search = signal<string>('');
    private _category = signal<string[]>([]);
    private _loading = signal<string>('');
    private _rules = signal([]);
    private _asset_list = signal<any>(null);
    private _asset_bookings = signal<any[]>([]);
    private _available_groups = signal<AssetGroup[]>([]);
    private _category_list = signal<any[]>([]);
    private _settings = signal<Record<string, any>>({});

    public readonly search = this._search.asReadonly();
    public readonly category = this._category.asReadonly();
    public readonly options = this._options.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly rules = this._rules.asReadonly();
    public readonly asset_list = this._asset_list.asReadonly();
    public readonly asset_bookings = this._asset_bookings.asReadonly();
    public readonly available_groups = this._available_groups.asReadonly();
    public readonly category_list = this._category_list.asReadonly();
    public readonly visible_category_ids = computed(() =>
        this._category_list().map((item) => item.id),
    );
    public readonly filtered_assets = computed(() => {
        const search = this._search().toLowerCase();
        const category = this._category();
        const visible_categories = this.visible_category_ids();
        const assets = this._available_groups();
        const rules = this._rules();
        return assets.filter(
            (_) =>
                _.assets?.length &&
                visible_categories.includes(_.category_id) &&
                (!category.length || category.includes(_.category_id)) &&
                (_.name.toLowerCase().includes(search) ||
                    _.description.toLowerCase().includes(search)) &&
                assetAvailable(_, rules, this._options() as any),
        );
    });
    public readonly settings = this._settings.asReadonly();
    public readonly disabled_rooms = computed(
        () => this._settings().disabled_rooms || [],
    );

    constructor() {
        this._loadAssetList();
        effect(() => {
            const options = this._options();
            const bld = this._org.building_signal
                ? this._org.building_signal()
                : this._org.building;
            if (!bld?.id) return;
            untracked(() => {
                this._loadRules(options, bld.id);
                this._loadAssetBookings(options);
                this._loadAvailableGroups(options, bld.id);
                this._loadSettings(bld.id);
                this._loadCategories();
            });
        });
        effect(() => {
            const visible_ids = this.visible_category_ids();
            const selected_categories = this._category();
            const valid_categories = selected_categories.filter((item) =>
                visible_ids.includes(item),
            );
            if (valid_categories.length !== selected_categories.length) {
                this._category.set(valid_categories);
            }
        });
    }

    public setSearch(value: string) {
        this._search.set(`${value}`);
    }

    public toggleCategory(value: string) {
        const categories = this._category();
        if (categories.includes(value)) {
            this._category.set(categories.filter((_) => _ !== value));
        } else {
            this._category.set([...categories, value]);
        }
    }

    public getOptions() {
        return this._options();
    }

    public setOptions(options: Partial<AssetOptions>) {
        this._options.set({ ...this._options(), ...options });
    }

    private _appendLoading(value: string) {
        this._loading.set(this._loading() + value);
    }

    private _removeLoading(value: string) {
        this._loading.set(this._loading().split(value).join(''));
    }

    private async _loadRules(options: AssetOptions, building_id: string) {
        this._appendLoading('[Rules]');
        this._rules.set(
            await getAssetRulesForZone(
                options.zone || options.zone_id || building_id || '',
            ),
        );
        this._removeLoading('[Rules]');
    }

    private async _loadAssetList() {
        this._appendLoading('[Assets]');
        this._asset_list.set(await queryAssets());
        this._removeLoading('[Assets]');
    }

    private async _loadAssetBookings({ zone, zone_id, date }: AssetOptions) {
        this._appendLoading('[Bookings]');
        this._asset_bookings.set(
            await queryBookings({
                zones: zone || zone_id || '',
                period_start: getUnixTime(startOfDay(date)),
                period_end: getUnixTime(endOfDay(date)),
                type: 'asset-request',
            }),
        );
        this._removeLoading('[Bookings]');
    }

    private async _loadAvailableGroups(
        { zone, zone_id, date, duration, ignore }: AssetOptions,
        building_id: string,
    ) {
        const list = await queryGroupAvailability(
            {
                zones: zone || zone_id || building_id || '',
                period_start: getUnixTime(startOfMinute(date)),
                period_end: getUnixTime(
                    endOfMinute(addMinutes(date, duration || 30)),
                ),
                type: 'asset-request',
                rejected: false,
            } as any,
            ignore,
        ).catch((e) => {
            console.error(e);
            return [] as AssetGroup[];
        });
        const sorted_list = list.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Items returned:', sorted_list);
        updateAssetGroupList(sorted_list);
        this._available_groups.set(sorted_list);
    }

    private async _loadCategories() {
        const categories = await queryAssetCategories();
        this._category_list.set(
            categories.data
                .sort((a, b) => a.name.localeCompare(b.name))
                .filter((c) => !c.hidden),
        );
    }

    private async _loadSettings(building_id: string) {
        const metadata = await showMetadata(
            building_id,
            'assets-settings',
        ).catch(() => ({}) as PlaceMetadata);
        this._settings.set((metadata.details as Record<string, any>) || {});
    }
}

import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    Injector,
    signal,
    untracked,
} from '@angular/core';
import {
    AssetGroup,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';
import { addMinutes, endOfMinute, getUnixTime, startOfMinute } from 'date-fns';
import { assetAvailable, getAssetRulesForZone } from './asset.utilities';
import { queryAssetCategories, queryGroupAvailability } from './assets.fn';

export interface AssetOptions {
    zone?: string;
    zone_id?: string;
    date: number;
    duration?: number;
    ignore?: string[];
}

function assetOptionsMatch(a: AssetOptions, b: AssetOptions) {
    const keys = Array.from(
        new Set([
            ...(Object.keys(a) as (keyof AssetOptions)[]),
            ...(Object.keys(b) as (keyof AssetOptions)[]),
        ]),
    );
    return keys.every((key) => Object.is(a[key], b[key]));
}

@Injectable({
    providedIn: 'root',
})
export class AssetStateService {
    private _org = inject(OrganisationService);
    private _settings_service = inject(SettingsService);
    private _injector = inject(Injector);

    private _options = signal<AssetOptions>({ date: Date.now() });
    private _search = signal<string>('');
    private _category = signal<string[]>([]);
    private _loading = signal<string>('');
    private _rules = signal([]);
    private _available_groups = signal<AssetGroup[]>([]);
    private _category_list = signal<any[]>([]);
    private _settings = signal<Record<string, any>>({});
    private _network_requested = false;
    private _network_consumed = signal(false);
    private _category_list_request: Promise<unknown> = null;
    private _available_group_requests = new Map<
        string,
        Promise<AssetGroup[]>
    >();
    private _settings_requests = new Map<
        string,
        Promise<Record<string, unknown>>
    >();

    private readonly _options_debounced = debounced(this._options, 300, {
        injector: this._injector,
        equal: assetOptionsMatch,
    });
    private readonly _requests_ready = computed(() => {
        const building = this._org.active_building();
        const overrides = this._settings_service.overrides();
        return (
            this._network_consumed() &&
            this._assetsEnabled() &&
            this._org.initialised() &&
            !!building?.id &&
            overrides.length >= (this._org.settings?.length || 0) + 2
        );
    });

    public readonly search = this._search.asReadonly();
    public readonly category = this._category.asReadonly();
    public readonly options = this._options.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly rules = computed(() => {
        this._requestNetwork();
        return this._rules();
    });
    public readonly available_groups = computed(() => {
        this._requestNetwork();
        return this._available_groups();
    });
    public readonly category_list = computed(() => {
        this._requestNetwork();
        return this._category_list();
    });
    public readonly visible_category_ids = computed(() =>
        this._category_list().map((item) => item.id),
    );
    public readonly filtered_assets = computed(() => {
        this._requestNetwork();
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
    public readonly settings = computed(() => {
        this._requestNetwork();
        return this._settings();
    });
    public readonly disabled_rooms = computed(() => {
        this._requestNetwork();
        return this._settings().disabled_rooms || [];
    });

    constructor() {
        effect(() => {
            const options = this._options_debounced.value();
            const bld = this._org.active_building();
            if (!this._requests_ready() || !bld?.id || !options) return;
            untracked(() => {
                this._loadRules(options, bld.id);
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

    private _requestNetwork() {
        if (this._network_requested) return;
        this._network_requested = true;
        queueMicrotask(() => this._network_consumed.set(true));
    }

    private _assetsEnabled() {
        return this._settings_service.get('app.has_assets') !== false;
    }

    public setSearch(value: string) {
        this._search.set(`${value}`);
    }

    public toggleCategory(value: string) {
        const categories = untracked(this._category);
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
        const current = untracked(this._options);
        const next = { ...current, ...options };
        if (assetOptionsMatch(current, next)) {
            return;
        }
        this._options.set(next);
    }

    private _appendLoading(value: string) {
        this._loading.set(this._loading() + value);
    }

    private _removeLoading(value: string) {
        this._loading.set(this._loading().split(value).join(''));
    }

    private async _loadRules(options: AssetOptions, building_id: string) {
        const zone_id = options.zone || options.zone_id || building_id || '';
        this._appendLoading('[Rules]');
        this._rules.set(await getAssetRulesForZone(zone_id));
        this._removeLoading('[Rules]');
    }

    private async _loadAvailableGroups(
        { zone, zone_id, date, duration, ignore }: AssetOptions,
        building_id: string,
    ) {
        const query = {
            zones: zone || zone_id || building_id || '',
            period_start: getUnixTime(startOfMinute(date)),
            period_end: getUnixTime(
                endOfMinute(addMinutes(date, duration || 30)),
            ),
            type: 'asset-request',
            rejected: false,
        } as any;
        const key = JSON.stringify({ query, ignore });
        const existing = this._available_group_requests.get(key);
        const request =
            existing ||
            queryGroupAvailability(query, ignore).catch((e) => {
                console.error(e);
                return [] as AssetGroup[];
            });
        if (!existing) this._available_group_requests.set(key, request);
        this._appendLoading('[Availability]');
        const list = await request;
        this._removeLoading('[Availability]');
        request.finally(() => this._available_group_requests.delete(key));
        const sorted_list = list.sort((a, b) => a.name.localeCompare(b.name));
        this._available_groups.set(sorted_list);
    }

    private async _loadCategories() {
        if (this._category_list_request) return this._category_list_request;
        this._category_list_request = queryAssetCategories()
            .then((categories) => {
                this._category_list.set(
                    categories.data
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter((c) => !c.hidden),
                );
                return categories;
            })
            .finally(() => (this._category_list_request = null));
        return this._category_list_request;
    }

    private async _loadSettings(building_id: string) {
        const existing = this._settings_requests.get(building_id);
        const request =
            existing ||
            showMetadata(building_id, 'assets-settings')
                .then(
                    (metadata) =>
                        (metadata.details as Record<string, unknown>) || {},
                )
                .catch(() => ({}));
        if (!existing) this._settings_requests.set(building_id, request);
        this._settings.set(await request);
        request.finally(() => this._settings_requests.delete(building_id));
    }
}

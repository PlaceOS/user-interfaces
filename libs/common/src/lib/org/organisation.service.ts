import {
    Injectable,
    Injector,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    PlaceZone,
    authority,
    bulkMetadata,
    getModule,
    isMock,
    onlineState,
    queryZones,
    showMetadata,
    waitForSignal,
} from '@placeos/ts-client';

import { scoped_log, unique } from '../general';
import { notifyError } from '../notifications';
import { setLoadingMessage } from '../placeos.service';
import { isPublicMode } from '../public-mode';
import { SettingsService } from '../settings.service';
import { firstValueWhere } from '../signal.utilities';
import {
    Building,
    BuildingLevel,
    Organisation,
    Region,
} from '../types/org.classes';

const log = scoped_log('ORG');

const ORG_CACHE_PREFIX = 'PLACEOS.org';
const ZONE_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.zones`;
const AUTHORITY_CACHE_KEY = `${ORG_CACHE_PREFIX}.authority`;
/** How long `app.offline_boot` waits to be online before using cached data */
const OFFLINE_BOOT_DELAY = 10 * 1000;
const METADATA_CACHE_PREFIX = `${ORG_CACHE_PREFIX}.metadata`;
/** Cached data older than this is discarded instead of being displayed */
const MAX_CACHE_AGE = 7 * 24 * 60 * 60 * 1000;
interface CachedAuthority {
    id: string;
    metadata_cache_id: string;
}

/**
 * The authority is fetched from the backend, so it is not available on an
 * offline boot. Cached org data is namespaced by it, so the last known values
 * are remembered here - without them the cache written while online can never
 * be read back at the one moment it is actually needed.
 */
function cachedAuthority(): CachedAuthority | null {
    const auth = authority();
    if (auth?.id) {
        const details = {
            id: auth.id,
            metadata_cache_id: `${auth.config?.['metadata_cache_id'] || ''}`,
        };
        try {
            localStorage.setItem(AUTHORITY_CACHE_KEY, JSON.stringify(details));
        } catch {
            // Ignore quota and privacy-mode failures.
        }
        return details;
    }
    try {
        return JSON.parse(localStorage.getItem(AUTHORITY_CACHE_KEY) || 'null');
    } catch {
        return null;
    }
}

type ZoneQueryParams = Parameters<typeof queryZones>[0];
type MetadataMap = Record<string, Record<string, any>>;
interface CacheItem<T> {
    cached_at: number;
    metadata_cache_id: string;
    data: T;
}

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
    private _service = inject(SettingsService);
    private _router = inject(Router);
    private _injector = inject(Injector);

    /** Signal which stores the initialised state of the object */
    protected readonly _initialised = signal<boolean>(false);
    /** Signal of the initialised state of the object */
    public readonly initialised = this._initialised.asReadonly();
    private readonly _region_list = signal<Region[]>([]);
    private readonly _active_region = signal<Region>(
        new Region({ name: 'Unknown' }),
    );
    private readonly _building_list = signal<Building[]>([]);
    private readonly _active_building = signal<Building>(
        new Building({ name: 'Unknown' }),
    );
    private readonly _level_list = signal<BuildingLevel[]>([]);
    private _loaded_data: Record<string, boolean> = {};
    /** Whether any cached data was used during the initial load */
    private _served_cache = false;
    /** Number of background refreshes currently in flight */
    private _refresh_count = 0;
    /** Whether cached data is being replaced with the latest from the API */
    private get _refreshing() {
        return this._refresh_count > 0;
    }
    /** Ids of buildings whose settings metadata has finished loading */
    private readonly _loaded_buildings = signal<string[]>([]);
    private readonly _limited_init = signal(false);

    public readonly app_key = `${(
        this._service.app_name || 'workplace'
    ).toLowerCase()}_app`;
    /** Signal for the list of regions */
    public readonly region_list = this._region_list.asReadonly();
    /** Signal for the list of buildings */
    public readonly building_list = this._building_list.asReadonly();
    /** Signal for the list of levels */
    public readonly level_list = this._level_list.asReadonly();
    /** Signal for the currently active region */
    public readonly active_region = this._active_region.asReadonly();
    /** Signal for the currently active building */
    public readonly active_building = this._active_building.asReadonly();
    /**
     * Whether the active building's settings metadata has loaded into the
     * override stack. False while `loadBuildingData` is still in flight, so
     * consumers can avoid reading building-level settings before they land.
     */
    public readonly active_building_loaded = computed(() => {
        if (this._service.get('dont_load_metadata')) return true;
        const id = this._active_building()?.id;
        return !id || this._loaded_buildings().includes(id);
    });
    /** Signal for the buildings associated with the currently active region */
    public readonly active_buildings = computed(() => {
        const region = this._active_region();
        return region ? this.buildingsForRegion(region) : this.buildings;
    });
    /** Signal for the levels associated with the currently active building */
    public readonly active_levels = computed(() => {
        const building = this._active_building();
        return building ? this.levelsForBuilding(building) : [];
    });
    /** Organisation data for the application */
    private _organisation: Organisation = new Organisation();
    /** Mapping of organisation settings overrides */
    private _settings: Record<string, any>[] = [];
    /** Mapping of regions to settings overrides */
    private _region_settings: Record<string, Record<string, any>> = {};
    /** Mapping of buildings to settings overrides */
    private _building_settings: Record<string, Record<string, any>> = {};
    /** Flag to skip automatic building/region selection when set externally */
    private _skip_auto_selection = false;

    /** Mapping of organisation settings overrides */
    public get settings() {
        return this._settings;
    }

    /** Mapping of regions to settings overrides */
    public get region_settings() {
        return this._region_settings;
    }

    /** Mapping of buildings to settings overrides */
    public get building_settings() {
        return this._building_settings;
    }

    /** Mapping region settings overrides */
    public regionSettings(id = ''): Record<string, any> {
        const region = this._active_region();
        if (!id && region) id = region?.id;
        return this._region_settings ? this._region_settings[id] || {} : {};
    }

    /** Mapping building settings overrides */
    public buildingSettings(bld_id = ''): Record<string, any> {
        if (!bld_id && this.building) {
            bld_id = this.building?.id || this.buildings[0]?.id;
        }
        return this._building_settings
            ? this._building_settings[bld_id] || {}
            : {};
    }

    /** Organisation data for the application */
    public get organisation(): Organisation {
        return this._organisation;
    }

    /** List of available regions */
    public get regions(): Region[] {
        return this._region_list();
    }

    /** Currently active region */
    public get region(): Region {
        return this._active_region();
    }
    public set region(item: Region) {
        this.setRegion(item);
    }

    /** Prevent automatic building/region selection from overriding externally set values */
    public skipAutoSelection() {
        this._skip_auto_selection = true;
    }

    public async setRegion(item: Region) {
        const active_region = this._active_region();
        if (!item || active_region?.id === item?.id) return;
        this._active_region.set(item);
        await this.loadRegionData(item);
        this._setBuildingFromTimezone();
        if (
            !this._skip_auto_selection &&
            this.building?.parent_id !== item.id &&
            this.buildingsForRegion(item).length
        ) {
            this.building = this.buildingsForRegion(item)[0];
        } else this._updateSettingOverrides();
        localStorage.setItem('PLACEOS.region', item.id);
    }

    /** List of available buildings */
    public get buildings(): Building[] {
        return this._building_list() || [];
    }

    /** Currently active building */
    public get building(): Building {
        return this._active_building();
    }
    public set building(bld: Building) {
        this.setBuilding(bld);
    }

    public setBuilding(bld: Building, save = false) {
        if (!(bld instanceof Object)) return;
        this._active_building.set(bld);
        if (!this._service.get('dont_load_metadata')) {
            this.loadBuildingData(bld).then(() =>
                this._updateSettingOverrides(),
            );
        }
        if (this.regions.length && this.region?.id !== bld.parent_id) {
            this.region = this.regions.find(
                (_) => _.id === this.building.parent_id,
            );
        }
        if (save) localStorage.setItem('PLACEOS.building', bld.id);
    }

    public get timezone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    public get currency_code(): string {
        return (
            this._service.get('app.currency') ||
            this.building?.currency ||
            'USD'
        );
    }

    /** Get binding value from the building/organisation */
    public binding(name: string) {
        return (
            this.building?.bindings[name] || this._organisation?.bindings[name]
        );
    }

    public module(name: string, default_mod_id = 'System') {
        const binding: any = this.binding(name);
        const system_id =
            binding instanceof Object
                ? binding.id || binding.system_id
                : binding;
        const mod_id =
            (binding instanceof Object ? binding.mod || binding.module : '') ||
            default_mod_id;
        return !system_id || !mod_id ? null : getModule(system_id, mod_id);
    }

    /** Get building by id */
    public find(id: string) {
        return this.buildings.find((i) => i.id === id);
    }

    /** List of available levels */
    public get levels(): BuildingLevel[] {
        return this._level_list();
    }

    public set limit_init(state: boolean) {
        this._limited_init.set(state);
    }

    constructor() {
        const online = waitForSignal(onlineState(), (_) => _);
        // Startup normally waits to be online before loading anything. A fixed
        // device with no network never gets there, so it never even tries its
        // cached copy - and everything waiting on `initialised` waits forever.
        // Where an app opts in, fall back to starting from cache instead.
        const start = this._service.get('app.offline_boot')
            ? Promise.race([
                  online,
                  new Promise((resolve) =>
                      setTimeout(resolve, OFFLINE_BOOT_DELAY),
                  ),
              ])
            : online;
        start.then(() => setTimeout(() => this.init(), 1000));
        effect(() => {
            this._active_region();
            const building = this._active_building();
            if (building) this._updateSettingOverrides();
        });
    }

    /** Resolve once the organisation data has finished initialising */
    public async waitUntilInitialised(): Promise<void> {
        await firstValueWhere(
            this.initialised,
            (state) => state,
            this._injector,
        );
    }

    /**
     * Get level with a matching ID
     * @param id_list List of IDs to find a match
     */
    public levelWithID(id_list: string[]): BuildingLevel {
        return this.levels.find((lvl) => id_list?.includes(lvl.id));
    }

    /**
     * Get list of levels for the given building
     * @param bld Building to list levels for
     */
    public levelsForBuilding(bld: Building = this.building): BuildingLevel[] {
        return this._sortLevels(
            this.levels.filter(
                (lvl) => lvl.parent_id && lvl.parent_id === bld?.id,
            ),
        );
    }

    /**
     * Get list of buildings for the given region
     * @param region Region to list buildings for
     */
    public buildingsForRegion(region: Region = this.region): Building[] {
        return this.buildings.filter((bld) => bld.parent_id === region?.id);
    }

    /**
     * Get list of levels for the given region
     * @param region Region to list levels for
     */
    public levelsForRegion(region: Region = this.region): BuildingLevel[] {
        const bld_list = this.buildingsForRegion(region);
        return this._sortLevels(
            this.levels.filter(
                (lvl) =>
                    lvl.parent_id &&
                    bld_list.find((bld) => bld.id === lvl.parent_id),
            ),
        );
    }

    public addZone(zone: PlaceZone) {
        if (zone.tags.includes('region')) {
            const region = new Region(zone);
            const regions = this._region_list().filter(
                (_) => _.id !== region.id,
            );
            regions.push(region);
            this._region_list.set(regions);
        } else if (zone.tags.includes('building')) {
            const bld = new Building(zone);
            let buildings = this._building_list().filter(
                (_) => _.id !== bld.id,
            );
            buildings.push(bld);
            buildings = buildings.sort((a, b) =>
                (a.name || '').localeCompare(b.name || ''),
            );
            this._building_list.set(buildings);
        } else if (zone.tags.includes('level')) {
            const lvl = new BuildingLevel(zone);
            let levels = this._level_list().filter((_) => _.id !== lvl.id);
            levels.push(lvl);
            levels = this._sortLevels(levels);
            this._level_list.set(levels);
        } else {
            console.warn(
                'Unable to add zone as it is missing the required tag.',
                zone.id,
            );
        }
    }

    private _sortLevels(levels: BuildingLevel[]): BuildingLevel[] {
        return [...levels].sort(
            (a, b) =>
                (a.parent_id || '').localeCompare(b.parent_id || '') ||
                (a.name || '').localeCompare(b.name || '') ||
                (a.display_name || '').localeCompare(b.display_name || ''),
        );
    }

    public removeZone(zone: PlaceZone) {
        if (zone.tags.includes('region')) {
            const regions = this._region_list().filter((_) => _.id !== zone.id);
            this._region_list.set(regions);
        } else if (zone.tags.includes('building')) {
            const buildings = this._building_list().filter(
                (_) => _.id !== zone.id,
            );
            this._building_list.set(buildings);
        } else if (zone.tags.includes('level')) {
            const levels = this._level_list().filter((_) => _.id !== zone.id);
            this._level_list.set(levels);
        } else {
            console.warn(
                'Unable to remove zone as it is missing the required tag.',
                zone.id,
            );
        }
    }

    /** Clear cached org data and reload it from PlaceOS. Exposed via window.app.org in debug mode. */
    public async reloadMetadata(): Promise<void> {
        this._clearCache();
        this._loaded_data = {};
        this._loaded_buildings.set([]);
        await this.load();
    }

    private async init(tries = 0) {
        if (this._limited_init()) {
            this._initialised.set(true);
            return;
        }
        this._initialised.set(false);
        if (isPublicMode()) {
            await this.load().catch((err) => {
                console.warn(
                    'Organisation loading failed in public mode, using local public organisation data.',
                    err,
                );
                this._setPublicData();
            });
        } else {
            try {
                await this.load();
            } catch {
                notifyError('Error loading organisation data. Retrying...');
                setTimeout(
                    () => this.init(tries),
                    Math.min(10_000, 300 * ++tries),
                );
                return;
            }
        }
        if (window.debug) {
            if (!window.app) window.app = {};
            window.app.org = this;
            (window as any).org = this;
        }
        this._initialised.set(true);
        // Cached data is displayed immediately, then replaced with the latest.
        if (this._served_cache) {
            log('Loaded from cache, refreshing organisation data...');
            this._served_cache = false;
            this._loaded_data = {};
            this._refresh(() => this.load());
        }
    }

    /**
     * Run a load straight against the API, ignoring any cached data, so the
     * displayed data is replaced with the latest. Runs in the background.
     */
    private async _refresh(load: () => Promise<void>) {
        this._refresh_count++;
        await load().catch((err) =>
            console.warn('Failed to refresh organisation data.', err),
        );
        this._refresh_count--;
    }

    private _setPublicData() {
        const region_id = localStorage.getItem('PLACEOS.region') || 'public';
        const building_id =
            localStorage.getItem('KIOSK.building') ||
            localStorage.getItem('PLACEOS.building') ||
            'public-building';
        const level_id = localStorage.getItem('KIOSK.level') || 'public-level';
        const organisation = new Organisation({
            id: 'public-org',
            name: 'Public Organisation',
            tags: ['org'],
        });
        const region = new Region({
            id: region_id,
            name: 'Public Region',
            display_name: 'Public Region',
        });
        const building = new Building({
            id: building_id,
            parent_id: region.id,
            name: 'Public Building',
            display_name: 'Public Building',
        });
        const level = new BuildingLevel({
            id: level_id,
            parent_id: building.id,
            name: 'Public Level',
            display_name: 'Public Level',
        });
        this._organisation = organisation;
        this._region_list.set([region]);
        this._building_list.set([building]);
        this._level_list.set([level]);
        this._active_region.set(region);
        this._active_building.set(building);
        this._updateSettingOverrides();
    }

    /**
     * Initialise service data. When this is a background refresh, loading
     * messages and the default region/building selection are skipped so the
     * user's current view and selection are left alone.
     */
    private async load(): Promise<void> {
        const refreshing = this._refreshing;
        const loadingMessage = (message: string) =>
            refreshing ? null : setLoadingMessage(message);
        loadingMessage('Loading organisation data...');
        await this.loadOrganisation();
        loadingMessage('Loading region data...');
        await this.loadRegions();
        if (!this._region_list().length) {
            loadingMessage('Loading building data...');
            const list = await this.loadBuildings();
            this._building_list.set(list);
        } else {
            loadingMessage('Loading region buildings data...');
            for (const region of this._region_list()) {
                const blds = await this.loadBuildings(region.id);
                if (blds.length) {
                    this._building_list.set(blds);
                    break;
                }
            }
        }
        loadingMessage('Loading zone settings...');
        await this.loadSettings();
        if (!this._building_list()?.length) {
            log('Unable to find any building zones');
        }
        loadingMessage('Loading active building levels...');
        await this.loadLevels();
        if (refreshing) {
            // Default selection is skipped above, so refresh the metadata for
            // whatever region/building the user is currently on.
            if (this.region?.id) await this.loadRegionData(this.region);
            if (this.building?.id && !this._service.get('dont_load_metadata')) {
                await this.loadBuildingData(this.building);
            }
        }
        this._updateSettingOverrides();
    }

    /**
     * Load organisation data for application
     */
    public async loadOrganisation(): Promise<void> {
        const org_list = await this._queryZones({
            tags: 'org',
            include_children_count: true,
        });
        if (org_list.length) {
            const auth = authority();
            const org =
                org_list.find(
                    (list) => isMock() || list.id === auth?.config?.org_zone,
                ) || org_list[0];

            const load_metadata = !this._service.get('dont_load_metadata');
            const bindings = load_metadata
                ? (await this._bulkMetadataDetails('bindings', [org.id]))[
                      org.id
                  ]
                : {};
            this._organisation = new Organisation({ ...org, bindings });
        } else {
            log('Unable to find organisation');
            this._router.navigate(['/misconfigured']);
        }
    }

    /**
     * Load region data for the organisation
     */
    public async loadRegions(): Promise<void> {
        const list = (
            await this._queryZones({
                tags: 'region',
                parent_id: this._organisation?.id || '',
                limit: 200,
            }).catch(() => [])
        ).map((_) => new Region(_));
        this._region_list.set(list);
    }

    public async loadRegionData(region: Region): Promise<void> {
        if (this._loaded_data[region.id] && !this._refreshing) return;
        const load_metadata = !this._service.get('dont_load_metadata');
        const from_cache = this._zoneDataCached(region.id);
        const [settings, bindings, buildings]: any = await Promise.all([
            load_metadata
                ? this._bulkMetadataDetails(this.app_key, [region.id]).then(
                      (_) => _[region.id],
                  )
                : {},
            load_metadata
                ? this._bulkMetadataDetails('bindings', [region.id]).then(
                      (_) => _[region.id],
                  )
                : {},
            this.loadBuildings(region.id),
        ]);
        const building_list = unique(
            [...this._building_list(), ...buildings],
            'id',
        );
        this._building_list.set(building_list);
        this._loaded_data[region.id] = true;
        (region as any).bindings = bindings;
        this._region_settings[region.id] = settings;
        // Cached data is shown immediately, then replaced with the latest.
        if (from_cache) this._refresh(() => this.loadRegionData(region));
    }

    /**
     * Load buildings data for the organisation
     */
    public async loadBuildings(
        parent_id: string = this._organisation?.id,
    ): Promise<Building[]> {
        const building_list = (
            await this._queryZones({
                tags: 'building',
                parent_id,
                limit: 500,
            })
        ).map((_) => new Building(_));
        return building_list;
    }

    public async loadBuildingData(bld: Building) {
        if (!bld || (this._loaded_data[bld.id] && !this._refreshing)) return;
        const from_cache = this._zoneDataCached(bld.id);
        const [settings, bindings, booking_rules, driver_settings]: any =
            await Promise.all([
                this._bulkMetadataDetails(this.app_key, [bld.id]).then(
                    (_) => _[bld.id],
                ),
                this._bulkMetadataDetails('bindings', [bld.id]).then(
                    (_) => _[bld.id],
                ),
                this._bulkMetadataDetails('booking_rules', [bld.id]).then(
                    (_) => _[bld.id],
                ),
                // lastValueFrom(
                //     (this.app_key.includes('concierge')
                //         ? querySettings({ parent_id: bld.id })
                //         : of({ data: {} as any })
                //     ).pipe(
                //         catchError(() => of({ data: {} as any })),
                //         map((_) => {
                //             try {
                //                 return parseYAML(
                //                     _?.data.find(
                //                         (_) =>
                //                             _.encryption_level ===
                //                             EncryptionLevel.None,
                //                     ) || { settings_string: '' },
                //                 );
                //             } catch {
                //                 return {};
                //             }
                //         }),
                //     ),
                // ),
            ]);
        this._building_settings[bld.id] = {
            ...(driver_settings || {}),
            ...(settings || {}),
        };
        (bld as any).bindings = bindings;
        (bld as any).booking_rules = booking_rules;
        this._loaded_data[bld.id] = true;
        this._loaded_buildings.update((ids) =>
            ids.includes(bld.id) ? ids : [...ids, bld.id],
        );
        this._updateSettingOverrides();
        // Cached data is shown immediately, then replaced with the latest.
        if (from_cache) this._refresh(() => this.loadBuildingData(bld));
    }

    /**
     * Whether the zone's settings metadata would be loaded from the cache.
     * Always false while refreshing, so a refresh never schedules another one.
     */
    private _zoneDataCached(id: string): boolean {
        return !!this._getCachedItem(
            this._metadataCacheKey(this.app_key, [id]),
        );
    }

    /**
     * Load levels data for the buildings
     */
    public async loadLevels(): Promise<void> {
        let level_list = await this._queryZones({
            tags: 'level',
            limit: 2500,
        });
        level_list = level_list.filter((_) => _.parent_id);
        if (!level_list?.length) {
            this._router.navigate(['/misconfigured']);
        }
        let levels = level_list.map((lvl) => new BuildingLevel(lvl));
        levels = levels.sort((a, b) =>
            (a.name || '').localeCompare(b.name || ''),
        );
        this._level_list.set(levels);
    }

    public async loadSettings() {
        if (!this._organisation) return;
        const org_id = this._organisation?.id;
        const app_settings = (
            await this._bulkMetadataDetails(this.app_key, [org_id])
        )[org_id];
        const global_settings = (
            await this._bulkMetadataDetails('settings', [org_id])
        )[org_id];
        this._settings = [global_settings, app_settings];
        // Cancel any pending debounced override so the org settings below are
        // the authoritative layer while the default building is selected.
        if (this._override_timer) {
            clearTimeout(this._override_timer);
            this._override_timer = null;
        }
        this._service.setOverrides([...this._settings]);
        if (!this._refreshing) await this._setDefaultBuilding();
        this._updateSettingOverrides();
    }

    /** Select the building physically closest to the user's current location */
    private async _setBuildingFromGeolocation(): Promise<Building | null> {
        return new Promise<Building | null>((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const closest = this._closestBuilding(latitude, longitude);
                    if (closest) this.building = closest;
                    resolve(closest);
                },
                () => resolve(null),
            );
        });
    }

    /** Find the building nearest to the given coordinates */
    private _closestBuilding(
        latitude: number,
        longitude: number,
    ): Building | null {
        let closest: Building | null = null;
        let closest_distance = Infinity;
        for (const bld of this.buildings) {
            if (!bld.location || bld.location === '0,0') continue;
            const [lat, long] = bld.location.split(',').map(Number);
            const distance = Math.hypot(latitude - lat, longitude - long);
            if (distance < closest_distance) {
                closest = bld;
                closest_distance = distance;
            }
        }
        return closest;
    }

    /** Find a building by id, loading every region's buildings if not already present */
    private async _findBuilding(id: string): Promise<Building | null> {
        const loaded = this.buildings.find((bld) => bld.id === id);
        if (loaded) return loaded;
        await this._loadAllBuildings();
        return this.buildings.find((bld) => bld.id === id) || null;
    }

    /** Load the buildings for every region into the building list */
    private async _loadAllBuildings(): Promise<void> {
        const lists = await Promise.all(
            this.regions.map((region) => this.loadBuildings(region.id)),
        );
        this._building_list.set(
            unique([...this._building_list(), ...lists.flat()], 'id'),
        );
    }

    private async _setDefaultBuilding() {
        log('No building set yet, applying defaults...');
        // Read settings up-front, before any region/building change can
        // reshuffle the active overrides via the debounced override update and
        // shadow the org-level `app.default_building` value.
        const region_id = localStorage.getItem(`PLACEOS.region`);
        const building_id =
            sessionStorage.getItem(`PLACEOS.building`) ||
            localStorage.getItem(`PLACEOS.building`);
        const default_id = this._service.get('app.default_building');
        if (!this.buildings.length && !region_id) return;
        // Load the saved/timezone region so its buildings are available
        await (region_id
            ? this.setRegion(
                  this._region_list().find((_) => _.id === region_id),
              )
            : this._setRegionFromTimezone());
        if (!this.buildings.length) return;
        // 1. Restore the building the user previously selected
        const previous = this.buildings.find((_) => _.id === building_id);
        if (previous) {
            log('Defaulting building to previously selected building.');
            this.building = previous;
            return;
        }
        // 2. Use the building explicitly configured in app settings. This may
        //    live in a region other than the one loaded above, so search every
        //    region and activate the matching one before selecting it.
        if (default_id) {
            const configured = await this._findBuilding(default_id);
            if (configured) {
                log('Applied default building from app settings.');
                const region = this.regions.find(
                    (_) => _.id === configured.parent_id,
                );
                if (region) await this.setRegion(region);
                this.building = configured;
                return;
            }
            log(`Configured default building "${default_id}" was not found.`);
        }
        // 3. Use the building closest to the user's current location
        const use_location = !!this._service.get('app.use_geolocation');
        if (use_location && 'geolocation' in navigator) {
            const closest = await this._setBuildingFromGeolocation();
            if (closest) {
                log('Applied default building from user location.');
                return;
            }
        }
        // 4. Guess a building based on the user's timezone
        this._setBuildingFromTimezone();
        if (this.building?.id) return;
        // 5. Fall back to the first available building
        log('No default building matched, initialising to first building.');
        this.building = this.buildings[0];
    }

    private async _setRegionFromTimezone() {
        const region = this._matchByTimezone(this.regions);
        if (region) await this.setRegion(region);
    }

    private _setBuildingFromTimezone() {
        if (this._skip_auto_selection) return;
        const bld_list = this.buildings.filter(
            (bld) => !this.region || bld.parent_id === this.region?.id,
        );
        const building = this._matchByTimezone(bld_list);
        if (building) {
            this.building = building;
            log("Applied default building from user's timezone.");
        }
    }

    /** Match the item whose timezone equals the user's, else one in the same region */
    private _matchByTimezone<T extends { timezone: string }>(
        list: T[],
    ): T | undefined {
        const timezone = this.timezone;
        const exact = list.find((_) => _.timezone === timezone);
        if (exact) return exact;
        const tz_start = timezone.split('/')[0];
        return list.find((_) => _.timezone?.startsWith(tz_start));
    }

    private _override_timer: ReturnType<typeof setTimeout> | null = null;
    private _updateSettingOverrides() {
        if (this._override_timer) clearTimeout(this._override_timer);
        this._override_timer = setTimeout(
            () =>
                this._service.setOverrides([
                    this.buildingSettings(this.building?.id),
                    this.regionSettings(this.region?.id),
                    ...this._settings,
                ]),
            300,
        );
    }

    private async _bulkMetadataDetails(
        name: string,
        ids: string[],
    ): Promise<MetadataMap> {
        const parent_ids = ids.filter(Boolean).join(',');
        if (!parent_ids) return {};
        const cache_key = this._metadataCacheKey(name, ids);
        const cached_metadata = this._getCachedItem<MetadataMap>(cache_key);
        if (cached_metadata) return cached_metadata;
        const metadata = await bulkMetadata(name, { parent_ids }).catch(
            (err) =>
                err?.status === 404
                    ? this._individualMetadata(name, ids)
                    : ({} as Record<string, any>),
        );
        const metadata_details = ids.reduce((map, id) => {
            map[id] = metadata[id]?.details || {};
            return map;
        }, {} as MetadataMap);
        this._setCachedItem(cache_key, metadata_details);
        return metadata_details;
    }

    /** Fallback for backends without the bulk metadata endpoint (404) */
    private async _individualMetadata(
        name: string,
        ids: string[],
    ): Promise<Record<string, any>> {
        const items = await Promise.all(
            ids.filter(Boolean).map((id) =>
                showMetadata(id, name).then(
                    (item) => [id, item] as const,
                    () => [id, null] as const,
                ),
            ),
        );
        const metadata: Record<string, any> = {};
        for (const [id, item] of items) {
            if (item) metadata[id] = item;
        }
        return metadata;
    }

    private async _queryZones(params: ZoneQueryParams): Promise<PlaceZone[]> {
        const cache_key = this._zoneCacheKey(params);
        const cached_zones = this._getCachedItem<PlaceZone[]>(cache_key);
        if (cached_zones) return cached_zones;
        const zones =
            (
                await queryZones({
                    ...params,
                    authority_id: authority().id,
                } as any)
            ).data || [];
        this._setCachedItem(cache_key, zones);
        return zones;
    }

    private _metadataCacheKey(name: string, ids: string[]): string {
        const auth = cachedAuthority();
        const parent_ids = ids.filter(Boolean).sort().join(',');
        return `${METADATA_CACHE_PREFIX}.${auth?.id || 'default'}.${name}.${parent_ids}`;
    }

    private _zoneCacheKey(params: ZoneQueryParams): string {
        const auth = cachedAuthority();
        const sorted_params = Object.keys(params)
            .sort()
            .reduce(
                (cache_params, key) => {
                    cache_params[key] = (params as Record<string, unknown>)[
                        key
                    ];
                    return cache_params;
                },
                {} as Record<string, unknown>,
            );
        return `${ZONE_CACHE_PREFIX}.${auth?.id || 'default'}.${JSON.stringify(
            sorted_params,
        )}`;
    }

    private _getCachedItem<T>(cache_key: string): T | null {
        if (this._refreshing) return null;
        try {
            const cached_item = JSON.parse(
                localStorage.getItem(cache_key) || 'null',
            ) as CacheItem<T> | null;
            if (!cached_item) return null;
            if (
                cached_item.metadata_cache_id !== this._metadataCacheID() ||
                cached_item.cached_at + MAX_CACHE_AGE < Date.now()
            ) {
                localStorage.removeItem(cache_key);
                return null;
            }
            this._served_cache = true;
            return cached_item.data;
        } catch {
            localStorage.removeItem(cache_key);
            return null;
        }
    }

    private _setCachedItem<T>(cache_key: string, data: T) {
        const cached_item: CacheItem<T> = {
            cached_at: Date.now(),
            metadata_cache_id: this._metadataCacheID(),
            data,
        };
        const value = JSON.stringify(cached_item);
        try {
            localStorage.setItem(cache_key, value);
        } catch {
            // Most likely the storage quota, drop the old org data and retry.
            this._clearCache();
            try {
                localStorage.setItem(cache_key, value);
            } catch {
                // Ignore quota and privacy-mode failures.
            }
        }
    }

    private _metadataCacheID(): string {
        return `${cachedAuthority()?.metadata_cache_id || ''}`;
    }

    private _clearCache() {
        for (const store of [localStorage, sessionStorage]) {
            for (let i = store.length - 1; i >= 0; i--) {
                const key = store.key(i);
                if (key?.startsWith(ORG_CACHE_PREFIX)) store.removeItem(key);
            }
        }
    }
}

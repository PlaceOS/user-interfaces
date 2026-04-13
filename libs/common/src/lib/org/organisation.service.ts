import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    PlaceMetadata,
    PlaceZone,
    authority,
    getModule,
    isMock,
    onlineState,
    queryZones,
    showMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
} from 'rxjs/operators';

import { log, mapLastValueFrom, unique } from '../general';
import { notifyError } from '../notifications';
import { setLoadingMessage } from '../placeos.service';
import { isPublicMode } from '../public-mode';
import { SettingsService } from '../settings.service';
import {
    Building,
    BuildingLevel,
    Organisation,
    Region,
} from '../types/org.classes';

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
    private _service = inject(SettingsService);
    private _router = inject(Router);

    public readonly building_signal = signal<Building>(new Building());
    public readonly regions_signal = signal<Region[]>([]);
    public readonly buildings_signal = signal<Building[]>([]);
    public readonly levels_signal = signal<BuildingLevel[]>([]);

    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    private readonly _regions = new BehaviorSubject<Region[]>([]);
    private readonly _active_region = new BehaviorSubject<Region>(null);
    private readonly _buildings = new BehaviorSubject<Building[]>([]);
    private readonly _active_building = new BehaviorSubject<Building>(null);
    private readonly _levels = new BehaviorSubject<BuildingLevel[]>([]);
    private readonly _loaded_data: string[] = [];
    private readonly _limited_init = signal(false);

    public readonly app_key = `${(
        this._service.app_name || 'workplace'
    ).toLowerCase()}_app`;
    /** Observable for the list of regions */
    public readonly region_list = this._regions.asObservable();
    /** Observable for the list of buildings */
    public readonly building_list = this._buildings.asObservable();
    /** Observable for the list of levels */
    public readonly level_list = this._levels.asObservable();
    /** Observable for the currently active region */
    public readonly active_region = this._active_region.asObservable();
    /** Observable for the currently active building */
    public readonly active_building = this._active_building.asObservable();
    /** Observable for the buildings associated with the currently active region */
    public readonly active_buildings = combineLatest([
        this._buildings,
        this._active_region,
    ]).pipe(
        map(([_, region]) =>
            region ? this.buildingsForRegion(region) : this.buildings,
        ),
    );
    /** Observable for the levels associated with the currently active building */
    public readonly active_levels = combineLatest([
        this._levels,
        this._active_building,
    ]).pipe(
        map(([_, bld]) => (bld ? this.levelsForBuilding(bld) : [])),
        shareReplay(1),
    );
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
        const region = this._active_region.getValue();
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
        return this._regions.getValue();
    }

    /** Currently active region */
    public get region(): Region {
        return this._active_region.getValue();
    }
    public set region(item: Region) {
        this.setRegion(item);
    }

    /** Prevent automatic building/region selection from overriding externally set values */
    public skipAutoSelection() {
        this._skip_auto_selection = true;
    }

    public async setRegion(item: Region) {
        if (!item || this._active_region.value?.id == item.id) return;
        this._active_region.next(item);
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
        return this._buildings.getValue() || [];
    }

    /** Currently active building */
    public get building(): Building {
        return this._active_building.getValue();
    }
    public set building(bld: Building) {
        this.setBuilding(bld);
    }

    public setBuilding(bld: Building, save = false) {
        if (!(bld instanceof Object)) return;
        this._active_building.next(bld);
        this.building_signal.set(bld);
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
        return this._levels.getValue();
    }

    public set limit_init(state: boolean) {
        this._limited_init.set(state);
    }

    constructor() {
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => setTimeout(() => this.init(), 1000));
        combineLatest([this.active_region, this.active_building])
            .pipe(
                filter(([_, bld]) => !!bld),
                debounceTime(300),
            )
            .subscribe(() => this._updateSettingOverrides());
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
        return this.levels.filter(
            (lvl) => lvl.parent_id && lvl.parent_id === bld?.id,
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
        return this.levels.filter(
            (lvl) =>
                lvl.parent_id &&
                bld_list.find((bld) => bld.id === lvl.parent_id),
        );
    }

    public addZone(zone: PlaceZone) {
        if (zone.tags.includes('region')) {
            const region = new Region(zone);
            const regions = this._regions
                .getValue()
                .filter((_) => _.id !== region.id);
            regions.push(region);
            this._regions.next(regions);
            this.regions_signal.set(regions);
        } else if (zone.tags.includes('building')) {
            const bld = new Building(zone);
            let buildings = this._buildings
                .getValue()
                .filter((_) => _.id !== bld.id);
            buildings.push(bld);
            buildings = buildings.sort((a, b) =>
                (a.name || '').localeCompare(b.name || ''),
            );
            this._buildings.next(buildings);
            this.buildings_signal.set(buildings);
        } else if (zone.tags.includes('level')) {
            const lvl = new BuildingLevel(zone);
            let levels = this._levels.getValue().filter((_) => _.id !== lvl.id);
            levels.push(lvl);
            levels = levels.sort((a, b) =>
                (a.name || '').localeCompare(b.name || ''),
            );
            this._levels.next(levels);
            this.levels_signal.set(levels);
        } else {
            console.warn(
                'Unable to add zone as it is missing the required tag.',
                zone.id,
            );
        }
    }

    public removeZone(zone: PlaceZone) {
        if (zone.tags.includes('region')) {
            const regions = this._regions
                .getValue()
                .filter((_) => _.id !== zone.id);
            this._regions.next(regions);
            this.regions_signal.set(regions);
        } else if (zone.tags.includes('building')) {
            const buildings = this._buildings

                .getValue()
                .filter((_) => _.id !== zone.id);
            this._buildings.next(buildings);
            this.buildings_signal.set(buildings);
        } else if (zone.tags.includes('level')) {
            const levels = this._levels
                .getValue()
                .filter((_) => _.id !== zone.id);
            this._levels.next(levels);
            this.levels_signal.set(levels);
        } else {
            console.warn(
                'Unable to remove zone as it is missing the required tag.',
                zone.id,
            );
        }
    }

    private async init(tries = 0) {
        if (this._limited_init()) {
            this._initialised.next(true);
            return;
        }
        this._initialised.next(false);
        if (isPublicMode()) {
            await this.load().catch((err) => {
                console.warn(
                    'Organisation loading failed in public mode, using local public organisation data.',
                    err,
                );
                this._setPublicData();
            });
        } else {
            await this.load().catch((err) => {
                notifyError('Error loading organisation data. Retrying...');
                setTimeout(
                    () => this.init(tries),
                    Math.min(10_000, 300 * ++tries),
                );
                throw err;
            });
        }
        setTimeout(() => {
            if (this._skip_auto_selection) return;
            if (localStorage.getItem('PLACEOS.region')) {
                this.region = this.regions.find(
                    (region) =>
                        region.id === localStorage.getItem('PLACEOS.region'),
                );
            }
            if (localStorage.getItem('PLACEOS.building')) {
                this.building = this.buildings.find(
                    (bld) =>
                        bld.id === localStorage.getItem('PLACEOS.building'),
                );
            }
        }, 1000);
        if (window.debug) {
            if (!window.app) window.app = {};
            window.app.org = this;
        }
        this._initialised.next(true);
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
        this._regions.next([region]);
        this.regions_signal.set([region]);
        this._buildings.next([building]);
        this.buildings_signal.set([building]);
        this._levels.next([level]);
        this.levels_signal.set([level]);
        this._active_region.next(region);
        this._active_building.next(building);
        this.building_signal.set(building);
        this._updateSettingOverrides();
    }

    /**
     * Initialise service data
     */
    private async load(): Promise<void> {
        setLoadingMessage('Loading organistion data...');
        await this.loadOrganisation();
        setLoadingMessage('Loading region data...');
        await this.loadRegions();
        if (!this._regions.getValue().length) {
            setLoadingMessage('Loading building data...');
            const list = await this.loadBuildings();
            this._buildings.next(list);
            this.buildings_signal.set(list);
        } else {
            setLoadingMessage('Loading region buildings data...');
            for (const region of this._regions.getValue()) {
                const blds = await this.loadBuildings(region.id);
                if (blds.length) {
                    this._buildings.next(blds);
                    this.buildings_signal.set(blds);
                    break;
                }
            }
        }
        setLoadingMessage('Loading zone settings...');
        await this.loadSettings();
        if (!this._buildings.getValue()?.length) {
            log('ORG', 'Unable to find any building zones');
        }
        setLoadingMessage('Loading active building levels...');
        await this.loadLevels();
        this._updateSettingOverrides();
    }

    /**
     * Load organisation data for application
     */
    public async loadOrganisation(): Promise<void> {
        const org_list = await mapLastValueFrom(
            queryZones({ tags: 'org', include_children_count: true }),
            (i) => i.data,
        );
        console.log('Orgs:', org_list);
        if (org_list.length) {
            const auth = authority();
            const org =
                org_list.find(
                    (list) => isMock() || list.id === auth?.config?.org_zone,
                ) || org_list[0];

            const load_metadata = !this._service.get('dont_load_metadata');
            const bindings: Record<string, any> = (
                await lastValueFrom(
                    load_metadata
                        ? showMetadata(org.id, 'bindings')
                        : of({ details: {} }),
                )
            )?.details;
            this._organisation = new Organisation({ ...org, bindings });
        } else {
            log('ORG', 'Unable to find organisation');
            this._router.navigate(['/misconfigured']);
        }
    }

    /**
     * Load region data for the organisation
     */
    public async loadRegions(): Promise<void> {
        const list = await lastValueFrom(
            queryZones({
                tags: 'region',
                parent_id: this._organisation?.id || '',
                limit: 500,
            } as any).pipe(
                map((i) => i.data.map((_) => new Region(_))),
                catchError(() => of([])),
            ),
        );
        this._regions.next(list);
        this.regions_signal.set(list);
    }

    public async loadRegionData(region: Region): Promise<void> {
        if (this._loaded_data[region.id]) return;
        const load_metadata = !this._service.get('dont_load_metadata');
        const settings_request = load_metadata
            ? showMetadata(region.id, this.app_key)
            : of(new PlaceMetadata());
        const bindings_request = load_metadata
            ? showMetadata(region.id, 'bindings')
            : of(new PlaceMetadata());
        const [settings, bindings, buildings]: any = await Promise.all([
            mapLastValueFrom(settings_request, (_) => _?.details),
            mapLastValueFrom(bindings_request, (_) => _?.details),
            this.loadBuildings(region.id),
        ]);
        this._buildings.next(
            unique([...this._buildings.getValue(), ...buildings], 'id'),
        );
        this._loaded_data[region.id] = true;
        (region as any).bindings = bindings;
        this._region_settings[region.id] = settings;
    }

    /**
     * Load buildings data for the organisation
     */
    public async loadBuildings(
        parent_id: string = this._organisation?.id,
    ): Promise<Building[]> {
        const building_list = await lastValueFrom(
            queryZones({
                tags: 'building',
                parent_id,
                limit: 500,
            } as any).pipe(map((i) => i.data.map((_) => new Building(_)))),
        );
        return building_list;
    }

    public async loadBuildingData(bld: Building) {
        if (!bld || this._loaded_data[bld.id]) return;
        const [settings, bindings, booking_rules, driver_settings]: any =
            await Promise.all([
                lastValueFrom(
                    showMetadata(bld.id, this.app_key).pipe(
                        map((_) => _?.details),
                        catchError(() => of({})),
                    ),
                ),
                lastValueFrom(
                    showMetadata(bld.id, 'bindings').pipe(
                        map((_) => _?.details),
                        catchError(() => of({})),
                    ),
                ),
                lastValueFrom(
                    showMetadata(bld.id, 'booking_rules').pipe(
                        map((_) => _?.details),
                        catchError(() => of({})),
                    ),
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
        this._updateSettingOverrides();
    }

    /**
     * Load levels data for the buildings
     */
    public async loadLevels(): Promise<void> {
        let level_list = await lastValueFrom(
            queryZones({
                tags: 'level',
                authority_id: authority().id,
                limit: 2500,
            } as any).pipe(map((i) => i.data)),
        );
        level_list = level_list.filter((_) => _.parent_id);
        if (!level_list?.length) {
            this._router.navigate(['/misconfigured']);
        }
        let levels = level_list.map((lvl) => new BuildingLevel(lvl));
        levels = levels.sort((a, b) =>
            (a.name || '').localeCompare(b.name || ''),
        );
        this._levels.next(levels);
        this.levels_signal.set(levels);
    }

    public async loadSettings() {
        if (!this._organisation) return;
        const app_settings = (
            await lastValueFrom(
                showMetadata(this._organisation?.id, this.app_key).pipe(
                    catchError(() => of({} as PlaceMetadata)),
                ),
            )
        )?.details;
        const global_settings = (
            await lastValueFrom(
                showMetadata(this._organisation?.id, 'settings').pipe(
                    catchError(() => of({} as PlaceMetadata)),
                ),
            )
        )?.details;
        this._settings = [global_settings, app_settings];
        this._service.overrides = [...this._settings];
        await this._initialiseActiveBuilding();
        this._updateSettingOverrides();
    }

    private _initialiseActiveBuilding() {
        return new Promise<void>((resolve) => {
            const id = sessionStorage.getItem(`PLACEOS.building`);
            if (id && this.buildings.find((bld) => bld.id === id)) {
                this.building = this.buildings.find((bld) => bld.id === id);
                return resolve();
            }
            const use_location = !!this._service.get('app.use_geolocation');
            if (use_location && 'geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        let closest_bld = null;
                        for (const bld of this.buildings) {
                            if (!bld.location || bld.location === '0,0')
                                continue;
                            if (!closest_bld) closest_bld = bld;
                            else {
                                const [c_lat, c_long] = (
                                    closest_bld.location || '0,0'
                                ).split(',');
                                const [b_lat, b_long] = (
                                    bld.location || '0,0'
                                ).split(',');
                                const b_dist = Math.sqrt(
                                    Math.pow(latitude - +b_lat, 2) +
                                        Math.pow(longitude - +b_long, 2),
                                );
                                const c_dist = Math.sqrt(
                                    Math.pow(latitude - +c_lat, 2) +
                                        Math.pow(longitude - +c_long, 2),
                                );
                                if (b_dist < c_dist) closest_bld = bld;
                            }
                        }
                        if (closest_bld) this.building = closest_bld;
                        if (!this.building?.id) this._setDefaultBuilding();
                        resolve();
                    },
                    () => {
                        if (!this.building?.id) this._setDefaultBuilding();
                        resolve();
                    },
                );
            } else {
                if (!this.building?.id) this._setDefaultBuilding();
                resolve();
            }
        });
    }

    private async _setDefaultBuilding() {
        if (!this.buildings.length) return;
        const region_id = localStorage.getItem(`PLACEOS.region`);

        await (region_id
            ? this.setRegion(
                  this._regions.getValue().find((_) => _.id === region_id),
              )
            : this._setRegionFromTimezone());
        this._setBuildingFromTimezone();
        if (this.building) return;
        const bld_id = this._service.get('app.default_building');
        if (bld_id) {
            this.building = this.buildings.find(({ id }) => id === bld_id);
        }
        if (!this.building) this.building = this.buildings[0];
    }

    private async _setRegionFromTimezone() {
        const region_list = this.regions;
        const timezone = this.timezone;
        for (const region of region_list) {
            if (region.timezone === timezone) {
                return await this.setRegion(region);
            }
        }
        const tz_start = timezone.split('/')[0];
        for (const region of region_list) {
            if (region.timezone.startsWith(tz_start)) {
                return await this.setRegion(region);
            }
        }
    }

    private _setBuildingFromTimezone() {
        if (this._skip_auto_selection) return;
        const bld_list = this.buildings.filter(
            (bld) => !this.region || bld.parent_id === this.region?.id,
        );
        const timezone = this.timezone;
        for (const bld of bld_list) {
            if (bld.timezone === timezone) {
                this.building = bld;
                return;
            }
        }
        const tz_start = timezone.split('/')[0];
        for (const bld of bld_list) {
            if (bld.timezone.startsWith(tz_start)) {
                this.building = bld;
                return;
            }
        }
    }

    private _updateSettingOverrides() {
        setTimeout(
            () =>
                (this._service.overrides = [
                    this.buildingSettings(this.building?.id),
                    this.regionSettings(this.region?.id),
                    ...this._settings,
                ]),
            300,
        );
    }
}

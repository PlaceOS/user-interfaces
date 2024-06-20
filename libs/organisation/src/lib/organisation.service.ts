import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    EncryptionLevel,
    PlaceZone,
    authority,
    isMock,
    onlineState,
    querySettings,
    queryZones,
    showMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, filter, first, map, shareReplay } from 'rxjs/operators';

import { notifyError } from 'libs/common/src/lib/notifications';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { RoomConfiguration } from 'libs/common/src/lib/room-configuration.interface';

import { Building } from './building.class';
import { BuildingLevel } from './level.class';
import { Organisation } from './organisation.class';
import { Region } from './region.class';
import { log, unique } from '@placeos/common';

import * as yaml from 'js-yaml';

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
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
            region ? this.buildingsForRegion(region) : this.buildings
        )
    );
    /** Observable for the levels associated with the currently active building */
    public readonly active_levels = combineLatest([
        this._levels,
        this._active_building,
    ]).pipe(
        map(([_, bld]) => (bld ? this.levelsForBuilding(bld) : [])),
        shareReplay(1)
    );
    /** Organisation data for the application */
    private _organisation: Organisation;
    /** Mapping of organisation settings overrides */
    private _settings: Record<string, any>[] = [];
    /** Mapping of regions to settings overrides */
    private _region_settings: Record<string, Record<string, any>> = {};
    /** Mapping of buildings to settings overrides */
    private _building_settings: Record<string, Record<string, any>> = {};

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
    public regionSettings(id: string = ''): Record<string, any> {
        const region = this._active_region.getValue();
        if (!id && region) id = region?.id;
        return this._region_settings ? this._region_settings[id] || {} : {};
    }

    /** Mapping building settings overrides */
    public buildingSettings(bld_id: string = ''): Record<string, any> {
        if (!bld_id && this.building) {
            bld_id = this.building?.id;
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

    public async setRegion(item: Region) {
        if (!item) return;
        this._active_region.next(item);
        await this.loadRegionData(item);
        this._setBuildingFromTimezone();
        if (
            this.building?.parent_id !== item.id &&
            this.buildingsForRegion(item).length
        ) {
            this.building = this.buildingsForRegion(item)[0];
        } else this._updateSettingOverrides();
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
        if (!bld) return;
        this._active_building.next(bld);
        this.loadBuildingData(bld).then(() => this._updateSettingOverrides());
        if (this.regions.length && this.region?.id !== bld.parent_id) {
            this.region = this.regions.find(
                (_) => _.id === this.building.parent_id
            );
        }
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

    /** Get building by id */
    public find(id: string) {
        return this.buildings.find((i) => i.id === id);
    }

    /** List of available levels */
    public get levels(): BuildingLevel[] {
        return this._levels.getValue();
    }

    constructor(private _service: SettingsService, private _router: Router) {
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => setTimeout(() => this.init(), 1000));
        combineLatest([this.active_region, this.active_building])
            .pipe(filter(([region, bld]) => !!bld))
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
            (lvl) => lvl.parent_id && lvl.parent_id === bld?.id
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
                bld_list.find((bld) => bld.id === lvl.parent_id)
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
        } else if (zone.tags.includes('building')) {
            const bld = new Building(zone);
            let buildings = this._buildings
                .getValue()
                .filter((_) => _.id !== bld.id);
            buildings.push(bld);
            buildings = buildings.sort((a, b) =>
                (a.name || '').localeCompare(b.name || '')
            );
            this._buildings.next(buildings);
        } else if (zone.tags.includes('level')) {
            const lvl = new BuildingLevel(zone);
            let levels = this._levels.getValue().filter((_) => _.id !== lvl.id);
            levels.push(lvl);
            levels = levels.sort((a, b) =>
                (a.name || '').localeCompare(b.name || '')
            );
            this._levels.next(levels);
        } else {
            console.warn(
                'Unable to add zone as it is missing the required tag.',
                zone.id
            );
        }
    }

    public removeZone(zone: PlaceZone) {
        if (zone.tags.includes('region')) {
            const regions = this._regions
                .getValue()
                .filter((_) => _.id !== zone.id);
            this._regions.next(regions);
        } else if (zone.tags.includes('building')) {
            const buildings = this._buildings

                .getValue()
                .filter((_) => _.id !== zone.id);
            this._buildings.next(buildings);
        } else if (zone.tags.includes('level')) {
            const levels = this._levels
                .getValue()
                .filter((_) => _.id !== zone.id);
            this._levels.next(levels);
        } else {
            console.warn(
                'Unable to remove zone as it is missing the required tag.',
                zone.id
            );
        }
    }

    private async init(tries: number = 0) {
        this._initialised.next(false);
        await this.load().catch((err) => {
            notifyError('Error loading organisation data. Retrying...');
            setTimeout(() => this.init(tries), Math.min(10_000, 300 * ++tries));
            throw err;
        });
        this._initialised.next(true);
        if (window.debug) {
            if (!window.application) window.application = {};
            window.application.orgs = this;
        }
    }

    /**
     * Initialise service data
     */
    private async load(): Promise<void> {
        await this.loadOrganisation();
        await this.loadRegions();
        if (!this._regions.getValue().length) {
            this._buildings.next(await this.loadBuildings());
        } else {
            for (const region of this._regions.getValue()) {
                const blds = await this.loadBuildings(region.id);
                if (blds.length) {
                    this._buildings.next(blds);
                    break;
                }
            }
        }
        await this.loadSettings();
        if (!this._buildings.getValue()?.length) {
            log('ORG', 'Unable to find any building zones');
            this._router.navigate(['/misconfigured']);
        }
        await this.loadLevels();
        this._updateSettingOverrides();
    }

    /**
     * Load organisation data for application
     */
    public async loadOrganisation(): Promise<void> {
        const org_list = await queryZones({ tags: 'org' })
            .pipe(map((i) => i.data))
            .toPromise();
        if (org_list.length) {
            const auth = authority();
            const org =
                org_list.find(
                    (list) => isMock() || list.id === auth?.config?.org_zone
                ) || org_list[0];
            const bindings: Record<string, any> = (
                await showMetadata(org.id, 'bindings').toPromise()
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
        const list = await queryZones({
            tags: 'region',
            parent_id: this._organisation?.id || '',
            limit: 500,
        } as any)
            .pipe(
                map((i) => i.data.map((_) => new Region(_))),
                catchError(() => of([]))
            )
            .toPromise();
        this._regions.next(list);
    }

    public async loadRegionData(region: Region): Promise<void> {
        if (this._loaded_data[region.id]) return;
        const [settings, bindings, buildings]: any = await Promise.all([
            showMetadata(region.id, this.app_key)
                .pipe(map((_) => _?.details))
                .toPromise(),
            showMetadata(region.id, 'bindings')
                .pipe(map((_) => _?.details))
                .toPromise(),
            this.loadBuildings(region.id),
        ]);
        this._buildings.next(
            unique([...this._buildings.getValue(), ...buildings], 'id')
        );
        this._loaded_data[region.id] = true;
        (region as any).bindings = bindings;
        this._region_settings[region.id] = settings;
    }

    /**
     * Load buildings data for the organisation
     */
    public async loadBuildings(
        parent_id: string = this._organisation?.id
    ): Promise<Building[]> {
        const building_list = await queryZones({
            tags: 'building',
            parent_id,
            limit: 500,
        } as any)
            .pipe(map((i) => i.data.map((_) => new Building(_))))
            .toPromise();
        return building_list;
    }

    public async loadBuildingData(bld: Building) {
        if (!bld || this._loaded_data[bld.id]) return;
        const [settings, bindings, booking_rules, driver_settings]: any =
            await Promise.all([
                showMetadata(bld.id, this.app_key)
                    .pipe(map((_) => _?.details))
                    .toPromise(),
                showMetadata(bld.id, 'bindings')
                    .pipe(map((_) => _?.details))
                    .toPromise(),
                showMetadata(bld.id, 'booking_rules')
                    .pipe(map((_) => _?.details))
                    .toPromise(),
                querySettings({ parent_id: bld.id })
                    .pipe(
                        map((_) => {
                            try {
                                return yaml.load(
                                    _?.data.find(
                                        (_) =>
                                            _.encryption_level ===
                                            EncryptionLevel.None
                                    ) || { settings_string: '' }
                                );
                            } catch {
                                return {};
                            }
                        })
                    )
                    .toPromise(),
            ]);
        this._building_settings[bld.id] = {
            ...(driver_settings || {}),
            ...(settings || {}),
        };
        (bld as any).bindings = bindings;
        (bld as any).booking_rules = booking_rules;
        this._loaded_data[bld.id] = true;
    }

    /**
     * Load levels data for the buildings
     */
    public async loadLevels(): Promise<void> {
        const level_list = await queryZones({
            tags: 'level',
            limit: 2500,
        } as any)
            .pipe(map((i) => i.data))
            .toPromise();

        if (!level_list?.length) {
            this._router.navigate(['/misconfigured']);
        }
        let levels = level_list.map((lvl) => new BuildingLevel(lvl));
        levels = levels.sort((a, b) =>
            (a.name || '').localeCompare(b.name || '')
        );
        this._levels.next(levels);
    }

    public get available_room_configs(): RoomConfiguration[] {
        return this.buildings
            .map((m) => [...m.room_configurations])
            .reduce((prev, curr) => prev.concat(curr), [])
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    public async loadSettings() {
        if (!this._organisation) return;
        const app_settings = (
            await showMetadata(this._organisation?.id, this.app_key).toPromise()
        )?.details;
        const global_settings = (
            await showMetadata(this._organisation?.id, 'settings').toPromise()
        )?.details;
        this._settings = [global_settings, app_settings];
        this._service.overrides = [...this._settings];
        await this._initialiseActiveBuilding();
        this._updateSettingOverrides();
    }

    /** Save building selection */
    public saveBuilding(id: string) {
        const region_id = this._buildings
            .getValue()
            .find((bld) => bld.id === id)?.parent_id;
        if (region_id && region_id !== this._organisation.id) {
            sessionStorage.setItem(`PLACEOS.region`, region_id);
        }
        sessionStorage.setItem(`PLACEOS.building`, id);
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
                                        Math.pow(longitude - +b_long, 2)
                                );
                                const c_dist = Math.sqrt(
                                    Math.pow(latitude - +c_lat, 2) +
                                        Math.pow(longitude - +c_long, 2)
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
                    }
                );
            } else if (!this.building?.id) {
                this._setDefaultBuilding();
                resolve();
            }
        });
    }

    private async _setDefaultBuilding() {
        if (!this.buildings.length) return;
        const region_id = sessionStorage.getItem(`PLACEOS.region`);
        await (region_id
            ? this.setRegion(
                  this._regions.getValue().find((_) => _.id === region_id)
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
        const bld_list = this.buildings.filter(
            (bld) => !this.region || bld.parent_id === this.region?.id
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
        this._service.overrides = [
            this.buildingSettings(this.building?.id),
            this.regionSettings(this.region?.id),
            ...this._settings,
        ];
    }
}

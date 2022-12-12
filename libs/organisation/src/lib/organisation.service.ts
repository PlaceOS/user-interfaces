import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    authority,
    isMock,
    onlineState,
    queryZones,
    showMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

import { notifyError } from 'libs/common/src/lib/notifications';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { RoomConfiguration } from 'libs/common/src/lib/room-configuration.interface';

import { Building } from './building.class';
import { BuildingLevel } from './level.class';
import { Organisation } from './organisation.class';
import { Region } from './region.class';
import { flatten, log } from '@placeos/common';

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
    ]).pipe(map(([_, bld]) => (bld ? this.levelsForBuilding(bld) : [])));
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
        if (!item) return;
        this._active_region.next(item);
        if (
            this.building?.parent_id !== item.id &&
            this.buildingsForRegion(item).length
        ) {
            this.building = this.buildingsForRegion(item)[0];
        } else this._updateSettingOverrides();
    }

    /** List of available buildings */
    public get buildings(): Building[] {
        return this._buildings.getValue();
    }

    /** Currently active building */
    public get building(): Building {
        return this._active_building.getValue();
    }
    public set building(bld: Building) {
        this._active_building.next(bld);
        this._updateSettingOverrides();
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
            this._service.get('app.currency') || this.building.currency || 'USD'
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
        this.active_building.subscribe((bld) => {
            if (bld) {
                this._service.overrides = [
                    ...this._settings,
                    this.buildingSettings(bld.id),
                ];
            }
        });
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
        return this.levels.filter((lvl) => lvl.parent_id === bld?.id);
    }

    /**
     * Get list of buildings for the given region
     * @param region Region to list buildings for
     */
    public buildingsForRegion(region: Region = this.region): Building[] {
        return this.buildings.filter((bld) => bld.parent_id === region?.id);
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
        if (this._regions.getValue().length) {
            this._buildings.next(
                flatten(
                    await Promise.all(
                        this._regions
                            .getValue()
                            .map((_) => this.loadBuildings(_.id))
                    )
                )
            );
        } else {
            this._buildings.next(await this.loadBuildings());
        }
        if (!this._buildings.getValue()?.length) {
            log('ORG', 'Unable to find any building zones');
            this._router.navigate(['/misconfigured']);
        }
        await this.loadLevels();
        await this.loadSettings();
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
                map((i) => i.data),
                catchError(() => of([]))
            )
            .toPromise();
        const regions = [];
        for (const item of list) {
            const bindings: Record<string, any> = (
                await showMetadata(item.id, 'bindings').toPromise()
            )?.details;
            regions.push(new Building({ ...item, bindings }));
        }
        this._regions.next(regions);
    }

    /**
     * Load buildings data for the organisation
     */
    public async loadBuildings(
        parent_id: string = this._organisation.id
    ): Promise<Building[]> {
        const building_list = await queryZones({
            tags: 'building',
            parent_id,
            limit: 500,
        } as any)
            .pipe(map((i) => i.data))
            .toPromise();
        const buildings = [];
        for (const bld of building_list) {
            const bindings: Record<string, any> = (
                await showMetadata(bld.id, 'bindings').toPromise()
            )?.details;
            buildings.push(new Building({ ...bld, bindings }));
        }
        return buildings;
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
        const levels = level_list
            .filter(
                (lvl) =>
                    !!this.buildings.find((bld) => bld.id === lvl.parent_id)
            )
            .map((lvl) => new BuildingLevel(lvl));
        levels.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
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
        const app_name = `${(
            this._service.app_name || 'workplace'
        ).toLowerCase()}_app`;
        const app_settings = (
            await showMetadata(this._organisation.id, app_name).toPromise()
        )?.details;
        const global_settings = (
            await showMetadata(this._organisation.id, 'settings').toPromise()
        )?.details;
        this._settings = [global_settings, app_settings];
        const regions = this.regions;
        for (const item of regions) {
            this._region_settings[item.id] = (
                await showMetadata(item.id, app_name).toPromise()
            )?.details;
        }
        const buildings = this.buildings;
        for (const bld of buildings) {
            this._building_settings[bld.id] = (
                await showMetadata(bld.id, app_name).toPromise()
            )?.details;
        }
        this._service.overrides = [...this._settings];
        await this._initialiseActiveBuilding();
        this._updateSettingOverrides();
    }

    /** Save building selection */
    public saveBuilding(id: string) {
        localStorage.setItem(`PLACEOS.building`, id);
    }

    private _initialiseActiveBuilding() {
        return new Promise<void>((resolve) => {
            const id = localStorage.getItem(`PLACEOS.building`);
            if (id && this.buildings.find((bld) => bld.id === id)) {
                this._active_building.next(
                    this.buildings.find((bld) => bld.id === id)
                );
                return resolve();
            }
            const use_location = !!this._service.get('app.use_geolocation');
            if (use_location && 'geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        let closest_bld = null;
                        for (const bld of this.buildings) {
                            if (!bld.location || bld.location === '0,0') continue;
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

    private _setDefaultBuilding() {
        console.log('Set Default Building:', this.buildings);
        if (!this.buildings.length) return;
        const bld_id = this._service.get('app.default_building');
        if (bld_id) {
            this.building = this.buildings.find(({ id }) => id === bld_id);
        } else {
            const timezone = this.timezone;
            console.log(
                'Timezone:',
                timezone,
                this.buildings.map((_) => `${_.name}|${_.timezone}`)
            );
            for (const bld of this.buildings) {
                if (bld.timezone === timezone) {
                    this.building = bld;
                    break;
                }
            }
            if (this.building) return;
            const tz_start = timezone.split('/')[0];
            for (const bld of this.buildings) {
                if (bld.timezone.startsWith(tz_start)) {
                    this.building = bld;
                    break;
                }
            }
        }
        if (!this.building) this.building = this.buildings[0];
    }

    private _updateSettingOverrides() {
        this._service.overrides = [
            ...this._settings,
            this.regionSettings(this.region?.id),
            this.buildingSettings(this.building?.id),
        ];
    }
}

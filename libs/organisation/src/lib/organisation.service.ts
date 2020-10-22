import { Injectable } from '@angular/core';
import {
    onlineState,
    queryZones,
    showMetadata,
    updateMetadata,
    listChildMetadata,
} from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { Organisation } from './organisation.class';
import { Building } from './building.class';
import { BuildingLevel } from './level.class';
import { Desk } from './desk.class';
import { HashMap, notifyError, RoomConfiguration, SettingsService } from '@user-interfaces/common';

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    private readonly buildings_subject = new BehaviorSubject<Building[]>([]);
    private readonly active_building_subject = new BehaviorSubject<Building>(null);
    private readonly levels_subject = new BehaviorSubject<BuildingLevel[]>([]);

    /** Observable for the list of buildings */
    public readonly building_list = this.buildings_subject.asObservable();
    /** Observable for the list of levels */
    public readonly level_list = this.levels_subject.asObservable();
    /** Observable for the currently active building */
    public readonly active_building = this.active_building_subject.asObservable();
    /** Observable for the levels associated with the currently active building */
    public readonly active_levels = combineLatest([this.level_list, this.active_building]).pipe(
        map((details) => (details[1] ? this.levelsForBuilding(details[1]) : []))
    );
    /** Organisation data for the application */
    private _organisation: Organisation;
    /** Mapping of organisation settings overrides */
    private _settings: HashMap = {};
    /** Mapping of buildings to settings overrides */
    private _building_settings: HashMap<HashMap> = {};

    /** Mapping of organisation settings overrides */
    public get settings(): HashMap {
        return this._settings;
    }

    /** Mapping of builgins to settings overrides */
    public get building_settings(): HashMap<HashMap> {
        return this._building_settings;
    }

    /** Mapping building settings overrides */
    public buildingSettings(bld_id: string = ''): HashMap {
        if (!bld_id && this.building) {
            bld_id = this.building.id;
        }
        return this._building_settings ? this._building_settings[bld_id] || {} : {};
    }

    /** Organisation data for the application */
    public get organisation(): Organisation {
        return this._organisation;
    }

    /** List of available buildings */
    public get buildings(): Building[] {
        return this.buildings_subject.getValue();
    }

    /** Currently active building */
    public get building(): Building {
        return this.active_building_subject.getValue();
    }
    public set building(bld: Building) {
        this.active_building_subject.next(bld);
    }

    /** Get building by id */
    public find(id: string) {
        return this.buildings.find((i) => i.id === id || i.email === id);
    }

    /** List of available levels */
    public get levels(): BuildingLevel[] {
        return this.levels_subject.getValue();
    }

    constructor(private _service: SettingsService) {
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => setTimeout(() => this.init(), 1000));
        this.active_building.subscribe((bld) => {
            if (bld) {
                this._service.overrides = [this._settings, this.buildingSettings(bld.id)];
            }
        });
    }

    /**
     * Get level with a matching ID
     * @param id_list List of IDs to find a match
     */
    public levelWithID(id_list: string[]): BuildingLevel {
        return this.levels.find((lvl) => id_list.includes(lvl.id));
    }

    /**
     * Get list of levels for the given building
     * @param bld Building to list levels for
     */
    public levelsForBuilding(bld: Building): BuildingLevel[] {
        return this.levels.filter((lvl) => lvl.parent_id === bld.id);
    }

    private async init() {
        this._initialised.next(false);
        await this.load().catch((err) => {
            notifyError('Error loading organisation data. Retrying...');
            setTimeout(() => this.init(), 300);
            throw err;
        });
        this._initialised.next(true);
    }

    /**
     * Initialise service data
     */
    private async load(): Promise<void> {
        await this.loadOrganisation();
        await this.loadBuildings();
        await this.loadLevels();
        await this.loadSettings();
    }

    /**
     * Load organisation data for application
     */
    public async loadOrganisation(): Promise<void> {
        const org_list = await queryZones({ tags: 'org' } as any)
            .pipe(map((i) => i.data))
            .toPromise();
        if (org_list.length) {
            const bindings = (await showMetadata(org_list[0].id, { name: 'bindings' }).toPromise())?.details;
            this._organisation = new Organisation({ ...org_list[0], bindings } as any);
        }
    }

    /**
     * Load buildings data for the organisation
     */
    public async loadBuildings(): Promise<void> {
        const building_list = await queryZones({
            tags: 'building',
            limit: 500,
        } as any)
            .pipe(map((i) => i.data))
            .toPromise();
        const buildings = building_list.map((bld) => new Building(bld));
        this.buildings_subject.next(buildings);
        const id = localStorage.getItem(`CATERING.building`);
        if (id && this.buildings.find((bld) => bld.id === id)) {
            this.active_building_subject.next(this.buildings.find((bld) => bld.id === id));
        }
        if (!this.building && buildings && buildings.length > 0) {
            this.building = buildings[0];
        }
    }

    /**
     * Load levels data for the buildings
     */
    public async loadLevels(): Promise<void> {
        const level_list = await queryZones({ tags: 'level', limit: 2500 } as any)
            .pipe(map((i) => i.data))
            .toPromise();
        const levels = level_list.map((lvl) => new BuildingLevel(lvl));
        levels.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        this.levels_subject.next(levels);
    }

    public get available_room_configs(): RoomConfiguration[] {
        return this.buildings
            .map((m) => [...m.room_configurations])
            .reduce((prev, curr) => prev.concat(curr), [])
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    /** Load metadata for the zone id */
    public loadMetadata(zone_id: string, query?: HashMap) {
        return showMetadata(zone_id, query);
    }

    /** Update Desks for zone */
    public async updateDesks(zone_id: string, data: any) {
        return updateMetadata(zone_id, {
            name: 'desks',
            description: 'desks',
            details: data,
        }).toPromise();
    }

    /** Load Desks zone */
    public async loadZoneDesks(zone_id: string): Promise<Desk[]> {
        const metadata: any = await this.loadMetadata(zone_id, { name: 'desks' }).toPromise();
        const data = metadata.details;
        if (!data) {
            return [];
        }
        return data.map(
            (i) =>
                new Desk({
                    ...i,
                    parent_id: data.parent_id,
                })
        );
    }

    /** Load desks metadata for the parent zone_id */
    public async loadDesks(zone_id): Promise<any[]> {
        const levels = await listChildMetadata(zone_id, {
            tags: 'level',
            name: 'desks',
        }).toPromise();
        const desks = [];
        levels.forEach((level) => {
            if (level.metadata?.desks?.details) {
                (level.metadata.desks.details as any).forEach((desk) => {
                    desks.push(
                        new Desk({
                            ...desk,
                            zone: level.zone,
                        })
                    );
                });
            }
        });
        return desks;
    }

    public async loadSettings() {
        const app_name = `${(this._service.get('app.name') || 'workplace').toLowerCase()}_app`;
        this._settings = await showMetadata(this._organisation.id, {
            name: app_name
        }).toPromise();
        const buildings = this.buildings;
        for (const bld of buildings) {
            this._building_settings[bld.id] = await showMetadata(bld.id, {
                name: app_name,
            }).toPromise();
        }
        this._service.overrides = [
            this._settings.details,
            this.buildingSettings(this.building.id).details,
        ];
    }

    /** Save building selection */
    public saveBuilding(id: string) {
        localStorage.setItem(`CATERING.building`, id);
    }
}

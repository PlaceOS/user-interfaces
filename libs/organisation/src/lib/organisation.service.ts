import { Injectable } from '@angular/core';
import {
    onlineState,
    queryZones,
    showMetadata,
    authority,
    isMock,
} from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { Organisation } from './organisation.class';
import { Building } from './building.class';
import { BuildingLevel } from './level.class';
import {
    HashMap,
    notifyError,
    RoomConfiguration,
    SettingsService,
} from '@placeos/common';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class OrganisationService {
    /** Subject which stores the initialised state of the object */
    protected readonly _initialised = new BehaviorSubject<boolean>(false);
    /** Observable of the initialised state of the object */
    public readonly initialised = this._initialised.asObservable();
    private readonly buildings_subject = new BehaviorSubject<Building[]>([]);
    private readonly active_building_subject = new BehaviorSubject<Building>(
        null
    );
    private readonly levels_subject = new BehaviorSubject<BuildingLevel[]>([]);

    /** Observable for the list of buildings */
    public readonly building_list = this.buildings_subject.asObservable();
    /** Observable for the list of levels */
    public readonly level_list = this.levels_subject.asObservable();
    /** Observable for the currently active building */
    public readonly active_building = this.active_building_subject.asObservable();
    /** Observable for the levels associated with the currently active building */
    public readonly active_levels = combineLatest([
        this.level_list,
        this.active_building,
    ]).pipe(
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
        return this._building_settings
            ? this._building_settings[bld_id] || {}
            : {};
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
        this._service.overrides = [
            this._settings.details,
            this.buildingSettings(bld.id).details,
        ];
    }

    /** Get building by id */
    public find(id: string) {
        return this.buildings.find((i) => i.id === id);
    }

    /** List of available levels */
    public get levels(): BuildingLevel[] {
        return this.levels_subject.getValue();
    }

    constructor(private _service: SettingsService, private _router: Router) {
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => setTimeout(() => this.init(), 1000));
        this.active_building.subscribe((bld) => {
            if (bld) {
                this._service.overrides = [
                    this._settings,
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
    public levelsForBuilding(bld: Building): BuildingLevel[] {
        return this.levels.filter((lvl) => lvl.parent_id === bld.id);
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
        await this.loadBuildings();
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
            const bindings: HashMap = (
                await showMetadata(org.id, { name: 'bindings' }).toPromise()
            )?.details;
            this._organisation = new Organisation({ ...org, bindings });
        } else {
            this._router.navigate(['/misconfigured']);
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
        if (!building_list?.length) {
            this._router.navigate(['/misconfigured']);
        }
        const buildings = [];
        for (const bld of building_list) {
            const bindings: HashMap = (
                await showMetadata(bld.id, { name: 'bindings' }).toPromise()
            )?.details;
            buildings.push(new Building({ ...bld, bindings }));
        }
        this.buildings_subject.next(buildings);
        const id = localStorage.getItem(`PLACEOS.building`);
        if (id && this.buildings.find((bld) => bld.id === id)) {
            this.active_building_subject.next(
                this.buildings.find((bld) => bld.id === id)
            );
        }
        if (!this.building && buildings && buildings.length > 0) {
            this.building = buildings[0];
        }
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

    public async loadSettings() {
        if (!this._organisation) return;
        const app_name = `${(
            this._service.get('app.name') || 'workplace'
        ).toLowerCase()}_app`;
        this._settings = await showMetadata(this._organisation.id, {
            name: app_name,
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
        localStorage.setItem(`PLACEOS.building`, id);
    }
}

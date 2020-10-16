import { Injectable } from '@angular/core';
import { listen } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { BaseClass } from '../common/base.class';
import { SettingsService } from '../common/settings.service';
import { HashMap } from '../common/types';
import { ExploreStateService } from './explore-state.service';
import { OrganisationService } from '../organisation/organisation.service';
import { BuildingLevel } from '../organisation/level.class';
import { DEFAULT_COLOURS } from './explore-spaces.service';

export interface DesksStats {
    free: number;
    occupied: number;
    total: number;
}

@Injectable()
export class ExploreZonesService extends BaseClass {
    private _level: BuildingLevel = null;
    private _zones = new BehaviorSubject<HashMap<HashMap<number>>>({});
    private _statuses: HashMap<string> = {};

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.subscription(
            'spaces',
            this._state.level.subscribe((level) => {
                this.clearBindings();
                this._level = level;
                this.bindToDesks();
            })
        );
        this.subscription(
            'changes',
            this._zones.subscribe((zones) => {
                if (!this._level) return;
                const zone_map = zones[this._level.id] || {};
                for (const id in zone_map) {
                    this._statuses[id] =
                        zone_map[id] < 40
                            ? 'free'
                            : zone_map[id] < 75
                                ? 'pending'
                                : 'busy';
                }
                this.timeout('update', () => this.updateStatus(), 100);
            })
        );
    }

    public clearBindings() {
        if (!this._level) return;
        this.unsub('zones');
        this._statuses = {};
    }

    public bindToDesks() {
        if (!this._level) return;
        const building = this._org.buildings.find((bld) => bld.id === this._level.parent_id);
        if (!building) {
            return;
        }
        const system_id = building.systems.floor_management;
        if (!system_id) {
            return;
        }
        system_id;
        const binding = { sys: system_id, mod: 'FloorManagement', index: 1 };
        this.subscription(
            `zones`,
            listen({
                ...binding,
                name: `usage`,
            }).subscribe((d) => this._zones.next(d))
        );
    }

    private updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || DEFAULT_COLOURS;
        for (const zone_id in this._statuses) {
            style_map[`#${zone_id}`] = {
                fill: colours[`desk-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('desks', style_map);
    }
}

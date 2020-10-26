import { Injectable } from '@angular/core';
import { getModule, listen } from '@placeos/ts-client';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import {
    BuildingLevel,
    OrganisationService,
} from '@user-interfaces/organisation';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { first } from 'rxjs/operators';

@Injectable()
export class ExploreZonesService extends BaseClass {
    private _level: BuildingLevel = null;
    private _bindings: any[] = [];
    private _statuses: HashMap<string> = {};

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first(_ => _)).toPromise();
        this.subscription(
            'spaces',
            this._state.level.subscribe((level) => {
                this.clearBindings();
                this._level = level;
                this.bindToZones();
            })
        );
    }

    public clearBindings() {
        if (!this._level) return;
        this.unsub('zones');
        this._bindings.forEach(b => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }

    public bindToZones() {
        if (!this._level) return;
        const building = this._org.buildings.find(
            (bld) => bld.id === this._level.parent_id
        );
        if (!building) return;
        const system_id = this._org.organisation.bindings.area_management;
        if (!system_id) return;
        const binding = getModule(system_id, 'AreaManagement').binding(`${this._level.id}:areas`);
        this.subscription(
            `zones`,
            binding.listen().subscribe((d) => this.parseData(d))
        );
        binding.bind();
        this._bindings.push(binding);
    }

    public parseData(d) {
        const value = d?.value || [];
        for (const zone of value) {
            this._statuses[zone.area_id] =
                zone.count < 40 ? 'free' : zone.count < 75 ? 'pending' : 'busy';
        }
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const colours =
            this._settings.get('app.explore.colors') || DEFAULT_COLOURS;
        for (const zone_id in this._statuses) {
            style_map[`#${zone_id}`] = {
                fill:
                    colours[`zone-${this._statuses[zone_id]}`] ||
                    colours[`${this._statuses[zone_id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('zones', style_map);
    }
}

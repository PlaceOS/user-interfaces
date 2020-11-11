import { Injectable } from '@angular/core';
import { getModule, showMetadata } from '@placeos/ts-client';
import { ViewerLabel, Point } from '@yuion/svg-viewer';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import {
    BuildingLevel,
    OrganisationService,
} from '@user-interfaces/organisation';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { first } from 'rxjs/operators';

const EMPTY_LABEL = { location: { x: -10, y: -10 }, content: '0% Usage' };

@Injectable()
export class ExploreZonesService extends BaseClass {
    private _level: BuildingLevel = null;
    private _bindings: any[] = [];
    private _statuses: HashMap<string> = {};
    private _labels: HashMap<ViewerLabel> = {};
    private _location: HashMap<Point> = {};
    private _capacity: HashMap<number> = {};

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
        const zone_metadata = await Promise.all(this._org.levels.map(bld => showMetadata(bld.id, { name: 'map_regions' }).toPromise()));
        for (const zone of zone_metadata) {
            const areas = (zone?.details as any)?.areas;
            if (areas) {
                for (const area of areas) {
                    this._capacity[area.id] = area.properties?.capacity || 100;
                    this._location[area.id] = area.properties?.label_location || { x: .5, y: .5 };
                }
            }
        }
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
        const labels = [];
        console.log('Parse Data:', d);
        for (const zone of value) {
            const filled = zone.count / (this._capacity[zone.area_id] || 100);
            this._statuses[zone.area_id] =
                filled < .4 ? 'free' : filled < .75 ? 'pending' : 'busy';
            this._labels[zone.area_id] = {
                location: this._location[zone.area_id],
                content: `${zone.count} ${zone.count === 1 ? 'Person' : 'People'}`
            };
            labels.push(this._labels[zone.area_id]);
        }
        this._state.setLabels('zones', labels);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const colours =
            this._settings.get('app.explore.colors') || {};
        for (const zone_id in this._statuses) {
            if (!this._statuses.hasOwnProperty(zone_id)) continue;
            style_map[`#${zone_id}`] = {
                fill:
                    colours[`zone-${this._statuses[zone_id]}`] ||
                    colours[`${this._statuses[zone_id]}`] ||
                    DEFAULT_COLOURS[`${this._statuses[zone_id]}`],
                opacity: 0.6,
            };
        }
        console.log('Styles:', style_map);
        this._state.setStyles('zones', style_map);
    }
}

import { Injectable } from '@angular/core';
import { getModule, showMetadata } from '@placeos/ts-client';
import { ViewerLabel, Point } from '@placeos/svg-viewer';
import { first, map } from 'rxjs/operators';

import { BaseClass, HashMap, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { MapPolygonComponent } from 'libs/components/src/lib/map-polygon.component';

const EMPTY_LABEL = { location: { x: -10, y: -10 }, content: '0% Usage' };

export interface ZoneData {
    /** ID of the zone */
    area_id: string;
    /** Number of devices in the zone */
    count: number;

    ambient_temp: number;
    people_count: number;
    humidity: number;
    queue_size: number;
    counter: number;
}

@Injectable()
export class ExploreZonesService extends BaseClass {
    private _statuses: HashMap<string> = {};
    private _labels: HashMap<ViewerLabel> = {};
    private _location: HashMap<Point> = {};
    private _capacity: HashMap<number> = {};
    private _draw: HashMap<boolean> = {};
    private _points: HashMap<[number, number][]> = {};

    private _bind = this._state.level.pipe(
        map((lvl) => {
            if (!lvl) return;
            this._statuses = {};
            const building = this._org.buildings.find(
                (bld) => bld.id === lvl.parent_id
            );
            if (!building) return;
            const system_id =
                building.bindings.area_management ||
                this._org.organisation.bindings.area_management;
            if (!system_id) return;
            const binding = getModule(system_id, 'AreaManagement').binding(
                `${lvl.id}:areas`
            );
            console.log('Bind:', binding);
            this.subscription(
                `zones`,
                binding.listen().subscribe((d) => this.parseData(d))
            );
            this.subscription('binding', binding.bind());
        })
    );

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const zone_metadata = await Promise.all(
            this._org.levels.map((bld) =>
                showMetadata(bld.id, { name: 'map_regions' }).toPromise()
            )
        );
        for (const zone of zone_metadata) {
            const areas = (zone?.details as any)?.areas;
            if (areas) {
                for (const area of areas) {
                    this._capacity[area.id] = area.properties?.capacity || 100;
                    this._capacity[area.id] = area.properties?.capacity || 100;
                    this._draw[area.id] = !!area.properties?.draw_polygon;
                    this._points[area.id] = area.geometry?.coordinates || [];
                }
            }
        }
        this.subscription('bind', this._bind.subscribe());
    }

    public parseData(data?: { value: ZoneData[] }) {
        const value = data?.value || [];
        const labels = [];
        for (const zone of value) {
            const filled = zone.count / (this._capacity[zone.area_id] || 100);
            if (!this._draw[zone.area_id]) {
                this._statuses[zone.area_id] =
                    filled < 0.4 ? 'free' : filled < 0.75 ? 'pending' : 'busy';
            } else if (!this._location[zone.area_id]) continue;
            let content = `${zone.count || 0} ${
                zone.count === 1 ? 'Device' : 'Devices'
            }\n`;
            if (zone.ambient_temp)
                content += `Ambient Temp: ${zone.ambient_temp} ˚C\n`;
            if (zone.people_count > 0)
                content += `${zone.people_count} ${
                    zone.people_count === 1 ? 'Person' : 'People'
                }\n`;
            if (zone.humidity) content += `Humidity: ${zone.humidity}%\n`;
            if (zone.queue_size) content += `Queue Size: ${zone.queue_size}%\n`;
            if (zone.counter) content += `Count: ${zone.queue_size}\n`;
            this._labels[zone.area_id] = {
                location: this._location[zone.area_id],
                content,
            };
            labels.push(this._labels[zone.area_id]);
        }
        this._state.setLabels('zones', labels);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const features = [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const zone_id in this._statuses) {
            if (!this._statuses[zone_id]) continue;
            const colour =
                colours[`zone-${this._statuses[zone_id]}`] ||
                colours[`${this._statuses[zone_id]}`] ||
                DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
            if (this._draw[zone_id]) {
                features.push({
                    location: this._location[zone_id],
                    content: MapPolygonComponent,
                    data: {
                        fill: `${colour}88`,
                        stroke: colour,
                        points: this._points[zone_id],
                    },
                });
            } else {
                style_map[`#${zone_id}`] = {
                    fill: colour,
                    opacity: 0.6,
                };
            }
        }
        this._state.setFeatures('zones', features);
        this._state.setStyles('zones', style_map);
    }
}

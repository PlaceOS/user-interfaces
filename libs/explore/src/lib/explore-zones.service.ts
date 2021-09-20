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

    temperature: number;
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
                    this._location[area.id] = area.properties?.hide_label !== false
                        ? area.properties?.label_location ||
                          (area.geometry?.coordinates?.length
                            ? getCenterPoint(area.geometry?.coordinates)
                            : null)
                        : null;
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
            this._statuses[zone.area_id] =
                filled < 0.4 ? 'free' : filled < 0.75 ? 'pending' : 'busy';
            if (!this._location[zone.area_id]) continue;
            let content = '';
            if (zone.count) {
                content += `${zone.count || 0} ${
                    zone.count === 1 ? 'Device' : 'Devices'
                }\n`;
            }
            if (zone.temperature)
                content += `Temperature: ${zone.temperature} ˚C\n`;
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
                z_index: 100,
            };
            console.log('Zone has Label:', zone.area_id);
            labels.push(this._labels[zone.area_id]);
        }
        console.log('Zone Locations:', this._location);
        this._state.setLabels('zones', labels);
        this.timeout('update', () => this.updateStatus(), 100);
    }

    private updateStatus() {
        const style_map = {};
        const features = [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const zone_id in this._statuses) {
            const colour =
                colours[`zone-${this._statuses[zone_id]}`] ||
                colours[`${this._statuses[zone_id]}`] ||
                DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
            if (this._draw[zone_id]) {
                features.push({
                    location: getCenterPoint(this._points[zone_id]),
                    content: MapPolygonComponent,
                    data: {
                        color: colour,
                        points: this._points[zone_id],
                    },
                    z_index: 10,
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

function getCenterPoint(points: [number, number][]) {
    const diff: HashMap<number> = (points || []).reduce(
        (m, [x, y]) => ({
            x_min: x < m.x_min ? x : m.x_min,
            x_max: x > m.x_max ? x : m.x_max,
            y_min: y < m.y_min ? y : m.y_min,
            y_max: y > m.y_max ? y : m.y_max,
        }),
        {
            x_min: 100,
            x_max: -100,
            y_min: 100,
            y_max: -100,
        }
    );
    return {
        x: diff.x_min + (diff.x_max - diff.x_min) / 2,
        y: diff.y_min + (diff.y_max - diff.y_min) / 2,
    };
}

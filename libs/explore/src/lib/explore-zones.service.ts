import { Injectable } from '@angular/core';
import { getModule, showMetadata } from '@placeos/ts-client';
import { ViewerLabel, Point, ViewerFeature } from '@placeos/svg-viewer';
import { filter, first, map } from 'rxjs/operators';

import { AsyncHandler, HashMap, SettingsService } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { MapPolygonComponent } from 'libs/components/src/lib/map-polygon.component';
import { ExploreSensorInfoComponent } from './explore-sensor-info.component';
import { combineLatest } from 'rxjs';

const EMPTY_LABEL = { location: { x: -10, y: -10 }, content: '0% Usage' };

export interface ZoneData {
    /** ID of the zone */
    area_id: string;
    /** Number of devices in the zone */
    count: number;
    area_count_key: string;

    temperature: number;
    people_count: number;
    people_count_sum: number;
    humidity: number;
    queue_size: number;
    counter: number;
}

@Injectable()
export class ExploreZonesService extends AsyncHandler {
    private _statuses: HashMap<string> = {};
    private _count_key: HashMap<string> = {};
    private _location: HashMap<Point> = {};
    private _capacity: HashMap<number> = {};
    private _draw: HashMap<boolean> = {};
    private _points: HashMap<[number, number][]> = {};
    private _features: ViewerFeature[] = [];

    private _bind = combineLatest([
        this._org.active_building,
        this._state.level,
    ]).pipe(
        filter(([bld, lvl]) => !!bld && !!lvl),
        map(([_, lvl]) => {
            if (!lvl) return;
            this._statuses = {};
            let system_id: any = this._org.binding('area_management');
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
                showMetadata(bld.id, 'map_regions').toPromise()
            )
        );
        for (const zone of zone_metadata) {
            const areas = (zone?.details as any)?.areas;
            if (!areas) continue;
            for (const area of areas) {
                const {
                    capacity,
                    hide_label,
                    label_location,
                    draw_polygon,
                    area_count_key,
                } = area.properties || {};
                const { coordinates } = area.geometry || {};
                this._capacity[area.id] = capacity || 100;
                this._count_key[area.id] = area_count_key || '';
                this._location[area.id] =
                    hide_label === false
                        ? label_location ||
                          (coordinates?.length
                              ? getCenterPoint(coordinates)
                              : null)
                        : null;
                this._draw[area.id] =
                    !!draw_polygon ||
                    this._settings.get('app.explore.use_zone_polygons');
                this._points[area.id] = coordinates || [];
            }
        }
        this.updateStatus();
        this.subscription('bind', this._bind.subscribe());
    }

    public parseData(data?: { value: ZoneData[] }) {
        const value = data?.value || [];
        const labels = [];
        const features = [];

        for (const zone of value) {
            const count =
                zone[
                    this._count_key[zone.area_id] ||
                        this._settings.get('app.explore.area_count_key') ||
                        'count'
                ];
            const filled = count / (this._capacity[zone.area_id] || 100);
            this._statuses[zone.area_id] =
                filled < 0.4 ? 'free' : filled < 0.75 ? 'pending' : 'busy';
            if (!this._location[zone.area_id]) continue;
            let content = '';
            if (zone.count) {
                content += `${zone.count || 0} User Device${
                    zone.count === 1 ? '' : 's'
                }\n`;
            }
            if (zone.temperature)
                content += `Temperature: ${zone.temperature} ˚C\n`;
            if (zone.people_count > 0)
                content += `${zone.people_count_sum} ${
                    zone.people_count_sum === 1 ? 'Person' : 'People'
                }\n`;
            if (zone.humidity) content += `Humidity: ${zone.humidity}%\n`;
            if (zone.queue_size) content += `Queue Size: ${zone.queue_size}%\n`;
            if (zone.counter) content += `Count: ${zone.counter}\n`;
            labels.push({
                location: this._location[zone.area_id],
                content,
                z_index: 100,
            });
            if (
                this._settings.get('app.explore.show_simple_sensor_info') &&
                (zone.temperature || zone.humidity)
            ) {
                features.push({
                    location: this._location[zone.area_id],
                    content: ExploreSensorInfoComponent,
                    data: { temp: zone.temperature, humidity: zone.humidity },
                    z_index: 98,
                });
            }
        }
        this._features = features;
        if (!this._settings.get('app.explore.show_simple_sensor_info')) {
            this._state.setLabels('zones', labels);
        }
        this.updateStatus();
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
                    track_id: `zone:${zone_id}`,
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
        this._state.setFeatures('zones', [...features, this._features]);
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

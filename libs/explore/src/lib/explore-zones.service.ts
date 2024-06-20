import { Injectable } from '@angular/core';
import { getModule, showMetadata } from '@placeos/ts-client';
import { Point, ViewerFeature } from '@placeos/svg-viewer';
import { debounceTime, filter, first, map } from 'rxjs/operators';

import { AsyncHandler, HashMap, SettingsService } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreSensorInfoComponent } from './explore-sensor-info.component';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    MapCanvasComponent,
    Polygon,
} from 'libs/components/src/lib/map-canvas.component';

export interface ZoneData {
    /** ID of the zone */
    map_id?: string;
    /** ID of the zone */
    area_id: string;
    /** Max occupancy allowed in zone */
    capacity: number;
    /** Number of devices in the zone */
    count: number;
    /** Key in the ZoneData to use for people count */
    area_count_key: string;
    /** Average temperature from the sensors in the zone */
    temperature: number;
    /** Average humidity from the sensors in the zone */
    humidity: number;
    people_count: number;
    people_count_sum: number;
    queue_size: number;
    counter: number;
    at_location?: number;
}

@Injectable()
export class ExploreZonesService extends AsyncHandler {
    private _area_list: string[] = [];
    private _statuses: HashMap<string> = {};
    private _count_key: HashMap<string> = {};
    private _location: HashMap<Point> = {};
    private _label_location: HashMap<Point> = {};
    private _capacity: HashMap<number> = {};
    private _draw: HashMap<boolean> = {};
    private _points: HashMap<[number, number][]> = {};
    private _features: ViewerFeature[] = [];
    private _polygons$ = new BehaviorSubject<Polygon[]>([]);

    private _bind = combineLatest([
        this._org.active_building,
        this._state.level,
        this._state.options,
    ]).pipe(
        filter(([bld, lvl, { is_public }]) => !!bld && !!lvl && !is_public),
        map(([_, lvl]) => {
            this._statuses = {};
            let system_id: any = this._org.binding('area_management');
            if (!system_id) return;
            const bind_areas = getModule(system_id, 'AreaManagement').binding(
                `${lvl.id}:areas`
            );
            const bind_zone = getModule(system_id, 'AreaManagement').binding(
                `${lvl.id}`
            );
            const zones = combineLatest([
                bind_areas.listen(),
                bind_zone.listen(),
            ]).pipe(
                debounceTime(100),
                map(([a, z]) => [
                    ...(a?.value || []),
                    ...(z?.value || []).filter((_) => _.location === 'area'),
                ])
            );
            this.subscription(
                `zones-status`,
                zones.subscribe((l) => this.parseData(l))
            );
            this.subscription('binding', bind_areas.bind());
            this.subscription('zone-binding', bind_zone.bind());
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
        this._area_list = [];
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
                this._location[area.id] = coordinates?.length
                    ? getCenterPoint(coordinates)
                    : null;
                this._label_location[area.id] =
                    hide_label === false
                        ? label_location || this._location[area.id]
                        : null;
                this._draw[area.id] =
                    !!draw_polygon ||
                    this._settings.get('app.explore.use_zone_polygons');
                this._points[area.id] = coordinates || [];
                this._area_list.push(area.map_id || area.id);
            }
        }
        this._state.setFeatures('zones-canvas', [
            {
                track_id: 'zones-canvas',
                location: { x: 0.5, y: 0.5 },
                content: MapCanvasComponent,
                data: {
                    polygons$: this._polygons$,
                    draw_points: false,
                    draw_labels: false,
                },
            },
        ]);
        this.updateStatus();
        this.subscription('bind', this._bind.subscribe());
    }

    public parseData(value: ZoneData[] = []) {
        const labels = [];
        const features = [];

        for (const zone of value) {
            const id = zone.map_id || zone.area_id;
            // if (!this._area_list.includes(id)) continue;
            const capacity = zone.capacity || this._capacity[id] || 100;
            const count =
                zone[
                    this._count_key[id] ||
                        this._settings.get('app.explore.area_count_key') ||
                        'count'
                ] || 0;
            const filled = count / capacity;
            this._statuses[id] = zone.at_location
                ? 'busy'
                : filled < 0.4
                ? 'free'
                : filled < 0.75
                ? 'pending'
                : 'busy';
            if (!this._location[id]) continue;
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
            if (
                this._label_location[id] &&
                !this._settings.get('app.explore.show_zone_labels')
            ) {
                labels.push({
                    location: this._label_location[id],
                    content,
                    z_index: 100,
                });
            }
            if (
                this._settings.get('app.explore.show_zone_sensor_info') &&
                (zone.temperature || zone.humidity)
            ) {
                features.push({
                    track_id: `sensors:${id}`,
                    location: this._location[id],
                    content: ExploreSensorInfoComponent,
                    data: {
                        id,
                        temp: zone.temperature || 10,
                        humidity: zone.humidity || 10,
                    },
                    z_index: 98,
                });
            }
        }
        this._features = features;
        this._state.setLabels('zones', labels);
        this.updateStatus();
    }

    private updateStatus() {
        const style_map = {};
        const features = [];
        const colours = this._settings.get('app.explore.colors') || {};
        const polygons = [];
        for (const zone_id in this._statuses) {
            const colour =
                colours[`zone-${this._statuses[zone_id]}`] ||
                colours[`${this._statuses[zone_id]}`] ||
                DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
            if (this._draw[zone_id]) {
                polygons.push({
                    name: zone_id,
                    points: this._points[zone_id],
                    color: colour,
                } as Polygon);
            } else {
                style_map[`#${zone_id}`] = {
                    fill: colour,
                    opacity: 0.6,
                };
            }
        }
        this._polygons$.next(polygons);
        this._state.setFeatures('zones', [...features, ...this._features]);
        this._state.setStyles('zones-styles', style_map);
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

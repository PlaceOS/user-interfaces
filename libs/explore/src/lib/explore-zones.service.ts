import {
    effect,
    inject,
    Injectable,
    Injector,
    signal,
    untracked,
} from '@angular/core';
import {
    AsyncHandler,
    firstValueWhere,
    i18n,
    OrganisationService,
    Point,
    SettingsService,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';

import {
    MapCanvasComponent,
    Polygon,
} from 'libs/components/src/lib/map-canvas.component';
import { ExploreIconComponent } from './explore-icon.component';
import { ExploreSensorInfoComponent } from './explore-sensor-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';

export interface ZoneData {
    [key: string]: string | number | undefined;
    /** ID of the matching map element */
    map_id?: string;
    /** ID of the source area */
    area_id: string;
    /** Max occupancy allowed in zone */
    capacity?: number;
    /** Number of devices in the zone */
    count?: number;
    /** Average temperature from the sensors in the zone */
    temperature?: number;
    /** Average humidity from the sensors in the zone */
    humidity?: number;
    people_count?: number;
    people_count_sum?: number;
    queue_size?: number;
    counter?: number;
    at_location?: number;
    location?: string;
}

interface ZoneBindingData {
    value?: ZoneData[];
}

interface ZoneMetadataArea {
    id: string;
    map_id?: string;
    properties?: {
        capacity?: number;
        hide_label?: boolean;
        label_location?: Point;
        draw_polygon?: boolean;
        area_count_key?: string;
    };
    geometry?: { coordinates?: [number, number][] };
}

type ZoneStatus = 'busy' | 'free' | 'pending';

@Injectable()
export class ExploreZonesService extends AsyncHandler {
    private readonly _state = inject(ExploreStateService);
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _injector = inject(Injector);

    private _count_key: Record<string, string> = {};
    private _location: Record<string, Point | null> = {};
    private _label_location: Record<string, Point | null> = {};
    private _capacity: Record<string, number> = {};
    private _draw: Record<string, boolean> = {};
    private _points: Record<string, [number, number][]> = {};
    private readonly _polygons = signal<Polygon[]>([]);

    private readonly _area_data = signal<ZoneBindingData | null>(null);
    private readonly _zone_data = signal<ZoneBindingData | null>(null);

    constructor() {
        super();
        // Bind to the area management state of the active level
        effect(() => {
            const bld = this._org.active_building();
            const lvl = this._state.level();
            const { is_public } = this._state.options();
            if (!bld || !lvl || is_public) return;
            untracked(() => this._bindToLevel(lvl.id));
        });
        // Process zone data from the level's bindings
        effect(() => {
            this._area_data();
            this._zone_data();
            this._state.spaces();
            this.timeout('parse_data', () => this._parseBindingData(), 100);
        });
        this.init();
    }

    public async init(): Promise<void> {
        await firstValueWhere(
            this._org.initialised,
            (_) => !!_,
            this._injector,
        );
        const zone_metadata = await Promise.all(
            this._org.levels.map((bld) =>
                showMetadata(bld.id, 'map_regions').catch(() => null),
            ),
        );
        this._capacity = {};
        this._count_key = {};
        this._location = {};
        this._label_location = {};
        this._draw = {};
        this._points = {};
        const use_zone_polygons = this._settings.get(
            'app.explore.use_zone_polygons',
        );
        for (const zone of zone_metadata) {
            const areas = (zone?.details as { areas?: ZoneMetadataArea[] })
                ?.areas;
            if (!areas) continue;
            for (const area of areas) {
                const id = area.map_id || area.id;
                const {
                    capacity,
                    hide_label,
                    label_location,
                    draw_polygon,
                    area_count_key,
                } = area.properties || {};
                const { coordinates } = area.geometry || {};
                this._capacity[id] = capacity || 100;
                this._count_key[id] = area_count_key || '';
                this._location[id] = coordinates?.length
                    ? getCenterPoint(coordinates)
                    : null;
                this._label_location[id] =
                    hide_label === false
                        ? label_location || this._location[id]
                        : null;
                this._draw[id] = !!draw_polygon || use_zone_polygons;
                this._points[id] = coordinates || [];
            }
        }
        this._state.setFeatures('zones-canvas', [
            {
                track_id: 'zones-canvas',
                location: { x: 0, y: 0, w: 1, h: 1 },
                content: MapCanvasComponent,
                full_size: true,
                data: {
                    polygons: this._polygons.asReadonly(),
                    draw_points: false,
                    draw_labels: false,
                },
            },
        ]);
        this._parseBindingData();
    }

    private _bindToLevel(zone_id: string): void {
        this.unsub('binding');
        this.unsub('zone-binding');
        this._area_data.set(null);
        this._zone_data.set(null);
        this._state.setLabels('zones', []);
        this._updateStatus({});
        const mod = this._org.module('area_management', 'AreaManagement');
        if (!mod) return;
        const bind_areas = mod.variable(`${zone_id}:areas`);
        const bind_zone = mod.variable(`${zone_id}`);
        this.subscription(
            'binding',
            bind_areas.bindThenSubscribe((d) => this._area_data.set(d)),
        );
        this.subscription(
            'zone-binding',
            bind_zone.bindThenSubscribe((d) => this._zone_data.set(d)),
        );
    }

    private _parseBindingData(): void {
        const areas = this._area_data()?.value || [];
        const zones = (this._zone_data()?.value || []).filter(
            (_) => _.location === 'area',
        );
        this.parseData([...areas, ...zones]);
    }

    public parseData(value: ZoneData[] = []): void {
        const labels: ViewerLabel[] = [];
        const features: ViewerFeature[] = [];
        const statuses: Record<string, ZoneStatus> = {};
        const temp_unit = this._settings.get('app.use_imperial_units')
            ? 'F'
            : 'C';
        const count_key =
            this._settings.get('app.explore.area_count_key') || 'count';
        const show_zone_labels = this._settings.get(
            'app.explore.show_zone_labels',
        );
        const show_sensor_info = this._settings.get(
            'app.explore.show_zone_sensor_info',
        );
        const room_ids = new Set(
            this._state
                .spaces()
                .flatMap((space) => [space.id, space.map_id])
                .filter((id) => !!id),
        );
        for (const zone of value) {
            const id = zone.map_id || zone.area_id;
            const has_room =
                room_ids.has(zone.area_id) ||
                (!!zone.map_id && room_ids.has(zone.map_id));
            const capacity = zone.capacity || this._capacity[id] || 100;
            const count = Number(zone[this._count_key[id] || count_key] ?? 0);
            const filled = count / capacity;
            if (!has_room) {
                statuses[id] = zone.at_location
                    ? 'busy'
                    : filled < 0.4
                      ? 'free'
                      : filled < 0.75
                        ? 'pending'
                        : 'busy';
            }
            if (!this._location[id]) continue;
            let content = '';
            if (zone.count) {
                content +=
                    i18n('EXPLORE.DEVICE_COUNT', { count: zone.count }) + '\n';
            }
            if (zone.temperature != null)
                content += i18n('EXPLORE.SENSORS_TEMP', {
                    value: `${zone.temperature} °${temp_unit}\n`,
                });
            if (zone.people_count > 0)
                content += i18n('COMMON.PEOPLE_COUNT', {
                    count: `${zone.people_count_sum}\n`,
                });
            if (zone.humidity != null)
                content += i18n('EXPLORE.SENSORS_HUMIDITY', {
                    value: `${zone.humidity}\n`,
                });
            if (zone.queue_size)
                content += i18n('EXPLORE.SENSORS_QUEUE', {
                    value: `${zone.queue_size}\n`,
                });
            if (zone.counter)
                content += i18n('EXPLORE.SENSORS_COUNT', {
                    value: `${zone.counter}\n`,
                });
            if (!has_room && this._label_location[id] && show_zone_labels) {
                labels.push({
                    location: this._label_location[id],
                    content,
                    z_index: 100,
                });
            }
            if (
                has_room &&
                show_sensor_info &&
                (zone.temperature != null || zone.humidity != null)
            ) {
                features.push({
                    track_id: `sensors:${id}`,
                    location: this._location[id],
                    content: ExploreSensorInfoComponent,
                    data: {
                        id,
                        temp: zone.temperature ?? 10,
                        temp_unit,
                        humidity: zone.humidity ?? 10,
                    },
                    z_index: 100,
                });
            }
        }
        this._state.setLabels('zones', labels);
        this._updateStatus(statuses, features);
    }

    private _updateStatus(
        statuses: Record<string, ZoneStatus>,
        sensor_features: ViewerFeature[] = [],
    ): void {
        const style_map: ViewerStyles = {};
        const features: ViewerFeature[] = [];
        const colours = this._settings.get('app.explore.colors') || {};
        const polygons: Polygon[] = [];
        for (const [zone_id, status] of Object.entries(statuses)) {
            const colour =
                colours[`zone-${status}`] ||
                colours[status] ||
                DEFAULT_COLOURS[status];
            if (this._draw[zone_id]) {
                polygons.push({
                    name: zone_id,
                    points: this._points[zone_id],
                    color: colour,
                });
            } else if (
                this._state.has('style', zone_id, ['zones', 'zones-styles'])
            ) {
                features.push({
                    location: zone_id,
                    content: ExploreIconComponent,
                    data: {
                        icon: { content: 'pin_drop' },
                    },
                    full_size: true,
                    z_index: 98,
                });
            } else {
                style_map[`#${zone_id}`] = {
                    fill: colour,
                    opacity: 0.6,
                };
            }
        }
        this._polygons.set(polygons);
        this._state.setFeatures('zones', features);
        this._state.setFeatures('sensors', sensor_features);
        this._state.setStyles('zones-styles', style_map);
    }
}

function getCenterPoint(points: [number, number][]): Point {
    const [first_x, first_y] = points[0];
    let x_min = first_x;
    let x_max = first_x;
    let y_min = first_y;
    let y_max = first_y;
    for (const [x, y] of points) {
        x_min = Math.min(x_min, x);
        x_max = Math.max(x_max, x);
        y_min = Math.min(y_min, y);
        y_max = Math.max(y_max, y);
    }
    return {
        x: x_min + (x_max - x_min) / 2,
        y: y_min + (y_max - y_min) / 2,
    };
}

import { Injectable } from '@angular/core';
import { Point, ViewAction, ViewerFeature, ViewerLabel, ViewerStyles } from '@yuion/svg-viewer';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import { BuildingLevel, OrganisationService } from '@user-interfaces/organisation';
import { SpacesService } from '@user-interfaces/spaces';


export interface MapOptions {
    show_zones?: boolean;
    show_devices?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ExploreStateService extends BaseClass {
    /** Currently active level */
    private _level = new BehaviorSubject<BuildingLevel>(null);
    /** Currently active level */
    private _positions = new BehaviorSubject<{ zoom: number; center: Point }>({
        zoom: 1,
        center: { x: 0.5, y: 0.5 },
    });
    /** Mapping of groups to their styles */
    private _styles = new BehaviorSubject<HashMap<ViewerStyles>>({});
    /** Mapping of groups to their features */
    private _features = new BehaviorSubject<HashMap<ViewerFeature[]>>({});
    /** Mapping of groups to their actions */
    private _actions = new BehaviorSubject<HashMap<ViewAction[]>>({});
    /** Mapping of groups to their actions */
    private _labels = new BehaviorSubject<HashMap<ViewerLabel[]>>({});

    private _options = new BehaviorSubject<MapOptions>({});

    /** Currently active level */
    public readonly level = this._level.asObservable();
    /** Spaces associated with the active level */
    public readonly spaces = combineLatest([this._level, this._spaces.list]).pipe(
        map((details) => details[1].filter((space) => space.zones.includes(details[0].id)))
    );
    /** Currently shown space's map URL */
    public readonly map_url = this._level.pipe(map((lvl) => (lvl ? lvl.map_id : '') || ''));
    /** Currently center and zoom positions for map */
    public readonly map_positions = this._positions.asObservable();
    /** Currently center and zoom positions for map */
    public readonly map_features = combineLatest([this._features, this._options]).pipe(map(details => {
        const [features, options] = details;
        let list = [];
        for (const key in features) {
            if (key !== 'devices' || (options.show_zones && this._settings.get('app.explore.display_devices') !== false)) {
                list = list.concat(features[key]);
            }
        }
        return list;
    }));
    /** Currently center and zoom positions for map */
    public readonly map_actions = this._actions.pipe(map(i => Object.values(i).reduce((list, a) => list.concat(a), [])));
    /** Currently center and zoom positions for map */
    public readonly map_labels = combineLatest([this._labels, this._options]).pipe(map(details => {
        const [labels, options] = details;
        let list = [];
        for (const key in labels) {
            if (key !== 'zones' || options.show_zones) {
                list = list.concat(labels[key]);
            }
        }
        return list;
    }));
    /** Current map styles */
    public readonly map_styles = combineLatest([this._styles, this._options]).pipe(
        map((details) => {
            const [styles, options] = details;
            const style_mappings = Object.keys(styles).reduce(
                (a, h) => ({ ...a, ...styles[h] }),
                {}
            );
            if (!options.show_zones) {
                style_mappings['#zones'] = { display: 'none' };
                style_mappings['#Zones'] = { display: 'none' };
            }
            style_mappings['text'] = { display: 'none' };
            console.log('Map Styles:', style_mappings);
            return style_mappings;
        })
    );

    public readonly options = this._options.asObservable();

    public get positions() {
        return this._positions.getValue();
    }

    constructor(private _org: OrganisationService, private _spaces: SpacesService, private _settings: SettingsService) {
        super();
        this._org.initialised.pipe(first((_) => _)).subscribe(() => {
            this.subscription(
                'building',
                this._org.active_building.pipe(filter((_) => !!_)).subscribe((bld) => {
                    const level = this._level.getValue();
                    const level_list = this._org.levelsForBuilding(bld);
                    const has_level = level_list.find((lvl) => level?.id === lvl.id);
                    if (!has_level && level_list.length) {
                        this.setLevel(level_list[0].id);
                    }
                })
            );
        });
    }

    public setOptions(options: MapOptions) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setLevel(zone_id: string) {
        const lvl = this._org.levelWithID([zone_id]);
        if (lvl) {
            this._level.next(lvl);
        }
    }

    public setStyles(name: string, styles: ViewerStyles) {
        const style_map = this._styles.getValue();
        style_map[name] = styles;
        this._styles.next(style_map);
    }

    public setFeatures(name: string, features: ViewerFeature[]) {
        const feature_map = this._features.getValue();
        feature_map[name] = features;
        this._features.next(feature_map);
    }

    public setActions(name: string, actions: ViewAction[]) {
        const actions_map = this._actions.getValue();
        actions_map[name] = actions;
        this._actions.next(actions_map);
    }

    public setLabels(name: string, labels: ViewerLabel[]) {
        const labels_map = this._labels.getValue();
        labels_map[name] = labels;
        this._labels.next(labels_map);
    }

    public setPositions(zoom: number, center: Point) {
        this._positions.next({ zoom, center });
    }
}

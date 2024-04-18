import { Injectable } from '@angular/core';
import {
    Point,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';
import { querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import {
    AsyncHandler,
    HashMap,
    SettingsService,
    unique,
} from '@placeos/common';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import { SpacesService } from 'libs/spaces/src/lib/spaces.service';

export interface MapOptions {
    is_public: boolean;
    /** List of keys to ignore for any map resource */
    disable?: string[];
    /** List of keys to ignore for map labels */
    disable_labels?: string[];
    /** List of keys to ignore for map actions */
    disable_actions?: string[];
    /** List of keys to ignore for map features */
    disable_features?: string[];
    /** List of keys to ignore for map styles */
    disable_styles?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class ExploreStateService extends AsyncHandler {
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

    private _options = new BehaviorSubject<MapOptions>({
        is_public: false,
        disable: ['zones', 'devices'],
    });

    private _message = new BehaviorSubject<string>('');

    /** Currently active level */
    public readonly level = this._level.asObservable();
    /** Currently active level */
    public readonly message = this._message.asObservable();
    /** Spaces associated with the active level */
    public readonly spaces = combineLatest([
        this._level,
        this._org.initialised,
    ]).pipe(
        filter(([_, initialised]) => initialised),
        switchMap(([level]) =>
            querySystems({
                zone_id: level?.id || this._org.organisation.id,
                limit: 50,
            }).pipe(
                map(({ data }) => data.map((_) => new Space(_ as any))),
                catchError((_) => of([] as Space[]))
            )
        ),
        shareReplay(1)
    );
    /** Currently shown space's map URL */
    public readonly map_url = this._level.pipe(
        map((lvl) => (lvl ? lvl.map_id : '') || '')
    );
    /** Currently center and zoom positions for map */
    public readonly map_positions = this._positions.asObservable();
    /** Currently center and zoom positions for map */
    public readonly map_features = combineLatest([
        this._features,
        this._options,
    ]).pipe(
        debounceTime(200),
        map(([features, options]) => {
            let list = [];
            for (const key in features) {
                if (
                    options.disable?.includes(key) ||
                    options.disable_features?.includes(key) ||
                    (key === 'zones-canvas' &&
                        options.disable?.includes('zones'))
                )
                    continue;
                list = list.concat(features[key]);
            }
            return list;
        })
    );
    /** Currently center and zoom positions for map */
    public readonly map_actions = combineLatest([
        this._actions,
        this._options,
    ]).pipe(
        debounceTime(200),
        map(([actions, options]) => {
            let list = [];
            for (const key in actions) {
                if (
                    options.disable?.includes(key) ||
                    options.disable_actions?.includes(key)
                )
                    continue;
                list = list.concat(actions[key]);
            }
            return list;
        })
    );
    /** Currently center and zoom positions for map */
    public readonly map_labels = combineLatest([
        this._labels,
        this._options,
    ]).pipe(
        debounceTime(200),
        map(([labels, options]) => {
            let list = [];
            for (const key in labels) {
                if (
                    options.disable?.includes(key) ||
                    options.disable_labels?.includes(key)
                )
                    continue;
                list = list.concat(labels[key]);
            }
            return list;
        })
    );
    /** Current map styles */
    public readonly map_styles = combineLatest([
        this._styles,
        this._options,
    ]).pipe(
        debounceTime(200),
        map(([styles, options]) => {
            let style_mappings = { text: { display: 'none' } };
            for (const key in styles) {
                if (
                    options.disable?.includes(key) ||
                    options.disable_styles?.includes(key)
                )
                    continue;
                style_mappings = { ...style_mappings, ...styles[key] };
            }
            if (options.disable?.includes('zones')) {
                style_mappings['#zones'] = { display: 'none' };
                style_mappings['#Zones'] = { display: 'none' };
            }
            return style_mappings;
        })
    );

    public readonly options = this._options.asObservable();

    public get positions() {
        return this._positions.getValue();
    }

    public get active_level() {
        return this._level.getValue();
    }

    constructor(
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _settings: SettingsService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._org.active_levels
            .pipe(filter((_) => !!_))
            .subscribe((level_list) => {
                const level = this._level.getValue();
                const has_level = level_list.find(
                    (lvl) => level?.id === lvl.id
                );
                if (!has_level && level_list.length) {
                    this.setLevel(level_list[0].id);
                }
                if (this._settings.get('app.explore.disable_actions')) {
                    this.setOptions({
                        disable_actions: this._settings.get(
                            'app.explore.disable_actions'
                        ),
                    });
                }
                if (this._settings.get('app.explore.disable_labels')) {
                    this.setOptions({
                        disable_labels: this._settings.get(
                            'app.explore.disable_labels'
                        ),
                    });
                }
                if (this._settings.get('app.explore.disable_features')) {
                    this.setOptions({
                        disable_features: this._settings.get(
                            'app.explore.disable_features'
                        ),
                    });
                }
                if (this._settings.get('app.explore.disable_styles')) {
                    this.setOptions({
                        disable_styles: this._settings.get(
                            'app.explore.disable_styles'
                        ),
                    });
                }
            });
    }

    public setOptions(options: Partial<MapOptions>) {
        const old_options = this._options.getValue();
        const disable = unique([
            ...(options.disable || old_options.disable),
            ...(this._settings.get('app.explore.disable') || []),
        ]);
        this._options.next({
            ...this._options.getValue(),
            ...options,
            disable,
        });
    }

    public reset() {
        this._styles.next({});
        this._features.next({});
        this._labels.next({});
        this._actions.next({});
        this._options.next({
            is_public: false,
            disable: ['zones', 'devices'],
        });
        this.setPositions(1, { x: 0.5, y: 0.5 });
    }

    public setLevel(zone_id: string) {
        const lvl = this._org.levelWithID([zone_id]);
        if (lvl) this._level.next(lvl);
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

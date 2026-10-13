import {
    computed,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';
import {
    Point,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/common';
import { querySystems } from '@placeos/ts-client';

import {
    BuildingLevel,
    HashMap,
    OrganisationService,
    SettingsService,
    Space,
    unique,
} from '@placeos/common';

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
export class ExploreStateService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _initialised = this._org.initialised;
    private _active_levels = this._org.active_levels;
    private _active_building = this._org.active_building;
    private _overrides = computed(() =>
        this._settings.overrides instanceof Function
            ? this._settings.overrides()
            : [],
    );

    /** Currently active level */
    private _level = signal<BuildingLevel>(null);
    /** Current center and zoom positions for the map */
    private _positions = signal<{ zoom: number; center: Point }>({
        zoom: 1,
        center: { x: 0.5, y: 0.5 },
    });
    /** Mapping of groups to their styles */
    private _styles = signal<HashMap<ViewerStyles>>({});
    /** Mapping of groups to their features */
    private _features = signal<HashMap<ViewerFeature[]>>({});
    /** Mapping of groups to their actions */
    private _actions = signal<HashMap<ViewAction[]>>({});
    /** Mapping of groups to their labels */
    private _labels = signal<HashMap<ViewerLabel[]>>({});

    private _options = signal<MapOptions>({
        is_public: false,
        disable: ['zones', 'devices', 'sensors'],
    });

    private _message = signal<string>('');

    /** Currently active level */
    public readonly level = this._level.asReadonly();
    /** Message to display over the map */
    public readonly message = this._message.asReadonly();
    /** Spaces associated with the active level */
    private _spaces = resource({
        params: () => ({
            level: this._level(),
            initialised: this._initialised(),
        }),
        loader: ({ params: { level, initialised } }) =>
            initialised
                ? querySystems({
                      zone_id: level?.id || this._org.organisation.id,
                      limit: 50,
                  })
                      .then(({ data }) => data.map((_) => new Space(_ as any)))
                      .catch((_) => [] as Space[])
                : Promise.resolve([] as Space[]),
    });
    /** Spaces associated with the active level */
    public readonly spaces = computed<Space[]>(
        () => this._spaces.value() ?? [],
    );
    /** Currently shown level's map URL */
    public readonly map_url = computed(() => this._level()?.map_id || '');
    /** Current center and zoom positions for the map */
    public readonly map_positions = this._positions.asReadonly();
    /** Currently visible features for the map */
    public readonly map_features = computed<ViewerFeature[]>(() => {
        this._overrides();
        const features = this._features();
        const disable = this._disabledGroups(this._options(), 'features');
        let list = [];
        for (const key in features) {
            if (
                disable.includes(key) ||
                (key === 'zones-canvas' && disable.includes('zones'))
            )
                continue;
            list = list.concat(features[key]);
        }
        return list;
    });
    /** Currently active user actions for the map */
    public readonly map_actions = computed<ViewAction[]>(() => {
        this._overrides();
        const actions = this._actions();
        const disable = this._disabledGroups(this._options(), 'actions');
        let list = [];
        for (const key in actions) {
            if (disable.includes(key)) continue;
            list = list.concat(actions[key]);
        }
        return list;
    });
    /** Currently visible labels for the map */
    public readonly map_labels = computed<ViewerLabel[]>(() => {
        this._overrides();
        const labels = this._labels();
        const disable = this._disabledGroups(this._options(), 'labels');
        let list = [];
        for (const key in labels) {
            if (disable.includes(key)) continue;
            list = list.concat(labels[key]);
        }
        return list;
    });
    /** Current map styles */
    public readonly map_styles = computed<ViewerStyles>(() => {
        this._overrides();
        const styles = this._styles();
        const disable = this._disabledGroups(this._options(), 'styles');
        let style_mappings = { text: { display: 'none' } };
        for (const key in styles) {
            if (disable.includes(key)) continue;
            style_mappings = { ...style_mappings, ...styles[key] };
        }
        if (disable.includes('zones')) {
            style_mappings['#zones'] = { display: 'none' };
            style_mappings['#Zones'] = { display: 'none' };
        }
        return style_mappings;
    });

    public readonly options = this._options.asReadonly();

    public get positions() {
        return this._positions();
    }

    public get active_level() {
        return this._level();
    }

    constructor() {
        effect(() => {
            if (!this._initialised()) return;
            const level_list = this._active_levels();
            if (!level_list) return;
            untracked(() => {
                const level = this._level();
                const has_level = level_list.find(
                    (lvl) => level?.id === lvl.id,
                );
                if (!has_level && level_list.length) {
                    this.setLevel(level_list[0].id);
                }
            });
        });
        effect(() => {
            if (!this._initialised()) return;
            const bld = this._active_building();
            if (!bld) return;
            untracked(() => this.setOptions({}));
        });
    }

    public setOptions(options: Partial<MapOptions>) {
        const old_options = this._options();
        const disable = unique([
            ...this._normaliseDisabledOption(
                options.disable ?? old_options.disable,
            ),
            ...this._normaliseDisabledSetting('app.explore.disable'),
        ]);
        this._options.set({
            ...old_options,
            ...options,
            disable,
            disable_styles: this._normaliseDisabledOption(
                options.disable_styles ?? old_options.disable_styles,
            ),
            disable_actions: this._normaliseDisabledOption(
                options.disable_actions ?? old_options.disable_actions,
            ),
            disable_labels: this._normaliseDisabledOption(
                options.disable_labels ?? old_options.disable_labels,
            ),
            disable_features: this._normaliseDisabledOption(
                options.disable_features ?? old_options.disable_features,
            ),
        });
    }

    public reset() {
        this._styles.set({});
        this._features.set({});
        this._labels.set({});
        this._actions.set({});
        this._options.set({
            is_public: false,
            disable: unique([
                'zones',
                'devices',
                'sensors',
                ...this._normaliseDisabledSetting('app.explore.disable'),
            ]),
        });
        this.setPositions(1, { x: 0.5, y: 0.5 });
    }

    public setLevel(zone_id: string) {
        const lvl = this._org.levelWithID([zone_id]);
        if (lvl) this._level.set(lvl);
    }

    public setStyles(name: string, styles: ViewerStyles) {
        this._styles.update((map) => ({ ...map, [name]: styles }));
    }

    public setFeatures(name: string, features: ViewerFeature[]) {
        this._features.update((map) => ({ ...map, [name]: features }));
    }

    public setActions(name: string, actions: ViewAction[]) {
        this._actions.update((map) => ({ ...map, [name]: actions }));
    }

    public setLabels(name: string, labels: ViewerLabel[]) {
        this._labels.update((map) => ({ ...map, [name]: labels }));
    }

    public setPositions(zoom: number, center: Point) {
        this._positions.set({ zoom, center });
    }

    public has(
        type: 'style' | 'feature' | 'action' | 'label',
        id: string,
        exclude: string[] = [],
    ): boolean {
        if (type === 'style') {
            const styles_map = untracked(this._styles);
            for (const group in styles_map) {
                if (exclude.includes(group)) continue;
                const styles = styles_map[group];
                if (id in styles || `#${id}` in styles) return true;
            }
        } else if (type === 'feature') {
            const feature_map = untracked(this._features);
            for (const group in feature_map) {
                if (exclude.includes(group)) continue;
                for (const feature of feature_map[group]) {
                    if (feature.location === id) return true;
                }
            }
        } else if (type === 'action') {
            const actions_map = untracked(this._actions);
            for (const group in actions_map) {
                if (exclude.includes(group)) continue;
                for (const feature of actions_map[group]) {
                    if (feature.id === id) return true;
                }
            }
        } else if (type === 'label') {
            const labels_map = untracked(this._labels);
            for (const group in labels_map) {
                if (exclude.includes(group)) continue;
                for (const feature of labels_map[group]) {
                    if (feature.location === id) return true;
                }
            }
        }
        return false;
    }

    /**
     * Combined list of disabled groups for the given resource type, merging
     * the current map options with the `app.explore.disable*` settings
     */
    private _disabledGroups(
        options: MapOptions,
        type: 'features' | 'actions' | 'labels' | 'styles',
    ): string[] {
        return unique([
            ...this._normaliseDisabledOption(options.disable),
            ...this._normaliseDisabledSetting('app.explore.disable'),
            ...this._normaliseDisabledOption(options[`disable_${type}`]),
            ...this._normaliseDisabledSetting(`app.explore.disable_${type}`),
        ]);
    }

    private _normaliseDisabledSetting(name: string): string[] {
        return this._normaliseDisabledOption(this._settings.get(name));
    }

    private _normaliseDisabledOption(value: unknown): string[] {
        if (value instanceof Array) return value.filter((_) => !!_);
        if (typeof value === 'string') {
            return value
                .split(',')
                .map((_) => _.trim())
                .filter((_) => !!_);
        }
        return [];
    }
}

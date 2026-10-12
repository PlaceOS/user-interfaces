import { computed, inject, Injectable, resource } from '@angular/core';
import { OrganisationService } from '@placeos/common';
import {
    querySignagePlugins,
    SignagePlugin,
    type SignagePluginType,
} from '@placeos/ts-client';
import { decodeEntityNames } from './shared/decode-entity-names.util';
import { byName } from './shared/paged-search';
import { SignageContextService } from './signage-context.service';

/** Plugins and widgets the selected group can use */
@Injectable({
    providedIn: 'root',
})
export class SignagePluginService {
    private readonly _org = inject(OrganisationService);
    private readonly _context = inject(SignageContextService);

    // Plugins available to the selected group. Signage edits never change
    // plugins, so these lists follow the group but not `changed()`.
    private _pluginResource(plugin_type: SignagePluginType) {
        return resource({
            params: () => ({
                initialised: this._org.initialised(),
                can_query: this._context.can_query_group_data(),
                group_id: this._context.api_group_id_debounced.value(),
            }),
            loader: async ({ params }) => {
                if (!params.initialised || !params.can_query) {
                    return [] as SignagePlugin[];
                }
                try {
                    const result = await querySignagePlugins(
                        this._context.orgZoneQueryParams(
                            { limit: 500, plugin_type },
                            params.group_id,
                        ),
                    );
                    return (result.data || [])
                        .filter((plugin: SignagePlugin) => plugin.enabled)
                        .map(decodeEntityNames)
                        .sort(byName);
                } catch {
                    return [] as SignagePlugin[];
                }
            },
        });
    }

    private readonly _plugins = this._pluginResource('plugin');
    private readonly _widgets = this._pluginResource('widget');
    /** Every enabled plugin, before group feature flags apply */
    public readonly all_plugins = computed(() => this._plugins.value() || []);
    /** Plugins the selected group can add to its media library */
    public readonly plugins = computed(() => {
        const allowed = this._context.group_features().available_plugins;
        const plugins = this.all_plugins();
        return allowed
            ? plugins.filter((plugin) => allowed.includes(plugin.id))
            : plugins;
    });
    public readonly widgets = computed(() => this._widgets.value() || []);

    /**
     * Find a plugin by ID, from every plugin and not only the group's.
     * Uses the loaded plugins first and only queries on a miss.
     */
    public async resolvePlugin(
        plugin_id: string,
    ): Promise<SignagePlugin | undefined> {
        if (!plugin_id) return undefined;
        const loaded = this.all_plugins().find(({ id }) => id === plugin_id);
        if (loaded) return loaded;
        const result = await querySignagePlugins({
            limit: 500,
            plugin_type: 'plugin',
        }).catch(() => ({ data: [] as SignagePlugin[] }));
        return (result.data || []).find(({ id }) => id === plugin_id);
    }
}

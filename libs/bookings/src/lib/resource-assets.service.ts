import { inject, Injectable } from '@angular/core';
import {
    deleteAsset,
    queryAssetCategories,
    queryAssetGroups,
    queryAssets,
    saveAsset,
    saveAssetCategory,
    saveAssetGroup,
} from '@placeos/assets';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomString,
    unique,
} from '@placeos/common';
import {
    cleanObject,
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { firstValueFrom, forkJoin, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

/** Category names for each resource type */
export const RESOURCE_CATEGORY_NAMES = {
    desks: '_DESKS_',
    'parking-spaces': '_PARKING_SPACES_',
    'parking-users': '_PARKING_USERS_',
    lockers: '_LOCKERS_',
    locker_banks: '_LOCKER_BANKS_',
} as const;

export type ResourceType = keyof typeof RESOURCE_CATEGORY_NAMES;

interface ResourceMapping<T> {
    /** Convert asset to resource */
    assetToResource: (asset: Asset, zone_id?: string) => T;
    /** Convert resource to asset partial */
    resourceToAsset: (
        resource: T,
        asset_type_id: string,
        zone_id: string,
        zones: string[],
    ) => Partial<Asset>;
}

@Injectable({
    providedIn: 'root',
})
export class ResourceAssetsService {
    private _org = inject(OrganisationService);

    /** Cache for category lookups by zone */
    private _category_cache = new Map<
        string,
        Observable<AssetCategory | null>
    >();
    /** Cache for asset type lookups by zone and category */
    private _type_cache = new Map<string, Observable<AssetGroup | null>>();

    /**
     * Get the hidden category for a resource type in a zone
     */
    public getCategory$(
        resource_type: ResourceType,
        zone_id: string,
    ): Observable<AssetCategory | null> {
        const cache_key = `${resource_type}:${zone_id}`;
        if (!this._category_cache.has(cache_key)) {
            const category_name = RESOURCE_CATEGORY_NAMES[resource_type];
            const obs = queryAssetCategories({ zone_id }).pipe(
                catchError(() => of([] as AssetCategory[])),
                map(
                    (categories) =>
                        categories.find((c) => c.name === category_name) ||
                        null,
                ),
                shareReplay(1),
            );
            this._category_cache.set(cache_key, obs);
        }
        return this._category_cache.get(cache_key);
    }

    /**
     * Get the asset type/group for a resource type in a zone
     */
    public getAssetType$(
        resource_type: ResourceType,
        zone_id: string,
    ): Observable<AssetGroup | null> {
        const cache_key = `${resource_type}:${zone_id}`;
        if (!this._type_cache.has(cache_key)) {
            const category_name = RESOURCE_CATEGORY_NAMES[resource_type];
            const obs = this.getCategory$(resource_type, zone_id).pipe(
                switchMap((category) => {
                    if (!category) return of(null as AssetGroup | null);
                    return queryAssetGroups({
                        zone_id,
                        q: category.name,
                    }).pipe(
                        catchError(() => of([] as AssetGroup[])),
                        map(
                            (groups) =>
                                groups.find(
                                    (g) =>
                                        g.name === category_name &&
                                        g.category_id === category.id,
                                ) || null,
                        ),
                    );
                }),
                shareReplay(1),
            );
            this._type_cache.set(cache_key, obs);
        }
        return this._type_cache.get(cache_key);
    }

    /**
     * Clear cached category/type lookups for a zone
     */
    public clearCache(resource_type: ResourceType, zone_id: string): void {
        const cache_key = `${resource_type}:${zone_id}`;
        this._category_cache.delete(cache_key);
        this._type_cache.delete(cache_key);
    }

    /**
     * Ensure the category exists for a resource type, create if not
     */
    public async ensureCategoryExists(
        resource_type: ResourceType,
        zone_id: string,
    ): Promise<AssetCategory | null> {
        const category_name = RESOURCE_CATEGORY_NAMES[resource_type];
        const categories = await firstValueFrom(
            queryAssetCategories({ zone_id }).pipe(
                catchError(() => of([] as AssetCategory[])),
            ),
        );

        const existing = categories.find((c) => c.name === category_name);
        if (existing) return existing;

        try {
            const new_category = await firstValueFrom(
                saveAssetCategory(
                    cleanObject(
                        new AssetCategory({
                            name: category_name,
                            description: JSON.stringify({
                                resource_type,
                                created_at: Date.now(),
                            }),
                            hidden: true,
                        }),
                        [0, undefined, '', null],
                    ),
                ),
            );
            this.clearCache(resource_type, zone_id);
            return new_category;
        } catch (e) {
            console.error(`Failed to create ${resource_type} category:`, e);
            return null;
        }
    }

    /**
     * Ensure the asset type exists for a resource type, create if not
     */
    public async ensureAssetTypeExists(
        resource_type: ResourceType,
        zone_id: string,
        category: AssetCategory,
    ): Promise<AssetGroup | null> {
        if (!category) return null;

        const category_name = RESOURCE_CATEGORY_NAMES[resource_type];
        const groups = await firstValueFrom(
            queryAssetGroups({ zone_id, q: category.name }).pipe(
                catchError(() => of([] as AssetGroup[])),
            ),
        );

        const existing = groups.find(
            (g) => g.name === category_name && g.category_id === category.id,
        );
        if (existing) return existing;

        try {
            const new_group = await firstValueFrom(
                saveAssetGroup({
                    name: category_name,
                    category_id: category.id,
                    zone_id,
                    brand: 'PlaceOS',
                    description: `${resource_type} resources`,
                }),
            );
            this.clearCache(resource_type, zone_id);
            return new_group;
        } catch (e) {
            console.error(`Failed to create ${resource_type} asset type:`, e);
            return null;
        }
    }

    /**
     * Ensure both category and asset type exist
     */
    public async ensureCategoryAndTypeExist(
        resource_type: ResourceType,
        zone_id: string,
    ): Promise<AssetGroup | null> {
        const category = await this.ensureCategoryExists(
            resource_type,
            zone_id,
        );
        if (!category) return null;
        return this.ensureAssetTypeExists(resource_type, zone_id, category);
    }

    /**
     * Load resources from Assets API
     */
    public loadResources$<T>(
        resource_type: ResourceType,
        zone_id: string,
        mapping: ResourceMapping<T>,
    ): Observable<T[]> {
        return this.getAssetType$(resource_type, zone_id).pipe(
            switchMap((asset_type) => {
                if (!asset_type) return of([] as T[]);
                return queryAssets({
                    zone_id,
                    type_id: asset_type.id,
                    limit: 2000,
                }).pipe(
                    catchError(() => of([] as Asset[])),
                    map((assets) =>
                        assets
                            .filter((a) => a.asset_type_id === asset_type.id)
                            .map((a) => mapping.assetToResource(a, zone_id)),
                    ),
                );
            }),
        );
    }

    /**
     * Load resources from multiple zones (for region mode)
     */
    public loadResourcesFromZones$<T>(
        resource_type: ResourceType,
        zone_ids: string[],
        mapping: ResourceMapping<T>,
    ): Observable<T[]> {
        if (!zone_ids.length) return of([]);
        return forkJoin(
            zone_ids.map((zone_id) =>
                this.loadResources$(resource_type, zone_id, mapping).pipe(
                    catchError(() => of([] as T[])),
                ),
            ),
        ).pipe(map((results) => results.flat()));
    }

    /**
     * Check if legacy metadata exists and needs migration
     */
    public async needsMigration(
        metadata_name: string,
        zone_id: string,
    ): Promise<boolean> {
        try {
            const metadata = await firstValueFrom(
                showMetadata(zone_id, metadata_name).pipe(
                    catchError(() => of({ details: null } as PlaceMetadata)),
                ),
            );
            const details = metadata?.details as any;
            if (!details) return false;
            // Check if already migrated
            if (details.migrated === true) return false;
            // Check if there's actual data to migrate
            if (Array.isArray(details)) return details.length > 0;
            // Handle object-based metadata (e.g., emergency_contacts with { contacts: [], roles: [] })
            if (typeof details === 'object') {
                // Check for common array properties that contain the actual data
                for (const key of Object.keys(details)) {
                    if (key === 'migrated') continue;
                    const value = details[key];
                    if (Array.isArray(value) && value.length > 0) {
                        return true;
                    }
                }
            }
            return false;
        } catch {
            return false;
        }
    }

    /**
     * Load legacy metadata resources
     */
    public loadLegacyMetadata$<T>(
        metadata_name: string,
        zone_id: string,
        map_fn: (item: any, zone_id: string) => T,
    ): Observable<T[]> {
        return showMetadata(zone_id, metadata_name).pipe(
            catchError(() => of({ details: [] } as PlaceMetadata)),
            map((metadata) => {
                const details = metadata?.details;
                if (!details) return [];
                // Check if migrated
                if ((details as any).migrated === true) return [];
                if (Array.isArray(details)) {
                    return details.map((item) => map_fn(item, zone_id));
                }
                return [];
            }),
        );
    }

    /**
     * Load resources with fallback to legacy metadata
     * Tries Assets API first, falls back to metadata if empty
     */
    public loadWithFallback$<T>(
        resource_type: ResourceType,
        metadata_name: string,
        zone_id: string,
        asset_mapping: ResourceMapping<T>,
        legacy_map_fn: (item: any, zone_id: string) => T,
    ): Observable<T[]> {
        return this.loadResources$(resource_type, zone_id, asset_mapping).pipe(
            switchMap((assets) => {
                if (assets.length > 0) return of(assets);
                // Fallback to legacy metadata
                return this.loadLegacyMetadata$(
                    metadata_name,
                    zone_id,
                    legacy_map_fn,
                );
            }),
        );
    }

    /**
     * Save a resource to the Assets API
     */
    public async saveResource<T>(
        resource_type: ResourceType,
        resource: T,
        zone_id: string,
        mapping: ResourceMapping<T>,
        resource_id?: string,
    ): Promise<Asset | null> {
        try {
            let asset_type = await firstValueFrom(
                this.getAssetType$(resource_type, zone_id),
            );
            if (!asset_type) {
                asset_type = await this.ensureCategoryAndTypeExist(
                    resource_type,
                    zone_id,
                );
            }
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            const zones = this._buildZones(zone_id);
            const asset_data = mapping.resourceToAsset(
                resource,
                asset_type.id,
                zone_id,
                zones,
            ) as any;

            // Handle existing resource ID
            if (resource_id && !resource_id.startsWith('temp-')) {
                asset_data.id = resource_id;
            }

            const result = await firstValueFrom(saveAsset(asset_data));
            this.clearCache(resource_type, zone_id);
            return result;
        } catch (e) {
            console.error(`Failed to save ${resource_type} resource:`, e);
            throw e;
        }
    }

    /**
     * Delete a resource from the Assets API
     */
    public async deleteResource(asset_id: string): Promise<boolean> {
        try {
            await firstValueFrom(deleteAsset(asset_id));
            return true;
        } catch (e) {
            console.error('Failed to delete resource:', e);
            return false;
        }
    }

    /**
     * Migrate resources from metadata to Assets API
     */
    public async migrateFromMetadata<T>(
        resource_type: ResourceType,
        metadata_name: string,
        zone_id: string,
        mapping: ResourceMapping<T>,
        legacy_map_fn: (item: any, zone_id: string) => T,
    ): Promise<boolean> {
        try {
            // Load legacy metadata
            const metadata = await firstValueFrom(
                showMetadata(zone_id, metadata_name).pipe(
                    catchError(() => of({ details: [] } as PlaceMetadata)),
                ),
            );

            const details = metadata?.details;
            if (!details || (details as any).migrated === true) {
                return true; // Nothing to migrate or already migrated
            }

            const items = Array.isArray(details) ? details : [];
            if (items.length === 0) {
                return true; // Nothing to migrate
            }

            // Ensure category and asset type exist
            const asset_type = await this.ensureCategoryAndTypeExist(
                resource_type,
                zone_id,
            );
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            const zones = this._buildZones(zone_id);

            // Migrate each item
            for (const item of items) {
                const resource = legacy_map_fn(item, zone_id);
                const asset_data = mapping.resourceToAsset(
                    resource,
                    asset_type.id,
                    zone_id,
                    zones,
                ) as any;
                // Remove id so it creates new assets
                delete asset_data.id;
                await firstValueFrom(saveAsset(asset_data));
            }

            // Mark metadata as migrated, retaining original data for rollback
            await firstValueFrom(
                updateMetadata(zone_id, {
                    name: metadata_name,
                    description: `${metadata_name} (migrated to Assets API)`,
                    details: {
                        migrated: true,
                        migrated_at: Date.now(),
                        original_data: items,
                    },
                }),
            );

            this.clearCache(resource_type, zone_id);
            notifySuccess(
                i18n('COMMON.MIGRATION_SUCCESS') ||
                    `Successfully migrated ${items.length} ${resource_type}.`,
            );
            return true;
        } catch (e) {
            notifyError(
                i18n('COMMON.MIGRATION_ERROR', { error: e }) ||
                    `Failed to migrate ${resource_type}: ${e}`,
            );
            return false;
        }
    }

    /**
     * Migrate resources from metadata to Assets API with custom transform
     * Similar to migrateFromMetadata but allows custom transformation of items
     */
    public async migrateFromMetadataWithTransform<T>(
        resource_type: ResourceType,
        metadata_name: string,
        zone_id: string,
        mapping: ResourceMapping<T>,
        transform_fn: (item: any, zone_id: string) => T,
    ): Promise<boolean> {
        try {
            // Load legacy metadata
            const metadata = await firstValueFrom(
                showMetadata(zone_id, metadata_name).pipe(
                    catchError(() => of({ details: [] } as PlaceMetadata)),
                ),
            );

            const details = metadata?.details;
            if (!details || (details as any).migrated === true) {
                return true; // Nothing to migrate or already migrated
            }

            const items = Array.isArray(details) ? details : [];
            if (items.length === 0) {
                return true; // Nothing to migrate
            }

            // Ensure category and asset type exist
            const asset_type = await this.ensureCategoryAndTypeExist(
                resource_type,
                zone_id,
            );
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            const zones = this._buildZones(zone_id);

            // Migrate each item with custom transform
            for (const item of items) {
                const resource = transform_fn(item, zone_id);
                const asset_data = mapping.resourceToAsset(
                    resource,
                    asset_type.id,
                    zone_id,
                    zones,
                ) as any;
                // Remove id so it creates new assets
                delete asset_data.id;
                await firstValueFrom(saveAsset(asset_data));
            }

            // Mark metadata as migrated, retaining original data for rollback
            await firstValueFrom(
                updateMetadata(zone_id, {
                    name: metadata_name,
                    description: `${metadata_name} (migrated to Assets API)`,
                    details: {
                        migrated: true,
                        migrated_at: Date.now(),
                        original_data: items,
                    },
                }),
            );

            this.clearCache(resource_type, zone_id);
            notifySuccess(
                i18n('COMMON.MIGRATION_SUCCESS') ||
                    `Successfully migrated ${items.length} ${resource_type}.`,
            );
            return true;
        } catch (e) {
            notifyError(
                i18n('COMMON.MIGRATION_ERROR', { error: e }) ||
                    `Failed to migrate ${resource_type}: ${e}`,
            );
            return false;
        }
    }

    /**
     * Check if using Assets API (migrated) or legacy metadata
     */
    public async isUsingAssetsAPI(
        resource_type: ResourceType,
        zone_id: string,
    ): Promise<boolean> {
        const asset_type = await firstValueFrom(
            this.getAssetType$(resource_type, zone_id),
        );
        if (!asset_type) return false;

        const assets = await firstValueFrom(
            queryAssets({
                zone_id,
                type_id: asset_type.id,
                limit: 1,
            }).pipe(catchError(() => of([] as Asset[]))),
        );
        return assets.length > 0;
    }

    /**
     * Generate a temporary ID for new resources
     */
    public generateTempId(prefix: string): string {
        return `temp-${prefix}-${randomString(8)}`;
    }

    /**
     * Build zone hierarchy array
     */
    private _buildZones(zone_id: string): string[] {
        const level = this._org.levelWithID([zone_id]);
        const building = level
            ? this._org.buildings.find((b) => b.id === level.parent_id)
            : this._org.buildings.find((b) => b.id === zone_id);

        return unique(
            [
                this._org.organisation?.id,
                this._org.region?.id,
                building?.id,
                level?.id,
            ].filter(Boolean),
        );
    }
}

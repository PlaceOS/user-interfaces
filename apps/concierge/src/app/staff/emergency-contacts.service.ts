import { inject, Injectable } from '@angular/core';
import {
    queryAssets,
    saveAsset,
    saveAssetCategory,
    saveAssetType,
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
import { toObservable } from '@angular/core/rxjs-interop';
import {
    cleanObject,
    queryAssetCategories,
    queryAssetTypes,
    removeAsset,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, firstValueFrom, from, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

export const EMERGENCY_CONTACTS_CATEGORY_NAME = '_EMERGENCY_CONTACTS_';

export interface EmergencyContact {
    id: string;
    email: string;
    name: string;
    phone: string;
    roles: string[];
    zone: string;
}

export interface EmergencyContactData {
    contacts: EmergencyContact[];
    roles: string[];
}

@Injectable({
    providedIn: 'root',
})
export class EmergencyContactsService {
    private _org = inject(OrganisationService);

    private _change = new BehaviorSubject<number>(Date.now());

    /** Observable for the emergency contacts category */
    public readonly category$ = combineLatest([
        toObservable(this._org.active_building),
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            from(queryAssetCategories({ zone_id: bld.id } as any)).pipe(
                map((_) => _.data),
                catchError(() => of([] as AssetCategory[])),
            ),
        ),
        map(
            (categories) =>
                categories.find(
                    (c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME,
                ) || null,
        ),
        shareReplay(1),
    );

    /** Observable for the emergency contacts asset type/group */
    public readonly assetType$ = combineLatest([
        toObservable(this._org.active_building),
        this.category$,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, category]) => {
            if (!category) return of(null as AssetGroup | null);
            return from(
                queryAssetTypes({ zone_id: bld.id, q: category.name }),
            ).pipe(
                map((_) => _.data),
                catchError(() => of([] as AssetGroup[])),
                map(
                    (groups) =>
                        groups.find(
                            (g) =>
                                g.name === EMERGENCY_CONTACTS_CATEGORY_NAME &&
                                g.category_id === category.id,
                        ) || null,
                ),
            );
        }),
        shareReplay(1),
    );

    /** Observable for emergency contacts from Assets API */
    public readonly contacts$ = combineLatest([
        toObservable(this._org.active_building),
        this.assetType$,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, assetType]) => {
            if (!assetType) return of([] as EmergencyContact[]);
            return from(
                queryAssets({
                    zone_id: bld.id,
                    type_id: assetType.id,
                    limit: 200,
                }),
            ).pipe(
                map((_) => _.data),
                catchError(() => of([] as Asset[])),
                map((assets) =>
                    assets
                        .filter((a) => a.asset_type_id === assetType.id)
                        .map((a) => this.assetToContact(a)),
                ),
            );
        }),
        shareReplay(1),
    );

    /** Observable for roles (stored in category description as JSON) */
    public readonly roles$ = this.category$.pipe(
        map((category) => {
            if (!category?.description) return [];
            try {
                const data = JSON.parse(category.description);
                return (data.roles as string[]) || [];
            } catch {
                return [];
            }
        }),
        shareReplay(1),
    );

    /** Combined data observable matching the old metadata format */
    public readonly data$ = combineLatest([this.contacts$, this.roles$]).pipe(
        map(([contacts, roles]) => ({ contacts, roles })),
        shareReplay(1),
    );

    /** Legacy metadata fallback - used for migration */
    private readonly legacyMetadata$ = toObservable(
        this._org.active_building,
    ).pipe(
        filter((bld) => !!bld),
        switchMap((bld) =>
            from(showMetadata(bld.id, 'emergency_contacts')).pipe(
                catchError(() => of({ details: { contacts: [], roles: [] } })),
            ),
        ),
        map(
            ({ details }) =>
                (details as EmergencyContactData) || {
                    contacts: [],
                    roles: [],
                },
        ),
        shareReplay(1),
    );

    constructor() {
        // Initialize category and asset type on first load if needed
        this.ensureCategoryAndTypeExist();
    }

    /** Ensure the hidden category exists, create if not */
    public async ensureCategoryExists(): Promise<AssetCategory | null> {
        await this._org.waitUntilInitialised();
        const bld = this._org.building;
        if (!bld) return null;

        const categories = await firstValueFrom(
            from(queryAssetCategories({ zone_id: bld.id } as any)).pipe(
                map((_) => _.data),
                catchError(() => of([] as AssetCategory[])),
            ),
        );

        const existing = categories.find(
            (c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME,
        );
        if (existing) return existing;

        // Create the hidden category
        try {
            const new_category = await saveAssetCategory(
                cleanObject(
                    new AssetCategory({
                        name: EMERGENCY_CONTACTS_CATEGORY_NAME,
                        description: JSON.stringify({ roles: [] }),
                        hidden: true,
                    }),
                    [0, undefined, '', null],
                ),
            );
            this._change.next(Date.now());
            return new_category;
        } catch (e) {
            console.error('Failed to create emergency contacts category:', e);
            return null;
        }
    }

    /** Ensure the asset type exists, create if not */
    public async ensureAssetTypeExists(
        category: AssetCategory,
    ): Promise<AssetGroup | null> {
        const bld = this._org.building;
        if (!bld || !category) return null;

        const groups = await firstValueFrom(
            from(queryAssetTypes({ zone_id: bld.id, q: category.name })).pipe(
                map((_) => _.data),
                catchError(() => of([] as AssetGroup[])),
            ),
        );

        const existing = groups.find(
            (g) =>
                g.name === EMERGENCY_CONTACTS_CATEGORY_NAME &&
                g.category_id === category.id,
        );
        if (existing) return existing;

        // Create the asset type
        try {
            const new_group = await saveAssetType({
                name: EMERGENCY_CONTACTS_CATEGORY_NAME,
                category_id: category.id,
                zone_id: bld.id,
                brand: 'PlaceOS',
                description: 'Emergency contacts for the building',
            });
            this._change.next(Date.now());
            return new_group;
        } catch (e) {
            console.error('Failed to create emergency contacts asset type:', e);
            return null;
        }
    }

    /** Ensure both category and asset type exist */
    public async ensureCategoryAndTypeExist(): Promise<AssetGroup | null> {
        const category = await this.ensureCategoryExists();
        if (!category) return null;
        return this.ensureAssetTypeExists(category);
    }

    /** Migrate existing metadata contacts to Assets API */
    public async migrateFromMetadata(): Promise<boolean> {
        const bld = this._org.building;
        if (!bld) return false;

        try {
            // Get existing metadata
            const legacy_data = await firstValueFrom(this.legacyMetadata$);
            if (!legacy_data?.contacts?.length && !legacy_data?.roles?.length) {
                return true; // Nothing to migrate
            }

            // Ensure category and asset type exist
            const asset_type = await this.ensureCategoryAndTypeExist();
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            // Get category for updating roles
            const category = await firstValueFrom(this.category$);
            if (!category) {
                throw new Error('Failed to find category');
            }

            // Update roles in category description
            if (legacy_data.roles?.length) {
                await saveAssetCategory(
                    cleanObject(
                        new AssetCategory({
                            ...category,
                            hidden: true,
                            description: JSON.stringify({
                                roles: legacy_data.roles,
                            }),
                        }),
                        [0, null, undefined, ''],
                    ),
                );
            }

            // Migrate contacts as assets
            for (const contact of legacy_data.contacts || []) {
                const asset = this.contactToAsset(contact, asset_type.id);
                await saveAsset(asset);
            }

            // Clear old metadata after successful migration
            await updateMetadata(bld.id, {
                name: 'emergency_contacts',
                description: 'Emergency Contacts (migrated to Assets)',
                details: { contacts: [], roles: [], migrated: true },
            });

            this._change.next(Date.now());
            notifySuccess(
                i18n('APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS') ||
                    'Successfully migrated emergency contacts.',
            );
            return true;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.CONTACTS_MIGRATION_ERROR', { error: e }) ||
                    `Failed to migrate emergency contacts: ${e}`,
            );
            return false;
        }
    }

    /** Check if migration is needed */
    public async needsMigration(): Promise<boolean> {
        const legacy_data = await firstValueFrom(this.legacyMetadata$);
        if (
            legacy_data &&
            (legacy_data.contacts?.length > 0 || legacy_data.roles?.length > 0)
        ) {
            // Check if already migrated
            if ((legacy_data as any).migrated) return false;
            return true;
        }
        return false;
    }

    /** Save or update an emergency contact */
    public async saveContact(contact: EmergencyContact): Promise<boolean> {
        try {
            let asset_type = await firstValueFrom(this.assetType$);
            if (!asset_type) {
                asset_type = await this.ensureCategoryAndTypeExist();
            }
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            const asset = this.contactToAsset(contact, asset_type.id);
            await saveAsset(asset);
            this._change.next(Date.now());
            notifySuccess(i18n('APP.CONCIERGE.CONTACTS_SAVE_SUCCESS'));
            return true;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.CONTACTS_SAVE_ERROR', { error: e }),
            );
            return false;
        }
    }

    /** Delete an emergency contact */
    public async deleteContact(contact_id: string): Promise<boolean> {
        try {
            await removeAsset(contact_id);
            this._change.next(Date.now());
            notifySuccess(
                i18n('APP.CONCIERGE.CONTACTS_DELETE_SUCCESS') ||
                    'Successfully removed emergency contact.',
            );
            return true;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.CONTACTS_DELETE_ERROR', { error: e }) ||
                    `Failed to remove emergency contact: ${e}`,
            );
            return false;
        }
    }

    /** Update roles list */
    public async updateRoles(roles: string[]): Promise<boolean> {
        try {
            let category = await firstValueFrom(this.category$);
            if (!category) {
                category = await this.ensureCategoryExists();
            }
            if (!category) {
                throw new Error('Failed to create or find category');
            }

            await saveAssetCategory(
                new AssetCategory({
                    ...category,
                    description: JSON.stringify({ roles }),
                }),
            );
            this._change.next(Date.now());
            return true;
        } catch (e) {
            notifyError(`Failed to update roles: ${e}`);
            return false;
        }
    }

    /** Add a new role */
    public async addRole(role_name: string): Promise<boolean> {
        const roles = await firstValueFrom(this.roles$);
        if (roles.includes(role_name)) return true;
        return this.updateRoles(
            [...roles, role_name]
                .filter(Boolean)
                .sort((a, b) => a.localeCompare(b)),
        );
    }

    /** Remove a role and update contacts that use it */
    public async removeRole(role_name: string): Promise<boolean> {
        try {
            const [roles, contacts] = await Promise.all([
                firstValueFrom(this.roles$),
                firstValueFrom(this.contacts$),
            ]);

            // Update roles list
            const new_roles = roles.filter((r) => r !== role_name);
            await this.updateRoles(new_roles);

            // Update contacts that have this role
            for (const contact of contacts) {
                if (contact.roles.includes(role_name)) {
                    const updated_contact = {
                        ...contact,
                        roles: contact.roles.filter((r) => r !== role_name),
                    };
                    await this.saveContact(updated_contact);
                }
            }

            return true;
        } catch (e) {
            notifyError(`Failed to remove role: ${e}`);
            return false;
        }
    }

    /** Rename a role */
    public async renameRole(
        old_name: string,
        new_name: string,
    ): Promise<boolean> {
        try {
            const [roles, contacts] = await Promise.all([
                firstValueFrom(this.roles$),
                firstValueFrom(this.contacts$),
            ]);

            // Update roles list
            const new_roles = roles
                .map((r) => (r === old_name ? new_name : r))
                .filter(Boolean)
                .sort((a, b) => a.localeCompare(b));
            await this.updateRoles(new_roles);

            // Update contacts that have this role
            for (const contact of contacts) {
                if (contact.roles.includes(old_name)) {
                    const updated_contact = {
                        ...contact,
                        roles: contact.roles.map((r) =>
                            r === old_name ? new_name : r,
                        ),
                    };
                    await this.saveContact(updated_contact);
                }
            }

            return true;
        } catch (e) {
            notifyError(`Failed to rename role: ${e}`);
            return false;
        }
    }

    /** Refresh data */
    public refresh(): void {
        this._change.next(Date.now());
    }

    /** Convert Asset to EmergencyContact */
    private assetToContact(asset: Asset): EmergencyContact {
        const other_data = asset.other_data as Record<string, any>;
        const level = this._org.levelWithID(asset.zones);
        return {
            id: asset.id,
            name: asset.identifier || '',
            email: other_data?.email || '',
            phone: other_data?.phone || '',
            roles: other_data?.roles || [],
            zone: level?.id || '',
        };
    }

    /** Convert EmergencyContact to Asset */
    private contactToAsset(
        contact: EmergencyContact,
        asset_type_id: string,
    ): Partial<Asset> {
        const level = contact.zone
            ? this._org.levelWithID([contact.zone])
            : null;
        return {
            id: contact.id?.startsWith('contact-') ? undefined : contact.id,
            asset_type_id,
            identifier: contact.name,
            other_data: {
                email: contact.email,
                phone: contact.phone,
                roles: contact.roles,
            } as Record<string, any>,
            zone_id: this._org.building.id,
            zones: unique(
                [
                    this._org.organisation.id,
                    this._org.region?.id,
                    this._org.building.id,
                    level?.id,
                ].filter((_) => _),
            ),
        };
    }

    /** Generate a new contact ID */
    public generateContactId(): string {
        return `contact-${randomString(8)}`;
    }
}

import { effect, inject, Injectable, signal } from '@angular/core';
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
import {
    cleanObject,
    queryAssetCategories,
    queryAssetTypes,
    removeAsset,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';

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

    private readonly _change = signal<number>(Date.now());

    /** Emergency contacts category */
    public readonly category = signal<AssetCategory | null>(null);
    /** Emergency contacts asset type/group */
    public readonly asset_type = signal<AssetGroup | null>(null);
    /** Emergency contacts from the Assets API */
    public readonly contacts = signal<EmergencyContact[]>([]);
    /** Roles (stored in category description as JSON) */
    public readonly roles = signal<string[]>([]);

    constructor() {
        effect(() => {
            const bld = this._org.active_building();
            this._change();
            if (!bld) return;
            this._load(bld);
        });
        // Initialize category and asset type on first load if needed
        this.ensureCategoryAndTypeExist();
    }

    /** Load category, asset type, roles and contacts for the active building */
    private async _load(bld: { id: string }) {
        const category = await this._queryCategory(bld);
        this.category.set(category);
        this.roles.set(this._rolesFromCategory(category));
        const asset_type = await this._queryAssetType(bld, category);
        this.asset_type.set(asset_type);
        const contacts = await this._queryContacts(bld, asset_type);
        this.contacts.set(contacts);
    }

    /** Query the hidden emergency contacts category for a building */
    private async _queryCategory(bld: {
        id: string;
    }): Promise<AssetCategory | null> {
        try {
            const { data } = await queryAssetCategories({
                zone_id: bld.id,
            } as any);
            return (
                data.find(
                    (c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME,
                ) || null
            );
        } catch {
            return null;
        }
    }

    /** Query the emergency contacts asset type for a building/category */
    private async _queryAssetType(
        bld: { id: string },
        category: AssetCategory | null,
    ): Promise<AssetGroup | null> {
        if (!category) return null;
        try {
            const { data } = await queryAssetTypes({
                zone_id: bld.id,
                q: category.name,
            });
            return (
                data.find(
                    (g) =>
                        g.name === EMERGENCY_CONTACTS_CATEGORY_NAME &&
                        g.category_id === category.id,
                ) || null
            );
        } catch {
            return null;
        }
    }

    /** Query the emergency contacts for a building/asset type */
    private async _queryContacts(
        bld: { id: string },
        asset_type: AssetGroup | null,
    ): Promise<EmergencyContact[]> {
        if (!asset_type) return [];
        try {
            const { data } = await queryAssets({
                zone_id: bld.id,
                type_id: asset_type.id,
                limit: 200,
            });
            return data
                .filter((a) => a.asset_type_id === asset_type.id)
                .map((a) => this.assetToContact(a));
        } catch {
            return [];
        }
    }

    /** Extract roles list from a category description */
    private _rolesFromCategory(category: AssetCategory | null): string[] {
        if (!category?.description) return [];
        try {
            const data = JSON.parse(category.description);
            return (data.roles as string[]) || [];
        } catch {
            return [];
        }
    }

    /** Legacy metadata fallback - used for migration */
    private async _queryLegacyMetadata(bld: {
        id: string;
    }): Promise<EmergencyContactData> {
        try {
            const { details } = await showMetadata(bld.id, 'emergency_contacts');
            return (
                (details as EmergencyContactData) || {
                    contacts: [],
                    roles: [],
                }
            );
        } catch {
            return { contacts: [], roles: [] };
        }
    }

    /** Ensure the hidden category exists, create if not */
    public async ensureCategoryExists(): Promise<AssetCategory | null> {
        await this._org.waitUntilInitialised();
        const bld = this._org.building;
        if (!bld) return null;

        const existing = await this._queryCategory(bld);
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
            this._change.set(Date.now());
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

        const existing = await this._queryAssetType(bld, category);
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
            this._change.set(Date.now());
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
            const legacy_data = await this._queryLegacyMetadata(bld);
            if (!legacy_data?.contacts?.length && !legacy_data?.roles?.length) {
                return true; // Nothing to migrate
            }

            // Ensure category and asset type exist
            const asset_type = await this.ensureCategoryAndTypeExist();
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            // Get category for updating roles
            const category = await this._queryCategory(bld);
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

            this._change.set(Date.now());
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
        const bld = this._org.building;
        if (!bld) return false;
        const legacy_data = await this._queryLegacyMetadata(bld);
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
            let asset_type = this.asset_type();
            if (!asset_type) {
                asset_type = await this.ensureCategoryAndTypeExist();
            }
            if (!asset_type) {
                throw new Error('Failed to create or find asset type');
            }

            const asset = this.contactToAsset(contact, asset_type.id);
            await saveAsset(asset);
            this._change.set(Date.now());
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
            this._change.set(Date.now());
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
            let category = this.category();
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
            this._change.set(Date.now());
            return true;
        } catch (e) {
            notifyError(`Failed to update roles: ${e}`);
            return false;
        }
    }

    /** Add a new role */
    public async addRole(role_name: string): Promise<boolean> {
        const roles = this.roles();
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
            const roles = this.roles();
            const contacts = this.contacts();

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
            const roles = this.roles();
            const contacts = this.contacts();

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
        this._change.set(Date.now());
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

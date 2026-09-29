import { decodeEntities } from './shared/decode-entity-names.util';

/** AD group ID => [display name, permission bitmask] */
export type AdGroupMappings = Record<string, [string, number]>;

/**
 * Group fields that control who gets access and with which permissions.
 * `@placeos/ts-client` does not model them yet, so they are read from the
 * raw group.
 */
export interface SignageGroupAccess {
    /** Permissions for a new member added without explicit permissions */
    default_permissions: number;
    /** Members of these AD groups are added to the group automatically */
    ad_group_mappings: AdGroupMappings;
}

/** Group from the organisation directory, read through the staff API */
export interface DirectoryGroup {
    id: string;
    name: string;
    email?: string;
    description?: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

/** Read the access fields from a raw group. Drops mappings with the wrong
 * shape and decodes the HTML entities the backend adds to names. */
export function signageGroupAccess(raw: unknown): SignageGroupAccess {
    const source = isRecord(raw) ? raw : {};
    const mappings = isRecord(source.ad_group_mappings)
        ? source.ad_group_mappings
        : {};
    const ad_group_mappings: AdGroupMappings = {};
    for (const [id, value] of Object.entries(mappings)) {
        if (!Array.isArray(value)) continue;
        const [name, permissions] = value;
        ad_group_mappings[id] = [
            typeof name === 'string' ? decodeEntities(name) : '',
            Number(permissions) || 0,
        ];
    }
    return {
        default_permissions: Number(source.default_permissions) || 0,
        ad_group_mappings,
    };
}

/** Key the backend uses for an AD group ID */
export function adGroupKey(id: string) {
    return id.trim().toLowerCase();
}

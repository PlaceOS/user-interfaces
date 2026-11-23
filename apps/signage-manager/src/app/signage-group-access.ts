import { type Group } from '@placeos/ts-client';
import { decodeEntities } from './shared/decode-entity-names.util';

/** AD group mappings of a group: AD group ID to its name and permissions */
export type GroupAdMappings = Record<string, readonly [string, number]>;

/** Group fields that control who gets access and with which permissions */
export type SignageGroupAccess = Pick<
    Group,
    'default_permissions' | 'ad_group_mappings'
>;

/** Group from the organisation directory, read through the staff API */
export interface DirectoryGroup {
    id: string;
    name: string;
    email?: string;
    description?: string;
}

/** Access fields of a group. Decodes the HTML entities the backend adds to
 * AD group names. */
export function signageGroupAccess(group: Group): SignageGroupAccess {
    const ad_group_mappings: GroupAdMappings = {};
    for (const [id, [name, permissions]] of Object.entries(
        group.ad_group_mappings || {},
    )) {
        ad_group_mappings[id] = [decodeEntities(name), permissions];
    }
    return {
        default_permissions: group.default_permissions,
        ad_group_mappings,
    };
}

/** Key the backend uses for an AD group ID */
export function adGroupKey(id: string) {
    return id.trim().toLowerCase();
}

import { PlaceGroup, PlaceGroupAdMappings } from '@placeos/ts-client';
import { decodeEntities } from './shared/decode-entity-names.util';

/** Group fields that control who gets access and with which permissions */
export type SignageGroupAccess = Pick<
    PlaceGroup,
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
export function signageGroupAccess(group: PlaceGroup): SignageGroupAccess {
    const ad_group_mappings: PlaceGroupAdMappings = {};
    for (const [id, [name, permissions]] of Object.entries(
        group.ad_group_mappings,
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

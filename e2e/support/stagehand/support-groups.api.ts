/**
 * Zones and support groups for the stagehand group specs, through the engine
 * API.
 *
 * A support group is a group whose subsystems include `support`. It is granted
 * zones (and can be denied zones under them), and stagehand shows a member only
 * what is in those zones. The specs build their own buildings, so what a group
 * can see is exactly what the spec gave it.
 *
 * Needs ADMIN.
 */
import { APIRequestContext } from '@playwright/test';
import { asList, ENGINE_API, uniqueTitle, Zone } from '../api';

/** Prefix of every zone and group these specs create, so a sweep can find leftovers. */
export const GROUP_SPEC_PREFIX = 'E2E Stagehand Group';

const READ = 1 << 0;

async function created<T>(
    what: string,
    res: Awaited<ReturnType<APIRequestContext['post']>>,
): Promise<T> {
    if (!res.ok()) {
        throw new Error(
            `create ${what} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json();
}

export async function createZone(
    api: APIRequestContext,
    label: string,
    tag: 'building' | 'level',
    parent_id: string,
): Promise<Zone> {
    const res = await api.post(`${ENGINE_API}/zones`, {
        data: {
            name: uniqueTitle(`${GROUP_SPEC_PREFIX} ${label}`),
            tags: [tag],
            parent_id,
            description: 'Created by the stagehand e2e specs. Safe to delete.',
        },
    });
    return created('zone', res);
}

export interface SupportGroup {
    id: string;
    name: string;
}

/**
 * The authority's root group. An authority has one, and every other group sits
 * under it. Made here when the stack has none yet.
 */
async function rootGroupId(api: APIRequestContext): Promise<string> {
    const res = await api.get(`${ENGINE_API}/groups`, {
        params: { limit: 200 },
    });
    if (!res.ok()) {
        throw new Error(
            `GET /groups failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    const groups = asList<SupportGroup & { parent_id?: string }>(
        await res.json(),
    );
    const root = groups.find((group) => !group.parent_id);
    if (root) return root.id;
    const made = await api.post(`${ENGINE_API}/groups`, {
        data: { name: 'E2E Root', description: 'The authority root group.' },
    });
    return (await created<SupportGroup>('root group', made)).id;
}

export async function createSupportGroup(
    api: APIRequestContext,
    label: string,
): Promise<SupportGroup> {
    const res = await api.post(`${ENGINE_API}/groups`, {
        data: {
            // Unique, but sorts by `label`: the app lists groups by name
            name: `${GROUP_SPEC_PREFIX} ${label} ${Date.now()}`,
            subsystems: ['support'],
            parent_id: await rootGroupId(api),
            description: 'Created by the stagehand e2e specs. Safe to delete.',
        },
    });
    return created('support group', res);
}

/** Make a user a member of a group, with read access */
export async function addGroupUser(
    api: APIRequestContext,
    group_id: string,
    user_id: string,
): Promise<void> {
    const res = await api.post(`${ENGINE_API}/group_users`, {
        data: { group_id, user_id, permissions: READ },
    });
    await created('group user', res);
}

export async function removeGroupUser(
    api: APIRequestContext,
    group_id: string,
    user_id: string,
): Promise<void> {
    await api.delete(`${ENGINE_API}/group_users/${user_id}/${group_id}`);
}

/** Grant a group a zone, or with `deny` hide a zone under one it was granted */
export async function addGroupZone(
    api: APIRequestContext,
    group_id: string,
    zone_id: string,
    deny = false,
): Promise<void> {
    const res = await api.post(`${ENGINE_API}/group_zones`, {
        data: { group_id, zone_id, permissions: READ, deny },
    });
    await created('group zone', res);
}

/** Delete a group, with its members and zones */
export async function deleteGroup(
    api: APIRequestContext,
    group_id: string,
): Promise<void> {
    await api.delete(`${ENGINE_API}/groups/${group_id}`);
}

export async function deleteZone(
    api: APIRequestContext,
    zone_id: string,
): Promise<void> {
    await api.delete(`${ENGINE_API}/zones/${zone_id}`);
}

/** The id of the user with this email */
export async function userIdByEmail(
    api: APIRequestContext,
    email: string,
): Promise<string> {
    const res = await api.get(`${ENGINE_API}/users`, {
        params: { q: email, limit: 20 },
    });
    if (!res.ok()) {
        throw new Error(
            `GET /users?q=${email} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    const user = asList<{ id: string; email: string }>(await res.json()).find(
        (u) => u.email?.toLowerCase() === email.toLowerCase(),
    );
    if (!user) throw new Error(`no user ${email}; the shared seed creates it`);
    return user.id;
}

/**
 * Delete groups and zones a crashed run left behind. Groups first: deleting
 * one removes its zone grants, and a zone with a system in it is still
 * deleted, as the specs delete their systems on their own.
 */
export async function sweepGroupData(api: APIRequestContext): Promise<void> {
    const groups = await api.get(`${ENGINE_API}/groups`, {
        params: { q: GROUP_SPEC_PREFIX, limit: 200 },
    });
    if (groups.ok()) {
        for (const group of asList<SupportGroup>(await groups.json())) {
            if (group.name?.startsWith(GROUP_SPEC_PREFIX)) {
                await deleteGroup(api, group.id);
            }
        }
    }
    for (const tag of ['level', 'building']) {
        const zones = await api.get(`${ENGINE_API}/zones`, {
            params: { q: GROUP_SPEC_PREFIX, tags: tag, limit: 200 },
        });
        if (!zones.ok()) continue;
        for (const zone of asList<Zone>(await zones.json())) {
            if (zone.name?.startsWith(GROUP_SPEC_PREFIX)) {
                await deleteZone(api, zone.id);
            }
        }
    }
}

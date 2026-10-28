/**
 * Gives the stack the zone tree and building settings a production deployment
 * has: the authority's `org_zone`, org -> region -> building -> level, and
 * `workplace_app` on the org and the building.
 *
 * `init` creates org -> building -> level with no region and no settings. The
 * native app lists buildings under `region` zones, so on that tree it selects
 * no building and hides every booking option.
 *
 * Needs ADMIN. Safe to re-run.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, asList, getJson as json } from '../api';
import { buildingWorkplaceApp, orgWorkplaceApp } from './workplace-app';

export const REGION_NAME = 'E2E Region';

interface Zone {
    id: string;
    name: string;
    parent_id?: string;
}

/**
 * The authority's `config.org_zone`, set to init's org zone when missing. The
 * native app reads it to find the org; without it, it matches an org whose
 * name contains the hostname's first label.
 */
async function ensureOrgZone(api: APIRequestContext): Promise<{ org: string; set: boolean }> {
    const { id } = await json(api, '/auth/authority');
    const domain = await json(api, `${ENGINE_API}/domains/${id}`);
    const config = domain.config ?? {};
    if (config.org_zone) return { org: config.org_zone, set: false };

    const orgs = await zones(api, { tags: 'org' });
    if (orgs.length !== 1) {
        throw new Error(`expected one org zone to use as org_zone, found ${orgs.length}`);
    }
    const res = await api.patch(`${ENGINE_API}/domains/${id}`, {
        data: { config: { ...config, org_zone: orgs[0].id } },
    });
    if (!res.ok()) {
        throw new Error(`patch domain org_zone failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return { org: orgs[0].id, set: true };
}

async function zones(api: APIRequestContext, query: Record<string, string>): Promise<Zone[]> {
    return asList<Zone>(await json(api, `${ENGINE_API}/zones`, { limit: '500', ...query }));
}

/**
 * Finds the region under [org], or creates it. Zone lists are served from
 * search and can lag a create, so a duplicate-name rejection is looked up
 * again.
 */
async function ensureRegion(api: APIRequestContext, org: string): Promise<Zone> {
    const find = async () =>
        (await zones(api, { tags: 'region', parent_id: org })).find((z) => z.name === REGION_NAME);

    const found = await find();
    if (found) return found;
    const res = await api.post(`${ENGINE_API}/zones`, {
        data: {
            name: REGION_NAME,
            display_name: REGION_NAME,
            description: 'Region owned by the e2e suite.',
            tags: ['region'],
            parent_id: org,
        },
    });
    if (res.ok()) return res.json();
    const body = await res.text();
    for (let i = 0; i < 20; i++) {
        const zone = await find();
        if (zone) return zone;
        await new Promise((r) => setTimeout(r, 500));
    }
    throw new Error(`create region failed: HTTP ${res.status()} ${body}`);
}

async function putMetadata(api: APIRequestContext, zone: string, name: string, details: unknown) {
    const res = await api.put(`${ENGINE_API}/metadata/${zone}`, {
        data: { name, details, description: `${name} (e2e, modelled on mqt.placeos.run)` },
    });
    if (!res.ok()) {
        throw new Error(`put ${name} on ${zone} failed: HTTP ${res.status()} ${await res.text()}`);
    }
}

export async function ensureOrgShape(api: APIRequestContext) {
    const { org, set: org_zone_set } = await ensureOrgZone(api);
    const region = await ensureRegion(api, org);

    const buildings = (await zones(api, { tags: 'building' })).filter(
        (z) => z.parent_id === org || z.parent_id === region.id,
    );
    if (!buildings.length) throw new Error(`no building zone under ${org}; did \`init start\` run?`);

    let moved = 0;
    for (const building of buildings) {
        if (building.parent_id !== region.id) {
            const res = await api.patch(`${ENGINE_API}/zones/${building.id}`, {
                data: { parent_id: region.id },
            });
            if (!res.ok()) {
                throw new Error(
                    `move ${building.id} under ${region.id} failed: HTTP ${res.status()} ${await res.text()}`,
                );
            }
            moved++;
        }
        await putMetadata(api, building.id, 'workplace_app', buildingWorkplaceApp());
    }
    await putMetadata(api, org, 'workplace_app', orgWorkplaceApp());

    return { org, org_zone_set, region: region.id, buildings: buildings.map((b) => b.id), moved };
}

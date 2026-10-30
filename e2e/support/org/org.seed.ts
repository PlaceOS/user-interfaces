/**
 * Gives the stack the zone tree and building settings a production deployment
 * has: the authority's `org_zone`, org -> region -> building -> level, a
 * timezone and display name on each of those zones, and `workplace_app` on the
 * org and the building.
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
    display_name?: string;
    timezone?: string;
    parent_id?: string;
}

/** As on mqt.placeos.run. The apps list no desk availability for a building without a timezone. */
const ZONE_TIMEZONE = 'Australia/Melbourne';
const REGION_TIMEZONE = 'Australia/Sydney';

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
            timezone: REGION_TIMEZONE,
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

/**
 * Sets [fields] on [zone] where it has no value yet. A display name is only
 * given to init's placeholders (`Zone-<tag>-<id>`), so zones that specs create
 * keep theirs. Returns whether the zone changed.
 */
async function fillZone(
    api: APIRequestContext,
    zone: Zone,
    fields: { timezone: string; display_name: string },
): Promise<boolean> {
    const data: Record<string, string> = {};
    if (!zone.timezone) data.timezone = fields.timezone;
    if (!zone.display_name && zone.name.startsWith('Zone-')) data.display_name = fields.display_name;
    if (!Object.keys(data).length) return false;
    const res = await api.patch(`${ENGINE_API}/zones/${zone.id}`, { data });
    if (!res.ok()) {
        throw new Error(`patch zone ${zone.id} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return true;
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

    let filled = 0;
    const fill = async (zone: Zone | undefined, timezone: string, display_name: string) => {
        if (zone && (await fillZone(api, zone, { timezone, display_name }))) filled++;
    };
    await fill(
        (await zones(api, { tags: 'org' })).find((z) => z.id === org),
        ZONE_TIMEZONE,
        'E2E Org',
    );
    await fill(region, REGION_TIMEZONE, REGION_NAME);
    const levels = await zones(api, { tags: 'level' });
    for (const [b, building] of buildings.entries()) {
        const name = buildings.length > 1 ? `E2E Building ${b + 1}` : 'E2E Building';
        await fill(building, ZONE_TIMEZONE, name);
        for (const level of levels.filter((l) => l.parent_id === building.id)) {
            await fill(level, ZONE_TIMEZONE, `${name} Level 1`);
        }
    }

    return { org, org_zone_set, region: region.id, buildings: buildings.map((b) => b.id), moved, filled };
}

/**
 * Seeding parking, which is the most involved resource in this suite.
 *
 * ## What a bookable parking space is made of
 *
 * Working backwards from `libs/bookings/src/lib/parking.service.ts` and
 * `libs/assets/src/lib/parking-assets.fn.ts`, three things have to exist and the
 * stack seeds none of them:
 *
 *  1. a LEVEL zone tagged **`parking`**. `ParkingService.levels` filters the
 *     org's levels down to those carrying that tag, and with none the form has
 *     nowhere to look.
 *  2. a hidden asset CATEGORY named exactly `_PARKING_`, and inside it an asset
 *     TYPE named exactly `_PARKING_SPACES_`. The app creates these itself the
 *     first time an admin saves a space, which is why a fresh stack has neither.
 *  3. one ASSET of that type per worker, on that zone. That is the space.
 *
 * ## Deliberate choices
 *
 * - **A NEW level zone, not a tag on the existing one.** The desks live on the
 *   seeded level, and adding a tag to it would change data every desk spec
 *   depends on. A separate `E2E Parking Level` under the same building keeps
 *   parking's needs entirely inside parking's own seeding.
 * - **One space per worker, plus one spare.** A parking space is exclusive for a
 *   window, like a desk, so each worker owning one removes the only real
 *   contention; the spare exists so a booking can be MOVED between spaces.
 * - **The asset APIs are on the ENGINE api**, not staff-api, and creating any of
 *   this needs ADMIN. Both learned the hard way in the catering seeder; see
 *   `room/catering.seed.ts`.
 * - **Idempotent and cached per process**: the first caller creates, everyone
 *   after finds, and nothing is deleted between runs.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, apiFor, zonesWithTag } from '../api';
import { WORKERS } from '../env';
import { PARKING_PREFIX, spaceCount, spaceFor } from './parking.env';

const PARKING_LEVEL_NAME = 'E2E Parking Level';
/** Exact names the app looks for. Neither is ours to choose. */
const PARKING_CATEGORY = '_PARKING_';
const PARKING_TYPE = '_PARKING_SPACES_';
/** The asset type parking USER records live under, for the deny flag. */
const PARKING_USER_TYPE = '_PARKING_USERS_';

export interface ParkingSpaceIdentity {
    id: string;
    name: string;
}

export interface ParkingSeed {
    zone_id: string;
    type_id: string;
    spaces: ParkingSpaceIdentity[];
}

async function listAll(
    api: APIRequestContext,
    path: string,
    params: Record<string, string> = {},
): Promise<any[]> {
    const res = await api.get(`${ENGINE_API}/${path}`, {
        params: { limit: '500', ...params },
    });
    if (!res.ok()) {
        throw new Error(`list ${path} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return (Array.isArray(body) ? body : (body?.data ?? body?.results ?? [])) as any[];
}

async function create(
    api: APIRequestContext,
    path: string,
    data: Record<string, unknown>,
): Promise<any> {
    const res = await api.post(`${ENGINE_API}/${path}`, { data });
    if (!res.ok()) {
        throw new Error(
            `create ${path} failed: HTTP ${res.status()} ${await res.text()}. ` +
                `Payload: ${JSON.stringify(data).slice(0, 300)}`,
        );
    }
    return res.json();
}

/** The parking-tagged level, created under the seeded building if absent. */
async function ensureParkingLevel(api: APIRequestContext): Promise<string> {
    const [building] = await zonesWithTag(api, 'building');
    if (!building?.id) {
        throw new Error(
            'no building zone to hang a parking level off — the stack is not seeded. ' +
                'Run e2e/stack/up.sh first.',
        );
    }
    const levels = await zonesWithTag(api, 'parking');
    const existing = levels.find((z) => z.name === PARKING_LEVEL_NAME);
    if (existing) return existing.id;

    const zone = await create(api, 'zones', {
        name: PARKING_LEVEL_NAME,
        display_name: PARKING_LEVEL_NAME,
        description: 'Parking level owned by the e2e suite. Safe to delete.',
        // BOTH tags: `level` is what the org hierarchy reads, `parking` is what
        // ParkingService.levels filters on. One without the other leaves the
        // level invisible to one of them.
        tags: ['level', 'parking'],
        parent_id: building.id,
    });
    return zone.id;
}

/** The hidden category and the space type inside it. */
async function ensureSpaceType(api: APIRequestContext): Promise<string> {
    const categories = await listAll(api, 'asset_categories', { hidden: 'true' });
    let category = categories.find((c) => c.name === PARKING_CATEGORY);
    category =
        category ??
        (await create(api, 'asset_categories', { name: PARKING_CATEGORY, hidden: true }));

    const types = await listAll(api, 'asset_types', { category_id: category.id });
    let type = types.find((t) => t.name === PARKING_TYPE);
    type =
        type ??
        (await create(api, 'asset_types', {
            name: PARKING_TYPE,
            category_id: category.id,
            // Required: without it the POST is a 422 "brand: should not be nil".
            brand: 'E2E',
            description: 'Parking spaces owned by the e2e suite. Safe to delete.',
        }));
    return type.id;
}

export async function ensureParking(): Promise<ParkingSeed> {
    const admin = await apiFor('admin', 0);
    try {
        const zone_id = await ensureParkingLevel(admin);
        const type_id = await ensureSpaceType(admin);
        const existing = await listAll(admin, 'assets', { zone_id, type_id });
        const spaces: ParkingSpaceIdentity[] = [];

        // One per worker PLUS one spare — see `spaceCount`.
        for (let i = 0; i < spaceCount(WORKERS); i++) {
            const want = spaceFor(i);
            const found = existing.find((a) => a.name === want.name);
            if (found) {
                spaces.push({ id: found.id, name: want.name });
                continue;
            }
            const asset = await create(admin, 'assets', {
                name: want.name,
                identifier: want.name,
                zone_id,
                asset_type_id: type_id,
                description: `${PARKING_PREFIX}${i}`,
            });
            spaces.push({ id: asset.id, name: want.name });
        }
        return { zone_id, type_id, spaces };
    } finally {
        await admin.dispose();
    }
}

/**
 * Mark a user as denied parking, or clear it.
 *
 * A user's parking permissions are an ASSET, not a user field:
 * `parking-assets.fn.ts` keeps one `_PARKING_USERS_` asset per person, with the
 * flags in `other_data` as the STRINGS 'true' and 'false' — `toParkingUser`
 * compares `String(data.deny) === 'true'`, so a real boolean does not register.
 *
 * Returns the asset id so a spec can delete it in teardown. Needs ADMIN, like
 * everything else asset-shaped.
 */
export async function setParkingDenied(
    email: string,
    denied: boolean,
): Promise<string> {
    const admin = await apiFor('admin', 0);
    try {
        const seed = await parkingSeed();
        const categories = await listAll(admin, 'asset_categories', { hidden: 'true' });
        let category = categories.find((c) => c.name === PARKING_CATEGORY);
        category =
            category ??
            (await create(admin, 'asset_categories', { name: PARKING_CATEGORY, hidden: true }));
        const types = await listAll(admin, 'asset_types', { category_id: category.id });
        let type = types.find((t) => t.name === PARKING_USER_TYPE);
        type =
            type ??
            (await create(admin, 'asset_types', {
                name: PARKING_USER_TYPE,
                category_id: category.id,
                brand: 'E2E',
                description: 'Parking user records owned by the e2e suite.',
            }));

        const existing = await listAll(admin, 'assets', {
            zone_id: seed.zone_id,
            type_id: type.id,
        });
        const found = existing.find(
            (a) => `${a.other_data?.email ?? ''}`.toLowerCase() === email.toLowerCase(),
        );
        const data = {
            identifier: email,
            zone_id: seed.zone_id,
            asset_type_id: type.id,
            other_data: {
                name: email,
                email,
                // STRINGS, deliberately: see the note above.
                deny: denied ? 'true' : 'false',
                special_needs: 'false',
            },
        };
        if (found) {
            const res = await admin.patch(`${ENGINE_API}/assets/${found.id}`, { data });
            if (!res.ok()) {
                throw new Error(
                    `update parking user failed: HTTP ${res.status()} ${await res.text()}`,
                );
            }
            return found.id;
        }
        const created = await create(admin, 'assets', data);
        return created.id;
    } finally {
        await admin.dispose();
    }
}

/** Remove a parking user record, by asset id. */
export async function clearParkingUser(id: string): Promise<void> {
    const admin = await apiFor('admin', 0);
    try {
        await admin.delete(`${ENGINE_API}/assets/${id}`).catch(() => null);
    } finally {
        await admin.dispose();
    }
}

let cache: Promise<ParkingSeed> | null = null;

/** The parking space this worker owns, creating the set on first use. */
export async function spaceForWorker(
    workerIndex: number,
): Promise<ParkingSpaceIdentity> {
    cache = cache ?? ensureParking();
    const seed = await cache.catch((error) => {
        // Do not poison the cache: a stack that was still starting up should not
        // fail every later spec with the same stale error.
        cache = null;
        throw error;
    });
    const space = seed.spaces[workerIndex];
    if (!space) {
        throw new Error(
            `no parking space seeded for worker ${workerIndex}. ${seed.spaces.length} ` +
                `exist, one per worker, so E2E_WORKERS is smaller than the number ` +
                `Playwright is running.`,
        );
    }
    return space;
}

/** The space no worker owns, for "move it to another space". */
export async function altSpace(): Promise<ParkingSpaceIdentity> {
    const seed = await parkingSeed();
    return seed.spaces[seed.spaces.length - 1];
}

/** The whole seed, for specs that need the zone as well as a space. */
export async function parkingSeed(): Promise<ParkingSeed> {
    cache = cache ?? ensureParking();
    return cache;
}

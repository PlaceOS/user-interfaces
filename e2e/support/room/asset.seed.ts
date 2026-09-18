/**
 * Requestable EQUIPMENT for the room specs — ROOM-24.
 *
 * ## How this differs from `catering.seed.ts`, which it is modelled on
 *
 * Both build the same three-layer shape (asset category → asset type → assets
 * on the building zone) on the ENGINE api, and both need admin. Two differences
 * matter:
 *
 *  1. **The category must be VISIBLE.** Catering hides its `_CATERING_`
 *     category on purpose, so menu items never appear in the general asset
 *     lists. Equipment is the opposite: `queryAssets` filters out any asset
 *     whose type is hidden or whose type sits in a hidden category
 *     (`assets.fn.ts`, `queryAssets`/`queryAssetTypes`), so a hidden category
 *     here would leave the request field permanently empty.
 *  2. **Several assets, not one.** A catering item is a line on a menu with a
 *     quantity. A piece of equipment is an individual thing that one meeting
 *     holds and another cannot: `queryGroupAvailability` removes any asset
 *     already covered by a live `asset-request` booking. So the count here is
 *     what decides whether two overlapping meetings can both be equipped, and
 *     one asset would make every second test fail for the wrong reason.
 *
 * ## The form section is off by default
 *
 * The meeting form only renders its equipment section when
 * `app.events.has_assets` is true (`meeting-flow-form.component.ts`,
 * `has_assets`). That is a SETTING, not seeding — see `ROOM_ASSETS_MODE` in
 * `room.settings.ts`. Seeding without the setting gives a form with no section;
 * the setting without seeding gives a section with nothing in it.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, apiFor, zonesWithTag } from '../api';

/** Visible, unlike catering's. See the header. */
export const ASSET_CATEGORY = 'E2E Equipment';
export const ASSET_TYPE = 'E2E AV Equipment';
export const ASSET_ITEM_PREFIX = 'E2E Projector Unit';
/**
 * Three units.
 *
 * One per parallel worker would be tidier, but equipment is requested far less
 * often than a desk and the room specs that use it run in their own slots.
 * Three is enough for a test to take one and still prove a second is available.
 */
export const ASSET_ITEM_COUNT = 3;

export interface EquipmentCatalogue {
    category_id: string;
    type_id: string;
    type_name: string;
    zone_id: string;
    items: Array<{ id: string; name: string }>;
}

async function listAll(
    api: APIRequestContext,
    path: string,
    params: Record<string, string> = {},
) {
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
) {
    const res = await api.post(`${ENGINE_API}/${path}`, { data });
    if (!res.ok()) {
        throw new Error(
            `create ${path} failed: HTTP ${res.status()} ${await res.text()}. ` +
                `Payload: ${JSON.stringify(data).slice(0, 300)}`,
        );
    }
    return res.json();
}

/**
 * Make sure there is requestable equipment on the building, and return it.
 *
 * Idempotent and cached per process, exactly like the catering and room
 * seeders: the first caller creates, everyone after finds.
 */
export async function ensureEquipment(): Promise<EquipmentCatalogue> {
    const admin = await apiFor('admin', 0);
    try {
        const [building] = await zonesWithTag(admin, 'building');
        if (!building?.id) {
            throw new Error('no building zone — the stack is not seeded');
        }

        // No `hidden` filter on the lookup: the categories this matches must be
        // visible, and passing `hidden: 'true'` would search the wrong set.
        const categories = await listAll(admin, 'asset_categories');
        let category = categories.find((c) => c.name === ASSET_CATEGORY);
        category =
            category ??
            (await create(admin, 'asset_categories', {
                name: ASSET_CATEGORY,
                hidden: false,
            }));

        const types = await listAll(admin, 'asset_types', {
            category_id: category.id,
        });
        let type = types.find((t) => t.name === ASSET_TYPE);
        type =
            type ??
            (await create(admin, 'asset_types', {
                name: ASSET_TYPE,
                category_id: category.id,
                // REQUIRED — an asset type without `brand` is a 422 "should not
                // be nil". Same trap as the catering seeder.
                brand: 'E2E',
                description: 'Requestable equipment owned by the e2e suite. Safe to delete.',
            }));

        const existing = await listAll(admin, 'assets', {
            zone_id: building.id,
            type_id: type.id,
        });
        const items: Array<{ id: string; name: string }> = [];
        for (let i = 0; i < ASSET_ITEM_COUNT; i++) {
            const name = `${ASSET_ITEM_PREFIX} ${i}`;
            const found = existing.find((a) => a.name === name);
            if (found) {
                items.push({ id: found.id, name });
                continue;
            }
            const asset = await create(admin, 'assets', {
                name,
                identifier: name,
                zone_id: building.id,
                asset_type_id: type.id,
                description: 'Seeded by the e2e suite',
            });
            items.push({ id: asset.id, name });
        }

        return {
            category_id: category.id,
            type_id: type.id,
            type_name: ASSET_TYPE,
            zone_id: building.id,
            items,
        };
    } finally {
        await admin.dispose();
    }
}

let cache: Promise<EquipmentCatalogue> | null = null;
export async function equipmentCatalogue(): Promise<EquipmentCatalogue> {
    cache = cache ?? ensureEquipment();
    return cache.catch((error) => {
        cache = null;
        throw error;
    });
}

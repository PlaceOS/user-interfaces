/**
 * Seeding a catering menu, so the meeting form offers catering at all.
 *
 * ## Why this is needed
 *
 * The meeting form only renders its catering section when
 * `CateringStateService.available_menu()` is non-empty
 * (`meeting-flow-form.component.ts`: `has_catering`), and that menu is built
 * from ASSETS, not from settings. So without seeding, the whole feature is
 * invisible and a spec would be asserting against a section that can never
 * exist.
 *
 * ## The three things a menu is made of
 *
 * Working backwards from `libs/assets/src/lib/catering-assets.fn.ts`:
 *
 *  1. a HIDDEN asset category named exactly `_CATERING_`. The app creates this
 *     itself when an admin saves a menu item, which is why it does not exist on
 *     a fresh stack.
 *  2. an asset TYPE in that category whose name starts with `CATERING:`. The
 *     part after the prefix is the caterer's name, and `_STANDALONE_` is the
 *     special case meaning "no caterer".
 *  3. an ASSET of that type on the BUILDING zone. Its `other_data` holds the
 *     price, the stock quantity and the category — `toCateringItem` reads every
 *     menu-ish field from there, not from columns.
 *
 * ## These live on the ENGINE api, not staff-api
 *
 * `/api/staff/v1/assets` is a 404 on this image; assets, asset types and asset
 * categories are all `/api/engine/v2/*`. Measured, because the obvious guess
 * wasted a first attempt. Creating them needs ADMIN, like rooms.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, apiFor, zonesWithTag } from '../api';

/** The hidden category the app itself uses. Exact name matters. */
const CATERING_CATEGORY = '_CATERING_';
/** `CATERING:` + caterer name. The prefix is what marks a type as catering. */
export const CATERING_CATEGORY_TYPE = 'CATERING:E2E Caterer';
export const CATERING_ITEM_NAME = 'E2E Sandwich Platter';
export const CATERING_ITEM_PRICE = 12;

export interface CateringMenu {
    category_id: string;
    type_id: string;
    item_id: string;
    item_name: string;
    caterer: string;
    zone_id: string;
}

async function listAll(api: APIRequestContext, path: string, params: Record<string, string> = {}) {
    const res = await api.get(`${ENGINE_API}/${path}`, {
        params: { limit: '500', ...params },
    });
    if (!res.ok()) {
        throw new Error(`list ${path} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return (Array.isArray(body) ? body : (body?.data ?? body?.results ?? [])) as any[];
}

async function create(api: APIRequestContext, path: string, data: Record<string, unknown>) {
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
 * Make sure there is one catering item on the building, and return it.
 *
 * Idempotent and cached per process, exactly like `room.seed.ts`: the first
 * caller creates, everyone after finds. One item is enough — the subject is
 * whether an order reaches the backend, not the menu.
 */
export async function ensureCateringMenu(): Promise<CateringMenu> {
    const admin = await apiFor('admin', 0);
    try {
        const [building] = await zonesWithTag(admin, 'building');
        if (!building?.id) {
            throw new Error('no building zone — the stack is not seeded');
        }

        const categories = await listAll(admin, 'asset_categories', { hidden: 'true' });
        let category = categories.find((c) => c.name === CATERING_CATEGORY);
        category =
            category ??
            (await create(admin, 'asset_categories', {
                name: CATERING_CATEGORY,
                hidden: true,
            }));

        const types = await listAll(admin, 'asset_types', { category_id: category.id });
        let type = types.find((t) => t.name === CATERING_CATEGORY_TYPE);
        type =
            type ??
            (await create(admin, 'asset_types', {
                name: CATERING_CATEGORY_TYPE,
                category_id: category.id,
                // `brand` is REQUIRED — an asset type without it is a 422
                // "should not be nil", which is not obvious from the app, since
                // the app's own menu editor always sends one.
                brand: 'E2E',
                description: 'Catering menu owned by the e2e suite. Safe to delete.',
            }));

        const assets = await listAll(admin, 'assets', {
            zone_id: building.id,
            type_id: type.id,
        });
        let item = assets.find((a) => a.name === CATERING_ITEM_NAME);
        item =
            item ??
            (await create(admin, 'assets', {
                name: CATERING_ITEM_NAME,
                identifier: CATERING_ITEM_NAME,
                zone_id: building.id,
                asset_type_id: type.id,
                // Everything menu-shaped lives in `other_data` — see
                // `toCateringItem`. A quantity of 0 means "out of stock" and the
                // item is then offered but cannot be ordered.
                other_data: {
                    category: 'Food',
                    description: 'Seeded by the e2e suite',
                    unit_price: CATERING_ITEM_PRICE,
                    quantity: 100,
                    options: [],
                    tags: [],
                    accept_points: false,
                    discount_cap: 0,
                    hide_for_zones: [],
                },
            }));

        return {
            category_id: category.id,
            type_id: type.id,
            item_id: item.id,
            item_name: CATERING_ITEM_NAME,
            caterer: CATERING_CATEGORY_TYPE.replace('CATERING:', ''),
            zone_id: building.id,
        };
    } finally {
        await admin.dispose();
    }
}

let cache: Promise<CateringMenu> | null = null;
export async function cateringMenu(): Promise<CateringMenu> {
    cache = cache ?? ensureCateringMenu();
    return cache.catch((error) => {
        cache = null;
        throw error;
    });
}

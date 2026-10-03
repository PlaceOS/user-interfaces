/**
 * Locker banks and lockers — CON-LOCK-01 / CON-LOCK-03.
 *
 * ## This is the "two-level seeding" the plan kept flagging
 *
 * It is the gap that has kept workplace's WP-E2E-09 untested as well. A locker
 * is not one record, it is two levels of asset in a hidden category:
 *
 *   category `_LOCKERS_`            hidden: true
 *     type   `_LOCKER_BANKS_`       one asset per BANK, on a level zone
 *     type   `_LOCKERS_`            one asset per LOCKER, `parent_id` -> its bank
 *
 * Both type names come from `libs/assets/src/lib/locker-assets.fn.ts`, and the
 * category is HIDDEN — unlike the equipment seeder, where a hidden category
 * would make the assets invisible. Lockers are read through
 * `queryLockerBankAssets` / `queryLockerAssets`, which resolve the type id
 * themselves rather than going through the visible-asset filter, so hidden is
 * correct here and copying the equipment seeder's `hidden: false` would put
 * locker banks into the general asset list.
 *
 * ## The fields are duplicated into `other_data`, and both copies matter
 *
 * `locker-state.service.ts` (`lockerBankToAsset`, `lockerToAsset`) writes the
 * display fields BOTH as real asset columns and again inside `other_data`, and
 * the UI reads the `other_data` copy. So a bank seeded with only `identifier`
 * set exists, is returned by the API, and renders with an empty name. That is
 * why this file writes both.
 *
 * `height` and the arrays are stored as STRINGS in `other_data` — `height:
 * '3'`, `tags: '[]'` — because that is what the app writes and reads back.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, zonesWithTag } from '../api';

const LOCKER_CATEGORY = '_LOCKERS_';
const LOCKER_BANK_TYPE = '_LOCKER_BANKS_';
const LOCKER_TYPE = '_LOCKERS_';

export const BANK_NAME = 'E2E Locker Bank';
export const LOCKER_PREFIX = 'E2E Locker';
/** Enough that a test can take one and still prove another is free. */
export const LOCKER_COUNT = 3;

export interface LockerFixture {
    zone_id: string;
    bank: { id: string; name: string };
    lockers: Array<{ id: string; name: string }>;
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
 * Make sure there is one locker bank with lockers in it, and return them.
 *
 * Idempotent: matched by name, so it reuses whatever is already there.
 */
export async function ensureLockers(
    api: APIRequestContext,
): Promise<LockerFixture> {
    // THE BUILDING ZONE, not a level. This was got wrong first time.
    //
    // The locker-bank modal offers LEVELS when you create a bank by hand, so a
    // level looks like the obvious place. But the management page's default
    // view ("All Levels") queries a single zone and that zone is the BUILDING —
    // measured 2026-09-17:
    //
    //   GET /assets?zone_id=<building>&type_id=<_LOCKER_BANKS_>&limit=500
    //
    // Banks seeded onto a level are therefore created correctly, returned by
    // the API, and shown nowhere: the page reports "No locker banks for the
    // selected zone". Same building-not-level rule as the concierge booking
    // listings (see concierge.api.ts).
    //
    // Not explored, and worth a look before relying on it: whether a bank on a
    // level becomes visible once that specific level is selected in the topbar.
    const [building] = await zonesWithTag(api, 'building');
    if (!building) throw new Error('no building zone — the stack is not seeded');
    const level = building;

    const categories = await listAll(api, 'asset_categories', { hidden: 'true' });
    let category = categories.find((c) => c.name === LOCKER_CATEGORY);
    category =
        category ??
        (await create(api, 'asset_categories', {
            name: LOCKER_CATEGORY,
            hidden: true,
        }));

    const types = await listAll(api, 'asset_types', {
        category_id: category.id,
    });
    async function ensureType(name: string) {
        const found = types.find((t) => t.name === name);
        if (found) return found;
        return create(api, 'asset_types', {
            name,
            // `brand` is required, same trap as every other asset type here.
            brand: 'PlaceOS',
            category_id: category.id,
        });
    }
    const bank_type = await ensureType(LOCKER_BANK_TYPE);
    const locker_type = await ensureType(LOCKER_TYPE);

    const existing_banks = await listAll(api, 'assets', {
        zone_id: level.id,
        type_id: bank_type.id,
    });
    let bank = existing_banks.find(
        (a) => a.identifier === BANK_NAME || a.other_data?.name === BANK_NAME,
    );
    bank =
        bank ??
        (await create(api, 'assets', {
            identifier: BANK_NAME,
            name: BANK_NAME,
            map_id: '',
            notes: '',
            zone_id: level.id,
            zones: [level.id],
            asset_type_id: bank_type.id,
            tags: [],
            // Both copies — see the header.
            other_data: {
                name: BANK_NAME,
                map_id: '',
                height: '3',
                tags: '[]',
                images: '[]',
            },
        }));

    const existing_lockers = await listAll(api, 'assets', {
        zone_id: level.id,
        type_id: locker_type.id,
    });
    const lockers: Array<{ id: string; name: string }> = [];
    for (let i = 0; i < LOCKER_COUNT; i++) {
        const name = `${LOCKER_PREFIX} ${i}`;
        const found = existing_lockers.find(
            (a) => a.identifier === name || a.other_data?.name === name,
        );
        if (found) {
            lockers.push({ id: found.id, name });
            continue;
        }
        const created = await create(api, 'assets', {
            identifier: name,
            name,
            map_id: '',
            zone_id: level.id,
            zones: [level.id],
            asset_type_id: locker_type.id,
            bookable: true,
            // THE LINK. A locker without this exists and belongs to no bank, so
            // the management page lists the bank with nothing in it.
            parent_id: bank.id,
            features: [],
            other_data: {
                name,
                map_id: '',
                assigned_to: '',
                assigned_name: '',
                accessible: 'false',
                position: JSON.stringify([i, 0]),
                size: JSON.stringify([1, 1]),
                features: '[]',
            },
        });
        lockers.push({ id: created.id, name });
    }

    return {
        zone_id: level.id,
        bank: { id: bank.id, name: BANK_NAME },
        lockers,
    };
}

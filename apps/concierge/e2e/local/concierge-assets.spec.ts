/**
 * CON-ASSET-01 — concierge's asset list.
 *
 * ## This page does NOT use `simple-table`
 *
 * Measured 2026-09-17: `/#/book/assets/list/items` renders `asset-listing` and
 * `app-asset-item-list`, and there is no `[role=table]` anywhere on it. So the
 * shared `simple-table.page.ts` helper is useless here and the assertions read
 * the component's own text instead. That difference is why the plan had this
 * area down as needing a page object of its own.
 *
 * It groups by CATEGORY and then lists asset TYPES inside it — "E2E Equipment
 * (1 items)" with "E2E AV Equipment" under it — rather than listing individual
 * assets. So the thing to assert is that a seeded category and its type appear,
 * not that three projector units do.
 *
 * ## It reuses the equipment fixture
 *
 * `asset.seed.ts` (from the workplace ROOM-24 work) creates a VISIBLE category
 * `E2E Equipment` with type `E2E AV Equipment` and three units. That is exactly
 * what this page should show, so there is no second seeder — and the fact that
 * a fixture created for the workplace suite shows up correctly in concierge is
 * itself worth one assertion.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    ASSET_CATEGORY,
    ASSET_TYPE,
    ensureEquipment,
} from '../../../../e2e/support/room/asset.seed';

const ASSET_LIST_ROUTE = '/#/book/assets/list/items';

test.describe('concierge assets', () => {
    test('CON-ASSET-01: the asset list shows the seeded category and its type', async ({
        adminPage,
        adminApi,
    }) => {
        // `ensureEquipment` mints its own admin context from the WORKPLACE token
        // file, which the concierge fixtures do not write — so the catalogue is
        // read through this suite's own admin instead, and only created if it is
        // genuinely absent.
        const existing = await adminApi.get('/api/engine/v2/asset_types', {
            params: { limit: '500' },
        });
        const body = await existing.json();
        const types = (Array.isArray(body) ? body : (body.data ?? body.results ?? [])) as Array<
            Record<string, any>
        >;
        if (!types.some((type) => type.name === ASSET_TYPE)) {
            await ensureEquipment();
        }

        const crashes: string[] = [];
        adminPage.on('pageerror', (error) => crashes.push(error.message));

        await adminPage.goto(ASSET_LIST_ROUTE);

        const listing = adminPage.locator('app-asset-item-list');
        await expect(
            listing,
            'the asset list never rendered. Note this page uses `asset-listing` / ' +
                '`app-asset-item-list`, NOT simple-table, so the shared table helper ' +
                'does not apply',
        ).toBeVisible({ timeout: 45_000 });

        await expect
            .poll(async () => (await listing.innerText().catch(() => '')).replace(/\s+/g, ' '), {
                message:
                    `the asset list should show the seeded category "${ASSET_CATEGORY}" ` +
                    `and the type "${ASSET_TYPE}" inside it. The list groups by ` +
                    `CATEGORY and lists TYPES, not individual units, so it will not ` +
                    `name the three projector assets`,
                timeout: 30_000,
            })
            .toContain(ASSET_CATEGORY);

        const text = (await listing.innerText()).replace(/\s+/g, ' ');
        expect(
            text,
            `and the type inside that category. Full text: ${text.slice(0, 200)}`,
        ).toContain(ASSET_TYPE);

        expect(
            crashes,
            'the asset list must not throw while rendering',
        ).toEqual([]);
    });
});

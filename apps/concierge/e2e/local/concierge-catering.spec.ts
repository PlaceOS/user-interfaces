/**
 * CON-CAT-01 — concierge's catering menu, `/#/book/catering/menu`.
 *
 * Small, and deliberately so. Of the plan's three catering rows this is the one
 * that can be tested here:
 *
 *   CON-CAT-01  the menu lists the seeded items            -> this file
 *   CON-CAT-02  an order attached to a booking is stored   -> blocked, ROOM-B5
 *   CON-CAT-03  an item created here is offered by workplace -> not yet written
 *
 * CON-CAT-02 is blocked by a finding the workplace room work already proved:
 * **ROOM-B5** — a catering order cannot be linked to a native PlaceOS room
 * booking at all. The order is refused `422 error linking booking to event`,
 * the room booking survives anyway, and the food is never ordered. Concierge's
 * ordering screens hang off the same link, and concierge's own room bookings
 * come from the calendar, which is a placeholder here — so there is no path to
 * a working order on this stack. Recorded rather than attempted.
 *
 * ## What a catering item is
 *
 * An asset, like a parking space rather than like a desk. The workplace
 * catering seeder creates a hidden category, an `CATERING:<caterer>` asset type
 * and an item inside it — so the item's presence in `/assets` is what this test
 * compares the screen against.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    columnIndex,
    waitForAnyRow,
} from '../../../../e2e/support/concierge/simple-table.page';

const CATERING_MENU_ROUTE = '/#/book/catering/menu';

test.describe('concierge catering', () => {
    test('CON-CAT-01: the catering menu lists the seeded items', async ({
        adminPage,
        adminApi,
    }) => {
        // The catering item is an asset whose TYPE name starts with `CATERING:`.
        const types = await (
            await adminApi.get('/api/engine/v2/asset_types', {
                params: { limit: '200' },
            })
        ).json();
        const catering_types = (
            Array.isArray(types) ? types : (types.results ?? [])
        ).filter((t: { name?: string }) => (t.name ?? '').startsWith('CATERING:'));

        test.skip(
            catering_types.length === 0,
            'no CATERING: asset type on this stack — the workplace catering seeder ' +
                'has not run, so there is no menu to assert against. Skipped rather ' +
                'than failed, because that is a missing fixture, not a defect.',
        );

        const assets = await (
            await adminApi.get('/api/engine/v2/assets', { params: { limit: '200' } })
        ).json();
        const type_ids = new Set(catering_types.map((t: { id: string }) => t.id));
        const items = (Array.isArray(assets) ? assets : (assets.results ?? [])).filter(
            (a: { asset_type_id?: string }) => type_ids.has(a.asset_type_id ?? ''),
        );

        expect(
            items.length,
            'there should be at least one seeded catering item to look for',
        ).toBeGreaterThan(0);

        await adminPage.goto(CATERING_MENU_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);
        const name_col = columnIndex(snapshot, 'name');
        const listed = snapshot.rows.map((r) => r[name_col]).join(' | ');

        for (const item of items as Array<{ name: string }>) {
            expect(
                listed,
                `the catering menu should list "${item.name}". It showed: ${listed}`,
            ).toContain(item.name);
        }
    });
});

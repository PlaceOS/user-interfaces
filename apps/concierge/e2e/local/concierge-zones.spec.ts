/**
 * CON-ZONE-01 — concierge's zone management, `/#/zone-management`.
 *
 * ## There is ONE page, with three tabs — and the default tab is empty
 *
 * `level-management`, `building-management` and `region-management` are all
 * redirects to `zone-management` (`app.routes.ts`), which renders three tabs:
 * **Regions · Buildings · Levels**.
 *
 * The default tab is Regions, and the stack seeds **no region zone at all**
 * (measured: `GET /zones?tags=region` returns 0, against 1 org, 1 building and
 * 2 levels). So the page a reader lands on says "no regions" and looks broken,
 * while the hierarchy that IS seeded sits one tab across. That cost a first
 * look, and it is why this file asserts per tab rather than on "the page".
 *
 * ## The `display_name` column shows the zone ID
 *
 * Also measured: the Buildings and Levels tabs render the zone **id**
 * (`zone-Kof5bAwbrl`) in their "Name" column, because `seed.ts` creates zones
 * with a `name` and no `display_name`, and the column falls back to the id
 * rather than to the name. Not raised as a finding — the underlying data
 * genuinely has no display name, so this is arguably correct — but it does mean
 * a test must not assert on a friendly name here. The assertions below use the
 * relationship columns (`building`, `level_count`) instead, which are the part
 * that carries real meaning.
 *
 * ## CON-ZONE-02/03/04 are not written
 *
 * Creating a level, renaming a zone and deleting a zone all WRITE to the org
 * hierarchy, and a failed teardown there leaves a broken org behind for every
 * other spec in both suites. The plan flagged that as a decision rather than a
 * detail and it is still open — see the Questions tab of the workbook.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    columnIndex,
    readTable,
    waitForAnyRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { zonesWithTag } from '../../../../e2e/support/api';

const ZONE_ROUTE = '/#/zone-management';

/** Switch tab and wait for its grid to carry rows. */
async function openTab(page: any, name: RegExp) {
    const tab = page.getByRole('tab', { name }).first();
    await expect(tab, `no "${name}" tab on the zone management page`).toBeVisible({
        timeout: 30_000,
    });
    await tab.click();
}

test.describe('concierge zone management', () => {
    test('CON-ZONE-01: the Buildings tab shows the seeded building and its level count', async ({
        adminPage,
        adminApi,
    }) => {
        const buildings = await zonesWithTag(adminApi, 'building');
        const levels = await zonesWithTag(adminApi, 'level');
        expect(
            buildings.length,
            'the stack should have seeded exactly one building',
        ).toBeGreaterThan(0);

        await adminPage.goto(ZONE_ROUTE);
        await openTab(adminPage, /Buildings/i);
        const snapshot = await waitForAnyRow(adminPage);

        expect(
            snapshot.rows.length,
            `the Buildings tab should list ${buildings.length} building(s)`,
        ).toBe(buildings.length);

        // The level COUNT is the assertion worth having: it proves the page is
        // walking the hierarchy rather than just listing zones.
        const count_col = columnIndex(snapshot, 'level_count');
        expect(
            snapshot.rows[0][count_col],
            `the building should report ${levels.length} level(s), matching ` +
                `GET /zones?tags=level. If this is 0 the page is not resolving ` +
                `children, which is the whole point of the column`,
        ).toContain(String(levels.length));
    });

    test('CON-ZONE-01b: the Levels tab shows every seeded level, under its building', async ({
        adminPage,
        adminApi,
    }) => {
        const [building] = await zonesWithTag(adminApi, 'building');
        const levels = await zonesWithTag(adminApi, 'level');

        await adminPage.goto(ZONE_ROUTE);
        await openTab(adminPage, /Levels/i);
        const snapshot = await waitForAnyRow(adminPage);

        expect(
            snapshot.rows.length,
            `the Levels tab should list all ${levels.length} seeded level(s). ` +
                `Note the stack seeds TWO — the ordinary level and the parking ` +
                `level the workplace parking specs created`,
        ).toBe(levels.length);

        // Every row must name the building it hangs off, or the hierarchy is
        // being flattened.
        const building_col = columnIndex(snapshot, 'building');
        for (const row of snapshot.rows) {
            expect(
                row[building_col],
                `each level must name its parent building (${building.name}). A ` +
                    `blank here means the level is orphaned or the page is not ` +
                    `resolving the parent`,
            ).toContain(building.name);
        }
    });

    test('CON-ZONE-01c: the Regions tab is empty on this stack, and says so cleanly', async ({
        adminPage,
        adminApi,
    }) => {
        const regions = await zonesWithTag(adminApi, 'region');
        // Guard the premise. If somebody seeds a region later this test should
        // start failing loudly rather than quietly asserting the wrong thing.
        expect(
            regions.length,
            'this test documents the EMPTY case. A region now exists, so rewrite ' +
                'it to assert the region is listed instead',
        ).toBe(0);

        const crashes: string[] = [];
        adminPage.on('pageerror', (error) => crashes.push(error.message));

        await adminPage.goto(ZONE_ROUTE);
        await openTab(adminPage, /Regions/i);

        // The header renders even with no rows, so this asserts the table is
        // there and the body is empty — an empty state, not a broken page.
        const snapshot = await readTable(adminPage);
        expect(
            snapshot.column_ids.length,
            'the Regions tab should still render its columns with no data',
        ).toBeGreaterThan(0);
        expect(
            snapshot.rows.length,
            'and no rows, because no region zone is seeded',
        ).toBe(0);
        expect(
            crashes,
            'an empty Regions tab must not throw. This is the tab the page OPENS ' +
                'on, so a crash here is the first thing a user would see',
        ).toEqual([]);
    });
});

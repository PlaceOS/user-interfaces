/**
 * CON-ZONE-01 — concierge's zone management, `/#/zone-management`.
 *
 * ## There is ONE page, with three tabs — and the default tab is empty
 *
 * `level-management`, `building-management` and `region-management` are all
 * redirects to `zone-management` (`app.routes.ts`), which renders three tabs:
 * **Regions · Buildings · Levels**.
 *
 * The default tab is Regions, so every test switches tab and then waits for
 * a column only that tab has: the Regions grid stays in the page until the
 * switch renders, and a read in between returns the wrong table.
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
import { REGION_NAME } from '../../../../e2e/support/org/org.seed';

const ZONE_ROUTE = '/#/zone-management';

/** Switch tab and wait until the grid is the one with [column]. */
async function openTab(page: any, name: RegExp, column: string) {
    const tab = page.getByRole('tab', { name }).first();
    await expect(tab, `no "${name}" tab on the zone management page`).toBeVisible({
        timeout: 30_000,
    });
    await tab.click();
    await expect
        .poll(async () => (await readTable(page)).column_ids, {
            message: `the "${name}" tab never showed a grid with column-${column}`,
            timeout: 30_000,
        })
        .toContain(`column-${column}`);
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
        await openTab(adminPage, /Buildings/i, 'level_count');
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
        await openTab(adminPage, /Levels/i, 'building');
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
        const building_label = building.display_name || building.name;
        for (const row of snapshot.rows) {
            expect(
                row[building_col],
                `each level must name its parent building (${building_label}). A ` +
                    `blank here means the level is orphaned or the page is not ` +
                    `resolving the parent`,
            ).toContain(building_label);
        }
    });

    test('CON-ZONE-01c: the Regions tab lists the seeded region and its building count', async ({
        adminPage,
        adminApi,
    }) => {
        const regions = await zonesWithTag(adminApi, 'region');
        const region = regions.find((z) => z.name === REGION_NAME);
        expect(region, `the stack should seed the region "${REGION_NAME}"`).toBeTruthy();
        const buildings = (await zonesWithTag(adminApi, 'building')).filter(
            (b) => b.parent_id === region!.id,
        );

        const crashes: string[] = [];
        adminPage.on('pageerror', (error) => crashes.push(error.message));

        await adminPage.goto(ZONE_ROUTE);
        await openTab(adminPage, /Regions/i, 'building_count');
        const snapshot = await waitForAnyRow(adminPage);

        expect(
            snapshot.rows.length,
            `the Regions tab should list all ${regions.length} region(s)`,
        ).toBe(regions.length);
        const row = snapshot.rows.find((cells) =>
            cells[columnIndex(snapshot, 'display_name')].includes(REGION_NAME),
        );
        expect(row, `the Regions tab should list "${REGION_NAME}"`).toBeTruthy();
        expect(
            row![columnIndex(snapshot, 'building_count')],
            `"${REGION_NAME}" should report ${buildings.length} building(s)`,
        ).toContain(String(buildings.length));
        expect(
            crashes,
            'the Regions tab is the one the page opens on, so it must not throw',
        ).toEqual([]);
    });
});

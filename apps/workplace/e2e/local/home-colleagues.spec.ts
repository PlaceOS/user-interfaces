/**
 * HOME-11 — the colleagues list in the home page sidebar.
 *
 * A colleague list is stored per user, in its own `contacts` metadata document
 * (`landing-state.service.ts`: `updateMetadata(user.id, { name: 'contacts' })`).
 * That makes the failure mode the same one every favourites feature has: a name
 * that appears in the list and is forgotten on reload looks perfect in a
 * screenshot and is useless to the person who added it.
 *
 * Asserted on the BACKEND. Note the document is `contacts` and NOT the
 * `favourite_team_members` key that `libs/common/constants.ts` advertises — a
 * first draft of this file assumed the constant and failed twice.
 *
 * ## The search is local, unlike the desk form's host picker
 *
 * `landing-state.service.ts::search_fn` uses `queryUsers` — the PlaceOS user
 * list — whenever `basic_user_search` is set OR `colleagues_require_auth` is
 * anything other than `false`. The second is undefined by default, so the local
 * list is the default path and this needs no settings at all. Contrast DESK-14,
 * where the host picker goes to the calendar directory and 500s here.
 *
 * Cleared either side through a read-modify-write: the settings blob is shared
 * with the visitor specs' invitee list and every area's favourites.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import {
    CONTACTS_DOC,
    readContacts,
    setContacts,
} from '../../../../e2e/support/home/home.api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

test.describe('home page — colleagues', () => {
    test('a colleague added from the sidebar is saved against the user', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have somebody to add');
        const colleague = staffEmail(theirs);

        // Start from none: a colleague left by an earlier run would let the
        // assertion pass without this test having done anything.
        await setContacts(staffApi, []);

        try {
            const home = new LandingPage(staffPage);
            await home.open();
            await home.showTab('people');
            await home.addColleague(colleague);

            await expect(async () => {
                const saved = JSON.stringify(await readContacts(staffApi));
                expect(
                    saved.toLowerCase(),
                    `${colleague} should be saved in the "${CONTACTS_DOC}" document, ` +
                        `got ${saved}`,
                ).toContain(colleague.toLowerCase());
            }).toPass({ timeout: 30_000 });
        } finally {
            await setContacts(staffApi, []);
        }
    });

    test('removing a colleague clears them from the saved list', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have somebody to remove');
        const colleague = staffEmail(theirs);

        // Seeded through the API rather than through the UI: this test is about
        // REMOVING, and adding through the form is the other test's subject.
        await setContacts(staffApi, [{ email: colleague, name: colleague.split('@')[0] }]);

        try {
            const home = new LandingPage(staffPage);
            await home.open();
            await home.showTab('people');

            // The row shows the person's NAME, not their address, so the lookup
            // normalises both sides — see `colleagueIndex`.
            await expect(
                home.colleagueRows,
                'the seeded colleague should be listed in the sidebar',
            ).toHaveCount(1, { timeout: 20_000 });
            const index = await home.colleagueIndex(colleague);
            if (index < 0) {
                const shown = await home.colleagues.innerText().catch(() => '');
                throw new Error(
                    `${colleague} was saved but cannot be found in the sidebar. The ` +
                        `panel shows: "${shown.replace(/\s+/g, ' ').trim().slice(0, 200)}". ` +
                        `Rows are labelled with the display name, so check the user ` +
                        `exists in the directory.`,
                );
            }

            // The remove control is behind the row's overflow menu.
            await home.colleagueRows.nth(index).click({ timeout: 10_000 });
            const remove = staffPage
                .locator('.cdk-overlay-container button[name="remove-colleague"]')
                .first();
            await expect(remove, 'the colleague menu has no remove action').toBeVisible({
                timeout: 10_000,
            });
            await remove.click();

            await expect(async () => {
                const saved = JSON.stringify(await readContacts(staffApi));
                expect(
                    saved.toLowerCase(),
                    `${colleague} should be gone from the "${CONTACTS_DOC}" document, ` +
                        `got ${saved}`,
                ).not.toContain(colleague.toLowerCase());
            }).toPass({ timeout: 30_000 });
        } finally {
            await setContacts(staffApi, []);
        }
    });
});

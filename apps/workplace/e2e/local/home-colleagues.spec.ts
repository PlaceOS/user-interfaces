/**
 * HOME-11 — the colleagues list on the home page.
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
 * ## Add is a modal, remove is a row menu
 *
 * "Add Colleagues" opens `add-colleagues-modal`: search, select, add. Each row
 * of the list has a menu, and its `person_remove` action removes the row.
 *
 * The `contacts` document is this worker's own, so it is written whole.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import {
    CONTACTS_DOC,
    readContacts,
    setContacts,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';

test.describe('home page — colleagues', () => {
    test('a colleague added from the home page is saved against the user', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have somebody to add');
        const colleague = staffEmail(theirs);

        await setContacts(staffApi, []);

        try {
            const home = new LandingNewPage(staffPage);
            await home.open();
            await home.addColleague(colleague);

            await expect(
                home.colleague(colleague),
                'the colleague should be a row of the list after the add',
            ).toBeVisible();
            // Saved, not merely rendered: the list updates optimistically.
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

        await setContacts(staffApi, [{ email: colleague, name: colleague.split('@')[0] }]);

        try {
            const home = new LandingNewPage(staffPage);
            await home.open();
            await expect(
                home.colleague(colleague),
                'the seeded colleague should be listed on the home page',
            ).toBeVisible({ timeout: 20_000 });

            const remove = await home.colleagueAction(colleague, 'person_remove');
            await remove.click();
            // The remove asks for confirmation first.
            await home.acceptConfirm();

            await expect(home.colleague(colleague)).toHaveCount(0);
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

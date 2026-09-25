/**
 * HOME-12 — "meeting with" a colleague from the home page.
 *
 * A shortcut with a real risk: it opens the meeting form with somebody already
 * invited. If it opened the form with the WRONG person, or with nobody, the user
 * would send an invitation to a meeting the intended colleague never hears
 * about — and the form looks perfectly normal either way.
 *
 * What is asserted is the handoff: the right person arrives on the form as an
 * attendee. Deliberately NOT asserted: sending the meeting. What happens to
 * attendees once a meeting is booked is ROOM-09's job, and the host handling on
 * that form is a known defect (ROOM-B8), so carrying this through to a booking
 * would fail for a reason that has nothing to do with this shortcut.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { readContacts, setContacts } from '../../../../e2e/support/home/home.api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

test.describe('home page — meeting with a colleague', () => {
    test('the shortcut opens the meeting form with that colleague invited', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have a colleague');
        const colleague = staffEmail(theirs);

        // Seeded through the API: adding a colleague through the UI is
        // HOME-11's subject, and this test starts from having one.
        await setContacts(staffApi, [
            { email: colleague, name: colleague.split('@')[0] },
        ]);

        try {
            const home = new LandingPage(staffPage);
            await home.open();
            await home.showTab('people');
            await expect(
                home.colleagueRows,
                'the seeded colleague should be listed before the shortcut is used',
            ).toHaveCount(1, { timeout: 20_000 });

            const index = await home.colleagueIndex(colleague);
            expect(index, `${colleague} is not findable in the sidebar`).toBeGreaterThanOrEqual(0);
            await home.colleagueRows.nth(index).click({ timeout: 10_000 });

            const action = staffPage
                .locator('.cdk-overlay-container button[name="meeting-with-colleague"]')
                .first();
            await expect(
                action,
                'the colleague menu has no "meeting with" action',
            ).toBeVisible({ timeout: 10_000 });
            await action.click();

            await expect(
                staffPage,
                'the shortcut should open the meeting form',
            ).toHaveURL(/#\/book\/(meeting|spaces)/, { timeout: 30_000 });

            const form = staffPage.locator('meeting-flow-form');
            await expect(form, 'the meeting form never rendered').toBeVisible({
                timeout: 30_000,
            });

            // The chip shows the person's NAME or the part before the @, never
            // the whole address — the same labelling the attendee list uses
            // everywhere else in this app.
            const chips = staffPage.locator('a-user-list-field mat-chip-row[user]');
            await expect(
                chips,
                `the meeting form should open with ${colleague} already invited — an ` +
                    `empty attendee list means the shortcut lost the person it was ` +
                    `started from`,
            ).toHaveCount(1, { timeout: 30_000 });
            const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
            const label = await chips.first().innerText();
            expect(
                flat(label),
                `the attendee should be ${colleague}; the chip reads "${label.trim()}"`,
            ).toContain(flat(colleague.split('@')[0]));
        } finally {
            await setContacts(staffApi, []);
        }
    });
});

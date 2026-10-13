/**
 * HOME-12 — "meeting with" a colleague from the home page.
 *
 * A shortcut with a real risk: it opens the meeting form with somebody already
 * invited. If it opened the form with the WRONG person, or with nobody, the user
 * would send an invitation to a meeting the intended colleague never hears
 * about — and the form looks perfectly normal either way.
 *
 * What is asserted is the handoff: the right person arrives on the form as an
 * attendee. The attendees are on the LAST step of the meeting flow, so the
 * test goes through the first two steps to see them. Deliberately NOT asserted: sending the meeting. What happens to
 * attendees once a meeting is booked is ROOM-09's job, and the host handling on
 * that form is a known defect (ROOM-B8), so carrying this through to a booking
 * would fail for a reason that has nothing to do with this shortcut.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { uniqueTitle } from '../../../../e2e/support/api';
import { setContacts } from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';

test.describe('home page — meeting with a colleague', () => {
    test('the shortcut opens the meeting form with that colleague invited', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have a colleague');
        const colleague = staffEmail(theirs);
        const room = await roomForWorker(mine);
        const title = uniqueTitle('E2E Home Meeting With');

        await setContacts(staffApi, [{ email: colleague, name: colleague.split('@')[0] }]);
        // The room list reads free rooms from the bookings in this mode. The
        // default mode asks the calendar, which this stack does not have.
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const home = new LandingNewPage(staffPage);
            const flow = new MeetingFlow(staffPage);
            await home.open();
            await expect(
                home.colleague(colleague),
                'the seeded colleague should be listed before the shortcut is used',
            ).toBeVisible({ timeout: 20_000 });

            const action = await home.colleagueAction(colleague, 'event');
            await action.click();
            await expect(
                staffPage,
                'the shortcut should open the meeting form',
            ).toHaveURL(/#\/book\/meeting\/form/, { timeout: 30_000 });

            // The shortcut puts the colleague on the form 300 ms after the
            // route change, and that write makes a new form. A title typed
            // before it is lost, so the first step is tried until it holds.
            // A user who types in that window loses the title the same way:
            // this is REG-10 on the meeting flow, and a second try goes in
            // the report.
            let tries = 0;
            await expect(async () => {
                tries += 1;
                await flow.title.fill(title);
                await flow.searchRooms.click();
                await expect(staffPage).toHaveURL(/view=1/, { timeout: 2_000 });
            }).toPass({ timeout: 30_000 });
            if (tries > 1) {
                testInfo.annotations.push({
                    type: 'REG-10',
                    description: `the meeting flow needed ${tries} tries to keep the title and reach the room step`,
                });
            }
            await flow.selectRoom(room.name);
            await flow.continue.click();

            const chips = flow.options.locator('a-user-list-field mat-chip-row[user]');
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

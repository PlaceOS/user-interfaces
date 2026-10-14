/**
 * NEW-TEAM-01, NEW-TEAM-02 — `/team-schedule`, as a NON-ADMIN, against a real
 * local backend.
 *
 * ## Isolation
 *
 * The colleague is the non-admin of ANOTHER worker, so a booking made for
 * them shows in that worker's own pages. Two rules keep that from being a
 * race:
 *
 *  - The booking is four weeks on. No spec looks at that week: the home page
 *    shows today only, and the other areas keep their slots within three weeks
 *    (see `desk.env.ts` and `home.env.ts`).
 *  - It is on THIS worker's desk, so no other worker competes for the window.
 *
 * The contacts and the favourites are documents of this worker's own user.
 */
import { APIRequestContext } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import { WORKERS, deskFor } from '../../../../e2e/support/env';
import {
    ENGINE_API,
    STAFF_API,
    asList,
    deleteBooking,
    uniqueTitle,
    type Booking,
} from '../../../../e2e/support/api';
import { otherStaffEmail } from '../../../../e2e/support/bookings/bookings.env';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';
import {
    readContacts,
    readUserSettings,
    setContacts,
    setUserSetting,
} from '../../../../e2e/support/home/home.api';
import { TeamSchedulePage } from '../../../../e2e/support/team/team-schedule.page';

/** How many weeks on the colleague booking is. See the isolation note. */
const WEEKS_ON = 4;

/** The user setting that holds the favourite colleagues. */
const FAVOURITES_KEY = 'favourite_team_members';

/**
 * The name the row shows for a colleague.
 *
 * The page reads each contact from the directory by address, so the row shows
 * the directory name and not the name in the contacts document.
 */
async function directoryName(api: APIRequestContext, email: string): Promise<string> {
    const res = await api.get(`${ENGINE_API}/users/${encodeURIComponent(email)}`);
    if (!res.ok()) {
        throw new Error(`read user ${email} failed: HTTP ${res.status()} ${await res.text()}`);
    }
    return (await res.json()).name;
}

/** Midday of the Monday that is `WEEKS_ON` weeks on, as a one hour window. */
function mondaySlot() {
    const day = new Date();
    day.setHours(12, 0, 0, 0);
    // getDay() has Sunday as 0. The table has Monday as the first day.
    const days_from_monday = (day.getDay() + 6) % 7;
    day.setDate(day.getDate() - days_from_monday + WEEKS_ON * 7);
    const start = Math.floor(day.valueOf() / 1000);
    return { start, end: start + 3600 };
}

/**
 * Delete the desk bookings that a colleague has on a desk in a window.
 *
 * `releaseAsset` cannot do this: it lists the caller's own bookings, and
 * these belong to the colleague. The listing by address returns them.
 */
async function releaseColleagueDesk(
    api: APIRequestContext,
    email: string,
    desk_id: string,
    from: number,
    to: number,
): Promise<void> {
    const res = await api.get(`${STAFF_API}/bookings`, {
        params: { type: 'desk', email, period_start: String(from), period_end: String(to) },
    });
    if (!res.ok()) return;
    for (const booking of asList<Booking>(await res.json())) {
        if (booking.asset_id === desk_id && !booking.deleted) {
            await deleteBooking(api, booking.id);
        }
    }
}

test.describe('team schedule', () => {
    test('NEW-TEAM-01: a colleague from the contacts is listed, with their desk booking on its day', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const colleague = otherStaffEmail(testInfo.parallelIndex, WORKERS);
        const name = await directoryName(staffApi, colleague);
        const desk = deskFor(testInfo.parallelIndex);
        const slot = mondaySlot();
        const team = new TeamSchedulePage(staffPage);
        const before = await readContacts(staffApi);

        await releaseColleagueDesk(staffApi, colleague, desk.id, slot.start - 3600, slot.end + 3600);
        await setContacts(staffApi, [{ email: colleague, name }]);
        const created = await createDeskBookingViaApi(staffApi, {
            desk,
            title: uniqueTitle('E2E Team'),
            ...slot,
            user: { email: colleague },
        });

        try {
            await team.open();
            await expect(team.member(name), 'the contact is a row of the table').toBeVisible({
                timeout: 30_000,
            });
            // This week the colleague has no desk booking from this spec.
            await expect(team.day(name, 0)).not.toContainText(desk.id);

            await team.goForward(WEEKS_ON);
            const monday = team.day(name, 0);
            // The booking is made through the API with no display name, so
            // the day shows the desk id. A booking from the app shows the name.
            await expect(monday, 'Monday shows the desk of the booking').toContainText(
                new RegExp(`${desk.id}|${desk.name}`),
                { timeout: 20_000 },
            );
            await expect(
                team.day(name, 1),
                'Tuesday has no booking, so it does not show the desk',
            ).not.toContainText(new RegExp(`${desk.id}|${desk.name}`));
        } finally {
            await deleteBooking(staffApi, created.id);
            await setContacts(staffApi, before);
        }
    });

    test('NEW-TEAM-02: a favourite colleague is saved, and the Favorites view lists only them', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const colleague = otherStaffEmail(testInfo.parallelIndex, WORKERS);
        const name = await directoryName(staffApi, colleague);
        const other = 'support@place.tech';
        const other_name = await directoryName(staffApi, other);
        const team = new TeamSchedulePage(staffPage);
        const contacts_before = await readContacts(staffApi);
        const favourites_before: unknown = (await readUserSettings(staffApi))[FAVOURITES_KEY];

        // Two contacts, no favourites: the view has something to filter out.
        await setContacts(staffApi, [
            { email: colleague, name },
            { email: other, name: other_name },
        ]);
        await setUserSetting(staffApi, FAVOURITES_KEY, []);

        try {
            await team.open();
            await expect(team.member(name)).toBeVisible({ timeout: 30_000 });
            await expect(team.member(other_name)).toBeVisible();
            await expect(team.favourite(name).locator('icon')).toHaveText('star_outline');

            await team.favourite(name).click();
            await expect(team.favourite(name).locator('icon')).toHaveText('star');

            await team.viewLink('favorites').click();
            await expect(staffPage).toHaveURL(/view=favorites/);
            await expect(team.member(name)).toBeVisible();
            await expect(team.member(other_name)).toHaveCount(0);

            // The save to the user settings is delayed, so poll the backend.
            await expect
                .poll(async () => (await readUserSettings(staffApi))[FAVOURITES_KEY], {
                    message: 'the favourite is in the user settings, not only on the page',
                    timeout: 20_000,
                })
                .toEqual([colleague]);
        } finally {
            await setContacts(staffApi, contacts_before);
            await setUserSetting(
                staffApi,
                FAVOURITES_KEY,
                Array.isArray(favourites_before) ? favourites_before : [],
            );
        }
    });
});

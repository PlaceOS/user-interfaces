/**
 * ROOM-25 — a recurring room booking stores its pattern, and the instances exist.
 *
 * ## The headline: a recurring meeting booked through the app disappears
 *
 * Measured 2026-09-17, and it is a NEW finding — **ROOM-B10**. It is the worst
 * of the room findings by outcome, because the user is shown a success screen
 * and then cannot find the booking anywhere.
 *
 * Choosing "Weekly on Tuesday" on the form and confirming gives:
 *
 *   POST /api/staff/v1/bookings  -> 201
 *   { booking_type: 'room', recurrence_type: 'daily',
 *     recurrence_days: 0, recurrence_interval: 1 }      <- no day, and no end
 *
 * `recurrence_type: 'daily'` is CORRECT and not the bug: `toBookingRecurrence`
 * deliberately encodes a weekly pattern as daily-plus-a-weekday-bitmask
 * (`libs/common/src/lib/recurrence.ts`). The bug is that the bitmask is **0** —
 * no weekday at all — so the pattern matches no day, and:
 *
 *   GET /bookings/<id>                       -> 200, the row is there
 *   GET /bookings?type=room&period_start=…   -> the booking is NOWHERE
 *
 * Tried with five different query shapes, including an eleven-day window with
 * `limit=500`, `include_deleted`, `include_checked_out`, an `email` filter and a
 * `zones` filter. Only a direct fetch by id finds it. So the meeting is stored,
 * the user is told it worked, and no listing, schedule or cancel screen can ever
 * show it to them.
 *
 * ## Why the cause is certainly client-side, and that is what the control proves
 *
 * The second test below is ACTIVE and passing. It creates the same recurrence
 * **correctly formed** straight through the API — `recurrence_days: 8`
 * (Wednesday), a `recurrence_end`, and `timezone`, which is mandatory for a
 * recurring booking and is a 422 without it — and the backend then behaves
 * perfectly:
 *
 *   Wed +6d   -> listed
 *   Thu +7d   -> NOT listed   (correct: weekly on Wednesday)
 *   Wed +13d  -> listed
 *   Wed +20d  -> listed
 *
 * So recurrence expansion works. The app's own payload is what is malformed.
 * Keeping that control in the file is the difference between "recurring bookings
 * are broken" and a finding a developer can act on in one sitting.
 *
 * Cause, in one line: `toBookingRecurrence` builds the bitmask from
 * `r.weekdays`, and the form's model reaches it with `weekdays` empty — the UI
 * derives the label "Weekly on Tuesday" from the chosen date, but never puts
 * that day in the model.
 *
 * ## Preconditions
 *
 * `app.events.allow_recurrence` (ROOM_RECURRENCE_MODE) or the control is not
 * rendered. The component also hides it for meetings longer than 24 hours, so a
 * recurrence test cannot also be an all-day test.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { STAFF_API, deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import {
    ROOM_SLOTS_3,
    THIRD_DAY,
    slotFor,
} from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    ROOM_BASE_SETTINGS,
    ROOM_RECURRENCE_MODE,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';
import { setDate } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;

/** Midnight-to-midnight, local, for a day this many days out. */
function dayBounds(days_ahead: number) {
    const start = new Date();
    start.setDate(start.getDate() + days_ahead);
    start.setHours(0, 0, 0, 0);
    const from = Math.floor(start.valueOf() / 1000);
    return { from, to: from + DAY };
}

/** Room bookings on one local day. */
async function roomBookingsOn(
    api: Parameters<typeof deleteBooking>[0],
    days_ahead: number,
) {
    const { from, to } = dayBounds(days_ahead);
    const res = await api.get(`${STAFF_API}/bookings`, {
        params: {
            type: 'room',
            period_start: String(from),
            period_end: String(to),
            limit: '500',
        },
    });
    expect(res.ok(), `GET /bookings failed: HTTP ${res.status()}`).toBe(true);
    const body = await res.json();
    return (Array.isArray(body) ? body : (body.results ?? [])) as Array<
        Record<string, any>
    >;
}

test.describe('recurring room bookings', () => {
    /**
     * `fixme` on ROOM-B10. The assertions are what SHOULD happen; drop the
     * `fixme` once the form puts the chosen weekday into the model.
     */
    test.fixme('ROOM-25: a recurring meeting stores its pattern and its instances appear', async ({
        staffPage,
        staffApi,
    }) => {
        const room = await roomForWorker(test.info().parallelIndex);
        const slot = slotFor(ROOM_SLOTS_3.recurring.hour, THIRD_DAY);
        const title = uniqueTitle('E2E Recurring');
        const created: number[] = [];

        await releaseRoom(
            staffApi,
            room.id,
            Math.floor(Date.now() / 1000) - 2 * DAY,
            Math.floor(Date.now() / 1000) + 30 * DAY,
        );

        await useSettings(staffPage, {
            ...ROOM_BASE_SETTINGS,
            ...ROOM_RECURRENCE_MODE,
        });
        const form = new MeetingForm(staffPage);
        await form.open();
        // The DATE first: the recurrence options are named after the weekday of
        // the chosen date ("Weekly on Tuesday"), so they are wrong before it is
        // set, and the start-time list is for the wrong day too.
        await setDate(form, staffPage, slot.date_ms);
        await staffPage.waitForTimeout(2_000);

        const recurrence = staffPage.locator('recurrence-field mat-select');
        await expect(
            recurrence,
            'the recurrence control is missing — is `app.events.allow_recurrence` ' +
                'set? See ROOM_RECURRENCE_MODE',
        ).toBeVisible({ timeout: 20_000 });
        await recurrence.click();
        const weekly = staffPage.locator('mat-option').filter({ hasText: /^Weekly on/ });
        await expect(
            weekly.first(),
            'the recurrence menu offered no "Weekly on <day>" option',
        ).toBeVisible({ timeout: 15_000 });
        await weekly.first().click();
        await staffPage.waitForTimeout(2_000);

        await form.title.fill(title);
        await form.chooseRoom(room.name);
        await staffPage.waitForTimeout(2_000);
        await form.setStartTime(
            `${String(ROOM_SLOTS_3.recurring.hour).padStart(2, '0')}:00`,
        );
        await staffPage.waitForTimeout(4_000);

        // PROVE the form still holds the pattern immediately before sending, so
        // "the app threw the choice away" can be told apart from "the form
        // reverted itself" — the same guard the rest of the room specs carry.
        await expect(
            recurrence,
            'the recurrence field must still show a weekly pattern at send time',
        ).toContainText(/Weekly on/, { timeout: 10_000 });

        try {
            await form.confirmAndSend();
            await expect(
                form.successPanel,
                'the meeting was refused outright',
            ).toBeVisible({ timeout: 30_000 });

            // 1. The FIRST instance must be findable on its own day. This is the
            //    assertion that fails today: the booking exists but no listing
            //    returns it, because its weekday bitmask is empty.
            await expect
                .poll(
                    async () => {
                        const rows = await roomBookingsOn(staffApi, THIRD_DAY);
                        return rows.filter(
                            (booking) => booking.asset_id === room.id,
                        ).length;
                    },
                    {
                        message:
                            'the recurring meeting does not appear in the bookings ' +
                            'listing for its own day. It IS stored — a direct GET ' +
                            '/bookings/<id> returns it — but it carries ' +
                            'recurrence_days: 0, so it matches no day and no listing, ' +
                            'schedule or cancel screen can show it. The user was shown ' +
                            'a success screen for a meeting they can never find again',
                        timeout: 30_000,
                    },
                )
                .toBeGreaterThan(0);

            const [first] = (await roomBookingsOn(staffApi, THIRD_DAY)).filter(
                (booking) => booking.asset_id === room.id,
            );
            created.push(first.id);

            // 2. The pattern must name the weekday it was booked on.
            expect(
                first.recurrence_days,
                'the stored pattern must include the chosen weekday as a bit flag. ' +
                    '0 means "repeats, on no day" — see recurrence.ts, ' +
                    'toBookingRecurrence. Note recurrence_type "daily" is CORRECT ' +
                    'here: a weekly pattern is deliberately encoded as daily plus a ' +
                    'weekday bitmask',
            ).toBeGreaterThan(0);

            const expected_bit = 1 << new Date(slot.date_ms).getDay();
            expect(
                Number(first.recurrence_days) & expected_bit,
                `the pattern must include the weekday of the booked date ` +
                    `(bit ${expected_bit}), and nothing else about it matters`,
            ).toBe(expected_bit);

            // 3. And the later instances must exist, a week apart.
            for (const week of [1, 2]) {
                const rows = await roomBookingsOn(staffApi, THIRD_DAY + week * 7);
                expect(
                    rows.filter((booking) => booking.asset_id === room.id).length,
                    `a weekly meeting must also be held ${week} week(s) later. ` +
                        `Without this a "recurring" booking is a single meeting`,
                ).toBeGreaterThan(0);
            }
        } finally {
            for (const id of created) await deleteBooking(staffApi, id);
            await releaseRoom(
                staffApi,
                room.id,
                Math.floor(Date.now() / 1000) - 2 * DAY,
                Math.floor(Date.now() / 1000) + 30 * DAY,
            );
        }
    });

    /**
     * The control that makes ROOM-B10 actionable.
     *
     * Active and passing. It sends the recurrence the app SHOULD have sent —
     * straight through the API, no form — and proves the backend expands it
     * correctly. Without this, ROOM-B10 reads as "recurring room bookings do not
     * work", which would send somebody looking in the wrong place.
     */
    test('ROOM-25b: a correctly formed weekly recurrence is expanded by the backend', async ({
        staffApi,
    }) => {
        const room = await roomForWorker(test.info().parallelIndex);
        // Two days clear of the fixme test's slot, so the two cannot contend for
        // the same room.
        const days_ahead = THIRD_DAY + 1;
        const start = new Date();
        start.setDate(start.getDate() + days_ahead);
        start.setHours(14, 0, 0, 0);
        const booking_start = Math.floor(start.valueOf() / 1000);
        const weekday_bit = 1 << start.getDay();
        const title = uniqueTitle('E2E Recurring API');

        await releaseRoom(
            staffApi,
            room.id,
            booking_start - DAY,
            booking_start + 30 * DAY,
        );

        let id: number | undefined;
        try {
            const res = await staffApi.post(`${STAFF_API}/bookings`, {
                data: {
                    booking_type: 'room',
                    asset_id: room.id,
                    asset_name: room.name,
                    booking_start,
                    booking_end: booking_start + 3600,
                    title,
                    // MANDATORY for a recurring booking. Without it the POST is a
                    // 422 `timezone: required for recurring bookings`, which is a
                    // much better error than the app's silent success.
                    timezone: 'Australia/Sydney',
                    recurrence_type: 'daily',
                    recurrence_days: weekday_bit,
                    recurrence_interval: 1,
                    recurrence_end: booking_start + 30 * DAY,
                },
            });
            expect(
                res.ok(),
                `creating a well-formed recurring booking failed: HTTP ` +
                    `${res.status()} ${(await res.text()).slice(0, 300)}`,
            ).toBe(true);
            const stored = await res.json();
            id = stored.id;

            expect(
                stored.recurrence_days,
                'the backend stored the weekday bitmask it was given',
            ).toBe(weekday_bit);

            // The same day, one and two weeks on: present. This is the behaviour
            // the app's own booking never gets.
            for (const week of [0, 1, 2]) {
                const rows = await roomBookingsOn(
                    staffApi,
                    days_ahead + week * 7,
                );
                expect(
                    rows.some((booking) => booking.id === id),
                    `a weekly recurrence must be returned for week ${week}. If this ` +
                        `fails, recurrence expansion itself is broken and ROOM-B10 is ` +
                        `not only a client-side problem`,
                ).toBe(true);
            }

            // And NOT on the following day, or the pattern is really daily.
            const next_day = await roomBookingsOn(staffApi, days_ahead + 1);
            expect(
                next_day.some((booking) => booking.id === id),
                'a weekly recurrence must NOT be returned for the day after. If it ' +
                    'is, the daily-plus-bitmask encoding is being ignored and every ' +
                    'weekly meeting silently holds the room every day',
            ).toBe(false);
        } finally {
            if (id) await deleteBooking(staffApi, id);
            await releaseRoom(
                staffApi,
                room.id,
                booking_start - DAY,
                booking_start + 30 * DAY,
            );
        }
    });
});

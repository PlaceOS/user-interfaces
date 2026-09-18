/**
 * Booking a room through the full UI.
 *
 * Returns what the BACKEND created, parsed from the real POST response, never
 * anything the page rendered — the same principle as `bookDeskViaUI` and
 * `inviteVisitorViaUI`, and the reason this suite can tell "the screen looked
 * right" apart from "the data is right".
 *
 * ## Why the form is filled twice
 *
 * REG-10 / PPT-2643: the booking form is rebuilt when its async init completes
 * and restores defaults, silently dropping anything typed before that. The desk
 * flow works around it by converging on the form state, and the meeting form has
 * the same shape, so the same guard applies here. It is a workaround, and it
 * means this flow cannot DETECT that bug — which is exactly why REG-10 has its
 * own row in the coverage doc rather than being considered covered.
 *
 * ## Two clicks, not one
 *
 * `Confirm` on the form only switches to the confirm screen. Nothing is sent
 * until `confirm-meeting` on that second screen. Both live in
 * `MeetingForm.confirmAndSend`.
 */
import { APIRequestContext, Page, expect } from '@playwright/test';
import { MeetingForm } from './meeting-form.page';
import { RoomBooking } from './room.api';

/** How long to let the form settle before filling it a second time. */
const SETTLE_MS = 1_500;

interface CapturedPost {
    status: number;
    body: string;
    request: string;
    request_bytes: number;
}

/**
 * Watch every booking POST the page makes.
 *
 * Bodies are read while the response is still live — reading them later, after
 * the page has navigated, throws and loses the evidence.
 */
function collectBookingPosts(page: Page) {
    const posts: CapturedPost[] = [];
    const pending: Promise<void>[] = [];
    const onResponse = (r: import('@playwright/test').Response) => {
        if (!r.url().includes('/api/staff/v1/bookings')) return;
        if (r.request().method() !== 'POST') return;
        const request = r.request().postData() ?? '';
        pending.push(
            r
                .text()
                .then((body) => {
                    posts.push({ status: r.status(), body, request, request_bytes: request.length });
                })
                .catch(() => {
                    posts.push({ status: r.status(), body: '', request, request_bytes: request.length });
                }),
        );
    };
    page.on('response', onResponse);
    return {
        async stop(): Promise<CapturedPost[]> {
            page.off('response', onResponse);
            await Promise.all(pending);
            return posts;
        },
    };
}

/**
 * Fill, wait, fill again, and only accept it once the second pass sticks.
 *
 * See the REG-10 note above. `toPass` rather than a bare double-fill so a form
 * still resolving its defaults gets another go instead of failing the spec.
 */
async function fillAndSettle(page: Page, fill: () => Promise<void>): Promise<void> {
    await expect(async () => {
        await fill();
        await page.waitForTimeout(SETTLE_MS);
        await fill();
    }).toPass({ timeout: 45_000 });
}

/**
 * Book a room through the form and return the booking the backend stored.
 *
 * `startTime` and `duration` are optional: a spec that does not care takes
 * whatever the form offers, and one that asserts on stored times says so.
 */
export async function bookRoomViaUI(
    page: Page,
    api: APIRequestContext,
    room: { id: string; name: string },
    title: string,
    options: {
        /** Local ms timestamp of the day to book. Defaults to the form's day. */
        date?: number;
        /** "HH:mm", from the options the form offers. */
        startTime?: string;
        /** Minutes. */
        duration?: number;
        /** Addresses to add to the meeting. */
        attendees?: string[];
        /**
         * Added, then taken off again before sending. The correction has to
         * happen INSIDE the fill, or a retry re-adds the person and invites
         * someone the user removed.
         */
        removeAttendees?: string[];
        /**
         * Catering item names to order. Added AFTER the fill loop, because the
         * catering modal is a three-click flow of its own and a retry would
         * order lunch twice.
         */
        catering?: string[];
        /**
         * Asset TYPE names to request as equipment. Added in the same place and
         * for the same reasons as `catering`: the request carries the room as
         * its delivery location, so it cannot be made before a room is chosen,
         * and the modal is a four-click flow that a retry would run twice.
         *
         * Needs `app.events.has_assets` (ROOM_ASSETS_MODE) and seeded assets
         * (`asset.seed.ts`), or the section is absent / the modal is empty.
         */
        assets?: string[];
        /**
         * Tick All Day. Replaces the window entirely — `_allDayTimeRange`
         * overwrites whatever start and length were chosen — so it is set inside
         * the fill loop and no times are passed with it.
         */
        allDay?: boolean;
        /**
         * Book for somebody else. Needs `events.can_book_for_anyone`, or the
         * field is not rendered at all.
         */
        host?: string;
    } = {},
): Promise<RoomBooking> {
    const form = new MeetingForm(page);
    await form.open();

    // THE ORDER HERE IS LOAD-BEARING, and every step of it was paid for:
    //
    //  1. the date goes FIRST and exactly ONCE. Changing the date resets the
    //     duration to the default, asynchronously — so a date click repeated
    //     inside the retry loop lands AFTER the duration pick and quietly
    //     reverts a 90 minute meeting to the default. That reads as "the form
    //     ignored the duration field", and is not that at all.
    //  2. title and room go through the retry loop, because those are what the
    //     REG-10 form rebuild wipes.
    //  3. the times go LAST, after the rebuild can no longer undo them, and are
    //     given time to land before anything is confirmed.
    if (options.date !== undefined) {
        await setDate(form, page, options.date);
        await page.waitForTimeout(SETTLE_MS);
    }

    const fill = async () => {
        await form.title.fill(title);
        if (options.allDay !== undefined) {
            await form.setAllDay(options.allDay);
        }
        if (options.host) await form.chooseHost(options.host);
        // ROOM BEFORE THE TIMES. The picker carries its own date, start and end
        // filters, and taking a room from it writes those back over the form.
        if ((await form.chosenSpaces.count()) === 0) await form.chooseRoom(room.name);
        for (const attendee of options.attendees ?? []) {
            const already = await form.attendeeChips
                .filter({ hasText: attendee.split('@')[0] })
                .count();
            if (!already) await form.addAttendee(attendee);
        }
        for (const attendee of options.removeAttendees ?? []) {
            await form.removeAttendee(attendee);
        }
        expect(await form.title.inputValue()).toBe(title);
        expect(await form.chosenSpaces.count()).toBe(1);
    };

    await fillAndSettle(page, fill);

    // Catering needs the room to be chosen first — the button is disabled until
    // then — so it cannot go in the fill above, and it is not idempotent.
    for (const item of options.catering ?? []) {
        await form.addCateringItem(item);
    }

    // Equipment, for the same reason and in the same place as catering.
    for (const type_name of options.assets ?? []) {
        await form.addAssetRequest(type_name);
    }

    // The time and duration fields apply to the model ASYNCHRONOUSLY — measured
    // at up to ~2 seconds — and the confirm modal snapshots the model when it
    // opens. Set them, then let them land.
    if (options.duration !== undefined) await form.setDuration(options.duration);
    if (options.startTime) await form.setStartTime(options.startTime);
    if (options.startTime || options.duration !== undefined) {
        await page.waitForTimeout(4_000);
    }

    // PROVE the form still holds what was asked for, immediately before sending.
    //
    // Without this, "the booking came back wrong" has two possible causes that
    // look identical: the app discarded the choice, or the form rebuilt itself
    // and reverted the control before anything was sent (REG-10's family). A
    // finding is only worth reporting once the second has been ruled out.
    if (options.allDay !== undefined) {
        expect(
            await form.isAllDay(),
            'the All Day checkbox must still be set when the meeting is confirmed — ' +
                'if this fails the form reverted it, and nothing can be concluded ' +
                'about what the app stores',
        ).toBe(options.allDay);
    }
    if (options.host) {
        const shown = await form.hostValue();
        const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
        expect(
            flat(shown),
            `the host field must still show ${options.host} when the meeting is ` +
                `confirmed; it shows "${shown}"`,
        ).toContain(flat(options.host.split('@')[0]));
    }

    const posts = collectBookingPosts(page);
    await form.confirmAndSend();

    // Do NOT just assert on the success screen. When the post is refused the
    // confirm dialog stays open and shows a toast, and "success screen never
    // appeared" is the least informative way to report that. Gather the
    // evidence first, then fail with it.
    let reached_success = await form.successPanel
        .waitFor({ state: 'visible', timeout: 30_000 })
        .then(() => true)
        .catch(() => false);
    let captured = await posts.stop();
    let created = captured.filter((p) => p.status >= 200 && p.status < 300);

    // RETRY past REG-09, and only past REG-09.
    //
    // The confirm dialog stays open when a post is refused, so the send can be
    // pressed again without rebuilding the form. That is worth doing when — and
    // only when — every failure looks like the concurrent-write defect
    // (PPT-2642): a burst of booking writes poisons a staff-api connection and
    // the request that lands on it fails for reasons unrelated to what was sent.
    // Its shapes are a 400 "Expected BeginObject but was EOF", a 500 "could not
    // serialize access", and a 422 whose `failures` list is EMPTY — a real
    // validation error always names the field it is unhappy about.
    //
    // Seen here on a full parallel room run: 422 with no failures, on a payload
    // that had just worked twice. Delete this with the rest of the REG-09
    // handling once the stack runs staff-api on pg-orm >= 2.2.4, and do not read
    // a green run as evidence the image is fixed.
    const looks_like_reg09 = (p: CapturedPost) =>
        (p.status === 400 && /Expected BeginObject but was EOF/.test(p.body)) ||
        (p.status === 500 && /could not serialize access/.test(p.body)) ||
        (p.status === 422 && /"failures"\s*:\s*\[\s*\]/.test(p.body));

    for (let attempt = 1; attempt <= 3; attempt++) {
        if (reached_success && created.length) break;
        if (!captured.length || !captured.every(looks_like_reg09)) break;
        console.warn(
            `  ! REG-09 shaped failure on send attempt ${attempt}/3, pressing confirm ` +
                `again — ${captured.map((p) => `HTTP ${p.status}`).join(', ')}`,
        );
        await page.waitForTimeout(600 * attempt);
        const retry = collectBookingPosts(page);
        if (!(await form.confirmButton.isVisible().catch(() => false))) break;
        await form.confirmButton.click();
        reached_success = await form.successPanel
            .waitFor({ state: 'visible', timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        captured = await retry.stop();
        created = captured.filter((p) => p.status >= 200 && p.status < 300);
    }

    if (!reached_success || !created.length) {
        const attempts = captured
            .map(
                (p) =>
                    `HTTP ${p.status} (sent ${p.request_bytes} bytes): ` +
                    `${p.body.slice(0, 200) || '<empty response body>'}` +
                    `\n      request: ${p.request.slice(0, 1200)}`,
            )
            .join('\n    | ');
        const message = await page
            .locator('.cdk-overlay-container')
            .innerText()
            .catch(() => '');
        throw new Error(
            `the room booking did not go through. ` +
                `Booking POSTs: ${attempts || 'none at all — the form refused locally'}. ` +
                `On screen: "${message.replace(/\s+/g, ' ').trim().slice(0, 220)}"`,
        );
    }
    return JSON.parse(created[created.length - 1].body);
}

/** Drive the form's date picker to a given day. */
/**
 * Exported because a spec that drives the form WITHOUT booking still has to set
 * the date before touching the times — the form defaults to today, so a slot on
 * another day has its hour simply absent from the picker. That cost a run.
 */
export async function setDate(form: MeetingForm, page: Page, timestamp_ms: number) {
    await form.dateButton.click();
    const calendar = form.datePicker;
    await expect(calendar, 'the date picker did not open').toBeVisible({ timeout: 10_000 });

    const cells = calendar.locator('button[name="schedule-set-date"]');
    const today_index = await cells.evaluateAll((els) =>
        els.findIndex((el) => !!el.querySelector('div.border-secondary')),
    );
    if (today_index < 0) throw new Error('no "today" cell in the date picker to count from');

    const label = Number(((await cells.nth(today_index).textContent()) ?? '').trim());
    const browser_now = await page.evaluate(() => Date.now());
    const anchor = [0, -1]
        .map((offset) => {
            const day = new Date(browser_now);
            day.setHours(0, 0, 0, 0);
            day.setDate(day.getDate() + offset);
            return day;
        })
        .find((day) => day.getDate() === label);
    if (!anchor) {
        throw new Error(
            `the picker marks day ${label} as today, which is neither today nor ` +
                `yesterday by the browser clock`,
        );
    }

    const target = new Date(timestamp_ms);
    target.setHours(0, 0, 0, 0);
    const days = Math.round((target.valueOf() - anchor.valueOf()) / 86_400_000);
    const index = today_index + days;
    if (index < 0 || index >= (await cells.count())) {
        throw new Error(
            `${target.toDateString()} is outside the days the picker is showing`,
        );
    }
    await cells.nth(index).click();
    await expect(calendar, 'the date picker stayed open after choosing a day').toBeHidden({
        timeout: 10_000,
    });
}

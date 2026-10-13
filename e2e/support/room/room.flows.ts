/**
 * Booking a room through the full UI — the `meeting-flow-new` flow.
 *
 * Returns what the BACKEND created, parsed from the real POST response, never
 * anything the page rendered — the same principle as `bookDeskViaUI` and
 * `inviteVisitorViaUI`, and the reason this suite can tell "the screen looked
 * right" apart from "the data is right".
 *
 * ## Three steps, one send
 *
 * Details, then the room list, then the options. Nothing is sent until
 * Confirm on the last step, and Confirm sends the request at once: there is
 * no separate confirm screen. See `meeting-flow.page.ts`.
 *
 * ## The form is filled once
 *
 * The flow this one replaced was filled twice, because that form was rebuilt
 * when its async init completed (REG-10 / PPT-2643). This flow loads its form
 * when the page opens and does not rebuild it. `bookRoomViaUI` still checks
 * the summary on the last step before it sends, so a value that was lost on
 * the way fails there and not as a wrong booking.
 */
import { APIRequestContext, Page, expect } from '@playwright/test';
import { isReg09 } from '../api';
import { MeetingFlow } from './meeting-flow.page';
import { RoomBooking } from './room.api';

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
 * Book a room through the flow and return the booking the backend stored.
 *
 * `startTime` and `duration` are optional: a spec that does not care takes
 * whatever the flow offers, and one that asserts on stored times says so.
 */
export async function bookRoomViaUI(
    page: Page,
    api: APIRequestContext,
    room: { id: string; name: string },
    title: string,
    options: {
        /** Local ms timestamp of the day to book. Defaults to the flow's day. */
        date?: number;
        /** "HH:mm", from the options the flow offers. */
        startTime?: string;
        /** Minutes. */
        duration?: number;
        /** Addresses to add to the meeting. */
        attendees?: string[];
        /** Added, then taken off again before sending. */
        removeAttendees?: string[];
        /** Catering item names to order. */
        catering?: string[];
        /**
         * Asset TYPE names to request as equipment.
         *
         * Needs `app.events.has_assets` (ROOM_ASSETS_MODE) and seeded assets
         * (`asset.seed.ts`), or the section is absent / the modal is empty.
         */
        assets?: string[];
        /**
         * Tick All Day. Replaces the window entirely — `_allDayTimeRange`
         * overwrites whatever start and length were chosen — so no times are
         * passed with it.
         */
        allDay?: boolean;
        /**
         * Book for somebody else. Needs `events.can_book_for_others`, or the
         * field is not rendered at all.
         */
        host?: string;
    } = {},
): Promise<RoomBooking> {
    const flow = new MeetingFlow(page);
    await flow.open();

    // STEP 1, the details. The date goes before the times: the times on offer
    // are those of the chosen day, and today offers only what is left of it.
    await flow.title.fill(title);
    if (options.date !== undefined) await setDate(flow, page, options.date);
    if (options.allDay !== undefined) await flow.setAllDay(options.allDay);
    if (options.host) await flow.chooseHost(options.host);
    if (options.startTime) await flow.setStartTime(options.startTime);
    if (options.duration !== undefined) await flow.setDuration(options.duration);

    // PROVE the step still holds what was asked for, before leaving it.
    //
    // Without this, "the booking came back wrong" has two possible causes that
    // look identical: the app discarded the choice, or the control reverted
    // before anything was sent. A finding is only worth reporting once the
    // second has been ruled out.
    await expect(flow.title, 'the title must still be set').toHaveValue(title);
    if (options.allDay !== undefined) {
        expect(
            await flow.isAllDay(),
            'the All Day checkbox must still be set when the details are left — ' +
                'if this fails the form reverted it, and nothing can be concluded ' +
                'about what the app stores',
        ).toBe(options.allDay);
    }
    if (options.host) {
        const shown = await flow.hostValue();
        expect(
            shown.toLowerCase(),
            `the host field must still show ${options.host} when the details are ` +
                `left; it shows "${shown}"`,
        ).toContain(options.host.toLowerCase());
    }

    // STEP 2, the room.
    await flow.toRoomStep();
    await flow.selectRoom(room.name);

    // STEP 3, the options. Catering and equipment are delivered to the room,
    // which is why they come after it.
    await flow.toOptionsStep();
    for (const attendee of options.attendees ?? []) await flow.addAttendee(attendee);
    for (const attendee of options.removeAttendees ?? []) {
        await flow.removeAttendee(attendee);
    }
    for (const item of options.catering ?? []) await flow.addCateringItem(item);
    for (const type_name of options.assets ?? []) await flow.addAssetRequest(type_name);

    // The summary of the last step shows what Confirm sends.
    await expect(
        flow.options,
        'the summary of the last step must show the meeting name',
    ).toContainText(title);
    expect(
        await flow.chosenRoomNames(),
        'the summary of the last step must show the room that was selected',
    ).toEqual([room.name]);

    const posts = collectBookingPosts(page);
    await flow.confirm.click();

    // Do NOT just assert on the success screen. When the post is refused the
    // flow stays on the last step and shows a toast, and "success screen never
    // appeared" is the least informative way to report that. Gather the
    // evidence first, then fail with it.
    let reached_success = await flow.successContinue
        .waitFor({ state: 'visible', timeout: 30_000 })
        .then(() => true)
        .catch(() => false);
    let captured = await posts.stop();
    let created = captured.filter((p) => p.status >= 200 && p.status < 300);

    // RETRY past REG-09, and only past REG-09.
    //
    // The flow stays on the last step when a post is refused, so Confirm can be
    // pressed again without filling the flow again. That is worth doing when —
    // and only when — every failure looks like the concurrent-write defect
    // (PPT-2642): a burst of booking writes poisons a staff-api connection and
    // the request that lands on it fails for reasons unrelated to what was sent.
    // `isReg09` in `../api.ts` has its three shapes.
    //
    // Seen here on a full parallel room run: 422 with no failures, on a payload
    // that had just worked twice. Delete this with the rest of the REG-09
    // handling once the stack runs staff-api on pg-orm >= 2.2.4, and do not read
    // a green run as evidence the image is fixed.
    const looks_like_reg09 = (p: CapturedPost) => isReg09(p.status, p.body);

    for (let attempt = 1; attempt <= 3; attempt++) {
        if (reached_success && created.length) break;
        if (!captured.length || !captured.every(looks_like_reg09)) break;
        console.warn(
            `  ! REG-09 shaped failure on send attempt ${attempt}/3, pressing confirm ` +
                `again — ${captured.map((p) => `HTTP ${p.status}`).join(', ')}`,
        );
        await page.waitForTimeout(600 * attempt);
        const retry = collectBookingPosts(page);
        if (!(await flow.confirm.isVisible().catch(() => false))) break;
        await flow.confirm.click();
        reached_success = await flow.successContinue
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
                `Booking POSTs: ${attempts || 'none at all — the flow refused locally'}. ` +
                `On screen: "${message.replace(/\s+/g, ' ').trim().slice(0, 220)}"`,
        );
    }
    // Linked catering/equipment POSTs follow the room POST. Returning the last
    // response would return a child order instead of the room's parent ID.
    const rooms = created
        .map((post) => JSON.parse(post.body) as RoomBooking)
        .filter((booking) => booking.booking_type === 'room' && booking.asset_id === room.id);
    expect(rooms, 'Exactly one native room booking should be created').toHaveLength(1);
    return rooms[0];
}

/**
 * Drive the date picker of the details step to a given day.
 *
 * Exported because a spec that drives the flow WITHOUT booking still has to set
 * the date before touching the times — the flow defaults to today, so a slot on
 * another day has its hour simply absent from the picker. That cost a run.
 */
export async function setDate(form: MeetingFlow, page: Page, timestamp_ms: number) {
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
    // The date button shows the new day a moment after the picker closes. Wait
    // for it, so that the times read next are those of the chosen day. The day
    // number and the year are matched, not the month name.
    await expect(
        form.dateButton,
        `the date field does not show ${target.toDateString()}`,
    ).toContainText(new RegExp(`(^|\\D)${target.getDate()}, ${target.getFullYear()}`), {
        timeout: 10_000,
    });
}

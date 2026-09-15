/**
 * Multi-step visitor flows, composed from `InviteVisitorForm`.
 *
 * These return what the BACKEND created, parsed from the real POST responses —
 * never anything the page rendered. Same principle as `bookDeskViaUI`, and the
 * reason this suite can tell "the screen looked right" apart from "the data is
 * right".
 *
 * ## Why these flows retry: REG-09 / PPT-2642, not a form bug
 *
 * Under concurrent booking writes, `POST /bookings` intermittently answers
 *
 *   HTTP 400 {"error":"Expected BeginObject but was EOF at line 1, column 1"}
 *   HTTP 500 {"error":"...could not serialize access due to read/write
 *             dependencies among transactions"}
 *
 * The 400 reads like the client sent nothing. It does not: the request carried
 * ~2 KB of valid JSON. `e2e/support/repro/vis-b6-burst.ts` settles it by firing
 * the same payloads concurrently with NO BROWSER INVOLVED — 4 concurrent POSTs
 * over 12 rounds produced 13x 201, 29x 400 and 6x 500, with the early rounds
 * clean and the failure rate climbing as the run went on.
 *
 * That degradation curve is the signature of REG-09: a failed COMMIT leaves a
 * connection's transaction flag set, it returns to the pool with its `BEGIN`
 * still open, and everything routed to it afterwards fails. Fixed in pg-orm
 * v2.2.4 and staff-api #386, but `e2e/stack` pulls `placeos/staff-api:latest`,
 * a release image that predates it.
 *
 * E2E_USER_STORIES.md says of REG-09: "harmless for now: the suite does not
 * burst concurrent bookings, so nothing here trips it." A GROUP invite is the
 * first thing in this suite that does — one send posts a container plus one
 * booking per visitor, and several workers do that at once.
 *
 * So the retry below is NOT papering over a frontend defect. It absorbs a known
 * backend bug whose fix is already merged upstream, the same way CI's
 * `retries: 2` absorbs REG-09 today. Delete it once the stack runs a staff-api
 * built on pg-orm >= 2.2.4, and the suite should still be green.
 *
 * Two earlier explanations were wrong and are recorded so nobody re-derives
 * them: "the app posts an empty body" (it does not — the request is ~2 KB) and
 * "the form is rebuilt mid-init and loses its model" (plausible, but the
 * browser-free burst reproduces it without any form at all).
 */
import { APIRequestContext, Page, expect } from '@playwright/test';
import { InviteVisitorForm } from './invite-form.page';
import { VisitorIdentity } from './visitor.env';
import { deleteBooking } from '../api';
import { VisitorBooking } from './visitor.api';

/** How long the form's values must hold steady before we trust them. */
const SETTLE_MS = 1_000;

interface CapturedPost {
    status: number;
    body: string;
    request: string;
    headers: Record<string, string>;
}

/**
 * Collect every `POST /bookings` the page makes, with its REQUEST body.
 *
 * Capturing the REQUEST body, not just the response, is what disproved the
 * first theory about REG-09's 400: the body is ~2 KB, so "the app sent nothing"
 * was never true however much the error message sounded like it.
 *
 * A single-visitor invite is one POST; a multi-visitor invite is N+1 — a group
 * container plus one booking per visitor. `waitForResponse` resolves on the
 * FIRST match, so using it for a group would assert against the container and
 * silently ignore every member.
 */
function collectBookingPosts(page: Page) {
    const posts: CapturedPost[] = [];
    const pending: Promise<void>[] = [];
    const onResponse = (r: import('@playwright/test').Response) => {
        if (!r.url().includes('/api/staff/v1/bookings')) return;
        if (r.request().method() !== 'POST') return;
        const request = r.request().postData() ?? '';
        const headers = r.request().headers();
        // Read the body while the response is still live; resolving it later can
        // fail with "No data found", which reads as a network flake rather than
        // the assertion you meant to write.
        pending.push(
            r
                .text()
                .catch(() => '<body unavailable>')
                .then(
                    (body) => void posts.push({ status: r.status(), body, request, headers }),
                ),
        );
    };
    page.on('response', onResponse);

    const describe = () =>
        posts
            .map((p) => {
                const ok = p.status >= 200 && p.status < 300;
                const base =
                    `HTTP ${p.status} req=${p.request.length ? `${p.request.length}b` : 'EMPTY'}`;
                // Only dump the full picture for a FAILED post. On the happy path
                // it is noise, and on a failure it is the only evidence there is —
                // the app's error toast has faded before any screenshot is taken.
                if (ok) return `${base} ok`;
                return (
                    `${base}\n      content-type=${p.headers['content-type'] ?? '(none)'}` +
                    `\n      content-length=${p.headers['content-length'] ?? '(none)'}` +
                    `\n      req-head=${JSON.stringify(p.request.slice(0, 220))}` +
                    `\n      resp=${p.body.slice(0, 220)}`
                );
            })
            .join('\n    | ') || '(no booking POST was made at all)';

    return {
        okCount: () => posts.filter((p) => p.status >= 200 && p.status < 300).length,
        /** Ids of everything that really got created, for cleaning up a partial group. */
        createdIds: () =>
            posts
                .filter((p) => p.status >= 200 && p.status < 300)
                .map((p) => {
                    try {
                        return JSON.parse(p.body).id as number;
                    } catch {
                        return undefined;
                    }
                })
                .filter((id): id is number => typeof id === 'number'),
        describe,
        /** Forget everything so far — used after a failed attempt is rolled back. */
        reset: async () => {
            await Promise.all(pending);
            posts.length = 0;
            pending.length = 0;
        },
        stop: async () => {
            page.off('response', onResponse);
            await Promise.all(pending);
            return posts;
        },
    };
}

/**
 * Fill the form, then require the values to SURVIVE a settling window.
 *
 * Converging on the values is not enough on its own: the rebuild can land in
 * the gap between the last check and the click. Holding them steady for a beat
 * closes most of that gap; the retry in `submitWhenAccepted` closes the rest.
 */
async function fillAndSettle(page: Page, fill: () => Promise<void>): Promise<void> {
    await expect(async () => {
        await fill();
        await page.waitForTimeout(SETTLE_MS);
        await fill();
    }).toPass({ timeout: 45_000 });
}

/** A send attempt that did not reach the success screen. */
const MAX_ATTEMPTS = 3;

/**
 * Click send, and keep trying until the app confirms the invite.
 *
 * Two distinct failure shapes, and they need opposite handling:
 *
 *  - NOTHING was created. Safe to settle and click again.
 *  - SOMETHING was created but the flow still failed. For a group invite this
 *    means the container landed and a member did not, leaving an orphaned
 *    `booking_type: 'group'` row with no members. Clicking again would add a
 *    SECOND container, so the partial result is deleted first and the whole
 *    invite starts over.
 *
 * Rolling back rather than giving up is deliberate. The cause is REG-09, a
 * backend defect already fixed upstream (see the file header), so a failed
 * attempt says nothing about the behaviour under test. Leaving the orphan
 * behind instead would poison the next run's listing assertions.
 */
async function submitWhenAccepted(
    page: Page,
    api: APIRequestContext,
    form: InviteVisitorForm,
    posts: ReturnType<typeof collectBookingPosts>,
    refill: () => Promise<void>,
    what: string,
): Promise<void> {
    let last = '';

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        await form.sendButton.click();
        const ok = await form.successPanel
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (ok) return;

        last = posts.describe();
        const partial = posts.createdIds();
        if (partial.length) {
            console.warn(
                `  ! REG-09: ${what} partially created ${partial.length} booking(s) then ` +
                    `failed — rolling them back and retrying (attempt ${attempt}/${MAX_ATTEMPTS})`,
            );
            for (const id of partial) await deleteBooking(api, id);
        }
        await posts.reset();

        if (attempt === MAX_ATTEMPTS) break;
        // Start from a clean form: after a partial create the component has
        // already advanced its own state, so re-filling the current DOM is not
        // the same as re-opening.
        await form.open();
        await fillAndSettle(page, refill);
    }

    throw new Error(
        `${what} never reached its success screen after ${MAX_ATTEMPTS} attempts. ` +
            `If every attempt shows HTTP 400 "Expected BeginObject but was EOF" or HTTP 500 ` +
            `"could not serialize access", this is REG-09 (PPT-2642) and the stack is ` +
            `running a staff-api older than pg-orm 2.2.4. Last responses:\n    ${last}`,
    );
}

/**
 * The bookings that were actually created.
 *
 * A failed attempt a retry recovered is NOT a test failure — the flow's job is
 * to get the invite made. Recovered failures are still printed, because they
 * are the visible symptom of VIS-B6; swallowing them would make the suite green
 * and the defect invisible, which is how a suite stops being worth running.
 */
function createdBookings(posts: CapturedPost[]): VisitorBooking[] {
    const ok = posts.filter((p) => p.status >= 200 && p.status < 300);
    for (const f of posts.filter((p) => p.status < 200 || p.status >= 300)) {
        console.warn(
            `  ! REG-09: a booking POST was rejected and recovered on retry — ` +
                `HTTP ${f.status} (request carried ${f.request.length} bytes, so the body ` +
                `was not the problem)`,
        );
    }
    expect(
        ok.length,
        `no booking was created. ` +
            posts
                .map((p) => `HTTP ${p.status} resp=${p.body.slice(0, 200)}`)
                .join(' | '),
    ).toBeGreaterThan(0);
    return ok.map((p) => JSON.parse(p.body) as VisitorBooking);
}

/**
 * Invite ONE visitor through the full UI, in single-visitor mode.
 * Returns the booking the API created.
 */
export async function inviteVisitorViaUI(
    page: Page,
    api: APIRequestContext,
    visitor: VisitorIdentity,
    reason: string,
    options: {
        allDay?: boolean;
        passNumber?: string;
        international?: boolean;
        /** Book on behalf of somebody else. Needs `can_book_for_anyone`. */
        host?: { email: string; name: string };
        /** Put the visit on another day. Defaults to whatever the form offers. */
        date?: number;
        /** Start the visit at "HH:mm". Must be an option the form lists. */
        startTime?: string;
        /** How long the visit runs, in minutes. Must be an option the form lists. */
        duration?: number;
    } = {},
): Promise<VisitorBooking> {
    const form = new InviteVisitorForm(page);
    await form.open();
    await form.expectSingleMode();

    const fill = async () => {
        // Host first: choosing one can reset parts of the form, so anything
        // typed before it would be lost.
        if (options.host) await form.chooseHost(options.host.email, options.host.name);
        await form.visitorName.fill(visitor.name);
        await form.visitorEmail.fill(visitor.email);
        if (visitor.company && (await form.company.count())) {
            await form.company.fill(visitor.company);
        }
        if (options.date !== undefined) await form.setDate(options.date);
        // Times go in before the rest: changing the start can shift which
        // lengths are on offer, so setting them the other way round can leave a
        // duration that no longer exists.
        if (options.startTime) await form.setStartTime(options.startTime);
        if (options.duration !== undefined) await form.setDuration(options.duration);
        await form.reason.fill(reason);
        if (options.passNumber && (await form.passNumber.count())) {
            await form.passNumber.fill(options.passNumber);
        }
        if (options.allDay !== undefined) {
            await form.setCheckbox(form.allDay, options.allDay);
        }
        if (options.international !== undefined) {
            await form.setCheckbox(form.international, options.international);
        }
        expect(await form.visitorEmail.inputValue()).toBe(visitor.email);
        expect(await form.visitorName.inputValue()).toBe(visitor.name);
        expect(await form.reason.inputValue()).toBe(reason);
    };

    await fillAndSettle(page, fill);

    const posts = collectBookingPosts(page);
    await submitWhenAccepted(page, api, form, posts, fill, 'the invite');

    const bookings = createdBookings(await posts.stop());
    expect(bookings, 'a single-visitor invite creates exactly one booking').toHaveLength(1);
    return bookings[0];
}

/**
 * Invite SEVERAL visitors through the full UI, in multi-visitor mode.
 * Returns every booking created: the group container and one per visitor.
 */
export async function inviteVisitorsViaUI(
    page: Page,
    api: APIRequestContext,
    visitors: VisitorIdentity[],
    reason: string,
    options: {
        host?: { email: string; name: string };
        /** Put the visit on another day. Defaults to whatever the form offers. */
        date?: number;
        /**
         * Add these, then take them off again before sending. Modelling the
         * everyday "wrong person from the lookup" correction — and it has to
         * happen INSIDE the fill, because a retry re-runs the fill and would
         * otherwise send the removed visitor after all.
         */
        remove?: VisitorIdentity[];
    } = {},
): Promise<VisitorBooking[]> {
    const removing = options.remove ?? [];
    const expected = visitors.filter(
        (v) => !removing.some((r) => r.email === v.email),
    );
    const form = new InviteVisitorForm(page);
    await form.open();
    await form.expectGroupMode();

    const fill = async () => {
        if (options.host) await form.chooseHost(options.host.email, options.host.name);
        for (const visitor of visitors) {
            // "Already added?" has to go through `chipIndexFor`: a chip shows
            // only the part before the @, so a `hasText` on the full address
            // never matches and a retry would add everyone twice.
            const already = await form
                .chipIndexFor(visitor.email)
                .then(() => true)
                .catch(() => false);
            if (already) continue;
            await form.addVisitorChip(visitor.email);
        }
        for (const visitor of removing) await form.removeVisitorChip(visitor.email);
        if (options.date !== undefined) await form.setDate(options.date);
        await form.reason.fill(reason);
        expect(await form.chips.count()).toBe(expected.length);
        expect(await form.reason.inputValue()).toBe(reason);
    };

    await fillAndSettle(page, fill);

    const posts = collectBookingPosts(page);
    await submitWhenAccepted(page, api, form, posts, fill, 'the group invite');

    const bookings = createdBookings(await posts.stop());
    expect(
        bookings.length,
        `a group invite creates one container plus one booking per visitor ` +
            `(${expected.length + 1} total), got ${bookings.length}`,
    ).toBe(expected.length + 1);
    return bookings;
}

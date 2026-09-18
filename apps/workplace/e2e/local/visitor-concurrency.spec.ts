/**
 * VIS-28 — concurrent visitor writes are either stored or not, never "both".
 *
 * ## What this asserts, and why it is not a flakiness test
 *
 * The plan's note on this row warned that "a burst spec would encode REG-09
 * flakiness", and it was right about the obvious version of this test. Firing N
 * writes and asserting all N succeed would go red whenever the stack is under
 * load, teaching everyone to ignore it.
 *
 * So this asserts the INVARIANT instead, which is what REG-09 actually breaks:
 *
 *   a 2xx response  =>  the row MUST be readable afterwards
 *   a non-2xx       =>  no row must be left behind
 *
 * Failures are allowed and counted. Only *disagreement between the answer and
 * the stored state* fails the test. That is deterministic whatever the load, and
 * it is exactly the property the REG-09 retry in the visitor, desk and parking
 * helpers works around:
 *
 *   REG-09 / PPT-2642 — under concurrent booking writes on a staff-api image
 *   predating pg-orm 2.2.4, `POST /bookings` has answered **201 with an id**
 *   whose row was never committed, so a later `GET /bookings/<id>` 404s. The
 *   COMMIT fails after the response has been written.
 *
 * A phantom 201 is the worst shape of this: the app believes it booked, tells
 * the user so, and nothing exists. Every "the app lost my invite" report starts
 * here, which is why the row is P1 rather than P2.
 *
 * ## Group invites, and why the burst is of members rather than whole groups
 *
 * A group invite is one `group` container plus one `visitor` booking per person,
 * each carrying `parent_id`. Building whole groups concurrently would make the
 * TEST responsible for rolling a half-built group back — and then a failure
 * would be measuring this file's error handling rather than the stack's. So the
 * burst is of the individual member writes, which is where the atomicity
 * question really lives, and the group invariant is checked separately in the
 * second test: a container must never be left holding fewer members than were
 * written for it.
 *
 * ## No retry here, deliberately
 *
 * `createBookingViaApi` retries on REG-09 shapes, which is right for every other
 * spec and wrong for this one — a retry would hide the very thing being
 * measured. These writes go straight at the API.
 *
 * ## Both are `fixme`, and the plan's own caution was correct
 *
 * The plan's note on this row said "a burst spec would encode REG-09 flakiness;
 * the reproducer stays the record until the image is fixed". I tried to design
 * around that by asserting the invariant rather than success — and then measured
 * it, four consecutive runs on 2026-09-17:
 *
 *   run 1   2/8 accepted, 6 refused (400)   invariant HELD
 *   run 2   2/8 accepted, 6 refused (400)   invariant HELD
 *   run 3   3/8 accepted, 5 refused (400)   **PHANTOM WRITE** — invariant broke
 *   run 4   2/8 accepted, 6 refused (400)   invariant HELD
 *
 * So the invariant itself fails intermittently — roughly one run in four. The
 * note was right: left active, this file would be red about 25% of the time,
 * which is how a real finding gets trained out of a team's attention.
 *
 * Both tests are therefore `test.fixme`, in the same style as the ROOM-B* and
 * VIS-B* specs: written, disabled, and turning green the day the defect is
 * fixed. Two things worth taking from the measurement even so:
 *
 *  - Only **2 or 3 of 8** concurrent writes are accepted at all. The other five
 *    or six are refused `400 Expected BeginObject but was EOF` — staff-api
 *    losing the request body, which is VIS-B6's shape. That is a far higher
 *    failure rate than the retry's four attempts imply, and is worth knowing
 *    before anyone tunes that retry.
 *  - When a write IS accepted, it is usually real. The phantom 201 is the rarer
 *    and more dangerous case.
 *
 * **This is the row that decides when the REG-09 retry can be deleted.** Drop
 * both `fixme`s and run this file repeatedly: once it is reliably green, the
 * retries in the visitor, desk and parking helpers are no longer earning their
 * keep. Until then `e2e/support/repro/reg09-concurrent-bookings.ts` and
 * `vis-b6-burst.ts` remain the record.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { STAFF_API, deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import {
    VISITOR_SLOTS,
    visitorFor,
} from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseGroupContainers,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';
import { zonesWithTag } from '../../../../e2e/support/api';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 60 * DAY;

/** How many writes go out at once. */
const BURST = VISITOR_SLOTS.concurrency.count;

interface Attempt {
    status: number;
    id?: number;
    email: string;
    body: string;
}

test.describe('concurrent visitor writes', () => {
    test.fixme('VIS-28: every accepted write is stored, and every refused one leaves nothing', async ({
        staffApi,
    }) => {
        const me = await (await staffApi.get('/api/engine/v2/users/current')).json();
        const zones = (
            await Promise.all(
                ['org', 'building', 'level'].map((tag) => zonesWithTag(staffApi, tag)),
            )
        )
            .flat()
            .map((zone) => zone.id);

        const worker = test.info().parallelIndex;
        const visitors = Array.from({ length: BURST }, (_, index) =>
            visitorFor(worker, VISITOR_SLOTS.concurrency.base + index),
        );
        const start = Math.floor(Date.now() / 1000) + 30 * DAY;

        // Clean first: a leftover booking on one of these addresses would make
        // "a row exists" true for the wrong reason.
        for (const visitor of visitors) {
            await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
            await deleteGuest(staffApi, visitor.email);
        }

        const created: number[] = [];
        try {
            // All at once, no retry, no stagger. The whole point is contention.
            const attempts: Attempt[] = await Promise.all(
                visitors.map(async (visitor, index): Promise<Attempt> => {
                    const res = await staffApi.post(`${STAFF_API}/bookings`, {
                        data: {
                            booking_type: 'visitor',
                            asset_id: visitor.email,
                            asset_name: visitor.name,
                            booking_start: start + index * 3600,
                            booking_end: start + index * 3600 + 1800,
                            timezone: 'Etc/UTC',
                            user_email: me.email,
                            user_id: me.id,
                            user_name: me.name,
                            title: uniqueTitle('E2E Burst'),
                            zones,
                            attendees: [
                                { name: visitor.name, email: visitor.email },
                            ],
                        },
                    });
                    const body = await res.text();
                    let id: number | undefined;
                    try {
                        id = JSON.parse(body)?.id;
                    } catch {
                        /* a non-JSON error body is itself the evidence */
                    }
                    if (typeof id === 'number') created.push(id);
                    return { status: res.status(), id, email: visitor.email, body };
                }),
            );

            const accepted = attempts.filter(
                (attempt) => attempt.status >= 200 && attempt.status < 300,
            );
            const refused = attempts.filter(
                (attempt) => attempt.status < 200 || attempt.status >= 300,
            );

            // Recorded, NOT asserted. How many got through depends on the load and
            // on the staff-api image, and pinning it is what would make this test
            // a flake detector instead of a correctness test.
            // eslint-disable-next-line no-console
            console.log(
                `VIS-28: ${accepted.length}/${BURST} accepted, ${refused.length} refused. ` +
                    `Refusal statuses: ${JSON.stringify(refused.map((a) => a.status))}`,
            );

            // INVARIANT 1 — a 2xx must mean the row is there. This is the phantom
            // 201 that REG-09 produces.
            const phantoms: Attempt[] = [];
            for (const attempt of accepted) {
                expect(
                    attempt.id,
                    `a ${attempt.status} response carried no booking id: ` +
                        `${attempt.body.slice(0, 200)}`,
                ).toBeTruthy();
                const read = await staffApi.get(`${STAFF_API}/bookings/${attempt.id}`);
                if (!read.ok()) phantoms.push(attempt);
            }
            expect(
                phantoms.map((attempt) => ({
                    id: attempt.id,
                    status: attempt.status,
                })),
                `PHANTOM WRITES. These POSTs answered 2xx with an id, and the row ` +
                    `cannot be read back — so the app has been told it booked ` +
                    `something that does not exist. This is REG-09 / PPT-2642: the ` +
                    `COMMIT fails after the response is written. It is the reason the ` +
                    `visitor, desk and parking helpers all carry a retry, and it must ` +
                    `be fixed in staff-api (pg-orm 2.2.4+) before that retry can be ` +
                    `removed`,
            ).toEqual([]);

            // INVARIANT 2 — a refusal must leave nothing behind.
            const ghosts: string[] = [];
            for (const attempt of refused) {
                const res = await staffApi.get(`${STAFF_API}/bookings`, {
                    params: {
                        type: 'visitor',
                        period_start: String(window_from()),
                        period_end: String(window_to()),
                        limit: '500',
                    },
                });
                if (!res.ok()) continue;
                const rows = await res.json();
                const list = (Array.isArray(rows) ? rows : (rows.results ?? [])) as Array<
                    Record<string, any>
                >;
                if (list.some((row) => row.asset_id === attempt.email && !row.deleted)) {
                    ghosts.push(attempt.email);
                }
            }
            expect(
                ghosts,
                `GHOST WRITES. These POSTs were REFUSED and a live booking exists for ` +
                    `them anyway, so the user was told their invite failed while the ` +
                    `visitor is expected at the door`,
            ).toEqual([]);
        } finally {
            for (const id of created) await deleteBooking(staffApi, id);
            for (const visitor of visitors) {
                await releaseVisitor(
                    staffApi,
                    visitor.email,
                    window_from(),
                    window_to(),
                );
                await deleteGuest(staffApi, visitor.email);
            }
            await releaseGroupContainers(staffApi, window_from(), window_to());
        }
    });

    test.fixme('VIS-28b: a group container is never left holding fewer members than were written', async ({
        staffApi,
    }) => {
        const me = await (await staffApi.get('/api/engine/v2/users/current')).json();
        const zones = (
            await Promise.all(
                ['org', 'building', 'level'].map((tag) => zonesWithTag(staffApi, tag)),
            )
        )
            .flat()
            .map((zone) => zone.id);

        const worker = test.info().parallelIndex;
        const members = 3;
        const visitors = Array.from({ length: members }, (_, index) =>
            visitorFor(worker, VISITOR_SLOTS.concurrency.base + BURST + index),
        );
        const start = Math.floor(Date.now() / 1000) + 45 * DAY;

        for (const visitor of visitors) {
            await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
            await deleteGuest(staffApi, visitor.email);
        }

        const created: number[] = [];
        try {
            // The container first, as the app does.
            const container_res = await staffApi.post(`${STAFF_API}/bookings`, {
                data: {
                    booking_type: 'group',
                    asset_id: `e2e-group-${worker}-${start}`,
                    asset_name: 'E2E Burst Group',
                    booking_start: start,
                    booking_end: start + 1800,
                    timezone: 'Etc/UTC',
                    user_email: me.email,
                    user_id: me.id,
                    user_name: me.name,
                    title: uniqueTitle('E2E Burst Group'),
                    zones,
                },
            });
            expect(
                container_res.ok(),
                `the group container could not be created: HTTP ` +
                    `${container_res.status()} ${(await container_res.text()).slice(0, 200)}`,
            ).toBe(true);
            const container = await container_res.json();
            created.push(container.id);

            // Then every member AT ONCE, which is the part that can half-fail.
            const results = await Promise.all(
                visitors.map(async (visitor, index) => {
                    const res = await staffApi.post(`${STAFF_API}/bookings`, {
                        data: {
                            booking_type: 'visitor',
                            asset_id: visitor.email,
                            asset_name: visitor.name,
                            booking_start: start,
                            booking_end: start + 1800,
                            timezone: 'Etc/UTC',
                            user_email: me.email,
                            user_id: me.id,
                            user_name: me.name,
                            title: uniqueTitle('E2E Burst Member'),
                            zones,
                            parent_id: container.id,
                            attendees: [{ name: visitor.name, email: visitor.email }],
                        },
                    });
                    const body = await res.text();
                    let id: number | undefined;
                    try {
                        id = JSON.parse(body)?.id;
                    } catch {
                        /* the body is the evidence */
                    }
                    if (typeof id === 'number') created.push(id);
                    return { ok: res.ok(), status: res.status(), id, email: visitor.email };
                }),
            );

            const written = results.filter((result) => result.ok);
            // eslint-disable-next-line no-console
            console.log(
                `VIS-28b: ${written.length}/${members} members written to container ` +
                    `${container.id}`,
            );

            // Every member the backend ACCEPTED must be readable and must still
            // point at its container. A member that lost its `parent_id` is
            // worse than one that failed: it becomes an invisible invite that no
            // group screen will ever show or cancel.
            for (const result of written) {
                const read = await staffApi.get(`${STAFF_API}/bookings/${result.id}`);
                expect(
                    read.ok(),
                    `member ${result.email} answered ${result.status} with id ` +
                        `${result.id}, and the row cannot be read back — a phantom ` +
                        `write inside a group (REG-09)`,
                ).toBe(true);
                const stored = await read.json();
                expect(
                    String(stored.parent_id ?? ''),
                    `member ${result.email} was stored without a link to its group ` +
                        `container. It is then an invite no group screen can show, ` +
                        `move or cancel — the failure PPT-2638 was about`,
                ).toBe(String(container.id));
            }

            // And the container must not claim more members than exist.
            const listed = await staffApi.get(`${STAFF_API}/bookings`, {
                params: {
                    type: 'visitor',
                    period_start: String(start - DAY),
                    period_end: String(start + DAY),
                    limit: '500',
                },
            });
            expect(listed.ok()).toBe(true);
            const rows = await listed.json();
            const list = (Array.isArray(rows) ? rows : (rows.results ?? [])) as Array<
                Record<string, any>
            >;
            const attached = list.filter(
                (row) => String(row.parent_id ?? '') === String(container.id) && !row.deleted,
            );
            expect(
                attached.length,
                `the container holds ${attached.length} live member(s) but ` +
                    `${written.length} were accepted. A container and its members ` +
                    `must agree, or the group is partially written`,
            ).toBe(written.length);
        } finally {
            for (const id of created) await deleteBooking(staffApi, id);
            for (const visitor of visitors) {
                await releaseVisitor(
                    staffApi,
                    visitor.email,
                    window_from(),
                    window_to(),
                );
                await deleteGuest(staffApi, visitor.email);
            }
            await releaseGroupContainers(staffApi, window_from(), window_to());
        }
    });
});

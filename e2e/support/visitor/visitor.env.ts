/**
 * Visitor identities for the e2e suite.
 *
 * Kept out of `e2e/support/env.ts` on purpose: the desk specs depend on that
 * file, and nothing visitor-shaped should be able to break them.
 *
 * NOTHING seeds these addresses. A visitor "asset" is just an email, so unlike
 * a desk there is no resource to provision — which is why the visitor specs
 * need no `seed.ts` step at all.
 */
export const VISITOR_PREFIX = 'e2e-visitor-';

/**
 * Slot allocation. Every spec FILE gets its own range, and every test within a
 * file gets its own slot.
 *
 * This is not about booking clashes — a visitor is not exclusive, and the
 * backend happily accepts the same one twice (VIS-B1). It is about the SWEEP:
 * `releaseVisitor` deletes by address under the worker's own identity, so two
 * tests sharing an address can delete each other's booking if they ever land on
 * the same worker. Distinct slots make that impossible by construction rather
 * than by relying on how Playwright happens to schedule.
 */
export const VISITOR_SLOTS = {
    /** visitor-invite.spec.ts */
    invite: { stores: 0, cleanup: 1 },
    /** visitor-group.spec.ts — two visitors per test, so two slots each */
    group: { a: 2, b: 3 },
    /** visitor-scoping.spec.ts */
    scoping: { own: 4, control: 15 },
    /** visitor-delegate.spec.ts */
    delegate: { single: 5, groupA: 6, groupB: 7 },
    /** visitor-checkin.spec.ts */
    checkin: { checkIn: 8, tooEarly: 9 },
    /** visitor-edit.spec.ts */
    edit: { details: 10, memberA: 11, memberB: 12 },
    /** visitor-settings.spec.ts */
    settings: { allDay: 13, reason: 14 },
    /** visitor-cancel.spec.ts */
    cancel: { fromApp: 16, dismissed: 17 },
    /** visitor-validation.spec.ts */
    validation: { badEmail: 18, keptA: 19, removedB: 20 },
    /** visitor-details.spec.ts */
    details: { extras: 21, company: 22 },
    /** visitor-duplicate.spec.ts — the guard for VIS-B1 */
    duplicate: { same: 23 },
    /** visitor-group-clash.spec.ts — the guard for VIS-B9 */
    group_clash: { morning_a: 24, morning_b: 25, afternoon_a: 26, afternoon_b: 27 },
    /** visitor-edit.spec.ts, the group-time test added later */
    group_time: { memberA: 28, memberB: 29 },
    /** visitor-times.spec.ts */
    times: { chosen: 23, limits: 24 },
    /**
     * visitor-concurrency.spec.ts — VIS-28.
     *
     * A BLOCK rather than a slot, because the test fires a burst: it needs one
     * visitor identity per concurrent write, and it must not touch a slot any
     * other file owns. 40 onwards is clear of everything above.
     */
    concurrency: { base: 40, count: 8 },
} as const;

export interface VisitorIdentity {
    email: string;
    name: string;
    company: string;
}

/**
 * A visitor address owned by this worker and this slot.
 *
 * Per-worker keeps each parallel worker's listings and guest records disjoint;
 * per-slot keeps tests within a worker from sweeping each other.
 */
export function visitorFor(workerIndex: number, slot: number): VisitorIdentity {
    return {
        email: `${VISITOR_PREFIX}${workerIndex}-${slot}@example.com`,
        name: `E2E Visitor ${workerIndex}-${slot}`,
        company: `E2E Co ${workerIndex}`,
    };
}

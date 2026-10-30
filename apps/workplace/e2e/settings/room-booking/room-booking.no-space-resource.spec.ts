/**
 * User-owned Setting: events.no_space_resource
 * Exact runtime key: app.events.no_space_resource
 * Coverage: 1 unique Setting / 2 scenarios
 * Docs: docs/settings/workplace.md. No booking reaches any backend.
 *
 * Two independent roomless drafts use two distinct synthetic fallback room IDs.
 * The form's actual Confirm and roomless-confirmation buttons are clicked.
 * postForm's lone_space branch supplies the configured room before createEvent.
 * The outgoing event is accepted on its title, host and room, then its
 * resources and system_id are checked, and a local response drives the
 * success UI. No scan, calendar provider, visitor, catering or asset write occurs.
 * Only the default calendar/event backend is covered; native bookings are held off.
 *
 * Safety: settings-harness meetingFormTest (browser-only). One context route
 * is installed before navigation: origin and redirect checks first, exact
 * local GET fixtures, every WebSocket and every mutation refused except ONE
 * armed POST /api/staff/v1/events (no query, JSON) whose body carries this
 * draft's title, host and room; it gets a local 201. Nothing reaches a backend. Fresh storage, blocked
 * service workers, strict teardown.
 *
 * Source: libs/events/src/lib/event-form.service.ts:postForm/_performBooking;
 * meeting-flow-new/meeting-flow-options.component.ts:confirmBooking.
 * UI draft seeding stays in this isolated browser's sessionStorage.
 */
import { expect, type Page } from '@playwright/test';
import {
    fakeBearer,
    type Json,
    MEETING_POST_PATH as POST_PATH,
    MEETING_TITLE as TITLE,
    MEETING_USER as USER,
    type MeetingAudit as Audit,
    meetingFormSnapshot as formSnapshot,
    meetingFormTest as test,
    openStrictMeeting,
    type Settings,
    syntheticMeetingOrg,
} from '../support/settings-harness';

const ORG = syntheticMeetingOrg('e2e-no-space-resource-');
const { ZONES, GROUP, HOST_PATH, ROOMS } = ORG;
// Both hosts are permitted. These scenarios cover rule-host resolution,
// not hidden-rule rejection; every application error remains a test failure.
const RULES: Json[] = [{ zone: '*', conditions: { groups: [GROUP] },
    rules: { hidden: false } }];
const BASE: Settings = {
    ...ORG.BASE,
    'app.events.can_book_for_others': true,
    'app.events.hide_attendees': true,
};

/**
 * Arm exactly one POST /api/staff/v1/events carrying the draft's title,
 * USER as host and `room_id` as its only resource, after checking that the
 * room is loaded with its fixture email and zones.
 */
async function armSubmission(page: Page, audit: Audit, room_id: string) {
    const snapshot = await formSnapshot(page);
    const room = (snapshot.raw.resources.length ? snapshot.raw.resources : snapshot.rooms)
        .find((room) => room.id === room_id);
    if (!room) throw new Error('Expected synthetic room is not loaded');
    const fixture_room = ROOMS.find((item) => item.id === room_id)!;
    expect(room).toMatchObject({
        id: room_id, email: fixture_room.email, zones: ZONES,
    });
    audit.submission = {
        path: POST_PATH,
        accepts: (body) => body.title === TITLE && body.host === USER.email &&
            Array.isArray(body.resources) &&
            (body.resources as Json[]).map((r) => r.id).join() === room_id,
        armed: true, bodies: [], completed: false,
    };
}
/** Wait for the armed POST and the success page; returns the one sent body. */
async function expectSimulatedSuccess(page: Page, audit: Audit) {
    await expect.poll(() => audit.submission?.completed).toBe(true);
    expect(audit.submission?.bodies).toHaveLength(1);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(page.locator('meeting-flow-success [name="meeting-created-continue"]')).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
    return audit.submission?.bodies[0] ?? {};
}

for (const index of [0, 1]) {
    test('events.no_space_resource selects synthetic fallback room ' + index,
        async ({ isolated: { page, audit } }) => {
            const room = ROOMS[index];
            const confirm = await openStrictMeeting(page, audit, {
                'app.events.no_space_resource': room.id,
                'app.events.force_current_user_for_booking_rules': false,
            }, { org: ORG, base: BASE, bearer: fakeBearer('zone-settings'), rules: RULES, selected: false });
            const before = await formSnapshot(page);
            expect(before.raw.resources).toEqual([]);
            await armSubmission(page, audit, room.id);
            await confirm.click();
            // The actual UI requires explicit confirmation of a roomless draft.
            const modal = page.locator('confirm-modal');
            await expect(modal).toHaveCount(1);
            await expect(modal).toBeVisible();
            await expect(modal.locator('button[name="accept"]')).toBeEnabled();
            expect(audit.submission?.bodies).toEqual([]);
            await modal.locator('button[name="accept"]').click();
            const body = await expectSimulatedSuccess(page, audit);
            expect((body.resources as Json[]).map((r) => r.id)).toEqual([room.id]);
            expect(body.system_id).toBe(room.id);
            expect(audit.fixtures[HOST_PATH] ?? 0).toBe(0);
        });
}


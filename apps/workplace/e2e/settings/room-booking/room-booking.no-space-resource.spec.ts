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
import { expect } from '@playwright/test';
import {
    armMeetingSubmission,
    expectSimulatedSuccess,
    fakeBearer,
    type Json,
    meetingFormSnapshot as formSnapshot,
    meetingFormTest as test,
    openStrictMeeting,
    type Settings,
    syntheticMeetingOrg,
} from '../support/settings-harness';

const ORG = syntheticMeetingOrg('e2e-no-space-resource-');
const { GROUP, HOST_PATH, ROOMS } = ORG;
// Both hosts are permitted. These scenarios cover rule-host resolution,
// not hidden-rule rejection; every application error remains a test failure.
const RULES: Json[] = [{ zone: '*', conditions: { groups: [GROUP] },
    rules: { hidden: false } }];
const BASE: Settings = {
    ...ORG.BASE,
    'app.events.can_book_for_others': true,
    'app.events.hide_attendees': true,
};


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
            await armMeetingSubmission(page, audit, ORG, room.id);
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


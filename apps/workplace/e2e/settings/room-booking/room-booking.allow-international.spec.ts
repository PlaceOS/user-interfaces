/**
 * User-owned Setting: events.allow_international
 * Exact runtime key: app.events.allow_international
 * Coverage: 1 unique Setting / 2 scenarios
 *
 * Scenarios (one synthetic internal-domain attendee, one selected room):
 *   1. true: the "International visitors" block shows one checkbox for the
 *      attendee, unticked; ticking it and confirming sends
 *      extension_data.attendee_flags = { <email>: { international: true } }.
 *   2. false: the block is absent; confirming sends no attendee_flags.
 * events.allow_attendee_internal_or_external is held false in both.
 *
 * Source:
 * - libs/form-fields/src/lib/user-list-field.component.ts: show_international =
 *   flags() && events.allow_international; one mat-checkbox per active_list()
 *   user, labelled name || email; setAttendeeInternational writes
 *   extension_data.international on a copied User.
 * - meeting-flow-new/meeting-flow-options.component.ts passes [flags]="true"
 *   (rendered while events.hide_attendees is false).
 * - libs/events/src/lib/event-form.service.ts postForm: attendeeFlagsFrom()
 *   (libs/events/src/lib/event-form.ts) collects flags keyed by lower-cased
 *   email into ext.attendee_flags, and deletes each attendee's extension_data.
 *
 * Safety: settings-harness meetingFormTest (browser-only). One context route
 * is installed before navigation: origin and redirect checks first, exact
 * local GET fixtures, every WebSocket and every mutation refused except ONE
 * armed POST /api/staff/v1/events (no query, JSON) whose body carries this
 * draft's identity; it gets a local 201. Nothing reaches a backend. Fresh
 * storage, blocked service workers, strict teardown.
 */
import { expect, type Page } from '@playwright/test';
import {
    fakeBearer,
    type Json,
    meetingFormSnapshot as formSnapshot,
    meetingFormTest as test,
    openStrictMeeting,
    type Settings,
    submitGuestMeeting,
    syntheticMeetingOrg,
} from '../support/settings-harness';

const ORG = syntheticMeetingOrg('e2e-allow-international-');
const { GROUP, GUEST } = ORG;
// Both hosts are permitted. These scenarios cover rule-host resolution,
// not hidden-rule rejection; every application error remains a test failure.
const RULES: Json[] = [{ zone: '*', conditions: { groups: [GROUP] },
    rules: { hidden: false } }];
const BASE: Settings = {
    ...ORG.BASE,
    'app.events.can_book_for_others': true,
    'app.events.hide_attendees': false,
    'app.events.allow_international': false,
    'app.events.allow_attendee_internal_or_external': false,
};

const OPEN = { org: ORG, base: BASE, bearer: fakeBearer('attendee-flags'), rules: RULES, guest: true };

/** The per-attendee international block (label BOOKINGS.INTERNATIONAL_VISITORS). */
const internationalBlock = (page: Page) => page.locator('meeting-flow-options a-user-list-field div')
    .filter({ has: page.locator('label', { hasText: 'International visitors:' }) })
    .filter({ has: page.locator('mat-checkbox') });

test('events.allow_international=true flags the attendee as international in the saved event',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openStrictMeeting(page, audit, { 'app.events.allow_international': true }, OPEN);
        const block = internationalBlock(page).last();
        await expect(block).toBeVisible();
        const checkbox = block.locator('mat-checkbox').filter({ hasText: GUEST.name });
        await expect(block.locator('mat-checkbox')).toHaveCount(1);
        await expect(checkbox.locator('input[type="checkbox"]')).not.toBeChecked();
        await checkbox.locator('input[type="checkbox"]').check();
        await expect(checkbox.locator('input[type="checkbox"]')).toBeChecked();
        await expect.poll(async () => (await formSnapshot(page)).raw.attendees
            .map((a) => (a.extension_data as Json | undefined)?.international)).toEqual([true]);
        const ext = await submitGuestMeeting(page, audit, confirm, ORG);
        expect(ext.attendee_flags).toEqual({ [GUEST.email]: { international: true } });
    });

test('events.allow_international=false hides the international block and saves no flags',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openStrictMeeting(page, audit, { 'app.events.allow_international': false }, OPEN);
        // openStrictMeeting has proven the attendee chip is rendered.
        await expect(page.locator('meeting-flow-options')).not.toContainText('International visitors:');
        await expect(page.locator('meeting-flow-options a-user-list-field mat-checkbox')).toHaveCount(0);
        const ext = await submitGuestMeeting(page, audit, confirm, ORG);
        expect(ext).not.toHaveProperty('attendee_flags');
    });

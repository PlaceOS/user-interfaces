/**
 * User-owned Setting: events.allow_attendee_internal_or_external
 * Exact runtime key: app.events.allow_attendee_internal_or_external
 * Coverage: 1 unique Setting / 2 scenarios
 *
 * Scenarios (one synthetic internal-domain attendee, one selected room):
 *   1. true: the "Internal or external" block shows the attendee with an
 *      Internal/External radio group, Internal selected by default; choosing
 *      External and confirming sends extension_data.attendee_flags =
 *      { <email>: { visitor_internal_or_external: 'external' } }.
 *   2. false: the block is absent; confirming sends no attendee_flags.
 * events.allow_international is held false in both.
 *
 * Source:
 * - libs/form-fields/src/lib/user-list-field.component.ts:
 *   show_internal_or_external = flags() && events.allow_attendee_internal_or_external;
 *   per active_list() user a mat-radio-group (internal/external) whose value is
 *   getAttendeeType() -> toVisitorInternalOrExternal (default 'internal');
 *   setAttendeeType writes extension_data.visitor_internal_or_external.
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

const ORG = syntheticMeetingOrg('e2e-attendee-type-');
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

/** The per-attendee type row (block label BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL). */
const typeRow = (page: Page) => page.locator('meeting-flow-options a-user-list-field div')
    .filter({ has: page.locator('span', { hasText: GUEST.name }) })
    .filter({ has: page.locator('mat-radio-group') });

test('events.allow_attendee_internal_or_external=true marks the attendee external in the saved event',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openStrictMeeting(page, audit,
            { 'app.events.allow_attendee_internal_or_external': true }, OPEN);
        await expect(page.locator('meeting-flow-options a-user-list-field label',
            { hasText: 'Internal or external' })).toBeVisible();
        const row = typeRow(page).last();
        await expect(row).toBeVisible();
        const internal = row.locator('mat-radio-button').filter({ hasText: 'Internal' });
        const external = row.locator('mat-radio-button').filter({ hasText: 'External' });
        await expect(row.locator('mat-radio-button')).toHaveCount(2);
        // toVisitorInternalOrExternal defaults an unset type to 'internal'.
        await expect(internal.locator('input[type="radio"]')).toBeChecked();
        await expect(external.locator('input[type="radio"]')).not.toBeChecked();
        await external.locator('input[type="radio"]').check();
        await expect(external.locator('input[type="radio"]')).toBeChecked();
        await expect.poll(async () => (await formSnapshot(page)).raw.attendees
            .map((a) => (a.extension_data as Json | undefined)?.visitor_internal_or_external))
            .toEqual(['external']);
        const ext = await submitGuestMeeting(page, audit, confirm, ORG);
        expect(ext.attendee_flags).toEqual({ [GUEST.email]: { visitor_internal_or_external: 'external' } });
    });

test('events.allow_attendee_internal_or_external=false hides the type block and saves no flags',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openStrictMeeting(page, audit,
            { 'app.events.allow_attendee_internal_or_external': false }, OPEN);
        // openStrictMeeting has proven the attendee chip is rendered.
        await expect(page.locator('meeting-flow-options')).not.toContainText('Internal or external');
        await expect(page.locator('meeting-flow-options a-user-list-field mat-radio-group')).toHaveCount(0);
        const ext = await submitGuestMeeting(page, audit, confirm, ORG);
        expect(ext).not.toHaveProperty('attendee_flags');
    });

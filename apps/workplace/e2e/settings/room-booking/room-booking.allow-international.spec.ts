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
 * Source (develop d0ae2e306):
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
    browserSignIn,
    type DebugWindow,
    type Json,
    MEETING_POST_PATH as POST_PATH,
    MEETING_TITLE as TITLE,
    MEETING_USER as USER,
    type MeetingAudit as Audit,
    meetingFormGets,
    meetingFormSnapshot as formSnapshot,
    meetingFormTest as test,
    type Settings,
    syntheticMeetingOrg,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-attendee-flags-not-a-valid-credential';
const ORG = syntheticMeetingOrg('e2e-allow-international-');
const { GROUP, HOST_PATH, GUEST, ROOMS } = ORG;
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

async function openMeeting(page: Page, audit: Audit, overrides: Settings) {
    const host = USER;
    const selected = true;
    const settings = { ...BASE, ...overrides };
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 1);
    date.setUTCHours(10, 0, 0, 0);
    const organiser = { id: host.id, name: host.name, email: host.email,
        groups: host.groups, department: '', is_external: false, visit_expected: false };
    const draft = {
        id: '', title: TITLE, creator: USER.email, host: host.email, organiser,
        date: date.valueOf(), date_end: date.valueOf() + 3_600_000, duration: 60,
        all_day: false, private: false, recurring: false, recurrence: null,
        resources: selected ? [ROOMS[0]] : [], attendees: [GUEST], assets: [], catering: [],
        meeting_provider: null, timezone: 'UTC', visibility: 'normal',
        needs_space: true, needs_parking: false, attachments: [],
        setup_time: 0, breakdown_time: 0, body: '',
    };
    await browserSignIn(page, ORG, {
        bearer: FAKE_BEARER,
        settings,
        user: USER,
        session: { 'PLACEOS.event_form': draft },
    });
    await meetingFormGets(page, ORG, { rules: RULES, delegate: true });
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expect(page.locator('meeting-flow-options')).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as DebugWindow).setting?.(name), key)).toEqual(value);
    }
    await expect.poll(() => formSnapshot(page)).toMatchObject({
        valid: true, loading: false, raw: {
            id: '', title: TITLE, creator: USER.email, host: host.email,
            date: draft.date, date_end: draft.date_end, duration: 60,
            all_day: false, assets: [], catering: [],
            organiser: { id: host.id, email: host.email, groups: host.groups },
        },
    });
    await expect.poll(async () => (await formSnapshot(page)).raw.resources.length)
        .toBe(selected ? 1 : 0);
    await expect.poll(async () => (await formSnapshot(page)).raw.attendees.map((a) => a.email))
        .toEqual([GUEST.email]);
    // The rendered attendee chip proves the attendee list has drawn its rows.
    await expect(page.locator('meeting-flow-options a-user-list-field mat-chip-row[user]')
        .filter({ hasText: GUEST.name })).toBeVisible();
    await expect.poll(async () => (await formSnapshot(page)).rooms.map((room) => room.id).sort())
        .toEqual(ROOMS.map((room) => room.id).sort());
    await expect.poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0)
        .toBeGreaterThan(0);
    const confirm = page.locator('meeting-flow-options button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
    });
    await expect(confirm).toHaveCount(1);
    await expect(confirm).toBeEnabled();
    await expect(page.locator('mat-dialog-container')).toHaveCount(0);
    expect(audit.fixtures[HOST_PATH] ?? 0, 'delegate lookup has not happened before submission').toBe(0);
    return confirm;
}
/**
 * Arm exactly one POST /api/staff/v1/events. The body must carry this draft's
 * identity (title, host, the selected room, the one attendee); everything the
 * setting governs is asserted explicitly afterwards.
 */
function armSubmission(audit: Audit) {
    audit.submission = {
        path: POST_PATH,
        accepts: (body) => body.title === TITLE && body.host === USER.email &&
            Array.isArray(body.resources) &&
            (body.resources as Json[]).map((r) => r.id).join() === ROOMS[0].id &&
            Array.isArray(body.attendees) &&
            (body.attendees as Json[]).some((a) => a.email === GUEST.email),
        armed: true, bodies: [], completed: false,
    };
}
async function submitAndCapture(page: Page, audit: Audit, confirm: ReturnType<Page['locator']>) {
    armSubmission(audit);
    await confirm.click();
    await expect.poll(() => audit.submission?.completed).toBe(true);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(page.locator('meeting-flow-success [name="meeting-created-continue"]')).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
    expect(audit.submission?.bodies).toHaveLength(1);
    const body = audit.submission!.bodies[0];
    // postForm strips attendee extension_data before sending; flags live only
    // in the event's extension_data.attendee_flags.
    const guest = (body.attendees as Json[]).find((a) => a.email === GUEST.email)!;
    expect(guest.extension_data ?? {}).not.toHaveProperty('international');
    expect(guest.extension_data ?? {}).not.toHaveProperty('visitor_internal_or_external');
    return (body.extension_data ?? {}) as Json;
}

/** The per-attendee international block (label BOOKINGS.INTERNATIONAL_VISITORS). */
const internationalBlock = (page: Page) => page.locator('meeting-flow-options a-user-list-field div')
    .filter({ has: page.locator('label', { hasText: 'International visitors:' }) })
    .filter({ has: page.locator('mat-checkbox') });

test('events.allow_international=true flags the attendee as international in the saved event',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openMeeting(page, audit, { 'app.events.allow_international': true });
        const block = internationalBlock(page).last();
        await expect(block).toBeVisible();
        const checkbox = block.locator('mat-checkbox').filter({ hasText: GUEST.name });
        await expect(block.locator('mat-checkbox')).toHaveCount(1);
        await expect(checkbox.locator('input[type="checkbox"]')).not.toBeChecked();
        await checkbox.locator('input[type="checkbox"]').check();
        await expect(checkbox.locator('input[type="checkbox"]')).toBeChecked();
        await expect.poll(async () => (await formSnapshot(page)).raw.attendees
            .map((a) => (a.extension_data as Json | undefined)?.international)).toEqual([true]);
        const ext = await submitAndCapture(page, audit, confirm);
        expect(ext.attendee_flags).toEqual({ [GUEST.email]: { international: true } });
    });

test('events.allow_international=false hides the international block and saves no flags',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openMeeting(page, audit, { 'app.events.allow_international': false });
        // openMeeting has proven the attendee chip is rendered.
        await expect(page.locator('meeting-flow-options')).not.toContainText('International visitors:');
        await expect(page.locator('meeting-flow-options a-user-list-field mat-checkbox')).toHaveCount(0);
        const ext = await submitAndCapture(page, audit, confirm);
        expect(ext).not.toHaveProperty('attendee_flags');
    });

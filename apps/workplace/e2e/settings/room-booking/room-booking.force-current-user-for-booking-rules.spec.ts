/**
 * User-owned Setting: events.force_current_user_for_booking_rules
 * Exact runtime key: app.events.force_current_user_for_booking_rules
 * Coverage: 1 unique Setting / 2 scenarios
 * Docs: docs/settings/workplace.md. No booking reaches any backend.
 *
 * Both scenarios book Synthetic Room A for the SAME delegate as host and organiser.
 * The fixture rule hides every room from the delegate's group, and only the
 * delegate is in that group, so the outcome shows whose rules were applied:
 * - true: rules use the signed-in staff user (no delegate UserPipe GET); the
 *   booking is permitted and the event is submitted with the delegate as host
 *   and organiser.
 * - false: rules use the delegate (resolved through its exact synthetic GET);
 *   Confirm is refused with CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN for
 *   Synthetic Room A and nothing is submitted.
 * The draft is seeded before navigation, so no unrelated host-picker lookup occurs.
 * The meeting form re-throws the refusal, which reaches the page as one
 * uncaught error. Only the false scenario allows exactly that one message; any
 * other or additional application error still fails the strict teardown audit.
 * The default calendar/event backend is covered, with no native booking POST.
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
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
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

const ORG = syntheticMeetingOrg('e2e-force-current-rules-');
const { ZONES, GROUP, DELEGATE, HOST_PATH, ROOMS } = ORG;
// Hides every room from the delegate's group only. The signed-in staff user is
// not in the group, so whose rules are applied decides the outcome.
const RULES: Json[] = [{ zone: '*', conditions: { groups: [GROUP] },
    rules: { hidden: true } }];
const BASE: Settings = {
    ...ORG.BASE,
    'app.events.can_book_for_others': true,
    'app.events.hide_attendees': true,
};
/**
 * The text the app shows for CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN with one
 * hidden room, using LocaleService.get's lookup: `<key>_1`, then `<key>_N`, then
 * `<key>`, each in en-US (the spec's locale) before en-AU (the app default).
 */
function hiddenByRulesMessage(spaces: string) {
    const load = (locale: string) => JSON.parse(readFileSync(
        join(__dirname, '../../../../../shared/assets/locale/' + locale + '.json'), 'utf8',
    )) as { CALENDAR_EVENT?: Record<string, unknown> };
    const maps = [load('en-US'), load('en-AU')];
    const key = 'SPACE_BOOKING_RULES_HIDDEN';
    let template: unknown;
    for (const name of [key + '_1', key + '_N', key]) {
        template = maps.map((map) => map.CALENDAR_EVENT?.[name]).find((value) => typeof value === 'string');
        if (template) break;
    }
    if (typeof template !== 'string' || !template.includes('{{ spaces }}')) {
        throw new Error('CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN has an unexpected format');
    }
    // LocaleService replaces the first two occurrences of the placeholder.
    return template.replace('{{ spaces }}', spaces).replace('{{ spaces }}', spaces);
}

/**
 * Arm exactly one POST /api/staff/v1/events carrying the draft's title,
 * `host` and `room_id` as its only resource, after checking that the room is
 * loaded with its fixture email and zones.
 */
async function armSubmission(page: Page, audit: Audit, room_id: string, host: string) {
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
        accepts: (body) => body.title === TITLE && body.host === host &&
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
const OPEN = { org: ORG, base: BASE, bearer: fakeBearer('zone-settings'), rules: RULES, host: DELEGATE };

test('events.force_current_user_for_booking_rules=true applies the signed-in user\'s rules and permits the delegate booking',
    async ({ isolated: { page, audit } }) => {
        expect(USER.groups).not.toContain(GROUP);
        expect(DELEGATE.groups).toEqual([GROUP]);
        const confirm = await openStrictMeeting(page, audit, {
            'app.events.force_current_user_for_booking_rules': true,
            'app.events.no_space_resource': '',
        }, OPEN);
        const before = await formSnapshot(page);
        expect(before.raw.resources.map((room) => room.id)).toEqual([ROOMS[0].id]);
        await armSubmission(page, audit, ROOMS[0].id, DELEGATE.email);
        await confirm.click();
        const body = await expectSimulatedSuccess(page, audit);
        // Completion proves the rule and availability checks ran; the delegate
        // was never resolved, so the signed-in user's (unrestricted) rules applied.
        expect(audit.fixtures[HOST_PATH] ?? 0).toBe(0);
        expect(body.host).toBe(DELEGATE.email);
        expect((body.organiser as Json).email).toBe(DELEGATE.email);
        expect((body.resources as Json[]).map((r) => r.id)).toEqual([ROOMS[0].id]);
    });

test('events.force_current_user_for_booking_rules=false applies the delegate\'s rules and refuses the hidden room',
    async ({ isolated: { page, audit } }) => {
        expect(USER.groups).not.toContain(GROUP);
        expect(DELEGATE.groups).toEqual([GROUP]);
        const confirm = await openStrictMeeting(page, audit, {
            'app.events.force_current_user_for_booking_rules': false,
            'app.events.no_space_resource': '',
        }, OPEN);
        const before = await formSnapshot(page);
        expect(before.raw.resources.map((room) => room.id)).toEqual([ROOMS[0].id]);
        const refusal = hiddenByRulesMessage(ROOMS[0].display_name);
        expect(refusal).toContain(ROOMS[0].display_name);
        // Not armed: any POST is refused by the network guard and fails the audit.
        audit.expected_error = { text: refusal, seen: 0 };
        await confirm.click();
        // The refusal is shown to the user, for the selected room.
        await expect(page.locator('mat-snack-bar-container')).toContainText(refusal);
        // Rules were evaluated against the delegate (resolved exactly once),
        // whose group hides the room.
        await expect.poll(() => audit.fixtures[HOST_PATH] ?? 0).toBe(1);
        await expect.poll(() => audit.expected_error?.seen).toBe(1);
        expect(audit.submission, 'no event submission is armed or sent').toBeUndefined();
        await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
        await expect(page.locator('meeting-flow-success')).toHaveCount(0);
        expect((await formSnapshot(page)).raw.resources.map((room) => room.id)).toEqual([ROOMS[0].id]);
    });


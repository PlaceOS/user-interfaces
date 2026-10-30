/**
 * User-owned Setting: events.no_space_resource
 * Exact runtime key: app.events.no_space_resource
 * Coverage: 1 unique Setting / 2 scenarios
 * Docs: docs/settings/workplace.md. No booking reaches any backend.
 *
 * Two independent roomless drafts use two distinct synthetic fallback room IDs.
 * The form's actual Confirm and roomless-confirmation buttons are clicked.
 * postForm's lone_space branch supplies the configured room before createEvent.
 * The exact complete outgoing JSON is checked, then a local response drives the
 * success UI. No scan, calendar provider, visitor, catering or asset write occurs.
 * Only the default calendar/event backend is covered; native bookings are held off.
 *
 * Safety: settings-harness meetingFormTest (browser-only). One context route
 * is installed before navigation: origin and redirect checks first, exact
 * local GET fixtures, every WebSocket and every mutation refused except ONE
 * armed POST /api/staff/v1/events (no query, JSON) whose body equals the expected JSON;
 * it gets a local 201. Nothing reaches a backend. Fresh storage, blocked
 * service workers, strict teardown.
 *
 * Source: libs/events/src/lib/event-form.service.ts:postForm/_performBooking;
 * libs/events/src/lib/events.fn.ts:createEvent/withAppVersion;
 * libs/common/src/lib/types/event.class.ts:constructor/toJSON;
 * libs/common/src/lib/types/user.class.ts:User constructor;
 * meeting-flow-new/meeting-flow-options.component.ts:confirmBooking.
 * VERSION is the pure generated build descriptor, not an auth/config fixture.
 * UI draft seeding stays in this isolated browser's sessionStorage.
 */
import { isDeepStrictEqual } from 'node:util';
import { expect, type Page } from '@playwright/test';
import { VERSION } from '../../../../../libs/common/src/lib/version';
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
    type RawMeeting,
    type Settings,
    syntheticMeetingOrg,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const ORG = syntheticMeetingOrg('e2e-no-space-resource-');
const { ZONES, GROUP, DELEGATE, HOST_PATH, ROOMS } = ORG;
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
 * Independent full-payload expectation, from CalendarEvent constructor/toJSON
 * and createEvent.withAppVersion. No product serializer or submit method is
 * invoked to construct the expectation. Empty nested User strings/false values
 * are retained; JSON removes undefined extension fields just as on the wire.
 */
function expectedUser(raw: Json): Json {
    return {
        id: raw.id || raw.email, name: raw.name || '', email: raw.email,
        first_name: raw.first_name || raw.name || '', last_name: raw.last_name || '',
        phone: raw.phone || '', organisation: raw.organisation || '',
        notes: raw.notes || '', photo: raw.photo || '', photo_upload_id: '',
        username: raw.username || '', organizer: false, checked_in: false,
        required: true, resource: false, locatable: false, response_status: '',
        department: raw.department || '', groups: raw.groups || [],
        extension_data: {}, is_external: false, visit_expected: true,
        assistance_required: false,
    };
}
function expectedCalendarBody(raw: RawMeeting, room: Json): Json {
    const organiser = expectedUser(raw.organiser);
    return {
        event_start: Math.floor(raw.date / 1000),
        event_end: Math.floor(raw.date_end / 1000),
        creator: raw.creator, host: raw.host,
        attendees: [organiser, { ...room, resource: true }],
        resources: [room], title: raw.title,
        is_system_event: false, private: false, all_day: false,
        timezone: 'UTC', recurring: false, organiser,
        from_bookings: false, update_master: false,
        system: room,
        // createEvent constructs a second CalendarEvent: old_system defaults
        // to its input system when old_system is null/undefined.
        old_system: room, attachments: [], deleted: false,
        location: raw.location || room.display_name || room.name,
        setup_time: 0, breakdown_time: 0, visibility: 'normal',
        permission: 'OPEN', system_id: room.id,
        extension_data: {
            department: '', needs_space: true, tags: [],
            attendance_type: 'ONSITE', catering: [], assets: [],
            images: [], view_access: 'OPEN',
            // CalendarEvent keeps extension_data.permission in step with
            // permission (event.class.ts); observed on the wire.
            permission: 'OPEN',
            app_name: 'Browser Meeting Simulation',
            app_version: VERSION.raw || VERSION.version || VERSION.hash,
        },
    };
}

async function openMeeting(page: Page, audit: Audit, overrides: Settings,
    host: typeof USER | typeof DELEGATE, selected: boolean) {
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
        resources: selected ? [ROOMS[0]] : [], attendees: [], assets: [], catering: [],
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
            all_day: false, assets: [], catering: [], attendees: [],
            organiser: { id: host.id, email: host.email, groups: host.groups },
        },
    });
    await expect.poll(async () => (await formSnapshot(page)).raw.resources.length)
        .toBe(selected ? 1 : 0);
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
async function armSubmission(page: Page, audit: Audit, room_id: string) {
    const snapshot = await formSnapshot(page);
    const room = (snapshot.raw.resources.length ? snapshot.raw.resources : snapshot.rooms)
        .find((room) => room.id === room_id);
    if (!room) throw new Error('Expected synthetic room is not loaded');
    const fixture_room = ROOMS.find((item) => item.id === room_id)!;
    expect(room).toMatchObject({
        id: room_id, email: fixture_room.email, zones: ZONES,
    });
    // No arbitrary matcher or unchecked payload echo is permitted.
    const expected = expectedCalendarBody(snapshot.raw, room);
    audit.submission = {
        path: POST_PATH, expected, accepts: (body) => isDeepStrictEqual(body, expected),
        armed: true, bodies: [], completed: false,
    };
}
async function expectSimulatedSuccess(page: Page, audit: Audit) {
    await expect.poll(() => audit.submission?.completed).toBe(true);
    expect(audit.submission?.bodies).toEqual([audit.submission?.expected]);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(page.locator('meeting-flow-success [name="meeting-created-continue"]')).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
}

for (const index of [0, 1]) {
    test('events.no_space_resource selects synthetic fallback room ' + index,
        async ({ isolated: { page, audit } }) => {
            const room = ROOMS[index];
            const confirm = await openMeeting(page, audit, {
                'app.events.no_space_resource': room.id,
                'app.events.force_current_user_for_booking_rules': false,
            }, USER, false);
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
            await expectSimulatedSuccess(page, audit);
            expect(audit.submission?.bodies[0]).toEqual(audit.submission?.expected);
            expect((audit.submission?.bodies[0].resources as Json[]).map((r) => r.id))
                .toEqual([room.id]);
            expect(audit.fixtures[HOST_PATH] ?? 0).toBe(0);
        });
}


/**
 * User-owned Setting: explore.show_event_details
 * Exact runtime key: app.explore.show_event_details
 * Coverage: 1 unique Setting / 2 scenarios
 * ExploreSpaceInfoComponent requires next() and explicit false privacy values
 * before details can appear. Bookings are a direct event array; date is epoch
 * milliseconds and duration is minutes (CalendarEvent constructor).
 * Each context creates a current synthetic event. Both privacy values stay
 * false in both scenarios; only this Setting changes. Hover only, never click.
 * True displays title/host; false preserves room/status/event timing without
 * title or host. The exact synthetic host GET is intercepted locally.
 * Sources: libs/explore/src/lib/explore-space-info.component.ts;
 * libs/common/src/lib/types/event.class.ts; libs/users/src/lib/staff.fn.ts.
 *
 * Safety: settings-harness browserOnlyTest. Fresh empty storage, synthetic
 * staff and auth (fake bearer), every API/auth GET answered in the browser,
 * no request or socket forwarded to a backend. Only exact AreaManagement/Bookings
 * bind/unbind tuples are accepted; commands, mutations, redirects and
 * unexpected requests fail the strict teardown audit.
 */
import { expect, type Page } from '@playwright/test';
import {
    browserGet,
    browserOnlyTest,
    type ControlAudit,
    controlAudit,
    controlSocket,
    exploreBindings,
    exploreRoomReady,
    exploreValues,
    openSyntheticExplore,
    roomState,
    type Settings,
    syntheticExplore,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const EXPLORE = syntheticExplore('e2e-show-event-details-');
const { COLOUR, ROOM, ROOM_FILL, PREFIX, hasParams } = EXPLORE;
const LIVE = EXPLORE.LIVE;
/** Exact Bookings values; regenerated once per isolated browser context. */
function roomValues(): Record<string, unknown> {
    return { bookings: [{
        id: PREFIX + 'event', title: 'Synthetic meeting',
        host: 'meeting-host@example.invalid', date: Date.now(), duration: 30,
    }], status: 'busy', presence: false,
        hide_meeting_details: false, hide_meeting_title: false };
}
const BASE: Settings = {
    ...EXPLORE.BASE,
    'app.events.has_assets': false, 'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null, 'app.events.booking_unavailable': false,
    'app.explore.colors': { 'zone-free': COLOUR,
        'space-free': ROOM_FILL, 'space-busy': ROOM_FILL },
};

type Audit = ControlAudit & { room_values: Record<string, unknown> };
const test = browserOnlyTest<Audit>({
    audit: () => ({ ...controlAudit(), room_values: roomValues() }),
    socket: controlSocket<Audit>({
        bearer: FAKE_BEARER,
        values: exploreValues(EXPLORE, LIVE),
    }),
});

async function openExplore(page: Page, audit: Audit, override: Settings) {
    return openSyntheticExplore(page, audit, EXPLORE, {
        settings: { ...BASE, ...override },
        bearer: FAKE_BEARER,
        rooms: [ROOM],
        // UserPipe -> showStaff uses this exact email-encoded staff endpoint.
        gets: () => browserGet(page, (url) =>
            url.pathname === '/api/staff/v1/people/meeting-host%40example.invalid' &&
            hasParams(url, {}),
        () => ({ id: PREFIX + 'meeting-host', name: 'Synthetic Meeting Host',
            email: 'meeting-host@example.invalid' })),
        delivered: exploreBindings(EXPLORE, LIVE, audit.room_values),
    });
}

for (const enabled of [true, false]) {
    test('explore.show_event_details=' + enabled + ' controls details in the live room tooltip',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.show_event_details': enabled });
            const feature = await exploreRoomReady(page, audit.room_values, EXPLORE);
            // Prove the same current event and both privacy permissions before
            // hovering, so absence cannot pass because Bookings never arrived.
            await expect.poll(async () => (await roomState(page)).events).toHaveLength(1);
            await expect.poll(async () => (await roomState(page)).next).toMatchObject({
                title: 'Synthetic meeting', host: 'meeting-host@example.invalid',
            });
            await feature.hover({ position: { x: 10, y: 10 } });
            const tooltip = page.locator('[custom-tooltip] [name="space-info"]');
            await expect(tooltip).toHaveCount(1);
            await expect(tooltip).toBeVisible();
            await expect(tooltip.locator('h4')).toHaveText(ROOM.name);
            await expect(tooltip.locator('[status]')).toHaveClass(/busy/);
            await expect(tooltip).toContainText(/Free\s+at/);
            const title = tooltip.locator('h3').filter({ hasText: 'Synthetic meeting' });
            const host = tooltip.getByText('Synthetic Meeting Host', { exact: true });
            await expect(title).toHaveCount(enabled ? 1 : 0);
            await expect(host).toHaveCount(enabled ? 1 : 0);
            if (enabled) {
                await expect(title).toBeVisible();
                await expect(host).toBeVisible();
                await expect.poll(() =>
                    audit.fixtures['/api/staff/v1/people/meeting-host%40example.invalid'] ?? 0)
                    .toBeGreaterThan(0);
            } else {
                await expect(tooltip).not.toContainText('meeting-host@example.invalid');
            }
            await expect(page.locator('mat-dialog-container')).toHaveCount(0);
        });
}


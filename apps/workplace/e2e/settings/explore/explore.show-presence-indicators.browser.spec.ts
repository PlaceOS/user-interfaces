// Coverage: 1 unique Setting. Exact key: app.show_presence_indicators.
// Scenarios: 2.
//   1. true: with the room's live `presence` value true, the Explore map shows
//      a `sensor_occupied` presence icon on the room, in the success colour.
//   2. false: with the identical live values, no presence icon is shown.
// Scope: the Explore map for one synthetic room. Nothing is clicked or booked.
// Docs: docs/settings/workplace.md.
// Readiness waits for a busy fill: a free fill is the unset-status fallback
// and shows before any live value arrives.
//
// Source: libs/explore/src/lib/explore-spaces.service.ts subscribes to
// the `bookings`, `status` and `presence` variables of module `Bookings` on
// every room of the level. A `presence` value schedules
// _updateIcons, which returns at once while
// app.show_presence_indicators is off and otherwise publishes one
// ExploreIconComponent (`sensor_occupied`, background var(--success) when
// presence is true) per room in the `spaces-presence` feature group
// (libs/explore/src/lib/explore-icon.component.ts). A `status` value
// schedules the room fill style the same way. The room
// hover card also subscribes to `hide_meeting_details` and
// `hide_meeting_title` (explore-space-info.component.ts).
//
// Safety: settings-harness browserOnlyTest (fresh empty context, synthetic
// fake-bearer sign-in, every request answered in the browser, strict teardown
// audit) and controlSocket (the app's control WebSocket is answered in the
// browser and never reaches a backend). Only bind/unbind of the five
// variables above, on the synthetic room's `Bookings` module index 1, with a
// positive request id, are answered; anything else is refused and fails the
// scenario. On every connection the `status` value is held until the
// `presence` value has been sent, so the room fill appearing proves the
// presence update has already run; absence is never inferred from waiting.
import { expect, type Page, type WebSocketRoute } from '@playwright/test';
import {
    browserOnlyTest,
    browserSignIn,
    type ControlAudit,
    controlAudit,
    CONTROL_PATH,
    controlSocket,
    type DebugWindow,
    fakeBearer,
    type Settings,
    syntheticExplore,
    syntheticOrgGets,
} from '../support/settings-harness';

const FAKE_BEARER = fakeBearer('presence');
const USER = { id: 'e2e-presence-user', name: 'Synthetic Presence Staff',
    email: 'presence-staff@example.invalid', groups: [], sys_admin: false, support: false };
const READ_ONLY_SETTINGS: Settings = {
    'app.allow_dark_mode': false,
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
};

const ORG = syntheticExplore('e2e-presence-');
const { PREFIX, ORGANISATION, REGION, BUILDING, LEVEL } = ORG;

/** The one synthetic room on the level. */
const ROOM = {
    id: PREFIX + 'room',
    name: 'Presence Room',
    display_name: 'Presence Room',
    email: 'presence-room@example.invalid',
    map_id: PREFIX + 'room-shape',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
};
/** Module and index the room's live variables are bound on. */
const ROOM_MODULE = 'Bookings';
const ROOM_MODULE_INDEX = 1;
/**
 * The only live variables answered, and their fixed values. Identical in
 * both scenarios: presence true, status busy, no bookings, meeting details
 * hidden (the card's default).
 */
const LIVE_VALUES: Record<string, unknown> = {
    bookings: [],
    status: 'busy',
    presence: true,
    hide_meeting_details: true,
    hide_meeting_title: true,
};
/**
 * The room fill DEFAULT_COLOURS uses for `busy` (explore-spaces.service.ts).
 * Not `free`: handleStatusChange falls back to 'free' for an unset status, so a
 * free fill appears before any live value arrives and proves nothing.
 */
const BUSY_FILL = '#e53935';

// Controls, not covered settings: everything else on the Explore map is held
// off so only the room's live values vary the map.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.analytics.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.desks.use_assets': false,
    'app.explore.colors': {},
    'app.explore.show_legend': false,
    'app.explore.legend': [],
    'app.explore.disable': [],
    'app.explore.disable_features': [],
    'app.explore.disable_actions': [],
    'app.explore.disable_styles': [],
    'app.explore.hide_zones': true,
    'app.explore.hide_devices': true,
    'app.explore.hide_sensors': true,
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
};

/** The audit, plus the live variables sent on each control connection, in send order. */
type PresenceAudit = ControlAudit & { sends: string[][] };

/**
 * One controlSocket per WebSocket, so each control connection keeps its own
 * send order and its own held `status` value, including after a reconnect.
 * Only the synthetic room's `Bookings` variables with a positive request id
 * are answered.
 */
function presenceSocket(
    socket: WebSocketRoute,
    audit: PresenceAudit,
    pending: Set<Promise<void>>,
) {
    const sends: string[] = [];
    let held_status: (() => void) | undefined;
    if (new URL(socket.url()).pathname === CONTROL_PATH) audit.sends.push(sends);
    controlSocket<PresenceAudit>({
        bearer: FAKE_BEARER,
        key: (request) => request.name,
        values: (request) =>
            typeof request.id === 'number' &&
            request.id > 0 &&
            request.sys === ROOM.id &&
            request.mod === ROOM_MODULE &&
            request.index === ROOM_MODULE_INDEX
                ? LIVE_VALUES
                : undefined,
        deliver: (request, value, notify) => {
            const send = () => {
                notify(value);
                sends.push(request.name);
            };
            if (request.name === 'status' && !sends.includes('presence')) {
                held_status = send;
                return;
            }
            send();
            if (request.name === 'presence' && held_status) {
                const release = held_status;
                held_status = undefined;
                release();
            }
        },
    })(socket, audit, pending);
}

const test = browserOnlyTest<PresenceAudit>({
    audit: () => ({ ...controlAudit(), sends: [] }),
    socket: presenceSocket,
    fetchAssets: true,
});

async function openExplore(page: Page, audit: PresenceAudit, enabled: boolean) {
    await browserSignIn(page, ORG, {
        bearer: FAKE_BEARER,
        user: USER,
        authority: 'Synthetic Presence Authority',
        settings: {
            ...READ_ONLY_SETTINGS,
            ...CONTROLS,
            'app.features': ['explore'],
            'app.use_region': false,
            'app.use_geolocation': false,
            'app.allow_dark_mode': false,
            'app.default_building': BUILDING,
            'app.show_presence_indicators': enabled,
        },
    });
    // Bulk metadata, including `bindings`, is empty: no area, location or
    // locker module is bound, so only the room variables reach the socket.
    await syntheticOrgGets(page, ORG, {
        user: USER,
        zone_metadata: ORG.ZONE_METADATA,
        rooms: [ROOM],
        label: 'Presence',
        user_metadata: { description: '' },
        svg:
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
            `<rect id="${ROOM.map_id}" x="80" y="60" width="120" height="80" fill="#aaaaaa"/>` +
            '</svg>',
    });
    await page.goto('/#/explore');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    await expect.poll(() => audit.fixtures['/auth/authority'] ?? 0).toBeGreaterThan(0);
    await expect.poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0).toBeGreaterThan(0);
}

function presenceSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.show_presence_indicators'),
    );
}

/**
 * Read-only probe of the map view's inputs (explore-map-view.component.ts):
 * the room's fill and the presence icon features. Fails closed if the signals
 * are unavailable.
 */
function mapState(page: Page) {
    return page
        .locator('explore-map-view')
        .evaluate((element, map_id) => {
            const view = (window as DebugWindow).ng?.getComponent(element) as
                | {
                      features?: () => {
                          location?: unknown;
                          data?: { icon?: { content?: string }; color?: string };
                      }[];
                      styles?: () => Record<string, { fill?: string }>;
                  }
                | undefined;
            if (!view?.features || !view.styles) {
                throw new Error('explore map signals are unavailable');
            }
            return {
                room_fill: view.styles()['#' + map_id]?.fill ?? '',
                presence_icons: view
                    .features()
                    .filter(
                        (feature) =>
                            feature.location === map_id &&
                            feature.data?.icon?.content === 'sensor_occupied',
                    )
                    .map((feature) => feature.data?.color ?? ''),
            };
        }, ROOM.map_id);
}

/** Presence icons rendered on the map (explore-icon.component.ts). */
const presenceIcons = (page: Page) =>
    page.locator('explore-map-view explore-icon').filter({
        has: page.locator('icon', { hasText: /^\s*sensor_occupied\s*$/ }),
    });

// Identical live values in both scenarios; only the setting differs. Kept as
// data so the test body has no branches.
const SCENARIOS = [
    { enabled: true, icons: ['var(--success)'], rendered: 1 },
    { enabled: false, icons: [] as string[], rendered: 0 },
];

for (const scenario of SCENARIOS) {
    test(`show_presence_indicators ${scenario.enabled} sets the room presence icon on the Explore map`, async ({
        isolated: { page, audit },
    }) => {
        await openExplore(page, audit, scenario.enabled);
        await expect
            .poll(() => presenceSetting(page), {
                message: 'effective app.show_presence_indicators',
            })
            .toBe(scenario.enabled);
        // The synthetic socket sent presence, then status.
        await expect
            .poll(() => audit.sends.at(-1)?.slice() ?? [], {
                message: 'live values sent by the synthetic socket',
            })
            .toEqual(
                expect.arrayContaining(['bookings', 'presence', 'status']),
            );
        for (const sends of audit.sends.filter((sent) => sent.includes('status'))) {
            expect(
                sends.indexOf('presence'),
                'presence is sent before status on every connection',
            ).toBeGreaterThanOrEqual(0);
            expect(
                sends.indexOf('presence'),
                'presence is sent before status on every connection',
            ).toBeLessThan(sends.indexOf('status'));
        }
        // The room fill comes from the later status value, so once it is
        // shown the presence update has already run.
        await expect
            .poll(async () => (await mapState(page)).room_fill, {
                message: 'room fill from the live status',
            })
            .toBe(BUSY_FILL);
        expect((await mapState(page)).presence_icons).toStrictEqual(
            scenario.icons,
        );
        await expect(presenceIcons(page)).toHaveCount(scenario.rendered);
        expect(audit.refused, 'no refused request, socket frame or extra page').toEqual([]);
        expect(audit.errors, 'no application or HTTP errors').toEqual([]);
        expect(audit.monitoring, 'no interception failure').toEqual([]);
        expect(
            audit.connections
                .flatMap((connection) => connection.binds)
                .filter((name) => !Object.hasOwn(LIVE_VALUES, name)),
            'only room live variables are bound',
        ).toEqual([]);
    });
}

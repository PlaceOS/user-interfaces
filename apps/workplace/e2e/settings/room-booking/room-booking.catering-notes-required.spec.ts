// Coverage: 1 unique Setting. Exact key: app.events.catering_notes_required.
// Scenarios: 2.
//   1. true: with a prepared catering order and empty notes the event form's
//      catering_notes field is invalid with a `required` error; filling the
//      notes makes it valid.
//   2. false: the same order with empty notes leaves the field valid.
// Scope: the unsaved meeting form on the options step
// (/#/book/meeting/form?view=2). No order item is added and nothing is
// submitted.
// Source: libs/events/src/lib/event-form.ts makes catering_notes
// required only while the catering list is non-empty and
// app.events.catering_notes_required (or the runtime require_catering_notes
// value) is truthy. require_catering_notes comes from the building's
// `catering-settings` metadata (catering-order-state.service.ts), which
// is answered with empty details, so it is false in both scenarios.
// meeting-flow-options.component.ts shows the catering section only
// when the building has a menu and the notes textarea only while an
// order is present. Every scenario fills the notes and clears them again, so
// both the required and the not-required paths are exercised without a branch.
//
// Authentication (read-only): the staff bearer comes from settingsStaffToken
// (settings-harness): the token stored for this worker under e2e/.auth while
// the backend accepts it and the storageState the inherited staffPage loads
// holds it with at least 15 minutes left, otherwise a freshly minted one. It
// must belong to this worker's staff address and not be admin/support. The
// admin auth fixture is blocked. A browser token refresh would be a non-GET
// /auth request, which the network policy blocks and reports. The readOnlyTest
// identity guard is unchanged.
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type DebugWindow,
    ORIGINS,
    type Settings,
    clearOrganisationCache,
    expectSafe,
    getOnly,
    guardedStaffTest as test,
    protectNetwork,
    syntheticOrg,
    syntheticOrgRoutes,
    validPeriod as strictPeriod,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone and asset id starts with this prefix. */
const PREFIX = 'e2e-catering-notes-';
const ORG = syntheticOrg(PREFIX, { params: 'zones' });
const { ORGANISATION, REGION, BUILDING, LEVEL, ZONES, hasParams } = ORG;
const CATERING_CATEGORY = PREFIX + 'catering';
const CATERING_TYPE_NAME = 'CATERING:Prepared';
const CATERING_TYPE_ID = PREFIX + 'type-' + CATERING_TYPE_NAME;
const CATERING_ITEM = 'Prepared notes sandwich';
const CATERING_TYPES = [CATERING_TYPE_NAME];
const CATERING_TYPE_IDS = [CATERING_TYPE_ID];
// Exact single-zone metadata names: room rules and the catering settings and
// rules for the building, and the organisation's alerts and translations.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['room_booking_rules', 'catering-settings', 'catering_config'],
    [ORGANISATION]: [
        'room_alerts',
        'locale_en-AU',
        'locale_en-US',
        'points-of-interest',
    ],
};
const LIST_METADATA = ['room_booking_rules', 'catering_config'];

const ROOM = {
    id: PREFIX + 'room',
    name: 'Catering Notes Room',
    display_name: 'Catering Notes Room',
    email: 'catering-notes-room@example.invalid',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
    level: { id: LEVEL, parent_id: BUILDING },
};

// Controls, not covered settings. global_search and chat keep the topbar's
// loaders off; has_assets keeps the assets step out; catering.backend is the
// native (asset-based) menu.
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
};

/** Numeric seconds, in increasing order; no malformed period is hidden. */
const validPeriod = (url: URL) => strictPeriod(url, { strict: false });

/** The catering types may only be read in this synthetic organisation. */
function cateringAssetQuery(url: URL) {
    const type_id = url.searchParams.get('type_id') ?? '';
    const zone_id = url.searchParams.get('zone_id') ?? '';
    return (
        CATERING_TYPE_IDS.includes(type_id) &&
        ZONES.includes(zone_id) &&
        hasParams(url, { type_id, zone_id, limit: '500' })
    );
}

/** Exact synthetic GET fixtures for the meeting options step with catering. */
async function syntheticGets(page: Page) {
    let catering_item_requests = 0;
    await syntheticOrgRoutes(page, ORG, {
        label: 'Catering Notes',
        zone_metadata: ZONE_METADATA,
        zone_details: (_id, name) => (LIST_METADATA.includes(name) ? [] : {}),
        user_metadata: ['settings', 'contacts'],
        rooms: [ROOM],
    });
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => [ROOM],
    );
    // The caterer types in the hidden catering category.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            hasParams(url, { category_id: CATERING_CATEGORY, limit: '500' }),
        () =>
            CATERING_TYPES.map((name) => ({
                id: PREFIX + 'type-' + name,
                name,
                category_id: CATERING_CATEGORY,
                brand: 'PlaceOS',
            })),
    );
    // queryCateringItems (catering-assets.fn.ts): one item for the
    // building's one caterer.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/assets' &&
            cateringAssetQuery(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const url = new URL(route.request().url());
            const menu =
                url.searchParams.get('type_id') === CATERING_TYPE_ID &&
                url.searchParams.get('zone_id') === BUILDING;
            catering_item_requests += Number(menu);
            await route.fulfill({
                json: menu
                    ? [
                          {
                              id: PREFIX + 'item',
                              name: CATERING_ITEM,
                              identifier: CATERING_ITEM,
                              asset_type_id: CATERING_TYPE_ID,
                              zone_id: BUILDING,
                              images: [],
                              other_data: {
                                  unit_price: 1250,
                                  category: 'Prepared meals',
                                  tags: [],
                                  options: [],
                                  hide_for_zones: [],
                              },
                          },
                      ]
                    : [],
            });
        },
    );
    // Events and native room bookings: all empty.
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/events' && validPeriod(url),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'room' &&
            validPeriod(url),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings/booked',
        () => [],
    );
    return () => catering_item_requests;
}

function meetingSettings(required: boolean): Settings {
    return {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': true,
        'app.events.allow_all_day': true,
        'app.events.allow_multiday': false,
        'app.events.allow_recurrence': false,
        'app.events.has_assets': false,
        'app.events.hide_attendees': true,
        'app.events.hide_notes': true,
        'app.events.allow_externals': false,
        'app.events.use_building_timezone': false,
        'app.catering.backend': 'native',
        'app.catering_provider': '',
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.events.catering_notes_required': required,
    };
}

async function openOptions(page: Page, required: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, meetingSettings(required));
    // A prepared, browser-only meeting for tomorrow 10:00 UTC with the room
    // and one empty catering order (wrapped in CateringOrder by
    // catering-list-field.component.ts).
    await page.addInitScript((room) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only catering notes meeting',
                date: date.valueOf(),
                date_end: date.valueOf() + 60 * 60_000,
                duration: 60,
                all_day: false,
                resources: [room],
                attendees: [],
                catering: [{ id: 'prepared-order', items: [] }],
            }),
        );
    }, ROOM);
    const menuRequests = await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    const root = page.locator('meeting-flow-options');
    await expect(root).toBeVisible();
    return { audit, root, menuRequests };
}

function notesSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.events.catering_notes_required'),
    );
}

type NotesState = { valid: boolean; errors: string[] };

/**
 * Read-only probe of the catering_notes field the setting makes required.
 * The options step exposes the event form as `form`
 * (meeting-flow-options.component.ts), a signal-forms FieldTree
 * (event-form.ts). A FieldTree is a callable Proxy: calling a field
 * returns its FieldState (valid(), errors()), while any property, including
 * `call`, resolves as a child field. So the field is read into a variable and
 * called directly, never through an optional call that compiles to `.call()`.
 * Fails closed if the field or its state is unavailable.
 */
function notesState(root: ReturnType<Page['locator']>): Promise<NotesState> {
    return root.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | { form?: { catering_notes?: unknown } }
            | undefined;
        const field = component?.form?.catering_notes;
        if (typeof field !== 'function') {
            throw new Error('catering_notes field is unavailable');
        }
        const state = field() as {
            valid?: () => boolean;
            errors?: () => { kind?: string }[];
        };
        if (typeof state?.valid !== 'function' || !state.errors) {
            throw new Error('catering_notes field state is unavailable');
        }
        return {
            valid: state.valid(),
            errors: state.errors().map((error) => error.kind ?? ''),
        };
    });
}

const NOTE_OK: NotesState = { valid: true, errors: [] };
const NOTE_REQUIRED: NotesState = { valid: false, errors: ['required'] };

// The true scenario must reject empty notes with a `required` error
// (event-form.ts); the false scenario is its control. Both fill and
// clear the notes.
const SCENARIOS = [
    { required: true, verb: 'rejects', empty: NOTE_REQUIRED },
    { required: false, verb: 'accepts', empty: NOTE_OK },
];

for (const scenario of SCENARIOS) {
    test(`events.catering_notes_required ${scenario.required} ${scenario.verb} a catering order without notes`, async ({
        staffPage,
    }) => {
        const { audit, root, menuRequests } = await openOptions(
            staffPage,
            scenario.required,
        );
        await expect
            .poll(() => notesSetting(staffPage), {
                message: 'effective app.events.catering_notes_required',
            })
            .toBe(scenario.required);
        // Positive anchors: the menu loaded, so the catering section and the
        // order's notes control are on the page.
        await expect
            .poll(menuRequests, { message: 'catering menu items requested' })
            .toBeGreaterThan(0);
        await expect(root.locator('catering-list-field')).toBeVisible();
        await expect(
            root.locator('catering-list-field div[order]'),
        ).toHaveCount(1);
        const notes = root.locator('textarea[matInput]');
        await expect(notes).toHaveCount(1);
        await expect(notes).toHaveValue('');
        await expect
            .poll(() => notesState(root), { message: 'empty notes state' })
            .toStrictEqual(scenario.empty);
        await notes.fill('Prepared catering note');
        await expect
            .poll(() => notesState(root), { message: 'filled notes state' })
            .toStrictEqual(NOTE_OK);
        await notes.fill('');
        await expect
            .poll(() => notesState(root), { message: 'cleared notes state' })
            .toStrictEqual(scenario.empty);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expect(staffPage).toHaveURL(/view=2$/);
        await expectSafe(audit);
    });
}

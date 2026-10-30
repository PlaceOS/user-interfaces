// Coverage: 1 unique Setting. Exact key: app.catering_provider.
// Scenarios: 2.
//   1. 'Beta' (not the default caterer): the catering menu offers no caterer
//      choice (caterers() is empty), the menu filter is fixed to Beta, and only
//      the Beta item is listed.
//   2. unset (''): both synthetic caterers are offered; the menu pre-selects
//      the first caterer, so only the Alpha item is listed.
// Beta is used because the app already pre-selects Alpha when the setting is
// unset, so only a non-default provider proves the setting picks the caterer.
// Scope: the catering select modal opened from the meeting options step
// (/#/book/meeting/form?view=2). Nothing is selected or added, and the meeting
// is never submitted.
// Source: libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
// empties `caterers` whenever app.catering_provider is set, and
// _loadMenu forces filters().caterer to the provider, or to the first
// caterer when several exist and none is set. catering-item-filters.component.ts
// renders the caterer select only while caterers() has more than one
// entry. Two caterers (CATERING:Alpha, CATERING:Beta; catering-assets.fn.ts
// :82-87,195-217) exist in both scenarios, so the setting is the only
// difference. The modal opens from catering-list-field's empty-state button
// (icon add_notes, catering-list-field.component.ts).
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
import type { Locator, Page, Route } from '@playwright/test';
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
const PREFIX = 'e2e-catering-provider-';
const ORG = syntheticOrg(PREFIX, { params: 'zones' });
const { ORGANISATION, REGION, BUILDING, LEVEL, ZONES, hasParams } = ORG;
const CATERING_CATEGORY = PREFIX + 'catering';
/** One menu item per caterer type, on the building. */
const MENU: Record<string, { id: string; name: string }> = {
    [PREFIX + 'type-CATERING:Alpha']: {
        id: PREFIX + 'alpha-item',
        name: 'Alpha prepared item',
    },
    [PREFIX + 'type-CATERING:Beta']: {
        id: PREFIX + 'beta-item',
        name: 'Beta prepared item',
    },
};
const CATERING_TYPES = ['CATERING:Alpha', 'CATERING:Beta'];
const CATERING_TYPE_IDS = CATERING_TYPES.map((name) => PREFIX + 'type-' + name);
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
    name: 'Catering Provider Room',
    display_name: 'Catering Provider Room',
    email: 'catering-provider-room@example.invalid',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
    level: { id: LEVEL, parent_id: BUILDING },
};

// Controls, not covered settings.
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
    await syntheticOrgRoutes(page, ORG, {
        label: 'Catering Provider',
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
    // queryCateringItems: one item per caterer on the building.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' && cateringAssetQuery(url),
        (url) => {
            const type_id = url.searchParams.get('type_id')!;
            const item = MENU[type_id];
            return item && url.searchParams.get('zone_id') === BUILDING
                ? [
                      {
                          id: item.id,
                          name: item.name,
                          identifier: item.name,
                          asset_type_id: type_id,
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
                : [];
        },
    );
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
}

function meetingSettings(provider: string): Settings {
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
        'app.events.multiple_spaces': false,
        'app.catering.backend': 'native',
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.catering_provider': provider,
    };
}

async function openCateringModal(page: Page, provider: string) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, meetingSettings(provider));
    // A prepared, browser-only meeting for tomorrow 10:00 UTC with the room
    // and no catering order yet.
    await page.addInitScript((room) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only catering provider meeting',
                date: date.valueOf(),
                date_end: date.valueOf() + 60 * 60_000,
                duration: 60,
                all_day: false,
                resources: [room],
                attendees: [],
                catering: [],
            }),
        );
    }, ROOM);
    await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    const root = page.locator('meeting-flow-options');
    await expect(root).toBeVisible();
    const field = root.locator('catering-list-field');
    await expect(field).toBeVisible();
    await expect(field.locator('div[order]')).toHaveCount(0);
    const add = field.locator('button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*add_notes\s*$/ }),
    });
    await expect(add).toHaveCount(1);
    await expect(add).toBeEnabled();
    await add.click();
    const modal = page.locator('catering-select-modal');
    await expect(modal).toBeVisible();
    return { audit, root, modal };
}

function providerSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.catering_provider'),
    );
}

/**
 * Read-only probe of the caterer choice the filters panel offers and the
 * caterer the menu is filtered to (catering-item-filters.component.ts).
 * Fails closed if the signals are unavailable.
 */
function catererState(modal: Locator) {
    return modal.locator('catering-item-filters').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  caterers?: () => string[];
                  filters?: () => { caterer?: string };
              }
            | undefined;
        if (!component?.caterers || !component.filters) {
            throw new Error('catering filter signals are unavailable');
        }
        return {
            caterers: [...component.caterers()],
            filter: component.filters().caterer ?? '',
        };
    });
}

// The provider removes the caterer choice and fixes the filter to itself; unset
// offers both caterers and pre-selects the first (Alpha).
const SCENARIOS = [
    { label: "'Beta'", provider: 'Beta', caterers: [] as string[], filter: 'Beta',
        listed: 'Beta prepared item', absent: 'Alpha prepared item' },
    { label: 'unset', provider: '', caterers: ['Alpha', 'Beta'], filter: 'Alpha',
        listed: 'Alpha prepared item', absent: 'Beta prepared item' },
];

for (const scenario of SCENARIOS) {
    test(`catering_provider ${scenario.label} sets the caterers the menu offers`, async ({
        staffPage,
    }) => {
        const { audit, root, modal } = await openCateringModal(
            staffPage,
            scenario.provider,
        );
        await expect
            .poll(() => providerSetting(staffPage), {
                message: 'effective app.catering_provider',
            })
            .toBe(scenario.provider);
        await expect
            .poll(() => catererState(modal), {
                message: 'offered caterers and menu filter',
            })
            .toStrictEqual({ caterers: scenario.caterers, filter: scenario.filter });
        const list = modal.locator('catering-item-list');
        await expect(list.getByText(scenario.listed)).toHaveCount(1);
        await expect(list.getByText(scenario.absent)).toHaveCount(0);
        // Close without selecting anything; no order is added.
        await modal.locator('header button[mat-dialog-close]').click();
        await expect(modal).toHaveCount(0);
        await expect(
            root.locator('catering-list-field div[order]'),
        ).toHaveCount(0);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expectSafe(audit);
    });
}

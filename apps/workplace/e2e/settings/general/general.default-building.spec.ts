// Coverage: 1 unique setting, 2 scenarios.
// Setting: default_building (docs/settings/workplace.md).
// Consumer: libs/common/src/lib/org/organisation.service.ts.
// When the user has no saved building, the app selects `default_building`.
// The organisation is a browser-only three-building fixture (a decoy listed
// first, then A and B); no user or organisation record is changed.
import type { Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    organisationRoutes,
    stubBootstrap,
    test,
    type Settings,
} from '../support/settings-harness';
test.use({ auditHttp: 'strict' });

const REGION = 'e2e-default-region';
const BUILDING_A = 'e2e-default-building-a';
const BUILDING_B = 'e2e-default-building-b';
/**
 * Listed first and in the same timezone, so the app's own fallbacks when
 * default_building is ignored (timezone match, then buildings[0];
 * OrganisationService._setDefaultBuilding) select it, never A or B.
 */
const BUILDING_FALLBACK = 'e2e-default-building-fallback';
const LEVEL_A = 'e2e-default-level-a';
const LEVEL_B = 'e2e-default-level-b';
const LEVEL_FALLBACK = 'e2e-default-level-fallback';
const NAMES = {
    [BUILDING_A]: 'E2E Default Building A',
    [BUILDING_B]: 'E2E Default Building B',
    [BUILDING_FALLBACK]: 'E2E Default Fallback Building',
};
const LEVELS = [
    {
        id: LEVEL_FALLBACK,
        parent_id: BUILDING_FALLBACK,
        name: 'E2E Level Fallback',
        display_name: 'E2E Level Fallback',
        tags: ['level'],
    },
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Level A',
        display_name: 'E2E Level A',
        tags: ['level'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Level B',
        display_name: 'E2E Level B',
        tags: ['level'],
    },
];
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': [
        'available_now',
        'quick_actions',
        'desk_week',
        'favourites',
        'colleagues',
        'focus_timer',
        'world_clock',
    ],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.disable_building_select': false,
};

const BUILDINGS = [
    {
        id: BUILDING_FALLBACK,
        parent_id: REGION,
        name: NAMES[BUILDING_FALLBACK],
        display_name: NAMES[BUILDING_FALLBACK],
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_A,
        parent_id: REGION,
        name: 'E2E Default Building A',
        display_name: 'E2E Default Building A',
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_B,
        parent_id: REGION,
        name: 'E2E Default Building B',
        display_name: 'E2E Default Building B',
        tags: ['building'],
        timezone: 'UTC',
        location: '40,40',
    },
];

async function openUserControls(page: Page, default_building: string) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await organisationRoutes(page, {
        prefix: 'e2e-default-',
        region: { id: REGION, name: 'E2E Default Region' },
        buildings: BUILDINGS,
        levels: LEVELS,
    });
    await stubBootstrap(page);
    const settings = { ...BASE, 'app.default_building': default_building };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect
            .poll(
                () =>
                    page.evaluate(
                        (name) =>
                            (
                                window as Window & {
                                    setting?: (key: string) => unknown;
                                }
                            ).setting?.(name),
                        key,
                    ),
                { message: 'effective setting ' + key },
            )
            .toEqual(value);
    }

    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
    await page.locator('topbar button[name="user-controls"]').click();
    const controls = page.locator('user-controls-sidebar user-controls');
    await expect(controls).toBeVisible();
    return controls;
}

/** Only the expected building is shown; the other two names are absent. */
async function expectBuilding(
    controls: ReturnType<Page['locator']>,
    expected: string,
) {
    for (const [id, name] of Object.entries(NAMES)) {
        await expect(controls.getByText(name, { exact: true })).toHaveCount(
            id === expected ? 1 : 0,
        );
    }
}

test('default_building selects building B when the user has no saved building', async ({
    staffPage,
}) => {
    const controls = await openUserControls(staffPage, BUILDING_B);
    await expectBuilding(controls, BUILDING_B);
});

test('default_building selects building A when the user has no saved building', async ({
    staffPage,
}) => {
    const controls = await openUserControls(staffPage, BUILDING_A);
    await expectBuilding(controls, BUILDING_A);
});

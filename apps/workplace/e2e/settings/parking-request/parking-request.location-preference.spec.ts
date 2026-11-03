// Settings: parking.hide_prefer_toggle and parking.hidden_buildings
// (docs/settings/workplace.md), two scenarios each.
// Consumer: apps/workplace/src/app/book/parking-request-flow/
//   parking-request-form-details.component.ts.
// The toggle is rendered inside the location-preference block, which only
// exists when at least two buildings have parking levels. The organisation is
// replaced with a browser-only three-building fixture; no backend record is
// created or changed.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type Debug,
    organisationRoutes,
    PRESETS,
    prepareSettings,
    REQUEST,
    type Settings,
    test,
} from '../support/settings-harness';

const REGION = 'e2e-request-parking-region';
const BUILDING_A = 'e2e-request-parking-building-a';
const BUILDING_B = 'e2e-request-parking-building-b';
const BUILDING_C = 'e2e-request-parking-building-c';
const LEVEL_A = 'e2e-request-parking-level-a';
const LEVEL_B = 'e2e-request-parking-level-b';
const LEVEL_C = 'e2e-request-parking-level-c';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Parking Level A',
        display_name: 'E2E Parking Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Parking Level B',
        display_name: 'E2E Parking Level B',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_C,
        parent_id: BUILDING_C,
        name: 'E2E Parking Level C',
        display_name: 'E2E Parking Level C',
        tags: ['level', 'parking'],
    },
];
const BASE: Settings = {
    ...REQUEST,
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.basic_user_search': true,
    'app.default_building': BUILDING_A,
    'app.parking.request_shift_options': [PRESETS[0]],
};

test.describe.configure({ timeout: 120_000 });

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'strict' });

async function prepare(page: Page, overrides: Settings) {
    await organisationRoutes(page, {
        prefix: 'e2e-request-parking-',
        region: { id: REGION, name: 'E2E Parking Region' },
        buildings: [
            {
                id: BUILDING_A,
                parent_id: REGION,
                name: 'E2E Parking Building A',
                display_name: 'E2E Parking Building A',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
            {
                id: BUILDING_B,
                parent_id: REGION,
                name: 'E2E Parking Building B',
                display_name: 'E2E Parking Building B',
                tags: ['building'],
                timezone: 'UTC',
                location: '40,40',
            },
            {
                id: BUILDING_C,
                parent_id: REGION,
                name: 'E2E Parking Building C',
                display_name: 'E2E Parking Building C',
                tags: ['building'],
                timezone: 'UTC',
                location: '80,80',
            },
        ],
        levels: LEVELS,
        metadata: false,
        clearSession: ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters'],
    });
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        landingRooms: false,
        identity: false,
        bookings: { types: ['parking'] },
    });
    await page.goto('/#/book/parking-request/form');
    await fixture.ready({ loading: false });
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    return root;
}

const preferToggle = (page: Page) =>
    page
        .locator('parking-request-form-details settings-toggle')
        .filter({ hasText: 'Prefer booked location first' });

test(
    'parking.hidden_buildings empty lists every building with parking levels',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hidden_buildings': [],
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building C', { exact: true }),
        ).toBeVisible();
    },
);

test(
    'parking.hidden_buildings removes the listed building from the options',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hidden_buildings': [BUILDING_A],
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toHaveCount(0);
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building C', { exact: true }),
        ).toBeVisible();
        // default_building is A, which is now hidden. The form's effect moves
        // the active building to the first listed building (B).
        await expect.poll(() => staffPage.evaluate(() =>
            (window as Debug).app?.org?.building?.id), { message: 'active building' }).toBe(BUILDING_B);
        const locations = root
            .getByRole('radiogroup', { name: 'Location Preference', exact: true })
            .getByRole('radio');
        await expect(locations).toHaveCount(2);
        await expect(locations.filter({ hasText: 'E2E Parking Building B' }))
            .toHaveAttribute('aria-checked', 'true');
        await expect(locations.filter({ hasText: 'E2E Parking Building C' }))
            .toHaveAttribute('aria-checked', 'false');
    },
);

test(
    'parking.hide_prefer_toggle false shows the location preference toggle',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hide_prefer_toggle': false,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(preferToggle(staffPage)).toHaveCount(1);
        await expect(preferToggle(staffPage)).toBeVisible();
        await expect(
            staffPage.locator('parking-request-success'),
        ).toHaveCount(0);
    },
);

test(
    'parking.hide_prefer_toggle true removes the location preference toggle',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(preferToggle(staffPage)).toHaveCount(0);
        await expect(
            staffPage.locator('parking-request-success'),
        ).toHaveCount(0);
    },
);

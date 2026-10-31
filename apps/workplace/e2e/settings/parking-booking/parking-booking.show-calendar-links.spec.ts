// Coverage: 1 unique setting, 2 scenarios.
// Setting: parking.show_calendar_links (source:
//   apps/workplace/src/app/book/parking-flow/parking-flow-success.component.ts).
//
// The parking success panel renders the Outlook/Google/iCal links only when
// parking.show_calendar_links is true. The booked event is a browser-only
// sessionStorage seed; nothing is submitted and no external calendar link is
// clicked.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { prepareSettings, type Settings, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
};

async function prepare(page: Page, enabled: boolean) {
    return prepareSettings(
        page,
        {
            'app.parking.show_calendar_links': enabled,
            'app.parking.show_status_details': true,
        },
        { base: BASE, hidden: 'e2e-parking-links', landingRooms: false, identity: false },
    );
}

/** Browser-only success state for one synthetic parking booking tomorrow. */
async function seedSuccessState(page: Page) {
    const start = Math.floor(Date.now() / 1000) + 24 * 3600;
    await page.addInitScript(
        (value) => sessionStorage.setItem('PLACEOS.last_booked_booking', value),
        JSON.stringify({
            id: 'e2e-parking-links-booking',
            booking_type: 'parking',
            title: 'E2E Synthetic Parking Booking',
            asset_id: 'e2e-parking-links-bay',
            asset_name: 'E2E Synthetic Parking Bay',
            date: start * 1000,
            duration: 60,
            booking_start: start,
            booking_end: start + 3600,
            user_email: 'prepared-parking@example.invalid',
            user_name: 'Prepared Parking User',
            zones: [],
            extension_data: {},
        }),
    );
}

const LINKS = ['desk-outlook-link', 'desk-google-link', 'desk-ical-link'];

// Each calendar link is rendered (and visible) only with the setting on, and
// only then are its targets checked: `links` is the expected count per link
// and `hrefs` is empty when the links are absent.
type Scenario = {
    enabled: boolean;
    links: number;
    hrefs: [string, RegExp][];
};
const SCENARIOS: Scenario[] = [
    { enabled: false, links: 0, hrefs: [] },
    {
        enabled: true,
        links: 1,
        hrefs: [
            ['desk-outlook-link', /^https:\/\/outlook\./],
            ['desk-google-link', /^https:\/\/calendar\.google\.com\//],
            ['desk-ical-link', /^data:text\/calendar/],
        ],
    },
];

for (const scenario of SCENARIOS) {
    test(`parking.show_calendar_links ${scenario.enabled} gates the parking success links`, async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, scenario.enabled);
        await seedSuccessState(staffPage);
        await staffPage.goto('/#/book/parking/success');
        await fixture.ready({
            loading: false,
            keys: ['app.features', 'app.parking.show_calendar_links'],
        });
        const page = staffPage.locator('parking-flow-success');
        await expect(page).toHaveCount(1);
        await expect(page.locator(':scope > div')).toBeVisible();
        await expect(page.getByRole('heading')).toBeVisible();
        await expect(page.locator('main p')).toContainText(
            'E2E Synthetic Parking Bay',
        );
        for (const name of LINKS) {
            const link = page.locator('a[name="' + name + '"]');
            await expect(link).toHaveCount(scenario.links);
            await expect(link.filter({ visible: true })).toHaveCount(
                scenario.links,
            );
        }
        // Never clicked: target=_blank external calendar links.
        for (const [name, href] of scenario.hrefs) {
            await expect(
                page.locator('a[name="' + name + '"]'),
            ).toHaveAttribute('href', href);
        }
        await expect(page.locator('footer a')).toHaveCount(1);
    });
}

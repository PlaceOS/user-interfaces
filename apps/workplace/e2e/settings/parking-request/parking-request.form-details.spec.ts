// Settings: parking.show_special_needs, parking.request_submission_notes_html,
// parking.can_book_for_anyone (docs/settings/workplace.md), two scenarios each.
// Consumers: apps/workplace/src/app/book/parking-request-flow/
//   parking-request-form.component.ts and
//   parking-request-form-details.component.ts.
// Opening the request form and switching request type only changes local form
// state. The submit button is never clicked.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { prepareSettings, REQUEST, type Settings, test, untouched } from '../support/settings-harness';

const BASE: Settings = {
    ...REQUEST,
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.basic_user_search': true,
};

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'strict' });

async function openRequest(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        landingRooms: false,
        identity: false,
        bookings: { types: ['parking'] },
        routes: async () => {
            await page.addInitScript(() => {
                for (const key of ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters']) {
                    sessionStorage.removeItem(key);
                }
            });
        },
    });
    await page.goto('/#/book/parking-request/form');
    await fixture.ready({ loading: false });
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    return root;
}

// Request types are <button role="radio" aria-checked> rows in the Request
// Type radiogroup (parking-request-form-details.component.ts).
const typeCard = (root: Locator, name: string) =>
    root
        .getByRole('radio')
        .filter({ has: root.page().getByText(name, { exact: true }) });

test(
    'parking.show_special_needs reveals the special needs details',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.show_special_needs': true,
        });
        await typeCard(root, 'P2 Special Needs Request').click();
        await expect(typeCard(root, 'P2 Special Needs Request')).toHaveAttribute('aria-checked', 'true');
        await expect(
            root.getByText('Special Needs Details', { exact: true }),
        ).toHaveCount(1);
        await untouched(staffPage);
    },
);

test(
    'parking.show_special_needs false hides the special needs details',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.show_special_needs': false,
        });
        await typeCard(root, 'P2 Special Needs Request').click();
        await expect(typeCard(root, 'P2 Special Needs Request')).toHaveAttribute('aria-checked', 'true');
        await expect(
            root.getByText('Special Needs Details', { exact: true }),
        ).toHaveCount(0);
        await untouched(staffPage);
    },
);

test(
    'parking.request_submission_notes_html renders the configured HTML',
    async ({ staffPage }) => {
        await openRequest(staffPage, {
            'app.parking.request_submission_notes_html':
                '<p>E2E submission note</p>',
        });
        const notes = staffPage.locator('parking-request-form div.prose');
        await expect(notes).toHaveCount(1);
        await expect(notes).toContainText('E2E submission note');
        await untouched(staffPage);
    },
);

test(
    'parking.request_submission_notes_html empty renders no notes block',
    async ({ staffPage }) => {
        await openRequest(staffPage, {
            'app.parking.request_submission_notes_html': '',
        });
        await expect(
            staffPage.locator('parking-request-form div.prose'),
        ).toHaveCount(0);
        await untouched(staffPage);
    },
);

test(
    'parking.can_book_for_anyone true shows the request-space user search',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.can_book_for_anyone': true,
        });
        await typeCard(root, 'Standard Parking Request').click();
        await expect(typeCard(root, 'Standard Parking Request')).toHaveAttribute('aria-checked', 'true');
        await expect(root.locator('a-user-search-field')).toHaveCount(1);
        await expect(root.locator('a-user-search-field')).toBeVisible();
        await untouched(staffPage);
    },
);

test(
    'parking.can_book_for_anyone false hides the request-space user search',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.can_book_for_anyone': false,
            // The getter is parking ?? bookings.
            'app.bookings.can_book_for_anyone': true,
        });
        await typeCard(root, 'Standard Parking Request').click();
        await expect(typeCard(root, 'Standard Parking Request')).toHaveAttribute('aria-checked', 'true');
        await expect(root.locator('a-user-search-field')).toHaveCount(0);
        await untouched(staffPage);
    },
);

// Setting: basic_user_search (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios (the landing colleague search and the
// global search, both with basic_user_search true). The false path of the
// landing search is covered by landing.colleagues-require-auth.spec.ts and of
// the global search by general.hide-global-search-items.spec.ts.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type Audit,
    CONTROLS,
    fixtureHits,
    getOnly,
    prepare,
    prepareSettings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const QUERY = 'E2ESettingsColleague';
// The global search only lists results whose name or email contains the query.
const ENGINE_USER = {
    id: 'e2e-settings-user',
    name: 'E2E Settings User List',
    email: 'e2esettingscolleague-user@example.invalid',
};
const STAFF_PERSON = {
    id: 'e2e-settings-dir',
    name: 'E2E Settings Directory',
    email: 'e2esettingscolleague-dir@example.invalid',
};

/** Answers the engine user list and the staff directory for QUERY, counted. */
async function userSources(page: Page, audit: Audit) {
    await getOnly(
        page,
        audit,
        'PlaceOS user list',
        (url) =>
            url.pathname === '/api/engine/v2/users' &&
            url.searchParams.get('q') === QUERY,
        () => [ENGINE_USER],
    );
    // Provider-backed directory, answered in the browser so it is never contacted.
    await getOnly(
        page,
        audit,
        'staff directory',
        (url) =>
            url.pathname === '/api/staff/v1/people' &&
            url.searchParams.get('q') === QUERY,
        () => [STAFF_PERSON],
    );
}

// LandingStateService.search_fn selects engine users or staff people; no
// contact is selected or saved.
test('basic_user_search true searches the PlaceOS user list for landing colleagues', async ({
    staffPage,
    audit,
}) => {
    const fixture = await prepare(staffPage, audit, {
        'app.basic_user_search': true,
        'app.colleagues_require_auth': false,
        'app.hide_colleagues': false,
        'app.show_quick_book': false,
        'app.show_quick_links': false,
    });
    await userSources(staffPage, audit);
    await staffPage.goto('/#/landing');
    await fixture.ready();
    await expect(staffPage.locator('landing-new')).toHaveCount(1);
    await expect(staffPage.locator('landing-new > div')).toBeVisible();
    const colleagues = staffPage.locator('landing-colleagues-new');
    const open = colleagues.getByRole('button', {
        name: 'person_add Add Colleagues',
        exact: true,
    });
    await expect(open).toBeVisible();
    await open.click();
    const modal = staffPage.locator('add-colleagues-modal');
    await expect(modal).toBeVisible();
    const input = modal.locator('input[matInput]');
    await expect(input).toBeEnabled();
    // ngModel -> setOptions -> 500ms debounce. Fill once so no partial
    // query can reach the provider-backed directory between keystrokes.
    await input.fill(QUERY);
    const results = modal.locator('main button');
    await expect(results.filter({ hasText: ENGINE_USER.name })).toHaveCount(1);
    await expect(results.filter({ hasText: ENGINE_USER.name })).toBeVisible();
    await expect(results.filter({ hasText: STAFF_PERSON.name })).toHaveCount(0);
    expect(fixtureHits(audit, 'PlaceOS user list')).toBeGreaterThan(0);
    expect(fixtureHits(audit, 'staff directory')).toBe(0);
    // Selection stays empty; the save action must remain disabled.
    await expect(modal.locator('footer button').last()).toBeDisabled();
    // Adding a colleague writes the user's contacts metadata, so only Cancel is clicked.
    await modal.getByRole('button', { name: 'Cancel', exact: true }).click();
    await expect(modal).toHaveCount(0);
    await expect(staffPage).toHaveURL(/#\/landing$/);
});

// ExploreSearchService.search_fn: queryUsers when basic_user_search is set,
// otherwise searchStaff. The other result sources are answered empty.
test('basic_user_search true searches the PlaceOS user list in the global search', async ({
    staffPage,
    audit,
}) => {
    const fixture = await prepareSettings(
        staffPage,
        {
            'app.global_search': true,
            'app.basic_user_search': true,
            'app.hide_global_search_items': [],
        },
        {
            audit,
            controls: CONTROLS,
            landingRooms: false,
            identity: false,
            routes: async () => {
                await userSources(staffPage, audit);
                await getOnly(
                    staffPage,
                    audit,
                    'empty space search',
                    (url) =>
                        url.pathname === '/api/engine/v2/systems' &&
                        url.searchParams.get('q') === QUERY,
                    () => [],
                );
                await getOnly(
                    staffPage,
                    (url) =>
                        /^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(
                            url.pathname,
                        ) &&
                        ['desks', 'map_features'].includes(
                            url.searchParams.get('name') ?? '',
                        ),
                    () => [],
                );
                await getOnly(
                    staffPage,
                    (url) =>
                        /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(
                            url.pathname,
                        ) &&
                        ['points-of-interest', 'emergency_contacts'].includes(
                            url.searchParams.get('name') ?? '',
                        ),
                    (url) => {
                        const name = url.searchParams.get('name') ?? '';
                        return {
                            [name]: {
                                id: url.pathname.split('/')[5],
                                name,
                                details: {},
                            },
                        };
                    },
                );
                await getOnly(
                    staffPage,
                    (url) =>
                        url.pathname === '/api/engine/v2/asset_categories' &&
                        !!url.searchParams.get('zone_id'),
                    () => [],
                );
            },
        },
    );
    await staffPage.goto('/#/landing');
    await fixture.ready();
    await staffPage
        .locator('topbar global-search button[name="global-search"]')
        .click();
    const input = staffPage.locator('global-search div[search] input');
    await expect(input).toBeVisible();
    await input.fill(QUERY);
    const rows = staffPage.locator('global-search a[href*="/explore?"]');
    const engine = staffPage.locator(
        'global-search a[href*="/explore?"][href*="user=' +
            ENGINE_USER.email.split('@')[0] +
            '"]',
    );
    await expect(engine).toHaveCount(1);
    await expect(engine).toContainText(ENGINE_USER.name);
    await expect(rows.filter({ hasText: STAFF_PERSON.name })).toHaveCount(0);
    await expect(rows).toHaveCount(1);
    expect(fixtureHits(audit, 'PlaceOS user list')).toBeGreaterThan(0);
    expect(fixtureHits(audit, 'staff directory')).toBe(0);
});

// Setting: hide_global_search_items (docs/settings/workplace.md).
// Coverage: 1 unique setting, 3 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the 'local-only' audit.
//
// Source: libs/explore/src/lib/explore-search.service.ts (space and user
//   searches, and hideItem, which reads `app.hide_global_search_items`);
//   apps/workplace/src/app/components/global-search.component.ts renders one
//   row per result with the raw option type as the badge).
//
// Scenarios: 3
//   1. [] (baseline) shows both the matching user and the matching space.
//   2. ['users'] hides the user result and leaves the space result intact.
//   3. ['spaces'] hides the space result and leaves the user result intact
//      (the list is per-result-type, not an all-or-nothing switch).
// Preconditions/fixtures: the harness `test` (read-only guard and audit) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call) and the REAL organisation, on /#/landing with
//   app.global_search true. GET-only stubs serve: one `/api/staff/v1/people`
//   result (E2E User, e2e.user@example.com) because app.basic_user_search is
//   false; one `/api/engine/v2/systems?q=` result (E2E Space, map_id
//   `e2e-space-shape`, capacity 8); empty `children?name=desks` and
//   `children?name=map_features`; empty points-of-interest / emergency-contacts
//   metadata; an empty zone-scoped asset_categories list (no asset-based
//   contacts); empty /api/staff/v1/bookings and /api/staff/v1/calendars; and the
//   hidden asset category/type bootstrap so no POST is attempted. Local backend
//   only (assertLocalOnly).
// Expected behaviour: results need a query longer than two characters and a
//   400 ms debounce. Each result group is included only while hideItem(type) is
//   false; hiding `users` does not touch `spaces` and vice versa. Rows are `a`
//   elements inside the results panel and their badge shows the translated
//   result type ("Person" for users, "Room" for spaces). Nothing is opened
//   or submitted, and the read-only fixture fails the test on any non-GET /api
//   request.
//
// Notes:
// - The query must be `e2e` (3 characters). `_user_search` / `_space_search`
//   resolve to [] at 2 characters or fewer, so a shorter string would make the
//   baseline scenario fail with no signal.
// - No Tailwind class is used to find anything. Result rows are the links the
//   component renders, found by their destination (routerLink '/explore' with
//   `space=<id>` for spaces and `user=<email>` for users), which also proves
//   the result type. The empty state is `div[empty]`. The badge is the row's
//   only direct child div with no nested div (the name block has nested divs).
// - Hiding a type must be anchored on the other type, so scenario 2 and 3 each
//   prove the visible row is the one that was NOT hidden.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    CONTROLS,
    getOnly,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

const QUERY = 'e2e';
const USER = {
    id: 'e2e-search-user',
    name: 'E2E User',
    email: 'e2e.user@example.com',
    username: 'e2e.user',
    organisation: 'E2E Org',
    department: 'E2E',
};
const SPACE = {
    id: 'e2e-search-space',
    name: 'E2E Space',
    display_name: 'E2E Space',
    map_id: 'e2e-space-shape',
    capacity: 8,
    bookable: true,
    zones: [],
};

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.show_quick_book': false,
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
    'app.global_search': true,
    'app.basic_user_search': false,
    'app.hide_global_search_items': [],
};

async function prepare(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-search',
        landingRooms: false,
        identity: false,
        routes: async () => {
            // ExploreSearchService user results: searchStaff(q) -> /api/staff/v1/people.
            await getOnly(
                page,
                (url) => url.pathname === '/api/staff/v1/people',
                () => [USER],
            );
            // ExploreSearchService space results: querySystems({ q, zone_id }).
            await getOnly(
                page,
                (url) =>
                    url.pathname === '/api/engine/v2/systems' &&
                    url.searchParams.get('q') === QUERY,
                () => [SPACE],
            );
            await getOnly(
                page,
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
                page,
                (url) =>
                    /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
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
            // _asset_based_contacts: no _EMERGENCY_CONTACTS_ category in the building.
            await getOnly(
                page,
                (url) =>
                    url.pathname === '/api/engine/v2/asset_categories' &&
                    !!url.searchParams.get('zone_id'),
                () => [],
            );
            await getOnly(
                page,
                (url) => url.pathname === '/api/staff/v1/bookings',
                () => [],
            );
        },
    });
    return {
        settings: fixture.settings,
        open: async () => {
            await page.goto('/#/landing');
            await fixture.ready({ loading: false });
            await expect(page.locator('topbar')).toBeVisible();
            return page.locator('topbar global-search');
        },
    };
}

/**
 * Every search result row: the component's links to /explore (hash routing).
 * The search button and input are not links, so nothing else matches.
 */
function resultRows(page: Page) {
    return page.locator('global-search a[href*="/explore?"]');
}
/**
 * The user result: its link opens Explore with `user=<email>`. Matched on the
 * part before the @, so URL encoding of the @ cannot matter.
 */
function userRow(page: Page) {
    return page.locator('global-search a[href*="/explore?"][href*="user=' + USER.email.split('@')[0] + '"]');
}
/** The space result: its link opens Explore with `space=<id>`. */
function spaceRow(page: Page) {
    return page.locator('global-search a[href*="/explore?"][href*="space=' + SPACE.id + '"]');
}
/** The empty-state message (`div[empty]`). */
function emptyState(page: Page) {
    return page.locator('global-search div[empty]');
}
/**
 * The badge shows the translated result type (global-search.component.ts
 * TYPE_NAMES): user -> COMMON.PERSON ("Person"), space -> RESOURCE.ROOM ("Room").
 * It is the row's only direct child div without a nested div.
 */
function badge(row: Locator) {
    return row.locator(':scope > div:not(:has(div))');
}

async function search(page: Page) {
    await page.locator('global-search button[name="global-search"]').click();
    const input = page.locator('global-search div[search] input');
    await expect(input).toBeVisible();
    await input.fill(QUERY);
    // Rows appear after the 400 ms debounce once loading clears.
    await expect
        .poll(() => resultRows(page).count(), { timeout: 20_000 })
        .toBeGreaterThan(0);
    return input;
}

test.describe('hide_global_search_items', () => {
    test('hide_global_search_items [] shows the matching user and space', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': [],
        });
        const root = await fixture.open();
        await expect(root).toBeVisible();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const user = userRow(staffPage);
        const space = spaceRow(staffPage);
        await expect(user).toHaveCount(1);
        await expect(space).toHaveCount(1);
        await expect(rows).toHaveCount(2);
        await expect(user).toContainText('E2E User');
        await expect(space).toContainText('E2E Space');
        await expect(badge(user)).toHaveCount(1);
        await expect(badge(space)).toHaveCount(1);
        await expect(badge(user)).toHaveText('Person');
        await expect(badge(space)).toHaveText('Room');
        await expect(user).toContainText('e2e.user@example.com');
        await expect(space).toContainText('Capacity: 8');
        await expect(emptyState(staffPage)).toHaveCount(0);
    });

    test('hide_global_search_items [users] hides the user but not the space', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': ['users'],
        });
        await fixture.open();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const space = spaceRow(staffPage);
        // Anchor on the surviving space so a zero user count is meaningful.
        await expect(space).toHaveCount(1);
        await expect(space).toContainText('E2E Space');
        await expect(userRow(staffPage)).toHaveCount(0);
        await expect(rows.filter({ hasText: 'E2E User' })).toHaveCount(0);
        await expect(rows).toHaveCount(1);
        await expect(badge(space)).toHaveCount(1);
        await expect(badge(space)).toHaveText('Room');
        await expect(space).toContainText('Capacity: 8');
        await expect(emptyState(staffPage)).toHaveCount(0);
    });

    test('hide_global_search_items [spaces] hides the space but not the user', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': ['spaces'],
        });
        await fixture.open();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const user = userRow(staffPage);
        await expect(user).toHaveCount(1);
        await expect(user).toContainText('E2E User');
        await expect(spaceRow(staffPage)).toHaveCount(0);
        await expect(rows.filter({ hasText: 'E2E Space' })).toHaveCount(0);
        await expect(rows).toHaveCount(1);
        await expect(badge(user)).toHaveCount(1);
        await expect(badge(user)).toHaveText('Person');
        await expect(user).toContainText('e2e.user@example.com');
        await expect(emptyState(staffPage)).toHaveCount(0);
    });
});

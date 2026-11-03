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
    type Audit,
    test,
} from '../support/settings-harness';

// Setting: users.show_avatars (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumers: directory/user-list.component.ts:
// min_search_length gates its 400ms search (`query.length < min` -> no
// search); show_avatars (show_image) gates a-user-avatar.
// searchStaff (users/staff.fn.ts) GETs people?q=...&fields=... and maps a raw array.
const QUERY = 'DraftDirectory';
const PERSON = {
    id: 'e2e-settings-directory-person',
    name: 'Settings Directory Person',
    email: 'settings-directory@example.invalid',
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

// DirectoryUserList, Topbar and FooterMenu require HTTP only. Chat is disabled
// and user controls are never opened, so every PlaceOS WebSocket fails the test.
test.use({ auditSockets: 'block-all' });

async function openDirectory(
    page: Page,
    overrides: Record<string, unknown>,
    audit: Audit,
) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    const requests: string[] = [];
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/people' &&
            !!url.searchParams.get('q') &&
            (QUERY.startsWith(url.searchParams.get('q')!) ||
                url.searchParams.get('q')!.startsWith(QUERY)),
        async (route) => {
            // Non-GET methods continue to the read-only guard, which blocks them.
            if (route.request().method() !== 'GET') return route.fallback();
            const url = new URL(route.request().url());
            // Recorded before any check, so an unexpected lookup is never hidden.
            requests.push(url.searchParams.get('q')!);
            if (
                url.searchParams.get('fields') !==
                'id,name,email,username,organisation,department'
            ) {
                audit.monitoring_errors.push(
                    `people fixture: unexpected fields ${url.searchParams.get('fields')}`,
                );
                return route.fallback();
            }
            await route.fulfill({ json: [PERSON] });
        },
    );
    const settings = {
        ...READ_ONLY_SETTINGS,
        'app.chat.enabled': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        'app.users.min_search_length': 3,
        'app.users.show_avatars': false,
        ...overrides,
    };
    await useSettings(page, settings);
    await page.goto('/#/directory');
    const root = page.locator('[a-directory-user-list]');
    await expect(root).toBeVisible();
    // GlobalLoading uses [loader] until initialisationComplete(), including
    // initialization failures caught internally rather than raised as pageerror.
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    // The only input in the directory search field (user-list.component.ts).
    // The placeholder is translated and its wording changed, so it is not used.
    const input = root.locator('mat-form-field[overlay] input');
    await expect(input).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect
            .poll(() =>
                page.evaluate(
                    (key) =>
                        (
                            window as Window & {
                                setting?: (key: string) => unknown;
                            }
                        ).setting?.(key),
                    key,
                ),
            )
            .toEqual(value);
    }
    return { root, input, requests };
}

for (const enabled of [false, true]) {
    test(`users.show_avatars ${enabled} changes directory results without losing identity`, async ({
        staffPage,
        audit,
    }) => {
        const { root, input } = await openDirectory(
            staffPage,
            { 'app.users.show_avatars': enabled },
            audit,
        );
        await input.fill(QUERY);
        const row = root.locator('div[user]');
        await expect(row).toHaveCount(1);
        await expect(row.locator('.name')).toHaveText(PERSON.name);
        await expect(row.locator('a[name="email"]')).toHaveAttribute(
            'href',
            `mailto:${PERSON.email}`,
        );
        await expect(row.locator('a-user-avatar')).toHaveCount(enabled ? 1 : 0);
        if (enabled) {
            await expect(row).toHaveClass(/\bwith-image\b/);
            // <a-user-avatar> sets no host display style; its inner circle
            // (attr user-id) has a real box and names this person.
            await expect(
                row.locator(`a-user-avatar [user-id="${PERSON.id}"]`),
            ).toBeVisible();
        } else await expect(row).not.toHaveClass(/\bwith-image\b/);
        // No mailto, Locate or Call link is opened.
    });
}

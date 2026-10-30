import { APP_URL, BACKEND_URL, staffEmail } from '../../../../e2e/support/env';
import { expect, test } from '../../../../e2e/support/fixtures';

export const READ_ONLY_SETTINGS: Record<string, unknown> = {
    'app.allow_dark_mode': false,
    'app.features': ['desks'],
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
};

/**
 * The staff page in a fresh context (no admin state, service workers blocked,
 * optional time zone) for the read-only settings specs. Every /api request that
 * is not a local GET, HEAD or OPTIONS is aborted and recorded; teardown fails
 * the test on any recorded request and checks that the app loaded this
 * worker's non-admin staff user.
 */
export const readOnlyTest = test.extend<{
    readOnlyTimezone: string | undefined;
}>({
    readOnlyTimezone: [undefined, { option: true }],
    storageState: async ({}, use) => use(undefined),
    staffPage: async ({ browser, staffPage, readOnlyTimezone }, use, info) => {
        const context = await browser.newContext({
            storageState: await staffPage.context().storageState(),
            baseURL: APP_URL,
            ignoreHTTPSErrors: true,
            serviceWorkers: 'block',
            timezoneId: readOnlyTimezone,
        });
        const blocked: string[] = [];
        type StaffIdentity = {
            email?: string;
            sys_admin?: boolean;
            support?: boolean;
        };
        const identities: Promise<StaffIdentity | null>[] = [];
        try {
            // Registered before the page exists, so its first request is covered.
            await context.route('**/api/**', async (route) => {
                const request = route.request();
                const url = new URL(request.url());
                if (
                    !['GET', 'HEAD', 'OPTIONS'].includes(request.method()) ||
                    ![
                        new URL(APP_URL).origin,
                        new URL(BACKEND_URL).origin,
                    ].includes(url.origin)
                ) {
                    blocked.push(`${request.method()} ${url.pathname}`);
                    await route.abort('blockedbyclient');
                    return;
                }
                await route.continue();
            });
            const page = await context.newPage();
            // Reads the app's own identity GET; no extra request is made.
            page.on('response', (response) => {
                if (
                    response.request().method() === 'GET' &&
                    new URL(response.url()).pathname ===
                        '/api/engine/v2/users/current'
                ) {
                    identities.push(
                        response
                            .json()
                            .then((user: StaffIdentity) => user)
                            .catch(() => null),
                    );
                }
            });
            await use(page);
        } finally {
            await context.close();
            expect(
                blocked,
                'read-only scenario must perform zero API mutations',
            ).toEqual([]);
            const observed = await Promise.all(identities);
            expect(
                observed.length,
                'the app must establish staff identity',
            ).toBeGreaterThan(0);
            for (const user of observed) {
                expect(user?.email?.toLowerCase()).toBe(
                    staffEmail(info.parallelIndex).toLowerCase(),
                );
                expect(
                    user?.sys_admin || user?.support,
                    'staff-only scenario',
                ).toBeFalsy();
            }
        }
    },
});

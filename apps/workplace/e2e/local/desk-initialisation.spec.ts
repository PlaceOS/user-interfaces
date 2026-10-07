import type { Request } from '@playwright/test';
/**
 * DESK-21 — values entered before desk-form initialisation completes survive
 * the initialisation render.
 */
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';
import { expect, test } from '../../../../e2e/support/fixtures';

test.describe('desk form initialisation', () => {
    test('preserves values entered while organisation data is pending', async ({
        staffPage,
    }, testInfo) => {
        let release_metadata!: () => void;
        const metadata_released = new Promise<void>((resolve) => {
            release_metadata = resolve;
        });
        let metadata_seen!: () => void;
        const metadata_requested = new Promise<void>((resolve) => {
            metadata_seen = resolve;
        });
        let delayed_metadata: Request | undefined;

        await staffPage.route('**/api/engine/v2/metadata**', async (route) => {
            if (route.request().method() !== 'GET') return route.continue();
            if (delayed_metadata) return route.continue();
            delayed_metadata = route.request();
            metadata_seen();
            await metadata_released;
            await route.continue().catch(() => undefined);
        });

        const form = new DeskForm(staffPage);
        try {
            await form.open();
            const refresh_started = await staffPage.evaluate(() => {
                const org = (
                    window as unknown as {
                        app?: {
                            org?: { reloadMetadata?: () => Promise<void> };
                        };
                    }
                ).app?.org;
                if (!org?.reloadMetadata) return false;
                // Keep the actual reload completion, including application state
                // updates, rather than only knowing that the request started.
                (
                    window as unknown as {
                        desk_test_reload: Promise<string | null>;
                    }
                ).desk_test_reload = org.reloadMetadata().then(
                    () => null,
                    (error) => String(error),
                );
                return true;
            });
            test.skip(
                !refresh_started,
                'the local debug organisation refresh is unavailable',
            );
            const request_started = await Promise.race([
                metadata_requested.then(() => true),
                new Promise<false>((resolve) =>
                    setTimeout(() => resolve(false), 15_000),
                ),
            ]);
            test.skip(
                !request_started,
                'the metadata refresh did not issue a request',
            );

            const title = `DESK-21 distinctive ${Date.now()}`;
            await form.title.fill(title);
            await form.setChecked(form.requireLocker, false);
            await testInfo.attach('desk-form-before-initialisation-release', {
                body: await staffPage.screenshot(),
                contentType: 'image/png',
            });

            const response_ready = staffPage.waitForResponse(
                (response) => response.request() === delayed_metadata,
            );
            release_metadata();
            const response = await response_ready;
            expect(response.ok(), 'delayed metadata request must succeed').toBe(
                true,
            );
            expect(
                await response.finished(),
                'metadata body must finish loading',
            ).toBeNull();
            const reload_error = await staffPage.evaluate(async () => {
                const state = window as unknown as {
                    desk_test_reload: Promise<string | null>;
                };
                return await state.desk_test_reload;
            });
            expect(
                reload_error,
                'organisation metadata reload must finish',
            ).toBeNull();
            // Let Angular consume the refreshed state and render it before
            // inspecting values. This barrier is independent of expected values.
            await staffPage.evaluate(async () => {
                const win = window as unknown as {
                    getAllAngularTestabilities?: () => Array<{
                        whenStable: (done: () => void) => void;
                    }>;
                };
                await Promise.all(
                    (win.getAllAngularTestabilities?.() ?? []).map(
                        (testability) =>
                            new Promise<void>((resolve) =>
                                testability.whenStable(resolve),
                            ),
                    ),
                );
                await new Promise<void>((resolve) =>
                    requestAnimationFrame(() =>
                        requestAnimationFrame(() => resolve()),
                    ),
                );
            });
            await expect(
                form.title,
                'the title was lost after desk-form initialisation',
            ).toHaveValue(title, { timeout: 30_000 });
            await expect(
                form.requireLocker,
                'the Require locker value was lost after desk-form initialisation',
            ).not.toBeChecked({ timeout: 30_000 });
            await testInfo.attach('desk-form-after-initialisation-release', {
                body: await staffPage.screenshot(),
                contentType: 'image/png',
            });
        } finally {
            release_metadata();
            await staffPage.unroute('**/api/engine/v2/metadata**');
        }
    });
});

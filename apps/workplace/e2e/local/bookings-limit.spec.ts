/**
 * YB-12 — an active booking remains discoverable after more than 100 cancelled
 * bookings for the same user and day.
 */
import {
    request,
    type APIRequestContext,
    type BrowserContext,
} from '@playwright/test';
import {
    apiFor,
    currentUser,
    deleteBooking,
    ENGINE_API,
    STAFF_API,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { buildStorageState, mintToken } from '../../../../e2e/support/auth';
import {
    createBookingViaApi,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import {
    dayBoundsOn,
    SCHEDULE_DAYS,
    slotOn,
} from '../../../../e2e/support/bookings/bookings.env';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';
import { APP_URL, BACKEND_URL, deskFor } from '../../../../e2e/support/env';
import { expect, test } from '../../../../e2e/support/fixtures';

const HISTORY_COUNT = 105;

test.describe('your bookings — high cancelled history', () => {
    test('shows the active booking beyond the cancelled-history limit', async ({
        browser,
    }, testInfo) => {
        const admin = await apiFor('admin');
        const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const email = `yb-limit-${suffix}@example.com`;
        const password = `E2E-${suffix}-Password!`;
        let isolated_user_id: string | undefined;
        let user_api: APIRequestContext | undefined;
        let context: BrowserContext | undefined;
        const desk = deskFor(0);
        const day = SCHEDULE_DAYS.history;
        const slot = slotOn(day, 16);
        const { from, to } = dayBoundsOn(day);
        const cancelled_ids: number[] = [];
        let active_id: number | undefined;
        const list_responses: { url: string; ids: number[] }[] = [];

        try {
            const admin_user = await currentUser(admin);
            const create_user = await admin.post(`${ENGINE_API}/users`, {
                data: {
                    name: `YB Limit ${suffix}`,
                    email,
                    password,
                    authority_id: admin_user.authority_id,
                    sys_admin: false,
                    support: false,
                },
            });
            expect(
                create_user.ok(),
                `isolated user creation failed: ${await create_user.text()}`,
            ).toBe(true);
            const isolated_user = await create_user.json();
            isolated_user_id = isolated_user.id;
            const token = await mintToken(
                BACKEND_URL,
                APP_URL,
                email,
                password,
            );
            user_api = await request.newContext({
                baseURL: BACKEND_URL,
                ignoreHTTPSErrors: true,
                extraHTTPHeaders: {
                    Authorization: `Bearer ${token.accessToken}`,
                },
            });
            context = await browser.newContext({
                storageState: buildStorageState(token, APP_URL),
            });
            const page = await context.newPage();
            page.on('response', async (response) => {
                if (!response.url().includes(`${STAFF_API}/bookings`)) return;
                if (response.request().method() !== 'GET') return;
                try {
                    const body = await response.json();
                    const list = Array.isArray(body)
                        ? body
                        : (body.results ?? []);
                    list_responses.push({
                        url: response.url(),
                        ids: list.map((booking: { id: number }) => booking.id),
                    });
                } catch {
                    // Non-JSON responses are reported by the assertion on the page.
                }
            });

            await releaseFor(user_api, 'desk', desk.id, from, to);
            for (let index = 0; index < HISTORY_COUNT; index++) {
                const cancelled = await createBookingViaApi(user_api, {
                    type: 'desk',
                    asset_id: desk.id,
                    asset_name: desk.name,
                    title: uniqueTitle(`YB-12 cancelled ${index}`),
                    start: slot.start,
                    end: slot.end,
                });
                cancelled_ids.push(cancelled.id);
                await deleteBooking(user_api, cancelled.id);
            }

            const active = await createBookingViaApi(user_api, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: `YB-12 ACTIVE ${suffix}`,
                start: slot.start,
                end: slot.end,
            });
            active_id = active.id;

            const schedule = new SchedulePage(page);
            await schedule.open();
            await schedule.showOnly(['desk']);
            await schedule.showDayOf(slot.date_ms);
            await schedule.waitForLoaded();

            const matching = list_responses.filter((response) =>
                response.url.includes('type=desk'),
            );
            expect(
                matching.length,
                'the page must issue its desk listing query',
            ).toBeGreaterThan(0);
            expect(
                matching.at(-1)?.ids,
                'the active booking must be returned by the same query Your Bookings uses',
            ).toContain(active_id);
            await expect(
                schedule.card(active_id),
                'the active booking must be displayed after the history boundary',
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            // Setup/authentication may fail before the user context exists.
            // Teardown uses admin credentials and attempts every cleanup even
            // when an earlier deletion or context close fails.
            testInfo.setTimeout(testInfo.timeout + 60_000);
            const cleanup_errors: string[] = [];
            const attempt = async (
                label: string,
                action: () => Promise<unknown>,
            ) => {
                try {
                    await action();
                } catch (error) {
                    cleanup_errors.push(`${label}: ${String(error)}`);
                }
            };
            if (context)
                await attempt('browser context', () => context!.close());
            for (const id of [
                ...cancelled_ids,
                ...(active_id == null ? [] : [active_id]),
            ]) {
                await attempt(`booking ${id}`, async () => {
                    const response = await admin.delete(
                        `${STAFF_API}/bookings/${id}`,
                        { timeout: 5_000 },
                    );
                    expect(response.ok() || response.status() === 404).toBe(
                        true,
                    );
                });
            }
            await attempt('temporary user', async () => {
                // Recover the unique user if creation succeeded but reading its
                // response failed before its ID could be recorded.
                if (!isolated_user_id) {
                    const response = await admin.get(
                        `${ENGINE_API}/users/${encodeURIComponent(email)}`,
                        { timeout: 5_000 },
                    );
                    if (response.status() === 404) return;
                    expect(response.ok()).toBe(true);
                    isolated_user_id = (await response.json()).id;
                    expect(isolated_user_id).toBeTruthy();
                }
                const response = await admin.delete(
                    `${ENGINE_API}/users/${isolated_user_id}`,
                    { timeout: 5_000 },
                );
                expect(response.ok() || response.status() === 404).toBe(true);
            });
            if (user_api)
                await attempt('user API context', () => user_api!.dispose());
            await attempt('admin API context', () => admin.dispose());
            await testInfo.attach('cleanup-result', {
                body: JSON.stringify({
                    user_id: isolated_user_id,
                    booking_ids: [...cancelled_ids, active_id].filter(
                        (id) => id != null,
                    ),
                    errors: cleanup_errors,
                }),
                contentType: 'application/json',
            });
            expect
                .soft(
                    cleanup_errors,
                    'all temporary-user/data cleanup must succeed',
                )
                .toEqual([]);
        }
    });
});

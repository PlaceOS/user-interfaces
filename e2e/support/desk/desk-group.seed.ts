/** Test-owned level, desk metadata and SVG. No shared zone metadata is overwritten. */
import { type Page, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { ENGINE_API, apiFor, zonesWithTag } from '../api';

export interface GroupDeskSeed {
    level_id: string;
    level_name: string;
    desks: Array<{ id: string; name: string }>;
    dispose(): Promise<void>;
}

export async function seedGroupDesks(
    page: Page,
    worker: number,
    count: number,
): Promise<GroupDeskSeed> {
    const admin = await apiFor('admin', worker);
    const suffix = randomUUID();
    const level_name = `E2E Group Level ${suffix}`;
    const desks = Array.from({ length: count }, (_, index) => ({
        id: `e2e-group-${suffix}-${index}`,
        name: `E2E Group Desk ${suffix} ${index + 1}`,
    }));
    const map_path = `/assets/e2e-group-${suffix}.svg`;
    // Only a static SVG fixture is served by Playwright. Booking APIs remain real.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${count * 100} 100">${desks.map((desk, index) => `<rect id="${desk.id}" x="${index * 100 + 10}" y="10" width="50" height="50"/>`).join('')}</svg>`;
    let level_id: string | undefined;
    try {
        await page.route(`**${map_path}`, (route) =>
            route.fulfill({ contentType: 'image/svg+xml', body: svg }),
        );
        const [building] = await zonesWithTag(admin, 'building');
        expect(
            building,
            'Seed the local organisation before group desk tests',
        ).toBeTruthy();
        const response = await admin.post(`${ENGINE_API}/zones`, {
            data: {
                name: level_name,
                display_name: level_name,
                tags: ['level'],
                parent_id: building.id,
                map_id: map_path,
            },
        });
        expect(response.ok(), 'Create isolated group desk level').toBeTruthy();
        level_id = (await response.json()).id;
        const metadata = await admin.put(`${ENGINE_API}/metadata/${level_id}`, {
            data: {
                name: 'desks',
                description: 'Owned by this group desk E2E test',
                details: desks.map((desk) => ({
                    ...desk,
                    map_id: desk.id,
                    zone: level_id,
                    bookable: true,
                    groups: [],
                })),
            },
        });
        expect(metadata.ok(), 'Seed isolated group desks').toBeTruthy();
        return {
            level_id: level_id!,
            level_name,
            desks,
            dispose: async () => {
                try {
                    const deleted = await admin.delete(
                        `${ENGINE_API}/zones/${level_id}`,
                    );
                    expect(
                        deleted.ok() || deleted.status() === 404,
                        'Remove test-owned level',
                    ).toBe(true);
                } finally {
                    await admin.dispose();
                }
            },
        };
    } catch (error) {
        try {
            if (level_id) {
                const deleted = await admin.delete(
                    `${ENGINE_API}/zones/${level_id}`,
                );
                expect(
                    deleted.ok() || deleted.status() === 404,
                    `Remove test-owned level after setup failure: ${String(error)}`,
                ).toBe(true);
            }
        } finally {
            await admin.dispose();
        }
        throw error;
    }
}

/** Same user API as seed.ts, but identities belong to one test attempt. */
export async function seedGroupActors(
    admin: import('@playwright/test').APIRequestContext,
    slot: { start: number; end: number },
    audit: { users: string[]; deletedUsers: string[]; bookings: number[] },
) {
    const {
        groupActorApi,
        groupActorBookings,
        groupCleanupError,
        removeGroupBooking,
    } = await import('./desk-group.api');
    const actors: Awaited<ReturnType<typeof groupActorApi>>[] = [];
    const owned: { email: string; id?: string }[] = [];
    const dispose = async () => {
        const errors: unknown[] = [];
        // Users remain authenticated until every owned booking has been swept.
        for (const actor of actors) {
            try {
                const bookings = await groupActorBookings(
                    actor.api,
                    slot.start,
                    slot.end,
                );
                for (const booking of bookings.sort(
                    (a, b) =>
                        Number(a.booking_type === 'group') -
                        Number(b.booking_type === 'group'),
                )) {
                    try {
                        await removeGroupBooking(actor.api, booking.id);
                        audit.bookings.push(booking.id);
                    } catch (error) {
                        errors.push(groupCleanupError(error));
                    }
                }
                expect(
                    await groupActorBookings(actor.api, slot.start, slot.end),
                    'No active owned bookings after cleanup',
                ).toEqual([]);
            } catch (error) {
                errors.push(groupCleanupError(error));
            }
        }
        for (const user of owned) {
            try {
                // Recover an ID if user creation succeeded but its response was lost.
                if (!user.id) {
                    const response = await admin.get(`${ENGINE_API}/users`, {
                        params: { q: user.email, limit: 100 },
                    });
                    expect(response.ok()).toBe(true);
                    const data = await response.json();
                    user.id = (Array.isArray(data) ? data : data.results).find(
                        (row: { email: string }) => row.email === user.email,
                    )?.id;
                }
                if (user.id) {
                    const response = await admin.delete(
                        `${ENGINE_API}/users/${user.id}`,
                    );
                    expect(
                        response.ok() || response.status() === 404,
                        'Remove dedicated group user',
                    ).toBe(true);
                    await expect
                        .poll(async () =>
                            (
                                await admin.get(
                                    `${ENGINE_API}/users/${user.id}`,
                                )
                            ).status(),
                        )
                        .toBe(404);
                    audit.deletedUsers.push(user.id);
                }
            } catch (error) {
                errors.push(groupCleanupError(error));
            }
        }
        for (const actor of actors) {
            try {
                await actor.api.dispose();
            } catch (error) {
                errors.push(groupCleanupError(error));
            }
        }
        expect(errors, 'Dedicated user and booking cleanup errors').toEqual([]);
    };
    try {
        const response = await admin.get(`${ENGINE_API}/domains`);
        expect(response.ok()).toBe(true);
        const domains = await response.json();
        const [authority] = Array.isArray(domains) ? domains : domains.results;
        expect(authority, 'Local seeded authority is required').toBeTruthy();
        for (const role of ['booker', 'colleague', 'outsider']) {
            const email = `e2e-desk-group-${role}-${randomUUID()}@place.tech`;
            const password = randomUUID();
            const user: { email: string; id?: string } = { email };
            owned.push(user);
            const created = await admin.post(`${ENGINE_API}/users`, {
                data: {
                    email,
                    password,
                    name: `E2E Group ${role} ${randomUUID()}`,
                    authority_id: authority.id,
                    sys_admin: false,
                    support: false,
                },
            });
            expect(created.ok(), `Create dedicated ${role}`).toBe(true);
            user.id = (await created.json()).id;
            audit.users.push(user.id!);
            actors.push(await groupActorApi({ email, password }));
        }
        return { actors, dispose };
    } catch (error) {
        await dispose();
        throw error;
    }
}

/** DESK-GROUP-01..06: real local bookings, isolated desk/map fixtures.
 * Partial-write cases inject one explicit refusal; all accepted writes and cleanup
 * use the real backend. This tests UI recovery, not backend concurrency behaviour.
 */
import { STAFF_API, getBooking } from '../../../../e2e/support/api';
import { removeGroupBooking } from '../../../../e2e/support/desk/desk-group.api';
import { expect, test } from '../../../../e2e/support/desk/desk-group.fixtures';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';

test.describe('group desk bookings', () => {
    test.describe.configure({ mode: 'parallel' });

    test('DESK-GROUP-01: creates distinct desks and one parent for all members', async ({
        groupScenario: group,
        staffApi,
    }) => {
        await group.ui.prepare(
            group.seed,
            group.title,
            group.members.slice(1),
            group.slot,
        );
        await group.ui.submit();
        await group.ui.expectSuccess();
        const created = await group.created();
        const children = created.filter(
            (booking) => booking.booking_type === 'desk',
        );
        const parents = created.filter(
            (booking) => booking.booking_type === 'group',
        );
        expect(parents).toHaveLength(1);
        expect(children).toHaveLength(group.members.length);
        expect(children.map((booking) => booking.user_email).sort()).toEqual(
            [...group.members].sort(),
        );
        expect(new Set(children.map((booking) => booking.asset_id)).size).toBe(
            group.members.length,
        );
        for (const child of children) {
            const saved = await getBooking(staffApi, child.id);
            expect(String(saved.parent_id)).toBe(String(parents[0].id));
            expect(group.seed.desks.map((desk) => desk.id)).toContain(
                saved.asset_id,
            );
            expect(saved.booking_start).toBe(group.slot.start);
            expect(saved.booking_end).toBe(group.slot.end);
        }
    });

    test('DESK-GROUP-02: refuses missing colleagues and deduplicates repeated members', async ({
        groupScenario: group,
        staffApi,
    }) => {
        await group.ui.prepare(group.seed, group.title, [], group.slot);
        if (await group.ui.form.confirmViewButton.isEnabled()) {
            await group.ui.submit();
            await expect(
                group.ui.page.locator('mat-snack-bar-container'),
            ).toBeVisible();
            await expect(group.ui.form.confirmButton).toBeVisible();
            await group.ui.page
                .locator('button[name="close-desk-confirm"]')
                .click();
        } else {
            await expect(group.ui.form.confirmViewButton).toBeDisabled();
        }
        expect(await group.created()).toHaveLength(0);
        await group.ui.form.addGroupMember(group.members[1]);
        await group.ui.form.addGroupMember(group.members[1]);
        await expect(group.ui.form.groupMembers).toHaveCount(1);
        await group.ui.submit();
        await group.ui.expectSuccess();
        const children = (await group.created()).filter(
            (booking) => booking.booking_type === 'desk',
        );
        expect(children).toHaveLength(group.members.length);
        expect(
            new Set(children.map((booking) => booking.user_email)).size,
        ).toBe(group.members.length);
        for (const child of children)
            expect((await getBooking(staffApi, child.id)).deleted).not.toBe(
                true,
            );
    });

    test('DESK-GROUP-03: unavailable desks are not double-booked', async ({
        groupScenario: group,
        staffApi,
    }) => {
        const blocked = group.seed.desks.at(-1)!;
        const existing = await createDeskBookingViaApi(staffApi, {
            desk: blocked,
            title: `${group.title} occupied`,
            start: group.slot.start,
            end: group.slot.end,
        });
        try {
            await group.ui.prepare(
                group.seed,
                group.title,
                group.members.slice(1),
                group.slot,
            );
            await group.ui.submit();
            await expect(
                group.ui.page.locator('mat-snack-bar-container'),
            ).toBeVisible();
            await expect(group.ui.form.confirmButton).toBeVisible();
            expect(
                await group.created(),
                'Insufficient mapped desks must not create a partial group',
            ).toHaveLength(0);
            expect((await getBooking(staffApi, existing.id)).deleted).not.toBe(
                true,
            );
        } finally {
            await removeGroupBooking(staffApi, existing.id);
        }
    });

    // Known product defect: the UI reports the read-only Response.status error
    // instead of displaying the member refusal reason.
    test.fixme('DESK-GROUP-04: reports partial success when a member write is refused', async ({
        groupScenario: group,
        staffApi,
    }) => {
        const rejection = `${group.title} member refused`;
        let refused = 0;
        await group.ui.page.route(
            `**${STAFF_API}/bookings?*`,
            async (route) => {
                const request = route.request();
                const data =
                    request.method() === 'POST' ? request.postDataJSON() : null;
                if (
                    data?.booking_type === 'desk' &&
                    data.user_email === group.members[1]
                ) {
                    refused++;
                    await route.fulfill({
                        status: 409,
                        contentType: 'application/json',
                        body: JSON.stringify({ error: rejection }),
                    });
                } else await route.continue();
            },
        );
        await group.ui.prepare(
            group.seed,
            group.title,
            group.members.slice(1),
            group.slot,
        );
        await group.ui.submit();
        await group.ui.expectSuccess();
        expect(refused).toBe(1);
        const children = (await group.created()).filter(
            (booking) => booking.booking_type === 'desk',
        );
        expect(children.map((booking) => booking.user_email)).toEqual([
            group.members[0],
        ]);
        expect((await getBooking(staffApi, children[0].id)).deleted).not.toBe(
            true,
        );
        await expect(
            group.ui.page.getByText(rejection, { exact: true }).first(),
        ).toBeVisible();
    });

    test('DESK-GROUP-06: outsiders cannot cancel group members; the booker can cancel its parent', async ({
        groupScenario: group,
        staffApi,
        groupActors,
    }) => {
        const outsider = groupActors.actors[2].api;
        const colleague = groupActors.actors[1].api;
        await group.ui.prepare(
            group.seed,
            group.title,
            group.members.slice(1),
            group.slot,
        );
        await group.ui.submit();
        await group.ui.expectSuccess();
        const created = await group.created();
        const parent = created.find(
            (booking) => booking.booking_type === 'group',
        );
        const children = created.filter(
            (booking) => booking.booking_type === 'desk',
        );
        expect(parent).toBeTruthy();
        expect(children).toHaveLength(group.members.length);
        const own = children.find(
            (booking) => booking.user_email === group.members[0],
        )!;
        const memberBooking = children.find(
            (booking) => booking.user_email === group.members[1],
        )!;
        expect((await getBooking(colleague, memberBooking.id)).user_email).toBe(
            group.members[1],
        );
        expect((await getBooking(staffApi, own.id)).deleted).not.toBe(true);
        const denied = await outsider.delete(`${STAFF_API}/bookings/${own.id}`);
        expect([403, 404]).toContain(denied.status());
        expect((await getBooking(staffApi, own.id)).deleted).not.toBe(true);
        const cancelled = await staffApi.delete(
            `${STAFF_API}/bookings/${parent!.id}`,
        );
        expect(cancelled.ok()).toBeTruthy();
        for (const child of children) {
            await expect
                .poll(async () => {
                    const result = await staffApi.get(
                        `${STAFF_API}/bookings/${child.id}`,
                    );
                    if (result.status() === 404) return true;
                    expect(result.ok()).toBeTruthy();
                    return (await result.json()).deleted === true;
                })
                .toBe(true);
        }
    });

    test.describe('rollback enabled', () => {
        test.use({ rollbackGroup: true });
        test('DESK-GROUP-05: rolls back the parent and successful member after a refusal', async ({
            groupScenario: group,
            staffApi,
        }) => {
            let refused = 0;
            await group.ui.page.route(
                `**${STAFF_API}/bookings?*`,
                async (route) => {
                    const request = route.request();
                    const data =
                        request.method() === 'POST'
                            ? request.postDataJSON()
                            : null;
                    if (
                        data?.booking_type === 'desk' &&
                        data.user_email === group.members[1]
                    ) {
                        refused++;
                        await route.fulfill({
                            status: 409,
                            contentType: 'application/json',
                            body: JSON.stringify({
                                error: `${group.title} rollback trigger`,
                            }),
                        });
                    } else await route.continue();
                },
            );
            await group.ui.prepare(
                group.seed,
                group.title,
                group.members.slice(1),
                group.slot,
            );
            await group.ui.submit();
            await expect(
                group.ui.page.locator('mat-snack-bar-container'),
            ).toBeVisible();
            expect(refused).toBe(1);
            const created = await group.created();
            expect(
                created.some((booking) => booking.booking_type === 'group'),
            ).toBe(true);
            expect(
                created.some((booking) => booking.booking_type === 'desk'),
            ).toBe(true);
            for (const booking of created) {
                await expect
                    .poll(async () => {
                        const response = await staffApi.get(
                            `${STAFF_API}/bookings/${booking.id}`,
                        );
                        if (response.status() === 404) return true;
                        expect(response.ok()).toBeTruthy();
                        return (await response.json()).deleted === true;
                    })
                    .toBe(true);
            }
        });
    });
});

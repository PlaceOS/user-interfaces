/**
 * CON-ROOM-01 / 02 — concierge's Room Management page, `/#/room-management`.
 *
 * ## This is NOT the blocked room area
 *
 * Concierge has two room surfaces and only one of them is blocked. The **day
 * view** (`/#/`) reads bookings from the Microsoft calendar and can never show
 * anything on this stack — that is CON-DAY-02..07, documented in
 * `concierge-dayview.spec.ts`. **Room management** is different: it reads
 * PlaceOS `systems` directly, which answer 200 here, so it is fully testable.
 *
 * Keeping that distinction visible matters, because "concierge rooms are out of
 * scope" is true of the calendar screens and false of this one.
 *
 * ## Why editing capacity is the test worth having
 *
 * A room's capacity is read by the WORKPLACE room picker when it decides
 * whether a meeting is too big for a room — the behaviour covered by the
 * workplace specs ROOM-19/20. So CON-ROOM-02 is a genuine cross-app assertion:
 * a number changed on the concierge admin screen has to be the number the
 * booking app later enforces. It is asserted against the backend record, which
 * is the thing both apps actually read.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    columnIndex,
    readTable,
    waitForAnyRow,
} from '../../../../e2e/support/concierge/simple-table.page';

const ROOM_MANAGEMENT_ROUTE = '/#/room-management';

interface RoomSystem {
    id: string;
    name: string;
    display_name?: string;
    capacity?: number;
}

/** The rooms PlaceOS knows about, straight from the API. */
async function seededRooms(
    api: Parameters<typeof readTable> extends never ? never : any,
): Promise<RoomSystem[]> {
    const res = await api.get('/api/engine/v2/systems', {
        params: { limit: '200' },
    });
    expect(res.ok(), 'GET /systems should answer — concierge room management ' +
        'reads PlaceOS systems, not the calendar').toBe(true);
    const body = await res.json();
    const rows = Array.isArray(body) ? body : (body.results ?? []);
    return rows as RoomSystem[];
}


/**
 * Put a room's capacity back, and FAIL if it cannot be.
 *
 * ## `version` is a QUERY parameter, not a body field
 *
 * This was got wrong first time and it silently corrupted the fixture. A PUT to
 * `/systems/<id>` without it is refused:
 *
 *     422 {"error":"missing required parameter 'version'",
 *          "parameter":"version","restriction":"Int32"}
 *
 * and putting `version` in the JSON body does NOT satisfy it — it has to be
 * `?version=<n>`, optimistic locking on the record's current version. The
 * original teardown sent it in the body, swallowed the 422 with a `.catch`, and
 * so every run left the capacity one higher than it found it. Measured after six
 * runs: `E2E Alt Room 0` had drifted from 8 to 14, version 7.
 *
 * ## Why this throws instead of staying quiet
 *
 * Teardown normally must not mask a test's real result — but this fixture is
 * SHARED, and the workplace capacity specs (ROOM-19/20) assert against a room of
 * 8. A restore that fails quietly breaks a different suite, hours later, in a
 * way nobody would trace back here. A loud failure in the test that caused it is
 * much cheaper than that.
 */
async function restoreCapacity(
    api: any,
    system_id: string,
    capacity: number,
): Promise<void> {
    const current = await (await api.get(`/api/engine/v2/systems/${system_id}`)).json();
    if (current.capacity === capacity) return;
    const res = await api.put(
        `/api/engine/v2/systems/${system_id}?version=${current.version ?? 0}`,
        { data: { capacity } },
    );
    const after = await (await api.get(`/api/engine/v2/systems/${system_id}`)).json();
    expect(
        after.capacity,
        `could not restore ${system_id} to capacity ${capacity} (PUT answered ` +
            `${res.status()}). It is now ${after.capacity}, and it is a SHARED ` +
            `fixture: the workplace capacity specs ROOM-19/20 expect 8. Reset it by ` +
            `hand before running either suite again`,
    ).toBe(capacity);
}

test.describe('concierge room management', () => {
    test('CON-ROOM-01: the room list shows the seeded rooms with their capacity', async ({
        adminPage,
        adminApi,
    }) => {
        const rooms = await seededRooms(adminApi);
        expect(
            rooms.length,
            'the stack should have seeded at least one room system',
        ).toBeGreaterThan(0);

        await adminPage.goto(ROOM_MANAGEMENT_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);

        const name_col = columnIndex(snapshot, 'display_name');
        const capacity_col = columnIndex(snapshot, 'capacity');

        // Check a room the API knows about is really on the screen, with the
        // capacity the API reports — rather than just counting rows.
        const sample = rooms.find((r) => (r.capacity ?? 0) > 0) ?? rooms[0];
        const label = sample.display_name || sample.name;
        const row = snapshot.rows.find((r) => r[name_col].includes(label));

        expect(
            row,
            `room management should list "${label}". It rendered ` +
                `${snapshot.rows.length} row(s): ` +
                `${snapshot.rows.map((r) => r[name_col]).join(', ')}`,
        ).toBeDefined();

        if (sample.capacity != null) {
            expect(
                (row as string[])[capacity_col],
                `and show the capacity the backend holds for "${label}"`,
            ).toContain(String(sample.capacity));
        }
    });

    test('CON-ROOM-02: a capacity change made in the edit form is stored on the room', async ({
        adminPage,
        adminApi,
    }) => {
        const rooms = await seededRooms(adminApi);
        const room = rooms[0];
        const before = (await (await adminApi.get(
            `/api/engine/v2/systems/${room.id}`,
        )).json()) as RoomSystem;
        const original = before.capacity ?? 0;

        await adminPage.goto(ROOM_MANAGEMENT_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);
        const actions = columnIndex(snapshot, 'actions');

        try {
            await adminPage
                .locator('simple-table [role=table] > *:not([header])')
                .nth(actions)
                .locator('button, [matripple]')
                .first()
                .click();
            // Filtered by text on the menu ITEM rather than `getByText` on the
            // page: a bare text match here hits the row's tooltip instead and
            // waits on an element that never becomes visible.
            await adminPage
                .locator('.mat-mdc-menu-panel button, [role=menuitem]')
                .filter({ hasText: 'Edit Room' })
                .first()
                .click();

            // `room-form-modal` inside the CDK overlay, NOT `mat-dialog-container`
            // — measured 2026-09-17, the plain dialog locator resolves to a
            // hidden container and reports the form as absent.
            const modal = adminPage.locator('room-form-modal');
            // Waiting on the SAVE BUTTON, not on `room-form-modal` itself.
            //
            // The host custom element is unstyled and measures zero, exactly
            // like `room-bookings` on the day view, so `toBeVisible()` on it is
            // permanently false even with the form fully on screen. Anchoring on
            // a control inside it is both true and more useful — it means the
            // form is actually usable.
            await expect(
                modal.getByRole('button', { name: 'Save', exact: false }),
                'the Edit Room form never opened',
            ).toBeVisible({ timeout: 30_000 });

            // Driving the stepper rather than typing into the capacity input:
            // that input has no formcontrolname, no placeholder and no test id,
            // so the only way to address it is by position among fourteen
            // inputs — which would break the first time a field is added. The
            // `add` button is unambiguous.
            await modal.getByRole('button', { name: 'add', exact: true }).click();
            await modal.getByRole('button', { name: 'Save', exact: false }).click();
            await expect(
                modal.getByRole('button', { name: 'Save', exact: false }),
                'the form should close once the room is saved',
            ).toBeHidden({ timeout: 30_000 });

            await expect
                .poll(
                    async () =>
                        (
                            await (
                                await adminApi.get(`/api/engine/v2/systems/${room.id}`)
                            ).json()
                        ).capacity,
                    {
                        message:
                            'the capacity saved on the concierge admin screen is the ' +
                            'number the WORKPLACE room picker later reads when it ' +
                            'decides a meeting is too big for a room (workplace ' +
                            'ROOM-19/20). If it does not persist, the two apps disagree',
                        timeout: 20_000,
                    },
                )
                .toBe(original + 1);
        } finally {
            await restoreCapacity(adminApi, room.id, original);
        }
    });

    test('CON-ROOM-03: a feature added in the edit form is stored on the room', async ({
        adminPage,
        adminApi,
    }) => {
        const rooms = await seededRooms(adminApi);
        // A room with NO features to begin with, so "the feature was added" is
        // not satisfied by one that was already there. E2E Alt Room 0 ships with
        // "E2E Projector", which is exactly the trap.
        const room =
            rooms.find((r) => !((r as any).features ?? []).length) ?? rooms[0];
        const before = (await (
            await adminApi.get(`/api/engine/v2/systems/${room.id}`)
        ).json()) as Record<string, any>;
        const original: string[] = before.features ?? [];
        const feature = `E2E Whiteboard ${Date.now().toString(36)}`;

        await adminPage.goto(ROOM_MANAGEMENT_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);
        const name_col = columnIndex(snapshot, 'display_name');
        const actions = columnIndex(snapshot, 'actions');
        const row = snapshot.rows.findIndex((r) =>
            r[name_col].includes(room.display_name || room.name),
        );
        expect(
            row,
            `"${room.display_name || room.name}" is not in the room list`,
        ).toBeGreaterThanOrEqual(0);

        try {
            const width = snapshot.column_ids.length;
            await adminPage
                .locator('simple-table [role=table] > *:not([header])')
                .nth(row * width + actions)
                .locator('button, [matripple]')
                .first()
                .click();
            await adminPage
                .locator('.mat-mdc-menu-panel button, [role=menuitem]')
                .filter({ hasText: 'Edit Room' })
                .first()
                .click();

            const modal = adminPage.locator('room-form-modal');
            await expect(
                modal.getByRole('button', { name: 'Save', exact: false }),
                'the Edit Room form never opened',
            ).toBeVisible({ timeout: 30_000 });

            // The features field is a chip input: type the value and commit it
            // with Enter. Matched by placeholder because it has no test id.
            const features = modal.getByPlaceholder('Features').first();
            await expect(
                features,
                'the Edit Room form has no Features field',
            ).toBeVisible({ timeout: 15_000 });
            await features.fill(feature);
            await features.press('Enter');
            await expect(
                modal.getByText(feature, { exact: false }).first(),
                'the feature was typed but never became a chip on the form, so ' +
                    'nothing would be sent',
            ).toBeVisible({ timeout: 15_000 });

            await modal.getByRole('button', { name: 'Save', exact: false }).click();
            await expect(
                modal.getByRole('button', { name: 'Save', exact: false }),
                'the form should close once the room is saved',
            ).toBeHidden({ timeout: 30_000 });

            await expect
                .poll(
                    async () =>
                        (
                            await (
                                await adminApi.get(`/api/engine/v2/systems/${room.id}`)
                            ).json()
                        ).features ?? [],
                    {
                        message:
                            'the feature must be stored on the room system. This is ' +
                            'also what unblocks the workplace picker\'s features ' +
                            'filter (ROOM-29), which has been untestable because no ' +
                            'room had a feature to filter on',
                        timeout: 20_000,
                    },
                )
                .toContain(feature);
        } finally {
            // Put the feature list back exactly as it was — this is a shared
            // fixture, and the same `version` rule applies as for capacity.
            const current = await (
                await adminApi.get(`/api/engine/v2/systems/${room.id}`)
            ).json();
            if (JSON.stringify(current.features ?? []) !== JSON.stringify(original)) {
                await adminApi.put(
                    `/api/engine/v2/systems/${room.id}?version=${current.version ?? 0}`,
                    { data: { features: original } },
                );
                const after = await (
                    await adminApi.get(`/api/engine/v2/systems/${room.id}`)
                ).json();
                expect(
                    after.features ?? [],
                    `could not restore the features of ${room.id}. It is a SHARED ` +
                        `fixture — reset it by hand before running either suite again`,
                ).toEqual(original);
            }
        }
    });
});
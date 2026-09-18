/**
 * A second level, created on the fly, so the desk form's level selector has
 * something to switch between.
 *
 * ## Why this is not a change to `seed.ts`
 *
 * DESK-15 — "changing the building or level re-scopes which desks are offered" —
 * has been the one desk row nobody could write, because the stack seeds ONE
 * org, ONE building and ONE level, so the selector has a list of one. The
 * obvious fix is to seed a second level, and that means editing the shared
 * `seed.ts` — the file both sessions have deliberately left alone, because a
 * mistake in it breaks the dev's original desk specs.
 *
 * So the level is created by the spec that needs it and deleted afterwards. That
 * keeps the shared fixture untouched and makes the cost visible: this is the
 * only place in the suite that adds to the org hierarchy, and it cleans up after
 * itself.
 *
 * ## What a desk actually is
 *
 * Zone METADATA, not an asset: the app reads `listChildMetadata(building,
 * {name: 'desks'})`, so a desk on the new level means a `desks` metadata
 * document on the new zone. That is why this file writes metadata rather than
 * creating anything desk-shaped.
 *
 * Needs ADMIN.
 */
import { ENGINE_API, apiFor, zonesWithTag } from '../api';

export interface SecondLevel {
    zone_id: string;
    desk: { id: string; name: string };
}

/** The name the extra level is created under, so it can be found and removed. */
const LEVEL_NAME_PREFIX = 'E2E Extra Level';

/**
 * Create a second level under the seeded building, with one desk on it.
 *
 * Named per worker, so parallel workers do not share a zone: each one's spec
 * switches the selector to its own level and expects exactly its own desk.
 */
export async function createSecondLevel(workerIndex: number): Promise<SecondLevel> {
    const admin = await apiFor('admin', 0);
    try {
        const [building] = await zonesWithTag(admin, 'building');
        if (!building?.id) {
            throw new Error('no building zone to hang a level off — the stack is not seeded');
        }
        const name = `${LEVEL_NAME_PREFIX} ${workerIndex}`;
        const desk = {
            id: `e2e-extra-desk-${workerIndex}`,
            name: `E2E Extra Desk ${workerIndex}`,
        };

        // Reuse the zone if an earlier run left it behind, so a crashed run does
        // not accumulate levels.
        const existing = (await zonesWithTag(admin, 'level')).find((z) => z.name === name);
        const zone =
            existing ??
            (await (async () => {
                const res = await admin.post(`${ENGINE_API}/zones`, {
                    data: {
                        name,
                        display_name: name,
                        description: 'Extra level owned by the e2e suite. Safe to delete.',
                        tags: ['level'],
                        parent_id: building.id,
                    },
                });
                if (!res.ok()) {
                    throw new Error(
                        `create level failed: HTTP ${res.status()} ${await res.text()}`,
                    );
                }
                return res.json();
            })());

        // One desk, as zone metadata — the shape `seed.ts` uses for the others.
        const meta = await admin.put(`${ENGINE_API}/metadata/${zone.id}`, {
            data: {
                name: 'desks',
                description: 'e2e bookable desks on the extra level',
                details: [
                    {
                        id: desk.id,
                        name: desk.name,
                        bookable: true,
                        zone: zone.id,
                    },
                ],
            },
        });
        if (!meta.ok()) {
            throw new Error(
                `write desks metadata failed: HTTP ${meta.status()} ${await meta.text()}`,
            );
        }
        return { zone_id: zone.id, desk };
    } finally {
        await admin.dispose();
    }
}

/** Remove the extra level. Best effort: teardown must not mask a result. */
export async function removeSecondLevel(zone_id: string): Promise<void> {
    const admin = await apiFor('admin', 0);
    try {
        await admin.delete(`${ENGINE_API}/zones/${zone_id}`).catch(() => null);
    } finally {
        await admin.dispose();
    }
}

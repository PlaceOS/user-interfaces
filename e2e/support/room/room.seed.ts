/**
 * Creating the rooms the room specs book.
 *
 * WHY THIS IS NOT IN `e2e/support/seed.ts`: that file is what the desk specs
 * depend on, and a mistake in it breaks them. Rooms are the first resource this
 * suite needs that must genuinely be created — a desk is a row in zone
 * metadata, a visitor is just an email, but a room is an engine SYSTEM — so the
 * seeding lives here, next to the specs that need it, and runs on demand.
 *
 * It is idempotent and safe to call from every spec: the first caller creates,
 * everyone after finds. Rooms are left in place between runs; they are cheap,
 * and deleting them would make parallel workers race each other.
 *
 * Needs ADMIN. Creating a system is not something a normal staff user may do,
 * which is also why the specs cannot seed themselves with their own bearer.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, apiFor, zonesWithTag } from '../api';
import { WORKERS } from '../env';
import {
    ALT_ROOM_FEATURE,
    ROOM_VARIANTS,
    RoomIdentity,
    RoomVariant,
    roomFor,
} from './room.env';

/**
 * `GET /systems` answers with a BARE ARRAY, not `{ results: [] }`.
 *
 * Worth stating because reading `.results` off it yields `undefined`, the
 * fallback kicks in, and you get an empty list that looks exactly like "the
 * search index has not caught up yet". Half an hour went into that theory
 * before the response was actually printed.
 */
async function listSystems(api: APIRequestContext): Promise<any[]> {
    const res = await api.get(`${ENGINE_API}/systems`, { params: { limit: '500' } });
    if (!res.ok()) {
        throw new Error(`list systems failed: HTTP ${res.status()} ${await res.text()}`);
    }
    const body = await res.json();
    return Array.isArray(body) ? body : (body?.results ?? []);
}

/** Every room this suite owns, keyed by variant then worker index. */
export type RoomSet = Record<RoomVariant, RoomIdentity[]>;

/**
 * Make sure every worker has its bookable rooms, and return them.
 *
 * Three per worker — see `ROOM_VARIANTS` in `room.env.ts` for why `alt` and
 * `small` exist. They are created in the same pass as `main` rather than on
 * first use, because listing every system in the org is the expensive part and
 * doing it once is the whole point of the cache below.
 *
 * Rooms are placed on BOTH the building and the level zone: the app asks for
 * systems by zone and different screens ask with different zones, so a room on
 * only one of them appears in some places and not others.
 */
export async function ensureRooms(): Promise<RoomSet> {
    const admin = await apiFor('admin', 0);
    try {
        const [building] = await zonesWithTag(admin, 'building');
        const [level] = await zonesWithTag(admin, 'level');
        if (!building?.id) {
            throw new Error(
                'no building zone to put a room in — the stack is not seeded. ' +
                    'Run e2e/stack/up.sh first.',
            );
        }
        const zones = [building.id, level?.id].filter(Boolean) as string[];
        const existing = await listSystems(admin);
        const rooms = { main: [], alt: [], small: [] } as RoomSet;

        for (const variant of ROOM_VARIANTS) {
            for (let i = 0; i < WORKERS; i++) {
                const want = roomFor(i, variant);
                const found = existing.find(
                    (s) => `${s.email}`.toLowerCase() === want.email.toLowerCase(),
                );
                if (found) {
                    rooms[variant].push({ ...want, id: found.id });
                    // The `alt` room carries a feature nothing else has, so the
                    // picker's facilities filter has something to filter on.
                    // Patched rather than only set at creation, because the
                    // rooms are left in place between runs and were created
                    // before this existed.
                    if (
                        variant === 'alt' &&
                        !(found.features || []).includes(ALT_ROOM_FEATURE)
                    ) {
                        // `version` is REQUIRED on a System PATCH — without it
                        // the request is a 422 "missing required parameter
                        // 'version'" and the feature silently never lands.
                        // `features` is an ARRAY; a space-separated string is a
                        // 400 from the JSON parser.
                        const patched = await admin.patch(
                            `${ENGINE_API}/systems/${found.id}`,
                            {
                                // `version` goes in the QUERY STRING, not the
                                // body — in the body it is ignored and the
                                // request is still a 422 "missing required
                                // parameter 'version'".
                                params: { version: String(found.version ?? 0) },
                                data: { features: [ALT_ROOM_FEATURE] },
                            },
                        );
                        if (!patched.ok()) {
                            throw new Error(
                                `adding the feature to ${want.name} failed: HTTP ` +
                                    `${patched.status()} ${await patched.text()}`,
                            );
                        }
                    }
                    continue;
                }
                const res = await admin.post(`${ENGINE_API}/systems`, {
                    data: {
                        name: want.name,
                        display_name: want.name,
                        email: want.email,
                        capacity: want.capacity,
                        bookable: true,
                        // `signage: false` matters: the app's room lookup filters
                        // signage systems out, so a room created without it is
                        // invisible in the picker while existing perfectly well.
                        signage: false,
                        zones,
                        ...(variant === 'alt' ? { features: [ALT_ROOM_FEATURE] } : {}),
                        description: 'Room owned by the e2e suite. Safe to delete.',
                    },
                });
                if (!res.ok()) {
                    throw new Error(
                        `create room ${want.name} failed: HTTP ${res.status()} ${await res.text()}`,
                    );
                }
                rooms[variant].push({ ...want, id: (await res.json()).id });
            }
        }
        return rooms;
    } finally {
        await admin.dispose();
    }
}

/**
 * The room this worker owns, creating the set on first use.
 *
 * Cached for the life of the process so twenty specs do not each re-list every
 * system in the org.
 */
let cache: Promise<RoomSet> | null = null;
export async function roomForWorker(
    workerIndex: number,
    variant: RoomVariant = 'main',
): Promise<RoomIdentity> {
    cache = cache ?? ensureRooms();
    const rooms = await cache.catch((error) => {
        // Do not poison the cache: a stack that was still starting up should not
        // fail every later spec with the same stale error.
        cache = null;
        throw error;
    });
    const room = rooms[variant][workerIndex];
    if (!room) {
        throw new Error(
            `no ${variant} room seeded for worker ${workerIndex}. ` +
                `${rooms[variant].length} exist, one per worker, so E2E_WORKERS is ` +
                `smaller than the number Playwright is running.`,
        );
    }
    return room;
}

/**
 * Hide a room with a ZONE BOOKING RULE, and remove the rule again.
 *
 * Booking rules live in `booking_rules` metadata on a zone, as a list of
 * rulesets (`libs/common/src/lib/booking-rules.ts`). Each ruleset names the zone
 * it applies to, a set of CONDITIONS, and the RULES that result — and `hidden`
 * is the one that takes a resource out of the picker entirely.
 *
 * The condition used here is `resource_ids`, which is the narrowest available:
 * it matches one room by id, so the rest of the picker is unaffected and the
 * test has a control.
 *
 * Writes the WHOLE document, which is safe because nothing else in this suite
 * writes booking rules — unlike the user `settings` blob, which is shared and
 * has to be read-modify-written.
 *
 * Needs ADMIN. Pass an empty list to clear.
 */
export async function setRoomBookingRules(
    hidden_room_ids: string[],
): Promise<void> {
    const admin = await apiFor('admin', 0);
    try {
        // WHERE THE APP LOOKS, measured rather than guessed.
        //
        // The app fetches `GET /metadata/booking_rules/bulk?parent_ids=<building>`
        // and the response comes back keyed by the BUILDING's own id, carrying
        // the building's document — despite `parent_ids` reading like a query
        // about children. `event-form.service.ts` then looks the rules up as
        // `rules[building.id]`.
        //
        // So the document has to be on the building. It is written to the levels
        // as well, because nothing else writes booking rules and a stale
        // document on a level would be one more thing to explain later.
        const [building] = await zonesWithTag(admin, 'building');
        if (!building?.id) throw new Error('no building zone — the stack is not seeded');
        const levels = await zonesWithTag(admin, 'level');
        const targets = levels.filter((z) => (z.parent_id ?? building.id) === building.id);
        if (!targets.length) {
            throw new Error('no level zone under the building to write booking rules on');
        }

        const details = hidden_room_ids.length
            ? [
                  {
                      id: 'e2e-hidden-rooms',
                      name: 'E2E hidden rooms',
                      // `*` matches any resource the ruleset is considered for;
                      // the `resource_ids` condition below is what narrows it to
                      // one room.
                      zone: '*',
                      conditions: { resource_ids: hidden_room_ids },
                      rules: { hidden: true },
                  },
              ]
            : [];

        for (const zone of [building, ...targets]) {
            const res = await admin.put(`${ENGINE_API}/metadata/${zone.id}`, {
                data: {
                    name: 'booking_rules',
                    description: 'Booking rules owned by the e2e suite',
                    details,
                },
            });
            if (!res.ok()) {
                throw new Error(
                    `write booking_rules on ${zone.name} failed: HTTP ${res.status()} ` +
                        `${await res.text()}`,
                );
            }
        }
    } finally {
        await admin.dispose();
    }
}

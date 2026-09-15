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
import { RoomIdentity, roomFor } from './room.env';

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

/**
 * Make sure every worker has a bookable room, and return them.
 *
 * Rooms are placed on BOTH the building and the level zone: the app asks for
 * systems by zone and different screens ask with different zones, so a room on
 * only one of them appears in some places and not others.
 */
export async function ensureRooms(): Promise<RoomIdentity[]> {
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
        const rooms: RoomIdentity[] = [];

        for (let i = 0; i < WORKERS; i++) {
            const want = roomFor(i);
            const found = existing.find(
                (s) => `${s.email}`.toLowerCase() === want.email.toLowerCase(),
            );
            if (found) {
                rooms.push({ ...want, id: found.id });
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
                    description: 'Room owned by the e2e suite. Safe to delete.',
                },
            });
            if (!res.ok()) {
                throw new Error(
                    `create room ${want.name} failed: HTTP ${res.status()} ${await res.text()}`,
                );
            }
            rooms.push({ ...want, id: (await res.json()).id });
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
let cache: Promise<RoomIdentity[]> | null = null;
export async function roomForWorker(workerIndex: number): Promise<RoomIdentity> {
    cache = cache ?? ensureRooms();
    const rooms = await cache.catch((error) => {
        // Do not poison the cache: a stack that was still starting up should not
        // fail every later spec with the same stale error.
        cache = null;
        throw error;
    });
    const room = rooms[workerIndex];
    if (!room) {
        throw new Error(
            `no room seeded for worker ${workerIndex}. ${rooms.length} exist, one per ` +
                `worker, so E2E_WORKERS is smaller than the number Playwright is running.`,
        );
    }
    return room;
}

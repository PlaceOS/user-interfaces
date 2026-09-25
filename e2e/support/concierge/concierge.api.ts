/**
 * Backend helpers for the CONCIERGE specs.
 *
 * ## What this file is for that the shared `../api.ts` is not
 *
 * Concierge's whole purpose is acting on OTHER people's data, so nearly every
 * spec needs a booking that belongs to somebody who is not the signed-in user.
 * The workplace helpers create bookings for the caller; these create them for a
 * named holder, with the concierge admin recorded as the booker. That
 * holder/booker split is the thing most concierge screens display, so getting it
 * right in setup is most of the work.
 *
 * ## The zone chain is not optional — this cost a session to find
 *
 * Concierge's listings filter by the **building** zone, not the level. Measured
 * on 2026-09-17: a desk booking created with `zones: [<level>]` alone is stored
 * happily (201) and is then INVISIBLE on `/#/book/desks/events`, because the
 * page queries `zones=<building>`. A booking must carry the whole org →
 * building → level chain to be seen. `withZoneChain` is what guarantees that,
 * and no concierge spec should build a `zones` array by hand.
 *
 * ## The REG-09 retry
 *
 * Same retry, for the same reason, as the desk/visitor/parking helpers
 * (REG-09 / PPT-2642: a burst of booking writes poisons a staff-api connection
 * and an unrelated request fails on it). Duplicated rather than shared, like the
 * rest of the per-area support, so no area can break another.
 */
import { APIRequestContext } from '@playwright/test';
import {
    Booking,
    CurrentUser,
    STAFF_API,
    currentUser,
    deleteBooking,
    zonesWithTag,
} from '../api';

/** The three zone tags a booking must carry to be visible in concierge. */
const ZONE_TAGS = ['org', 'building', 'level'] as const;

/** Every seeded zone id in the org → building → level chain. */
export async function withZoneChain(api: APIRequestContext): Promise<string[]> {
    const groups = await Promise.all(ZONE_TAGS.map((t) => zonesWithTag(api, t)));
    const ids = groups.flat().map((z) => z.id);
    if (!ids.length) {
        throw new Error(
            `No org/building/level zones found. The stack is not seeded — run e2e/stack/up.sh.`,
        );
    }
    return [...new Set(ids)];
}

function isConcurrentWriteFailure(status: number, body: string): boolean {
    if (status === 400 && /Expected BeginObject but was EOF/.test(body)) return true;
    if (status === 500 && /could not serialize access/.test(body)) return true;
    // An empty `failures` list is the tell: a genuine validation error names the
    // field it is unhappy about.
    if (status === 422 && /"failures"\s*:\s*\[\s*\]/.test(body)) return true;
    return false;
}

/**
 * Did this booking actually PERSIST?
 *
 * A 201 is not proof — measured under load, `POST /bookings` has answered 201
 * with an id that `GET /bookings/<id>` then 404'd, because the COMMIT failed
 * after the response was written (REG-09). Reading the row back is the only
 * reliable check.
 */
async function persisted(api: APIRequestContext, id: number): Promise<boolean> {
    const res = await api.get(`${STAFF_API}/bookings/${id}`);
    return res.ok();
}

export interface BookingForOptions {
    /** `desk`, `parking`, `locker`, … */
    type: string;
    asset_id: string;
    asset_name?: string;
    title: string;
    start: number;
    end: number;
    /** Who the booking is FOR. Defaults to the caller, but rarely should. */
    holder?: { email: string; id?: string; name?: string };
    /** Extra fields for types that need them. */
    extra?: Record<string, unknown>;
}

/**
 * Create a booking FOR somebody else, as the concierge would.
 *
 * `user_*` is the holder; `booked_by_*` is the signed-in concierge. Concierge
 * screens show both, and a spec that sets only one cannot tell the "Person" and
 * "Booked By" columns apart.
 */
export async function createBookingFor(
    api: APIRequestContext,
    options: BookingForOptions,
): Promise<Booking> {
    const me: CurrentUser = await currentUser(api);
    const holder = options.holder ?? me;
    const zones = await withZoneChain(api);

    const data = {
        booking_type: options.type,
        asset_id: options.asset_id,
        asset_name: options.asset_name ?? options.asset_id,
        booking_start: options.start,
        booking_end: options.end,
        timezone: 'Etc/UTC',
        user_email: holder.email,
        user_id: holder.id ?? '',
        user_name: holder.name ?? holder.email,
        booked_by_email: me.email,
        booked_by_id: me.id,
        booked_by_name: me.name ?? me.email,
        title: options.title,
        zones,
        ...(options.extra ?? {}),
    };

    let last = '';
    for (let attempt = 1; attempt <= 4; attempt++) {
        const res = await api.post(`${STAFF_API}/bookings`, { data });
        const body = await res.text();
        if (res.ok()) {
            const booking = JSON.parse(body) as Booking;
            if (await persisted(api, booking.id)) return booking;
            // 201 but not committed — REG-09. Treat as a retryable failure.
            last = `201 for id ${booking.id}, but GET /bookings/${booking.id} then 404'd (REG-09)`;
        } else {
            last = `HTTP ${res.status()} ${body.slice(0, 300)}`;
            if (!isConcurrentWriteFailure(res.status(), body)) break;
        }
        await new Promise((r) => setTimeout(r, 400 * attempt));
    }
    throw new Error(
        `Could not create a ${options.type} booking for ` +
            `${(options.holder ?? me).email}: ${last}`,
    );
}

/** Delete a list of bookings, best effort. Teardown must never fail a test. */
export async function cleanUpBookings(
    api: APIRequestContext,
    ids: Array<number | undefined>,
): Promise<void> {
    for (const id of ids) if (typeof id === 'number') await deleteBooking(api, id);
}

/**
 * A seeded desk to book, as an `{id, name}` pair.
 *
 * Desks are zone METADATA rather than assets (`listChildMetadata(building,
 * {name: 'desks'})`), which is why this reads metadata instead of asking for
 * something desk-shaped. Returns them in the order the stack seeded them, so
 * `seededDesks(api)[1]` is stable across runs.
 */
export async function seededDesks(
    api: APIRequestContext,
): Promise<Array<{ id: string; name: string }>> {
    const [building] = await zonesWithTag(api, 'building');
    if (!building) throw new Error('No building zone — the stack is not seeded.');
    const res = await api.get(`/api/engine/v2/metadata/${building.id}/children`, {
        params: { name: 'desks' },
    });
    if (!res.ok()) {
        throw new Error(
            `Could not read desk metadata for ${building.id}: HTTP ${res.status()}`,
        );
    }
    const body = (await res.json()) as Array<{
        metadata?: { desks?: { details?: Array<{ id: string; name: string }> } };
    }>;
    // DEDUPE BY ID, and do not remove this.
    //
    // The stack seeds TWO level zones under the building, and the same five
    // desks are listed on both — so this endpoint returns ten entries with five
    // distinct ids (measured 2026-09-17). Booking "the second desk" off a
    // non-deduped list would silently pick a duplicate of the first.
    const seen = new Set<string>();
    const desks = body
        .flatMap((entry) => entry?.metadata?.desks?.details ?? [])
        .filter((d) => d && d.id)
        .filter((d) => (seen.has(d.id) ? false : (seen.add(d.id), true)));
    if (!desks.length) {
        throw new Error(
            `No desks in the "desks" metadata under ${building.id}. The stack seeds ` +
                `five (\`e2e-desk-0\` … \`e2e-desk-4\`) — run e2e/stack/up.sh.`,
        );
    }
    return desks.map((d) => ({ id: d.id, name: d.name ?? d.id }));
}

/* ------------------------------------------------------------------ parking */

/**
 * Parking spaces to book against, found or created.
 *
 * ## Why this does not call the workplace `ensureParking()`
 *
 * `e2e/support/parking/parking.seed.ts` mints its own admin context with
 * `apiFor('admin', 0)`, which reads the TOKEN FILE the workplace fixtures
 * write (`e2e/.auth/admin-0.token.json`). The concierge fixtures do not write
 * that file — they write a storage state bound to the concierge origin — so a
 * concierge spec calling it would either fail outright or, worse, quietly use
 * yesterday's expired token. This takes the caller's context instead.
 *
 * Idempotent, and it reuses whatever the workplace parking seeder already made:
 * the zone is matched by name, so the two never create competing hierarchies.
 *
 * ## The shape of a parking space
 *
 * A space is an ASSET, not zone metadata (unlike a desk), living on a zone
 * tagged BOTH `level` and `parking` — `level` is what the org hierarchy reads
 * and `parking` is what `ParkingService.levels` filters on, and one without the
 * other leaves the level invisible to one of them.
 */
const PARKING_LEVEL_NAME = 'E2E Parking Level';
const PARKING_CATEGORY = '_PARKING_';
// These three MUST match `e2e/support/parking/parking.seed.ts` exactly, or this
// seeder creates a parallel set of fixtures instead of reusing the workplace
// ones — and spaces hung off a second type are invisible to the
// parking-management page, which filters on the original. `_PARKING_SPACES_` is
// the real type name; it is not `PARKING:SPACE`.
const PARKING_TYPE = '_PARKING_SPACES_';

async function findOrCreate(
    api: APIRequestContext,
    collection: string,
    match: (row: Record<string, unknown>) => boolean,
    body: Record<string, unknown>,
    query: Record<string, string> = {},
): Promise<Record<string, unknown>> {
    const list = await api.get(`/api/engine/v2/${collection}`, {
        params: { limit: '200', ...query },
    });
    if (list.ok()) {
        const parsed = await list.json();
        const rows = Array.isArray(parsed) ? parsed : (parsed.results ?? []);
        const found = rows.find(match);
        if (found) return found;
    }
    const res = await api.post(`/api/engine/v2/${collection}`, { data: body });
    if (!res.ok()) {
        throw new Error(
            `Could not create ${collection}: HTTP ${res.status()} ` +
                `${(await res.text()).slice(0, 300)}`,
        );
    }
    return res.json();
}

/**
 * `name_prefix` defaults to the workplace suite's spaces, but the concierge
 * specs pass their OWN prefix.
 *
 * The concierge parking listing has **no title column** (measured: state, date,
 * asset_id, user_name, booked_by_name, plate_number, status, actions), so a row
 * cannot be found by the unique title trick every other area uses. The space
 * name is the only per-test handle available — which means each test needs a
 * space nobody else is using, rather than sharing `E2E Parking 0..4` with the
 * workplace parking specs.
 */
export async function ensureParkingSpaces(
    api: APIRequestContext,
    count = 2,
    name_prefix = 'E2E Parking',
): Promise<{ zone_id: string; spaces: Array<{ id: string; name: string }> }> {
    const [building] = await zonesWithTag(api, 'building');
    if (!building) throw new Error('No building zone — the stack is not seeded.');

    const zone = await findOrCreate(
        api,
        'zones',
        (z) => z.name === PARKING_LEVEL_NAME,
        {
            name: PARKING_LEVEL_NAME,
            display_name: PARKING_LEVEL_NAME,
            description: 'Parking level owned by the e2e suite. Safe to delete.',
            tags: ['level', 'parking'],
            parent_id: building.id,
        },
        { tags: 'parking' },
    );

    // MATCH BY NAME ACROSS EVERYTHING, with no narrowing query params.
    //
    // This was got wrong once and the failure is worth recording. Looking the
    // category up with `?hidden=true` and the type up with
    // `?category_id=<the category just found>` did NOT find the rows the
    // workplace parking seeder had already made, so this created a SECOND
    // `_PARKING_` category and a SECOND `PARKING:SPACE` type — and the spaces
    // then hung off a type the parking-management page does not filter on, so
    // they existed and were invisible. Matching on the name alone is what keeps
    // this seeder and the workplace one pointing at the same fixtures.
    const category = await findOrCreate(
        api,
        'asset_categories',
        (c) => c.name === PARKING_CATEGORY,
        { name: PARKING_CATEGORY, hidden: true },
    );
    const type = await findOrCreate(
        api,
        'asset_types',
        (t) => t.name === PARKING_TYPE,
        {
            name: PARKING_TYPE,
            category_id: category.id,
            // Required: without it the POST is a 422 "brand: should not be nil".
            brand: 'E2E',
            description: 'Parking spaces owned by the e2e suite. Safe to delete.',
        },
    );

    const spaces: Array<{ id: string; name: string }> = [];
    for (let i = 0; i < count; i++) {
        const name = `${name_prefix} ${i}`;
        const asset = await findOrCreate(
            api,
            'assets',
            (a) => a.name === name,
            {
                name,
                identifier: name,
                zone_id: zone.id,
                asset_type_id: type.id,
                description: `${name_prefix.toLowerCase().replace(/\s+/g, '-')}-${i}`,
            },
        );
        spaces.push({ id: String(asset.id), name });
    }
    return { zone_id: String(zone.id), spaces };
}

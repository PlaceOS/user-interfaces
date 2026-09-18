/**
 * VIS-B1 — the same visitor can be booked twice into the same slot.
 *
 * A desk is exclusive for a time range: a second booking of the same desk over
 * the same period is refused, and `desk-clash.spec.ts` locks that in. A visitor
 * is not, and as far as we can tell that is not intentional — product's
 * expectation is that the backend rejects it.
 *
 * This script is the minimal reproduction, kept next to the finding the same way
 * the REG-09 reproducers are. It creates two identical visitor bookings and
 * reports what the backend did, then cleans up after itself.
 *
 *   bunx tsx e2e/support/repro/vis-b1-duplicate-visitor.ts
 *
 * Expected today:  both POSTs return 201.
 * Expected after a fix: the second returns 409, as desks do.
 */
import { APIRequestContext } from '@playwright/test';
import { BACKEND_URL, assertLocalOnly } from '../env';
import { ENGINE_API, STAFF_API, apiFor, deleteBooking, zonesWithTag } from '../api';
import { deleteGuest } from '../visitor/visitor.api';

const VISITOR = 'vis-b1-repro@example.com';
const DAY = 86_400;

/**
 * Reuse the bearer the auth fixtures already minted for worker 0.
 *
 * Minting here directly does NOT work: ts-client derives `client_id` from the
 * redirect_uri, and the only OAuth app `seed.ts` registers is the dev server's.
 * Pointing a fresh mint at the backend origin asks for a client that was never
 * registered and comes back 401. Run the suite once first so the sidecar exists.
 */
async function staffApi(): Promise<APIRequestContext> {
    return apiFor('staff', 0);
}

async function main() {
    assertLocalOnly(BACKEND_URL);
    const api = await staffApi();
    const created: number[] = [];
    try {
        const me = await (await api.get(`${ENGINE_API}/users/current`)).json();
        const zones = (
            await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
        )
            .flat()
            .map((z) => z.id);

        const start = Math.floor(Date.now() / 1000) + DAY;
        const payload = {
            booking_type: 'visitor',
            asset_id: VISITOR,
            asset_name: 'VIS-B1 Repro',
            booking_start: start,
            booking_end: start + 3600,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title: 'VIS-B1 duplicate visitor repro',
            zones,
        };

        for (const attempt of [1, 2]) {
            const res = await api.post(`${STAFF_API}/bookings`, { data: payload });
            const body = await res.text();
            console.log(`  attempt ${attempt}: HTTP ${res.status()}`);
            if (res.ok()) created.push(JSON.parse(body).id);
            else console.log(`    ${body}`);
        }

        console.log(
            created.length === 2
                ? '\nREPRODUCED: both bookings were accepted. A desk would have refused the second.'
                : '\nNOT reproduced: the second booking was refused. VIS-B1 may be fixed.',
        );
    } finally {
        for (const id of created) await deleteBooking(api, id);
        await deleteGuest(api, VISITOR);
        await api.dispose();
    }
}

main().catch((e) => {
    console.error(e.message);
    process.exit(1);
});

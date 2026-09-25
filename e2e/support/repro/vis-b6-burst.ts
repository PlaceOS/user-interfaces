/**
 * VIS-B6 probe — is the 400 a FRONTEND problem or a BACKEND one?
 *
 * Symptom seen through the UI: a `POST /bookings` carrying a real ~2 KB JSON
 * body comes back
 *
 *   HTTP 400 {"error":"Expected BeginObject but was EOF at line 1, column 1
 *             parsing PlaceOS::Model::Booking at line 0, column 0"}
 *
 * "EOF at line 1, column 1" means the parser saw an empty input, yet the client
 * demonstrably sent 2050 bytes. Two competing explanations:
 *
 *   A. the app sends something malformed (wrong content-type, double encoding)
 *   B. staff-api loses the body under concurrent writes
 *
 * This script settles it by removing the browser entirely: it fires N identical,
 * well-formed visitor bookings concurrently, straight at the API. If the 400
 * appears here, the app cannot be at fault and (B) is the answer.
 *
 *   bunx tsx e2e/support/repro/vis-b6-burst.ts [concurrency] [rounds]
 *
 * Related: REG-09 (PPT-2642) is a different failure with the same trigger —
 * concurrent booking POSTs against a staff-api image that predates pg-orm 2.2.4.
 */
import { APIRequestContext } from '@playwright/test';
import { BACKEND_URL, assertLocalOnly } from '../env';
import { ENGINE_API, STAFF_API, apiFor, deleteBooking, zonesWithTag } from '../api';
import { deleteGuest } from '../visitor/visitor.api';

const CONCURRENCY = Number(process.argv[2] ?? 4);
const ROUNDS = Number(process.argv[3] ?? 10);
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
    const emails: string[] = [];
    const statuses = new Map<string, number>();

    try {
        const me = await (await api.get(`${ENGINE_API}/users/current`)).json();
        const zones = (
            await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
        )
            .flat()
            .map((z) => z.id);

        console.log(`bursting ${CONCURRENCY} concurrent POSTs x ${ROUNDS} rounds\n`);

        for (let round = 0; round < ROUNDS; round++) {
            const start = Math.floor(Date.now() / 1000) + DAY + round * 3600;
            const results = await Promise.all(
                Array.from({ length: CONCURRENCY }, async (_, i) => {
                    const email = `vis-b6-burst-${round}-${i}@example.com`;
                    emails.push(email);
                    const res = await api.post(`${STAFF_API}/bookings`, {
                        data: {
                            booking_type: 'visitor',
                            asset_id: email,
                            asset_name: `Burst ${round}-${i}`,
                            booking_start: start,
                            booking_end: start + 3600,
                            timezone: 'Etc/UTC',
                            user_email: me.email,
                            user_id: me.id,
                            user_name: me.name,
                            title: `VIS-B6 burst ${round}-${i}`,
                            zones,
                            attendees: [{ name: `Burst ${round}-${i}`, email }],
                        },
                    });
                    const text = await res.text();
                    if (res.ok()) created.push(JSON.parse(text).id);
                    return { status: res.status(), text };
                }),
            );

            for (const r of results) {
                const key = `${r.status}`;
                statuses.set(key, (statuses.get(key) ?? 0) + 1);
                if (r.status < 200 || r.status >= 300) {
                    console.log(`  round ${round}: HTTP ${r.status} ${r.text.slice(0, 160)}`);
                }
            }
        }

        console.log('\nstatus counts:', Object.fromEntries(statuses));
        const bad = [...statuses.entries()].filter(([s]) => Number(s) >= 300);
        console.log(
            bad.length
                ? '\nREPRODUCED without a browser — the app is not the cause.'
                : '\nNot reproduced at the API level. The trigger involves the browser path.',
        );
    } finally {
        for (const id of created) await deleteBooking(api, id);
        for (const email of emails) await deleteGuest(api, email);
        await api.dispose();
    }
}

main().catch((e) => {
    console.error(e.message);
    process.exit(1);
});

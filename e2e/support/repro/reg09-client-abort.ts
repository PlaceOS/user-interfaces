/**
 * PPT-2642 diagnostic — does a client that disconnects mid-request leave a
 * transaction open on the server?
 *
 * The burst reproducer leaves a backend `idle in transaction` for as long as the
 * process lives, with pg-orm 2.2.3's discard handling compiled in. That means a
 * `BEGIN` was issued and neither committed nor rolled back — which is what you
 * would expect if the request fiber died between the two, rather than unwinding
 * through the `ensure` that returns the connection.
 *
 * The burst always aborted a couple of requests client-side, so this isolates
 * that one variable: no concurrency, no serialization failure, just a POST that
 * is cut off after the transaction has certainly started.
 *
 *   e2e/stack/up.sh
 *   docker compose -p placeos-e2e restart staff-api        # clean pool
 *   ABORT_MS=60 N=5 bunx tsx e2e/support/repro/reg09-client-abort.ts
 *
 * Then, with no other traffic:
 *   docker exec placeos-e2e-postgres-1 psql -U placeos -d placeos \
 *     -c "SELECT pid, state, now()-state_change AS idle_for FROM pg_stat_activity
 *         WHERE state = 'idle in transaction';"
 *
 * A backend still `idle in transaction` seconds later means the abort is the
 * trigger, and the fix belongs where the request fiber is torn down.
 */
import { mintToken } from '../auth';

const B = 'https://localhost:9443';
const ABORT_MS = Number(process.env.ABORT_MS ?? 60);
const N = Number(process.env.N ?? 5);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

(async () => {
    const m = await mintToken(
        B,
        `${B}/backoffice`,
        'support@place.tech',
        'development',
    );
    const auth = { Authorization: `Bearer ${m.accessToken}` };

    const zones = (
        await (await fetch(`${B}/api/engine/v2/zones?limit=100`, { headers: auth })).json()
    ).map((z: any) => z.id);
    const me = await (
        await fetch(`${B}/api/engine/v2/users/current`, { headers: auth })
    ).json();

    const base = Math.floor(Date.now() / 1000) + 86400 * 30;
    let aborted = 0;
    let completed = 0;

    for (let i = 0; i < N; i++) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ABORT_MS);
        try {
            await fetch(`${B}/api/staff/v1/bookings`, {
                method: 'POST',
                signal: controller.signal,
                headers: { ...auth, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    booking_type: 'desk',
                    asset_id: `e2e-desk-${i % 5}`,
                    booking_start: base + i * 7200,
                    booking_end: base + i * 7200 + 3600,
                    timezone: 'Etc/UTC',
                    user_email: me.email,
                    user_id: me.id,
                    user_name: me.name,
                    title: `REG09-abort ${i}`,
                    zones,
                }),
            });
            completed += 1;
        } catch {
            aborted += 1;
        } finally {
            clearTimeout(timer);
        }
        // let the server finish whatever it is doing before the next one
        await new Promise((r) => setTimeout(r, 300));
    }

    console.log(`\n  ${N} POSTs, aborted after ${ABORT_MS}ms`);
    console.log(`  aborted client-side: ${aborted}, completed: ${completed}`);
    console.log('  now check pg_stat_activity for `idle in transaction`');
})();

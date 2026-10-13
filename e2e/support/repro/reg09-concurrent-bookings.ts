/**
 * REG-09 reproducer — PPT-2642.
 *
 * Concurrent `POST /api/staff/v1/bookings` permanently poison staff-api's Postgres
 * connection pool: after one burst, every later booking-create returns 500 with
 * "There is an existing transaction in this connection", until staff-api restarts.
 *
 * Not part of the suite — it is a diagnostic kept next to the finding, because a
 * reproducer that lives only in a ticket description rots.
 *
 *   e2e/stack/up.sh                                     # clean stack
 *   N=1 ROUNDS=3  bunx tsx e2e/support/repro/reg09-concurrent-bookings.ts   # healthy
 *   N=6 ROUNDS=1  bunx tsx e2e/support/repro/reg09-concurrent-bookings.ts   # the burst
 *   N=1 ROUNDS=4  bunx tsx e2e/support/repro/reg09-concurrent-bookings.ts   # now 500s
 *
 * Restart staff-api to recover:
 *   cd e2e/stack && docker compose -p placeos-e2e restart staff-api
 *
 * Targets desks 0..4 on DIFFERENT time slots so nothing is a legitimate clash;
 * occasional 409s across repeated runs are real clashes with leftovers, not the bug.
 */
import { request } from '@playwright/test';
import { mintToken } from '../auth';

const B = 'https://localhost:9443';
const CONCURRENCY = Number(process.env.N ?? 6);
const ROUNDS = Number(process.env.ROUNDS ?? 6);

(async () => {
  // one token, but each request targets a DIFFERENT desk so nothing is a real clash
  const m = await mintToken(B, `${B}/backoffice`, 'support@place.tech', 'development');
  const api = await request.newContext({ baseURL: B, ignoreHTTPSErrors: true,
    extraHTTPHeaders: { Authorization: `Bearer ${m.accessToken}` } });

  const zones = (await (await api.get('/api/engine/v2/zones', { params: { limit: '100' } })).json())
      .map((z: any) => z.id);
  const me = await (await api.get('/api/engine/v2/users/current')).json();

  const status: Record<string, number> = {};
  let created: number[] = [];

  for (let round = 0; round < ROUNDS; round++) {
    const base = Math.floor(Date.now() / 1000) + 86400 * (round + 2); // future, distinct per round
    const reqs = Array.from({ length: CONCURRENCY }, (_, i) =>
      api.post('/api/staff/v1/bookings', {
        data: {
          booking_type: 'desk',
          asset_id: `e2e-desk-${i % 5}`,
          booking_start: base + i * 7200,
          booking_end: base + i * 7200 + 3600,
          timezone: 'Etc/UTC',
          user_email: me.email,
          user_id: me.id,
          user_name: me.name,
          title: `REG09 r${round} i${i}`,
          zones,
        },
      }).then(async r => {
        const s = r.status();
        status[s] = (status[s] ?? 0) + 1;
        if (s === 201) created.push((await r.json()).id);
        else if (s >= 500) console.log(`  ${s}: ${(await r.text()).slice(0,120)}`);
        return s;
      }).catch(e => { status['throw'] = (status['throw'] ?? 0) + 1; return 0; })
    );
    await Promise.all(reqs);
  }

  console.log(`\n  ${CONCURRENCY} concurrent x ${ROUNDS} rounds = ${CONCURRENCY*ROUNDS} POSTs`);
  console.log('  status counts:', JSON.stringify(status));
  for (const id of created) await api.delete(`/api/staff/v1/bookings/${id}`).catch(()=>{});
  console.log(`  cleaned up ${created.length}`);
  await api.dispose();
})();

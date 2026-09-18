/**
 * VIS-B9 — a host cannot make two overlapping GROUP invites, even for
 * completely different visitors.
 *
 * Found 2026-09-15 from a user's screenshot of `placeos-dev`: a second invite
 * came back `409 {"error":"Conflicting booking","bookings":[{"booking_type":
 * "group", ...}]}`. The conflicting row is a GROUP container, not a visitor —
 * which is the whole story.
 *
 * The app names a group container after the HOST and the day the invite was
 * CREATED:
 *
 *   asset_id = `${currentUser().email}[${format(Date.now(), 'yyyy-MM-dd')}]`
 *              (booking-form.service.ts, `_groupName`)
 *
 * Every group invite that host creates today therefore shares one asset id, and
 * the backend refuses overlapping bookings on one asset. So the second invite is
 * rejected because of the first one's TIME, regardless of who is being invited.
 *
 * Note `Date.now()` — the day the invite is MADE, not the day of the visit. That
 * is what makes the behaviour arbitrary from a user's point of view, and what
 * marks it as accidental rather than a deliberate rule: the same two visits are
 * accepted if they are booked on different days (case 4 below).
 *
 *   bunx tsx e2e/support/repro/vis-b9-group-clash.ts
 *
 * Expected today:  1 -> 201, 2 -> 409, 3 -> 201, 4 -> 201.
 * Expected after a fix: 2 -> 201 as well; two unrelated groups may overlap.
 */
import { BACKEND_URL, assertLocalOnly } from '../env';
import { ENGINE_API, STAFF_API, apiFor, deleteBooking, zonesWithTag } from '../api';

async function main() {
    assertLocalOnly(BACKEND_URL);
    // Reuse the bearer the auth fixtures minted for worker 0 — see the note in
    // `vis-b1-duplicate-visitor.ts`. Run the suite once first.
    const api = await apiFor('staff', 0);
    const created: number[] = [];
    try {
        const me = await (await api.get(`${ENGINE_API}/users/current`)).json();
        const zones = (
            await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
        )
            .flat()
            .map((z) => z.id);
        const today = new Date().toISOString().slice(0, 10);
        const group_name = `${me.email}[${today}]`;
        const slot = new Date();
        slot.setDate(slot.getDate() + 1);
        slot.setHours(13, 30, 0, 0);
        const start = Math.floor(slot.valueOf() / 1000);

        const container = (asset_id: string, from: number, to: number, title: string) => ({
            booking_type: 'group',
            asset_id,
            asset_name: 'Group Booking',
            booking_start: from,
            booking_end: to,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title,
            zones,
        });

        const post = async (label: string, body: Record<string, unknown>) => {
            const res = await api.post(`${STAFF_API}/bookings`, { data: body });
            const text = await res.text();
            if (res.ok()) created.push(JSON.parse(text).id);
            console.log(
                `  ${label.padEnd(52)} -> ${res.status()} ${res.ok() ? '' : text.slice(0, 140)}`,
            );
            return res.status();
        };

        console.log(`\n  container id the app would use: ${group_name}\n`);
        const first = await post(
            '1st group invite, 13:30-14:30',
            container(group_name, start, start + 3600, 'first group'),
        );
        const second = await post(
            '2nd group invite, SAME time, different guests',
            container(group_name, start, start + 3600, 'second group'),
        );
        await post(
            '3rd group invite, later slot',
            container(group_name, start + 2.5 * 3600, start + 3.5 * 3600, 'third group'),
        );
        await post(
            '4th, same time but "created" on another day',
            container(`${me.email}[2020-01-01]`, start, start + 3600, 'fourth group'),
        );

        console.log(
            first === 201 && second === 409
                ? '\nREPRODUCED: the second overlapping group invite was refused, and the ' +
                      'visitors had nothing to do with it.'
                : '\nNOT reproduced: the second invite was not refused. VIS-B9 may be fixed.',
        );
    } finally {
        for (const id of created) await deleteBooking(api, id).catch(() => null);
        await api.dispose();
    }
}

main().catch((e) => {
    console.error(e.message);
    process.exit(1);
});

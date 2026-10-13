/**
 * Turn Playwright's JSON report into a GitHub step summary.
 *
 * The important column is FLAKY, not passed. While the suite is advisory we are
 * trying to learn whether it can be trusted, and a spec that only passes on retry
 * is the thing that tells us it cannot yet — a plain "all green" hides exactly the
 * signal we are collecting.
 *
 * Never exits non-zero: the test step already decided pass/fail, and a broken
 * summary must not turn a green run red.
 */
import { readFileSync } from 'fs';

const REPORT = 'reports/e2e/workplace-results.json';

const line = (s = '') => process.stdout.write(`${s}\n`);

let report;
try {
    report = JSON.parse(readFileSync(REPORT, 'utf8'));
} catch (e) {
    line('## workplace e2e');
    line();
    line(`No JSON report at \`${REPORT}\` — the run probably failed before Playwright started.`);
    line();
    line(`> ${e.message}`);
    process.exit(0);
}

/** Playwright nests suites arbitrarily deep; flatten to specs. */
function* specsOf(suite) {
    for (const spec of suite.specs ?? []) yield spec;
    for (const child of suite.suites ?? []) yield* specsOf(child);
}

const specs = [];
for (const suite of report.suites ?? []) specs.push(...specsOf(suite));

const rows = specs.map((spec) => {
    const tests = spec.tests ?? [];
    // A spec is flaky when Playwright says so, or when it needed more than one
    // attempt to end up passing.
    const flaky = tests.some(
        (t) => t.status === 'flaky' || (t.results?.length ?? 0) > 1 && t.status === 'expected',
    );
    const failed = tests.some((t) => t.status === 'unexpected');
    const skipped = tests.every((t) => t.status === 'skipped');
    const attempts = Math.max(1, ...tests.map((t) => t.results?.length ?? 1));
    return {
        title: spec.title,
        file: spec.file,
        state: failed ? 'failed' : skipped ? 'skipped' : flaky ? 'flaky' : 'passed',
        attempts,
    };
});

const count = (s) => rows.filter((r) => r.state === s).length;
const failed = count('failed');
const flaky = count('flaky');

line('## workplace e2e — advisory');
line();
line('| result | count |');
line('|---|---|');
line(`| passed | ${count('passed')} |`);
line(`| flaky (passed on retry) | ${flaky} |`);
line(`| failed | ${failed} |`);
line(`| skipped | ${count('skipped')} |`);
line();
line(`Duration: ${((report.stats?.duration ?? 0) / 1000).toFixed(1)}s`);
line();

if (flaky) {
    line('### Flaky');
    line();
    line('Passed, but not first time — these are what stop the suite being trusted yet.');
    line();
    for (const r of rows.filter((r) => r.state === 'flaky')) {
        line(`- \`${r.file}\` — ${r.title} (${r.attempts} attempts)`);
    }
    line();
    line(
        'Known cause: staff-api 500s with `DB::ConnectionLost` on concurrent ' +
            '`POST /bookings` (E2E_USER_STORIES.md → REG-09). If a flake here is *not* that, ' +
            'it needs investigating before this suite is made a required check.',
    );
    line();
}

if (failed) {
    line('### Failed');
    line();
    for (const r of rows.filter((r) => r.state === 'failed')) {
        line(`- \`${r.file}\` — ${r.title}`);
    }
    line();
    line('Traces, videos and backend logs are attached as run artifacts.');
    line();
}

// A flaky run is a PASS by conclusion, so nothing notifies. Make it visible in
// the summary instead — this is the number that says whether the suite can be
// trusted yet, and it is the easiest one to quietly stop looking at.
if (flaky && !failed) {
    line('> **This run passed, but not cleanly.** Someone should look at the flaky');
    line('> spec above before it becomes background noise.');
    line();
}

line('---');
line();
line(
    '**This check is advisory and does not gate merges.** It is here to build a track ' +
        'record. See `E2E_USER_STORIES.md` for what is covered and what is knowingly unstable.',
);

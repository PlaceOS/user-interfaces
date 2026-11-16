const assert = require('node:assert/strict');
const { chmodSync, mkdtempSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { after, test } = require('node:test');

const repoRoot = path.resolve(__dirname, '..');
const selector = path.join(repoRoot, 'tools/get-affected.js');
const fixtureDirectory = mkdtempSync(path.join(tmpdir(), 'get-affected-'));
const fakeBunx = path.join(fixtureDirectory, 'bunx');

writeFileSync(
    fakeBunx,
    String.raw`#!/usr/bin/env node
if (process.env.AFFECTED_FIXTURE_FAIL === 'true') {
    process.stderr.write('Nx failed\n');
    process.exit(1);
}
const base = '--base=' + (process.env.NX_BASE || 'HEAD~1');
if (!process.argv.includes('--json') || !process.argv.includes(base)) {
    process.stderr.write('Nx arguments are incomplete\n');
    process.exit(1);
}
process.stdout.write(process.env.AFFECTED_FIXTURE_OUTPUT || '[]');
`,
);
chmodSync(fakeBunx, 0o755);

after(() => rmSync(fixtureDirectory, { recursive: true }));

function runSelector(
    environment = {},
    ref = 'refs/heads/develop',
    target = 'build',
) {
    return spawnSync(process.execPath, [selector, ref, target], {
        cwd: repoRoot,
        encoding: 'utf8',
        env: {
            ...process.env,
            ...environment,
            PATH: `${fixtureDirectory}${path.delimiter}${process.env.PATH}`,
        },
    });
}

test('returns affected applications from Nx JSON output', () => {
    const result = runSelector({
        AFFECTED_FIXTURE_OUTPUT: JSON.stringify([
            'common',
            'workplace',
            'workplace-e2e',
        ]),
    });

    assert.equal(result.status, 0);
    assert.equal(result.stderr, '');
    assert.deepEqual(JSON.parse(result.stdout), ['workplace']);
});

test('uses NX_BASE as the affected base commit', () => {
    const result = runSelector({
        NX_BASE: 'abc1234',
        AFFECTED_FIXTURE_OUTPUT: JSON.stringify(['workplace']),
    });

    assert.equal(result.status, 0);
    assert.deepEqual(JSON.parse(result.stdout), ['workplace']);
});

test('fails when Nx cannot calculate affected projects', () => {
    const result = runSelector({ AFFECTED_FIXTURE_FAIL: 'true' });

    assert.notEqual(result.status, 0);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Nx failed/);
});

test('releases only the application that a release tag names', () => {
    const build = runSelector({}, 'refs/tags/workplace/v2611.1');
    const units = runSelector({}, 'refs/tags/workplace/v2611.1', 'test');

    assert.equal(build.status, 0);
    assert.deepEqual(JSON.parse(build.stdout), ['workplace']);
    assert.equal(units.status, 0);
    const tested = JSON.parse(units.stdout);
    assert.equal(tested[0], 'workplace');
    assert.ok(tested.includes('common'));
    assert.ok(!tested.includes('concierge'));
});

test('releases all applications from a version tag', () => {
    const result = runSelector({}, 'refs/tags/v2611.1');

    assert.equal(result.status, 0);
    const apps = JSON.parse(result.stdout);
    assert.ok(apps.includes('workplace'));
    assert.ok(apps.includes('concierge'));
});

test('builds all applications on a custom production branch', () => {
    const result = runSelector({}, 'refs/heads/custom/acme-prod');

    assert.equal(result.status, 0);
    const apps = JSON.parse(result.stdout);
    assert.ok(apps.includes('workplace'));
    assert.ok(apps.includes('concierge'));
});

test('fails when a release tag names an unknown application', () => {
    const result = runSelector({}, 'refs/tags/workplce/v2611.1');

    assert.notEqual(result.status, 0);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /unknown application "workplce"/);
});

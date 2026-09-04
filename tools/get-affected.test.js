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
if (!process.argv.includes('--json') || !process.argv.includes('--base=HEAD~1')) {
    process.stderr.write('Nx arguments are incomplete\n');
    process.exit(1);
}
process.stdout.write(process.env.AFFECTED_FIXTURE_OUTPUT || '[]');
`,
);
chmodSync(fakeBunx, 0o755);

after(() => rmSync(fixtureDirectory, { recursive: true }));

function runSelector(environment = {}) {
    return spawnSync(
        process.execPath,
        [selector, 'refs/heads/develop', 'build'],
        {
            cwd: repoRoot,
            encoding: 'utf8',
            env: {
                ...process.env,
                ...environment,
                PATH: `${fixtureDirectory}${path.delimiter}${process.env.PATH}`,
            },
        },
    );
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

test('fails when Nx cannot calculate affected projects', () => {
    const result = runSelector({ AFFECTED_FIXTURE_FAIL: 'true' });

    assert.notEqual(result.status, 0);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Nx failed/);
});

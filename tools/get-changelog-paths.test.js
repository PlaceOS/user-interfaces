const assert = require('node:assert/strict');
const { chmodSync, mkdtempSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { after, test } = require('node:test');

const repoRoot = path.resolve(__dirname, '..');
const pathSelector = path.join(repoRoot, 'tools/get-changelog-paths.js');
const fixtureDirectory = mkdtempSync(path.join(tmpdir(), 'changelog-paths-'));
const fakeBunx = path.join(fixtureDirectory, 'bunx');

writeFileSync(
    fakeBunx,
    String.raw`#!/usr/bin/env node
if (process.env.GRAPH_FIXTURE_FAIL === 'true') {
    process.stderr.write('Nx failed\n');
    process.exit(1);
}
if (!process.argv.includes('--print')) {
    process.stderr.write('Nx arguments are incomplete\n');
    process.exit(1);
}
process.stdout.write(process.env.GRAPH_FIXTURE_OUTPUT || '{}');
`,
);
chmodSync(fakeBunx, 0o755);

after(() => rmSync(fixtureDirectory, { recursive: true }));

function runSelector(project = 'workplace', environment = {}) {
    return spawnSync(process.execPath, [pathSelector, project], {
        cwd: repoRoot,
        encoding: 'utf8',
        env: {
            ...process.env,
            ...environment,
            PATH: `${fixtureDirectory}${path.delimiter}${process.env.PATH}`,
        },
    });
}

test('returns the application, transitive dependencies, and shared paths', () => {
    const graph = {
        graph: {
            nodes: {
                workplace: { data: { root: 'apps/workplace' } },
                bookings: { data: { root: 'libs/bookings' } },
                common: { data: { root: 'libs/common' } },
                signage: { data: { root: 'apps/signage' } },
            },
            dependencies: {
                workplace: [{ target: 'bookings' }],
                bookings: [{ target: 'common' }],
                common: [],
                signage: [{ target: 'common' }],
            },
        },
    };
    const result = runSelector('workplace', {
        GRAPH_FIXTURE_OUTPUT: JSON.stringify(graph),
    });

    assert.equal(result.status, 0);
    assert.equal(result.stderr, '');
    assert.deepEqual(JSON.parse(result.stdout), [
        'apps/workplace/**/*',
        'libs/bookings/**/*',
        'libs/common/**/*',
        'shared/**/*',
    ]);
});

test('handles dependency cycles', () => {
    const graph = {
        graph: {
            nodes: {
                app: { data: { root: 'apps/app' } },
                common: { data: { root: 'libs/common' } },
            },
            dependencies: {
                app: [{ target: 'common' }],
                common: [{ target: 'app' }],
            },
        },
    };
    const result = runSelector('app', {
        GRAPH_FIXTURE_OUTPUT: JSON.stringify(graph),
    });

    assert.equal(result.status, 0);
    assert.deepEqual(JSON.parse(result.stdout), [
        'apps/app/**/*',
        'libs/common/**/*',
        'shared/**/*',
    ]);
});

test('fails when the application is not in the Nx graph', () => {
    const result = runSelector('missing', {
        GRAPH_FIXTURE_OUTPUT: JSON.stringify({
            graph: { nodes: {}, dependencies: {} },
        }),
    });

    assert.notEqual(result.status, 0);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Nx project "missing" does not exist/);
});

test('fails when Nx cannot create the project graph', () => {
    const result = runSelector('workplace', { GRAPH_FIXTURE_FAIL: 'true' });

    assert.notEqual(result.status, 0);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Nx failed/);
});

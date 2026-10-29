const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const {
    chmodSync,
    copyFileSync,
    mkdirSync,
    mkdtempSync,
    readFileSync,
    rmSync,
    writeFileSync,
} = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { after, test } = require('node:test');
const { parse } = require('yaml');

const repoRoot = path.resolve(__dirname, '..');
const gitCliff = process.env.GIT_CLIFF_BIN || 'git-cliff';
const available =
    spawnSync(gitCliff, ['--version']).status === 0 &&
    spawnSync('jq', ['--version']).status === 0;
const skip = available ? false : 'Requires git-cliff and jq on PATH';
const fixtures = [];

after(() => {
    for (const fixture of fixtures) rmSync(fixture, { recursive: true });
});

function fixture() {
    const root = mkdtempSync(path.join(tmpdir(), 'changelog-generation-'));
    fixtures.push(root);
    const bin = path.join(root, 'bin');
    mkdirSync(bin);
    if (path.isAbsolute(gitCliff)) {
        copyFileSync(gitCliff, path.join(bin, 'git-cliff'));
        chmodSync(path.join(bin, 'git-cliff'), 0o755);
    }
    const env = {
        ...process.env,
        PATH: `${bin}${path.delimiter}${process.env.PATH}`,
        // CI sets GITHUB_REPO. Changelogs must still work without its API.
        GITHUB_REPO: 'fixture/unavailable-repository',
        GITHUB_API_URL: 'http://127.0.0.1:1',
        GIT_CLIFF_OFFLINE: 'false',
        GIT_AUTHOR_NAME: 'Changelog fixture',
        GIT_AUTHOR_EMAIL: 'fixture@example.com',
        GIT_COMMITTER_NAME: 'Changelog fixture',
        GIT_COMMITTER_EMAIL: 'fixture@example.com',
    };
    function run(command, args) {
        const result = spawnSync(command, args, {
            cwd: root,
            env,
            encoding: 'utf8',
            timeout: 20000,
        });
        assert.equal(result.status, 0, result.stderr || String(result.error));
        return result;
    }
    function commit(file, message) {
        mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
        writeFileSync(path.join(root, file), message);
        run('git', ['add', file]);
        run('git', ['commit', '-qm', message]);
    }
    run('git', ['init', '-q']);
    copyFileSync(
        path.join(repoRoot, 'cliff.toml'),
        path.join(root, 'cliff.toml'),
    );
    commit('apps/workplace/initial.txt', 'feat(workplace): July feature');
    run('git', ['tag', 'v2607.1']);
    commit('libs/common/fix.txt', 'fix(common): September shared fix');
    run('git', ['tag', 'v2609.1']);
    commit('apps/workplace/new.txt', 'fix(workplace): current workplace fix');
    commit('apps/control/new.txt', 'fix(control): current control fix');
    commit('shared/new.txt', 'fix(shared): current shared fix');
    return { root, bin, run };
}

test(
    'generates app-specific changelogs when the GitHub API is unavailable',
    { skip },
    () => {
        const { root, bin, run } = fixture();
        mkdirSync(path.join(root, 'tools'));
        copyFileSync(
            path.join(repoRoot, 'tools/get-changelog-paths.js'),
            path.join(root, 'tools/get-changelog-paths.js'),
        );
        const graph = {
            graph: {
                nodes: {
                    workplace: { data: { root: 'apps/workplace' } },
                    control: { data: { root: 'apps/control' } },
                    common: { data: { root: 'libs/common' } },
                },
                dependencies: {
                    workplace: [{ target: 'common' }],
                    control: [{ target: 'common' }],
                    common: [],
                },
            },
        };
        writeFileSync(
            path.join(bin, 'bunx'),
            `#!/usr/bin/env node\nprocess.stdout.write(${JSON.stringify(JSON.stringify(graph))});\n`,
        );
        chmodSync(path.join(bin, 'bunx'), 0o755);
        run('env', [
            'AFFECTED_APPS=["workplace","control"]',
            `CHANGELOG_DIR=${path.join(root, 'changelogs')}`,
            'MAX_PARALLEL=2',
            'bash',
            path.join(repoRoot, '.github/scripts/generate-changelogs.sh'),
        ]);
        for (const [app, other] of [
            ['workplace', 'control'],
            ['control', 'workplace'],
        ]) {
            const changelog = readFileSync(
                path.join(root, 'changelogs', app, 'CHANGELOG.md'),
                'utf8',
            );
            assert.match(changelog, /## \[unreleased\]/);
            assert.match(changelog, /## \[2609\.1\]/);
            assert.match(changelog, /September shared fix/);
            assert.match(changelog, /Current shared fix/);
            assert.ok(changelog.includes(`Current ${app} fix`));
            assert.ok(!changelog.includes(`Current ${other} fix`));
            const output = path.join(root, 'dist/apps', app, 'browser');
            mkdirSync(output, { recursive: true });
            for (const file of ['build.yml', 'pull-request.yml']) {
                const workflow = parse(
                    readFileSync(
                        path.join(repoRoot, '.github/workflows', file),
                        'utf8',
                    ),
                );
                const step = workflow.jobs.build.steps.find(
                    (step) =>
                        step.name === 'Add application changelog to build',
                );
                run('env', [
                    `RUNNER_TEMP=${root}`,
                    'bash',
                    '-c',
                    step.run.replaceAll('${{ matrix.package }}', app),
                ]);
                assert.equal(
                    readFileSync(path.join(output, 'CHANGELOG.md'), 'utf8'),
                    changelog,
                );
                rmSync(path.join(output, 'CHANGELOG.md'));
            }
        }
    },
);

test(
    'generates the release changelog when the GitHub API is unavailable',
    { skip },
    () => {
        const { run } = fixture();
        const result = run('git-cliff', ['--config', 'cliff.toml']);
        assert.match(result.stdout, /## \[2609\.1\]/);
        assert.match(result.stdout, /September shared fix/);
        assert.match(result.stdout, /Current workplace fix/);
        assert.match(result.stdout, /Current control fix/);
    },
);

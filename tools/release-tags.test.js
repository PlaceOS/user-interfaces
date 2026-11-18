const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const {
    chmodSync,
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
const fixtures = [];

after(() => {
    for (const fixture of fixtures) rmSync(fixture, { recursive: true });
});

function run(command, args, options = {}) {
    return spawnSync(command, args, {
        encoding: 'utf8',
        timeout: 20000,
        ...options,
    });
}

// Makes a repository with one commit on each of the named origin branches.
// Returns the commit of each branch.
function fixture(branches) {
    const root = mkdtempSync(path.join(tmpdir(), 'release-tags-'));
    fixtures.push(root);
    const git = (...args) => {
        const result = run('git', args, {
            cwd: root,
            env: {
                ...process.env,
                GIT_AUTHOR_NAME: 'Fixture',
                GIT_AUTHOR_EMAIL: 'fixture@example.com',
                GIT_COMMITTER_NAME: 'Fixture',
                GIT_COMMITTER_EMAIL: 'fixture@example.com',
            },
        });
        assert.equal(result.status, 0, result.stderr);
        return result.stdout.trim();
    };
    git('init', '-q');
    git('commit', '-q', '--allow-empty', '-m', 'base');
    const base = git('rev-parse', 'HEAD');
    const commits = {};
    for (const branch of branches) {
        git('checkout', '-q', '--detach', base);
        git('commit', '-q', '--allow-empty', '-m', branch);
        commits[branch] = git('rev-parse', 'HEAD');
        git('update-ref', `refs/remotes/origin/${branch}`, commits[branch]);
    }
    return { root, commits, git };
}

test('allows release tags only on develop and hotfix branches', () => {
    const { root, commits, git } = fixture([
        'develop',
        'hotfix/login',
        'feat/new-page',
    ]);
    const check = path.join(
        repoRoot,
        '.github/scripts/check-release-source.sh',
    );

    for (const [branch, allowed] of [
        ['develop', true],
        ['hotfix/login', true],
        ['feat/new-page', false],
    ]) {
        git('checkout', '-q', '--detach', commits[branch]);
        const result = run('bash', [check], { cwd: root });
        assert.equal(result.status === 0, allowed, branch);
    }
});

test('allows release tags only on commits that contain the current build', () => {
    const { root, git } = fixture([]);
    const origin = mkdtempSync(path.join(tmpdir(), 'release-origin-'));
    fixtures.push(origin);
    run('git', ['init', '-q', '--bare', origin]);
    git('remote', 'add', 'origin', origin);
    // A fake `gh` prints the compare status and records the compared commits.
    const calls = path.join(root, 'gh-calls');
    writeFileSync(
        path.join(root, 'gh'),
        `#!/usr/bin/env bash\necho "$*" >> "${calls}"\necho "$COMPARE_STATUS"\n`,
    );
    chmodSync(path.join(root, 'gh'), 0o755);
    const check = (status) =>
        run(
            'bash',
            [path.join(repoRoot, '.github/scripts/check-release-order.sh')],
            {
                cwd: root,
                env: {
                    ...process.env,
                    BRANCH: 'build/workplace/prod',
                    COMPARE_STATUS: status,
                    GITHUB_REPOSITORY: 'fixture/repository',
                    PATH: `${root}${path.delimiter}${process.env.PATH}`,
                },
            },
        ).status;

    assert.equal(check('behind'), 0, 'a first release has no build to compare');

    const tree = git('hash-object', '-t', 'tree', '-w', '/dev/null');
    const build = git(
        'commit-tree',
        tree,
        '-m',
        'build(workplace): [abc1234] CI build',
    );
    git('push', '-q', 'origin', `${build}:refs/heads/build/workplace/prod`);
    assert.equal(check('ahead'), 0);
    assert.equal(check('identical'), 0);
    assert.notEqual(check('behind'), 0);
    assert.notEqual(check('diverged'), 0);
    const head = git('rev-parse', 'HEAD');
    assert.match(
        readFileSync(calls, 'utf8'),
        new RegExp(`compare/abc1234\\.\\.\\.${head}`),
    );
});

test('builds the mobile applications that a mobile tag names', () => {
    const workflow = parse(
        readFileSync(
            path.join(repoRoot, '.github/workflows/mobile.yml'),
            'utf8',
        ),
    );
    const step = workflow.jobs.select_apps.steps.find(
        (step) => step.name === 'Select mobile applications',
    );
    const select = (type, name) => {
        const output = path.join(
            mkdtempSync(path.join(tmpdir(), 'mobile-apps-')),
            'output',
        );
        fixtures.push(path.dirname(output));
        const result = run('bash', ['-e', '-c', step.run], {
            cwd: repoRoot,
            env: {
                ...process.env,
                GITHUB_OUTPUT: output,
                GITHUB_REF_NAME: name,
                GITHUB_REF_TYPE: type,
            },
        });
        if (result.status !== 0) return null;
        return JSON.parse(readFileSync(output, 'utf8').replace('apps=', ''));
    };

    assert.deepEqual(select('tag', 'mobile/control/v2611.1'), ['control']);
    assert.ok(select('tag', 'mobile/v2611.1').includes('workplace'));
    assert.ok(select('branch', 'rc/2611').includes('workplace'));
    assert.equal(select('tag', 'mobile/concierge/v2611.1'), null);
});

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const { parse } = require('yaml');

const repoRoot = path.resolve(__dirname, '..');
const workflowFiles = [
    '.github/workflows/build.yml',
    '.github/workflows/pull-request.yml',
];

for (const workflowFile of workflowFiles) {
    test(`${workflowFile} keeps matrix checkouts shallow`, () => {
        const workflow = parse(
            readFileSync(path.join(repoRoot, workflowFile), 'utf8'),
        );
        const checkout = workflow.jobs.build.steps.find(
            (step) => step.uses === 'actions/checkout@v6',
        );

        assert.ok(checkout, 'The build job must check out the repository');
        assert.notEqual(
            checkout.with?.['fetch-depth'],
            0,
            'Each matrix job must not fetch the full Git history',
        );
    });

    test(`${workflowFile} generates changelogs before the build matrix`, () => {
        const workflow = parse(
            readFileSync(path.join(repoRoot, workflowFile), 'utf8'),
        );
        const installSteps = workflow.jobs.install_deps.steps;
        const buildSteps = workflow.jobs.build.steps;
        const installCheckout = installSteps.find(
            (step) => step.uses === 'actions/checkout@v6',
        );
        const historyFetch = installSteps.find(
            (step) => step.name === 'Fetch changelog history',
        );

        assert.equal(installCheckout.with?.['fetch-depth'], '2');
        assert.match(historyFetch.run, /origin "\$\{GITHUB_REF\}"/);
        assert.ok(
            installSteps.some(
                (step) =>
                    step.name === 'Generate application changelogs' &&
                    step.run === '.github/scripts/generate-changelogs.sh' &&
                    step.env.MAX_PARALLEL === 2,
            ),
        );
        assert.ok(
            buildSteps.some(
                (step) => step.name === 'Download application changelogs',
            ),
        );
        assert.equal(
            buildSteps.some(
                (step) => step.uses === 'orhun/git-cliff-action@v4',
            ),
            false,
        );
    });
}

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const ref = process.argv[2] || 'origin/develop';
const cmd = process.argv[3] || 'build';
// CI sets NX_BASE to the last successfully built commit.
const base = process.env.NX_BASE || 'HEAD~1';

try {
    console.log(JSON.stringify(commands(cmd)));
} catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to calculate affected ${cmd} projects: ${message}`);
    process.exitCode = 1;
}

function getFolders(root) {
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter(
            (dirent) => dirent.isDirectory() && !dirent.name.includes('-e2e'),
        )
        .map((dirent) => dirent.name);
}

// Returns the applications that a release tag deploys. A `v<version>` tag
// releases all applications. An `<app>/v<version>` tag releases only that
// application. A tag that names an unknown application fails, so that a
// misspelled name cannot release all applications.
function releaseApps(tag, apps) {
    const [name, ...version] = tag.split('/');
    if (version.length === 0) return apps;
    if (!apps.includes(name)) {
        throw new Error(`Release tag names unknown application "${name}"`);
    }
    return [name];
}

function commands(target) {
    const apps = getFolders('apps');
    const libs = getFolders('libs');
    if (ref.startsWith('refs/tags/')) {
        const released = releaseApps(ref.slice('refs/tags/'.length), apps);
        return target === 'build' ? released : [...released, ...libs];
    }
    const raw_result = execFileSync(
        'bunx',
        [
            'nx',
            'show',
            'projects',
            '--affected',
            `--withTarget=${target}`,
            '--json',
            `--base=${base}`,
        ],
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
    );
    const array = JSON.parse(raw_result);
    if (
        !Array.isArray(array) ||
        array.some((item) => typeof item !== 'string')
    ) {
        throw new TypeError('Nx returned an invalid project list');
    }
    const projects = array.filter((project) => !project.includes('-e2e'));
    if (target === 'build') {
        return projects.filter((project) => !libs.includes(project));
    }
    return projects;
}

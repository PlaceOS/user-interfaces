const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const ref = process.argv[2] || 'origin/develop';
const cmd = process.argv[3] || 'build';

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

function commands(target) {
    const release = ref.includes('release') || ref.includes('-prod');
    const apps = getFolders('apps');
    const libs = getFolders('libs');
    if (release) {
        const array = target === 'build' ? [apps] : [apps, libs];
        return array.flat();
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
            '--base=HEAD~1',
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

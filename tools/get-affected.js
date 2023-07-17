const execSync = require('child_process').execSync;
const fs = require('fs');
const ref = process.argv[2] || 'origin/develop';
const baseSha = ref;
const cmd = process.argv[3] || 'build';

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
try {
    console.log(JSON.stringify(commands(cmd)) || '[]');
} catch (e) {
    console.log('[]');
}

function getFolders(root) {
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter(
            (dirent) => dirent.isDirectory() && !dirent.name.includes('-e2e')
        )
        .map((dirent) => dirent.name);
}

function commands(target) {
    const release = ref.includes('release');
    if (release) {
        const array =
            target === 'build'
                ? [...getFolders('apps')]
                : [...getFolders('apps'), ...getFolders('libs')];
        return array;
    }
    const base = release ? '' : `--base=${baseSha}~1`;
    const array = execSync(
        `npx nx print-affected --target=${target} --select=tasks.target.project ${base}`
    )
        .toString()
        .replace(/\n/g, '')
        .split(', ')
        .filter((_) => !!_);
    return array;
}

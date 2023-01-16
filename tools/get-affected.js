const execSync = require('child_process').execSync;
const ref = (process.argv[2] || 'origin/develop').replace(
    'refs/heads/',
    'origin/'
);
const baseSha = ref;
const cmd = process.argv[3] || 'build';

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
console.log(JSON.stringify(commands(cmd)));

function commands(target) {
    const release = ref.includes('release');
    const base = release ? '' : `--base=${baseSha}~1 --head=${baseSha}`;
    const array = execSync(
        `npx nx print-affected --target=${target} --select=tasks.target.project ${base}`
    )
        .toString()
        .replace(/\n/g, '')
        .split(', ')
        .filter((_) => !!_);
    return array;
}

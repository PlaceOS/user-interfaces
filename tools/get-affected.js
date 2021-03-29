const execSync = require('child_process').execSync;
const ref = process.argv[2] || 'origin/master';
const baseSha = ref;
const cmd = process.argv[3] || 'build';

// prints an object with keys {lint1: [...], lint2: [...], lint3: [...], test1: [...], .... build3: [...]}
console.log(
  JSON.stringify(commands(cmd))
);

function commands(target) {
  const array = JSON.parse(
    execSync(`npx nx print-affected --base=${baseSha}~1 --target=${target}`)
      .toString()
      .trim()
  ).tasks.map((t) => t.target.project);
  return array;
}

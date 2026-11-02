const { execFileSync } = require('node:child_process');

// Usage: node tools/get-changelog-paths.js <app>...
// Prints `{ "<app>": ["<glob>", ...] }`. Nx builds the project graph once for all apps.
const projects = process.argv.slice(2);

try {
    if (!projects.length) {
        throw new TypeError('An application name is required');
    }
    const graph = getProjectGraph();
    const paths = Object.fromEntries(
        projects.map((name) => [name, getChangelogPaths(name, graph)]),
    );
    console.log(JSON.stringify(paths));
} catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to calculate changelog paths: ${message}`);
    process.exitCode = 1;
}

function getProjectGraph() {
    const result = execFileSync('bunx', ['nx', 'graph', '--print'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'inherit'],
    });
    const value = JSON.parse(result);
    if (!value?.graph?.nodes || !value.graph.dependencies) {
        throw new TypeError('Nx returned an invalid project graph');
    }
    return value.graph;
}

/** Return the paths that can supply code or assets to an application build. */
function getChangelogPaths(projectName, graph) {
    if (!graph.nodes[projectName]) {
        throw new TypeError(`Nx project "${projectName}" does not exist`);
    }

    const projects = new Set();
    addProjectAndDependencies(projectName, graph, projects);

    return [
        ...[...projects].map((name) => {
            const root = graph.nodes[name]?.data?.root;
            if (typeof root !== 'string' || !root) {
                throw new TypeError(
                    `Nx project "${name}" does not have a root`,
                );
            }
            return `${root}/**/*`;
        }),
        'shared/**/*',
    ].sort();
}

function addProjectAndDependencies(projectName, graph, projects) {
    if (projects.has(projectName)) return;
    projects.add(projectName);

    const dependencies = graph.dependencies[projectName] || [];
    for (const dependency of dependencies) {
        if (!graph.nodes[dependency.target]) {
            throw new TypeError(
                `Nx dependency "${dependency.target}" does not exist`,
            );
        }
        addProjectAndDependencies(dependency.target, graph, projects);
    }
}

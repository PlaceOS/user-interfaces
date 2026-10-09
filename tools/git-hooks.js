const { execFileSync, spawnSync } = require('node:child_process');
const { readFileSync, writeFileSync } = require('node:fs');

const CLAUDE_ATTRIBUTION = [
    /^\s*Co-authored-by:\s*[^<]*<(?:noreply|claude)@anthropic\.com>\s*$/i,
    /^\s*(?:🤖\s*)?Generated (?:with|by)\s+(?:Claude\b|\[Claude\b)/i,
];

/** Remove attribution lines while preserving other text and line endings. */
function cleanMessage(message) {
    return message
        .split(/(?<=\n)/)
        .filter(
            (line) => !CLAUDE_ATTRIBUTION.some((pattern) => pattern.test(line)),
        )
        .join('');
}

function git(args) {
    return execFileSync('git', args, {
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe'],
    });
}

/** Check the actual refs supplied by Git, including tags and multiple branches. */
function checkPush(remote, updates) {
    const tips = new Set();
    const exclusions = new Set();

    for (const update of updates.trim().split('\n').filter(Boolean)) {
        const [, local_oid, , remote_oid] = update.split(/\s+/);
        if (/^0+$/.test(local_oid)) continue; // Ref deletion.
        tips.add(local_oid);

        if (
            !/^0+$/.test(remote_oid) &&
            spawnSync('git', ['cat-file', '-e', remote_oid], {
                stdio: 'ignore',
            }).status === 0
        ) {
            exclusions.add(remote_oid);
        }
    }

    if (!tips.size) return;

    // Tracking refs avoid checking existing remote history for new branches.
    // If the remote tip is unavailable locally, check conservatively.
    const records = git([
        'log',
        '--no-show-signature',
        '--format=%H%x00%B%x00',
        ...tips,
        '--not',
        ...exclusions,
        `--remotes=${remote}`,
        '--',
    ]).split('\0');
    const rejected = [];
    for (let index = 0; index + 1 < records.length; index += 2) {
        const message = records[index + 1];
        if (cleanMessage(message) !== message) {
            rejected.push(records[index].trim().slice(0, 12));
        }
    }

    if (rejected.length) {
        throw new Error(
            `Claude attribution found in commits: ${rejected.join(', ')}.\n` +
                'Edit these commit messages, then push again. ' +
                'For the latest commit, use git commit --amend --no-edit.\n' +
                'This hook has not changed any commits.',
        );
    }
}

if (require.main === module) {
    try {
        const [hook, argument] = process.argv.slice(2);
        if (hook === 'commit-msg') {
            const message = readFileSync(argument, 'utf8');
            const cleaned = cleanMessage(message);
            if (cleaned !== message) writeFileSync(argument, cleaned);
        } else if (hook === 'pre-push') {
            checkPush(argument, readFileSync(0, 'utf8'));
        } else {
            throw new Error(`Unknown Git hook: ${hook}`);
        }
    } catch (error) {
        console.error(error instanceof Error ? error.message : String(error));
        process.exitCode = 1;
    }
}

module.exports = { cleanMessage };

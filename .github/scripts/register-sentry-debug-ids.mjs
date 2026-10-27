// Adds Sentry's debug ID registration to each script that the build gave a
// `//# debugId=` comment. The build writes the same ID into the script's
// source map, but the Sentry SDK can only read IDs that a script registers
// when it runs. Then updates the service worker hashes of the build, so
// service worker updates still install.
//
// Usage: bun .github/scripts/register-sentry-debug-ids.mjs <build folder>
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const folder = process.argv[2];
if (!folder || !existsSync(folder)) {
    throw new Error(`Build folder not found: ${folder}`);
}

const DEBUG_ID_COMMENT = /^\/\/# debugId=([0-9a-fA-F-]{36})$/m;

/** The registration that `sentry-cli sourcemaps inject` adds to scripts */
const registration = (id) =>
    `;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="${id}")}catch(e){}}();\n`;

let count = 0;
for (const name of readdirSync(folder)) {
    if (!name.endsWith('.js')) continue;
    const file = join(folder, name);
    const source = readFileSync(file, 'utf8');
    const match = DEBUG_ID_COMMENT.exec(source);
    if (!match || source.includes(registration(match[1]))) continue;
    // Added after the code, so the source map mappings stay correct
    writeFileSync(
        file,
        source.slice(0, match.index) +
            registration(match[1]) +
            source.slice(match.index),
    );
    count++;
}

const manifest_file = join(folder, 'ngsw.json');
if (existsSync(manifest_file)) {
    const manifest = JSON.parse(readFileSync(manifest_file, 'utf8'));
    for (const url of Object.keys(manifest.hashTable)) {
        const data = readFileSync(join(folder, decodeURI(url)));
        manifest.hashTable[url] = createHash('sha1').update(data).digest('hex');
    }
    writeFileSync(manifest_file, JSON.stringify(manifest, null, 2));
}

console.log(`Registered Sentry debug IDs in ${count} scripts.`);

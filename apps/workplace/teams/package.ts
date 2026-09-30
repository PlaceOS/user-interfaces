/**
 * Build the Microsoft Teams / Microsoft 365 app package for one PlaceOS host.
 * See docs/teams-app.md.
 *
 * ```sh
 * bun apps/workplace/teams/package.ts --host example.placeos.com \
 *     --app-id <teams app GUID> [--client-id <Entra app GUID>] [--path /workplace/]
 * ```
 *
 * Writes `dist/teams/workplace-<host>/` and `dist/teams/workplace-<host>.zip`.
 * Without `--client-id` the package has no SSO, so the tab always signs in
 * with the sign-in window.
 */
import { spawnSync } from 'node:child_process';
import {
    copyFileSync,
    mkdirSync,
    readFileSync,
    rmSync,
    writeFileSync,
} from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HOSTNAME = /^[a-z0-9.-]+(:\d+)?$/i;
const ICONS = ['color.png', 'outline.png'];

const template_dir = fileURLToPath(new URL('.', import.meta.url));
const { values: args } = parseArgs({
    options: {
        host: { type: 'string' },
        'app-id': { type: 'string' },
        'client-id': { type: 'string' },
        path: { type: 'string', default: '/workplace/' },
        out: { type: 'string', default: 'dist/teams' },
    },
});

function fail(message: string): never {
    console.error(
        `${message}\nSee the usage in ${join(template_dir, 'package.ts')}.`,
    );
    process.exit(1);
}

const host = args.host || fail('Missing --host.');
const app_id = args['app-id'] || fail('Missing --app-id.');
const client_id = args['client-id'] || '';
const path = args.path;
if (!HOSTNAME.test(host))
    fail('--host must be a host name, without a protocol or path.');
if (!GUID.test(app_id)) fail('--app-id must be a GUID.');
if (client_id && !GUID.test(client_id)) fail('--client-id must be a GUID.');
if (!path.startsWith('/') || !path.endsWith('/'))
    fail('--path must start and end with "/".');

const values: Record<string, string> = {
    HOST: host,
    APP_ID: app_id,
    CLIENT_ID: client_id,
    PATH: path,
};
const text = readFileSync(join(template_dir, 'manifest.json'), 'utf8').replace(
    /\{\{(\w+)\}\}/g,
    (match, key: string) => values[key] ?? match,
);
const manifest = JSON.parse(text);
if (!client_id) delete manifest.webApplicationInfo;
const output = JSON.stringify(manifest, null, 4);
if (output.includes('{{'))
    fail('The manifest has a placeholder with no value.');

const name = `workplace-${host.replace(/[^a-z0-9.-]/gi, '-')}`;
const out_dir = resolve(args.out, name);
const zip_file = resolve(args.out, `${name}.zip`);
rmSync(out_dir, { recursive: true, force: true });
rmSync(zip_file, { force: true });
mkdirSync(out_dir, { recursive: true });
writeFileSync(join(out_dir, 'manifest.json'), `${output}\n`);
for (const icon of ICONS)
    copyFileSync(join(template_dir, icon), join(out_dir, icon));

// The package must have the files at the root of the zip, with no folders.
const zip = spawnSync(
    'zip',
    ['-j', '-X', '-q', zip_file, 'manifest.json', ...ICONS],
    {
        cwd: out_dir,
        stdio: 'inherit',
    },
);
if (zip.error || zip.status !== 0)
    fail(
        'The "zip" command failed. Install zip, or zip the output folder by hand.',
    );
console.info(`Wrote ${zip_file}`);

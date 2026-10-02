/**
 * Make the Outlook add-in manifest for one PlaceOS host.
 * See apps/outlook-addin/README.md.
 *
 * ```sh
 * bun apps/outlook-addin/manifest.ts --host example.placeos.com \
 *     [--client-id <Entra app GUID>] [--path /outlook/]
 * ```
 *
 * Writes `dist/outlook/outlook-<host>.xml`. Without `--client-id` the add-in
 * has no single sign-on, so it always signs in with the sign-in dialog.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HOSTNAME = /^[a-z0-9.-]+(:\d+)?$/i;
/** Same name as `NAA_CLIENT_PARAM` in src/app/outlook-auth.ts */
const CLIENT_PARAM = 'ms_client_id';

const template_dir = fileURLToPath(new URL('.', import.meta.url));
const { values: args } = parseArgs({
    options: {
        host: { type: 'string' },
        'client-id': { type: 'string' },
        path: { type: 'string', default: '/outlook/' },
        out: { type: 'string', default: 'dist/outlook' },
    },
});

function fail(message: string): never {
    console.error(
        `${message}\nSee the usage in ${join(template_dir, 'manifest.ts')}.`,
    );
    process.exit(1);
}

const host = args.host || fail('Missing --host.');
const client_id = args['client-id'] || '';
const path = args.path;
if (!HOSTNAME.test(host))
    fail('--host must be a host name, without a protocol or path.');
if (client_id && !GUID.test(client_id)) fail('--client-id must be a GUID.');
if (!/^\/[\w./-]*\/$/.test(path))
    fail(
        '--path must start and end with "/" and have only URL path characters.',
    );

const query = client_id ? `?${CLIENT_PARAM}=${client_id}` : '';
const values: Record<string, string> = {
    TASKPANE_URL: `https://${host}${path}${query}#/calendar`,
};
const output = readFileSync(join(template_dir, 'manifest.xml'), 'utf8')
    .replace(/\{\{(\w+)\}\}/g, (match, key: string) => values[key] ?? match)
    .replace(/\s*<!-- Template\..*-->/, '');
if (output.includes('{{'))
    fail('The manifest has a placeholder with no value.');

const out_file = resolve(
    args.out,
    `outlook-${host.replace(/[^a-z0-9.-]/gi, '-')}.xml`,
);
mkdirSync(resolve(args.out), { recursive: true });
writeFileSync(out_file, output);
console.info(`Wrote ${out_file}`);

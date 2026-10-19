const assert = require('node:assert/strict');
const { existsSync, readdirSync, readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

// Checks every app's service worker config with the Angular generator, so the
// patterns are the ones ngsw-worker gets. The worker tests each pattern with
// `new RegExp(p).test(url)` against the full cross-origin URL, query included.
//
// An asset group re-fetches a matched request as a GET, whatever its method.
// A PUT to a signed S3 upload URL then fails with 403 SignatureDoesNotMatch.
// A data group sends non-GET requests to the network unchanged, so S3 caching
// belongs there.

const APPS = path.resolve(__dirname, '../apps');
const S3_GLOB =
    'https://*.amazonaws.com/**/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)';
const SIGNED_UPLOAD_URL =
    'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/placeos-dev.aca.im/1784949622960789763.png' +
    '?X-Amz-Expires=300&Content-Type=image%2Fpng&x-amz-acl=private' +
    '&Content-MD5=oquhaY%2Bq%2FMpeOngVVD7uJQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256' +
    '&X-Amz-SignedHeaders=content-md5%3Bcontent-type%3Bhost%3Bx-amz-acl' +
    '&X-Amz-Signature=5d8d43b8cb582a65d904220031fa827ce141486e855036dce20127bd2b024032';

/** Builds the manifest that the production build gives to ngsw-worker */
async function manifestFor(config) {
    const { Generator } = await import('@angular/service-worker/config');
    const no_files = {
        list: async () => [],
        read: async () => '',
        hash: async () => '',
        write: async () => {},
    };
    return new Generator(no_files, '/').process(config);
}

const matches = (groups, url) =>
    groups.some((group) => group.patterns.some((p) => new RegExp(p).test(url)));

const apps = readdirSync(APPS).filter((app) =>
    existsSync(path.join(APPS, app, 'ngsw-config.json')),
);

for (const app of apps) {
    test(`${app} asset groups do not match signed upload urls`, async () => {
        const file = path.join(APPS, app, 'ngsw-config.json');
        const manifest = await manifestFor(
            JSON.parse(readFileSync(file, 'utf8')),
        );
        assert.equal(matches(manifest.assetGroups, SIGNED_UPLOAD_URL), false);
    });
}

// Without this, the checks above could pass because the patterns never see
// the query string, and an S3 asset group would look safe.
test('an s3 asset group matches signed upload urls', async () => {
    const manifest = await manifestFor({
        index: '/index.html',
        assetGroups: [{ name: 'assets', resources: { urls: [S3_GLOB] } }],
    });
    assert.equal(matches(manifest.assetGroups, SIGNED_UPLOAD_URL), true);
});

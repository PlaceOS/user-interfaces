import ngsw_config from '../../ngsw-config.json';

// Mirrors globToRegex from @angular/service-worker/config, which is internal to
// the package. Kept in sync with the constants it defines.
const QUESTION_MARK = '[^/]';
const WILD_SINGLE = '[^/]*';
const WILD_OPEN = '(?:.+\\/)?';
const TO_ESCAPE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
    { replace: /\?/g, with: QUESTION_MARK },
];

function globToRegex(glob: string) {
    const segments = glob.split('/').reverse();
    let regex = '';
    while (segments.length > 0) {
        const segment = segments.pop();
        if (segment === '**') {
            regex += segments.length > 0 ? WILD_OPEN : '.*';
            continue;
        }
        regex += TO_ESCAPE.reduce(
            (value, escape) => value.replace(escape.replace, escape.with),
            segment,
        );
        if (segments.length > 0) regex += '\\/';
    }
    // Deliberately unanchored: ngsw-worker builds these with `new RegExp(p)`
    // and calls `p.test(url)`, so a match anywhere in the URL counts. Anchoring
    // here would wrongly report extension-restricted patterns as safe.
    return new RegExp(regex);
}

/** Matches ngsw-worker's AssetGroup.handleFetch check */
const isCached = (url: string, globs: string[]) =>
    globs.map(globToRegex).some((pattern) => pattern.test(url));

const configured_url_globs: string[] = ngsw_config.assetGroups.flatMap(
    (group) => (group.resources as { urls?: string[] }).urls || [],
);

const SIGNED_UPLOAD_URL =
    'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/placeos-dev.aca.im/1784949622960789763.png' +
    '?X-Amz-Expires=300&Content-Type=image%2Fpng&x-amz-acl=private' +
    '&Content-MD5=oquhaY%2Bq%2FMpeOngVVD7uJQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256' +
    '&X-Amz-SignedHeaders=content-md5%3Bcontent-type%3Bhost%3Bx-amz-acl' +
    '&X-Amz-Signature=5d8d43b8cb582a65d904220031fa827ce141486e855036dce20127bd2b024032';

describe('signage-manager service worker config', () => {
    // A cached URL is re-fetched by the service worker with GET. Upload URLs
    // are signed for PUT over specific headers, so that GET is rejected by S3
    // with a 403 and the upload fails with it.
    it('should not treat signed upload urls as cacheable assets', () => {
        expect(isCached(SIGNED_UPLOAD_URL, configured_url_globs)).toBe(false);
    });

    // Without this, the check above passes for the wrong reason and any future
    // S3 pattern would look safe.
    it('should flag s3 url patterns as unsafe for an app that uploads', () => {
        const previously_shipped = [
            'https://*.amazonaws.com/**/*.*',
            'https://*.amazonaws.com/**/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)',
        ];
        for (const glob of previously_shipped) {
            expect(
                isCached(SIGNED_UPLOAD_URL, [glob]),
                `${glob} must be detected as matching a signed upload url`,
            ).toBe(true);
        }
    });
});

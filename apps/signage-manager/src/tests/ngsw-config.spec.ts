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
    return new RegExp(`^${regex}$`);
}

const cached_url_patterns = ngsw_config.assetGroups
    .flatMap((group) => group.resources?.urls || [])
    .map(globToRegex);

const isCached = (url: string) =>
    cached_url_patterns.some((pattern) => pattern.test(url));

const SIGNED_UPLOAD_URL =
    'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/placeos-dev.aca.im/1784949037896302245.png' +
    '?X-Amz-Expires=300&Content-Type=image%2Fpng&x-amz-acl=private' +
    '&Content-MD5=oVMiqr9dUn9u%2FiNnU2dQDw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256' +
    '&X-Amz-SignedHeaders=content-md5%3Bcontent-type%3Bhost%3Bx-amz-acl' +
    '&X-Amz-Signature=06f13b5b626f0604d00780d5cf840696693e0efb22caad61ac5552692a15ae6f';

describe('signage-manager service worker config', () => {
    // A cached URL is fetched by the service worker with GET. The upload URLs
    // are signed for PUT over specific headers, so the service worker's GET
    // gets a 403 from S3 and takes the upload down with it.
    it('should not treat signed upload urls as cacheable assets', () => {
        expect(isCached(SIGNED_UPLOAD_URL)).toBe(false);
    });

    it('should not treat any signed s3 url as a cacheable asset', () => {
        const signed = [
            'https://s3.amazonaws.com/bucket/clip.mp4?X-Amz-Signature=abc',
            'https://s3.amazonaws.com/bucket/poster.webp?X-Amz-Expires=300',
            'https://s3-ap-southeast-2.amazonaws.com/b/a/v.webm?X-Amz-Algorithm=AWS4-HMAC-SHA256',
        ];
        for (const url of signed) {
            expect(isCached(url), `${url} must not be cached`).toBe(false);
        }
    });

    it('should still cache plain media assets', () => {
        const media = [
            'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/a/poster.png',
            'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/a/clip.mp4',
            'https://s3-ap-southeast-2.amazonaws.com/os.place.tech/a/clip.webm',
        ];
        for (const url of media) {
            expect(isCached(url), `${url} should be cached`).toBe(true);
        }
    });
});

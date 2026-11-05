import { apiKey, token } from '@placeos/ts-client';

const MAX_CACHED_IMAGES = 64;
const MAX_FAILED_LOADS = 64;
const FAILED_LOAD_TTL = 30 * 1000;
const LEGACY_CACHE_NAME = 'PlaceOS.image-cache-v1';
const LEGACY_CACHE_KEYS = 'PlaceOS.image-cache-keys-v1';

/** Shared, bounded object URL cache for authenticated media. */
const IMAGE_STORE = new Map<string, string>();
const IMAGE_LOADS = new Map<string, Promise<string>>();
const FAILED_LOADS = new Map<string, number>();
let _legacy_cache_removed = false;

function removeLegacyCache(): void {
    if (_legacy_cache_removed) return;
    _legacy_cache_removed = true;
    if (typeof caches !== 'undefined') {
        void caches.delete(LEGACY_CACHE_NAME).catch(() => false);
    }
    if (typeof sessionStorage !== 'undefined') {
        try {
            sessionStorage.removeItem(LEGACY_CACHE_KEYS);
        } catch {
            // Ignore privacy-mode storage failures.
        }
    }
}

export function getCachedAuthenticatedImage(
    source: string,
): string | undefined {
    const cached = IMAGE_STORE.get(source);
    if (!cached) return undefined;
    IMAGE_STORE.delete(source);
    IMAGE_STORE.set(source, cached);
    return cached;
}

export function clearAuthenticatedImageCache(): void {
    for (const url of IMAGE_STORE.values()) URL.revokeObjectURL(url);
    IMAGE_STORE.clear();
    FAILED_LOADS.clear();
}

function cacheObjectUrl(source: string, url: string): string {
    const previous = IMAGE_STORE.get(source);
    if (previous && previous !== url) URL.revokeObjectURL(previous);
    IMAGE_STORE.delete(source);
    IMAGE_STORE.set(source, url);

    while (IMAGE_STORE.size > MAX_CACHED_IMAGES) {
        const oldest_source = IMAGE_STORE.keys().next().value;
        if (!oldest_source) break;
        const oldest_url = IMAGE_STORE.get(oldest_source);
        IMAGE_STORE.delete(oldest_source);
        if (oldest_url) URL.revokeObjectURL(oldest_url);
    }
    return url;
}

function rememberFailedLoad(source: string): void {
    FAILED_LOADS.delete(source);
    FAILED_LOADS.set(source, Date.now() + FAILED_LOAD_TTL);
    while (FAILED_LOADS.size > MAX_FAILED_LOADS) {
        const oldest_source = FAILED_LOADS.keys().next().value;
        if (!oldest_source) break;
        FAILED_LOADS.delete(oldest_source);
    }
}

export function setAuthCookie(cookie_path: string): void {
    const tkn = token();
    document.cookie = `${
        tkn === 'x-api-key'
            ? 'api-key=' + encodeURIComponent(apiKey())
            : 'bearer_token=' + encodeURIComponent(tkn)
    };max-age=30;path=${cookie_path};samesite=strict;${
        location.protocol === 'https:' ? 'secure;' : ''
    }`;
}

/**
 * Request options that authenticate with a header. Browsers keep the
 * X-API-Key header on a redirect to another origin, so API key requests do
 * not follow redirects. Uploads use the cookie loader, which can follow them.
 */
function authRequest(): RequestInit {
    const tkn = token();
    return tkn === 'x-api-key'
        ? { headers: { 'X-API-Key': apiKey() }, redirect: 'error' }
        : { headers: { Authorization: `Bearer ${tkn}` } };
}

export function loadAuthenticatedImage(
    source: string,
    cookie_path: string,
): Promise<string> {
    return loadImage(source, () => {
        setAuthCookie(cookie_path);
        return fetch(source);
    });
}

export function loadAuthenticatedImageWithHeader(
    source: string,
): Promise<string> {
    return loadImage(source, () => fetch(source, authRequest()));
}

async function loadImage(
    source: string,
    request: () => Promise<Response>,
): Promise<string> {
    removeLegacyCache();
    const cached = getCachedAuthenticatedImage(source);
    if (cached) return cached;

    const retry_after = FAILED_LOADS.get(source) || 0;
    if (retry_after > Date.now()) {
        throw new Error('Image load is in retry cooldown');
    }
    FAILED_LOADS.delete(source);

    const pending = IMAGE_LOADS.get(source);
    if (pending) return pending;

    const load = request()
        .then(async (response) => {
            if (!response?.ok) {
                throw new Error(`Failed to fetch image: ${response?.status}`);
            }
            const url = URL.createObjectURL(await response.blob());
            return cacheObjectUrl(source, url);
        })
        .catch((error: unknown) => {
            rememberFailedLoad(source);
            throw error;
        })
        .finally(() => IMAGE_LOADS.delete(source));
    IMAGE_LOADS.set(source, load);
    return load;
}

/** First bytes of the upload types that a preview can show in a frame */
const PREVIEW_TYPES = [
    { type: 'application/pdf', bytes: [0x25, 0x50, 0x44, 0x46, 0x2d] },
    {
        type: 'image/png',
        bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    },
    { type: 'image/jpeg', bytes: [0xff, 0xd8, 0xff] },
];
/** Type of an upload that a preview cannot show. Browsers download it. */
export const UNKNOWN_UPLOAD_TYPE = 'application/octet-stream';

/**
 * Load an upload from this PlaceOS instance to preview it, for example in
 * `FullscreenEmbedComponent` through an object URL. The type comes from the
 * first bytes of the file, not from the server, so an uploaded HTML or SVG
 * file cannot run script on this origin. A PDF, PNG or JPEG gets its own
 * type. Any other file gets `UNKNOWN_UPLOAD_TYPE`.
 */
export async function loadUploadPreview(source: string): Promise<Blob> {
    // Storage redirects do not get the cookie, as it is for this origin only
    setAuthCookie('/api/engine/v2/uploads');
    const response = await fetch(source);
    if (!response.ok) {
        throw new Error(`Failed to fetch upload: ${response.status}`);
    }
    const data = await response.arrayBuffer();
    const head = new Uint8Array(data, 0, Math.min(data.byteLength, 8));
    const match = PREVIEW_TYPES.find(({ bytes }) =>
        bytes.every((byte, index) => head[index] === byte),
    );
    return new Blob([data], { type: match?.type ?? UNKNOWN_UPLOAD_TYPE });
}

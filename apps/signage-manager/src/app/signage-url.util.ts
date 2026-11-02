import { parseWebUrl } from '@placeos/common';

/**
 * Absolute http or https `url` in the parsed form, or null for other URLs.
 * Save this form: the backend refuses an origin without a path, such as
 * `https://example.com`, and parsing adds the trailing `/`.
 */
export function normaliseWebPageUrl(url: string): string | null {
    return parseWebUrl(url)?.href ?? null;
}

/** True when `url` is an absolute http or https URL. Webpage media need one. */
export function isWebPageUrl(url: string): boolean {
    return !!parseWebUrl(url);
}

/**
 * URL that is safe to load in a webpage media iframe. Other schemes, such as
 * `javascript:`, are replaced so they cannot run in the signage manager origin.
 */
export function webPageFrameUrl(url: string): string {
    return isWebPageUrl(url) ? url : 'about:blank';
}

/** URL that serves an upload, relative to the page origin */
export function uploadUrl(upload_id: string) {
    return `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
}

/**
 * Link to a route of the signage player, with debug output on.
 * @param setting Player path from the `signage_path` setting. Zone metadata
 * can override it, so a scheme that would run script in this origin, such
 * as `javascript:`, falls back to `/signage`.
 * @param route Player route after `#/`, with its parts already encoded
 */
export function signagePlayerUrl(setting: string | undefined, route: string) {
    const signage_path =
        setting && parseWebUrl(setting, document.baseURI)
            ? setting
            : '/signage';
    return `${signage_path.replace(/\/$/, '')}/#/${route}?debug=true`;
}

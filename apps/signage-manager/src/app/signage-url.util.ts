/**
 * Parse `url` and return it only when it uses http or https. Relative URLs
 * resolve against `base`. Without `base`, only absolute URLs parse. Use it to
 * refuse schemes such as `javascript:` and `data:` before a URL is stored or
 * loaded in an iframe.
 */
export function parseWebUrl(url: string, base?: string): URL | null {
    try {
        const parsed = new URL(url, base);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:'
            ? parsed
            : null;
    } catch {
        return null;
    }
}

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

/** True when `url` is an absolute http or https URL. */
export function isWebPageUrl(url: string): boolean {
    try {
        const { protocol } = new URL(url);
        return protocol === 'http:' || protocol === 'https:';
    } catch {
        return false;
    }
}

/**
 * URL that is safe to load in a webpage media iframe. Other schemes, such as
 * `javascript:`, are replaced so they cannot run in the concierge origin.
 */
export function webPageFrameUrl(url: string): string {
    return isWebPageUrl(url) ? url : 'about:blank';
}

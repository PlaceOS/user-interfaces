/**
 * URL parameters and cookies that carry credentials. Kiosks and panels load
 * with `?x-api-key=` in the URL, and Visitor Kiosk check-in links carry `jwt`
 * or `token`. ts-client debug lines show the websocket cookie, such as
 * `api-key=...;` or `; bearer_token=...`. Sentry records URLs in events,
 * breadcrumbs and spans. Breadcrumbs leave the app only inside events.
 *
 * A name matches after `?`, `&`, `#` or `;`. The two cookie names also match
 * at the start, or after a space, a quote, `,` or `[`, but general names such
 * as `code` do not, so `failed code=503` stays. A value stops at a backslash,
 * so a scrubbed JSON string keeps its escaped quotes.
 */
const SECRET_PARAM =
    /((?:[?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|jwt|token|code)|(?:^|[\s"',[])(?:api-key|bearer_token))=)[^&#;\s"'\\]+/gi;
/** Sentry normalises events to a few levels before its hooks run */
const MAX_SCRUB_DEPTH = 20;
/** SDK state kept on the event. It is not sent, and it holds live objects. */
const SDK_METADATA_KEY = 'sdkProcessingMetadata';

/**
 * Removes credential values from every string in a Sentry event or a remote
 * log event. Values are changed in place, and only where a credential was
 * found, so pass a copy: Sentry gives its hooks a normalised copy of the
 * event.
 */
export function scrubSecrets<T>(value: T, depth = 0): T {
    if (typeof value === 'string') {
        return value.replace(SECRET_PARAM, '$1[Filtered]') as T;
    }
    if (!value || typeof value !== 'object' || depth > MAX_SCRUB_DEPTH) {
        return value;
    }
    const record = value as Record<string, unknown>;
    for (const key of Object.keys(record)) {
        if (depth === 0 && key === SDK_METADATA_KEY) continue;
        const scrubbed = scrubSecrets(record[key], depth + 1);
        if (scrubbed !== record[key]) record[key] = scrubbed;
    }
    return value;
}

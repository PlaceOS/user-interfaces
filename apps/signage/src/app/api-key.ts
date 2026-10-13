/**
 * Whether this device has an api key stored from a previous load.
 *
 * The key is written under a prefix derived from the client configuration, so
 * it cannot be read back by name until the client has been set up - which on a
 * device with no network happens long after the first render. The suffix is
 * stable, so it is matched instead.
 */
export function hasStoredApiKey() {
    for (const store of [localStorage, sessionStorage]) {
        try {
            for (const key of Object.keys(store)) {
                if (key.endsWith('_x-api-key') && !!store.getItem(key)) {
                    return true;
                }
            }
        } catch {
            // Storage can be unavailable in privacy modes; treat as no key.
        }
    }
    return false;
}

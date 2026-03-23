const DOMAIN_STORAGE_KEY = 'PlaceOS.native.domain';

/**
 * Returns true when the application is running inside a Capacitor native shell.
 * Uses the canonical Capacitor bridge API which is injected into the webview
 * before any application scripts run.
 */
export function isNativeApp(): boolean {
    return !!(window as any).Capacitor?.isNativePlatform?.();
}

/** Retrieve the stored API domain, or null if none has been saved. */
export function getNativeDomain(): string | null {
    return localStorage.getItem(DOMAIN_STORAGE_KEY);
}

/** Persist the API domain for future launches. */
export function setNativeDomain(domain: string): void {
    localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}

/** Clear the stored API domain. */
export function clearNativeDomain(): void {
    localStorage.removeItem(DOMAIN_STORAGE_KEY);
}

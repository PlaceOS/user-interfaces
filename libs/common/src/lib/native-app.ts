const DOMAIN_STORAGE_KEY = 'PlaceOS.native.domain';
const EMAIL_STORAGE_KEY = 'PlaceOS.native.email';
const APP_ID_STORAGE_KEY = 'PlaceOS.native.app_id';
const LAST_AUTH_URL_STORAGE_KEY = 'PlaceOS.native.last_auth_url';
const CONSUMED_AUTH_URL_STORAGE_KEY = 'PlaceOS.native.consumed_auth_url';
const LOOKUP_HOST = 'au.placeos.run';

const NATIVE_APP_IDS: Record<string, string> = {
    workplace: 'com.placeos.workplace',
    staff: 'com.placeos.workplace',
    control: 'com.placeos.control',
    bookings: 'com.placeos.booking.panel',
    'booking panel': 'com.placeos.booking.panel',
};

type NativeUrlListener = (url: string) => void;

interface NativePluginHandle {
    remove: () => Promise<void>;
}

interface NativeAppPlugin {
    addListener: (
        event_name: 'appUrlOpen',
        listener: (event: { url?: string }) => void,
    ) => Promise<NativePluginHandle>;
    getLaunchUrl?: () => Promise<{ url?: string }>;
}

interface NativeBrowserPlugin {
    open?: (options: { url: string }) => Promise<void>;
    close?: () => Promise<void>;
}

let _native_url_listener: Promise<NativePluginHandle> | null = null;

function capacitor() {
    return (window as any).Capacitor;
}

function nativeAppPlugin(): NativeAppPlugin | null {
    const register_plugin = capacitor()?.registerPlugin;
    return register_plugin ? register_plugin('App') : null;
}

function nativeBrowserPlugin(): NativeBrowserPlugin | null {
    const register_plugin = capacitor()?.registerPlugin;
    return register_plugin ? register_plugin('Browser') : null;
}

/**
 * Returns true when the application is running inside a Capacitor native shell.
 * Uses the canonical Capacitor bridge API which is injected into the webview
 * before any application scripts run.
 */
export function isNativeApp(): boolean {
    return !!capacitor()?.isNativePlatform?.();
}

export async function getNativeAppId(app_name?: string): Promise<string> {
    const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
    if (cached_app_id) return cached_app_id;
    const normalised_name = `${app_name || ''}`.trim().toLowerCase();
    const app_id = NATIVE_APP_IDS[normalised_name];
    if (!app_id) {
        throw new Error(`Unsupported native app: ${app_name || 'unknown'}.`);
    }
    localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
    return app_id;
}

export async function getNativeRedirectUri(
    app_name?: string,
    domain?: string,
): Promise<string> {
    const app_id = await getNativeAppId(app_name);
    const host = `${domain || ''}`.trim();
    return host ? `${app_id}://${host}/oauth-resp` : `${app_id}://oauth-resp`;
}

export async function isNativeAuthRedirect(url: string): Promise<boolean> {
    const app_id = await getNativeAppId();
    const callback_url = new URL(url);
    return (
        callback_url.protocol === `${app_id}:` &&
        callback_url.pathname === '/oauth-resp'
    );
}

export async function bindNativeAuthRedirects(
    listener: NativeUrlListener,
): Promise<void> {
    if (!isNativeApp() || _native_url_listener) return;
    const app_plugin = nativeAppPlugin();
    if (!app_plugin?.addListener) return;
    _native_url_listener = app_plugin.addListener(
        'appUrlOpen',
        async ({ url }) => {
            if (!url) return;
            if (!(await isNativeAuthRedirect(url))) return;
            localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
            localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
            listener(url);
        },
    );
}

export async function consumeNativeAuthRedirect(): Promise<string | null> {
    if (!isNativeApp()) return null;
    const app_plugin = nativeAppPlugin();
    const launch_url = await app_plugin?.getLaunchUrl?.().catch(() => null);
    const url =
        launch_url?.url ||
        localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) ||
        '';
    if (!url) return null;
    if (!(await isNativeAuthRedirect(url))) return null;
    if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
        return null;
    }
    localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
    localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
    return url;
}

export async function closeNativeBrowser(): Promise<void> {
    await nativeBrowserPlugin()
        ?.close?.()
        .catch(() => null);
}

export async function openNativeBrowser(url: string): Promise<void> {
    const browser = nativeBrowserPlugin();
    if (browser?.open) {
        await browser.open({ url });
        return;
    }
    location.assign(url);
}

/** Retrieve the stored API domain, or null if none has been saved. */
export function getNativeDomain(): string | null {
    return localStorage.getItem(DOMAIN_STORAGE_KEY);
}

/** Retrieve the stored email used for domain lookup, or null if none has been saved. */
export function getNativeEmail(): string | null {
    return localStorage.getItem(EMAIL_STORAGE_KEY);
}

/** Persist the API domain for future launches. */
export function setNativeDomain(domain: string): void {
    localStorage.setItem(DOMAIN_STORAGE_KEY, domain.trim());
}

/** Persist the email used for future launches. */
export function setNativeEmail(email: string): void {
    localStorage.setItem(EMAIL_STORAGE_KEY, email.trim());
}

/** Clear the stored API domain. */
export function clearNativeDomain(): void {
    localStorage.removeItem(DOMAIN_STORAGE_KEY);
}

export async function lookupNativeDomainByEmail(
    email: string,
): Promise<string> {
    const response = await fetch(
        `https://${LOOKUP_HOST}/api/engine/v2/domains/lookup/${encodeURIComponent(email)}`,
    );
    if (!response.ok) {
        throw new Error('Unable to lookup domain.');
    }
    const text = (await response.text()).trim();
    const domain = text.startsWith('"') ? JSON.parse(text) : text;
    if (!domain) {
        throw new Error('No domain found for this email.');
    }
    return `${domain}`.trim();
}

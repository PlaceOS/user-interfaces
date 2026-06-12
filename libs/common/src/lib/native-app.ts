const DOMAIN_STORAGE_KEY = 'PlaceOS.native.domain';
const EMAIL_STORAGE_KEY = 'PlaceOS.native.email';
const API_KEY_STORAGE_KEY = 'PlaceOS.native.api_key';
const SYSTEM_ID_STORAGE_KEY = 'PlaceOS.native.system_id';
const MANAGED_CONFIG_STORAGE_KEY = 'PlaceOS.native.managed_config';
const APP_ID_STORAGE_KEY = 'PlaceOS.native.app_id';
const LAST_AUTH_URL_STORAGE_KEY = 'PlaceOS.native.last_auth_url';
const CONSUMED_AUTH_URL_STORAGE_KEY = 'PlaceOS.native.consumed_auth_url';
const PKCE_STORAGE_KEY = 'PlaceOS.native.pkce';
const AUTH_ERROR_STORAGE_KEY = 'PlaceOS.native.auth_error';
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

/**
 * The shape of `window.Capacitor` injected by the native shell. The bridge
 * only exposes `Plugins` proxies and the raw `addListener`/`nativePromise`
 * primitives — `registerPlugin` is an `@capacitor/core` JS export that only
 * exists when the web bundle ships the Capacitor runtime (this one doesn't).
 */
interface CapacitorBridge {
    isNativePlatform?: () => boolean;
    registerPlugin?: (name: string) => Record<string, any>;
    Plugins?: Record<string, Record<string, any> | undefined>;
    addListener?: (
        plugin_name: string,
        event_name: string,
        listener: (event: any) => void,
    ) => NativePluginHandle;
    nativePromise?: (
        plugin_name: string,
        method_name: string,
        options?: Record<string, any>,
    ) => Promise<any>;
}

let _native_url_listener: Promise<NativePluginHandle> | null = null;

function capacitor(): CapacitorBridge | null {
    return (window as any).Capacitor || null;
}

function nativePluginProxy(name: string): Record<string, any> | null {
    const cap = capacitor();
    if (cap?.Plugins?.[name]) return cap.Plugins[name];
    try {
        return cap?.registerPlugin?.(name) || null;
    } catch {
        return null;
    }
}

/** Listen to a native plugin event. Returns null when no bridge is found. */
function listenToNativeEvent(
    plugin_name: string,
    event_name: string,
    listener: (event: any) => void,
): Promise<NativePluginHandle> | null {
    const proxy = nativePluginProxy(plugin_name);
    if (proxy?.addListener) {
        return Promise.resolve(proxy.addListener(event_name, listener));
    }
    const cap = capacitor();
    if (cap?.addListener) {
        return Promise.resolve(
            cap.addListener(plugin_name, event_name, listener),
        );
    }
    return null;
}

/** Call a native plugin method. Returns null when no bridge is found. */
function callNativeMethod(
    plugin_name: string,
    method_name: string,
    options?: Record<string, any>,
): Promise<any> | null {
    const proxy = nativePluginProxy(plugin_name);
    if (typeof proxy?.[method_name] === 'function') {
        return proxy[method_name](options);
    }
    const cap = capacitor();
    if (cap?.nativePromise) {
        return cap.nativePromise(plugin_name, method_name, options);
    }
    return null;
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
    const normalised_name = `${app_name || ''}`.trim().toLowerCase();
    const app_id = NATIVE_APP_IDS[normalised_name];
    if (app_id) {
        localStorage.setItem(APP_ID_STORAGE_KEY, app_id);
        return app_id;
    }
    const cached_app_id = localStorage.getItem(APP_ID_STORAGE_KEY);
    if (!cached_app_id) {
        throw new Error(`Unsupported native app: ${app_name || 'unknown'}.`);
    }
    return cached_app_id;
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
    // With no domain the redirect is `app-id://oauth-resp`, which parses
    // with `oauth-resp` as the host instead of the path.
    return (
        callback_url.protocol === `${app_id}:` &&
        (callback_url.pathname === '/oauth-resp' ||
            (callback_url.hostname === 'oauth-resp' &&
                !callback_url.pathname.replace(/^\/+/, '')))
    );
}

export async function bindNativeAuthRedirects(
    listener: NativeUrlListener,
): Promise<void> {
    if (!isNativeApp() || _native_url_listener) return;
    const handle = listenToNativeEvent(
        'App',
        'appUrlOpen',
        async ({ url }: { url?: string }) => {
            try {
                if (!url) return;
                console.warn(`[AUTH] App opened with URL: ${url}`);
                if (!(await isNativeAuthRedirect(url))) {
                    console.warn('[AUTH] URL is not an auth redirect.');
                    return;
                }
                localStorage.setItem(LAST_AUTH_URL_STORAGE_KEY, url);
                listener(url);
            } catch (error) {
                console.warn('[AUTH] Error handling app URL.', error);
            }
        },
    );
    if (!handle) {
        console.warn('[AUTH] Capacitor App plugin is unavailable.');
        return;
    }
    _native_url_listener = handle;
    await handle.catch((error) => {
        _native_url_listener = null;
        console.warn('[AUTH] Failed to listen for app URLs.', error);
    });
}

/**
 * Mark an auth redirect as handled so it isn't re-processed after the
 * webview reloads. Called at the point of consumption (not on receipt), so
 * a redirect interrupted before handling is retried on the next launch.
 */
export function markNativeAuthRedirectConsumed(url: string): void {
    localStorage.setItem(CONSUMED_AUTH_URL_STORAGE_KEY, url);
    localStorage.removeItem(LAST_AUTH_URL_STORAGE_KEY);
}

export async function consumeNativeAuthRedirect(): Promise<string | null> {
    if (!isNativeApp()) return null;
    const launch_url = await callNativeMethod('App', 'getLaunchUrl')?.catch(
        () => null,
    );
    const url =
        launch_url?.url ||
        localStorage.getItem(LAST_AUTH_URL_STORAGE_KEY) ||
        '';
    if (!url) return null;
    const is_redirect = await isNativeAuthRedirect(url).catch((error) => {
        console.warn('[AUTH] Error checking launch URL.', error);
        return false;
    });
    if (!is_redirect) return null;
    if (url === localStorage.getItem(CONSUMED_AUTH_URL_STORAGE_KEY)) {
        console.warn('[AUTH] Launch URL already consumed.');
        return null;
    }
    console.warn(`[AUTH] Consuming auth redirect from launch URL: ${url}`);
    return url;
}

/**
 * Store the PKCE verifier in sessionStorage (where ts-client reads it during
 * the auth code exchange) and back it up to localStorage, as the OS can kill
 * the app while the user is signing in via the external browser — which
 * wipes sessionStorage and would otherwise break the exchange on relaunch.
 */
export function storeNativePkceVerifier(key: string, verifier: string): void {
    sessionStorage.setItem(key, verifier);
    localStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({ key, verifier }));
}

/** Re-seed the sessionStorage PKCE verifier from the localStorage backup. */
export function restoreNativePkceVerifier(): void {
    const raw = localStorage.getItem(PKCE_STORAGE_KEY);
    if (!raw) return;
    try {
        const { key, verifier } = JSON.parse(raw);
        if (key && verifier && !sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, verifier);
        }
    } catch {
        localStorage.removeItem(PKCE_STORAGE_KEY);
    }
}

/** Remove the PKCE verifier backup once sign-in has completed. */
export function clearNativePkceVerifier(): void {
    localStorage.removeItem(PKCE_STORAGE_KEY);
}

/** Persist an OAuth error so it can be shown after the webview reloads. */
export function setNativeAuthError(message: string): void {
    localStorage.setItem(AUTH_ERROR_STORAGE_KEY, message);
}

/** Retrieve and clear the stored OAuth error message. */
export function consumeNativeAuthError(): string {
    const message = localStorage.getItem(AUTH_ERROR_STORAGE_KEY) || '';
    localStorage.removeItem(AUTH_ERROR_STORAGE_KEY);
    return message;
}

/**
 * Hide the OS status bar so the webview renders truly fullscreen. The iOS
 * Info.plist hides it during launch; this keeps it hidden once the bridge
 * view controller takes over, and handles Android (where the launch theme
 * flags are ignored on 15+ in favour of WindowInsetsController).
 */
export async function hideNativeStatusBar(): Promise<void> {
    if (!isNativeApp()) return;
    await callNativeMethod('StatusBar', 'setOverlaysWebView', {
        overlay: true,
    })?.catch(() => null);
    await callNativeMethod('StatusBar', 'hide', { animation: 'NONE' })?.catch(
        () => null,
    );
}

export async function closeNativeBrowser(): Promise<void> {
    await callNativeMethod('Browser', 'close')?.catch(() => null);
}

export async function openNativeBrowser(url: string): Promise<void> {
    const opened = callNativeMethod('Browser', 'open', { url });
    if (!opened) {
        location.assign(url);
        return;
    }
    await opened.catch(() => location.assign(url));
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

/** Retrieve the stored API key, or null if none has been saved. */
export function getNativeApiKey(): string | null {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
}

/** Persist an API key to use for auth instead of the OAuth flow. */
export function setNativeApiKey(api_key: string): void {
    const value = `${api_key || ''}`.trim();
    if (!value) return clearNativeApiKey();
    localStorage.setItem(API_KEY_STORAGE_KEY, value);
}

/** Clear the stored API key. */
export function clearNativeApiKey(): void {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
}

/**
 * Normalise a user-entered server address to a bare `host[:port]` — the
 * form expected by `setNativeDomain`. Accepts full URLs or bare hosts.
 * Returns an empty string when the address can't be parsed.
 */
export function normaliseNativeDomain(address: string): string {
    let value = `${address || ''}`.trim();
    if (!value) return '';
    if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) value = `https://${value}`;
    try {
        const url = new URL(value);
        if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
        if (!url.hostname) return '';
        return url.port ? `${url.hostname}:${url.port}` : url.hostname;
    } catch {
        return '';
    }
}

/**
 * Settings pushed to the device by an MDM platform via managed app
 * configuration. Keys follow the native booking panel app convention:
 * https://docs.placeos.com/placeos/how-to/user-interfaces/native-booking-panel-app/
 */
export interface NativeManagedConfig {
    /** Normalised `host[:port]` from the `domainName` key. */
    domain: string;
    /** API key to authenticate with instead of the OAuth flow. */
    api_key: string;
    /** System for panel apps (booking panel/control) to bind to. */
    system_id: string;
    /** Whether to restart (reload) the app daily. Defaults to true. */
    restart_enabled: boolean;
    /** Hour of the day (0-23) to restart at. Defaults to midnight. */
    restart_time: number;
    /** Whether to apply settings without asking the user to confirm. */
    skip_interactive_setup: boolean;
}

async function readManagedValue<T>(
    method_name: 'getString' | 'getNumber' | 'getBoolean',
    key: string,
): Promise<T | null> {
    const result = callNativeMethod('ManagedConfigurations', method_name, {
        key,
    });
    if (!result) return null;
    const { value } = await result.catch(() => ({ value: null }));
    return value ?? null;
}

/**
 * Read the managed app configuration pushed by an MDM platform via the
 * ManagedConfigurations plugin. Returns null outside the native shell or
 * when no configuration has been pushed to the device.
 */
export async function loadNativeManagedConfig(): Promise<NativeManagedConfig | null> {
    if (!isNativeApp()) return null;
    const [
        domain_name,
        api_key,
        system_id,
        restart_time,
        restart_enabled,
        skip_setup,
    ] = await Promise.all([
        readManagedValue<string>('getString', 'domainName'),
        readManagedValue<string>('getString', 'apiKey'),
        readManagedValue<string>('getString', 'SystemId'),
        readManagedValue<number>('getNumber', 'restartTime'),
        readManagedValue<boolean>('getBoolean', 'restartEnabled'),
        readManagedValue<boolean>('getBoolean', 'skipInteractiveSetup'),
    ]);
    const domain = normaliseNativeDomain(`${domain_name || ''}`);
    if (!domain && !api_key && !system_id) return null;
    return {
        domain,
        api_key: `${api_key || ''}`.trim(),
        system_id: `${system_id || ''}`.trim(),
        restart_enabled: restart_enabled !== false,
        restart_time: Math.min(23, Math.max(0, Math.round(restart_time || 0))),
        skip_interactive_setup: skip_setup === true,
    };
}

/**
 * Persist the managed configuration as the active server settings.
 * Returns true when the configuration differs from the last one applied —
 * a re-push of identical settings doesn't disturb the local state.
 */
export function applyNativeManagedConfig(config: NativeManagedConfig): boolean {
    const fingerprint = JSON.stringify([
        config.domain,
        config.api_key,
        config.system_id,
    ]);
    if (localStorage.getItem(MANAGED_CONFIG_STORAGE_KEY) === fingerprint) {
        return false;
    }
    if (config.domain) {
        setNativeDomain(config.domain);
        setNativeApiKey(config.api_key);
    }
    if (config.system_id) {
        localStorage.setItem(SYSTEM_ID_STORAGE_KEY, config.system_id);
    } else {
        localStorage.removeItem(SYSTEM_ID_STORAGE_KEY);
    }
    localStorage.setItem(MANAGED_CONFIG_STORAGE_KEY, fingerprint);
    return true;
}

/** Retrieve the system ID provided via MDM managed configuration. */
export function getNativeSystemId(): string {
    return localStorage.getItem(SYSTEM_ID_STORAGE_KEY) || '';
}

let _restart_timer: ReturnType<typeof setTimeout> | null = null;

/**
 * Reload the webview at the next occurrence of the given hour. The reload
 * re-runs app initialisation, which re-reads the managed configuration and
 * schedules the following restart.
 */
export function scheduleNativeRestart(hour: number): void {
    if (!isNativeApp() || _restart_timer) return;
    const next = new Date();
    next.setHours(hour, 0, 0, 0);
    if (next.valueOf() <= Date.now()) next.setDate(next.getDate() + 1);
    _restart_timer = setTimeout(
        () => location.reload(),
        next.valueOf() - Date.now(),
    );
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

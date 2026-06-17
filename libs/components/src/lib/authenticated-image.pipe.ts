import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { apiKey, authority, token } from '@placeos/ts-client';

/**
 * Shared cache for authenticated images
 * Used by both AuthenticatedImageDirective and AuthenticatedImagePipe
 */
export const IMAGE_STORE = new Map<string, string>();
const SESSION_IMAGE_CACHE_NAME = 'PlaceOS.image-cache-v1';
const SESSION_IMAGE_CACHE_KEYS = 'PlaceOS.image-cache-keys-v1';

// Track loading state to prevent duplicate requests
const LOADING_STORE = new Map<string, Promise<string>>();
let _session_image_keys: string[] | null = null;

function getSessionImageKeys(): string[] {
    if (_session_image_keys) return _session_image_keys;
    if (typeof sessionStorage === 'undefined') return [];
    try {
        const stored_value = sessionStorage.getItem(SESSION_IMAGE_CACHE_KEYS);
        _session_image_keys = stored_value ? JSON.parse(stored_value) : [];
        return _session_image_keys;
    } catch {
        return [];
    }
}

function setSessionImageKeys(keys: string[]) {
    _session_image_keys = Array.from(new Set(keys));
    if (typeof sessionStorage === 'undefined') return;
    try {
        sessionStorage.setItem(
            SESSION_IMAGE_CACHE_KEYS,
            JSON.stringify(_session_image_keys),
        );
    } catch {}
}

async function getSessionImageCache() {
    if (typeof caches === 'undefined') return null;
    try {
        return await caches.open(SESSION_IMAGE_CACHE_NAME);
    } catch {
        return null;
    }
}

async function getSessionCachedResponse(source: string) {
    if (!getSessionImageKeys().includes(source)) return null;
    const cache = await getSessionImageCache();
    if (!cache) return null;
    try {
        return (await cache.match(source)) || null;
    } catch {
        return null;
    }
}

async function storeSessionCachedResponse(source: string, response: Response) {
    const cache = await getSessionImageCache();
    if (!cache) return;
    try {
        await cache.put(source, response);
        setSessionImageKeys([...getSessionImageKeys(), source]);
    } catch {}
}

export function setAuthCookie(cookie_path: string) {
    const tkn = token();
    document.cookie = `${
        tkn === 'x-api-key'
            ? 'api-key=' + encodeURIComponent(apiKey())
            : 'bearer_token=' + encodeURIComponent(tkn)
    };max-age=30;path=${cookie_path};samesite=strict;${
        location.protocol === 'https:' ? 'secure;' : ''
    }`;
}

async function responseToObjectUrl(source: string, response: Response) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    IMAGE_STORE.set(source, url);
    return url;
}

export async function loadAuthenticatedImage(
    source: string,
    cookie_path: string,
): Promise<string> {
    if (IMAGE_STORE.has(source)) return IMAGE_STORE.get(source);
    const cached_response = await getSessionCachedResponse(source);
    if (cached_response) {
        return responseToObjectUrl(source, cached_response);
    }
    setAuthCookie(cookie_path);
    const response = await fetch(source);
    if (!response || !response.ok) {
        throw new Error(`Failed to fetch image: ${response?.status}`);
    }
    void storeSessionCachedResponse(source, response.clone());
    return responseToObjectUrl(source, response);
}

@Pipe({
    name: 'authenticatedImage,authImage',
    pure: false, // Impure pipe to handle async loading
})
export class AuthenticatedImagePipe implements PipeTransform, OnDestroy {
    private _subscriptions = new Set<string>();

    ngOnDestroy() {
        // Cleanup if needed
        this._subscriptions.clear();
    }

    transform(source: string | undefined | null): string {
        if (!source || typeof source !== 'string') return '';

        if (!source.includes('/api/engine/v2/uploads')) return source;
        if (IMAGE_STORE.has(source)) return IMAGE_STORE.get(source);
        if (LOADING_STORE.has(source)) return '';

        this._loadImage(source);
        return '';
    }

    private async _loadImage(source: string): Promise<void> {
        if (!authority()) {
            // Retry after a delay if authority is not available yet
            setTimeout(() => LOADING_STORE.delete(source), 300);
            return;
        }

        // Mark as loading
        const loadPromise = this._fetchImage(source);
        LOADING_STORE.set(source, loadPromise);
        this._subscriptions.add(source);

        try {
            await loadPromise;
        } catch (error) {
            console.info('Failed to load image:', source, error);
        } finally {
            LOADING_STORE.delete(source);
            this._subscriptions.delete(source);
        }
    }

    private async _fetchImage(source: string): Promise<string> {
        return loadAuthenticatedImage(source, '/api/engine/v2/uploads');
    }
}

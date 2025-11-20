import {
    ChangeDetectorRef,
    OnDestroy,
    Pipe,
    PipeTransform,
    inject,
} from '@angular/core';
import { apiKey, authority, token } from '@placeos/ts-client';

/**
 * Shared cache for authenticated images
 * Used by both AuthenticatedImageDirective and AuthenticatedImagePipe
 */
export const IMAGE_STORE = new Map<string, string>();

// Track loading state to prevent duplicate requests
const LOADING_STORE = new Map<string, Promise<string>>();

@Pipe({
    name: 'authenticatedImage,authImage',
    pure: false, // Impure pipe to handle async loading
})
export class AuthenticatedImagePipe implements PipeTransform, OnDestroy {
    private _cdr = inject(ChangeDetectorRef);
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
            setTimeout(() => {
                LOADING_STORE.delete(source);
                this._cdr.markForCheck();
            }, 300);
            return;
        }

        // Mark as loading
        const loadPromise = this._fetchImage(source);
        LOADING_STORE.set(source, loadPromise);
        this._subscriptions.add(source);

        try {
            const url = await loadPromise;
            IMAGE_STORE.set(source, url);
        } catch (error) {
            console.info('Failed to load image:', source, error);
        } finally {
            LOADING_STORE.delete(source);
            this._subscriptions.delete(source);
            // Trigger change detection to update the view with the loaded image
            this._cdr.markForCheck();
        }
    }

    private async _fetchImage(source: string): Promise<string> {
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;

        const response = await fetch(source);

        if (!response || !response.ok) {
            throw new Error(`Failed to fetch image: ${response?.status}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }
}

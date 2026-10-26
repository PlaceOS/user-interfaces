import {
    Directive,
    ElementRef,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { authority } from '@placeos/ts-client';

import { AsyncHandler } from '@placeos/common';
import {
    getCachedAuthenticatedImage,
    loadAuthenticatedImage,
    loadAuthenticatedImageWithHeader,
} from './authenticated-image.pipe';

type AuthenticatedMediaElement =
    | HTMLImageElement
    | HTMLVideoElement
    | HTMLAudioElement;

@Directive({
    selector: 'img[auth], video[auth], audio[auth]',
})
export class AuthenticatedImageDirective
    extends AsyncHandler
    implements OnChanges, OnDestroy
{
    private readonly _element =
        inject<ElementRef<AuthenticatedMediaElement>>(ElementRef);
    private _observer: IntersectionObserver | null = null;
    private _source_version = 0;

    public readonly source = input<string>(undefined);

    public ngOnChanges(changes: SimpleChanges): void {
        if (!changes.source) return;
        this._source_version += 1;
        this.clearTimeout('load');
        this._observer?.disconnect();
        this._observer = null;

        const source = this.source();
        if (!source) return;
        if (!this._isLocalUrl(source)) {
            this._element.nativeElement.src = source;
            return;
        }
        this._loadWhenVisible(source, this._source_version);
    }

    public override ngOnDestroy(): void {
        this._observer?.disconnect();
        this._observer = null;
        super.ngOnDestroy();
    }

    private _loadWhenVisible(source: string, version: number): void {
        if (typeof IntersectionObserver === 'undefined') {
            void this._loadImage(source, version);
            return;
        }
        this._observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some(({ isIntersecting }) => isIntersecting)) {
                    return;
                }
                this._observer?.disconnect();
                this._observer = null;
                void this._loadImage(source, version);
            },
            { rootMargin: '300px' },
        );
        this._observer.observe(this._element.nativeElement);
    }

    private async _loadImage(source: string, version: number): Promise<void> {
        if (version !== this._source_version || source !== this.source())
            return;
        if (!authority()) {
            this.timeout(
                'load',
                () => void this._loadImage(source, version),
                300,
            );
            return;
        }

        const cached = getCachedAuthenticatedImage(source);
        if (cached) {
            this._element.nativeElement.src = cached;
            return;
        }

        const is_api =
            source.includes('/api/engine/v2/uploads') ||
            source.includes('/api/engine/v2/signage');
        try {
            const url = is_api
                ? await loadAuthenticatedImage(source, this._cookiePath(source))
                : await loadAuthenticatedImageWithHeader(source);
            if (version === this._source_version && source === this.source()) {
                this._element.nativeElement.src = url;
            }
        } catch (error) {
            if (version === this._source_version) {
                this._element.nativeElement.dispatchEvent(
                    new ErrorEvent('error', { error }),
                );
            }
        }
    }

    /** Whether the source resolves to the current origin. */
    private _isLocalUrl(source: string): boolean {
        try {
            return new URL(source, location.href).origin === location.origin;
        } catch {
            return false;
        }
    }

    /** Return the narrowest cookie path that includes the resource. */
    private _cookiePath(source: string): string {
        return source.includes('/api/engine/v2/uploads')
            ? '/api/engine/v2/uploads'
            : '/api/engine/v2/signage';
    }
}

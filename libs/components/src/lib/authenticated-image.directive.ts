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
    setAuthCookie,
} from './authenticated-image';

/** Time between auth cookie updates for streamed media, below its 30s life */
const AUTH_COOKIE_REFRESH = 20 * 1000;

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
        this.clearInterval('auth_cookie');
        this.unsub('media_events');
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

        const is_api =
            source.includes('/api/engine/v2/uploads') ||
            source.includes('/api/engine/v2/signage');
        if (
            is_api &&
            !(this._element.nativeElement instanceof HTMLImageElement)
        ) {
            this._streamMedia(source);
            return;
        }

        const cached = getCachedAuthenticatedImage(source);
        if (cached) {
            this._element.nativeElement.src = cached;
            return;
        }

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

    /**
     * Let the browser stream video and audio with range requests, in place
     * of downloading the whole file first. The auth cookie only lasts 30
     * seconds, so it is set again on a timer, and before the events that
     * start new requests, as hidden tabs can delay timers for a minute.
     */
    private _streamMedia(source: string): void {
        const media = this._element.nativeElement as
            | HTMLVideoElement
            | HTMLAudioElement;
        const cookie_path = this._cookiePath(source);
        const renew = () => setAuthCookie(cookie_path);
        let retried = false;
        // An expired cookie fails the request, so retry once with a new one
        const recover = () => {
            if (retried) return;
            retried = true;
            renew();
            const time = media.currentTime;
            const was_playing = !media.paused;
            media.load();
            media.currentTime = time;
            // Loading pauses the element, so continue if it was playing
            if (was_playing) void media.play().catch(() => undefined);
        };
        const events = ['play', 'seeking', 'waiting'];
        for (const name of events) media.addEventListener(name, renew);
        media.addEventListener('error', recover);
        document.addEventListener('visibilitychange', renew);
        this.subscription('media_events', () => {
            for (const name of events) media.removeEventListener(name, renew);
            media.removeEventListener('error', recover);
            document.removeEventListener('visibilitychange', renew);
        });
        renew();
        this.interval('auth_cookie', renew, AUTH_COOKIE_REFRESH);
        media.src = source;
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

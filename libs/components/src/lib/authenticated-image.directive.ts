import {
    Directive,
    ElementRef,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { authority } from '@placeos/ts-client';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import {
    IMAGE_STORE,
    loadAuthenticatedImage,
    loadAuthenticatedImageWithHeader,
} from './authenticated-image.pipe';

@Directive({
    selector: 'img[auth], video[auth], audio[auth]',
})
export class AuthenticatedImageDirective
    extends AsyncHandler
    implements OnChanges
{
    private _element =
        inject<
            ElementRef<HTMLImageElement | HTMLVideoElement | HTMLAudioElement>
        >(ElementRef);

    public readonly source = input<string>(undefined);

    constructor() {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.source && this.source()) this._loadImage();
    }

    private async _loadImage() {
        const source = this.source();
        if (typeof source !== 'string') return;
        if (!this._element || !authority()) {
            return this.timeout('load', () => this._loadImage(), 300);
        }
        // External URLs aren't authenticated against this origin
        if (!this._isLocalUrl(source)) {
            this._element.nativeElement.src = source;
            return;
        }
        // If image has already been loaded, just use the cached version
        if (IMAGE_STORE.has(source)) {
            this._element.nativeElement.src = IMAGE_STORE.get(source);
            return;
        }
        const is_api =
            source.includes('/api/engine/v2/uploads') ||
            source.includes('/api/engine/v2/signage');
        try {
            this._element.nativeElement.src = is_api
                ? await loadAuthenticatedImage(source, this._cookiePath(source))
                : await loadAuthenticatedImageWithHeader(source);
        } catch (error) {
            this._element.nativeElement.dispatchEvent(
                new ErrorEvent('error', { error }),
            );
        }
    }

    /** Whether the source resolves to the current origin */
    private _isLocalUrl(source: string): boolean {
        try {
            return new URL(source, location.href).origin === location.origin;
        } catch {
            return false;
        }
    }

    /** Cookie path scoped to the resource so the auth cookie is sent on fetch */
    private _cookiePath(source: string): string {
        return source.includes('/api/engine/v2/uploads')
            ? '/api/engine/v2/uploads'
            : '/api/engine/v2/signage';
    }
}

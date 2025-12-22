import {
    Directive,
    ElementRef,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { apiKey, authority, token } from '@placeos/ts-client';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { IMAGE_STORE } from './authenticated-image.pipe';

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
        const is_upload = source.includes('/api/engine/v2/uploads');
        const is_thumbnail = source.includes('/api/engine/v2/signage/media');
        // If not an API call, just load the image
        if (!is_upload && !is_thumbnail) {
            this._element.nativeElement.src = source;
            return;
        }
        // If image has already been loaded, just use the cached version
        if (IMAGE_STORE.has(source)) {
            this._element.nativeElement.src = IMAGE_STORE.get(source);
            return;
        }
        const tkn = token();
        const cookie_path = is_upload
            ? '/api/engine/v2/uploads'
            : '/api/engine/v2/signage';
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=30;path=${cookie_path};samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
        let response = null;
        try {
            response = await fetch(source).catch((_) => null);
        } catch {}
        if (!response || !response.ok) {
            console.info('Failed to load image:', source);
            return;
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        IMAGE_STORE.set(source, url);
        this._element.nativeElement.src = url;
    }
}

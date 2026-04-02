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
        const cookie_path = is_upload
            ? '/api/engine/v2/uploads'
            : '/api/engine/v2/signage';
        try {
            this._element.nativeElement.src = await loadAuthenticatedImage(
                source,
                cookie_path,
            );
        } catch {}
    }
}

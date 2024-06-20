import {
    Directive,
    ElementRef,
    Host,
    Input,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { apiKey, authority, token } from '@placeos/ts-client';

const IMAGE_STORE = new Map<string, string>();

@Directive({
    selector: 'img [auth]',
})
export class AuthenticatedImageDirective extends AsyncHandler {
    @Input() public source: string;

    constructor(private _image_el: ElementRef<HTMLImageElement>) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.source && this.source) this._loadImage();
    }

    private async _loadImage() {
        if (!this._image_el || !authority()) {
            return this.timeout('load', () => this._loadImage(), 300);
        }
        // If not an API call, just load the image
        if (!this.source.includes('/api/engine/v2/uploads')) {
            this._image_el.nativeElement.src = this.source;
            return;
        }
        // If image has already been loaded, just use the cached version
        if (IMAGE_STORE.has(this.source)) {
            this._image_el.nativeElement.src = IMAGE_STORE.get(this.source);
            return;
        }
        const tkn = token();
        console.log('Image Token:', tkn);
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
        const response = await fetch(this.source);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        IMAGE_STORE.set(this.source, url);
        this._image_el.nativeElement.src = url;
    }
}

import { Pipe, PipeTransform, SecurityContext, inject } from '@angular/core';
import {
    DomSanitizer,
    SafeHtml,
    SafeResourceUrl,
    SafeScript,
    SafeStyle,
} from '@angular/platform-browser';

@Pipe({
    name: 'safe',
})
export class SafePipe implements PipeTransform {
    private sanitizer = inject(DomSanitizer);

    /**
     * Marks the string as trusted, so it can be injected into a template.
     * A `url` or `resource` that runs script, such as `javascript:`, is not
     * trusted. It becomes `null` for `url` and an empty URL for `resource`.
     * @param value String to trust
     * @param type Type of value to trust. `resource`, `url`, `script`, `style` or `html`
     */
    public transform(
        value: string,
        type: 'resource' | 'url' | 'script' | 'style' | 'html' = 'html',
    ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle | null {
        switch (type) {
            case 'resource':
                // A resource URL context throws on `null`, so use an empty URL
                return this.sanitizer.bypassSecurityTrustResourceUrl(
                    this._isSafeUrl(value) ? value : '',
                );
            case 'url':
                return this._isSafeUrl(value)
                    ? this.sanitizer.bypassSecurityTrustUrl(value)
                    : null;
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            default:
                return this.sanitizer.bypassSecurityTrustHtml(value);
        }
    }

    /** True when Angular's URL check leaves the URL as is */
    private _isSafeUrl(url: string) {
        return this.sanitizer.sanitize(SecurityContext.URL, url) === url;
    }
}

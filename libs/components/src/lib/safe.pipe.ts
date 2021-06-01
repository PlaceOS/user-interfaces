import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    /**
     * Sanitizes the string allowing it to be injected into a template
     * @param value String to sanitize
     * @param type Type of value to sanitise. `resource`, `url`, `script`, `style` or `html`
     */
    public transform(
        value: string,
        type: 'resource' | 'url' | 'script' | 'style' | 'html' = 'html'
    ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle {
        switch (type) {
            case 'resource':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            default:
                return this.sanitizer.bypassSecurityTrustHtml(value);
        }
    }
}

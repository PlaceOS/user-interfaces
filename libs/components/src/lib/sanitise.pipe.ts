import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle } from '@angular/platform-browser';

enum SecurityContext {
    NONE = 0,
    HTML = 1,
    STYLE = 2,
    SCRIPT = 3,
    URL = 4,
    RESOURCE_URL = 5
}

@Pipe({
    name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(
        value: any,
        type: 'resource' | 'url' | 'script' | 'style' | 'html' = 'html'
    ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle {
        switch (type) {
            case 'resource':
                return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
            case 'url':
                return this.sanitizer.sanitize(SecurityContext.URL, value);
            case 'script':
                return this.sanitizer.sanitize(SecurityContext.SCRIPT, value);
            case 'style':
                return this.sanitizer.sanitize(SecurityContext.STYLE, value);
            default:
                return this.sanitizer.sanitize(SecurityContext.HTML, value);
        }
    }
}

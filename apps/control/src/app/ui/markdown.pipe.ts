import { Pipe, PipeTransform, SecurityContext, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { marked } from 'marked';

/**
 * Inline style properties that help content can set, for layouts such as columns and image sizes.
 * Position, stacking and transforms are not on the list, so content cannot cover the rest of the app.
 */
const ALLOWED_STYLE =
    /^(display|float|clear|(min-|max-)?(width|height)|margin(-[a-z-]+)?|padding(-[a-z-]+)?|border(-[a-z-]+)?|text-(align|decoration[a-z-]*)|vertical-align|color|background-color|font-(size|style|weight)|list-style(-[a-z-]+)?|gap|row-gap|column-gap|flex(-[a-z-]+)?|justify-content|align-(items|self))$/;
/** Class prefix that marks an element with a kept style while Angular sanitises the HTML */
const STYLE_MARK = 'md-style-';

/** Allowed declarations of an inline style. Values with `url()` are removed. */
function allowedStyle(style: CSSStyleDeclaration) {
    const kept: string[] = [];
    for (let i = 0; i < style.length; i++) {
        const name = style.item(i);
        const value = style.getPropertyValue(name);
        if (!ALLOWED_STYLE.test(name) || /url\s*\(/i.test(value)) continue;
        kept.push(`${name}: ${value}`);
    }
    return kept.join('; ');
}

/**
 * Render markdown, or HTML in markdown, to HTML that is safe to show.
 * Angular's sanitiser removes scripts, event handlers and unsafe URLs. It also removes all inline styles,
 * so allowed style properties are kept aside and put back after it runs.
 * The HTML is parsed in an inert document, so scripts do not run and images do not load.
 */
export function renderMarkdown(
    value: string | null | undefined,
    sanitizer: DomSanitizer,
): string {
    if (!value) return '';
    const html = marked(value, { async: false }) as string;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const styles: string[] = [];
    for (const el of doc.body.querySelectorAll<HTMLElement>('[style]')) {
        const style = allowedStyle(el.style);
        el.removeAttribute('style');
        if (!style) continue;
        el.classList.add(`${STYLE_MARK}${styles.length}`);
        styles.push(style);
    }
    const clean =
        sanitizer.sanitize(SecurityContext.HTML, doc.body.innerHTML) || '';
    if (!styles.length) return clean;
    const out = parser.parseFromString(clean, 'text/html');
    for (const el of out.body.querySelectorAll<HTMLElement>(
        `[class*="${STYLE_MARK}"]`,
    )) {
        for (const name of [...el.classList]) {
            if (!name.startsWith(STYLE_MARK)) continue;
            el.classList.remove(name);
            const style = styles[+name.slice(STYLE_MARK.length)];
            if (style) el.setAttribute('style', style);
        }
        if (!el.classList.length) el.removeAttribute('class');
    }
    return out.body.innerHTML;
}

/** Render markdown help content. Bind the result to `[innerHTML]`. */
@Pipe({
    name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
    private _sanitizer = inject(DomSanitizer);

    public transform(value: string | null | undefined): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(
            renderMarkdown(value, this._sanitizer),
        );
    }
}

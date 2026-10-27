import { LiveAnnouncer } from '@angular/cdk/a11y';
import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

/**
 * Screen readers read the text of the element when it renders. Use on
 * messages that show in place of other content, such as loading messages
 * and warnings. A `role="status"` element that renders with its text is not
 * read reliably, but the live region of `LiveAnnouncer` is always on the page.
 */
@Directive({ selector: '[announce]' })
export class AnnounceDirective {
    constructor() {
        const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
        const announcer = inject(LiveAnnouncer);
        afterNextRender(() => {
            const text = el.textContent?.trim();
            if (text) announcer.announce(text, 'polite');
        });
    }
}

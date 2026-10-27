import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

/**
 * Put on the main heading of each kiosk step. When the heading renders and
 * no element has focus, the heading gets focus, so screen readers read the
 * new step. This also covers steps that show a loading state first.
 */
@Directive({
    selector: '[pageHeading]',
    host: { tabindex: '-1' },
})
export class PageHeadingDirective {
    constructor() {
        const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
        afterNextRender(() => {
            const active = document.activeElement;
            if (active && active !== document.body) return;
            el.focus({ preventScroll: true });
        });
    }
}

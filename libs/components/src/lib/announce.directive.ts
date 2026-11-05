import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
    afterNextRender,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    Injector,
} from '@angular/core';
import { LocaleService } from '@placeos/common';

/**
 * Screen readers read the text of the element when it renders, and again
 * when the text changes. Use on messages that show in place of other content,
 * such as loading messages and warnings. A `role="status"` element that
 * renders with its text is not read reliably, but the live region of
 * `LiveAnnouncer` is always on the page.
 */
@Directive({ selector: '[announce]' })
export class AnnounceDirective {
    constructor() {
        const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
        const announcer = inject(LiveAnnouncer);
        const locale = inject(LocaleService);
        const injector = inject(Injector);
        const destroy_ref = inject(DestroyRef);
        let last_text = '';
        const announceText = () => {
            const text = el.textContent?.trim() ?? '';
            if (!text || text === last_text) return;
            last_text = text;
            announcer.announce(text, 'polite');
        };
        afterNextRender(async () => {
            // Text that renders before the translations load shows the key.
            // Wait for them, then read the text after the next render.
            await locale.loaded();
            // The element can be gone by then, e.g. a loading message.
            if (destroy_ref.destroyed) return;
            afterNextRender(announceText, { injector });
            // Read the text again when it changes in place
            const observer = new MutationObserver(announceText);
            observer.observe(el, {
                characterData: true,
                childList: true,
                subtree: true,
            });
            destroy_ref.onDestroy(() => observer.disconnect());
        });
    }
}

import { afterNextRender, Injector } from '@angular/core';

/**
 * Focus the element that has focus now again after the next render. Call it
 * before a change that reorders a tracked `@for` list: Angular moves a row by
 * detaching it, and a detached element loses focus.
 */
export function restoreFocusAfterRender(injector: Injector) {
    const element = document.activeElement as HTMLElement | null;
    afterNextRender(
        () => {
            if (element?.isConnected && document.activeElement !== element) {
                element.focus();
            }
        },
        { injector },
    );
}

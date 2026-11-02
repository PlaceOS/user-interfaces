import { afterRenderEffect, type ElementRef } from '@angular/core';

/**
 * Keep the row of the selected item in view, such as after a route opens an
 * item further down a list. Rows must be in the same order as the items.
 *
 * Creates an after-render effect, so call it in an injection context.
 * @param items Items of the list
 * @param rows Row element of each item, such as from `viewChildren`
 * @param selected Item to show
 */
export function scrollSelectionIntoView<T extends { id: string }>(
    items: () => readonly T[],
    rows: () => readonly ElementRef<HTMLElement>[],
    selected: () => T | null | undefined,
) {
    afterRenderEffect({
        earlyRead: () => {
            const selected_id = selected()?.id;
            if (!selected_id) return;
            const index = items().findIndex(({ id }) => id === selected_id);
            return rows()[index]?.nativeElement;
        },
        write: (row) => {
            row()?.scrollIntoView?.({
                behavior: 'instant',
                block: 'nearest',
                inline: 'nearest',
            });
        },
    });
}

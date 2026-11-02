import { Component, ElementRef, inject, input, model } from '@angular/core';
import { TranslatePipe } from '@placeos/components';

/** One tab of a `<section-tabs>` bar */
export interface SectionTab<T extends string> {
    readonly id: T;
    /** Translation key of the tab name */
    readonly label: string;
    /** Number in a badge after the name. Leave it out for no badge. */
    readonly count?: number;
    /** Shows "?" in the badge and marks it busy while the count loads */
    readonly count_loading?: boolean;
}

/**
 * Index of the tab that a key moves to in a tab list of `count` tabs.
 * Home and End go to the ends, the arrow keys wrap around.
 * @returns The new index, or null when the key does not move between tabs
 */
export function tabKeyIndex(key: string, index: number, count: number) {
    if (key === 'Home') return 0;
    if (key === 'End') return count - 1;
    if (key === 'ArrowLeft') return (index - 1 + count) % count;
    if (key === 'ArrowRight') return (index + 1) % count;
    return null;
}

/**
 * Tab bar of a section. Only the active tab is in the tab order. The arrow
 * keys, Home and End move between the tabs.
 *
 * Each tab gets the id `{id_prefix}-{id}-tab` and controls the panel
 * `{id_prefix}-{id}-panel`. Set the `aria-label` and the layout classes, such as
 * `flex`, on the host element, which is the tab list.
 */
@Component({
    selector: 'section-tabs',
    imports: [TranslatePipe],
    host: {
        role: 'tablist',
        '(keydown)': 'onKeydown($event)',
    },
    template: `
        @for (tab of tabs(); track tab.id) {
            <button
                type="button"
                role="tab"
                class="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors"
                [class.border-primary]="active() === tab.id"
                [class.border-b-2]="active() === tab.id"
                [class.text-primary]="active() === tab.id"
                [class.opacity-60]="active() !== tab.id"
                [attr.aria-selected]="active() === tab.id"
                [attr.aria-controls]="id_prefix() + '-' + tab.id + '-panel'"
                [attr.tabindex]="active() === tab.id ? 0 : -1"
                [id]="id_prefix() + '-' + tab.id + '-tab'"
                (click)="active.set(tab.id)"
            >
                {{ tab.label | translate }}
                @if (tab.count !== undefined) {
                    <span
                        class="bg-base-content/5 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tabular-nums"
                        [attr.aria-busy]="!!tab.count_loading"
                    >
                        {{ tab.count_loading ? '?' : tab.count }}
                    </span>
                }
            </button>
        }
    `,
})
export class SectionTabsComponent<T extends string> {
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly tabs = input.required<readonly SectionTab<T>[]>();
    public readonly active = model.required<T>();
    /** Start of the tab and panel ids */
    public readonly id_prefix = input.required<string>();

    /** Move to and focus the tab that an arrow, Home or End key points to */
    public onKeydown(event: KeyboardEvent) {
        const tabs = this.tabs();
        const next = tabKeyIndex(
            event.key,
            tabs.findIndex(({ id }) => id === this.active()),
            tabs.length,
        );
        if (next === null) return;
        event.preventDefault();
        this.active.set(tabs[next].id);
        this._element.nativeElement
            .querySelectorAll<HTMLElement>('[role="tab"]')
            [next]?.focus();
    }
}

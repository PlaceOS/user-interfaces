import { Component, DOCUMENT, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IconComponent, TranslatePipe } from '@placeos/components';

import {
    findShortcutTarget,
    KEYBOARD_SHORTCUTS,
    SHORTCUTS_HELP_KEY,
} from './keyboard-shortcuts.service';

/** Lists the keyboard shortcuts and shows which work on the current page */
@Component({
    selector: 'keyboard-shortcuts-modal',
    template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SHORTCUTS_TITLE' | translate }}</h2>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="w-md p-4">
            <ul class="flex flex-col gap-2">
                @for (item of shortcuts; track item.label) {
                    <li
                        class="flex items-center gap-4"
                        [class.opacity-40]="!item.available"
                        [attr.title]="
                            item.available
                                ? null
                                : ('APP.CONCIERGE.SHORTCUTS_UNAVAILABLE'
                                  | translate)
                        "
                    >
                        <kbd
                            class="border-base-300 bg-base-200 min-w-8 rounded-sm border px-2 py-1 text-center font-mono text-sm"
                        >
                            {{ item.label }}
                        </kbd>
                        <span class="flex-1">
                            {{ item.description | translate }}
                        </span>
                    </li>
                }
            </ul>
        </main>
    `,
    imports: [MatDialogModule, IconComponent, TranslatePipe],
})
export class KeyboardShortcutsModalComponent {
    private _document = inject(DOCUMENT);

    public readonly shortcuts = [
        ...KEYBOARD_SHORTCUTS.map((_) => ({
            label: _.label,
            description: _.description,
            available: !!findShortcutTarget(this._document, _.target),
        })),
        {
            label: SHORTCUTS_HELP_KEY,
            description: 'APP.CONCIERGE.SHORTCUTS_HELP',
            available: true,
        },
    ];
}

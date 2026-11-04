import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { marked } from 'marked';
import { FullscreenModalShellComponent } from './fullscreen-modal-shell.component';
import { IconComponent } from './icon.component';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    template: `
        <fullscreen-modal-shell [heading]="'Changelog'" [hide_confirm]="true">
            @if (changelog()) {
                <div class="markdown" [innerHTML]="changelog()"></div>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2"
                >
                    <icon class="text-3xl">close</icon>
                    <div class="text">No changelog</div>
                </div>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [FullscreenModalShellComponent, IconComponent],
})
export class ChangelogModalComponent {
    private _data = inject<ChangelogModalData>(MAT_DIALOG_DATA);

    /** Whether the changelog is loading */
    public loading = signal(false);

    /** HTML string for the change log. Angular sanitises it on render. */
    public readonly changelog = computed<string>(
        () => marked(this._data.changelog || '', { async: false }) as any,
    );
}

import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { marked } from 'marked';
import { FullscreenModalShellComponent } from './fullscreen-modal-shell.component';
import { IconComponent } from './icon.component';
import { SafePipe } from './safe.pipe';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    template: `
        <fullscreen-modal-shell [heading]="'Changelog'" [hide_confirm]="true">
            @if (changelog) {
                <div
                    class="markdown"
                    [innerHTML]="changelog | safe: 'html'"
                ></div>
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
    imports: [FullscreenModalShellComponent, SafePipe, IconComponent],
})
export class ChangelogModalComponent {
    private _data = inject<ChangelogModalData>(MAT_DIALOG_DATA);

    /** Whether the changelog is loading */
    public loading: boolean;

    /** HTML string for rendering the change log */
    public get changelog(): string {
        return marked(this._data.changelog || '', { async: false }) as any;
    }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { marked } from 'marked';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    template: `
        <fullscreen-modal-shell [heading]="'Changelog'" [hide_confirm]="true">
            <div
                *ngIf="changelog; else empty_state"
                class="markdown"
                [innerHTML]="changelog | safe: 'html'"
            ></div>
        </fullscreen-modal-shell>
        <ng-template #empty_state>
            <div class="flex flex-col items-center justify-center space-y-2">
                <icon class="text-3xl">close</icon>
                <div class="text">No changelog</div>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class ChangelogModalComponent {
    /** Whether the changelog is loading */
    public loading: boolean;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ChangelogModalData) {}

    /** HTML string for rendering the change log */
    public get changelog(): string {
        return marked(this._data.changelog || '', { async: false }) as any;
    }
}

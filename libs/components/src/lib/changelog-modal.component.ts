import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { marked } from 'marked';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    template: `
        <header>
            <h3 mat-dialog-title>Changelog</h3>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="markdown max-h-[65vh] max-w-[80vw] overflow-auto p-4"
            *ngIf="changelog; else empty_state"
            [innerHTML]="changelog | safe: 'html'"
        ></main>
        <ng-template #empty_state>
            <div class="flex flex-col items-center justify-center space-y-2">
                <app-icon class="text-3xl">close</app-icon>
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

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Space } from '@placeos/spaces';

import { generateQRCode } from 'libs/common/src/lib/qr-code';

@Component({
    selector: 'explore-book-qr',
    template: `
        <header>
            <h2 class="truncate">Book - {{ space?.name }}</h2>
            <div class="flex-1"></div>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4">
            <img class="w-64 h-64 m-auto" [src]="qr_code" />
        </main>
    `,
    styles: [``],
})
export class ExploreBookQrComponent {
    public readonly space = this._data.space;
    public readonly qr_code = generateQRCode(
        `${location.origin}#/workplace/explore?space=${this._data.space?.email}`
    );
    constructor(@Inject(MAT_DIALOG_DATA) public _data: { space: Space }) {}
}

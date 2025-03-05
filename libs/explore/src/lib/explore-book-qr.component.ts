import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { Space } from 'libs/spaces/src/lib/space.class';

const DEFAULT_PATH = `workplace/#/explore?space={{id}}`;

@Component({
    selector: 'explore-book-qr',
    template: `
        <header>
            <h2 class="truncate">
                {{ 'EXPLORE.BOOK_RESOURCE' | translate: { name: space?.name } }}
            </h2>
            <div class="flex-1"></div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code" />
        </main>
    `,
    styles: [``],
    standalone: false,
})
export class ExploreBookQrComponent {
    public readonly space = this._data.space;
    public readonly qr_code = generateQRCode(
        `${location.origin}${(
            this._settings.get('app.booking_qr_path') || DEFAULT_PATH
        ).replace('{{id}}', this._data.space?.email)}`,
    );
    constructor(
        @Inject(MAT_DIALOG_DATA) public _data: { space: Space },
        private _settings: SettingsService,
    ) {}
}

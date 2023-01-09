import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import { generateQRCode } from 'libs/common/src/lib/qr-code';

const DEFAULT_PATH = `workplace/#/explore?space={{id}}`;

@Component({
    selector: 'explore-book-qr',
    template: `
        <header>
            <h2 class="truncate" i18n>Book - {{ space?.name }}</h2>
            <div class="flex-1"></div>
            <button icon mat-dialog-close>
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
        `${location.origin}${(
            this._settings.get('app.booking_qr_path') || DEFAULT_PATH
        ).replace('{{id}}', this._data.space?.email)}`
    );
    constructor(
        @Inject(MAT_DIALOG_DATA) public _data: { space: Space },
        private _settings: SettingsService
    ) {}
}

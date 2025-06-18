import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

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
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code" />
        </main>
    `,
    styles: [``],
    imports: [TranslatePipe, MatRippleModule, IconComponent],
})
export class ExploreBookQrComponent {
    _data = inject<{
        space: Space;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);

    public readonly space = this._data.space;
    public readonly qr_code = generateQRCode(
        `${location.origin}${(
            this._settings.get('app.booking_qr_path') || DEFAULT_PATH
        ).replace('{{id}}', this._data.space?.email)}`,
    );
}

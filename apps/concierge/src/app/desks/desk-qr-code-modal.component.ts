import { Component } from '@angular/core';
import { DesksStateService } from './desks-state.service';
import { SettingsService } from '@placeos/common';

import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { map } from 'rxjs/operators';

@Component({
    selector: 'desk-qr-code-modal',
    template: `
        <div class="relative w-screen min-h-screen bg-base-100 rounded-none">
            <div
                class="sticky top-0 flex items-center justify-between print:hidden p-4 w-full"
            >
                <button btn matRipple (click)="print()">Print QR Codes</button>
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex flex-wrap overflow-auto print:h-auto h-[calc(100vh-5rem)]"
            >
                <div
                    *ngFor="let desk of desks | async"
                    class="flex flex-col items-center justify-center w-[28%] print:h-[25vh] mx-auto"
                >
                    <div
                        class="block p-2 mx-4 my-2 rounded-lg border border-base-200 bg-base-100"
                    >
                        <img class="w-48" [src]="desk[1]" />
                    </div>
                    <div
                        class="w-[calc(100%-2rem)] text-center my-1 font-mono text-sm bg-base-200 rounded p-1 mx-4"
                    >
                        {{ desk[0] }}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class DeskQrCodeModalComponent {
    public readonly desks = this._state.desks.pipe(
        map((list) => list.map((_) => [_.name || _.id, this.loadQrCode(_)])),
    );

    public get kiosk_url() {
        const path =
            this._settings.get('app.workplace_url_path') || '/workplace';
        return `${window.location.origin}${path}`;
    }

    constructor(
        private _settings: SettingsService,
        private _state: DesksStateService,
    ) {}

    public loadQrCode(item: any) {
        const link = `${
            this.kiosk_url
        }/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
        item.qr_link = link;
        item.qr_code = generateQRCode(link);
        return item.qr_code;
    }

    public print() {
        window.print();
    }
}

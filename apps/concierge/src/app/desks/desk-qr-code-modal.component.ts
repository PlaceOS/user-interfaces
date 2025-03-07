import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { DesksStateService } from './desks-state.service';

import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { map } from 'rxjs/operators';

@Component({
    selector: 'desk-qr-code-modal',
    template: `
        <div class="relative min-h-screen w-screen rounded-none bg-base-100">
            <div
                class="sticky top-0 flex w-full items-center justify-between p-4 print:hidden"
            >
                <button btn matRipple (click)="print()">
                    {{ 'APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST' | translate }}
                </button>
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div
                class="flex h-[calc(100vh-5rem)] flex-wrap overflow-auto print:h-auto"
            >
                <a
                    [href]="desk.qr_link | safe: 'url'"
                    target="_blank"
                    ref="noopener noreferrer"
                    *ngFor="let desk of desks | async"
                    class="mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]"
                >
                    <div
                        class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                    >
                        <img class="w-48" [src]="desk.qr_code" />
                    </div>
                    <div
                        class="mx-4 my-1 w-[calc(100%-2rem)] rounded bg-base-200 p-1 text-center font-mono text-sm"
                    >
                        {{ desk.name || desk.id }}
                    </div>
                </a>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class DeskQrCodeModalComponent {
    public readonly print = () => window.print();

    public readonly desks = this._state.desks.pipe(
        map((list) =>
            list.map((_) => {
                this.loadQrCode(_);
                return _;
            }),
        ),
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
}

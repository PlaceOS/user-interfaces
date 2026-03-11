import { Component, computed, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { DesksStateService } from './desks-state.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { generateQRCode } from '@placeos/common';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'desk-qr-code-modal',
    template: `
        <div class="bg-base-100 relative min-h-screen w-screen rounded-none">
            <div
                class="sticky top-0 flex w-full items-center justify-between p-4 print:hidden"
            >
                <button btn matRipple (click)="print()">
                    {{ 'APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST' | translate }}
                </button>
                <button icon matRipple mat-dialog-close aria-label="Close dialog">
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex h-[calc(100vh-5rem)] flex-wrap overflow-auto print:h-auto"
            >
                @for (desk of desks(); track desk) {
                    <a
                        [href]="desk.qr_link | safe: 'url'"
                        target="_blank"
                        ref="noopener noreferrer"
                        class="mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]"
                    >
                        <div
                            class="border-base-200 bg-base-100 mx-4 my-2 block rounded-lg border p-2"
                        >
                            <img class="w-48" [src]="desk.qr_code" />
                        </div>
                        <div
                            class="bg-base-200 mx-4 my-1 w-[calc(100%-2rem)] rounded-sm p-1 text-center font-mono text-sm"
                        >
                            {{ desk.name || desk.id }}
                        </div>
                    </a>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatDialogModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        SafePipe,
    ],
})
export class DeskQrCodeModalComponent {
    private _settings = inject(SettingsService);
    private _state = inject(DesksStateService);

    public readonly print = () => window.print();

    public readonly desks = computed(() =>
        this._state.desks().map((_) => {
            this.loadQrCode(_);
            return _;
        }),
    );

    public get kiosk_url() {
        const path =
            this._settings.get('app.workplace_url_path') || '/workplace';
        return `${window.location.origin}${path}`;
    }

    public loadQrCode(item: any) {
        const link = `${
            this.kiosk_url
        }/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
        item.qr_link = link;
        item.qr_code = generateQRCode(link);
        return item.qr_code;
    }
}

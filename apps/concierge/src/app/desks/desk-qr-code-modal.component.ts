import { Component, ViewEncapsulation, computed, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { DesksStateService } from './desks-state.service';

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
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="desk-qr-list flex h-[calc(100vh-5rem)] flex-wrap overflow-auto"
            >
                @for (desk of desks(); track desk) {
                    <a
                        [href]="desk.qr_link | safe: 'url'"
                        target="_blank"
                        ref="noopener noreferrer"
                        class="desk-qr-item mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%]"
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
    styles: [
        `
            .desk-qr-body-print {
                display: none;
            }

            body.desk-qr-printing .desk-qr-body-print {
                display: block;
            }

            @media print {
                @page {
                    margin: 8mm;
                }

                body.desk-qr-printing > * {
                    display: none !important;
                }

                body.desk-qr-printing .desk-qr-body-print {
                    display: block !important;
                    position: static;
                    inset: auto;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }

                body.desk-qr-printing .desk-qr-body-print .desk-qr-list {
                    display: grid !important;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 0.25rem;
                    height: auto !important;
                    overflow: visible !important;
                }

                body.desk-qr-printing .desk-qr-body-print .desk-qr-item {
                    width: 100% !important;
                    margin: 0 !important;
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
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

    public print() {
        this.desks();
        const source = document.querySelector('.desk-qr-list') as HTMLElement;
        if (!source) return window.print();
        this._cleanupPrintView();
        const print_root = document.createElement('div');
        print_root.className = 'desk-qr-body-print';
        print_root.appendChild(source.cloneNode(true));
        document.body.appendChild(print_root);
        document.body.classList.add('desk-qr-printing');
        const on_after_print = () => this._cleanupPrintView();
        window.addEventListener('afterprint', on_after_print, { once: true });
        setTimeout(() => window.print(), 50);
    }

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

    private _cleanupPrintView() {
        document.body.classList.remove('desk-qr-printing');
        const print_root = document.querySelector('.desk-qr-body-print');
        if (print_root) print_root.remove();
    }
}

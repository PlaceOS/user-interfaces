import { Component } from '@angular/core';
import { startOfMinute } from 'date-fns';

import { generateQRCode } from 'libs/common/src/lib/qr-code';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view-details',
    template: `
        <div class="h-full w-full bg-black relative text-white">
            <div
                class="bg-cover bg-center absolute inset-0"
                [style.background-image]="'url(' + room_image + ')'"
            ></div>
            <div class="absolute inset-0 bg-black/60"></div>
            <div name class="absolute top-4 left-4 text-3xl font-medium">
                {{
                    (system | async)?.display_name ||
                        (system | async)?.name ||
                        '&lt;Unknown Space&gt;'
                }}
            </div>
            <div
                qr-checkin
                *ngIf="checkin"
                class="absolute top-4 right-4 text-xl w-40 space-y-4"
            >
                <img class="w-full" [src]="qr_code" />
                <div class="w-full text-lg">
                    Scan QR code to book this room or view details
                </div>
            </div>
            <div
                class="absolute top-2/3 left-1/2 -translate-x-1/2 text-3xl font-light"
            >
                {{ time | date: 'EEE, MMM d, y h:mm a' }}
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class PanelViewDetailsComponent {
    public readonly system = this._state.space;
    public qr_code: any;

    public get time() {
        return startOfMinute(Date.now());
    }

    public get room_image() {
        return this._state.setting('image');
    }

    public get checkin() {
        return this._state.setting('show_qr_code');
    }

    constructor(private _state: PanelStateService) {}

    public ngOnInit() {
        const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}`;
        this.qr_code = generateQRCode(url, '#fff0', '#fff');
    }
}

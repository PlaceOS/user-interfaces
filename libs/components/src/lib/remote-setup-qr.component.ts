import { Component, computed, inject } from '@angular/core';

import { RemoteSetupService } from '@placeos/common';
import { generateQRCode } from '@placeos/common/qr-code';

import { TranslatePipe } from './translate.pipe';

/**
 * Card with a QR code that opens the remote setup flow for this device.
 * Shows nothing until the RemoteSetup driver is set up and connected.
 * Put it next to the setup form in a container that is a row in landscape
 * and a column in portrait. The card is narrow in landscape and as wide as
 * the setup form in portrait.
 *
 * ```html
 * <remote-setup-qr />
 * ```
 */
@Component({
    selector: 'remote-setup-qr',
    template: `
        @if (qr_code(); as code) {
            <section
                class="bg-base-100 border-base-300 flex flex-col items-center gap-4 rounded-sm border p-4 text-center shadow-md portrait:w-120 portrait:max-w-[calc(100vw-2rem)] portrait:sm:flex-row portrait:sm:text-left landscape:w-64"
            >
                <img
                    class="size-40 shrink-0 rounded-sm bg-white p-1"
                    [src]="code"
                    [alt]="'COMMON.REMOTE_SETUP_QR_ALT' | translate"
                />
                <div class="flex min-w-0 flex-col gap-2">
                    <h2 class="font-medium">
                        {{ 'COMMON.REMOTE_SETUP_TITLE' | translate }}
                    </h2>
                    <p class="text-sm opacity-70">
                        {{ 'COMMON.REMOTE_SETUP_SCAN' | translate }}
                    </p>
                    <p class="text-sm">
                        {{ 'COMMON.REMOTE_SETUP_DEVICE_ID' | translate }}:
                        <span
                            device-id
                            class="bg-base-200 rounded-sm px-2 py-1 font-mono select-all"
                            >{{ device_id }}</span
                        >
                    </p>
                </div>
            </section>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
    imports: [TranslatePipe],
})
export class RemoteSetupQrComponent {
    private _setup = inject(RemoteSetupService);

    public readonly device_id = this._setup.device_id;
    /** QR code image of the setup flow address. Empty when unavailable */
    public readonly qr_code = computed(() =>
        this._setup.available()
            ? generateQRCode(this._setup.setup_url(), '#fff', '#000')
            : '',
    );
}

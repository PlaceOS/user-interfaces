import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { Booking } from './booking.class';

@Component({
    selector: 'booking-link-modal',
    template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute right-0 top-2">
            <icon>close</icon>
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatDialogModule,
        SafePipe,
        SanitizePipe,
    ],
})
export class BookingLinkModalComponent {
    private _event = inject<Booking>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);

    public readonly outlook_link = generateMicrosoftCalendarLink(
        this._event as any,
    );
    public readonly google_link = generateGoogleCalendarLink(
        this._event as any,
    );
    public readonly ical_link = generateCalendarFileLink(this._event as any);
}

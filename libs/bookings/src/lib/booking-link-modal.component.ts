import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { Booking } from './booking.class';

@Component({
    selector: 'booking-link-modal',
    template: `
        <div class="w-full p-4 pb-2">Add event to your calendar</div>
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
                <span>Create in Outlook</span>
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
                <span>Create in Google Calendar</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <app-icon class="text-xl">download</app-icon>
                <span>Download iCal File</span>
            </a>
        </div>
        <button icon mat-dialog-close class="absolute right-0 top-2">
            <app-icon>close</app-icon>
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    standalone: false,
})
export class BookingLinkModalComponent {
    public readonly outlook_link = generateMicrosoftCalendarLink(
        this._event as any,
    );
    public readonly google_link = generateGoogleCalendarLink(
        this._event as any,
    );
    public readonly ical_link = generateCalendarFileLink(this._event as any);

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: Booking,
        private _settings: SettingsService,
    ) {}
}

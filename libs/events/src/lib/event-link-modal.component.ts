import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { CalendarEvent } from './event.class';
import { notifyError } from '@placeos/common';

@Component({
    selector: 'event-link-modal',
    template: `
        <div class="p-4 w-full pb-2" i18n>Add event to your calendar</div>
        <div class="flex flex-col items-center space-y-4 p-4 relative">
            <a
                btn
                matRipple
                class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span i18n>Create in Outlook</span>
            </a>
            <a
                btn
                matRipple
                class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span i18n>Create in Google Calendar</span>
            </a>
            <a
                btn
                matRipple
                class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <app-icon class="text-xl">download</app-icon>
                <span i18n>Download iCal File</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()" i18n>
                Close
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned"
            class="absolute top-2 right-0"
        >
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
})
export class EventLinkModalComponent {
    public readonly outlook_link = generateMicrosoftCalendarLink(
        this._event as any
    );
    public readonly google_link = generateGoogleCalendarLink(
        this._event as any
    );
    public readonly ical_link = generateCalendarFileLink(this._event as any);

    public has_actioned = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _dialog: MatDialogRef<EventLinkModalComponent>
    ) {}

    public close() {
        if (!this.has_actioned) {
            return notifyError(
                'You need to select a calendar option to finish creating this booking'
            );
        }
        this._dialog.close(true);
    }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { CalendarEvent } from './event.class';

@Component({
    selector: 'event-link-modal',
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
                (click)="has_actioned = true"
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
                (click)="has_actioned = true"
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
                (click)="has_actioned = true"
            >
                <app-icon class="text-xl">download</app-icon>
                <span>Download iCal File</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">Close</button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned"
            class="absolute right-0 top-2"
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
    standalone: false,
})
export class EventLinkModalComponent {
    public readonly outlook_link = generateMicrosoftCalendarLink(
        this._event as any,
    );
    public readonly google_link = generateGoogleCalendarLink(
        this._event as any,
    );
    public readonly ical_link = generateCalendarFileLink(this._event as any);

    public has_actioned = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _dialog: MatDialogRef<EventLinkModalComponent>,
    ) {}

    public close() {
        if (!this.has_actioned) {
            return notifyError(
                'You need to select a calendar option to finish creating this booking',
            );
        }
        this._dialog.close(true);
    }
}

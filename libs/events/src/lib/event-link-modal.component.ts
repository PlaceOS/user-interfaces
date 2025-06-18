import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CalendarEvent } from './event.class';

@Component({
    selector: 'event-link-modal',
    template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKINGS.LINK_HEADER' | translate }}
        </div>
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
                <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
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
                <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
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
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">
                {{ 'COMMON.CLOSE' | translate }}
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned"
            class="absolute right-0 top-2"
        >
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
export class EventLinkModalComponent {
    private _event = inject<CalendarEvent>(MAT_DIALOG_DATA);
    private _dialog =
        inject<MatDialogRef<EventLinkModalComponent>>(MatDialogRef);

    public readonly outlook_link = generateMicrosoftCalendarLink(
        this._event as any,
    );
    public readonly google_link = generateGoogleCalendarLink(
        this._event as any,
    );
    public readonly ical_link = generateCalendarFileLink(this._event as any);

    public has_actioned = false;

    public close() {
        if (!this.has_actioned) {
            return notifyError(
                'You need to select a calendar option to finish creating this booking',
            );
        }
        this._dialog.close(true);
    }
}

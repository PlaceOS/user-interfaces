import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';

@Component({
    selector: 'new-desk-flow-success',
    styles: [],
    template: `
        <div
            class="absolute inset-0 bg-white dark:bg-neutral-600 flex flex-col z-50"
        >
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium text-center">
                    {{ last_event.asset_name || last_event.asset_id
                    }}{{ location }} Booked!
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center">
                    Your desk has been successfully booked
                    <span
                        assets
                        *ngIf="last_event?.extension_data?.assets?.length"
                    >
                        including
                        {{ last_event?.extension_data?.assets?.length }}
                        asset(s)
                    </span>
                    for the
                    {{ last_event.date | date: 'mediumDate' }} at
                    {{ last_event.date | date: 'shortTime' }}-{{
                        last_event.date + last_event.duration * 60 * 1000
                            | date: 'shortTime'
                    }}.
                </p>
                <div
                    class="flex flex-col items-center space-y-4 p-4 relative"
                    *ngIf="show_links"
                >
                    <a
                        button
                        matRipple
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="outlook_link | sanitize: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <img src="assets/icons/outlook.svg" class="w-6" />
                        <span>Add to Outlook</span>
                    </a>
                    <a
                        button
                        matRipple
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="google_link | sanitize: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <img src="assets/icons/gcal.svg" class="w-6" />
                        <span>Add to Google Calendar</span>
                    </a>
                    <a
                        button
                        matRipple
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="ical_link | safe: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <app-icon class="text-xl">download</app-icon>
                        <span>Download iCal File</span>
                    </a>
                </div>
            </main>
            <footer
                class="p-2 w-full border-t border-gray-200 dark:border-neutral-500 mt-4 flex items-center justify-center"
            >
                <a button mat-button class="w-full max-w-[32rem] mx-auto" [routerLink]="['/']">
                    Great, thanks!
                </a>
            </footer>
        </div>
    `,
})
export class NewDeskFlowSuccessComponent {
    public outlook_link = '';
    public google_link = '';
    public ical_link = '';
    public get location() {
        const desk = this.last_event?.extension_data?.booking_asset;
        if (!desk) return '';
        return desk.zone
            ? `, ${desk.zone.display_name || desk.zone.name || desk.zone.id}`
            : '';
    }

    public get last_event() {
        return this._state.last_success;
    }

    public get show_links() {
        return this._settings.get('app.desks.show_calendar_links');
    }

    public readonly viewCalendarLinks = () =>
        this._state.openBookingLinkModal();

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        this.outlook_link = generateMicrosoftCalendarLink(
            this.last_event as any
        );
        this.google_link = generateGoogleCalendarLink(this.last_event as any);
        this.ical_link = generateCalendarFileLink(this.last_event as any);
    }
}

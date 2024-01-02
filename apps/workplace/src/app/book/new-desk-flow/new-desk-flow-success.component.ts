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
            class="absolute inset-0 bg-base-100 flex flex-col z-50 overflow-auto"
        >
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium text-center" i18n>
                    {{ last_event.asset_name || last_event.asset_id
                    }}{{ location }} Booked!
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center" i18n>
                    Your
                    <span group *ngIf="last_event?.attendees?.length">
                        group of
                        {{ last_event?.attendees?.length + 1 }}
                    </span>
                    desk{{ last_event?.attendees?.length ? 's' : '' }} has been
                    successfully booked
                    <span
                        assets
                        *ngIf="last_event?.extension_data?.assets?.length"
                    >
                        including
                        {{ last_event?.extension_data?.assets?.length }}
                        asset(s)
                    </span>
                    for {{ last_event.date | date: 'mediumDate' }}
                    <span *ngIf="!last_event?.all_day">
                        at {{ last_event.date | date: time_format }}-{{
                            last_event.date + last_event.duration * 60 * 1000
                                | date: time_format
                        }}</span
                    >.
                </p>
                <p *ngIf="true">
                    Please allow up to 5 minutes for you booking to be approved.
                </p>
                <div
                    class="flex flex-col items-center space-y-4 p-4 relative"
                    *ngIf="show_links"
                >
                    <a
                        btn
                        matRipple
                        name="desk-outlook-link"
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="outlook_link | sanitize: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <img src="assets/icons/outlook.svg" class="w-6" />
                        <span i18n>Add to Outlook</span>
                    </a>
                    <a
                        btn
                        matRipple
                        name="desk-google-link"
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="google_link | sanitize: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <img src="assets/icons/gcal.svg" class="w-6" />
                        <span i18n>Add to Google Calendar</span>
                    </a>
                    <a
                        btn
                        matRipple
                        name="desk-ical-link"
                        class="flex items-center p-2 space-x-2 pr-4 w-64 rounded inverse"
                        [href]="ical_link | safe: 'url'"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <app-icon class="text-xl">download</app-icon>
                        <span i18n>Download iCal File</span>
                    </a>
                </div>
            </main>
            <footer
                class="sticky bottom-0 p-2 w-full border-t bg-base-100 border-base-200 mt-4 flex items-center justify-center"
            >
                <a
                    btn
                    name="desk-confirm-continue"
                    matRipple
                    class="w-full max-w-[32rem] mx-auto"
                    [routerLink]="['/']"
                    i18n
                >
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

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        const event: any = {
            ...this.last_event,
            location: `${this.location}, ${this.last_event.asset_name || ''}`,
        };
        this.outlook_link = generateMicrosoftCalendarLink(event);
        this.google_link = generateGoogleCalendarLink(event);
        this.ical_link = generateCalendarFileLink(event);
    }
}

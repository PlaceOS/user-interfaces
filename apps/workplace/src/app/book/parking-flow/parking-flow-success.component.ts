import { Component, inject } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'parking-flow-success',
    template: `
        <div
            class="absolute inset-0 z-50 flex flex-col overflow-auto bg-base-100"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium"></h2>
                <p class="max-w-[32rem] text-center">
                    {{
                        'APP.WORKPLACE.PARKING_SUCCESS_MSG'
                            | translate
                                : {
                                      name: last_event.asset_name,
                                      place: location,
                                      date:
                                          last_event.date | date: 'mediumDate',
                                      time:
                                          (last_event.date
                                              | date: time_format) +
                                          ' - ' +
                                          (last_event.date +
                                              last_event.duration * 60 * 1000
                                              | date: time_format),
                                  }
                    }}
                </p>
                <img src="assets/icons/parking-success.svg" />
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="outlook_link | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="google_link | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="ical_link | safe: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="sticky bottom-0 mt-4 flex w-full items-center justify-center border-t border-base-200 bg-base-100 p-2"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ParkingFlowSuccessComponent {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public outlook_link = '';
    public google_link = '';
    public ical_link = '';

    public get location() {
        if (!this.last_event) return 'Unknown';
        const building = this._org.buildings.find((_) =>
            this.last_event.zones.includes(_.id),
        );
        const level = this._org.levelWithID(this.last_event.zones);
        return (
            (building ? `${building.display_name || building.name}, ` : '') +
            (level ? `${level.display_name || level.name}, ` : '')
        );
    }

    public get last_event() {
        return this._state.last_success;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get show_links() {
        return this._settings.get('app.parking.show_calendar_links');
    }

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

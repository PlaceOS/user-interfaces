import { Component, inject } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';

@Component({
    selector: 'locker-flow-success',
    styles: [],
    template: `
        <div
            class="absolute inset-0 z-50 flex flex-col overflow-auto bg-base-100"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-center text-2xl font-medium">
                    {{
                        'BOOKINGS.ITEM_BOOKED'
                            | translate
                                : {
                                      name:
                                          (last_event.asset_name ||
                                              last_event.asset_id) +
                                          ', ' +
                                          location,
                                  }
                    }}
                </h2>
                <img src="assets/icons/locker-success.svg" />
                <p class="text-center">
                    {{
                        'APP.WORKPLACE.LOCKER_SUCCESS_MSG'
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
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="locker-outlook-link"
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
                            name="locker-google-link"
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
                            name="locker-ical-link"
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
                    name="locker-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    standalone: false,
})
export class BookLockerFlowSuccessComponent {
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

    public get show_links() {
        return this._settings.get('app.lockers.show_calendar_links');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public readonly viewCalendarLinks = () =>
        this._state.openBookingLinkModal();

    public ngOnInit() {
        this.outlook_link = generateMicrosoftCalendarLink(
            this.last_event as any,
        );
        this.google_link = generateGoogleCalendarLink(this.last_event as any);
        this.ical_link = generateCalendarFileLink(this.last_event as any);
    }
}

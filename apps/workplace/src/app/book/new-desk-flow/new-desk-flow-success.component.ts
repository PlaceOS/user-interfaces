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
                <h2 class="text-2xl font-medium text-center">
                    {{
                        'BOOKINGS.ITEM_BOOKED'
                            | translate
                                : {
                                      name:
                                          (last_event.asset_name ||
                                              last_event.asset_id) + location,
                                  }
                    }}
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center">
                    @let details =
                        {
                            date: last_event.date | date: 'mediumDate',
                            time:
                                last_event.date
                                | date
                                    : time_format +
                                          ' - ' +
                                          last_event.date +
                                          last_event.duration * 60 * 1000
                                | date: time_format,
                            size: group_size,
                        };
                    @if (is_group) {
                        @if (last_event?.all_day) {
                            {{
                                'BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY'
                                    | translate: details
                            }}
                        } @else {
                            {{
                                'BOOKINGS.DESK_SUCCESS_GROUP'
                                    | translate: details
                            }}
                        }
                    } @else {
                        @if (last_event?.all_day) {
                            {{
                                'BOOKINGS.DESK_SUCCESS_LONE_ALLDAY'
                                    | translate: details
                            }}
                        } @else {
                            {{
                                'BOOKINGS.DESK_SUCCESS_LONE'
                                    | translate: details
                            }}
                        }
                    }
                </p>
                <p *ngIf="last_event?.extension_data?.assets?.length">
                    {{
                        'BOOKINGS.ASSETS_BOOKED'
                            | translate
                                : {
                                      count: last_event?.extension_data?.assets
                                          ?.length,
                                  }
                    }}
                </p>
                <p *ngIf="true">
                    {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
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
                        <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
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
                        <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
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
                        <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
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
                >
                    {{ 'BOOKINGS.FINISHED' | translate }}
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

    public get is_group() {
        return this.group_size > 1;
    }

    public get group_size() {
        return (this.last_event?.attendees?.length || 0) + 1;
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
        private _settings: SettingsService,
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

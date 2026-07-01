import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SafePipe,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '@placeos/events';

@Component({
    selector: 'parking-request-success',
    template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="pb-4 text-2xl font-medium">
                    {{
                        'APP.WORKPLACE.PARKING_REQUEST_SUCCESS_HEADER'
                            | translate
                    }}
                </h2>
                <p class="max-w-lg text-center">
                    {{
                        'APP.WORKPLACE.PARKING_REQUEST_SUCCESS_MSG'
                            | translate
                                : {
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
                <img class="h-80" src="assets/icons/parking-success.svg" />
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="parking-request-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
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
                            name="parking-request-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
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
                            name="parking-request-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | safe: 'url'"
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
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a btn matRipple class="w-full max-w-lg" [routerLink]="['/']">
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        RouterModule,
        TranslatePipe,
        MatRippleModule,
        SafePipe,
        SanitizePipe,
        IconComponent,
    ],
})
export class ParkingRequestSuccessComponent {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public outlook_link = signal('');
    public google_link = signal('');
    public ical_link = signal('');

    public get location() {
        if (!this.last_event) return 'Unknown';
        const building = this._org.buildings.find((_) =>
            this.last_event.zones.includes(_.id),
        );
        return building ? `${building.display_name || building.name}` : '';
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
            location: `${this.location}`,
        };
        this.outlook_link.set(generateMicrosoftCalendarLink(event));
        this.google_link.set(generateGoogleCalendarLink(event));
        this.ical_link.set(generateCalendarFileLink(event));
    }
}

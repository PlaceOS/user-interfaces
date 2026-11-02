import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    getTimezoneOffsetString,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { CalEvent } from '@placeos/events';
import { BookingCalendarLinksComponent } from '../booking-calendar-links.component';

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
                                          last_event.date
                                          | date: 'mediumDate' : tz,
                                      time:
                                          (last_event.date
                                              | date: time_format : tz) +
                                          ' - ' +
                                          (last_event.date +
                                              last_event.duration * 60 * 1000
                                              | date: time_format : tz),
                                  }
                    }}
                </p>
                <img class="h-80" src="assets/icons/parking-success.svg" />
                @if (show_links) {
                    <booking-calendar-links
                        prefix="parking-request"
                        [event]="cal_event()"
                    />
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
        BookingCalendarLinksComponent,
    ],
})
export class ParkingRequestSuccessComponent implements OnInit {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    /** Booking that the calendar links add */
    public readonly cal_event = signal<CalEvent | null>(null);

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

    /** Offset of the timezone that the booking was made in */
    public get tz() {
        const event = this.last_event;
        if (!event?.timezone) return '';
        return getTimezoneOffsetString(event.timezone, new Date(event.date));
    }

    public get show_links() {
        return this._settings.get('app.parking.show_calendar_links');
    }

    public ngOnInit() {
        const event: any = {
            ...this.last_event,
            location: `${this.location}`,
        };
        this.cal_event.set(event);
    }
}

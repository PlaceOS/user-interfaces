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
    selector: 'locker-flow-success',
    styles: [],
    template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-center text-2xl font-medium">
                    {{
                        'BOOKINGS.ITEM_BOOKED'
                            | translate
                                : {
                                      name: heading_name,
                                  }
                    }}
                </h2>
                <img src="assets/icons/locker-success.svg" />
                <p class="text-center">
                    {{
                        (last_event.all_day
                            ? 'APP.WORKPLACE.LOCKER_SUCCESS_MSG_ALLDAY'
                            : 'APP.WORKPLACE.LOCKER_SUCCESS_MSG'
                        )
                            | translate
                                : {
                                      name: last_event.asset_name,
                                      place: location,
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
                @if (show_links) {
                    <booking-calendar-links
                        prefix="locker"
                        [event]="cal_event()"
                    />
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a
                    btn
                    name="locker-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    imports: [
        CommonModule,
        TranslatePipe,
        RouterModule,
        MatRippleModule,
        BookingCalendarLinksComponent,
    ],
})
export class BookLockerFlowSuccessComponent implements OnInit {
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
        const level = this._org.levelWithID(this.last_event.zones);
        return [
            building?.display_name || building?.name,
            level?.display_name || level?.name,
        ]
            .filter(Boolean)
            .join(', ');
    }

    /** Locker name and location for the success heading */
    public get heading_name() {
        return [
            this.last_event.asset_name || this.last_event.asset_id,
            this.location,
        ]
            .filter(Boolean)
            .join(', ');
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

    /** Offset of the timezone that the booking was made in */
    public get tz() {
        const event = this.last_event;
        if (!event?.timezone) return '';
        return getTimezoneOffsetString(event.timezone, new Date(event.date));
    }

    public readonly viewCalendarLinks = () =>
        this._state.openBookingLinkModal();

    public ngOnInit() {
        this.cal_event.set(this.last_event as any);
    }
}

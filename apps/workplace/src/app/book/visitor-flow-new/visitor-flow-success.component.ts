import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    OrganisationService,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { CalEvent } from '@placeos/events';
import { BookingCalendarLinksComponent } from '../booking-calendar-links.component';

@Component({
    selector: 'visitor-flow-success',
    template: `
        <div
            class="bg-base-100 flex h-full w-full flex-col items-center justify-center text-center"
        >
            <div
                class="z-0 m-8 h-1/2 w-full max-w-[32rem] flex-1 space-y-2 overflow-auto"
            >
                <h2 class="text-3xl">
                    {{
                        (multiple()
                            ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                            : 'BOOKINGS.VISITOR_SENT_SINGLE'
                        )
                            | translate
                                : {
                                      name:
                                          last_success()?.asset_name ||
                                          last_success()?.asset_id,
                                      count: count(),
                                  }
                    }}
                </h2>
                <img class="mx-auto" src="assets/icons/sent.svg" />
                <p>
                    {{
                        (multiple()
                            ? 'BOOKINGS.VISITOR_SENT_MSG_MULTIPLE'
                            : 'BOOKINGS.VISITOR_SENT_MSG'
                        )
                            | translate
                                : {
                                      location:
                                          building()?.display_name ||
                                          building()?.name,
                                      date:
                                          last_success()?.date
                                          | date: 'mediumDate',
                                      time:
                                          last_success()?.date
                                          | date: time_format,
                                  }
                    }}
                </p>
                @if (show_links()) {
                    <booking-calendar-links
                        prefix="visitor"
                        [event]="cal_event()"
                    />
                }
            </div>
            <div class="border-base-200 bg-base-100 z-10 w-full border-t p-2">
                <div
                    class="mx-auto flex w-full max-w-[32rem] items-center space-x-2"
                >
                    <button btn matRipple class="flex-1" (click)="done()">
                        {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        (click)="bookAnother()"
                    >
                        {{
                            (multiple()
                                ? 'BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE'
                                : 'BOOKINGS.VISITOR_BOOK_ANOTHER'
                            ) | translate
                        }}
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        TranslatePipe,
        DatePipe,
        BookingCalendarLinksComponent,
    ],
})
export class VisitorFlowSuccessComponent implements OnInit {
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);

    public readonly show_links = settingSignal(
        'visitors.show_calendar_links',
        false,
    );
    public readonly last_success = signal<Booking>(null);
    public readonly count = signal(1);
    /** Whether the invite went to more than one visitor */
    public readonly multiple = computed(() => this.count() > 1);

    public readonly building = computed(() =>
        !this.last_success()
            ? this._org.building
            : this._org.buildings.find((b) =>
                  this.last_success().zones.includes(b.id),
              ),
    );

    public readonly cal_event = computed(() => {
        if (!this.last_success()) return null;
        const event: CalEvent = {
            ...this.last_success(),
            host: this.last_success().user_email,
            organiser: new User({
                name: this.last_success().user_name,
                email: this.last_success().user_email,
            }),
            attendees: this.last_success().attendees.map((_) => _.email),
            body: this.last_success().description,
            location: this.building()?.display_name || this.building()?.name,
        };
        event.attendees.push(this.last_success().asset_id);
        return event;
    });

    public get time_format() {
        return this._settings.time_format;
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        const last = this._form.last_success;
        if (last) {
            this.last_success.set(last);
        }
        this.count.set(this._form.last_count || 1);
    }

    public done() {
        this._router.navigate(['/']);
    }

    public bookAnother() {
        this._form.clearForm();
        this._router.navigate(['/book/visitor/form']);
    }
}

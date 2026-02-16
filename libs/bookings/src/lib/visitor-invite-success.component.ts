import { DatePipe } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    Booking,
    firstTruthyValueFrom,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import {
    CalEvent,
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/events/src/lib/calendar-links';
import { BookingFormService } from './booking-form.service';

@Component({
    selector: 'visitor-invite-success',
    template: `
        <div
            sent
            class="bg-base-100 flex h-full w-full flex-col items-center justify-center text-center"
        >
            <div
                class="z-0 m-8 h-1/2 w-full max-w-lg flex-1 space-y-2 overflow-auto"
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
                                      count: last_count() || 1,
                                  }
                    }}
                </h2>
                <img class="mx-auto" src="assets/icons/sent.svg" />
                <p>
                    {{
                        (multiple() && last_count() > 1
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
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
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
                            name="desk-google-link"
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
                            name="desk-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </div>
            <div class="border-base-200 bg-base-100 z-10 w-full border-t p-2">
                <div
                    class="mx-auto flex w-full max-w-lg items-center space-x-2"
                >
                    <button btn matRipple class="flex-1" (click)="done.emit()">
                        {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        (click)="another.emit()"
                    >
                        {{
                            (multiple() && last_count() > 1
                                ? 'BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE'
                                : 'BOOKINGS.VISITOR_BOOK_ANOTHER'
                            ) | translate
                        }}
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        DatePipe,
        SanitizePipe,
    ],
})
export class VisitorInviteSuccessComponent implements OnInit {
    private _form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly last_count = input(1);
    public readonly done = output<void>();
    public readonly another = output<void>();

    public readonly multiple = settingSignal(
        'bookings.multiple_visitors',
        false,
    );
    public readonly show_links = settingSignal(
        'visitors.show_calendar_links',
        false,
    );
    public readonly last_success = signal<Booking>(null);
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
            organiser: {
                name: this.last_success().user_name,
                email: this.last_success().user_email,
            } as any,
            attendees: this.last_success().attendees.map((_) => _.email),
            body: this.last_success().description,
            location:
                this._org.building.display_name || this._org.building.name,
        };
        event.attendees.push(this.last_success().asset_id);
        return event;
    });
    public readonly outlook_link = computed(() =>
        this.cal_event() ? generateMicrosoftCalendarLink(this.cal_event()) : '',
    );
    public readonly google_link = computed(() =>
        this.cal_event() ? generateGoogleCalendarLink(this.cal_event()) : '',
    );
    public readonly ical_link = computed(() =>
        this.cal_event() ? generateCalendarFileLink(this.cal_event()) : '',
    );

    public get time_format() {
        return this._settings.time_format;
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        console.log('Last Success:', this._form.last_success);
        this.last_success.set(this._form.last_success);
    }
}

import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { firstTruthyValueFrom, SettingsService } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/common/src/lib/calendar-links';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';

@Component({
    selector: 'desk-flow-success',
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
                                          last_event.asset_name ||
                                          last_event.asset_id,
                                  }
                    }}
                </h2>
                <img src="assets/icons/success.svg" />
                @if (last_event) {
                    <p class="max-w-[40rem] text-center">
                        @let details =
                            {
                                date:
                                    last_event?.date || 0 | date: 'mediumDate',
                                time:
                                    (last_event?.date || 0
                                        | date: time_format) +
                                    ' - ' +
                                    (last_event.date +
                                        last_event.duration * 60 * 1000
                                        | date: time_format),
                                size: group_size,
                                location: location(),
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
                }
                @if (last_event?.extension_data?.assets?.length) {
                    <p assets>
                        {{
                            'BOOKINGS.ASSETS_BOOKED'
                                | translate
                                    : {
                                          count: last_event?.extension_data
                                              ?.assets?.length,
                                      }
                        }}
                    </p>
                }
                @if (true) {
                    <p>
                        {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
                    </p>
                }
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
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
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
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
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
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
                class="sticky bottom-0 mt-4 flex w-full items-center justify-center border-t border-base-200 bg-base-100 p-2"
            >
                <a
                    btn
                    name="desk-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    providers: [LevelPipe, BuildingPipe],
    standalone: false,
})
export class NewDeskFlowSuccessComponent implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _level_pipe = inject(LevelPipe);
    private _building_pipe = inject(BuildingPipe);

    public readonly level = signal(new BuildingLevel());
    public readonly building = signal(new Building());
    public readonly outlook_link = signal('');
    public readonly google_link = signal('');
    public readonly ical_link = signal('');
    public readonly location = computed(() => {
        return `${this.building().display_name || this.level().name}, ${this.level().display_name || this.level().name}`;
    });

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

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        const event: any = {
            ...this.last_event,
            location: `${this.location()}, ${this.last_event.asset_name || ''}`,
        };
        this.outlook_link.set(generateMicrosoftCalendarLink(event));
        this.google_link.set(generateGoogleCalendarLink(event));
        this.ical_link.set(generateCalendarFileLink(event));

        this.level.set(this._level_pipe.transform(event.zones));
        this.building.set(this._building_pipe.transform(event.zones));
        console.log('Level:', this.level().display_name || this.level().name);
        console.log(
            'Building:',
            this.building().display_name || this.building().name,
        );
    }
}

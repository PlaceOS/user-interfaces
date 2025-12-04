import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BookingFormService, showBooking } from '@placeos/bookings';
import {
    Booking,
    Building,
    BuildingLevel,
    firstTruthyValueFrom,
    formatRecurrence,
    fromBookingRecurrence,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    LevelPipe,
    SafePipe,
    SanitizePipe,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import { forkJoin, lastValueFrom } from 'rxjs';

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
                @if (!is_group) {
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
                }
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
                @if (
                    last_event.recurrence_type &&
                    last_event.recurrence_type !== 'none'
                ) {
                    <div
                        class="flex items-center space-x-2 rounded-lg bg-base-200 px-4 py-2"
                    >
                        <icon class="text-xl">update</icon>
                        <div class="text-sm">{{ formatted_recurrence }}</div>
                    </div>
                }
                @if (is_group && group_bookings().length > 0) {
                    <div
                        class="mt-4 w-full max-w-[32rem] rounded-lg border border-base-300 bg-base-100 p-4"
                    >
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon class="text-xl">group</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_BOOKINGS' | translate
                            }}</span>
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                booking of group_bookings();
                                track booking.id
                            ) {
                                <div
                                    class="bg-base-200/50 flex items-center space-x-3 rounded border border-base-200 p-2"
                                >
                                    <a-user-avatar
                                        [user]="
                                            (booking.user_email
                                                | user
                                                | async) || {
                                                name: booking.user_name,
                                                email: booking.user_email,
                                            }
                                        "
                                    />
                                    <div class="flex flex-1 flex-col">
                                        <span class="font-medium">{{
                                            booking.user_name ||
                                                booking.user_email
                                        }}</span>
                                        <span class="text-sm opacity-60">{{
                                            booking.asset_name ||
                                                booking.asset_id
                                        }}</span>
                                    </div>
                                    <icon class="text-2xl text-success"
                                        >check_circle</icon
                                    >
                                </div>
                            }
                        </div>
                    </div>
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
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        RouterModule,
        SanitizePipe,
        SafePipe,
        UserPipe,
        UserAvatarComponent,
    ],
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
    public readonly group_bookings = signal<Booking[]>([]);
    public readonly location = computed(() => {
        return `${this.building().display_name || this.level().name}, ${this.level().display_name || this.level().name}`;
    });

    public get is_group() {
        const stored_ids = localStorage.getItem(
            'PLACEOS.last_group_booking_ids',
        );
        const booking_ids: string[] = stored_ids ? JSON.parse(stored_ids) : [];
        return booking_ids.length > 1;
    }

    public get group_size() {
        return this.group_bookings().length || 1;
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

    public get formatted_recurrence() {
        const event = this.last_event;
        const recurrence = fromBookingRecurrence(event);
        if (!recurrence.type || recurrence.type == 'none') return '';
        return formatRecurrence(recurrence);
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

        // Load group bookings if this is a group booking
        if (this.is_group) {
            await this._loadGroupBookings();
        }
    }

    private async _loadGroupBookings() {
        const stored_ids = localStorage.getItem(
            'PLACEOS.last_group_booking_ids',
        );
        const booking_ids: string[] = stored_ids ? JSON.parse(stored_ids) : [];
        if (booking_ids.length <= 1) return;

        try {
            const bookings = await lastValueFrom(
                forkJoin(booking_ids.map((id) => showBooking(id))),
            );
            this.group_bookings.set(bookings);
        } catch (e) {
            console.error('Failed to load group bookings', e);
        }
    }
}

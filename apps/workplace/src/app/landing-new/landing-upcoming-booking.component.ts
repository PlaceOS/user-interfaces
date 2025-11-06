import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BookingDetailsModalComponent,
    checkinBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    IconComponent,
    MapLocateModalComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { differenceInMinutes, format, isSameDay } from 'date-fns';
import { LandingStateService } from '../landing/landing-state.service';
import { ScheduleStateService } from '../schedule/schedule-state.service';

@Component({
    selector: 'landing-upcoming-booking',
    template: `
        @if (nextEvent(); as event) {
            <div
                class="bg-grad col-span-2 space-y-2 rounded-lg border border-base-300 p-4 text-brand-content"
            >
                <div class="flex w-full items-center justify-between">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="absolute inset-0 bg-brand-content opacity-20"
                        ></div>
                        <div>
                            {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                        </div>
                    </div>
                    @if (isInProgress()) {
                        <div
                            class="flex w-48 items-center space-x-2 px-2 text-center"
                        >
                            <icon>schedule</icon>
                            <div>Ends in {{ minutesUntilEnd() }} minutes</div>
                        </div>
                    } @else if (minutesUntilStart() >= 0) {
                        <div
                            class="flex w-48 items-center space-x-2 px-2 text-center"
                        >
                            <icon>timelapse</icon>
                            <div>
                                Starts in {{ minutesUntilStart() }} minutes
                            </div>
                        </div>
                    }
                </div>
                <div
                    class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0"
                >
                    <div class="w-full sm:flex-1">
                        <h2 class="text-2xl font-medium">
                            {{ eventTitle() }}
                        </h2>
                        <h3 class="mb-2 text-lg font-medium">
                            {{ eventLocation() }}
                        </h3>
                        <div class="mb-1 flex items-center space-x-2">
                            <icon class="text-xl">event</icon>
                            <div>{{ eventTimeDisplay() }}</div>
                        </div>
                        @if (eventLocation()) {
                            <div class="mb-1 flex items-center space-x-2">
                                <icon class="text-xl">distance</icon>
                                <div>{{ eventLocation() }}</div>
                            </div>
                        }
                        @if (attendeeCount(); as count) {
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">people</icon>
                                <div>{{ count }} attendees</div>
                            </div>
                        }
                    </div>
                    <div
                        class="flex w-full flex-col items-end space-y-2 sm:flex-1"
                    >
                        @if (isBooking()) {
                            <button
                                btn
                                matRipple
                                class="white w-full space-x-2 sm:w-48"
                                (click)="checkIn()"
                            >
                                <icon class="text-2xl">check_circle</icon>
                                <div class="mr-2">Check-in</div>
                            </button>
                        }
                        <button
                            btn
                            matRipple
                            class="inverse white w-full space-x-2 sm:w-48"
                            (click)="viewDetails()"
                        >
                            <icon class="text-2xl">info</icon>
                            <div class="mr-2">View Details</div>
                        </button>
                        @if (eventLocation()) {
                            <button
                                btn
                                matRipple
                                class="inverse white w-full space-x-2 sm:w-48"
                                (click)="viewDirections()"
                            >
                                <icon class="text-2xl">directions</icon>
                                <div class="mr-2">Directions</div>
                            </button>
                        }
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="col-span-2 flex min-h-48 flex-col items-center justify-center space-y-4 rounded-lg border border-base-300 bg-base-100 p-8"
            >
                <img src="assets/img/no-events.svg" class="h-24" />
                <div class="text-center">
                    <h3 class="text-lg font-medium">
                        {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                    </h3>
                    <p class="text-sm opacity-60">
                        You have no upcoming bookings or events today
                    </p>
                </div>
            </div>
        }
    `,
    styles: [
        `
            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-100) 0%,
                    var(--brand-200) 100%
                );
            }
        `,
    ],
    imports: [CommonModule, MatRippleModule, IconComponent, TranslatePipe],
})
export class LandingUpcomingBookingComponent extends AsyncHandler {
    private _state = inject(LandingStateService);
    private _schedule = inject(ScheduleStateService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);

    public readonly upcomingEvents = toSignal(this._state.upcoming_events);

    public readonly edit_fn = (i) => this._schedule.edit(i);
    public readonly edit_booking_fn = (i) => this._schedule.editBooking(i);
    public readonly remove_fn = (i, s?) => this._schedule.remove(i, s);
    public readonly end_fn = (i) => this._schedule.end(i);

    public readonly nextEvent = computed(() => {
        const events = this.upcomingEvents();
        return events?.[0];
    });

    public readonly isBooking = computed(() => {
        const event = this.nextEvent();
        return event instanceof Booking;
    });

    public readonly eventTitle = computed(() => {
        const event = this.nextEvent();
        if (!event) return '';
        if (event instanceof Booking) {
            return event.description || event.asset_name || 'Booking';
        }
        return event.title || 'Event';
    });

    public readonly eventLocation = computed(() => {
        const event = this.nextEvent();
        if (!event) return '';
        if (event instanceof Booking) {
            return event.asset_name || '';
        }
        return event.resources?.[0]?.display_name || event.location || '';
    });

    public readonly eventTimeDisplay = computed(() => {
        const event = this.nextEvent();
        if (!event) return '';
        const start = format(event.date, 'h:mm a');
        const end = format(event.date + event.duration * 60 * 1000, 'h:mm a');
        const day = isSameDay(event.date, Date.now())
            ? 'Today'
            : format(event.date, 'MMM d');
        return `${start} - ${end} · ${day}`;
    });

    public readonly isInProgress = computed(() => {
        const event = this.nextEvent();
        if (!event) return false;
        const now = Date.now();
        const end_time = event.date + event.duration * 60 * 1000;
        return now >= event.date && now < end_time;
    });

    public readonly minutesUntilStart = computed(() => {
        const event = this.nextEvent();
        if (!event) return 0;
        return differenceInMinutes(event.date, Date.now());
    });

    public readonly minutesUntilEnd = computed(() => {
        const event = this.nextEvent();
        if (!event) return 0;
        const end_time = event.date + event.duration * 60 * 1000;
        return differenceInMinutes(end_time, Date.now());
    });

    public readonly attendeeCount = computed(() => {
        const event = this.nextEvent();
        if (!event) return 0;
        if (event instanceof CalendarEvent) {
            return event.attendees?.length || 0;
        }
        return 0;
    });

    public async checkIn() {
        const event = this.nextEvent();
        if (!event || !(event instanceof Booking)) return;

        try {
            await checkinBooking(event.id, true).toPromise();
            notifySuccess('Successfully checked in');
            this._state.refreshUpcomingEvents();
        } catch (error) {
            notifyError('Failed to check in');
        }
    }

    public viewDetails() {
        this.timeout('view_details', () => {
            const event = this.nextEvent();
            if (!event) return;

            if (event instanceof Booking) {
                const view_component: any =
                    event.booking_type === 'group-event'
                        ? GroupEventDetailsModalComponent
                        : BookingDetailsModalComponent;
                const data = {
                    booking:
                        event.booking_type === 'group-event'
                            ? { booking: event, concierge: false }
                            : event,
                    edit_fn: this.edit_booking_fn,
                    remove_fn: this.remove_fn,
                    end_fn: this.end_fn,
                };
                this._dialog.open(view_component, { data });
            } else if (event instanceof CalendarEvent) {
                if (event.extension_data?.shared_event) {
                    this._dialog.open(GroupEventDetailsModalComponent, {
                        data: {
                            event: event,
                            edit_fn: this.edit_fn,
                            remove_fn: this.remove_fn,
                            concierge: false,
                        },
                    });
                    return;
                }
                this._dialog.open(EventDetailsModalComponent, {
                    data: {
                        event: event,
                        edit_fn: this.edit_fn,
                        remove_fn: this.remove_fn,
                    },
                });
            }
        });
    }

    public viewDirections() {
        const event = this.nextEvent();
        if (!event) return;

        let itemData: any;
        let zones: string[] = [];

        if (event instanceof Booking) {
            zones = event.zones || [];
            itemData = {
                id: event.asset_id,
                name: event.asset_name || event.description,
                map_id: event.extension_data?.map_id || event.asset_id,
                zones,
                level: this._org.levelWithID(zones),
            };
        } else if (event instanceof CalendarEvent) {
            const resource = event.resources?.[0];
            zones = resource?.zones || [];
            itemData = {
                id: resource?.id,
                name: resource?.display_name || resource?.name || event.title,
                map_id: resource?.map_id || resource?.id,
                zones,
                level: this._org.levelWithID(zones),
            };
        }

        if (itemData && itemData.id) {
            this._dialog.open(MapLocateModalComponent, {
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: { item: itemData },
            });
        }
    }
}

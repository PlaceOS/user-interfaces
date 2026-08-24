import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import {
    BookingDetailsModalComponent,
    canEditBooking,
    checkinBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    BindingDirective,
    IconComponent,
    MapLocateModalComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    checkinEventGuest,
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { getModule } from '@placeos/ts-client';
import { differenceInMinutes, format, isSameDay } from 'date-fns';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
import { LandingStateService } from '../landing/landing-state.service';
import { ScheduleStateService } from '../schedule/schedule-state.service';

@Component({
    selector: 'landing-upcoming-booking',
    template: `
        @if (nextEvent(); as event) {
            <div
                class="bg-grad border-base-300 text-brand-content col-span-2 space-y-2 rounded-lg border p-4"
            >
                @if (room_system_id(); as room_id) {
                    <i
                        binding
                        class="hidden"
                        [(model)]="room_status"
                        [sys]="room_id"
                        mod="Bookings"
                        bind="status"
                    ></i>
                    <i
                        binding
                        class="hidden"
                        [(model)]="room_booking_start"
                        [sys]="room_id"
                        mod="Bookings"
                        bind="last_booking_started"
                    ></i>
                }
                <div class="flex w-full items-center justify-between">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="bg-brand-content absolute inset-0 opacity-20"
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
                            class="flex min-w-48 items-center space-x-2 px-2 text-center"
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
                        <div class="flex w-full items-center space-x-2 sm:w-56">
                            <button
                                btn
                                matRipple
                                [disabled]="checkinDisabled()"
                                class="flex-1 space-x-2"
                                [class.white]="!isCheckedIn()"
                                [class.bg-success]="isCheckedIn()"
                                [class.text-success-content]="isCheckedIn()"
                                (click)="checkIn()"
                            >
                                <icon class="text-2xl">{{
                                    isCheckedIn() ? 'done' : 'check_circle'
                                }}</icon>
                                <div class="pr-2">
                                    {{
                                        (isCheckedIn()
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECK_IN'
                                        ) | translate
                                    }}
                                </div>
                            </button>
                            <button
                                btn
                                matRiple
                                matTooltip="Edit Booking"
                                matTooltipPosition="left"
                                [disabled]="!canEdit()"
                                class="white inverse h-12 w-12 px-0"
                                (click)="edit()"
                            >
                                <icon class="text-2xl">edit</icon>
                            </button>
                        </div>
                        <div class="flex w-full items-center space-x-2 sm:w-56">
                            <button
                                btn
                                matRipple
                                class="inverse white flex flex-1 space-x-2"
                                (click)="viewDetails()"
                            >
                                <icon class="text-2xl">info</icon>
                                <div class="pr-2">View Details</div>
                            </button>
                            <button
                                btn
                                matRiple
                                matTooltip="Delete Booking"
                                matTooltipPosition="left"
                                [disabled]="deleteDisabled()"
                                class="white inverse h-12 w-12 px-0"
                                (click)="remove()"
                            >
                                <icon class="text-2xl">delete</icon>
                            </button>
                        </div>
                        <a
                            btn
                            matRipple
                            class="inverse white w-full space-x-2 sm:w-56"
                            [routerLink]="['/your-bookings']"
                        >
                            <icon class="text-2xl">open_in_new</icon>
                            <div class="pr-2">
                                {{
                                    'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                        | translate
                                }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="bg-grad border-base-300 text-brand-content col-span-2 flex min-h-48 flex-col items-start justify-center space-y-2 rounded-lg border p-4"
            >
                <div class="relative overflow-hidden rounded px-2 py-1 text-sm">
                    <div
                        class="bg-brand-content absolute inset-0 opacity-20"
                    ></div>
                    <div class="capitalize">No Upcoming Bookings</div>
                </div>
                <h2 class="text-3xl font-medium">Your schedule is clear</h2>
                <p class="text-base opacity-90">
                    Ready to plan your day? Book a space or find a colleague.
                </p>
                <div class="flex w-full flex-wrap gap-3 pt-2">
                    <div class="flex w-full flex-wrap gap-3 sm:w-auto">
                        <a
                            btn
                            matRipple
                            class="white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                            [routerLink]="['/book', 'meeting']"
                        >
                            <div>Book a Space</div>
                        </a>
                        <a
                            btn
                            matRipple
                            class="inverse white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                            [routerLink]="['/book', 'desk']"
                        >
                            <div>Find Desk</div>
                        </a>
                    </div>
                    <div class="hidden w-px flex-1 sm:block"></div>
                    <a
                        btn
                        matRipple
                        class="inverse white w-full space-x-2 sm:w-52"
                        [routerLink]="['/your-bookings']"
                    >
                        <icon class="text-2xl">open_in_new</icon>
                        <div class="pr-2">
                            {{
                                'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                    | translate
                            }}
                        </div>
                    </a>
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
    imports: [
        CommonModule,
        MatRippleModule,
        BindingDirective,
        IconComponent,
        TranslatePipe,
        RouterLink,
        MatTooltipModule,
    ],
})
export class LandingUpcomingBookingComponent extends AsyncHandler {
    private _state = inject(LandingStateService);
    private _schedule = inject(ScheduleStateService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _space_pipe = new SpacePipe(this._org);

    public readonly upcomingEvents = this._state.upcoming_events;
    public readonly room_status = signal('');
    public readonly room_booking_start = signal(0);
    public readonly room_system_id = signal('');
    private readonly _room_event_key = signal('');
    private readonly _current_time_tick = toSignal(timer(0, 1000), {
        initialValue: 0,
    });

    public readonly edit_fn = (i) => this._schedule.edit(i);
    public readonly edit_booking_fn = (i) => this._schedule.editBooking(i);
    public readonly remove_fn = (i, s?) => this._schedule.remove(i, s);
    public readonly end_fn = (i) => this._schedule.end(i);

    public readonly nextEvent = computed(() => {
        const events = this.upcomingEvents();
        return events?.[0];
    });

    public readonly canCheckin = computed(() => {
        const event = this.nextEvent();
        const can_checkin =
            event instanceof Booking
                ? !event.checked_out_at
                : event?.extension_data?.shared_event
                  ? event?.can_check_in
                  : event?.can_check_in;
        return (
            can_checkin &&
            (event instanceof Booking ||
                event?.extension_data?.shared_event ||
                (this.room_status() && this.room_status() !== 'free')) &&
            (event.state === 'upcoming' ||
                event.state === 'started' ||
                event.state === 'in_progress') &&
            event.status !== 'declined'
        );
    });

    public readonly checkinDisabled = computed(
        () => !this.canCheckin() || this.isCheckedIn(),
    );

    public readonly canEdit = computed(() => {
        const event = this.nextEvent();
        if (!event) return false;
        if (event instanceof Booking) return canEditBooking(event);
        return !event.extension_data?.shared_event;
    });

    public readonly deleteDisabled = computed(() => {
        this._current_time_tick();
        const event = this.nextEvent();
        if (!event) return true;
        // Bookings can be ended early (sets checked_out_at); has_ended covers
        // both the manual-end and scheduled-end cases.
        if (event instanceof Booking) return event.has_ended;
        return Date.now() >= event.date_end;
    });

    public readonly eventTitle = computed(() => {
        const event = this.nextEvent();
        if (!event) return '';
        if (event instanceof Booking) {
            return event.title || event.description || event.asset_name || 'Booking';
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
        return now >= event.date && now < event.date_end;
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

    private readonly _checked_in = computed(() => {
        const event = this.nextEvent();
        if (!event) return true;
        if (event instanceof Booking) return event.checked_in;
        if (!event.extension_data?.shared_event) {
            return (
                this.room_status() !== 'pending' &&
                this.room_status() !== 'free' &&
                this._roomBookingMatchesEventStart(event)
            );
        }
        const user_email = currentUser()?.email?.toLowerCase();
        if (!user_email) return false;
        const checked_in = (event.extension_data as any)?.checked_in || [];
        return checked_in.some(
            (email: string) => `${email}`.toLowerCase() === user_email,
        );
    });

    public readonly isCheckedIn = toSignal(
        toObservable(this._checked_in).pipe(
            distinctUntilChanged(),
            debounce((checked_in) => timer(checked_in ? 0 : 300)),
        ),
        {
            initialValue: this._checked_in(),
        },
    );

    constructor() {
        super();
        effect(() => {
            const events = this._state.upcoming_events();
            const event = events?.[0];
            if (
                !(event instanceof CalendarEvent) ||
                event.extension_data?.shared_event
            ) {
                untracked(() => {
                    this._room_event_key.set('');
                    this.room_status.set('');
                    this.room_booking_start.set(0);
                    this.room_system_id.set('');
                });
                return;
            }
            const event_key = (event as any).instance
                ? `${event.id}|${(event as any).instance}`
                : event.id;
            untracked(() => {
                const same_event = this._room_event_key() === event_key;
                this._room_event_key.set(event_key);
                if (!same_event) {
                    this.room_status.set('');
                    this.room_booking_start.set(0);
                    this.room_system_id.set('');
                }
                if (!same_event || !this.room_system_id()) {
                    this._resolveRoomSystem(event);
                }
            });
        });
    }

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
        if (!event) return;

        try {
            if (event instanceof Booking) {
                await checkinBooking(event.id, true);
            } else if (event.extension_data?.shared_event) {
                const user_email = currentUser()?.email;
                if (!user_email) throw new Error('Missing current user email');
                await checkinEventGuest(event.id, user_email, true, {
                    system_id: event.system?.id,
                });
            } else {
                const room_id =
                    this.room_system_id() ||
                    event.space?.id ||
                    event.system?.id;
                const mod = getModule(room_id, 'Bookings');
                if (!mod) throw new Error('Missing bookings module');
                await mod.execute('checkin', [Math.floor(event.date / 1000)]);
            }
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
                    refresh_fn: () => this._state.refreshUpcomingEvents(),
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

    public edit() {
        const event = this.nextEvent();
        if (!event || !this.canEdit()) return;
        event instanceof CalendarEvent
            ? this.edit_fn(event)
            : this.edit_booking_fn(event);
    }

    public remove() {
        const event = this.nextEvent();
        if (this.deleteDisabled()) return;
        this.remove_fn(event);
    }

    public viewDirections() {
        const event = this.nextEvent();
        if (!event) return;

        let itemData: any;
        let zones: readonly string[] = [];

        if (event instanceof Booking) {
            zones = event.zones || [];
            itemData = {
                id: event.asset_id,
                name: event.asset_name || event.description,
                map_id: event.extension_data?.map_id || event.asset_id,
                zones,
                level: this._org.levelWithID([...zones]),
            };
        } else if (event instanceof CalendarEvent) {
            const resource = {
                ...(event.resources?.[0] || {}),
                ...(event.system || {}),
            };
            zones = resource?.zones || [];
            itemData = {
                id: resource?.id,
                name: resource?.display_name || resource?.name || event.title,
                map_id: resource?.map_id || resource?.id,
                zones,
                level: this._org.levelWithID([...zones]),
            };
        }

        if (itemData && itemData.id) {
            this._dialog.open(MapLocateModalComponent, {
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: { item: itemData },
            });
        } else {
            notifyError(i18n('Unable to validate location for booking.'));
        }
    }

    public findColleagues() {
        this._router.navigate(['/explore']);
    }

    private async _resolveRoomSystem(event: CalendarEvent) {
        const lookup_id =
            event.system?.id ||
            event.system?.email ||
            event.resources?.[0]?.id ||
            event.resources?.[0]?.email ||
            '';
        if (!lookup_id) return;
        const space = await this._space_pipe.transform(lookup_id);
        if (this.nextEvent()?.id !== event.id) return;
        this.room_system_id.set(space?.id || event.system?.id || '');
    }

    private _roomBookingMatchesEventStart(event: CalendarEvent) {
        const booking_start = this.room_booking_start();
        if (!booking_start) return false;
        const booking_start_ms =
            booking_start < 1_000_000_000_000
                ? booking_start * 1000
                : booking_start;
        return Math.abs(booking_start_ms - event.date) <= 60 * 1000;
    }
}

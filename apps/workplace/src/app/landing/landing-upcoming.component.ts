import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import {
    BookingCardComponent,
    BookingFormService,
    removeBooking,
    setBookingCheckedIn,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    CalendarEvent,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { openConfirmModal, TranslatePipe } from '@placeos/components';
import {
    EventCardComponent,
    EventFormService,
    queryEvents,
    removeEvent,
} from '@placeos/events';
import { format } from 'date-fns';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-upcoming',
    template: `
        <div class="py-2">
            <div class="mb-2 flex items-center justify-between px-4 sm:mb-4">
                <div class="font-medium sm:text-lg">
                    {{ 'APP.WORKPLACE.UPCOMING' | translate }}
                </div>
                <a
                    btn
                    name="upcoming-view-all"
                    class="inverse hidden sm:flex"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'COMMON.VIEW_ALL' | translate }}
                </a>
                <a
                    name="upcoming-view-all-mobile"
                    class="inverse relative top-8 flex text-blue-500 underline sm:hidden"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'COMMON.VIEW_ALL' | translate }}
                </a>
            </div>
            <div class="space-y-4 px-4">
                @let events = upcoming_events();
                @if (events?.length) {
                    @for (
                        event of events | slice: 0 : 5;
                        track event.id || $index
                    ) {
                        @switch (type(event)) {
                            @case ('event') {
                                <event-card
                                    [event]="event"
                                    [show_day]="true"
                                    [edit_fn]="edit_fn"
                                    [remove_fn]="remove_fn"
                                ></event-card>
                            }
                            @case ('booking') {
                                <booking-card
                                    [booking]="event"
                                    [show_day]="true"
                                    [edit_fn]="edit_booking_fn"
                                    [remove_fn]="remove_fn"
                                    [end_fn]="end_fn"
                                    [refresh_fn]="refresh_fn"
                                ></booking-card>
                            }
                        }
                    }
                    @if (events.length > 5) {
                        <a
                            name="upcoming-more-bookings"
                            class="border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200 block rounded-xl border border-dashed p-4 text-center text-sm transition-colors"
                            [routerLink]="['/your-bookings']"
                        >
                            {{ 'APP.WORKPLACE.UPCOMING_MORE' | translate }}
                        </a>
                    }
                } @else {
                    <div
                        class="flex w-full flex-col items-center justify-center space-y-4 p-8"
                    >
                        <img src="assets/img/no-events.svg" class="mr-4" />
                        <p class="opacity-30">
                            {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        RouterModule,
        EventCardComponent,
        BookingCardComponent,
        TranslatePipe,
    ],
})
export class LandingUpcomingComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _state = inject(LandingStateService);
    private _event_form = inject(EventFormService);
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly upcoming_events = this._state.upcoming_events;

    public type(event: CalendarEvent | Booking) {
        return event instanceof Booking ? 'booking' : 'event';
    }

    public readonly edit_fn = (i) => this.edit(i);
    public readonly edit_booking_fn = (i) => this.editBooking(i);
    public readonly remove_fn = (i, s?) => this.remove(i, s);
    public readonly end_fn = (i) => this.end(i);
    public readonly refresh_fn = () => this._state.refreshUpcomingEvents();

    public ngOnInit() {
        // this._state.refreshUpcomingEvents();
        this.subscription('poll', this._state.pollUpcomingEvents());
    }

    public async edit(event: CalendarEvent) {
        console.log('Edit Event:', event);
        this._router.navigate(['/book', 'meeting', 'form']);
        if (event.creator !== event.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    })
                ).find((_) => _.ical_uid === event.ical_uid) || event;
        }
        setTimeout(() => this._event_form.newForm(event), 300);
    }

    public editBooking(event: Booking) {
        this._router.navigate(['/book', `${event.type}`]);
        this._booking_form.newForm(event.booking_type, event);
        if (event.booking_type === 'visitor') return;
        setTimeout(() => {
            this._booking_form.model.update((m) => ({
                ...m,
                resources: [
                    {
                        id: event.asset_id,
                        name: event.asset_name || event.description,
                    },
                ],
                asset_id: event.asset_id,
            }));
        }, 100);
    }

    public async remove(item: CalendarEvent | Booking, remove_series = false) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name =
            item instanceof CalendarEvent
                ? item.space?.display_name
                : item.asset_name || item.asset_id;
        const resp = await openConfirmModal(
            {
                title: i18n('APP.WORKPLACE.SCHEDULE_REMOVE_TITLE'),
                content: i18n('APP.WORKPLACE.SCHEDULE_REMOVE_MSG', {
                    name: resource_name,
                    time,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.WORKPLACE.SCHEDULE_REMOVE_LOADING'));
        const remove_result = (
            item instanceof CalendarEvent ? removeEvent : removeBooking
        )(item.id, {
            calendar: this._settings.get('app.events.use_bookings')
                ? null
                : currentUser()?.email,
            system_id: (item as any).system?.id,
            instance: remove_series ? undefined : !!(item as any).instance,
            start_time: (item as any).instance
                ? (item as any).booking_start
                : undefined,
        } as any) as any;
        await (
            remove_result?.then instanceof Function
                ? remove_result
                : remove_result.toPromise()
        ).catch((e) => {
            notifyError(
                i18n('APP.WORKPLACE.SCHEDULE_REMOVE_ERROR', { error: e }),
            );
            resp.close();
            throw e;
        });
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS'));
        this._state.refreshUpcomingEvents();
        this._dialog.closeAll();
    }

    public async end(item: Booking) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name = item.asset_name || item.asset_id;
        const resp = await openConfirmModal(
            {
                title: i18n('APP.WORKPLACE.SCHEDULE_END_TITLE'),
                content: i18n('APP.WORKPLACE.SCHEDULE_END_MSG', {
                    name: resource_name,
                    time,
                }),
                icon: { content: 'event_busy' },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.WORKPLACE.SCHEDULE_END_LOADING'));
        await setBookingCheckedIn(item, false).catch((e) => {
            notifyError(i18n('APP.WORKPLACE.SCHEDULE_END_ERROR', { error: e }));
            resp.close();
            throw e;
        });
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_END_SUCCESS'));
        this._state.refreshUpcomingEvents();
        this._dialog.closeAll();
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    Booking,
    BookingFormService,
    checkinBooking,
    removeBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { CalendarEvent, EventFormService, removeEvent } from '@placeos/events';
import { format } from 'date-fns';
import { LandingStateService } from './landing-state.service';
import { openConfirmModal } from '@placeos/components';

@Component({
    selector: 'landing-upcoming',
    template: `
        <div class="py-2">
            <div class="flex items-center justify-between mb-2 sm:mb-4 px-4">
                <div class="sm:text-lg font-medium">
                    {{ 'APP.WORKPLACE.UPCOMING' | translate }}
                </div>
                <a
                    btn
                    name="upcoming-view-all"
                    class="inverse hidden sm:flex"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'APP.WORKPLACE.UPCOMING_VIEW' | translate }}
                </a>
                <a
                    name="upcoming-view-all-mobile"
                    class="inverse flex sm:hidden text-blue-500 underline relative top-8"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'APP.WORKPLACE.UPCOMING_VIEW' | translate }}
                </a>
            </div>
            <div class="space-y-4 px-4">
                <ng-container
                    *ngIf="(upcoming_events | async)?.length; else empty_state"
                >
                    <ng-container
                        *ngFor="
                            let event of upcoming_events | async | slice: 0 : 5;
                            trackBy: trackByFn
                        "
                    >
                        <ng-container [ngSwitch]="type(event)">
                            <event-card
                                *ngSwitchCase="'event'"
                                [event]="event"
                                [show_day]="true"
                                (edit)="edit(event)"
                                (remove)="remove(event)"
                            ></event-card>
                            <booking-card
                                *ngSwitchCase="'booking'"
                                [booking]="event"
                                [show_day]="true"
                                (edit)="editBooking(event)"
                                (remove)="remove(event, true)"
                                (end)="end(event)"
                            ></booking-card>
                        </ng-container>
                    </ng-container>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full p-8 flex flex-col items-center justify-center space-y-4"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class LandingUpcomingComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public readonly upcoming_events = this._state.upcoming_events;

    public type(event: CalendarEvent | Booking) {
        return event instanceof Booking ? 'booking' : 'event';
    }

    constructor(
        private _state: LandingStateService,
        private _event_form: EventFormService,
        private _booking_form: BookingFormService,
        private _router: Router,
        private _dialog: MatDialog,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        // this._state.refreshUpcomingEvents();
        this.subscription('poll', this._state.pollUpcomingEvents());
    }

    public trackByFn(_: number, item: any) {
        return item?.id;
    }

    public edit(event: CalendarEvent) {
        this._router.navigate(['/book', 'meeting', 'form']);
        this._event_form.newForm(event);
    }

    public editBooking(event: Booking) {
        this._router.navigate(['/book', `new-${event.type}`]);
        this._booking_form.newForm(event);
        setTimeout(() => {
            this._booking_form.form.patchValue({
                resources: [
                    {
                        id: event.asset_id,
                        name: event.asset_name || event.description,
                    },
                ],
                asset_id: event.asset_id,
            });
        }, 100);
    }

    public async remove(
        item: CalendarEvent | Booking,
        remove_series: boolean = false,
    ) {
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
        await (item instanceof CalendarEvent ? removeEvent : removeBooking)(
            item.id,
            {
                calendar: this._settings.get('app.events.use_bookings')
                    ? null
                    : currentUser()?.email,
                system_id: (item as any).system?.id,
                instance: remove_series ? undefined : !!(item as any).instance,
                start_time: (item as any).instance
                    ? (item as any).booking_start
                    : undefined,
            } as any,
        )
            .toPromise()
            .catch((e) => {
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
        await checkinBooking(item.id, false)
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.WORKPLACE.SCHEDULE_END_ERROR', { error: e }),
                );
                resp.close();
                throw e;
            });
        notifySuccess(i18n('APP.WORKPLACE.SCHEDULE_END_SUCCESS'));
        this._state.refreshUpcomingEvents();
        this._dialog.closeAll();
    }
}

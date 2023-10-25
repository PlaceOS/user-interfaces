import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    Booking,
    BookingFormService,
    checkinBooking,
    queryBookings,
    removeBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import {
    CalendarEvent,
    EventFormService,
    queryEvents,
    removeEvent,
} from '@placeos/events';
import { format, isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { ScheduleStateService } from './schedule-state.service';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-schedule',
    template: `
        <topbar *ngIf="!hide_nav"></topbar>
        <div
            class="flex flex-col sm:flex-row flex-1 h-1/2 bg-base-200 relative"
        >
            <schedule-sidebar
                class="hidden sm:block bg-base-100"
            ></schedule-sidebar>
            <div class="w-full bg-base-100 border-b border-neutral sm:hidden">
                <schedule-mobile-calendar
                    [ngModel]="date | async"
                    (ngModelChange)="setDate($event)"
                ></schedule-mobile-calendar>
            </div>
            <div class="flex-1 h-full p-4 overflow-auto space-y-2">
                <schedule-filters></schedule-filters>
                <h3 class="font-medium my-2">
                    {{ date | async | date: 'EEE dd LLL yyyy' }}
                    <span *ngIf="is_today | async"
                        >({{ 'COMMON.TODAY' | translate }})</span
                    >
                </h3>
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <ng-container
                        *ngFor="
                            let item of bookings | async;
                            trackBy: trackByFn
                        "
                    >
                        <event-card
                            *ngIf="isEvent(item); else booking_card"
                            [event]="item"
                            (edit)="edit(item)"
                            (remove)="remove(item, $event)"
                        ></event-card>
                        <ng-template #booking_card>
                            <booking-card
                                [booking]="item"
                                (edit)="editBooking(item)"
                                (remove)="remove(item)"
                                (end)="end(item)"
                            ></booking-card>
                        </ng-template>
                    </ng-container>
                </ng-container>
            </div>
            <mat-progress-bar
                *ngIf="loading | async"
                class="absolute inset-x-0 bottom-0"
                mode="indeterminate"
            ></mat-progress-bar>
        </div>
        <footer-menu *ngIf="!hide_nav"></footer-menu>
        <ng-template #empty_state>
            <div
                class="w-full p-8 flex flex-col items-center justify-center space-y-4"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    {{ 'WPA.SCHEDULE_EMPTY' | translate }}
                    {{ date | async | date: 'EEEE, dd LLL yyyy' }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class ScheduleComponent extends AsyncHandler {
    public readonly bookings = combineLatest([
        this._state.filtered_bookings,
        this._state.loading,
    ]).pipe(map(([bookings, loading]) => (loading ? [] : bookings)));
    public readonly date = this._state.date;
    public readonly loading = this._state.loading;
    public readonly is_today = this.date.pipe(
        map((_) => isSameDay(_, Date.now()))
    );
    public readonly setDate = (d) => this._state.setDate(d);

    public isEvent(item: any) {
        return item instanceof CalendarEvent;
    }

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    constructor(
        private _state: ScheduleStateService,
        private _event_form: EventFormService,
        private _booking_form: BookingFormService,
        private _router: Router,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this._state.triggerPoll();
        this.subscription('poll', this._state.startPolling());
    }

    public trackByFn(index: number, item: any) {
        return item?.id;
    }

    public async edit(event: CalendarEvent) {
        this._router.navigate(['/book', 'meeting', 'form']);
        if (event.creator !== event.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    }).toPromise()
                ).find((_) => _.ical_uid === event.ical_uid) || event;
        }
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

    public async remove(item: CalendarEvent | Booking, remove_series = false) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name =
            item instanceof CalendarEvent
                ? item.space?.display_name
                : item.asset_name || item.asset_id;
        const content = `Delete the ${
            remove_series ? 'recurring series of ' : ''
        }booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Delete booking`, content, icon: { content: 'delete' } },
            this._dialog
        );
        if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
            item =
                (
                    await queryEvents({
                        period_start: item.event_start,
                        period_end: item.event_end,
                        ical_uid: item.ical_uid,
                    }).toPromise()
                ).find((_) => _.ical_uid === (item as any).ical_uid) || item;
        }
        if (resp.reason !== 'done') return;
        resp.loading('Requesting booking deletion...');
        await (item instanceof CalendarEvent ? removeEvent : removeBooking)(
            remove_series ? (item as any).recurring_event_id : item.id,
            {
                calendar: this._settings.get('app.no_user_calendar')
                    ? null
                    : (item as any).calendar || currentUser()?.email,
                system_id: (item as any).system?.id,
            }
        )
            .toPromise()
            .catch((e) => {
                notifyError(`Unable to delete booking. ${e}`);
                resp.close();
                throw e;
            });
        notifySuccess('Successfully deleted booking.');
        this._state.removeItem(item);
        this._dialog.closeAll();
    }

    public async end(item: Booking) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name = item.asset_name || item.asset_id;
        const content = `End the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `End booking`, content, icon: { content: 'delete' } },
            this._dialog
        );

        if (resp.reason !== 'done') return;
        resp.loading('Ending booking...');
        await checkinBooking(item.id, false)
            .toPromise()
            .catch((e) => {
                notifyError(`Unable to end booking. ${e}`);
                resp.close();
                throw e;
            });
        notifySuccess('Successfully ended booking.');
        this._state.removeItem(item);
        this._dialog.closeAll();
    }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Booking, checkinBooking, removeBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import { CalendarEvent, EventFormService, removeEvent } from '@placeos/events';
import { format, isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { ScheduleStateService } from './schedule-state.service';

@Component({
    selector: 'app-schedule',
    template: `
        <topbar *ngIf="!hide_nav"></topbar>
        <div
            class="flex flex-col sm:flex-row flex-1 h-1/2 bg-[#F8F8FA] dark:bg-neutral-900 relative"
        >
            <schedule-sidebar class="hidden sm:block"></schedule-sidebar>
            <div
                class="w-full bg-white dark:bg-[#1F2021] border-b border-gray-300 sm:hidden"
            >
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
                            let item of (loading | async)
                                ? []
                                : (bookings | async);
                            trackBy: trackByFn
                        "
                    >
                        <event-card
                            *ngIf="isEvent(item); else booking_card"
                            [event]="item"
                            (edit)="edit(item)"
                            (remove)="remove(item)"
                        ></event-card>
                        <ng-template #booking_card>
                            <booking-card
                                [booking]="item"
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
    public readonly bookings = this._state.filtered_bookings;
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

    public edit(event: CalendarEvent) {
        this._router.navigate(['/book', 'meeting', 'form']);
        this._event_form.newForm(event);
    }

    public async remove(item: CalendarEvent | Booking) {
        const time = `${format(item.date, 'dd MMM yyyy h:mma')}`;
        const resource_name =
            item instanceof CalendarEvent
                ? item.space?.display_name
                : item.asset_name || item.asset_id;
        const content = `Delete the booking for ${resource_name} at ${time}`;
        const resp = await openConfirmModal(
            { title: `Delete booking`, content, icon: { content: 'delete' } },
            this._dialog
        );
        console;
        if (resp.reason !== 'done') return;
        resp.loading('Requesting booking deletion...');
        await (item instanceof CalendarEvent ? removeEvent : removeBooking)(
            item.id,
            this._settings.get('app.no_user_calendar')
                ? { system_id: (item as any).system?.id }
                : undefined
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

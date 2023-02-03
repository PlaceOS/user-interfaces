import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Booking, removeBooking } from '@placeos/bookings';
import { notifyError, notifySuccess, openConfirmModal, SettingsService } from '@placeos/common';
import { CalendarEvent, EventFormService, removeEvent } from '@placeos/events';
import { format } from 'date-fns';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-upcoming',
    template: `
        <div class="py-2">
            <div class="flex items-center justify-between mb-2 sm:mb-4 px-4">
                <div class="sm:text-lg font-medium">
                    {{ 'WPA.YOUR_BOOKINGS' | translate }}
                </div>
                <a
                    btn
                    class="inverse hidden sm:flex"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'WPA.VIEW_ALL' | translate }}
                </a>
                <a
                    class="inverse flex sm:hidden text-blue-500 underline relative top-8"
                    [routerLink]="['/your-bookings']"
                >
                    {{ 'WPA.VIEW_ALL' | translate }}
                </a>
            </div>
            <div class="space-y-4 px-4">
                <ng-container
                    *ngIf="(upcoming_events | async)?.length; else empty_state"
                >
                    <ng-container
                        *ngFor="
                            let event of upcoming_events | async | slice: 0:5;
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
                                (remove)="remove(event)"
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
                    {{ 'WPA.NO_UPCOMING_BOOKINGS' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class LandingUpcomingComponent implements OnInit, OnDestroy {
    public readonly upcoming_events = this._state.upcoming_events;

    public type(event: CalendarEvent | Booking) {
        return event instanceof Booking ? 'booking' : 'event';
    }

    constructor(
        private _state: LandingStateService,
        private _event_form: EventFormService,
        private _router: Router,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {}

    public ngOnInit() {
        this._state.refreshUpcomingEvents();
        // this._state.pollUpcomingEvents();
    }

    public ngOnDestroy() {
        this._state.stopPollingUpcomingEvents();
    }

    public trackByFn(_: number, item: any) {
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
        this._state.refreshUpcomingEvents();
        this._dialog.closeAll();
    }
}

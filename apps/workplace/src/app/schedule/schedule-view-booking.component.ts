import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Booking,
    BookingFormService,
    rejectBooking,
    showBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import { addMinutes, formatDuration, isAfter } from 'date-fns';
import { MapLocateModalComponent } from '@placeos/components';

@Component({
    selector: 'schedule-view-booking',
    template: `
        <div topbar class="">
            <a
                class="clear h-[2.75rem] text-white"
                btn
                matRipple
                [routerLink]="['/schedule']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
        <div
            class="flex-1 w-full flex flex-col items-center bg-base-200 p-4 overflow-auto"
        >
            <div
                class="max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200"
                *ngIf="event; else load_state"
            >
                <h2 class="text-xl uppercase font-medium w-full my-4">
                    {{ event.title }}
                </h2>
                <div
                    class="flex items-center py-2 space-x-2 w-full !border-none"
                >
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>event</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.date | date: 'longDate' }}
                        <span
                            *ngIf="!event.all_day && event.duration < 12 * 60"
                        >
                            at {{ event.date | date: 'shortTime' }} ~
                            {{
                                event.date + event.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </span>
                    </div>
                </div>
                <div class="flex items-center py-2 space-x-2 w-full">
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>schedule</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{
                            !event.all_day && event.duration < 12 * 60
                                ? duration
                                : 'All Day'
                        }}
                    </div>
                </div>
                <div
                    class="flex items-center py-2 space-x-2 w-full"
                    *ngIf="event.asset_id"
                >
                    <div class="p-2 rounded-full bg-base-200 mr-2">
                        <app-icon>menu_book</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.description || '&lt;No Asset&gt;' }}
                    </div>
                    <button
                        matRipple
                        locate
                        *ngIf="event.extension_data.map_id && can_view_location"
                        class="bg-transparent border-none underline text-black"
                        (click)="viewLocation()"
                    >
                        Map
                    </button>
                </div>
                <div
                    class="flex items-center justify-center space-x-2 mt-4 !border-none"
                    *ngIf="!has_ended && is_host"
                >
                    <button
                        matRipple
                        remove
                        class="w-32 error inverse"
                        [disabled]="loading"
                        (click)="confirmDelete()"
                    >
                        {{ is_host ? 'Delete' : 'Decline' }} Event
                    </button>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Loading booking data...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }

            [list] {
                transition: height 200ms;
            }
        `,
    ],
})
export class ScheduleViewBookingComponent extends AsyncHandler {
    @Input() public event: Booking;

    public get is_host() {
        return this.event?.user_email === currentUser()?.email;
    }

    public get can_view_location() {
        return !this._settings.get('app.no_maps');
    }

    public get duration() {
        return this.event.all_day || this.event.duration >= 12 * 60
            ? 'All Day'
            : formatDuration({
                  hours: Math.floor(this.event?.duration / 60),
                  minutes: this.event?.duration % 60,
              });
    }

    public get has_ended() {
        return (
            this.event &&
            isAfter(
                new Date(),
                addMinutes(this.event.date, this.event.duration)
            )
        );
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _bookings: BookingFormService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    this.event = await showBooking(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                }
            })
        );
        this.timeout(
            'return',
            () => (!this.event ? this._router.navigate(['/schedule']) : ''),
            8 * 1000
        );
    }

    public viewLocation() {
        this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: {
                item: {
                    id: this.event.asset_id,
                    map_id: this.event.extension_data.map_id,
                    name: this.event.description,
                    zones: this.event.zones,
                },
            },
        });
    }

    public editEvent() {
        this._bookings.newForm(this.event);
        this._router.navigate(['/book', 'desks', 'form']);
    }

    public async confirmDelete() {
        const details = await openConfirmModal(
            {
                title: `${this.is_host ? 'Delete' : 'Decline'} event`,
                content: `Are you sure you wish to ${
                    this.is_host ? 'delete' : 'decline'
                } this event?`,
                icon: { content: this.is_host ? 'delete' : 'event_busy' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.loading('Removing booking...');
        await rejectBooking(this.event.id)
            .toPromise()
            .catch((e) => {
                details.loading('');
                notifyError(`Error removing booking. ${e}`);
                throw e;
            });
        notifySuccess('Successfully removed booking.');
        this._router.navigate(['/schedule']);
        details.close();
    }
}

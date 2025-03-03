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
    SettingsService,
    formatDuration,
} from '@placeos/common';
import { addMinutes, isAfter } from 'date-fns';
import { MapLocateModalComponent, openConfirmModal } from '@placeos/components';

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
                <div class="flex h-full items-center justify-center">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="mx-4 ml-2">Back</span>
                </div>
            </a>
        </div>
        <div
            class="flex w-full flex-1 flex-col items-center overflow-auto bg-base-200 p-4"
        >
            <div
                class="w-[28rem] max-w-full divide-y divide-base-200 border border-base-200 bg-base-100 px-4 pb-4"
                *ngIf="event; else load_state"
            >
                <h2 class="my-4 w-full text-xl font-medium uppercase">
                    {{ event.title }}
                </h2>
                <div
                    class="flex w-full items-center space-x-2 !border-none py-2"
                >
                    <div class="mr-2 rounded-full bg-base-200 p-2">
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
                <div class="flex w-full items-center space-x-2 py-2">
                    <div class="mr-2 rounded-full bg-base-200 p-2">
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
                    class="flex w-full items-center space-x-2 py-2"
                    *ngIf="event.asset_id"
                >
                    <div class="mr-2 rounded-full bg-base-200 p-2">
                        <app-icon>menu_book</app-icon>
                    </div>
                    <div class="flex-1 truncate">
                        {{ event.description || '&lt;No Asset&gt;' }}
                    </div>
                    <button
                        matRipple
                        locate
                        *ngIf="event.extension_data.map_id && can_view_location"
                        class="bg-transparent border-none text-black underline"
                        (click)="viewLocation()"
                    >
                        Map
                    </button>
                </div>
                <div
                    class="mt-4 flex items-center justify-center space-x-2 !border-none"
                    *ngIf="!has_ended && is_host"
                >
                    <button
                        matRipple
                        remove
                        class="error inverse w-32"
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
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
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
    standalone: false,
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
                addMinutes(this.event.date, this.event.duration),
            )
        );
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _bookings: BookingFormService,
        private _settings: SettingsService,
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
            }),
        );
        this.timeout(
            'return',
            () => (!this.event ? this._router.navigate(['/schedule']) : ''),
            8 * 1000,
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
            this._dialog,
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

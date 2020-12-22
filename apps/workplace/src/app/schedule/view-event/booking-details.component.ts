import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Booking } from '@user-interfaces/bookings';
import { BaseClass } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewRoomModalComponent } from '../../overlays/view-room-modal.component';
import { ScheduleStateService } from '../schedule-state.service';

@Component({
    selector: 'schedule-booking-details',
    template: `
        <div>
            <div class="flex flex-col items-center mb-4">
                <div class="text-xl capitalize mb-2 font-medium">
                    {{ (event | async)?.title || 'No Title' }}
                </div>
            </div>
            <div
                class="rounded py-4 bg-white border-gray-300 shadow space-y-4 w-full text-lg"
            >
                <div class="flex items-center space-x-2 px-3">
                    <app-icon class="text-2xl">perm_identity</app-icon>
                    <div class="flex-1">{{ (event | async)?.user_name }}</div>
                </div>
                <hr class="ml-12" />
                <div class="flex items-center space-x-2 px-3">
                    <app-icon class="text-2xl">schedule</app-icon>
                    <div class="flex-1">{{ when | async }}</div>
                </div>
                <hr class="ml-12" />
                <div class="flex items-center space-x-2 px-3">
                    <app-icon class="text-2xl">place</app-icon>
                    <div class="flex-1">{{ (event | async)?.description }}</div>
                </div>
                <hr class="ml-12" />
                <div class="flex items-center space-x-2 px-4">
                    <button
                        *ngIf="(event | async)?.asset_id"
                        (click)="locate()"
                        class="w-24"
                        mat-button
                    >
                        View
                    </button>
                    <div class="flex-1"></div>
                    <button
                        (click)="deleteEvent()"
                        class="error w-24"
                        mat-button
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                margin: auto;
                width: 640px;
                max-width: 100vw;
                padding: 1rem;
            }
        `,
    ],
})
export class BookingDetailsComponent extends BaseClass {
    public readonly event: Observable<Booking> = this._state.active_item as any;

    public readonly when = this.event.pipe(
        map((item) => {
            if (!item) {
                return 'Unable to determine.';
            }
            const date = dayjs(item.date);
            const end = date.add(item.duration || 60, 'm');
            if (item.all_day || item.duration > 23 * 60) {
                return `${date.format('DD MMM YYYY')} - All Day`;
            } else {
                if (date.isSame(end, 'd')) {
                    return `${date.format(
                        'DD MMM YYYY, h:mm A'
                    )} - ${end.format('h:mm A')}`;
                } else {
                    return `${date.format(
                        'DD MMM YYYY, h:mm A'
                    )} - ${end.format('DD MMM YYYY, h:mm A')}`;
                }
            }
        })
    );

    public readonly deleteEvent = () => this._state.deleteEvent();

    constructor(
        private _state: ScheduleStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public async locate() {
        const item = await this.event.toPromise();
        const space = new Space({
            name: 'Desk Booking',
            map_id: item.asset_id,
            zones: item.zones,
        });
        if (!space.level) {
            // this._service.notifyInfo('The space cannot be located.');
        }
        this._dialog.open(ViewRoomModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }
}

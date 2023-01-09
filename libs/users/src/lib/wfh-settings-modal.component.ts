import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { currentUser, SettingsService } from '@placeos/common';
import { endOfDay, getUnixTime, setDay, startOfDay } from 'date-fns';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import { queryBookings, saveBooking } from 'libs/bookings/src/lib/bookings.fn';

const WFH_SETTING_KEY = 'wfh-days';

@Component({
    selector: `wfh-settings-modal`,
    template: `
        <div
            class="relative flex flex-col rounded overflow-hidden w-[18rem]"
            *ngIf="!loading; else load_state"
        >
            <div
                class="w-full px-4 py-8 flex flex-col items-center border-b border-gray-200"
            >
                <a-user-avatar [user]="user"></a-user-avatar>
                <div>{{ user.name }}</div>
                <div class="text-xs opacity-30">{{ user.email }}</div>
                <div class="text-xs opacity-30">{{ user.phone }}</div>
            </div>
            <div class="w-full p-4 flex flex-col  border-b border-gray-200">
                <h3 class="-mt-2 mb-2 text-sm font-medium">
                    Today's Working Location
                </h3>
                <button
                    matRipple
                    today-location
                    class="inverse rounded-3xl w-auto"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center justify-between">
                        <div class="uppercase">{{ option }}</div>
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </div>
                </button>
                <div class="flex items-center pt-4 space-x-2">
                    <div
                        class="h-8 w-8 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center"
                    >
                        <app-icon>home</app-icon>
                    </div>
                    <div class="flex-1 w-1/2 text-sm">
                        Today is a working from home day. Available for online
                        meetings.
                    </div>
                </div>
            </div>
            <div class="w-full p-4 flex flex-col">
                <h3 class="-mt-2 mb-2 text-sm font-medium">
                    Default Office Days
                </h3>
                <div
                    class="border border-gray-200 rounded flex items-center justify-between px-2 pt-2"
                >
                    <div
                        class="flex flex-col items-center"
                        *ngFor="let day of weekdays; let i = index"
                    >
                        <div class="text-sm font-light">
                            {{ day | date: 'EEE' }}
                        </div>
                        <div
                            class="h-8 w-8 flex items-center justify-center pr-2"
                        >
                            <mat-checkbox
                                [(ngModel)]="settings[available_weekdays[i]]"
                                (ngModelChange)="changed = true"
                            ></mat-checkbox>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end px-4 pb-4">
                <button
                    matRipple
                    save
                    [disabled]="!changed"
                    (click)="saveChanges()"
                >
                    Update
                </button>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-0 left-0"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let type of options"
                [attr.id]="type.id"
                (click)="option = type.id; changed = true"
            >
                {{ type.name }}
            </button>
        </mat-menu>
        <ng-template #load_state>
            <div
                loading
                class="relative bg-white flex flex-col justify-center items-center rounded overflow-hidden w-[18rem] h-[18rem]"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving changes to work location settings...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class WFHSettingsModalComponent implements OnInit {
    public readonly options = [
        { id: 'wfo', name: 'Work from office (WFO)' },
        { id: 'wfh', name: 'Work from home (WFH)' },
        { id: 'aol', name: 'Away on Leave (AOL)' },
    ];
    public option = this.options[0].id;
    public settings = [true, true, true, true, true, true, true];
    public weekdays = [];
    public changed = false;
    public loading = false;
    public readonly available_weekdays = [1, 2, 3, 4, 5];

    private _booking: Booking = new Booking({
        type: 'wfh-settings',
        asset_id: this.options[0].id,
    });

    constructor(
        private _settings: SettingsService,
        private _dialog_ref: MatDialogRef<WFHSettingsModalComponent>
    ) {}

    public ngOnInit() {
        this.settings = this._settings.get(WFH_SETTING_KEY) || [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ];
        this._initWeekdays();
        this._loadOptionForToday();
    }

    public get user() {
        return currentUser();
    }

    public async saveChanges() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        if (
            this.option !== this.options[0].id &&
            this.option !== this._booking.asset_id
        ) {
            await saveBooking(
                new Booking({ ...this._booking, asset_id: this.option })
            )
                .toPromise()
                .catch((e) => {
                    this._dialog_ref.disableClose = false;
                    this.loading = false;
                    throw e;
                });
        }
        this._settings.saveUserSetting(WFH_SETTING_KEY, this.settings);
        this.loading = false;
        this._dialog_ref.close();
    }

    private _initWeekdays() {
        let day = new Date();
        this.weekdays = this.available_weekdays.map((_) =>
            setDay(day, _).valueOf()
        );
    }

    private async _loadOptionForToday() {
        const list = await queryBookings({
            type: 'wfh-setting',
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
        }).toPromise();
        if (list.length) {
            this.option = list[0].asset_id;
            this._booking = list[0];
        }
    }
}

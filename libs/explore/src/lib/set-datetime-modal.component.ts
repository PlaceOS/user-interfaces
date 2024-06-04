import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { BookingAsset } from 'libs/bookings/src/lib/booking-form.service';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'set-datetime-modal',
    template: `
        <header classs="flex items-center justify-between">
            <h2>Set date and time</h2>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="form"
            [formGroup]="form"
            class="w-[24rem] max-w-[85vw] pt-4"
        >
            <div
                *ngIf="resource"
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/4 mb-2">
                    <label>Resource:</label>
                    <div
                        class="px-4 py-3 border border-base-200 rounded w-full mb-4"
                    >
                        {{
                            resource.name ||
                                resource.map_id ||
                                'Unknown Resource'
                        }}
                    </div>
                </div>
            </div>
            <div
                *ngIf="host"
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/4">
                    <label>Host</label>
                    <a-user-search-field
                        formControlName="user"
                        class="mb-4"
                    ></a-user-search-field>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/4">
                    <label>Date</label>
                    <a-date-field [to]="book_until" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>Start Time</label>
                    <a-time-field
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [use_24hr]="use_24hr_time"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>End Time</label>
                    <a-duration-field
                        formControlName="duration"
                        [time]="form.get('date')?.value"
                        [max]="10 * 60"
                        [min]="60"
                        [step]="60"
                        [use_24hr]="use_24hr_time"
                    >
                    </a-duration-field>
                </div>
            </div>
        </main>
        <footer
            class="w-full p-2 border-t border-base-200 flex items-center justify-center"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                Continue
            </button>
        </footer>
    `,
    styles: [``],
})
export class SetDatetimeModalComponent {
    public host = this._data.host;
    public form = new FormGroup({
        user: new FormControl(this._data.user),
        date: new FormControl(this._data.date),
        duration: new FormControl(this._data.duration),
    });

    public readonly book_until = this._data.until;
    public readonly resource = this._data.resource;

    public get use_24hr_time() {
        return this._settings.get('app.use_24_hour_time');
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            date: number;
            duration: number;
            until: number;
            host: boolean;
            user?: User;
            resource: BookingAsset;
        },
        private _settings: SettingsService
    ) {}
}

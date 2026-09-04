import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {
    alignDateToBookableHours,
    BookableHoursRange,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';

import { BookingAsset } from 'libs/bookings/src/lib/booking-form.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';

@Component({
    selector: 'set-datetime-modal',
    template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw]">
                @if (resource()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>{{ resource_type() }}:</label>
                            <div
                                class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                            >
                                {{
                                    resource().name ||
                                        resource().map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Host</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    </div>
                }
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/4">
                        <label>Date</label>
                        <a-date-field
                            [to]="book_until()"
                            formControlName="date"
                        >
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                @if (allow_all_day()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] justify-end"
                        [class.-mb-7]="!form.value.all_day"
                        [class.mb-2]="form.value.all_day"
                    >
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (!all_day()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>Start Time</label>
                            <a-time-field
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr_time()"
                            ></a-time-field>
                        </div>
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>End Time</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [end_time]="bookable_hours()?.end"
                                [use_24hr]="use_24hr_time()"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        MatDialogModule,
        MatCheckboxModule,
        IconComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        UserSearchFieldComponent,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
    ],
})
export class SetDatetimeModalComponent implements OnInit {
    private _data = inject<{
        date: number;
        duration: number;
        until: number;
        host: boolean;
        user?: User;
        resource_type?: string;
        resource: BookingAsset;
        all_day?: boolean;
        allow_all_day?: boolean;
        bookable_hours?: BookableHoursRange | null;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);

    public readonly host = signal(this._data.host);
    public readonly form = new FormGroup({
        user: new FormControl(this._data.user),
        date: new FormControl(this._data.date),
        duration: new FormControl(this._data.duration),
        all_day: new FormControl(this._data.all_day ?? false),
    });

    public readonly book_until = signal(this._data.until);
    public readonly resource_type = signal(
        this._data.resource_type || 'Resource',
    );
    public readonly resource = signal(this._data.resource);
    public readonly allow_all_day = signal(this._data.allow_all_day ?? false);
    public readonly bookable_hours = signal(this._data.bookable_hours ?? null);
    public readonly all_day = toSignal(
        this.form.controls.all_day.valueChanges,
        {
            initialValue: this.form.controls.all_day.value,
        },
    );
    public readonly use_24hr_time = settingSignal('use_24_hour_time', false);

    public ngOnInit(): void {
        if (this.bookable_hours()) {
            const aligned_date = alignDateToBookableHours(
                this.form.value.date,
                this.bookable_hours(),
            );
            if (aligned_date !== this.form.value.date) {
                this.form.patchValue({ date: aligned_date });
            }
        }
        this.form.controls.date.valueChanges.subscribe((date) => {
            if (this.bookable_hours() && date) {
                const aligned = alignDateToBookableHours(
                    date,
                    this.bookable_hours(),
                    this._data.date,
                );
                if (aligned !== date) {
                    this.form.patchValue({ date: aligned });
                }
            }
        });
        this.form.controls.all_day.valueChanges.subscribe((all_day) => {
            if (all_day) {
                this.form.controls.duration.disable();
            } else {
                this.form.controls.duration.enable();
            }
        });
        if (this._data.all_day) {
            this.form.controls.duration.disable();
        }
    }
}

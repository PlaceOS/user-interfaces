import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookingFormService } from '@placeos/bookings';
import {
    currentUser,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';

type FormType = 'single' | 'group' | 'other';

@Component({
    selector: 'desk-flow-details',
    template: `
        <div class="w-full p-4">
            <div
                class="flex w-full items-center space-x-1 rounded-lg bg-base-200 p-1"
            >
                <button
                    btn
                    matRipple
                    class="flex-1 space-x-2 border border-base-300 hover:bg-base-300"
                    [class.clear]="active_form() !== 'single'"
                    (click)="setActiveForm('single')"
                >
                    <icon class="text-xl">person</icon>
                    <div>Single</div>
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 space-x-2 border border-base-300 hover:bg-base-300"
                    [class.clear]="active_form() !== 'group'"
                    (click)="setActiveForm('group')"
                >
                    <icon class="text-xl">group_add</icon>
                    <div>Group</div>
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 space-x-2 border border-base-300 hover:bg-base-300"
                    [class.clear]="active_form() !== 'other'"
                    (click)="setActiveForm('other')"
                >
                    <icon class="text-xl">person_add</icon>
                    <div>Book for other</div>
                </button>
            </div>
            <div class="mt-4" [formGroup]="form">
                @if (active_form() === 'other') {
                    <div class="mb-4 w-full">
                        <label for="user">{{ 'FORM.HOST' | translate }}</label>
                        <a-user-search-field
                            formControlName="user"
                        ></a-user-search-field>
                    </div>
                }
                <div>
                    <label for="title"
                        >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            [placeholder]="
                                'BOOKINGS.DESK_TITLE_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.TITLE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                @if (can_recurr()) {
                    <div class="flex flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            [date]="form_value().date"
                            [ngModel]="form.value"
                            (ngModelChange)="onRecurrenceChange($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [available_days]="available_days()"
                        ></recurrence-field>
                    </div>
                }
                @if (can_book_lockers()) {
                    <div class="flex items-center space-x-2">
                        <mat-checkbox
                            [ngModel]="!!form_value().secondary_resource"
                            (ngModelChange)="
                                form.patchValue({
                                    secondary_resource: $event ? 'locker' : '',
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'BOOKINGS.DESK_REQUIRE_LOCKER' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (active_form() === 'group') {
                    <div class="flex flex-col">
                        <label for="members">
                            {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                        </label>
                        <a-user-list-field
                            [ngModel]="(options | async)?.members || []"
                            (ngModelChange)="setOptions({ members: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-user-list-field>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        AsyncPipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        TranslatePipe,
        IconComponent,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        RecurrenceFieldComponent,
        UserSearchFieldComponent,
        UserListFieldComponent,
    ],
})
export class DeskFlowDetailsComponent {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly active_form = signal<FormType>('single');
    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.value,
    });
    public readonly options = this._booking_form.options;

    public readonly available_days = settingSignal(
        'desks.available_period',
        90,
    );

    public readonly end_date = computed(() => {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    });

    public get form() {
        return this._booking_form.form;
    }

    public readonly max_duration = computed(
        () =>
            settingSignal('desks.max_duration')() ||
            settingSignal('bookings.max_duration', 8 * 60)(),
    );
    public readonly can_book_lockers = settingSignal('desks.can_book_lockers');
    public readonly can_recurr = settingSignal('desks.allow_recurrence');
    public readonly allow_time_changes = computed(
        () => settingSignal('desks.allow_time_changes')() !== false,
    );
    public readonly allow_all_day = computed(
        () =>
            this.allow_time_changes() &&
            (settingSignal('desks.allow_all_day')() ||
                settingSignal('bookings.allow_all_day')()),
    );
    public readonly use_24hr = settingSignal('use_24_hour_time', false);

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.desks.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public setActiveForm(form: FormType) {
        this.active_form.set(form as any);
        this._booking_form.setOptions({ group: form === 'group' });
        if (form === 'single') {
            this.form.patchValue({ user: currentUser(), attendees: [] });
        } else if (form === 'group') {
            this.form.patchValue({ user: currentUser() });
        } else {
            this.form.patchValue({ attendees: [] });
        }
    }

    public setOptions(options: any) {
        this._booking_form.setOptions(options);
    }

    public onRecurrenceChange(recurrence: any) {
        this.form.patchValue(recurrence);
    }
}

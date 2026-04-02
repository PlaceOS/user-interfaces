import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import { AsyncHandler, currentUser, SettingsService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { queryCalendarPermission } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    SpaceListFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { BehaviorSubject, combineLatest, lastValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const ALLOWED_CALENDAR_ROLES = [
    'write',
    'delegateWithoutPrivateEventAccess',
    'delegateWithPrivateEventAccess',
];

@Component({
    selector: 'event-form',
    template: `
        @if (form()) {
            <form [formGroup]="form()">
                <div class="flex flex-col">
                    <label for="title"
                        >{{ 'FORM.TITLE' | translate }}<span>*</span>:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="Meeting Title"
                        />
                        <mat-error>{{
                            'FORM.TITLE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="relative flex flex-col">
                    <label for="date"
                        >{{ 'FORM.DATE' | translate }}<span>*</span>:</label
                    >
                    <a-date-field
                        name="date"
                        formControlName="date"
                    ></a-date-field>
                    @if (allow_all_day) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'FORM.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form().value.all_day) {
                    <div class="flex space-x-2">
                        <div class="flex flex-1 flex-col">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span>:</label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form().get('date').value"
                                (ngModelChange)="
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr_time"
                                [range]="bookable_hours"
                                [min_duration]="effective_min_duration"
                            ></a-time-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="duration"
                                >{{ 'FORM.DURATION' | translate
                                }}<span>*</span>:</label
                            >
                            <a-duration-field
                                name="duration"
                                [time]="form().controls?.date?.value"
                                formControlName="duration"
                                [use_24hr]="use_24hr_time"
                                [max]="max_duration"
                                [custom_options]="custom_duration_options"
                                [end_time]="bookable_hours?.end"
                            ></a-duration-field>
                        </div>
                    </div>
                }
                <div class="mb-4 flex flex-1 flex-col">
                    <label for="organiser"
                        >{{ 'FORM.HOST' | translate }}<span>*</span>:</label
                    >
                    <a-user-search-field
                        name="organiser"
                        formControlName="organiser"
                    ></a-user-search-field>
                    @if (checking_permission()) {
                        <p class="text-pending mt-1 text-xs">
                            Checking calendar permissions...
                        </p>
                    }
                    @if (permission_error()) {
                        <p class="text-error mt-1 text-xs">
                            {{ permission_error() }}
                        </p>
                    }
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="attendees">
                        {{ 'CALENDAR_EVENT.ATTENDEES' | translate
                        }}<span>*</span>:</label
                    >
                    <a-user-list-field
                        name="attendees"
                        formControlName="attendees"
                    ></a-user-list-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="space">
                        {{ 'RESOURCE.ROOM' | translate }}<span>*</span>
                    </label>
                    <space-list-field
                        class="w-full"
                        formControlName="resources"
                    ></space-list-field>
                </div>
                @if ((has_catering | async) && form().contains('catering')) {
                    <div class="py-2">
                        <label for="catering">Catering:</label>
                        <catering-list-field
                            name="catering"
                            formControlName="catering"
                            [options]="{
                                date: form().value.date,
                                duration: form().value.duration,
                                all_day: form().value.all_day,
                                zone_id:
                                    form().value.resources[0]?.level?.parent_id,
                            }"
                        ></catering-list-field>
                        @if (
                            form().value.catering?.length && has_codes | async
                        ) {
                            <mat-form-field
                                appearance="outline"
                                class="mt-2 w-full"
                                (openedChange)="focusInput()"
                            >
                                <mat-select
                                    formControlName="catering_charge_code"
                                    placeholder="Charge Code"
                                >
                                    <input
                                        #input
                                        class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                        [ngModel]="code_filter.getValue()"
                                        (ngModelChange)="
                                            code_filter.next($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Search charge codes..."
                                    />
                                    <mat-option class="hidden"></mat-option>
                                    @for (
                                        code of filtered_codes | async;
                                        track code
                                    ) {
                                        <mat-option [value]="code">
                                            {{ code }}
                                        </mat-option>
                                    }
                                </mat-select>
                                <mat-error>
                                    Catering charge code is required
                                </mat-error>
                            </mat-form-field>
                        }
                        @if (form().value.catering?.length) {
                            <mat-form-field
                                appearance="outline"
                                class="w-full"
                                [class.mt-2]="
                                    !(
                                        form().value.catering?.length &&
                                            has_codes | async
                                    )
                                "
                            >
                                <textarea
                                    matInput
                                    formControlName="catering_notes"
                                    placeholder="Extra catering details..."
                                ></textarea>
                                <mat-error>
                                    Catering Order notes are required
                                </mat-error>
                            </mat-form-field>
                        }
                    </div>
                }
                @if (has_assets) {
                    <div class="mb-4 flex flex-1 flex-col">
                        <label for="space">Assets:</label>
                        <asset-list-field
                            [date]="form().value.date"
                            [duration]="form().value.duration"
                            formControlName="assets"
                        ></asset-list-field>
                    </div>
                }
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup">Setup Duration</label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup_time"
                            [min]="0"
                            [custom_options]="[5, 10]"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown">Breakdown Duration</label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown_time"
                            [custom_options]="[5, 10]"
                        ></a-duration-field>
                    </div>
                </div>
            </form>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        MatSelectModule,
        TranslatePipe,
        UserListFieldComponent,
        UserSearchFieldComponent,
        SpaceListFieldComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
    ],
})
export class EventFormComponent extends AsyncHandler {
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _catering = inject(CateringOrderStateService);

    public readonly form = input<FormGroup>(undefined);
    public readonly checking_permission = signal(false);
    public readonly permission_error = signal('');

    constructor() {
        super();
        effect(() => {
            const form = this.form();
            if (!form) return;
            this.subscription(
                'organiser_permission_check',
                form.get('organiser').valueChanges.subscribe((user) => {
                    this._checkCalendarPermission(user);
                }),
            );
        });
    }

    private async _checkCalendarPermission(user: any) {
        this.permission_error.set('');
        if (!user?.email) return;
        const current = currentUser();
        if (user.email.toLowerCase() === current?.email?.toLowerCase()) return;
        const checked_email = user.email;
        this.checking_permission.set(true);
        try {
            const permission = await lastValueFrom(
                queryCalendarPermission(checked_email),
            );
            if (this.form()?.value?.organiser?.email !== checked_email) return;
            if (
                !permission.has_access ||
                !ALLOWED_CALENDAR_ROLES.includes(permission.role)
            ) {
                this.permission_error.set(
                    "You don't have permission to book on behalf of that user, please select a user which has shared their calendar with Edit or Delegate permissions.",
                );
                this.form()?.patchValue(
                    { organiser: currentUser() },
                    { emitEvent: false },
                );
            }
        } catch (_) {
            if (this.form()?.value?.organiser?.email !== checked_email) return;
            this.permission_error.set(
                "You don't have permission to book on behalf of that user, please select a user which has shared their calendar with Edit or Delegate permissions.",
            );
            this.form()?.patchValue(
                { organiser: currentUser() },
                { emitEvent: false },
            );
        } finally {
            this.checking_permission.set(false);
        }
    }

    public code_filter = new BehaviorSubject('');

    public readonly has_catering = this._catering.available_menu.pipe(
        map((l) => l.length > 0),
    );

    public readonly has_codes = this._catering.charge_codes.pipe(
        map((l) => l.length > 0),
        tap((has_codes) => {
            if (!has_codes) {
                this.form().get('catering_charge_code').setValidators([]);
                this.form().updateValueAndValidity();
            }
        }),
    );

    public readonly filtered_codes = combineLatest([
        this.code_filter,
        this._catering.charge_codes,
    ]).pipe(
        map(([s, l]) =>
            l.filter((_) => _.toLowerCase().includes(s.toLowerCase())),
        ),
    );

    public get allow_all_day() {
        return !!this._settings.get('app.events.allow_all_day');
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get use_24hr_time() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get bookable_hours() {
        return this._settings.get('app.events.bookable_hours');
    }

    public get min_duration() {
        return this._settings.get('app.events.min_duration') || 30;
    }

    public get custom_duration_options() {
        return this._settings.get('app.events.custom_duration_options') || [];
    }

    public get effective_min_duration() {
        return Math.min(this.min_duration, ...this.custom_duration_options);
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }
}

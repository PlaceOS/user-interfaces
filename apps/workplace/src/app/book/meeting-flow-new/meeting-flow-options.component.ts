import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    RichTextInputComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

@Component({
    selector: 'meeting-flow-options',
    template: `
        <div
            class="relative z-0 flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
        >
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content p-4 text-2xl font-medium"
            >
                <icon>task_alt</icon>
                <div>Review & Confirm Booking</div>
            </div>
            <div class="grid grid-cols-1 p-4 sm:grid-cols-2">
                <div>
                    <div class="mb-2 flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center rounded-full border border-success text-success"
                        >
                            <icon class="text-2xl">done</icon>
                        </div>
                        <h3 class="text-xl">
                            {{ event.title || 'Meeting Details' }}
                        </h3>
                    </div>
                    <div class="space-y-1 pl-10">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">today</icon>
                            <div date>{{ event.date | date: 'fullDate' }}</div>
                        </div>
                        @if (event.recurrence?.pattern) {
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">update</icon>
                                <div date>{{ formatted_recurrence }}</div>
                            </div>
                        }
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">schedule</icon>
                            <div class="flex flex-col leading-tight">
                                <div time>{{ formattedTime() }}</div>
                                @if (timezone) {
                                    <div class="text-xs opacity-30">
                                        {{ formattedTime(tz) }}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content p-4 text-2xl font-medium"
            >
                <icon>fork_right</icon>
                <div>Optional Extras</div>
            </div>
            <div class="p-4" [formGroup]="form()">
                <h3 class="flex items-center space-x-2 text-xl">Attendees</h3>
                <a-user-list-field
                    formControlName="attendees"
                    [time]="event.date"
                    [guests]="allow_externals()"
                />
                @if (has_catering | async) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.CATERING' | translate }}
                    </h3>
                    <catering-list-field
                        formControlName="catering"
                        [options]="{
                            date: event.date,
                            duration: eventduration,
                            all_day: event.all_day,
                            zone_id: event.resources?.length
                                ? event.resources[0]?.level?.parent_id
                                : '',
                        }"
                    ></catering-list-field>
                    @if (event.catering?.length && has_codes | async) {
                        <mat-form-field
                            appearance="outline"
                            class="mt-2 w-full"
                            (openedChange)="focusInput()"
                        >
                            <mat-select
                                formControlName="catering_charge_code"
                                [placeholder]="
                                    'CALENDAR_EVENT.CATERING_CHARGE_CODE'
                                        | translate
                                "
                            >
                                <input
                                    #input
                                    class="sticky top-0 z-50 w-full rounded-none border-x-0 border-b border-t-0 border-base-200 bg-base-100 px-4 py-3 text-base focus:border-b"
                                    [ngModel]="code_filter.getValue()"
                                    (ngModelChange)="code_filter.next($event)"
                                    [ngModelOptions]="{
                                        standalone: true,
                                    }"
                                    [placeholder]="
                                        'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEACH'
                                            | translate
                                    "
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
                                {{
                                    'CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED'
                                        | translate
                                }}
                            </mat-error>
                        </mat-form-field>
                    }
                    @if (event.catering?.length) {
                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            [class.mt-2]="
                                !(event.catering?.length && has_codes | async)
                            "
                        >
                            <textarea
                                matInput
                                formControlName="catering_notes"
                                [placeholder]="
                                    'CALENDAR_EVENT.CATERING_NOTES' | translate
                                "
                            ></textarea>
                            <mat-error>
                                {{
                                    'CALENDAR_EVENT.CATERING_NOTES_REQUIRED'
                                        | translate
                                }}
                            </mat-error>
                        </mat-form-field>
                    }
                }
                @if (has_assets()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'RESOURCE.ASSETS' | translate }}
                    </h3>
                    <asset-list-field
                        [options]="{
                            date: event.date,
                            duration: event.duration,
                            all_day: event.all_day,
                            zone_id: event?.resources?.length
                                ? event?.resources[0]?.level?.parent_id
                                : '',
                        }"
                        [rejected_ids]="invalid_assets"
                        formControlName="assets"
                    />
                }
                @if (!hide_notes()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
                    </h3>
                    <rich-text-input
                        name="notes"
                        formControlName="body"
                        [placeholder]="'CALENDAR_EVENT.NOTES_INFO' | translate"
                    />
                }
            </div>
        </div>
        <div
            class="sticky bottom-0 mt-4 flex justify-end rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
        >
            <button btn matRipple class="w-40">Confirm</button>
        </div>
    `,
    styles: [
        `
            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        UserListFieldComponent,
        ReactiveFormsModule,
        FormsModule,
        CateringListFieldComponent,
        AssetListFieldComponent,
        RichTextInputComponent,
    ],
})
export class MeetingFlowOptionsComponent {
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _catering = inject(CateringOrderStateService);
    private _date = new DatePipe('en');

    public readonly form = signal(this._event_form.form);
    public readonly allow_externals = settingSignal(
        'events.allow_externals',
        false,
    );
    public readonly has_assets = settingSignal('events.has_assets', false);
    public readonly hide_notes = settingSignal('events.hide_notes', false);
    public readonly hide_attendees = settingSignal(
        'events.hide_attendees',
        false,
    );
    public code_filter = new BehaviorSubject('');

    public get is_multiday() {
        return this.form().getRawValue().duration > 24 * 60;
    }

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

    public get time_format() {
        return this._settings.time_format;
    }

    public get event() {
        return this.form().getRawValue();
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public formattedTime(tz?: string) {
        const date = this.form().getRawValue().date;
        const date_end = this.form().getRawValue().date_end;
        const all_day = this.form().getRawValue().all_day;
        const tz_format = this._date.transform(date, 'zzzz', tz);
        const start_date = this._date.transform(date, 'MMM d', tz);
        const start_time = this._date.transform(date, this.time_format, tz);
        const end_date = this._date.transform(date_end, 'MMM d', tz);
        const end_time = this._date.transform(date_end, this.time_format, tz);

        if (this.is_multiday) {
            return `${start_date}${all_day ? '' : ', ' + start_time} - ${end_date}${all_day ? '' : ', ' + end_time}`;
        } else if (all_day) {
            return 'All Day';
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }
}

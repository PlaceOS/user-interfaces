import { CommonModule, DatePipe } from '@angular/common';
import {
    Component,
    ElementRef,
    inject,
    signal,
    ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import {
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
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
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
            >
                <icon>task_alt</icon>
                <div>
                    {{ 'CALENDAR_EVENT.REVIEW_CONFIRM_HEADER' | translate }}
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
                <div>
                    <div class="mb-2 flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center rounded-full border border-success text-success"
                        >
                            <icon class="text-2xl">done</icon>
                        </div>
                        <h3 class="text-xl">
                            {{
                                event.title ||
                                    ('CALENDAR_EVENT.MEETING_DETAILS_HEADER'
                                        | translate)
                            }}
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
                @if (event.resources?.length) {
                    <div>
                        <div class="mb-2 flex items-center space-x-4">
                            <div
                                class="flex items-center justify-center rounded-full border border-success text-success"
                            >
                                <icon class="text-2xl">done</icon>
                            </div>
                            <h3 class="text-xl">
                                {{
                                    'CALENDAR_EVENT.SELECTED_ROOM_HEADER'
                                        | translate
                                }}
                            </h3>
                        </div>
                        <div class="space-y-1 pl-10">
                            @for (space of event.resources; track space.id) {
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >room_preferences</icon
                                    >
                                    <div class="font-medium">
                                        {{ space.display_name || space.name }}
                                    </div>
                                </div>
                                @if (space.capacity) {
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">group</icon>
                                        <div>
                                            {{
                                                'CALENDAR_EVENT.CAPACITY_PEOPLE'
                                                    | translate
                                                        : {
                                                              capacity:
                                                                  space.capacity,
                                                          }
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (getSpaceLocation(space)) {
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >location_on</icon
                                        >
                                        <div>{{ getSpaceLocation(space) }}</div>
                                    </div>
                                }
                                @if (space.features?.length) {
                                    <div class="flex items-start space-x-2">
                                        <icon class="text-2xl"
                                            >feature_search</icon
                                        >
                                        <div class="flex flex-wrap gap-1">
                                            @for (
                                                feature of space.features.slice(
                                                    0,
                                                    5
                                                );
                                                track feature
                                            ) {
                                                <span
                                                    class="rounded-full bg-base-200 px-2 py-0.5 text-xs"
                                                >
                                                    {{ feature }}
                                                </span>
                                            }
                                            @if (space.features.length > 5) {
                                                <span
                                                    class="rounded-full bg-base-200 px-2 py-0.5 text-xs"
                                                >
                                                    +{{
                                                        space.features.length -
                                                            5
                                                    }}
                                                    {{
                                                        'CALENDAR_EVENT.FEATURES_MORE'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        </div>
                    </div>
                }
            </div>
            <div
                class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
            >
                <icon>fork_right</icon>
                <div>
                    {{ 'CALENDAR_EVENT.OPTIONAL_EXTRAS_HEADER' | translate }}
                </div>
            </div>
            <div class="p-4" [formGroup]="form()">
                <h3 class="flex items-center space-x-2 text-xl">
                    {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                </h3>
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
                            duration: event.duration,
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
                                !(event.catering?.length && (has_codes | async))
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
            <button
                btn
                matRipple
                class=""
                (click)="confirmBooking()"
                [disabled]="loading()"
            >
                <div class="flex items-center space-x-2">
                    @if (loading()) {
                        <icon class="animate-spin text-2xl"
                            >progress_activity</icon
                        >
                    } @else {
                        <icon class="text-2xl">task_alt</icon>
                    }
                    <div class="flex-1 pr-4">
                        {{
                            loading()
                                ? ('COMMON.CONFIRMING' | translate)
                                : ('COMMON.CONFIRM' | translate)
                        }}
                    </div>
                    @if (!loading()) {
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    }
                </div>
            </button>
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
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
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
    private _dialog = inject(MatDialog);
    private _router = inject(Router);
    private _date = new DatePipe('en');

    @ViewChild('input') private _input: ElementRef<HTMLInputElement>;

    public readonly form = signal(this._event_form.form);
    public readonly loading = signal(false);
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
    public invalid_assets = [];

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

    public get tz() {
        return this.timezone;
    }

    public get formatted_recurrence() {
        const recurrence = this.event.recurrence;
        if (!recurrence?.pattern) return '';

        const pattern = recurrence.pattern;
        if (pattern === 'daily') return i18n('FORM.RECURRENCE_DAILY');
        if (pattern === 'weekly')
            return i18n('CALENDAR_EVENT.RECURRENCE_WEEKLY');
        if (pattern === 'monthly')
            return i18n('CALENDAR_EVENT.RECURRENCE_MONTHLY');
        return pattern.charAt(0).toUpperCase() + pattern.slice(1);
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
            return i18n('COMMON.ALL_DAY');
        }
        return `${start_time} - ${end_time} ${'(' + tz_format + ')'}`;
    }

    public getSpaceLocation(space: any): string {
        if (!space) return '';

        const parts: string[] = [];

        // Get level information
        if (space.level) {
            const level = this._org.levelWithID([
                space.level.id || space.level,
            ]);
            if (level) {
                parts.push(level.display_name || level.name);
            }
        }

        // Get building information
        if (space.zones?.length) {
            const building = this._org.buildings.find((b) =>
                space.zones.includes(b.id),
            );
            if (building) {
                parts.push(building.display_name || building.name);
            }
        }

        return parts.filter(Boolean).join(', ');
    }

    public focusInput() {
        setTimeout(() => this._input?.nativeElement?.focus(), 100);
    }

    public async confirmBooking() {
        const space = this.event.resources[0];
        if (!this.event.host) {
            this._event_form.form.patchValue({ host: currentUser()?.email });
        }
        if (!space) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE'),
                    content: i18n('APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG'),
                    icon: { content: 'event_available' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
        }
        this.loading.set(true);
        try {
            await this._event_form.postForm().catch((_) => {
                notifyError(_);
                throw _;
            });
            this._event_form.setView('success');
            this._router.navigate(['/book", "meeting", "success']);
            notifySuccess(i18n('APP.WORKPLACE.MEETING_BOOKED'));
        } finally {
            this.loading.set(false);
        }
    }
}

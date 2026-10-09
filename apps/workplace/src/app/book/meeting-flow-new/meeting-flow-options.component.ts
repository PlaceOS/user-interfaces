import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    signal,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
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
    formatRecurrence,
    fromEventRecurrence,
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
import { FindAvailabilityModalComponent } from '@placeos/users';

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
                                form_value().title ||
                                    ('CALENDAR_EVENT.MEETING_DETAILS_HEADER'
                                        | translate)
                            }}
                        </h3>
                    </div>
                    <div class="space-y-1 pl-10">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">today</icon>
                            <div date>{{ form_value().date | date: 'fullDate' }}</div>
                        </div>
                        @if (form_value().recurrence?.pattern) {
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">update</icon>
                                <div date>{{ formatted_recurrence }}</div>
                            </div>
                        }
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">schedule</icon>
                            <div class="flex flex-col leading-tight">
                                <div time>
                                    @if (is_multiday) {
                                        {{ form_value().date | date: 'MMM d' }}@if (!form_value().all_day) {, {{ form_value().date | date: time_format }}}
                                        -
                                        {{ form_value().date_end | date: 'MMM d' }}@if (!form_value().all_day) {, {{ form_value().date_end | date: time_format }}}
                                    } @else if (form_value().all_day) {
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    } @else {
                                        {{ form_value().date | date: time_format }} - {{ form_value().date_end | date: time_format }} ({{ form_value().date | date: 'zzzz' }})
                                    }
                                </div>
                                @if (timezone) {
                                    <div class="text-xs opacity-30">
                                        {{ form_value().date | date: time_format : timezone }} - {{ form_value().date_end | date: time_format : timezone }} ({{ form_value().date | date: 'zzzz' : timezone }})
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                @if (form_value().resources?.length) {
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
                            @for (space of form_value().resources; track space.id) {
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
            <div class="p-4">
                <h3 class="flex items-center space-x-2 text-xl">
                    {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                </h3>
                <a-user-list-field
                    [formField]="form.attendees"
                    [time]="form_value().date"
                    [guests]="allow_externals()"
                >
                    <button
                        btn
                        matRipple
                        class="inverse min-w-1/4 flex-1 sm:flex-none"
                        (click)="findAvailableTime()"
                    >
                        <div class="hidden sm:flex">
                            {{ 'Find Available time' }}
                        </div>
                        <div class="fle sm:hidden">Availability</div>
                    </button>
                </a-user-list-field>
                @if (has_catering()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.CATERING' | translate }}
                    </h3>
                    <catering-list-field
                        [formField]="form.catering"
                        [options]="{
                            date: form_value().date,
                            duration: form_value().duration,
                            all_day: form_value().all_day,
                            zone_id: form_value().resources?.length
                                ? form_value().resources[0]?.level?.parent_id
                                : '',
                        }"
                    ></catering-list-field>
                    @if (form_value().catering?.length && has_codes()) {
                        <mat-form-field
                            appearance="outline"
                            class="mt-2 w-full"
                            (openedChange)="focusInput()"
                        >
                            <mat-select
                                [formField]="form.catering_charge_code"
                                [placeholder]="
                                    'CALENDAR_EVENT.CATERING_CHARGE_CODE'
                                        | translate
                                "
                            >
                                <input
                                    #input
                                    class="sticky top-0 z-50 w-full rounded-none border-x-0 border-b border-t-0 border-base-200 bg-base-100 px-4 py-3 text-base focus:border-b"
                                    [ngModel]="code_filter()"
                                    (ngModelChange)="code_filter.set($event)"
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
                                    code of filtered_codes();
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
                    @if (form_value().catering?.length) {
                        <mat-form-field
                            appearance="outline"
                            class="w-full"
                            [class.mt-2]="
                                !(form_value().catering?.length && has_codes())
                            "
                        >
                            <textarea
                                matInput
                                [formField]="form.catering_notes"
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
                            date: form_value().date,
                            duration: form_value().duration,
                            all_day: form_value().all_day,
                            zone_id: form_value()?.resources?.length
                                ? form_value()?.resources[0]?.level?.parent_id
                                : '',
                        }"
                        [rejected_ids]="invalid_assets"
                        [formField]="form.assets"
                    />
                }
                @if (!hide_notes()) {
                    <h3 class="mb-2 mt-4 flex items-center space-x-2 text-xl">
                        {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
                    </h3>
                    <rich-text-input
                        [formField]="form.body"
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
        FormsModule,
        FormField,
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

    @ViewChild('input') private _input: ElementRef<HTMLInputElement>;

    public readonly form_value = this._event_form.model;
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
    public readonly code_filter = signal('');
    public invalid_assets = [];

    public get form() {
        return this._event_form.form;
    }

    public get model() {
        return this._event_form.model;
    }

    public get is_multiday() {
        return this.form_value().duration > 24 * 60;
    }

    public readonly has_catering = computed(
        () => this._catering.available_menu().length > 0,
    );

    public readonly has_codes = computed(
        () => this._catering.charge_codes().length > 0,
    );

    public readonly filtered_codes = computed(() => {
        const search = this.code_filter().toLowerCase();
        return this._catering
            .charge_codes()
            .filter((_) => _.toLowerCase().includes(search));
    });

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public readonly allow_daily_allday_recurrence = settingSignal(
        'events.allow_daily_allday_recurrence',
        false,
    );

    public get formatted_recurrence() {
        const value = this.form_value();
        return formatRecurrence(
            fromEventRecurrence({
                ...value.recurrence,
                start: value.recurrence.start || value.date,
            }),
            value.recurrence.start || value.date,
        );
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
        const value = this.form_value();
        const space = value.resources[0];
        if (!value.host) {
            this.model.update((m) => ({ ...m, host: currentUser()?.email }));
        }
        if (
            !this.allow_daily_allday_recurrence() &&
            value.all_day &&
            value.recurrence?.pattern === 'daily'
        ) {
            return notifyError(i18n('CALENDAR_EVENT.DAILY_RECURR_ERROR'));
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
            this._router.navigate(['/book', 'meeting', 'success']);
            notifySuccess(i18n('APP.WORKPLACE.MEETING_BOOKED'));
        } finally {
            this.loading.set(false);
        }
    }

    public findAvailableTime() {
        const { attendees, organiser, date, duration } = this.model();
        const ref = this._dialog.open(FindAvailabilityModalComponent, {
            data: {
                users: attendees ?? [],
                host: organiser || currentUser(),
                date,
                duration,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.model.update((m) => ({
                ...m,
                date: ref.componentInstance.date(),
                attendees: ref.componentInstance.users(),
                duration: ref.componentInstance.duration(),
            }));
        });
    }
}

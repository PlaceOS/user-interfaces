import {
    Component,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';

import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/common';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { BookingFormService } from '../booking-form.service';

@Component({
    selector: 'locker-filters',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                max-width: 100vw;
            }
        `,
    ],
    template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form class="divide-base-200 relative z-0 w-full divide-y p-2">
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'COMMON.DETAILS' | translate }}
                </h2>
                @if (
                    !hide_levels() &&
                    (!(use_region() && regions()?.length) ||
                        !(!use_region() && buildings()?.length > 1))
                ) {
                    <div class="flex min-w-32 flex-1 flex-col">
                        <label for="location">
                            {{ 'COMMON.LOCATION' | translate }}
                        </label>
                        @if (use_region() && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region()"
                                    (ngModelChange)="setRegion($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.REGION_ANY' | translate
                                    "
                                >
                                    @for (reg of regions(); track reg) {
                                        <mat-option [value]="reg">
                                            {{ reg.display_name || reg.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!use_region() && buildings()?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building()"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        building()?.display_name ||
                                        building()?.name
                                    "
                                >
                                    @for (bld of buildings(); track bld) {
                                        <mat-option [value]="bld">
                                            {{ bld.display_name || bld.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!hide_levels()) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="location"
                                    [ngModel]="options()?.zone_id"
                                    (ngModelChange)="
                                        setOptions({ zone_id: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                >
                                    @for (lvl of levels(); track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region()) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        {{
                                                            (
                                                                lvl.parent_id
                                                                | building
                                                            )?.display_name
                                                        }}
                                                        <span class="opacity-0">
                                                            -
                                                        </span>
                                                    </div>
                                                }
                                                <div>
                                                    {{
                                                        lvl.display_name ||
                                                            lvl.name
                                                    }}
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                    </div>
                }

                <!-- Date -->
                <div class="min-w-[256px] flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field [formField]="form.date" [to]="end_date()">
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day()) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox [formField]="form.all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr()"
                                [disabled]="disable_start()"
                                [range]="bookable_hours()"
                            ></a-time-field>
                        </div>
                        @if (!hide_end()) {
                            <div class="w-1/3 flex-1">
                                <label>{{ 'FORM.TIME_END' | translate }}</label>
                                <a-duration-field
                                    [ngModel]="model().duration"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            duration: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [time]="model().date"
                                    [max]="10 * 60"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr()"
                                    [end_time]="bookable_hours()?.end"
                                >
                                </a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-4 pb-4">
                    <!-- <settings-toggle
              [label]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
              [ngModel]="options()?.show_fav"
              (ngModelChange)="setOptions({ show_fav: $event })"
              [ngModelOptions]="{ standalone: true }"
            ></settings-toggle> -->
                    <settings-toggle
                        [label]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
                        [ngModel]="options()?.show_accessible"
                        (ngModelChange)="
                            setOptions({ show_accessible: $event })
                        "
                        [ngModelOptions]="{ standalone: true }"
                    ></settings-toggle>
                </section>
            }
            @if (features()?.length && !hide_levels()) {
                <section class="space-y-2" features>
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.TYPE' | translate }}
                    </h2>
                    @for (feat of features(); track feat) {
                        <div class="flex flex-wrap items-center space-x-2">
                            <settings-toggle
                                class="w-full capitalize"
                                [label]="feat"
                                [ngModel]="
                                    (options()?.features || []).includes(feat)
                                "
                                (ngModelChange)="setFeature(feat, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></settings-toggle>
                        </div>
                    }
                </section>
            }
        </form>
        @if (can_close()) {
            <div class="border-base-200 w-full border-t px-2 py-2">
                <button
                    btn
                    matRipple
                    name="apply-locker-filters"
                    class="w-full"
                    (click)="close()"
                >
                    {{ 'COMMON.APPLY' | translate }}
                </button>
            </div>
        }
    `,
    imports: [
        TranslatePipe,
        MatRippleModule,
        SettingsToggleComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        FormsModule,
        MatCheckboxModule,
        BuildingPipe,
    ],
})
export class LockerFiltersComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly hide_levels = input<boolean>(undefined);

    public readonly can_close = signal(false);
    public readonly options = this._state.options;
    public readonly features = this._state.features;
    public readonly buildings = this._org.active_buildings;
    public readonly building = this._org.active_building;
    public readonly form = this._state.form;
    public readonly model = this._state.model;
    public readonly regions = this._org.region_list;
    public readonly region = this._org.active_region;

    public readonly levels = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const level_list = this._use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        return level_list.sort(
            (a, b) =>
                a.parent_id.localeCompare(b.parent_id) ||
                (a.display_name || '').localeCompare(b.display_name || ''),
        );
    });

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    public readonly setLevel = (l) => {};
    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (reg) => (this._org.region = reg);
    private readonly _locker_bookable_hours = this._settings.signal(
        'lockers.bookable_hours',
        null,
    );
    private readonly _booking_bookable_hours = this._settings.signal(
        'bookings.bookable_hours',
        null,
    );
    private readonly _bookable_hours = computed(
        () => this._locker_bookable_hours() || this._booking_bookable_hours(),
    );
    private readonly _disable_date = this._settings.signal(
        'lockers.disabled_date_select',
        false,
    );
    private readonly _disable_start = this._settings.signal(
        'lockers.disabled_start_time',
        false,
    );
    private readonly _hide_end = this._settings.signal(
        'lockers.hide_end_time',
        false,
    );
    private readonly _allow_time_changes = this._settings.signal(
        'lockers.allow_time_changes',
        false,
    );
    private readonly _allow_all_day = this._settings.signal(
        'lockers.allow_all_day',
        false,
    );
    private readonly _available_period = this._settings.signal(
        'lockers.available_period',
        90,
    );
    private readonly _use_24hr = this._settings.signal(
        'use_24_hour_time',
        false,
    );
    private readonly _use_region = this._settings.signal('use_region', false);

    public readonly bookable_hours = this._bookable_hours;
    public readonly disable_date = this._disable_date;
    public readonly disable_start = this._disable_start;
    public readonly hide_end = this._hide_end;
    public readonly allow_time_changes = this._allow_time_changes;
    public readonly allow_all_day = computed(
        () => this.allow_time_changes() && this._allow_all_day(),
    );

    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this._available_period())).valueOf(),
    );

    public close() {
        // No-op for inline filters
    }

    public readonly use_24hr = this._use_24hr;
    public readonly use_region = this._use_region;

    constructor() {
        super();
    }

    public ngOnInit() {
        // The booking form's `date` field disabled state is now driven by the
        // signal-form schema (see `generateBookingForm`), so no imperative
        // disable handling is required here.
    }
}

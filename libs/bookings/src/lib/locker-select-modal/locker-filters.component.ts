import {
    Component,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/common';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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
            class="border-base-200 flex items-center rounded-t-md border-b pb-2 sm:hidden"
        >
            <div class="flex-1 pl-2">
                @if (can_close()) {
                    <button
                        icon
                        matRipple
                        name="close-locker-filters"
                        class="sm:hidden"
                        (click)="close()"
                    >
                        <icon>keyboard_arrow_left</icon>
                    </button>
                }
            </div>
            <h3 class="flex-2 text-center font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full divide-y overflow-x-hidden overflow-y-auto p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'BOOKINGS.DETAILS' | translate }}
                </h2>
                @if (
                    !hide_levels() &&
                    (!(use_region && regions()?.length) ||
                        !(!use_region && buildings()?.length > 1))
                ) {
                    <div class="flex min-w-32 flex-1 flex-col">
                        <label for="location">
                            {{ 'BOOKINGS.LOCATION' | translate }}
                        </label>
                        @if (use_region && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-label>{{ 'BOOKINGS.LOCATION' | translate }}</mat-label>
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="region = $event"
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
                        @if (!use_region && buildings()?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-label>{{ 'BOOKINGS.LOCATION' | translate }}</mat-label>
                                <mat-select
                                    name="building"
                                    [ngModel]="building"
                                    (ngModelChange)="building = $event"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        building?.display_name || building?.name
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
                                <mat-label>{{ 'BOOKINGS.LOCATION' | translate }}</mat-label>
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
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
                <!-- All Day -->
                @if (allow_all_day()) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day" [aria-label]="'COMMON.ALL_DAY' | translate">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                <!-- Start End -->
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_START' | translate }}</label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
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
                                    [ngModel]="form.value.duration"
                                    (ngModelChange)="
                                        form.patchValue({ duration: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [time]="form.get('date')?.value"
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
              [name]="'APP.WORKPLACE.FAVOURITES_SHOW' | translate"
              [ngModel]="options()?.show_fav"
              (ngModelChange)="setOptions({ show_fav: $event })"
              [ngModelOptions]="{ standalone: true }"
            ></settings-toggle> -->
                    <settings-toggle
                        [name]="'BOOKINGS.LOCKER_ACCESSIBLE_SHOW' | translate"
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
                                [name]="feat"
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
        IconComponent,
        SettingsToggleComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatCheckboxModule,
        BuildingPipe,
    ],
})
export class LockerFiltersComponent extends AsyncHandler implements OnInit {
    private _bsheet_ref = inject<MatBottomSheetRef<LockerFiltersComponent>>(
        MatBottomSheetRef,
        { optional: true },
    );
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly hide_levels = input<boolean>(undefined);

    public readonly can_close = signal(!!this._bsheet_ref);
    public readonly options = toSignal(this._state.options, {
        initialValue: {} as any,
    });
    public readonly features = toSignal(this._state.features, {
        initialValue: [],
    });
    public readonly buildings = toSignal(this._org.active_buildings, {
        initialValue: [],
    });
    public readonly form = this._state.form;
    public readonly regions = toSignal(this._org.region_list, {
        initialValue: [],
    });

    public readonly levels = toSignal(
        combineLatest([
            this._org.active_region,
            this._org.active_building,
        ]).pipe(
            map(([region, bld]) => {
                const level_list = this._use_region()
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld);
                return level_list.sort(
                    (a, b) =>
                        a.parent_id.localeCompare(b.parent_id) ||
                        (a.display_name || '').localeCompare(
                            b.display_name || '',
                        ),
                );
            }),
        ),
        { initialValue: [] },
    );

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public get region() {
        return this._org.region;
    }
    public set region(reg) {
        this._org.region = reg;
    }

    public readonly close = () => this._bsheet_ref.dismiss();
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    public readonly setLevel = (l) => {};
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

    public get end_date() {
        return endOfDay(
            addDays(Date.now(), this._available_period()),
        ).valueOf();
    }

    public readonly use_24hr = this._use_24hr;
    public readonly use_region = this._use_region;

    constructor() {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'bld',
            combineLatest([
                this._org.active_building,
                this.form.controls.duration.valueChanges,
            ]).subscribe(() => {
                this.timeout(
                    'disable',
                    () => {
                        if (this.disable_date) {
                            this.form.controls.date.disable();
                        }
                    },
                    50,
                );
            }),
        );
        this.timeout(
            'disable',
            () => {
                if (this.disable_date) {
                    this.form.controls.date.disable();
                }
            },
            50,
        );
    }
}

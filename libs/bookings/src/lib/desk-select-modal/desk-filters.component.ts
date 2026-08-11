import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { SettingsService } from '@placeos/common';
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
    selector: 'desk-filters',
    styles: [``],
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
                <div class="flex min-w-32 flex-1 flex-col">
                    @if (
                        show_level_select() &&
                        !(use_region() && regions()?.length) &&
                        !(!use_region() && buildings()?.length > 1)
                    ) {
                        <label for="location">
                            {{ 'COMMON.LOCATION' | translate }}
                        </label>
                    }
                    @if (use_region() && regions()?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region()"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.REGION_ANY' | translate"
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
                                    building()?.display_name || building()?.name
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
                    @if (show_level_select()) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location"
                                [ngModel]="options()?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                                [multiple]="true"
                            >
                                @for (lvl of levels(); track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region()) {
                                                <div class="text-xs opacity-30">
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
                                                    lvl.display_name || lvl.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                </div>

                <!-- Date -->
                <div class="flex-1">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    <a-date-field
                        name="date"
                        [ngModel]="model().date"
                        (ngModelChange)="
                            model.update((m) => ({ ...m, date: $event }))
                        "
                        [ngModelOptions]="{ standalone: true }"
                        [to]="end_date()"
                        [timezone]="timezone()"
                    >
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
                                [timezone]="timezone()"
                                [range]="bookable_hours()"
                            ></a-time-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label>{{ 'FORM.TIME_END' | translate }}</label>
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone()"
                                [end_time]="bookable_hours()?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </section>
            @if (!hide_levels()) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [label]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="options()?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
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
        MatCheckboxModule,
        FormsModule,
        FormField,
        BuildingPipe,
    ],
})
export class DeskFiltersComponent {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private readonly _use_region = this._settings.signal('use_region', false);

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
        const resources = this._state.resources();
        const level_list = this._use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        const level_ids = new Set(
            resources.map((resource) => resource.zone?.id).filter((_) => _),
        );
        const viewable_levels = level_list.filter(
            (lvl) => !lvl.tags.includes('parking') && level_ids.has(lvl.id),
        );
        return viewable_levels.sort(
            (a, b) =>
                a.parent_id.localeCompare(b.parent_id) ||
                (a.display_name || '').localeCompare(b.display_name || ''),
        );
    });

    public readonly show_level_select = computed(
        () => !this.hide_levels() && this.levels().length > 1,
    );

    private readonly _clear_invalid_levels = effect(() => {
        const zones = this.options()?.zones || [];
        if (!zones.length) return;
        if (!this._state.resources().length) return;
        const valid_zones = zones.filter((zone_id) =>
            this.levels().some((lvl) => lvl.id === zone_id),
        );
        if (valid_zones.length !== zones.length) {
            this._state.setOptions({ zones: valid_zones });
        }
    });

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setFeature = (f, e) => this._state.setFeature(f, e);
    public readonly setLevel = (l) => {};

    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (r) => (this._org.region = r);
    private readonly _desk_bookable_hours = this._settings.signal(
        'desks.bookable_hours',
        null,
    );
    private readonly _booking_bookable_hours = this._settings.signal(
        'bookings.bookable_hours',
        null,
    );
    private readonly _bookable_hours = computed(
        () => this._desk_bookable_hours() || this._booking_bookable_hours(),
    );
    private readonly _allow_time_changes = this._settings.signal(
        'desks.allow_time_changes',
        false,
    );
    private readonly _allow_all_day = this._settings.signal(
        'desks.allow_all_day',
        false,
    );
    private readonly _available_period = this._settings.signal(
        'desks.available_period',
        90,
    );
    private readonly _use_24hr = this._settings.signal(
        'use_24_hour_time',
        false,
    );
    private readonly _use_building_timezone = this._settings.signal(
        'events.use_building_timezone',
        false,
    );

    public readonly bookable_hours = this._bookable_hours;

    public readonly allow_time_changes = this._allow_time_changes;
    public readonly allow_all_day = computed(
        () => this.allow_time_changes() && this._allow_all_day(),
    );

    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this._available_period())).valueOf(),
    );

    public readonly use_24hr = this._use_24hr;

    public readonly use_region = this._use_region;

    public readonly timezone = computed(() =>
        this._use_building_timezone() ? this._org.building.timezone : '',
    );
}

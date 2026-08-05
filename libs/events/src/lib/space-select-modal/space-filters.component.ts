import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    Building,
    flatten,
    MapsPeopleService,
    OrganisationService,
    Region,
    settingSignal,
    unique,
} from '@placeos/common';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { SpacesService } from '../spaces.service';

@Component({
    selector: `space-filters`,
    template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full max-w-[100vw] divide-y overflow-x-hidden overflow-y-auto p-2"
        >
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
                                aria-label="Region"
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
                                aria-label="Building"
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
                                aria-label="Level"
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
                                                            lvl?.parent_id
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
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-32 flex-1">
                        <label for="date">
                            {{ 'FORM.DATE' | translate }}<span>*</span>
                        </label>
                        <a-date-field
                            name="date"
                            [ngModel]="model().date"
                            (ngModelChange)="
                                model.update((m) => ({ ...m, date: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [to]="end_date()"
                            [short]="true"
                            [timezone]="timezone()"
                            [range]="multiday() ? 1 : 0"
                        >
                            {{ 'FORM.DATE_ERROR' | translate }}
                        </a-date-field>
                    </div>
                    @if (multiday()) {
                        <div class="relative min-w-32 flex-1">
                            <label for="date">
                                {{ 'FORM.DATE_END' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                [ngModel]="model().date_end"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date_end: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [from]="start_date"
                                [to]="end_date()"
                                [short]="true"
                                [timezone]="timezone()"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    }
                </div>
                <!-- All Day -->
                @if (allow_all_day()) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox
                            [ngModel]="model().all_day"
                            (ngModelChange)="
                                model.update((m) => ({ ...m, all_day: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (!model().all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
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
                                [min_duration]="effective_min_duration()"
                            ></a-time-field>
                        </div>
                        @if (multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="model().date_end"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date_end: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="model().date"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone()"
                                    [range]="bookable_hours()"
                                ></a-time-field>
                            </div>
                        }
                        @if (!multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    [formField]="form.duration"
                                    [time]="model().date"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone()"
                                    [end_time]="bookable_hours()?.end"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @let has_mapspeople = using_mapspeople();
            @if (!hide_levels() && (!viewing_map() || !has_mapspeople)) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [label]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="filters()?.show_fav"
                            (ngModelChange)="setFilters({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if (
                features()?.length &&
                (!viewing_map() || !has_mapspeople) &&
                !hide_levels()
            ) {
                <section features class="space-y-2">
                    <h2 class="mt-2 text-lg font-medium">Facilities</h2>
                    @for (feat of features(); track feat) {
                        @if (!hide_features().includes(feat)) {
                            <div class="flex items-center">
                                <settings-toggle
                                    class="w-full"
                                    [label]="feature_display()[feat] || feat"
                                    [ngModel]="
                                        filters()?.features?.includes(feat)
                                    "
                                    (ngModelChange)="
                                        toggleFeature(feat, $event)
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></settings-toggle>
                            </div>
                        }
                    }
                </section>
            }
        </form>
        @if (can_close()) {
            <div class="border-base-200 w-full border-t px-2 pt-2">
                <button
                    btn
                    matRipple
                    class="w-full"
                    name="apply-space-filters"
                    (click)="close()"
                >
                    {{ 'COMON.APPLY' | translate }}
                </button>
            </div>
        }
    `,
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
    imports: [
        MatRippleModule,
        TranslatePipe,
        SettingsToggleComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        MatCheckboxModule,
        DateFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        FormField,
        BuildingPipe,
    ],
})
export class SpaceFiltersComponent {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _spaces = inject(SpacesService);
    private _mapspeople = inject(MapsPeopleService);

    public readonly multiday = input<boolean>(undefined);
    public readonly hide_levels = input<boolean>(undefined);
    public readonly viewing_map = input<boolean>(undefined);
    public readonly can_close = signal(false);
    public readonly options = this._event_form.options;
    public readonly filters = this._event_form.filters;

    public readonly use_region = settingSignal<boolean>('use_region', false);

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;

    public readonly levels = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const spaces = this._event_form.spaces();
        const level_list = this.use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        const level_ids = new Set(
            flatten(spaces.map((space) => space.zones || [])),
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
        const levels = this.levels();
        const zones = this.options()?.zones || [];
        if (!zones.length) return;
        const valid_zones = zones.filter((zone) =>
            levels.some((lvl) => lvl.id === zone),
        );
        if (valid_zones.length !== zones.length) {
            this._event_form.setOptions({ zones: valid_zones });
        }
    });

    public readonly regions = this._org.region_list;

    public readonly using_mapspeople = this._mapspeople.available;

    public readonly features = computed(() => {
        const features = this._spaces.features();
        const spaces = this._event_form.available_spaces();
        return unique(features.concat(flatten(spaces.map((_) => _.features))));
    });

    public readonly allow_all_day = settingSignal<boolean>(
        'events.allow_all_day',
        false,
    );

    private readonly _use_building_tz = settingSignal<boolean>(
        'events.use_building_timezone',
        false,
    );

    public readonly timezone = computed(() =>
        this._use_building_tz()
            ? this._org.active_building()?.timezone || ''
            : '',
    );

    public readonly setOptions = (o) => this._event_form.setOptions(o);
    public readonly setFilters = (f) => this._event_form.setFilters(f);

    public readonly region = this._org.active_region;

    public get form() {
        return this._event_form.form;
    }

    public get model() {
        return this._event_form.model;
    }

    public readonly bookable_hours = settingSignal<{
        start: number;
        end: number;
    }>('events.bookable_hours', undefined);

    public readonly max_duration = settingSignal<number>(
        'events.max_duration',
        480,
    );

    public readonly duration_step = settingSignal<number>(
        'events.duration_step',
        30,
    );

    public readonly min_duration = settingSignal<number>(
        'events.min_duration',
        30,
    );

    public readonly custom_duration_options = settingSignal<number[]>(
        'events.custom_duration_options',
        [],
    );

    public readonly effective_min_duration = computed(() =>
        Math.min(this.min_duration(), ...this.custom_duration_options()),
    );

    public readonly feature_display = settingSignal<Record<string, string>>(
        'events.feature_decriptions',
        {},
    );

    public readonly hide_features = settingSignal<string[]>(
        'events.hide_features',
        [],
    );

    public readonly use_24hr = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );

    public get start_date() {
        return startOfDay(this.model().date).valueOf();
    }

    private readonly _allowed_future_days = settingSignal<number>(
        'events.allowed_future_days',
        180,
    );

    public readonly end_date = computed(() =>
        endOfDay(
            addDays(Date.now(), this._allowed_future_days() || 180),
        ).valueOf(),
    );

    public close() {
        // No-op for inline filters
    }

    public setBuilding(bld: Building) {
        this._org.building = bld;
    }

    public setRegion(region: Region) {
        this._org.region = region;
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = this._event_form.filters();
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this._event_form.setFilters({ features: new_list });
    }
}

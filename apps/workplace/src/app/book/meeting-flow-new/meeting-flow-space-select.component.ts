import { CdkScrollable } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    flatten,
    i18n,
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
    unique,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    LevelPipe,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService, SpacesService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { MeetingFlowSpaceListComponent } from './meeting-flow-space-list.component';
import { MeetingFlowSpaceMapComponent } from './meeting-flow-space-map.component';

@Component({
    selector: 'meeting-flow-space-select',
    template: `
        <div
            class="border-base-300 bg-base-100 relative w-full overflow-hidden rounded-lg border"
        >
            <div
                class="gradient border-base-content relative flex items-center justify-between space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
            >
                <div class="flex items-center space-x-2">
                    <icon>info</icon>
                    <div>
                        {{ 'CALENDAR_EVENT.SELECT_ROOM_HEADER' | translate }}
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="sm:hidden"
                    (click)="filters_open.set(!filters_open())"
                >
                    <icon>{{ filters_open() ? 'close' : 'filter_list' }}</icon>
                </button>
            </div>
            <!-- Mobile backdrop -->
            @if (filters_open()) {
                <div
                    class="fixed inset-0 z-20 bg-black/50 sm:hidden"
                    (click)="filters_open.set(false)"
                ></div>
            }
            <div
                class="relative flex w-full overflow-hidden p-2 sm:space-x-2"
            >
                <!-- Filters Sidebar - Desktop -->
                <div
                    class="hidden sm:sticky sm:top-0 sm:block sm:w-[20rem] sm:max-w-[20rem]"
                >
                    <div class="flex w-full items-center justify-between p-2">
                        <h3 class="px-2 text-xl font-medium">
                            {{ 'COMMON.FILTERS' | translate }}
                        </h3>
                    </div>
                    <div cdkScrollable class="flex flex-col overflow-y-auto p-4">
                        <label for="location">{{
                            'COMMON.LOCATION' | translate
                        }}</label>
                        @if (use_region() && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region"
                                    (ngModelChange)="setRegion($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'CALENDAR_EVENT.SPACE_REGION_ANY'
                                            | translate
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
                        @if (!use_region() && (buildings())?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building()"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        (building())?.display_name ||
                                        (building())?.name
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
                        @if (view() === 'list') {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="location-multi"
                                    [ngModel]="options()?.zones"
                                    (ngModelChange)="
                                        setOptions({ zones: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                    [multiple]="true"
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
                        <label for="capacity">{{
                            'COMMON.CAPACITY' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="capacity"
                                [ngModel]="filters()?.capacity ?? -1"
                                (ngModelChange)="
                                    setFilters({ capacity: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (opt of capacity_options; track opt.value) {
                                    <mat-option [value]="opt.value">
                                        {{ opt.label | translate }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field [formField]="form.date" />
                        @if (allow_all_day()) {
                            <settings-toggle
                                class="mb-2"
                                [formField]="form.all_day"
                                >{{
                                    'COMMON.ALL_DAY' | translate
                                }}</settings-toggle
                            >
                        }
                        @if (!field('all_day')) {
                            <label for="date">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <time-field
                                    class="flex-1"
                                    [ngModel]="field('date')"
                                    (ngModelChange)="
                                        model.update((m) => ({ ...m, date: $event }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [disabled]="form.date().disabled()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                <duration-field
                                    class="w-1/3 flex-1"
                                    [formField]="form.duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            </div>
                        }
                        @if (view() === 'list') {
                            <settings-toggle
                                class="mb-4"
                                [ngModel]="filters()?.show_fav"
                                (ngModelChange)="setFilters({ show_fav: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                >{{
                                    'COMMON.FAVOURITES_ONLY' | translate
                                }}</settings-toggle
                            >
                        }
                        @if (view() === 'list') {
                            @if (features()?.length) {
                                <h2 class="text-lg font-medium">
                                    {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                                </h2>
                                <div class="mb-4 flex flex-col space-y-2">
                                    @for (feat of features(); track feat) {
                                        @if (!hide_features().includes(feat)) {
                                            <settings-toggle
                                                class="w-full"
                                                [label]="
                                                    feature_display()[feat] || feat
                                                "
                                                [ngModel]="
                                                    filters()?.features?.includes(feat)
                                                "
                                                (ngModelChange)="
                                                    toggleFeature(feat, $event)
                                                "
                                                [ngModelOptions]="{
                                                    standalone: true,
                                                }"
                                            ></settings-toggle>
                                        }
                                    }
                                </div>
                            }
                        }
                    </div>
                </div>
                <!-- Main content area -->
                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="mb-2 flex space-x-2">
                        <div
                            filters
                            class="border-base-300 bg-base-100 flex flex-1 flex-wrap rounded-lg border p-2"
                        >
                            @let feature_list =
                                filters()?.features || [];
                            @let zones = options()?.zones || [];
                            @let capacity = filters()?.capacity || -1;
                            @let event = model();
                            @let zone = (zones | level) || (zones | building);
                            @let location =
                                zone?.display_name || zone?.name || '';
                            @if (feature_list.length > 1) {
                                <button
                                    btn
                                    matRipple
                                    name="clear-space-filters"
                                    class="mr-2 mb-2 min-h-8"
                                    (click)="removeAllFeatures()"
                                >
                                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                                </button>
                            }
                            @if (location) {
                                <div filter-item zone>
                                    {{ location }}
                                </div>
                            }
                            <div filter-item date>
                                {{ event.date | date: 'mediumDate' }}
                            </div>
                            <div filter-item time>
                                @if (!event.all_day) {
                                    {{ event.date | date: time_format }} &mdash;
                                    {{ event.date_end | date: time_format }}
                                }
                                @if (event.all_day) {
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                }
                            </div>
                            <div filter-item count>
                                @if (capacity < 0) {
                                    {{ 'COMMON.CAPACITY_ANY' | translate }}
                                } @else {
                                    {{
                                        'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                            | translate
                                                : {
                                                      count: capacity || 2,
                                                  }
                                    }}
                                }
                            </div>
                            @for (feat of feature_list; track feat) {
                                <div filter-item>
                                    <p class="truncate">{{ feat }}</p>
                                    <button
                                        icon
                                        matRipple
                                        name="remove-space-filter"
                                        class="-mr-4"
                                        (click)="removeFeature(feat)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                            }
                        </div>
                        <div class="space-y-2">
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'list'"
                                (click)="view.set('list')"
                            >
                                <icon class="text-2xl">list</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.LIST' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'map'"
                                (click)="setMapView()"
                            >
                                <icon class="text-2xl">Map</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.MAP' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="border-base-300 bg-base-200 relative flex flex-col overflow-hidden rounded-lg border p-2"
                        [class.flex-1]="view() !== 'map'"
                        [class.h-[600px]]="view() === 'map'"
                        [class.min-h-[600px]]="view() === 'map'"
                    >
                        @if (view() === 'map') {
                            <meeting-flow-space-map
                                [selected_spaces]="selected()"
                                (space_selected)="toggleSpace($event)"
                            />
                        } @else {
                            <meeting-flow-space-list
                                [selected_spaces]="selected()"
                                (space_selected)="toggleSpace($event)"
                            />
                        }
                    </div>
                </div>
            </div>
            <!-- Mobile Filters Panel - Bottom Sheet -->
            <div
                class="filters-panel-mobile border-base-300 bg-base-100 fixed right-0 bottom-0 left-0 z-30 w-full border-t shadow-lg transition-transform duration-300 sm:hidden"
                [class.translate-y-full]="!filters_open()"
                [class.translate-y-0]="filters_open()"
            >
                <div
                    class="border-base-300 flex w-full items-center justify-between border-b p-2"
                >
                    <h3 class="px-2 text-xl font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h3>
                    <button icon matRipple (click)="filters_open.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    cdkScrollable
                    class="flex max-h-[60vh] flex-col overflow-y-auto p-4"
                >
                    <label for="location">{{
                        'COMMON.LOCATION' | translate
                    }}</label>
                    @if (use_region() && (regions())?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_REGION_ANY'
                                        | translate
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
                    @if (!use_region() && (buildings())?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="building()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    (building())?.display_name ||
                                    (building())?.name
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
                    @if (view() === 'list') {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location-multi-mobile"
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
                    <label for="capacity">{{
                        'COMMON.CAPACITY' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="capacity-mobile"
                            [ngModel]="filters()?.capacity ?? -1"
                            (ngModelChange)="setFilters({ capacity: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            @for (opt of capacity_options; track opt.value) {
                                <mat-option [value]="opt.value">
                                    {{ opt.label | translate }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <date-field [formField]="form.date" />
                    @if (allow_all_day()) {
                        <settings-toggle
                            class="mb-2"
                            [formField]="form.all_day"
                            >{{ 'COMMON.ALL_DAY' | translate }}</settings-toggle
                        >
                    }
                    @if (!field('all_day')) {
                        <label for="date">{{ 'FORM.TIME' | translate }}</label>
                        <div class="flex space-x-2">
                            <time-field
                                class="flex-1"
                                [ngModel]="field('date')"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.date().disabled()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                            <duration-field
                                class="w-1/3 flex-1"
                                [formField]="form.duration"
                                [time]="field('date')"
                                [max]="max_duration()"
                                [min]="min_duration()"
                                [step]="duration_step()"
                                [custom_options]="custom_duration_options()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                    }
                    @if (view() === 'list') {
                        <settings-toggle
                            class="mb-4"
                            [ngModel]="filters()?.show_fav"
                            (ngModelChange)="setFilters({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            >{{
                                'COMMON.FAVOURITES_ONLY' | translate
                            }}</settings-toggle
                        >
                    }
                    @if (view() === 'list') {
                        @if (features()?.length) {
                            <h2 class="text-lg font-medium">
                                {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                            </h2>
                            <div class="mb-4 flex flex-col space-y-2">
                                @for (feat of features(); track feat) {
                                    @if (!hide_features().includes(feat)) {
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
                                    }
                                }
                            </div>
                        }
                    }
                </div>
            </div>
        </div>
        <div class="h-4"></div>
        <div
            class="border-base-300 bg-base-100 sticky bottom-0 z-10 flex justify-between rounded-t-xl border-x border-t p-3 sm:z-40"
        >
            <a
                btn
                matRipple
                class="inverse w-40 cursor-pointer"
                [routerLink]="[]"
                [queryParams]="{ view: 0 }"
            >
                {{ 'COMMON.BACK' | translate }}
            </a>
            <button btn matRipple class="w-40" (click)="continue()">
                {{ 'COMMON.CONTINUE' | translate }}
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

            .filters-panel-mobile {
                border-radius: 1rem 1rem 0 0;
                max-height: 70vh;
            }

            [filter-item] {
                display: flex;
                align-items: center;
                padding: 0 1rem;
                min-height: 2rem;
                height: 2rem;
                font-size: 0.875rem;
                border: 1px solid var(--base-300);
                border-radius: 1.25rem;
                margin: 0.25rem;
                max-width: 100%;
                text-align: center;
            }

            [filter-item]:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            [filter-item] > * + * {
                margin-left: 0.5rem;
            }
        `,
    ],
    imports: [
        CdkScrollable,
        CommonModule,
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        FormsModule,
        FormField,
        SettingsToggleComponent,
        TranslatePipe,
        BuildingPipe,
        LevelPipe,
        MeetingFlowSpaceListComponent,
        MeetingFlowSpaceMapComponent,
        RouterModule,
    ],
})
export class MeetingFlowSpaceSelectComponent {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _spaces = inject(SpacesService);

    public readonly prev = output();
    public readonly next = output();

    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly use_region = settingSignal('use_region', false);
    public readonly min_duration = settingSignal('events.min_duration', 30);
    public readonly max_duration = settingSignal('events.max_duration', 8 * 60);
    public readonly duration_step = settingSignal('events.duration_step', 15);
    public readonly custom_duration_options = settingSignal<number[]>(
        'events.custom_duration_options',
        [],
    );
    public readonly allow_all_day = settingSignal(
        'events.allow_all_day',
        false,
    );
    public readonly feature_display = settingSignal<Record<string, string>>(
        'events.feature_decriptions',
        {},
    );
    public readonly hide_features = settingSignal<string[]>(
        'events.hide_features',
        [],
    );
    public readonly view = signal<'map' | 'list'>('list');
    public readonly filters_open = signal(false);

    public readonly capacity_options = [
        { value: -1, label: 'COMMON.CAPACITY_ANY' },
        { value: 1, label: 'CALENDAR_EVENT.ROOM_SIZE_1_2' },
        { value: 3, label: 'CALENDAR_EVENT.ROOM_SIZE_3_4' },
        { value: 5, label: 'CALENDAR_EVENT.ROOM_SIZE_5_8' },
        { value: 9, label: 'CALENDAR_EVENT.ROOM_SIZE_9_PLUS' },
    ];

    public get form() {
        return this._event_form.form;
    }

    public get model() {
        return this._event_form.model;
    }

    private readonly form_value = this._event_form.model;

    public readonly selected = computed(() => {
        const resources = this.form_value().resources || [];
        return resources.map(({ id }) => id);
    });

    public readonly has_space = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public readonly options = this._event_form.options;
    public readonly filters = this._event_form.filters;

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (region) => (this._org.region = region);
    public readonly setOptions = (o) => this._event_form.setOptions(o);
    public readonly setFilters = (f) => this._event_form.setFilters(f);
    public readonly loading = this._event_form.loading;

    public readonly room_alerts = this._event_form.room_alerts;
    public readonly active = signal('');
    private readonly bookable_spaces = this._event_form.spaces;

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
                (a.name || '').localeCompare(b.name || '') ||
                (a.display_name || '').localeCompare(b.display_name || ''),
        );
    });

    public readonly features = computed(() => {
        const features = this._spaces.features();
        const spaces = this._event_form.available_spaces();
        return unique(features.concat(flatten(spaces.map((_) => _.features))));
    });

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get time_format() {
        return this.use_24hr() ? 'HH:mm' : 'h:mm a';
    }

    public field(name: string) {
        return this.model()?.[name];
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = this._event_form.filters();
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this._event_form.setFilters({ features: new_list });
    }

    public removeFeature(feat: string) {
        const { features } = this._event_form.filters();
        const new_list = (features || []).filter((_) => feat !== _);
        this._event_form.setFilters({ features: new_list });
    }

    public removeAllFeatures() {
        this._event_form.setFilters({ features: [] });
    }

    public setMapView() {
        this.view.set('map');
        const level_list = this.use_region()
            ? this._org.levelsForRegion(this._org.region)
            : this._org.levelsForBuilding(this._org.building);
        const level_ids = new Set(
            flatten(this.bookable_spaces().map((space) => space.zones || [])),
        );
        const viewable_levels = level_list.filter(
            (lvl) => !lvl.tags.includes('parking') && level_ids.has(lvl.id),
        );
        if (viewable_levels.length) {
            const current_zones = this._event_form.options()?.zones || [];
            const current_zone_valid = current_zones.some((zone) =>
                viewable_levels.some((lvl) => lvl.id === zone),
            );
            if (current_zone_valid) {
                const valid_zone = current_zones.find((zone) =>
                    viewable_levels.some((lvl) => lvl.id === zone),
                );
                this.setOptions({ zones: [valid_zone] });
            } else {
                const first_level = viewable_levels.sort(
                    (a, b) =>
                        a.parent_id.localeCompare(b.parent_id) ||
                        (a.display_name || '').localeCompare(
                            b.display_name || '',
                        ),
                )[0];
                this.setOptions({ zones: [first_level.id] });
            }
        }
    }

    public toggleSpace(space: Space) {
        const resources = this.field('resources') || [];
        if (this._settings.get('app.events.allow_multiple_spaces')) {
            const new_resources = resources.find(({ id }) => id === space.id)
                ? resources.filter(({ id }) => id !== space.id)
                : [...resources, space];
            this.model.update((m) => ({ ...m, resources: new_resources }));
            // selected signal will update automatically via computed
        } else {
            this.model.update((m) => ({ ...m, resources: [space] }));
            // selected signal will update automatically via computed
            // Close filters on mobile after selecting a space
            this.filters_open.set(false);
        }
    }

    public continue() {
        if (!this.has_space()) {
            notifyError(i18n('CALENDAR_EVENT.ERROR_ROOM_REQUIRED'));
            return;
        }

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: 2 },
            queryParamsHandling: 'merge',
        });
    }
}

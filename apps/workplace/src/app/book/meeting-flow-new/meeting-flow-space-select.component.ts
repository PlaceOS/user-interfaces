import { CommonModule } from '@angular/common';
import { Component, computed, inject, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { combineLatest, map } from 'rxjs';
import { MeetingFlowSpaceListComponent } from './meeting-flow-space-list.component';
import { MeetingFlowSpaceMapComponent } from './meeting-flow-space-map.component';

@Component({
    selector: 'meeting-flow-space-select',
    template: `
        <div
            class="relative w-full overflow-hidden rounded-lg border border-base-300 bg-base-100"
        >
            <div
                class="gradient relative flex items-center justify-between space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
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
                [formGroup]="form()"
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
                    <div class="flex flex-col overflow-y-auto p-4">
                        <label for="location">{{
                            'COMMON.LOCATION' | translate
                        }}</label>
                        @if (use_region() && (regions | async)?.length) {
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
                                    @for (reg of regions | async; track reg) {
                                        <mat-option [value]="reg">
                                            {{ reg.display_name || reg.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!use_region() && (buildings | async)?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building | async"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        (building | async)?.display_name ||
                                        (building | async)?.name
                                    "
                                >
                                    @for (bld of buildings | async; track bld) {
                                        <mat-option [value]="bld">
                                            {{ bld.display_name || bld.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                                [multiple]="true"
                            >
                                @for (lvl of levels | async; track lvl) {
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
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field formControlName="date" />
                        @if (allow_all_day()) {
                            <settings-toggle
                                class="mb-2"
                                formControlName="all_day"
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
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [disabled]="form().controls.date.disabled"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                <duration-field
                                    class="w-1/3 flex-1"
                                    formControlName="duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            </div>
                        }
                        <settings-toggle
                            class="mb-4"
                            formControlName="all_day"
                            >{{
                                'COMMON.FAVOURITES_ONLY' | translate
                            }}</settings-toggle
                        >
                        @if ((features | async)?.length) {
                            <h2 class="text-lg font-medium">
                                {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                            </h2>
                            <div class="mb-4 flex flex-col space-y-2">
                                @for (feat of features | async; track feat) {
                                    @if (!hide_features().includes(feat)) {
                                        <settings-toggle
                                            class="w-full"
                                            [name]="
                                                feature_display()[feat] || feat
                                            "
                                            [ngModel]="
                                                (
                                                    options | async
                                                )?.features?.includes(feat)
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
                    </div>
                </div>
                <!-- Main content area -->
                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="mb-2 flex space-x-2">
                        <div
                            filters
                            class="flex flex-1 flex-wrap rounded-lg border border-base-300 bg-base-100 p-2"
                        >
                            @let feature_list =
                                (options | async)?.features || [];
                            @let zones = (options | async)?.zones || [];
                            @let capacity = (filters | async)?.capacity || -1;
                            @let event = form().getRawValue();
                            @let zone = (zones | level) || (zones | building);
                            @let location =
                                zone?.display_name || zone?.name || '';
                            @if (feature_list.length > 1) {
                                <button
                                    btn
                                    matRipple
                                    name="clear-space-filters"
                                    class="mb-2 mr-2 min-h-[2rem]"
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
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                        | translate
                                            : {
                                                  count: capacity || 2,
                                              }
                                }}
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
                                (click)="view.set('map')"
                            >
                                <icon class="text-2xl">Map</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.MAP' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="relative flex flex-col overflow-hidden rounded-lg border border-base-300 bg-base-200 p-2"
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
                class="filters-panel-mobile fixed bottom-0 left-0 right-0 z-30 w-full border-t border-base-300 bg-base-100 shadow-lg transition-transform duration-300 sm:hidden"
                [class.translate-y-full]="!filters_open()"
                [class.translate-y-0]="filters_open()"
                [formGroup]="form()"
            >
                <div
                    class="flex w-full items-center justify-between border-b border-base-300 p-2"
                >
                    <h3 class="px-2 text-xl font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h3>
                    <button icon matRipple (click)="filters_open.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                <div class="flex max-h-[60vh] flex-col overflow-y-auto p-4">
                    <label for="location">{{
                        'COMMON.LOCATION' | translate
                    }}</label>
                    @if (use_region() && (regions | async)?.length) {
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
                                @for (reg of regions | async; track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region() && (buildings | async)?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="building | async"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    (building | async)?.display_name ||
                                    (building | async)?.name
                                "
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="location"
                            [ngModel]="(options | async)?.zones"
                            (ngModelChange)="setOptions({ zones: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="'COMMON.LEVEL_ANY' | translate"
                            [multiple]="true"
                        >
                            @for (lvl of levels | async; track lvl) {
                                <mat-option [value]="lvl.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region()) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (lvl?.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{ lvl.display_name || lvl.name }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <date-field formControlName="date" />
                    @if (allow_all_day()) {
                        <settings-toggle
                            class="mb-2"
                            formControlName="all_day"
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
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form().controls.date.disabled"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                            <duration-field
                                class="w-1/3 flex-1"
                                formControlName="duration"
                                [time]="field('date')"
                                [max]="max_duration()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                    }
                    <settings-toggle class="mb-4" formControlName="all_day">{{
                        'COMMON.FAVOURITES_ONLY' | translate
                    }}</settings-toggle>
                    @if ((features | async)?.length) {
                        <h2 class="text-lg font-medium">
                            {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                        </h2>
                        <div class="mb-4 flex flex-col space-y-2">
                            @for (feat of features | async; track feat) {
                                @if (!hide_features().includes(feat)) {
                                    <settings-toggle
                                        class="w-full"
                                        [name]="feature_display()[feat] || feat"
                                        [ngModel]="
                                            (
                                                options | async
                                            )?.features?.includes(feat)
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
                </div>
            </div>
        </div>
        <div class="h-4"></div>
        <div
            class="sticky bottom-0 z-10 flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3 sm:z-40"
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
        CommonModule,
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        ReactiveFormsModule,
        FormsModule,
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
    public readonly max_duration = settingSignal('events.max_duration', 8 * 60);
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
    public readonly form = signal(this._event_form.form);
    public readonly view = signal<'map' | 'list'>('list');
    public readonly filters_open = signal(false);

    private readonly form_changes = toSignal(
        this._event_form.form.valueChanges,
    );
    private readonly form_value = computed(() => {
        this.form_changes();
        return this._event_form.form.getRawValue();
    });

    public readonly selected = computed(() => {
        const resources = this.form_value().resources || [];
        return resources.map(({ id }) => id);
    });

    public readonly has_space = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public readonly options = this._event_form.options$;
    public readonly filters = this._event_form.filters$;

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (region) => (this._org.region = region);
    public readonly setOptions = (o) => this._event_form.setOptions(o);
    public readonly setFilters = (f) => this._event_form.setFilters(f);
    public readonly loading = this._event_form.loading$;

    public readonly room_alerts = this._event_form.room_alerts;
    public readonly active = signal('');

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region()
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking'),
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
    );

    public readonly features = combineLatest([
        this._spaces.features,
        this._event_form.available_spaces,
    ]).pipe(
        map(([features, spaces]) =>
            unique(features.concat(flatten(spaces.map((_) => _.features)))),
        ),
    );

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get time_format() {
        return this.use_24hr() ? 'HH:mm' : 'h:mm a';
    }

    public field(name: string) {
        return this.form()?.getRawValue()?.[name];
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = this._event_form.filters;
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this._event_form.setFilters({ features: new_list });
    }

    public removeFeature(feat: string) {
        const { features } = this._event_form.filters;
        const new_list = (features || []).filter((_) => feat !== _);
        this._event_form.setFilters({ features: new_list });
    }

    public removeAllFeatures() {
        this._event_form.setFilters({ features: [] });
    }

    public toggleSpace(space: Space) {
        const resources = this.field('resources') || [];
        if (this._settings.get('app.events.allow_multiple_spaces')) {
            const new_resources = resources.find(({ id }) => id === space.id)
                ? resources.filter(({ id }) => id !== space.id)
                : [...resources, space];
            this.form().patchValue({ resources: new_resources });
            // selected signal will update automatically via computed
        } else {
            this.form().patchValue({ resources: [space] });
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

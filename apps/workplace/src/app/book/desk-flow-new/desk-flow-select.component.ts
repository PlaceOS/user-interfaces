import { CdkScrollable } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    Injector,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    flatten,
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
import { SpacesService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';
import { DeskFlowSelectListComponent } from './desk-flow-select-list.component';
import { DeskFlowSelectMapComponent } from './desk-flow-select-map.component';

@Component({
    selector: 'desk-flow-select',
    template: `
        <div class="bg-base-100 relative w-full">
            <div
                class="gradient border-base-content relative flex h-14 items-center justify-between space-x-2 border-l-8 px-4 text-xl font-medium"
            >
                <div class="flex items-center space-x-2">
                    <icon>desk</icon>
                    <div>
                        {{ 'BOOKINGS.DESK_SELECT_HEADER' | translate }}
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
                    class="fixed inset-0 z-[60] bg-black/50 sm:hidden"
                    (click)="filters_open.set(false)"
                ></div>
            }
            <div class="relative flex w-full overflow-hidden p-2 sm:space-x-2">
                <!-- Filters Sidebar - Desktop -->
                <div
                    class="hidden sm:sticky sm:top-0 sm:block sm:w-[20rem] sm:max-w-[20rem]"
                >
                    <div class="flex w-full items-center justify-between p-2">
                        <h3 class="px-2 text-xl font-medium">
                            {{ 'COMMON.FILTERS' | translate }}
                        </h3>
                    </div>
                    <div
                        cdkScrollable
                        class="flex flex-col overflow-y-auto px-4 pb-4"
                    >
                        <label for="location">{{
                            'COMMON.LOCATION' | translate
                        }}</label>
                        @if (use_region() && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region()"
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
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field [formField]="form.date" [to]="end_date()" />
                        <settings-toggle
                            class="mb-2"
                            [formField]="form.all_day"
                            >{{ 'COMMON.ALL_DAY' | translate }}</settings-toggle
                        >
                        @if (!field('all_day')) {
                            <label for="date">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <time-field
                                    class="flex-1"
                                    [ngModel]="field('date')"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                <duration-field
                                    class="w-1/3 flex-1"
                                    [formField]="form.duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [custom_options]="custom_duration_options()"
                                    [step]="duration_step()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            </div>
                        }
                        @if (view() === 'list') {
                            <settings-toggle
                                class="mb-4"
                                [ngModel]="options()?.show_fav"
                                (ngModelChange)="
                                    setOptions({ show_fav: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                >{{
                                    'COMMON.FAVOURITES_ONLY' | translate
                                }}</settings-toggle
                            >
                            <h2 class="text-lg font-medium">
                                {{ 'BOOKINGS.FACILITIES' | translate }}
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
                                                options()?.features?.includes(
                                                    feat
                                                )
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
                            class="border-base-300 bg-base-100 flex flex-1 flex-wrap rounded-lg border p-2"
                        >
                            @let feature_list = options()?.features || [];
                            @let zones = options()?.zones || [];
                            @let event = model();
                            @let zone = (zones | level) || (zones | building);
                            @let location =
                                zone?.display_name || zone?.name || '';
                            @if (feature_list.length > 1) {
                                <button
                                    btn
                                    matRipple
                                    name="clear-space-filters"
                                    class="mr-2 mb-2 min-h-[2rem]"
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
                            <desk-flow-select-map
                                [selected_items]="selected()"
                                (item_selected)="toggleDesk($event)"
                            />
                        } @else {
                            <desk-flow-select-list
                                [selected_items]="selected()"
                                [promote_selected]="promote_selected()"
                                (item_selected)="toggleDesk($event)"
                            />
                        }
                    </div>
                </div>
            </div>
            <!-- Mobile Filters Panel - Bottom Sheet -->
            <div
                class="filters-panel-mobile border-base-300 bg-base-100 fixed right-0 bottom-0 left-0 z-[70] w-full border-t shadow-lg transition-transform duration-300 sm:hidden"
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
                    @if (use_region() && regions()?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region()"
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
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <date-field [formField]="form.date" [to]="end_date()" />
                    <settings-toggle class="mb-2" [formField]="form.all_day">{{
                        'COMMON.ALL_DAY' | translate
                    }}</settings-toggle>
                    @if (!field('all_day')) {
                        <label for="date">{{ 'FORM.TIME' | translate }}</label>
                        <div class="flex space-x-2">
                            <time-field
                                class="flex-1"
                                [ngModel]="field('date')"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                            <duration-field
                                class="w-1/3 flex-1"
                                [formField]="form.duration"
                                [time]="field('date')"
                                [min]="min_duration()"
                                [max]="max_duration()"
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
                            [ngModel]="options()?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            >{{
                                'COMMON.FAVOURITES_ONLY' | translate
                            }}</settings-toggle
                        >
                        <h2 class="text-lg font-medium">
                            {{ 'BOOKINGS.FACILITIES' | translate }}
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
                                            options()?.features?.includes(feat)
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
        FormField,
        FormsModule,
        SettingsToggleComponent,
        TranslatePipe,
        BuildingPipe,
        LevelPipe,
        DeskFlowSelectListComponent,
        DeskFlowSelectMapComponent,
    ],
})
export class DeskFlowSelectComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _spaces = inject(SpacesService);
    private _injector = inject(Injector);

    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly use_region = settingSignal('use_region', false);
    public readonly available_days = settingSignal(
        'desks.available_period',
        90,
    );
    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
    );
    public readonly duration_step = computed(
        () =>
            settingSignal('desks.duration_step')() ||
            settingSignal('bookings.duration_step', 15)(),
    );

    public readonly min_duration = computed(
        () =>
            settingSignal('desks.min_duration')() ||
            settingSignal('bookings.min_duration', 30)(),
    );

    public readonly max_duration = computed(
        () =>
            settingSignal('desks.max_duration')() ||
            settingSignal('bookings.max_duration', 8 * 60)(),
    );
    public readonly custom_duration_options = computed<number[]>(
        () =>
            settingSignal('desks.custom_duration_options')() ||
            settingSignal('bookings.custom_duration_options', [] as number[])(),
    );
    public readonly feature_display = settingSignal<Record<string, string>>(
        'desks.feature_decriptions',
        {},
    );
    public readonly hide_features = settingSignal<string[]>(
        'desks.hide_features',
        [],
    );
    public readonly form = this._booking_form.form;
    public readonly model = this._booking_form.model;
    public readonly selected = signal<string[]>([]);
    public readonly promote_selected = signal(false);
    public readonly view = signal<'map' | 'list'>('list');
    public readonly filters_open = signal(false);

    private readonly form_value = this._booking_form.model;

    public readonly has_item = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public readonly options = this._booking_form.options;
    public readonly options_value = this._booking_form.options;

    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly setBuilding = (bld) => (this._org.building = bld);
    public readonly setRegion = (region) => (this._org.region = region);
    public readonly setOptions = (o) => this._booking_form.setOptions(o);
    public readonly loading = this._booking_form.loading;

    public readonly active = signal('');
    private _manual_selection = false;
    private readonly bookable_resources = this._booking_form.resources;

    constructor() {
        super();
        effect(() => {
            const selected_ids = (this.form_value()?.resources || []).map(
                ({ id }) => id,
            );
            this.selected.set(selected_ids);
            this.promote_selected.set(
                !!selected_ids.length && !this._manual_selection,
            );
            this._manual_selection = false;
        });
    }

    public readonly levels = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const resources = this._booking_form.resources();
        const level_list = this.use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        const level_ids = new Set(
            resources
                .filter((resource) => resource.bookable !== false)
                .map((resource) => resource.zone?.id)
                .filter((_) => _),
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

    public readonly features = computed(() =>
        unique(
            flatten(
                this._booking_form.resources().map((_) => _.features),
            ).filter((_) => _.trim()),
        ),
    );

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get time_format() {
        return this.use_24hr() ? 'HH:mm' : 'h:mm a';
    }

    public ngOnInit() {
        let previous_building_id = this._org.active_building()?.id;
        this.subscription(
            'clear_selected_desk_on_building_change',
            this._effect(() => {
                const bld = this._org.active_building();
                const selected_resources = this.field('resources') || [];
                const selected_for_building =
                    !!selected_resources.length &&
                    selected_resources.every(
                        (resource) => resource.zone?.parent_id === bld?.id,
                    );
                if (
                    previous_building_id &&
                    bld?.id &&
                    previous_building_id !== bld.id &&
                    !selected_for_building
                ) {
                    this.clearSelectedDesk();
                }
                previous_building_id = bld?.id;
            }),
        );

        const resources = this.field('resources') || [];
        const selected_ids = resources.map(({ id }) => id);

        // Handle edit mode: if form has an id and asset_id but no resources populated yet
        if (this.field('id') && !resources.length) {
            const asset_id = this.field('asset_id');
            if (asset_id) {
                // Set the selected ID immediately for UI feedback
                selected_ids.push(asset_id);

                // React to available resources to populate the full resource
                // object once the resources are loaded
                this.subscription(
                    'load_existing_resource',
                    this._effect(() => {
                        const available =
                            this._booking_form.available_resources();
                        if (!available.length) return;

                        const matching_resource = available.find(
                            (r) => r.id === asset_id,
                        );

                        // Only patch if we found the resource and resources array is still empty
                        if (
                            matching_resource &&
                            !this.field('resources')?.length
                        ) {
                            this.model.update((m) => ({
                                ...m,
                                resources: [matching_resource],
                                asset_id: matching_resource.id,
                            }));
                            this.selected.set([matching_resource.id]);
                        }
                    }),
                );
            }
        }

        this.selected.set(selected_ids);
    }

    /** Create an effect and return a teardown compatible with subscription() */
    private _effect(fn: () => void) {
        const ref = effect(fn, { injector: this._injector });
        return { unsubscribe: () => ref.destroy() } as any;
    }

    public field(name: string) {
        return this.model()?.[name];
    }

    public clearSelectedDesk() {
        this.model.update((m) => ({ ...m, resources: [], asset_id: '' }));
        this.selected.set([]);
    }

    public async toggleFeature(feat: string, state: boolean) {
        const { features } = this.options_value();
        const new_list = (features || []).filter((_) => feat !== _);
        if (state) new_list.push(feat);
        this._booking_form.setOptions({ features: new_list });
    }

    public removeFeature(feat: string) {
        const { features } = this.options_value();
        const new_list = (features || []).filter((_) => feat !== _);
        this._booking_form.setOptions({ features: new_list });
    }

    public removeAllFeatures() {
        this._booking_form.setOptions({ features: [] });
    }

    public setMapView() {
        this.view.set('map');
        const level_list = this.use_region()
            ? this._org.levelsForRegion(this._org.region)
            : this._org.levelsForBuilding(this._org.building);
        const level_ids = new Set(
            this.bookable_resources()
                .filter((resource) => resource.bookable !== false)
                .map((resource) => resource.zone?.id)
                .filter((_) => _),
        );
        const viewable_levels = level_list
            .filter(
                (lvl) => !lvl.tags.includes('parking') && level_ids.has(lvl.id),
            )
            .sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        if (!viewable_levels.length) return;
        // The zone filters are hidden on the map, so apply the user's selected
        // level as the map's active level. Prefer a level they already picked in
        // the list filters, otherwise default to the first viewable level.
        const current_zones = this.options_value()?.zones || [];
        const active_level =
            viewable_levels.find((lvl) => current_zones.includes(lvl.id)) ||
            viewable_levels[0];
        this.setOptions({ zones: [active_level.id], zone_id: active_level.id });
    }

    public toggleDesk(space: Space) {
        const resources = this.field('resources') || [];
        this._manual_selection = true;
        if (this._settings.get('app.desks.allow_multiple')) {
            const new_resources = resources.find(({ id }) => id === space.id)
                ? resources.filter(({ id }) => id !== space.id)
                : [...resources, space];
            this.model.update((m) => ({
                ...m,
                resources: new_resources,
                asset_id: new_resources[0]?.id || '',
            }));
            this.selected.set(new_resources.map(({ id }) => id));
        } else {
            this.model.update((m) => ({
                ...m,
                resources: [space],
                asset_id: space.id,
            }));
            this.selected.set([space.id]);
            // Close filters on mobile after selecting a space
            this.filters_open.set(false);
        }
    }
}

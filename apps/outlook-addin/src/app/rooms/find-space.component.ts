import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    HashMap,
    OrganisationService,
    Space,
    ViewerFeature,
    ViewerStyles,
    i18n,
} from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService, SpacesService } from '@placeos/events';
import { Observable, combineLatest, of } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { FeaturesFilterService } from './features-filter.service';
import { FilterSpaceComponent } from './filter-space.component';
import { FindSpaceItemComponent } from './find-space-item.component';
import { Locatable, MapService, MapsList } from './map.service';
import { RoomConfirmService } from './room-confirm.service';

@Component({
    selector: 'find-space',
    template: `
        <div class="bg-base-200 fixed inset-0 z-10 flex flex-col">
            <div
                class="border-base-300 bg-base-100 mx-auto flex h-full w-lg max-w-full flex-col border-x"
            >
                <header class="space-y-2 p-2">
                    <div
                        class="bg-base-200 flex items-center justify-between rounded-sm p-2"
                    >
                        <h2 class="px-2 text-xl font-medium">Find Space</h2>
                        <button icon matRipple (click)="closeModal()">
                            <icon>close</icon>
                        </button>
                    </div>
                    <div
                        class="border-base-200 flex items-center justify-between rounded-lg border p-1"
                    >
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="openFilter()"
                        >
                            Filters
                            @if (selected_feature_count()) {
                                <span>
                                    ({{ selected_feature_count() }}
                                    applied)
                                </span>
                            }
                        </button>
                        <div
                            class="divide-secondary border-secondary mx-1 flex divide-x rounded-sm border"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-l rounded-r-none"
                                [class.bg-base-100]="view() !== 'list'"
                                [class.bg-secondary]="view() === 'list'"
                                [class.text-secondary-content]="
                                    view() === 'list'
                                "
                                [matTooltip]="'COMMON.LIST' | translate"
                                (click)="view.set('list')"
                            >
                                <icon>list</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-l-none rounded-r"
                                [class.bg-base-100]="view() !== 'map'"
                                [class.bg-secondary]="view() === 'map'"
                                [class.text-secondary-content]="
                                    view() === 'map'
                                "
                                [matTooltip]="'COMMON.MAP' | translate"
                                (click)="view.set('map')"
                            >
                                <icon>map</icon>
                            </button>
                        </div>
                    </div>
                </header>
                <main class="flex h-1/2 w-full flex-1 flex-col">
                    @if (!loading()) {
                        @if (spaces().length > 0) {
                            @if (view() === 'list') {
                                <div class="flex flex-col space-y-2">
                                    @for (space of spaces(); track space) {
                                        <find-space-item
                                            [space]="space"
                                            [selected]="book_space()[space.id]"
                                            (selectedChange)="
                                                handleBookEvent(space, $event)
                                            "
                                        >
                                        </find-space-item>
                                    }
                                </div>
                            } @else {
                                <mat-form-field
                                    appearance="outline"
                                    class="mr-2 ml-auto flex text-sm"
                                >
                                    <mat-select
                                        [ngModel]="selected_level()"
                                        (ngModelChange)="
                                            updateSelectedLevel($event)
                                        "
                                    >
                                        <mat-option [value]="maps_list()">
                                            {{ 'COMMON.LEVEL_ALL' | translate }}
                                        </mat-option>
                                        @for (map of maps_list(); track map) {
                                            <mat-option [value]="map">{{
                                                map.level
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            }
                        } @else {
                            <div class="h-1/2 w-full flex-1 px-2 pb-2">
                                <div
                                    class="bg-base-200 flex h-full w-full items-center justify-center rounded-sm opacity-30"
                                >
                                    <p class="">No spaces</p>
                                </div>
                            </div>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-1 items-center justify-center"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <p>{{ loading() }}</p>
                        </div>
                    }
                </main>
            </div>
        </div>

        <div
            class="bg-base-200 z-0 flex h-full w-full flex-1 flex-col overflow-auto"
        >
            <section class="flex flex-col py-5">
                <div class="mx-auto w-[calc(100%-2rem)] max-w-[375px]">
                    <div class="flex flex-row items-center">
                        <button (click)="closeModal()">
                            <icon
                                class="text-base-400 flex items-center justify-center text-3xl"
                                >close</icon
                            >
                        </button>

                        <span class="ml-6 flex items-center text-lg font-bold">
                            Find Space</span
                        >
                    </div>

                    <div
                        class="mt-3 flex flex-row justify-between align-middle"
                    >
                        <div class="flex w-7/12 justify-center">
                            <button
                                btn
                                matRipple
                                (click)="openFilter()"
                                class="filter-button bg-base-200 h-9 w-full text-sm"
                            >
                                <span>Filter</span>

                                @if (selected_feature_count()) {
                                    <span>
                                        ({{ selected_feature_count() }}
                                        applied)
                                    </span>
                                }
                            </button>
                        </div>
                        <div
                            class="divide-secondary border-secondary flex divide-x rounded-sm border"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-l rounded-r-none"
                                [class.bg-base-100]="view() !== 'list'"
                                [class.bg-secondary]="view() === 'list'"
                                [class.text-secondary-content]="
                                    view() === 'list'
                                "
                                [matTooltip]="'COMMON.LIST' | translate"
                                (click)="view.set('list')"
                            >
                                <icon>list</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-l-none rounded-r"
                                [class.bg-base-100]="view() !== 'map'"
                                [class.bg-secondary]="view() === 'map'"
                                [class.text-secondary-content]="
                                    view() === 'map'
                                "
                                [matTooltip]="'COMMON.MAP' | translate"
                                (click)="view.set('map')"
                            >
                                <icon>map</icon>
                            </button>
                        </div>
                    </div>

                    <section class="flex flex-row">
                        <!-- <mat-chip-list class="mt-2">
                        <mat-chip class="text-gray-700 text-xs">
                          {{ form?.controls?.date?.value | date: 'dd MMMM yyyy' }}
                        </mat-chip>

                        <div *ngIf="form?.controls.attendees.value.length > 0">
                          <mat-chip class="text-gray-700 text-xs">
                            {{ form?.controls?.attendees?.value.length }}
                            People
                          </mat-chip>
                        </div>

                        <mat-chip class="text-gray-700 text-xs">
                          <span>{{ start_time$ | async }}</span>
                          -
                          <span> {{ end_time$ | async }}</span>
                        </mat-chip>
                      </mat-chip-list> -->
                    </section>

                    <section class="my-2 flex flex-row border-t">
                        <div class="flex flex-col">
                            <span class="mt-3 text-lg font-bold"> Results</span>
                            <span class="mt-1 text-xs text-gray-500">
                                {{ spaces().length || 0 }} results found</span
                            >
                        </div>
                    </section>

                    <div class="bg-base-200 w-full flex-1">
                        @if (!loading()) {
                            @if (spaces().length > 0) {
                                @if (view() === 'list') {
                                    <div>
                                        @for (space of spaces(); track space) {
                                            <find-space-item
                                                [space]="space"
                                                [selected]="
                                                    book_space()[space.id]
                                                "
                                                (selectedChange)="
                                                    handleBookEvent(
                                                        space,
                                                        $event
                                                    )
                                                "
                                                class="text-sm"
                                            >
                                            </find-space-item>
                                        }
                                    </div>
                                }
                                @if (
                                    view() === 'map' &&
                                    map_features().length > 0
                                ) {
                                    <div class="h-full text-center">
                                        @if (maps_list().length > 1) {
                                            <div>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="m-3 ml-auto flex text-sm"
                                                >
                                                    <mat-select
                                                        [ngModel]="
                                                            selected_level()
                                                        "
                                                        (ngModelChange)="
                                                            updateSelectedLevel(
                                                                $event
                                                            )
                                                        "
                                                    >
                                                        <mat-option
                                                            [value]="
                                                                maps_list()
                                                            "
                                                        >
                                                            {{
                                                                'COMMON.LEVEL_ALL'
                                                                    | translate
                                                            }}
                                                        </mat-option>
                                                        @for (
                                                            map of maps_list();
                                                            track map
                                                        ) {
                                                            <mat-option
                                                                [value]="map"
                                                                >{{
                                                                    map.level
                                                                }}</mat-option
                                                            >
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                            </div>
                                        }
                                        @if (selected_level()) {
                                            <div
                                                class="relative m-6 max-w-screen"
                                            >
                                                <!-- If 'All Levels' option is selected -->
                                                @if (selected_all_levels()) {
                                                    <div>
                                                        @for (
                                                            map of selected_level_maps();
                                                            track map
                                                        ) {
                                                            <div
                                                                class="relative m-3 h-48 max-w-screen"
                                                            >
                                                                <interactive-map
                                                                    [src]="
                                                                        map?.map_id
                                                                    "
                                                                    [styles]="
                                                                        map_styles()
                                                                    "
                                                                    [features]="
                                                                        map_features()
                                                                    "
                                                                    [actions]="
                                                                        map_actions()
                                                                    "
                                                                    class="m-1 max-w-screen p-1"
                                                                >
                                                                </interactive-map>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                                <!-- If an individual level is selected -->
                                                @if (!selected_all_levels()) {
                                                    <div
                                                        class="relative m-3 h-96 max-w-screen"
                                                    >
                                                        <interactive-map
                                                            [src]="
                                                                selected_map()
                                                                    ?.map_id
                                                            "
                                                            [styles]="
                                                                map_styles()
                                                            "
                                                            [features]="
                                                                map_features()
                                                            "
                                                            [actions]="
                                                                map_actions()
                                                            "
                                                            class="m-1 max-w-screen p-1"
                                                        >
                                                        </interactive-map>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                                <p class="p-2 text-center text-sm opacity-60">
                                    End of available spaces list
                                </p>
                            } @else {
                                <div
                                    class="my-6 flex h-full w-full flex-col items-center justify-center space-y-2 p-2 text-center"
                                >
                                    <p>
                                        No available spaces for selected time,
                                        capacity or level(s)
                                    </p>
                                </div>
                            }
                        } @else {
                            <div
                                class="my-3 flex h-full w-full flex-col items-center justify-center space-y-4"
                            >
                                <mat-spinner [diameter]="32"></mat-spinner>
                                <p>Retrieving available spaces...</p>
                            </div>
                        }
                    </div>
                </div>
                <section
                    class="top-box-shadow border-base-200 flex flex-col items-center justify-center border-t py-1"
                >
                    @if (show_room_details()) {
                        <div>
                            <button
                                matRipple
                                type="submit"
                                (click)="openRoomDetails()"
                                class="open-details-button border-secondary bg-secondary my-1 w-[300px]"
                            >
                                <span class="">View Room</span>
                            </button>
                        </div>
                    }
                </section>
            </section>
        </div>
    `,
    styles: [
        `
            .mat-button-toggle-appearance-standard {
                height: 2.25rem;
            }
            .mat-button-toggle-appearance-standard
                .mat-button-toggle-label-content {
                line-height: 2.25rem;
                font-size: 0.875rem;
            }
            .mat-button-toggle-label-content {
                font-size: 0.875rem;
            }
            .mat-button-toggle-checked {
                border: 1px solid var(--secondary);
                border-radius: 5px;
                box-shadow: none;
            }
            .mat-focus-indicator {
                border: none;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FindSpaceItemComponent,
        MatButtonToggleModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
    ],
})
export class FindSpaceComponent extends AsyncHandler implements OnInit {
    private _bottomSheet = inject(MatBottomSheet);
    private _org = inject(OrganisationService);
    private _spaces = inject(SpacesService);
    private _spaces_initialised = toObservable(this._spaces.initialised);
    private _state = inject(EventFormService);
    private _featuresFilterService = inject(FeaturesFilterService);
    private _mapService = inject(MapService);
    private _roomConfirmService = inject(RoomConfirmService);
    private _router = inject(Router);

    start_time$: Observable<string>;
    duration_minutes: number;
    end_time$: Observable<string>;
    filtered_spaces: Space[] = [];
    show_room_details = signal(false);
    selected_space: Space;
    public readonly view = signal<'list' | 'map'>('list');
    locatable_spaces$: Observable<Locatable[]>;
    bottomSheetRef: MatBottomSheetRef<FilterSpaceComponent>;

    public readonly selected_features = toSignal(
        this._featuresFilterService.selected_features$,
        { initialValue: [] },
    );
    public readonly selected_feature_count = computed(
        () => this.selected_features()?.length || 0,
    );
    public readonly loading = this._state.loading;
    public readonly spaces$: Observable<Space[]> = toObservable(
        this._state.available_spaces,
    );
    public readonly spaces = this._state.available_spaces;
    public readonly maps_list = toSignal(this._mapService.maps_list$, {
        initialValue: [],
    });
    public readonly map_features = signal<ViewerFeature[]>([]);
    public readonly map_actions = toSignal(this._mapService.map_actions$, {
        initialValue: [],
    });
    public readonly map_styles = signal<ViewerStyles>(null);
    public readonly selected_level = signal<MapsList | MapsList[] | null>(null);
    public readonly selected_all_levels = computed(() =>
        Array.isArray(this.selected_level()),
    );
    public readonly selected_level_maps = computed(() => {
        const selected_level = this.selected_level();
        return Array.isArray(selected_level) ? selected_level : [];
    });
    public readonly selected_map = computed(() => {
        const selected_level = this.selected_level();
        return !Array.isArray(selected_level) ? selected_level : null;
    });

    public get form() {
        return this._state.form;
    }

    public get model() {
        return this._state.model;
    }

    public readonly book_space = signal<HashMap<boolean>>({});
    public space_list: Space[] = [];
    public quick_capacities = [
        { name: 'Any Capacity', value: 0 },
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly levels = combineLatest([
        toObservable(this._org.active_building),
        toObservable(this._state.options),
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: i18n('COMMON.LEVEL_ALL'),
            },
            ...this._org.levelsForBuilding(bld),
        ]),
    );

    public readonly options = this._state.options;
    public readonly features = this._spaces.features;

    public readonly setBuilding = (b) => (this._org.building = b);
    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor() {
        super();
        effect(() => {
            const maps = this.maps_list();
            if (maps?.length && !this.selected_level()) {
                this.selected_level.set(maps);
            }
        });
    }

    public async ngOnInit() {
        this.view.set('list');
        this._state.setView('find');
        this.setTimeChips();

        await this._org.waitUntilInitialised();
        await this._spaces_initialised.pipe(first((_) => !!_)).toPromise();
        await this._state.listAvailableSpaces();

        this.setBuilding(this._org.building);
        this.book_space.set({});
        this.subscription(
            'features',
            this._featuresFilterService.selected_features$.subscribe((v) =>
                this.setOptions({ features: v || [] }),
            ),
        );

        await this._mapService.locateSpaces(this.spaces$);

        this.locatable_spaces$ = this._mapService.locatable_spaces$;

        await this._mapService.features_loaded$
            .pipe(first((_) => !!_))
            .toPromise();

        this.applyMapDecorations();

        this.map_features.set(this._mapService.map_features || []);
    }

    public handleBookEvent(space: Space, book = true) {
        this.book_space.update((state) => ({ ...state, [space.id]: book }));
        this._roomConfirmService.book_space = this.book_space();
        this._roomConfirmService.handleBookEvent(space, book);
        this.show_room_details.set(true);
        this._roomConfirmService.updateSelectedSpace(space);
    }

    openFilter() {
        this.bottomSheetRef = this._bottomSheet.open(FilterSpaceComponent, {
            data: this.buildings(),
        });
    }

    openRoomDetails() {
        this._roomConfirmService.openRoomDetail(this.selected_space);
    }

    resetSpace() {
        this.show_room_details.set(false);
    }

    setTimeChips() {
        this.start_time$ = of(
            new Date(this.model()?.date).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }),
        );
        this.duration_minutes = this.model()?.duration;
        const end = this.model()?.date + this.duration_minutes * 60 * 1000;
        this.end_time$ = of(
            new Date(end).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }),
        );
    }

    updateSelectedLevel(e) {
        this.selected_level.set(e);
        if (!Array.isArray(this.selected_level())) {
            this.applyMapDecorations();
        }
    }

    applyMapDecorations() {
        this.timeout(
            'init',
            () => {
                this.processFeature();
                this.processStyles();
            },
            1500,
        );
    }

    processFeature() {
        this.subscription(
            'map_features',
            this._mapService.map_features$.subscribe((features) =>
                this.map_features.set(features || []),
            ),
        );
    }

    processStyles() {
        this.map_styles.set(this._mapService.style_map);
    }

    closeModal() {
        this._router.navigate(['/book/spaces']);
        this._featuresFilterService.clearFilter();
    }
}

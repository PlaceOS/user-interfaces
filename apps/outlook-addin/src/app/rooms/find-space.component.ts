import { Component, OnInit, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    HashMap,
    OrganisationService,
    Space,
    i18n,
    nextValueFrom,
} from '@placeos/common';
import { EventFormService, SpacesService } from '@placeos/events';
import { ViewAction, ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { FeaturesFilterService } from './features-filter.service';
import { FilterSpaceComponent } from './filter-space.component';
import { Locatable, MapService, MapsList } from './map.service';
import { RoomConfirmService } from './room-confirm.service';

@Component({
    selector: 'find-space',
    template: `
        <div
            class="z-0 flex h-full w-full flex-1 flex-col overflow-auto bg-base-200"
        >
            <section class="flex flex-col py-5">
                <div class="mx-auto w-[calc(100%-2rem)] max-w-[375px]">
                    <div class="flex flex-row items-center">
                        <button (click)="closeModal()">
                            <icon
                                class="flex items-center justify-center text-3xl text-base-400"
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
                                class="filter-button h-9 w-full bg-base-200 text-sm"
                            >
                                <span>Filter</span>

                                @if ((selected_features$ | async)?.length) {
                                    <span>
                                        ({{
                                            (selected_features$ | async).length
                                        }}
                                        applied)
                                    </span>
                                }
                            </button>
                        </div>

                        <div class="flex w-4/12">
                            <mat-button-toggle-group
                                aria-label="Map or list view"
                                [(ngModel)]="space_view"
                                (change)="resetSpace()"
                                class="ml-auto mr-0 flex w-full border-none"
                            >
                                <mat-button-toggle
                                    value="mapView"
                                    class="flex w-1/2 items-center justify-center rounded bg-base-200"
                                    ><span
                                        class="flex text-[0.875rem] leading-9"
                                        >Map</span
                                    ></mat-button-toggle
                                >
                                <mat-button-toggle
                                    value="listView"
                                    class="flex w-1/2 items-center justify-center rounded bg-base-200 text-sm"
                                    ><span
                                        class="flex text-[0.875rem] leading-9"
                                        >List</span
                                    ></mat-button-toggle
                                >
                            </mat-button-toggle-group>
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
                            <span class="text-gray-500 mt-1 text-xs">
                                {{ (spaces$ | async)?.length || 0 }} results
                                found</span
                            >
                        </div>
                    </section>

                    <div class="w-full flex-1 bg-base-200">
                        @if (!(loading | async)) {
                            @if ((spaces$ | async)?.length > 0) {
                                @if (space_view == 'listView') {
                                    <div>
                                        @for (
                                            space of spaces$ | async;
                                            track space
                                        ) {
                                            <find-space-item
                                                [space]="space"
                                                [selected]="
                                                    book_space[space.id]
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
                                    space_view == 'mapView' &&
                                    (map_features$ | async)?.length > 0
                                ) {
                                    <div class="h-full text-center">
                                        @if ((maps_list$ | async)?.length > 1) {
                                            <div>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="m-3 ml-auto flex text-sm"
                                                >
                                                    <mat-select
                                                        [(ngModel)]="
                                                            selected_level
                                                        "
                                                        (ngModelChange)="
                                                            updateSelectedLevel(
                                                                $event
                                                            )
                                                        "
                                                    >
                                                        <mat-option
                                                            [value]="
                                                                maps_list$
                                                                    | async
                                                            "
                                                        >
                                                            {{
                                                                'COMMON.LEVEL_ALL'
                                                                    | translate
                                                            }}
                                                        </mat-option>
                                                        @for (
                                                            map of maps_list$
                                                                | async;
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
                                        @if (selected_level) {
                                            <div
                                                class="max-w-screen relative m-6"
                                            >
                                                <!-- If 'All Levels' option is selected -->
                                                @if (selected_level?.length) {
                                                    <div>
                                                        @for (
                                                            map of selected_level;
                                                            track map
                                                        ) {
                                                            <div
                                                                class="max-w-screen relative m-3 h-[12rem]"
                                                            >
                                                                <interactive-map
                                                                    [src]="
                                                                        map?.map_id
                                                                    "
                                                                    [styles]="
                                                                        map_styles$
                                                                            | async
                                                                    "
                                                                    [features]="
                                                                        map_features$
                                                                            | async
                                                                    "
                                                                    [actions]="
                                                                        map_actions$
                                                                            | async
                                                                    "
                                                                    class="max-w-screen m-1 p-1"
                                                                >
                                                                </interactive-map>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                                <!-- If an individual level is selected -->
                                                @if (!selected_level?.length) {
                                                    <div
                                                        class="max-w-screen relative m-3 h-[24rem]"
                                                    >
                                                        <interactive-map
                                                            [src]="
                                                                selected_level?.map_id
                                                            "
                                                            [styles]="
                                                                map_styles$
                                                                    | async
                                                            "
                                                            [features]="
                                                                map_features$
                                                                    | async
                                                            "
                                                            [actions]="
                                                                map_actions$
                                                                    | async
                                                            "
                                                            class="max-w-screen m-1 p-1"
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
                    class="top-box-shadow flex flex-col items-center justify-center border-t border-base-200 py-1"
                >
                    @if (show_room_details$ | async) {
                        <div>
                            <button
                                matRipple
                                type="submit"
                                (click)="openRoomDetails()"
                                class="open-details-button my-1 w-[300px] border-secondary bg-secondary"
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
                border: 1px solid var(--s);
                border-radius: 5px;
                box-shadow: none;
            }
            .mat-focus-indicator {
                border: none;
            }
        `,
    ],
    standalone: false,
})
export class FindSpaceComponent extends AsyncHandler implements OnInit {
    private _bottomSheet = inject(MatBottomSheet);
    private _org = inject(OrganisationService);
    private _spaces = inject(SpacesService);
    private _state = inject(EventFormService);
    private _featuresFilterService = inject(FeaturesFilterService);
    private _mapService = inject(MapService);
    private _roomConfirmService = inject(RoomConfirmService);
    private _router = inject(Router);

    start_time$: Observable<any>;
    duration_minutes: number;
    end_time$: Observable<any>;
    selected_features$: Observable<any>;
    filtered_spaces: Space[] = [];
    show_room_details$: Observable<boolean> = of(false);
    selected_space: Space;
    space_view?: string;
    locatable_spaces$: Observable<Locatable[]>;
    maps_list$: Observable<MapsList[]>;
    map_features$: Observable<ViewerFeature[]>;
    _map_features: BehaviorSubject<ViewerFeature[]> = new BehaviorSubject<
        ViewerFeature[]
    >(null);
    map_actions$: Observable<ViewAction[]> = null;
    map_styles$: Observable<ViewerStyles[]> = null;
    bottomSheetRef: any;

    public selected_level: any;

    public get form() {
        return this._state.form;
    }

    public book_space: HashMap<boolean> = {};
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
        this.building,
        this._state.options$,
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

    public readonly loading = this._state.loading$;
    public readonly options = this._state.options;

    public readonly spaces$: Observable<Space[]> = this._state.available_spaces;
    public readonly features = this._spaces.features;

    public readonly setBuilding = (b) => (this._org.building = b);
    public readonly setOptions = (o) => this._state.setOptions(o);

    public async ngOnInit() {
        this.space_view = 'listView';

        this.selected_features$ =
            this._featuresFilterService.selected_features$;
        this._state.setView('find');
        this.setTimeChips();

        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();
        await nextValueFrom(this._state.available_spaces);

        this.setBuilding(this._org.building);
        this.book_space = {};
        this.subscription(
            'features',
            this.selected_features$?.subscribe((v) =>
                this.setOptions({ features: v || [] }),
            ),
        );

        await this._mapService.locateSpaces(this.spaces$);

        this.locatable_spaces$ = this._mapService.locatable_spaces$;

        this.maps_list$ = this._mapService.maps_list$?.pipe(
            tap((maps) => (this.selected_level = maps)),
        );

        await this._mapService.features_loaded$
            .pipe(first((_) => !!_))
            .toPromise();

        this.applyMapDecorations();

        this._map_features.next(this._mapService.map_features);
        this.map_features$ = this._map_features.asObservable();
        this.map_actions$ = this._mapService.map_actions$;
    }

    public handleBookEvent(space: Space, book: boolean = true) {
        this.book_space[space.id] = book;
        this._roomConfirmService.book_space = this.book_space;
        this._roomConfirmService.handleBookEvent(space, book);
        this.show_room_details$ = of(true);
        this._roomConfirmService.updateSelectedSpace(space);
    }

    openFilter() {
        this.bottomSheetRef = this._bottomSheet.open(FilterSpaceComponent, {
            data: this.buildings as OrganisationService['building_list'],
        });
    }

    openRoomDetails() {
        this._roomConfirmService.openRoomDetail(this.selected_space);
    }

    resetSpace() {
        this.show_room_details$ = of(false);
    }

    setTimeChips() {
        this.start_time$ = of(
            new Date(this.form?.controls?.date?.value).toLocaleTimeString(
                'en-US',
                { hour: 'numeric', minute: 'numeric', hour12: true },
            ),
        );
        this.duration_minutes = this.form?.controls?.duration?.value;
        const end =
            this.form?.controls?.date?.value +
            this.duration_minutes * 60 * 1000;
        this.end_time$ = of(
            new Date(end).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }),
        );
    }

    updateSelectedLevel(e) {
        this.selected_level = e;
        if (!this.selected_level?.length) {
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
        this.map_features$ = this._mapService.map_features$;
    }

    processStyles() {
        this.map_styles$ = of([this._mapService.style_map]);
    }

    closeModal() {
        this._router.navigate(['/book/spaces']);
        this._featuresFilterService.clearFilter();
    }
}

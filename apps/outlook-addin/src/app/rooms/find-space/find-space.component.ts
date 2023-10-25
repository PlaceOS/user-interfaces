import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { Space, SpacesService } from '@placeos/spaces';
import { OrganisationService } from '@placeos/organisation';
import { HashMap } from '@placeos/common';
import { Observable, combineLatest, of, BehaviorSubject } from 'rxjs';
import { first, take, filter, map, tap } from 'rxjs/operators';
import { FilterSpaceComponent } from '../filter-space/filter-space.component';
import { FeaturesFilterService } from '../features-filter.service';
import { MapService, Locatable } from '../map.service';
import { ViewerFeature, ViewAction, ViewerStyles } from '@placeos/svg-viewer';
import { RoomConfirmService } from '../room-confirm.service';
import { AsyncHandler } from '@placeos/common';
import { MapsList } from '../map.service';
import { Router } from '@angular/router';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
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
})
export class FindSpaceComponent extends AsyncHandler implements OnInit {
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
        this._state.options,
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: 'All Levels',
            },
            ...this._org.levelsForBuilding(bld),
        ])
    );

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;

    public readonly spaces$: Observable<Space[]> = this._state.available_spaces;
    public readonly features = this._spaces.features;

    public readonly setBuilding = (b) => (this._org.building = b);
    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor(
        private _bottomSheet: MatBottomSheet,
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _state: EventFormService,
        private _featuresFilterService: FeaturesFilterService,
        private _mapService: MapService,
        private _roomConfirmService: RoomConfirmService,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        this.space_view = 'listView';

        this.selected_features$ =
            this._featuresFilterService.selected_features$;
        this._state.setView('find');
        this.setTimeChips();

        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();
        await this._state.available_spaces.pipe(take(1)).toPromise();

        this.setBuilding(this._org.building);
        this.book_space = {};
        this.subscription(
            'features',
            this.selected_features$?.subscribe((v) =>
                this.setOptions({ features: v || [] })
            )
        );

        await this._mapService.locateSpaces(this.spaces$);

        this.locatable_spaces$ = this._mapService.locatable_spaces$;

        this.maps_list$ = this._mapService.maps_list$?.pipe(
            tap((maps) => (this.selected_level = maps))
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
                { hour: 'numeric', minute: 'numeric', hour12: true }
            )
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
            })
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
            1500
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

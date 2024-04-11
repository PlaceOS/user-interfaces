import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { addDays, format, startOfDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Component({
    selector: 'space-ping',
    template: `
        <div
            class="absolute inset-0 pointer-events-auto"
            [style.transform]="'scale(' + zoom * ratio + ')'"
        >
            <div
                class="absolute inset-0 animate-ping border-4 border-green-600"
            ></div>
        </div>
    `,
})
class SpacePingComponent extends AsyncHandler {
    public zoom = 1;
    public ratio = 1;
    constructor(@Inject(MAP_FEATURE_DATA) private _details: any) {
        super();
        this.subscription(
            'zoom',
            this._details.zoom$?.subscribe((_) => (this.zoom = _))
        );
        this.subscription(
            'ratio',
            this._details.ratio$?.subscribe((_) => (this.ratio = _))
        );
    }
}

@Component({
    selector: 'parking-flow-map',
    template: `
        <div
            class="w-full h-full flex flex-col items-center relative"
            *ngIf="!(loading | async); else load_state"
        >
            <div
                class="p-4 flex items-center justify-center bg-secondary w-full shadow z-10 text-white space-x-2"
            >
                <button
                    matRipple
                    *ngFor="let date of dates"
                    [class.selected]="date.id === (options | async)?.date"
                    class="border border-white flex flex-col items-center justify-center h-24 w-28 rounded"
                    (click)="setDate(date.id)"
                >
                    <p class="mb-2 font-medium">{{ date.name }}</p>
                    <p class="text-2xl">
                        {{ ((counts | async) || {})[date.id] || '0' }}
                    </p>
                    <p class="text-sm">Available</p>
                </button>
            </div>
            <div class="flex w-full h-1/2 flex-1 z-0">
                <div
                    class="p-2 sm:w-[18rem] w-full h-full bg-base-200 shadow border-r border-base-200 z-10 overflow-auto space-y-2"
                >
                    <div
                        class="bg-base-100 sticky top-0 w-full z-10"
                        *ngIf="(levels | async)?.length > 1"
                    >
                        <mat-form-field
                            appearance="outline"
                            class="w-full h-[3.25rem]"
                        >
                            <mat-select
                                [ngModel]="level | async"
                                (ngModelChange)="setLevel($event?.id)"
                            >
                                <mat-option
                                    *ngFor="let lvl of levels | async"
                                    [value]="lvl"
                                >
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <p>{{ (available | async)?.length }} space(s) available</p>
                    <button
                        matRipple
                        class="flex items-center justify-between bg-base-100 rounded-lg border border-base-200 p-2 w-full"
                        [class.active]="(active_space | async)?.id === space.id"
                        (click)="setActive(space)"
                        *ngFor="let space of available | async"
                    >
                        <div class="text-lg">Bay No. {{ space.name }}</div>
                        <div class="opacity-60">
                            {{ levelName(space.zone_id) }}
                        </div>
                    </button>
                </div>
                <div
                    class="bg-base-200 flex-1 w-1/2 h-full z-0 relative hidden sm:block"
                >
                    <interactive-map
                        [src]="url | async"
                        [zoom]="(positions | async)?.zoom"
                        [center]="(positions | async)?.center"
                        [styles]="styles | async"
                        [features]="features | async"
                        [actions]="actions | async"
                        [labels]="labels | async"
                    ></interactive-map>
                    <explore-zoom-controls
                        class="absolute bottom-0 right-0"
                    ></explore-zoom-controls>
                </div>
                <div
                    *ngIf="active_space | async"
                    class="absolute left-1/2 bottom-2 -translate-x-1/2 bg-base-100 shadow rounded p-4 flex flex-col space-y-2"
                >
                    <p>
                        Parking Bay No.
                        {{ (active_space | async).name }} selected.
                    </p>
                    <p
                        class="p-2 rounded text-sm max-w-[20rem] text-center text-pending leading-tight"
                        *ngIf="(existing | async)?.length"
                    >
                        Note that your existing parking space reservation will
                        be replaced
                    </p>
                    <button btn matRipple (click)="reserveSpace()">
                        Reserve Space
                    </button>
                </div>
                <div
                    class="absolute inset-0 bg-base-100/80 flex flex-col items-center justify-center z-50"
                    *ngIf="!(levels | async)?.length"
                >
                    <p>
                        Parking is not available for
                        {{
                            (building | async)?.display_name ||
                                (building | async)?.name
                        }}
                    </p>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 bg-base-100/80 flex flex-col items-center justify-center z-50 space-y-2"
                *ngIf="!(levels | async)?.length"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Reserving parking space...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .active {
                background-color: var(--s) !important;
                color: #fff;
            }

            .selected {
                background-color: #fff !important;
                color: #000d;
            }
        `,
    ],
    providers: [ExploreParkingService],
})
export class ParkingFlowMapComponent extends AsyncHandler {
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._state.map_labels;

    public readonly building = this._org.active_building;

    public readonly level = this._state.level;

    public readonly levels = this._parking.levels;

    public readonly available = this._parking.available_spaces;

    public readonly counts = this._parking.week_availablility;

    public readonly options = this._parking.options;

    public readonly existing = this._parking.existing_event;

    public readonly loading = this._booking.loading;

    public readonly active_space = new BehaviorSubject(null);

    public readonly dates = new Array(7).fill(0).map((_, idx) => ({
        id: startOfDay(addDays(Date.now(), idx)).valueOf(),
        name: format(addDays(Date.now(), idx), 'EEE, dd MMM'),
        available: 0,
    }));

    public readonly setDate = (d) => this._parking.setOptions({ date: d });

    public levelName(zone_id) {
        const lvl = this._org.levelWithID([zone_id]);
        return lvl?.display_name || lvl?.name || '';
    }

    public setActive(space) {
        if (space === this.active_space.getValue())
            this.active_space.next(null);
        else {
            this._booking.form.patchValue({
                asset_id: space.id,
                asset_name: space.name,
            });
            this.active_space.next(space);
        }
    }

    public readonly setLevel = (l) => this._state.setLevel(l);
    public readonly reserveSpace = async () => {
        const events = await this._parking.existing_event
            .pipe(take(1))
            .toPromise();
        if (events.length) this._booking.form.patchValue({ id: events[0].id }); // Prevent booking duplicate parking spaces
        await this._booking.postForm();
        this._router.navigate(['book', 'parking', 'success']);
    };

    constructor(
        private _state: ExploreStateService,
        private _parking: ExploreParkingService,
        private _org: OrganisationService,
        private _booking: BookingFormService,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._state.reset();
        this.subscription(
            'levels',
            this._parking.levels.subscribe((levels) => {
                this._state.setLevel(levels[0]?.id);
            })
        );
        this.subscription(
            'spaces',
            this._parking.available_spaces.subscribe((spaces) => {
                this._state.setActions(
                    'parking_spaces',
                    (spaces || []).map((_) => ({
                        id: _.map_id,
                        action: 'click',
                        callback: () => this.setActive(_),
                    }))
                );
            })
        );
        this.subscription(
            'active_space',
            this.active_space.subscribe((space) => {
                if (!space) return this._state.setFeatures('parking_space', []);
                this._state.setFeatures('parking_space', [
                    {
                        location: space.map_id,
                        content: SpacePingComponent,
                        full_size: true,
                        z_index: 0,
                    },
                ]);
            })
        );
    }
}

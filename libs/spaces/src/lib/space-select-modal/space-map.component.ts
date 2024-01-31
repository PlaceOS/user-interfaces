import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncHandler, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { SpaceLocationPinComponent } from './space-location-pin.component';
import { Space } from '../space.class';
import { InjectMapApiService } from 'libs/common/src/lib/inject-map-api.service';

@Component({
    selector: `space-map`,
    template: `
        <div class="bg-base-100 p-2 border-b border-base-200 w-full">
            <mat-form-field
                levels
                appearance="outline"
                class="w-full h-[3.25rem]"
            >
                <mat-select
                    [(ngModel)]="level"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="setLevel($event)"
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
        <div class="relative flex-1 w-full">
            <interactive-map
                *ngIf="!(use_mapsindoors$ | async); else mapspeople"
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [features]="features | async"
                [actions]="actions | async"
            ></interactive-map>
            <ng-template #mapspeople>
                <indoor-maps
                    [styles]="styles | async"
                    [actions]="actions | async"
                    [custom_coordinates]="coordinates"
                ></indoor-maps>
            </ng-template>
        </div>
        <div
            zoom
            class="absolute bottom-2 right-2 rounded-lg border border-base-200 bg-base-100 flex flex-col overflow-hidden"
        >
            <button
                icon
                matRipple
                name="space-map-zoom-in"
                (click)="setZoom(zoom * 1.1)"
            >
                <app-icon>zoom_in</app-icon>
            </button>
            <div class="border-t border-base-200 w-full"></div>
            <button
                icon
                matRipple
                name="space-map-zoom-out"
                (click)="setZoom(zoom * (1 / 1.1))"
            >
                <app-icon>zoom_out</app-icon>
            </button>
            <div class="border-t border-base-200 w-full"></div>
            <button icon matRipple name="space-map-reset" (click)="resetMap()">
                <app-icon>refresh</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                background: rgba(0, 0, 0, 0.05);
                display: flex;
                flex-direction: column;
            }

            button {
                border-radius: 0;
            }
        `,
    ],
})
export class SpaceSelectMapComponent extends AsyncHandler {
    @Input() public selected: string[] = [];
    @Input() public active: string;
    @Input() public is_displayed: boolean = false;
    @Output() public onSelect = new EventEmitter<Space>();

    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };
    public coordinates = undefined;

    private _seletedSpace = (s) => () => {
        this.onSelect.emit(s);
        this._change.next(Date.now());
    };
    public level: BuildingLevel = null;
    private _change = new BehaviorSubject(0);

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly levels = this._event_form.available_spaces.pipe(
        map((_) =>
            unique(
                _.map(({ zones }) => this._org.levelWithID(zones)),
                'id'
            )
        ),
        tap((_) => (this.level = this.level ? this.level : _[0]))
    );

    public readonly setOptions = (o) => this._event_form.setOptions(o);

    public readonly features = combineLatest([
        this._event_form.available_spaces,
        this._change,
    ]).pipe(
        debounceTime(300),
        map(([l]) =>
            l.map((space) => ({
                location: space.map_id,
                content: SpaceLocationPinComponent,
                data: {
                    ...space,
                    active: this.active === space.id,
                    selected: this.selected.includes(space.id),
                },
            }))
        )
    );

    public readonly actions = this._event_form.available_spaces.pipe(
        map((l) =>
            l.map((space) => ({
                id: space.map_id,
                action: ['touchend', 'mouseup'],
                callback: this._seletedSpace(space),
            }))
        )
    );

    public readonly use_mapsindoors$ = this._maps_people.use_mapspeople$;

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _maps_people: InjectMapApiService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'levels_update',
            this.levels.subscribe((levels) => {
                if (
                    levels.length &&
                    !levels.find((_) => _.id === this.level?.id)
                ) {
                    this.level = levels[0];
                    this.setLevel(this.level);
                }
            })
        );
    }

    public ngOnDestroy() {
        this._maps_people.setCustomZone('');
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zone_id: level?.id });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = (level.location || bld.location)
                .split(',')
                .map((_) => parseFloat(_));
            this.coordinates = { latitude, longitude };
        }
        this._maps_people.setCustomZone(level.parent_id);
    }

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(0.5, Math.min(10, new_zoom));
    }

    public resetMap() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}

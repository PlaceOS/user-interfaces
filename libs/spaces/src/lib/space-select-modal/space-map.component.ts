import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncHandler, unique } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { debounceTime, map, tap } from 'rxjs/operators';
import { Space } from '../space.class';
import { SpaceLocationPinComponent } from './space-location-pin.component';

@Component({
    selector: `space-map`,
    template: `
        <i-map
            [src]="map_url"
            [features]="features | async"
            [actions]="actions | async"
            [(zoom)]="zoom"
            [(center)]="center"
        ></i-map>
        <div
            class="absolute inset-x-0 top-0 bg-white p-2 border-b border-gray-200"
        >
            <mat-form-field
                levels
                appearance="outline"
                class="w-full h-[3.25rem]"
            >
                <mat-select [(ngModel)]="level">
                    <mat-option
                        *ngFor="let opt of levels | async"
                        [value]="opt"
                    >
                        {{ opt.display_name || opt.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div
            zoom
            class="absolute bottom-2 right-2 rounded-lg border border-gray-200 bg-white flex flex-col overflow-hidden"
        >
            <button
                icon
                matRipple
                name="space-map-zoom-in"
                (click)="setZoom(zoom * 1.1)"
            >
                <app-icon>zoom_in</app-icon>
            </button>
            <div class="border-t border-gray-200 w-full"></div>
            <button
                icon
                matRipple
                name="space-map-zoom-out"
                (click)="setZoom(zoom * (1 / 1.1))"
            >
                <app-icon>zoom_out</app-icon>
            </button>
            <div class="border-t border-gray-200 w-full"></div>
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
                padding-top: 4rem;
            }

            button {
                border-radius: 0;
            }
        `,
    ],
})
export class SpaceSelectMapComponent extends AsyncHandler {
    @Input() public selected: string[] = [];
    @Input() public is_displayed: boolean = false;
    @Output() public onSelect = new EventEmitter<Space>();

    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };

    private _seletedSpace = (s) => () => this.onSelect.emit(s);
    public level: BuildingLevel = null;

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

    public readonly features = this._event_form.available_spaces.pipe(
        debounceTime(1000),
        map((l) =>
            l.map((space) => ({
                location: space.map_id,
                content: SpaceLocationPinComponent,
                data: {
                    ...space,
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

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'levels_update',
            this.levels.subscribe((levels) => {
                if (!levels.find((_) => _.id === this.level?.id)) {
                    this.level = levels[0];
                }
            })
        );
    }

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(0.5, Math.min(10, new_zoom));
    }

    public resetMap() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}

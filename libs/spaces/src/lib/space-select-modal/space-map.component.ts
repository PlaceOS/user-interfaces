import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncHandler, SettingsService, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { SpaceLocationPinComponent } from './space-location-pin.component';
import { Space } from '../space.class';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';

@Component({
    selector: `space-map`,
    template: `
        <div class="bg-base-100 p-2 border-b border-base-200 w-full">
            <mat-form-field
                levels
                appearance="outline"
                class="w-full no-subscript"
                *ngIf="!use_region; else region_level_view"
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
            <ng-template #region_level_view>
                <mat-form-field
                    appearance="outline"
                    class="w-full no-subscript"
                >
                    <mat-select
                        [(ngModel)]="level"
                        (ngModelChange)="setLevel($event)"
                        [ngModelOptions]="{ standalone: true }"
                        placeholder="Any Level"
                        i18n-placeholder
                    >
                        <mat-optgroup
                            *ngFor="let bld of region_levels | async"
                            [label]="bld.name"
                        >
                            <mat-option
                                [value]="level"
                                *ngFor="let level of bld.levels"
                            >
                                {{ level.display_name || level.name }}
                            </mat-option>
                        </mat-optgroup>
                    </mat-select>
                </mat-form-field>
            </ng-template>
        </div>
        <div class="relative flex-1 w-full">
            <interactive-map
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
            ></interactive-map>
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
    public readonly region_levels = this._org.active_region.pipe(
        map((_) => {
            const region_buildings = this._org.buildings.filter(
                (b) => !_ || b.parent_id === _.id
            );
            const region_levels = region_buildings.map((b) => ({
                id: b.id,
                name: b.display_name || b.name,
                levels: this._org.levels.filter(
                    (l) => l.parent_id === b.id && !l.tags.includes('parking')
                ),
            }));
            return region_levels;
        })
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

    public readonly styles = combineLatest([
        this._event_form.spaces,
        this._event_form.available_spaces,
    ]).pipe(
        map(([spaces, free_spaces]) =>
            spaces.reduce((styles, space) => {
                const colours = this._settings.get('app.explore.colors') || {};
                const status = free_spaces.find((_) => _.id === space.id)
                    ? 'free'
                    : 'busy';
                styles[`#${space.map_id || space.id}`] = {
                    fill:
                        colours[`space-${status}`] ||
                        colours[`${status}`] ||
                        DEFAULT_COLOURS[`${status}`],
                };
                return styles;
            }, {})
        )
    );

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'levels_update',
            this.levels.subscribe((levels) => {
                if (this.use_region) return;
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

    public setLevel(level: BuildingLevel) {
        console.log('Set Level', level);
        this.setOptions({ zone_ids: [level?.id] });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = (level.location || bld.location)
                .split(',')
                .map((_) => parseFloat(_));
            this.coordinates = { latitude, longitude };
        }
        this.level = level;
    }

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(0.5, Math.min(10, new_zoom));
    }

    public resetMap() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}

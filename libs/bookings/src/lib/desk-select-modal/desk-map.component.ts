import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { map } from 'rxjs/operators';

import { BookingAsset, BookingFormService } from '../booking-form.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { ExploreDeskInfoComponent } from 'libs/explore/src/lib/explore-desk-info.component';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'desk-map',
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
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
    `,
})
export class DeskMapComponent extends AsyncHandler implements OnInit {
    @Input() public is_displayed: boolean = false;
    @Input() public active = '';
    @Output() public onSelect = new EventEmitter<BookingAsset>();

    public readonly desks = this._state.available_resources;
    public readonly loading = this._state.loading;

    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };
    public level?: BuildingLevel;
    public coordinates = undefined;

    private _change = new BehaviorSubject(0);

    public readonly levels = this._org.active_levels;
    public readonly setOptions = (o) => this._state.setOptions(o);
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

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly actions = this._state.available_resources.pipe(
        map((desks) =>
            desks.map((desk) => ({
                id: desk.map_id || desk.id,
                action: ['touchend', 'mouseup'],
                callback: () => this.selectDesk(desk as any),
            }))
        )
    );

    public readonly features = combineLatest([
        this._state.resources,
        this._state.available_resources,
    ]).pipe(
        map(([desks]) => {
            return this._settings.get('app.desks.hide_user')
                ? []
                : desks.map((desk) => ({
                      location: desk.id,
                      content: ExploreDeskInfoComponent,
                      full_size: true,
                      no_scale: true,
                      data: {
                          id: desk.map_id || desk.id,
                          map_id: desk.name,
                          name: desk.name || desk.map_id,
                          user: this._state.resourceUserName(desk.id),
                      },
                      z_index: 20,
                  }));
        })
    );

    public readonly styles = combineLatest([
        this._state.resources,
        this._state.available_resources,
        this._change,
    ]).pipe(
        map(([desks, free_desks]) =>
            desks.reduce((styles, desk) => {
                const colours = this._settings.get('app.explore.colors') || {};
                const status =
                    this.active === desk.id
                        ? 'active'
                        : free_desks.find((_) => _.id === desk.id)
                        ? 'free'
                        : this._state.resourceUserName(desk.id)
                        ? 'busy'
                        : 'not-bookable';
                styles[`#${desk.map_id || desk.id}`] = {
                    fill:
                        status === 'active'
                            ? '#512DA8'
                            : colours[`desk-${status}`] ||
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
        private _state: BookingFormService,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'options_change',
            this._state.options.subscribe(({ zone_id }) => {
                if (zone_id && zone_id !== this.level?.id) {
                    this.level = this._org.levels.find((_) => _.id === zone_id);
                }
            })
        );
        this.subscription(
            'levels_update',
            this.levels.subscribe((levels) => {
                if (this.use_region) return;
                if (!levels.find((_) => _.id === this.level?.id)) {
                    this.level = levels[0];
                    this.setLevel(this.level);
                }
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.active) this._change.next(Date.now());
    }

    public selectDesk(desk: BookingAsset) {
        this.onSelect.emit(desk);
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zone_id: level?.id });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = bld.location
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

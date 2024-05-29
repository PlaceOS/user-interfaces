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
    template: `
        <div class="bg-base-100 p-2 border-b border-base-200 w-full">
            <mat-form-field
                appearance="outline"
                class="w-full"
                *ngIf="(levels | async)?.length"
            >
                <mat-select
                    name="location"
                    [(ngModel)]="level"
                    (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                    [ngModelOptions]="{ standalone: true }"
                    placeholder="Any Level"
                    i18n-placeholder
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="opacity-30 text-xs" *ngIf="use_region">
                                {{ (lvl.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>
                                {{ lvl.display_name || lvl.name }}
                            </div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
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

    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking')
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || '')
            );
        })
    );

    public readonly setOptions = (o) => this._state.setOptions(o);

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
            'levels_update',
            this._state.options.subscribe(({ zone_id }) => {
                const level = this._org.levelWithID([zone_id]);
                if (level) this.level = level;
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

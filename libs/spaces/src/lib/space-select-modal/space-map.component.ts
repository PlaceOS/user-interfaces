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

@Component({
    selector: `space-map`,
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
            this._event_form.options.subscribe(({ zone_ids }) => {
                const level = this._org.levelWithID(zone_ids);
                if (level) this.level = level;
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

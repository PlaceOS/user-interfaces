import {
    Component,
    inject,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/organisation';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { ExploreParkingInfoComponent } from 'libs/explore/src/lib/explore-parking-info.component';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { BookingAsset, BookingFormService } from '../booking-form.service';

@Component({
    selector: 'parking-space-map',
    template: `
        <div class="w-full border-b border-base-200 bg-base-100 p-2">
            @if ((levels | async)?.length) {
                <mat-form-field levels appearance="outline" class="w-full">
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels | async; track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
        <div class="relative w-full flex-1">
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
    imports: [
        CommonModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class ParkingSpaceMapComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly is_displayed = input(false);
    public readonly active = model('');
    public readonly onSelect = output<BookingAsset>();

    public readonly parkings = this._state.available_resources;
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
            const viewable_levels = level_list.filter((lvl) =>
                lvl.tags.includes('parking'),
            );
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
    );

    public readonly setOptions = (o) => this._state.setOptions(o);

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly actions = this._state.available_resources.pipe(
        map((parkings) =>
            parkings.map((parking) => ({
                id: parking.map_id || parking.id,
                action: ['touchend', 'mouseup'],
                callback: () => this.selectParking(parking as any),
            })),
        ),
    );

    public readonly features = combineLatest([
        this._state.resources,
        this._state.available_resources,
    ]).pipe(
        map(([space_list, available]) => {
            console.log('Parking:', space_list);
            return this._settings.get('app.parkings.hide_user')
                ? []
                : space_list.map((space) => {
                      const status = available.find((_) => _.id === space.id)
                          ? 'free'
                          : this._state.resourceUserName(space.id)
                            ? 'busy'
                            : 'not-bookable';
                      return {
                          location: space.map_id,
                          content: ExploreParkingInfoComponent,
                          hover: true,
                          data: {
                              ...space,
                              status,
                          },
                      };
                  });
        }),
    );

    public readonly styles = combineLatest([
        this._state.resources,
        this._state.available_resources,
        this._change,
    ]).pipe(
        map(([parkings, free_parkings]) =>
            parkings.reduce((styles, parking) => {
                const colours = this._settings.get('app.explore.colors') || {};
                const status =
                    this.active() === parking.id
                        ? 'pending'
                        : free_parkings.find((_) => _.id === parking.id)
                          ? 'free'
                          : this._state.resourceUserName(parking.id)
                            ? 'busy'
                            : 'not-bookable';
                styles[`#${parking.map_id || parking.id}`] = {
                    fill:
                        colours[`parking-${status}`] ||
                        colours[`${status}`] ||
                        DEFAULT_COLOURS[`${status}`],
                };
                return styles;
            }, {}),
        ),
    );

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor() {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'levels_update',
            this._state.options.subscribe(({ zone_id }) => {
                const level = this._org.levelWithID([zone_id]);
                if (level) this.level = level;
            }),
        );
        this.timeout('check_level', async () => {
            if (!this.level) {
                const list = await nextValueFrom(this.levels);
                this._state.setOptions({ zone_id: list[0].id });
            }
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.active) this._change.next(Date.now());
    }

    public selectParking(parking: BookingAsset) {
        this.onSelect.emit(parking);
        this.active.set(parking.id);
        this._change.next(Date.now());
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

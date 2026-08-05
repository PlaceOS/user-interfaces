import {
    Component,
    computed,
    effect,
    inject,
    input,
    model,
    output,
    signal,
    WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    BuildingLevel,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { ExploreDeskInfoComponent } from 'libs/explore/src/lib/explore-desk-info.component';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { BookingAsset, BookingFormService } from '../booking-form.service';

@Component({
    selector: 'desk-map',
    template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            @if (levels()?.length) {
                <mat-form-field
                    levels
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
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
                [src]="map_url()"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
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
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        TranslatePipe,
        FormsModule,
        BuildingPipe,
    ],
})
export class DeskMapComponent {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private readonly _use_region = this._settings.signal('use_region', false);

    public readonly is_displayed = input(false);
    public readonly active = input('');
    public readonly onSelect = output<BookingAsset>();

    public readonly desks = this._state.available_resources;
    public readonly loading = this._state.loading;

    public readonly zoom = model(1);
    public readonly center = model({ x: 0.5, y: 0.5 });
    public readonly level = signal<BuildingLevel | undefined>(undefined);
    public readonly coordinates = signal<any>(undefined);
    public readonly statuses: Record<string, WritableSignal<string>> = {};

    private readonly _change = signal(0);

    public readonly levels = computed(() => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const level_list = this._use_region()
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
        const viewable_levels = level_list.filter(
            (lvl) => !lvl.tags.includes('parking'),
        );
        return viewable_levels.sort(
            (a, b) =>
                a.parent_id.localeCompare(b.parent_id) ||
                (a.display_name || '').localeCompare(b.display_name || ''),
        );
    });

    private readonly _select_default_level = effect(() => {
        const levels = this.levels();
        if (!this.level() && levels.length) {
            this.level.set(levels[0]);
        }
    });

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly map_url = computed(() => this.level()?.map_id || '');

    public readonly actions = computed(() =>
        this._state.available_resources().map((desk) => ({
            id: desk.map_id || desk.id,
            action: ['touchend', 'mouseup'],
            callback: () => this.selectDesk(desk as any),
        })),
    );

    public readonly features = computed(() => {
        const desks = this._state.resources();
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
                      user: signal(this._state.resourceUserName(desk.id)),
                      status: this.statuses[desk.id],
                  },
                  z_index: 20,
              }));
    });

    public readonly styles = signal<Record<string, any>>({});
    public readonly use_region = this._use_region;

    constructor() {
        effect(() => {
            this.active();
            this._change.set(Date.now());
        });
        effect(() => {
            const desks = this._state.resources();
            const free_desks = this._state.available_resources();
            this._change();
            const styles = desks.reduce((styles, desk) => {
                const colours = this._settings.get('app.explore.colors') || {};
                if (!(desk.id in this.statuses))
                    this.statuses[desk.id] = signal('not-bookable');
                const status =
                    this.active() === desk.id
                        ? 'active'
                        : free_desks.find((_) => _.id === desk.id)
                          ? 'free'
                          : this._state.resourceUserName(desk.id)
                            ? 'busy'
                            : 'not-bookable';
                this.statuses[desk.id].set(status);
                styles[`#${desk.map_id || desk.id}`] = {
                    fill:
                        status === 'active'
                            ? '#512DA8'
                            : colours[`desk-${status}`] ||
                              colours[`${status}`] ||
                              DEFAULT_COLOURS[`${status}`],
                };
                return styles;
            }, {});
            this.styles.set(styles);
        });
        effect(() => {
            const { zone_id } = this._state.options();
            const level = this._org.levelWithID([zone_id]);
            if (level) this.level.set(level);
        });
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
            this.coordinates.set({ latitude, longitude });
        }
        this.level.set(level);
    }

    public setZoom(new_zoom: number) {
        this.zoom.set(Math.max(0.5, Math.min(10, new_zoom)));
    }

    public resetMap() {
        this.zoom.set(1);
        this.center.set({ x: 0.5, y: 0.5 });
    }
}

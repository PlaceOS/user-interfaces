import {
    Component,
    computed,
    DestroyRef,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import {
    takeUntilDestroyed,
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    BuildingLevel,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { combineLatest } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

import { OrganisationService } from '@placeos/common';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { SpaceLocationPinComponent } from './space-location-pin.component';

@Component({
    selector: `space-map`,
    template: `
        @if (levels()?.length) {
            <div class="border-base-200 bg-base-100 w-full border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="location"
                        [(ngModel)]="level"
                        (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="
                            'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate
                        "
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
            </div>
        }
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
        `,
    ],
    imports: [
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
        BuildingPipe,
    ],
})
export class SpaceMapComponent implements OnInit {
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _destroy_ref = inject(DestroyRef);

    public readonly selected = input<string[]>([]);
    public readonly active = input<string>(undefined);
    public readonly is_displayed = input(false);
    public readonly onSelect = output<Space>();

    public readonly zoom = signal(1);
    public readonly center = signal({ x: 0.5, y: 0.5 });
    public readonly coordinates = signal(undefined);
    public readonly use_region = settingSignal('use_region', false);

    private _seletedSpace = (s) => () => {
        this.onSelect.emit(s);
        this._change.set(Date.now());
    };
    public readonly level = signal<BuildingLevel>(null);
    private _change = signal(0);

    public readonly map_url = computed(() => this.level()?.map_id || '');

    private readonly _levels$ = combineLatest([
        toObservable(this._org.active_region),
        toObservable(this._org.active_building),
    ]).pipe(
        map(([region, bld]) => {
            const level_list = this.use_region()
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld);
            const viewable_levels = level_list.filter(
                (lvl) => !lvl.tags.includes('parking'),
            );
            if (!this.level() && viewable_levels.length) {
                this.level.set(viewable_levels[0]);
            }
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
        tap((l) => console.log('Levels:', l)),
    );

    public readonly levels = toSignal(this._levels$, {
        initialValue: [] as BuildingLevel[],
    });

    public readonly setOptions = (o) => this._event_form.setOptions(o);

    private readonly _change$ = toObservable(this._change);

    private readonly _features$ = combineLatest([
        this._event_form.available_spaces,
        this._change$,
    ]).pipe(
        debounceTime(300),
        map(([l]) =>
            l.map((space) => ({
                location: space.map_id,
                content: SpaceLocationPinComponent,
                data: {
                    ...space,
                    active: this.active() === space.id,
                    selected: this.selected().includes(space.id),
                },
            })),
        ),
    );

    public readonly features = toSignal(this._features$, { initialValue: [] });

    private readonly _actions$ = this._event_form.available_spaces.pipe(
        map((l) =>
            l.map((space) => ({
                id: space.map_id,
                action: ['touchend', 'mouseup'],
                callback: this._seletedSpace(space),
            })),
        ),
    );

    public readonly actions = toSignal(this._actions$, { initialValue: [] });

    private readonly _styles$ = combineLatest([
        this._event_form.spaces$,
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
            }, {}),
        ),
    );

    public readonly styles = toSignal(this._styles$, { initialValue: {} });

    public ngOnInit() {
        this._event_form.options$
            .pipe(takeUntilDestroyed(this._destroy_ref))
            .subscribe(({ zones }) => {
                const level = this._org.levelWithID(zones);
                if (level) this.level.set(level);
            });
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zone_ids: [level?.id] });
        const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
        if (bld) {
            const [latitude, longitude] = (level.location || bld.location)
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

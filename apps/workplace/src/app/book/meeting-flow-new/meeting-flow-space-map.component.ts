import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    BuildingLevel,
    flatten,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    BuildingPipe,
    IconComponent,
    InteractiveMapComponent,
    LevelPipe,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { DEFAULT_COLOURS } from '@placeos/explore';
import { combineLatest, map } from 'rxjs';

@Component({
    selector: 'meeting-flow-space-map',
    template: `
        @if (levels()?.length) {
            <div
                class="absolute top-2 right-2 left-2 z-10 rounded border border-base-300 bg-base-100 p-2 shadow"
            >
                <mat-form-field appearance="outline" class="no-subscript w-full">
                    <mat-select
                        name="location"
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl?.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>{{ lvl.display_name || lvl.name }}</div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="absolute inset-0 w-full flex-1">
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
        @if (selected_space()) {
            <div
                class="absolute bottom-4 left-4 right-16 z-10 flex items-center rounded-lg border border-success bg-base-100 p-2 shadow-lg"
            >
                <div
                    class="relative mr-2 flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-lg bg-base-200"
                >
                    <icon
                        class="absolute left-0 top-0 rounded-full bg-base-200 text-success"
                        >task_alt</icon
                    >
                    @if (selected_space().images?.length) {
                        <img
                            auth
                            class="h-full object-cover"
                            [source]="selected_space().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto max-h-8 max-w-8"
                            src="assets/icons/room-placeholder.svg"
                        />
                    }
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">
                        {{
                            selected_space().display_name ||
                                selected_space().name ||
                                selected_space().id
                        }}
                    </div>
                    <div class="flex items-center text-sm opacity-60">
                        <icon class="-ml-1 text-lg">place</icon>
                        <p class="truncate">
                            @let lvl = selected_space().zones | level;
                            {{
                                lvl?.display_name || lvl?.name
                            }}
                        </p>
                    </div>
                </div>
                <div class="ml-2 text-xs font-medium text-success">
                    {{ 'COMMON.SELECTED' | translate }}
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        InteractiveMapComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
        LevelPipe,
        BuildingPipe,
        AuthenticatedImageDirective,
    ],
})
export class MeetingFlowSpaceMapComponent
    extends AsyncHandler
    implements OnInit
{
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly selected_spaces = input<string[]>([]);
    public readonly active = input<string>(undefined);
    public readonly is_displayed = input(false);
    public readonly space_selected = output<Space>();

    public readonly zoom = signal(1);
    public readonly center = signal({ x: 0.5, y: 0.5 });
    public readonly coordinates = signal(undefined);

    private _selectedSpace = (s) => () => this.space_selected.emit(s);
    public readonly setOptions = (o) => this._event_form.setOptions(o);
    public readonly level = signal<BuildingLevel>(null);
    public readonly use_region = settingSignal('use_region', false);
    public readonly available_spaces = toSignal(
        this._event_form.available_spaces,
    );

    public readonly map_url = computed(() => this.level()?.map_id || '');
    public readonly space_list = toSignal(this._event_form.spaces$);
    public readonly features = signal([]);
    public readonly levels = toSignal(
        combineLatest([
            this._org.active_region,
            this._org.active_building,
            this._event_form.spaces$,
        ]).pipe(
            map(([region, bld, spaces]) => {
                const level_list = this.use_region()
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld);
                const level_ids = new Set(
                    flatten(spaces.map((space) => space.zones || [])),
                );
                return level_list
                    .filter(
                        (lvl) =>
                            !lvl.tags.includes('parking') &&
                            level_ids.has(lvl.id),
                    )
                    .sort(
                        (a, b) =>
                            a.parent_id.localeCompare(b.parent_id) ||
                            (a.display_name || '').localeCompare(
                                b.display_name || '',
                            ),
                    );
            }),
        ),
        { initialValue: [] },
    );

    public readonly selected_space = computed(() => {
        const selected_ids = this.selected_spaces();
        if (!selected_ids?.length) return null;
        const available = this.available_spaces();
        return (
            available.find((space) => selected_ids.includes(space.id)) || null
        );
    });

    public readonly actions = computed(() =>
        this.available_spaces().map((space) => ({
            id: space.map_id,
            action: ['touchend', 'mouseup'],
            callback: this._selectedSpace(space),
        })),
    );

    public readonly styles = computed(() => {
        const free_spaces = this.available_spaces();
        const spaces = this.space_list();
        return spaces.reduce((styles, space) => {
            const colours = this._settings.get('app.explore.colors') || {};
            const status = free_spaces.find((_) => _.id === space.id)
                ? this.selected_spaces().includes(space.id)
                    ? 'pending'
                    : 'free'
                : 'busy';
            styles[`#${space.map_id || space.id}`] = {
                fill:
                    colours[`space-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
            };
            return styles;
        }, {});
    });

    public ngOnInit() {
        this.subscription(
            'levels_update',
            this._event_form.options$.subscribe(({ zones }) => {
                const level = this._org.levelWithID(zones);
                if (level) this.level.set(level);
            }),
        );
    }

    public setLevel(level: BuildingLevel) {
        this.setOptions({ zones: [level?.id] });
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

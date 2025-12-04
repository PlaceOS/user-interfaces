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
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    TranslatePipe,
} from '@placeos/components';
import { DEFAULT_COLOURS } from '@placeos/explore';

@Component({
    selector: 'desk-flow-select-map',
    template: `
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
        @if (selected_desk()) {
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
                    @if (selected_desk().images?.length) {
                        <img
                            auth
                            class="h-full object-cover"
                            [source]="selected_desk().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto max-h-8 max-w-8"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    }
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">
                        {{
                            selected_desk().display_name ||
                                selected_desk().name ||
                                selected_desk().id
                        }}
                    </div>
                    <div class="flex items-center text-sm opacity-60">
                        <icon class="-ml-1 text-lg">place</icon>
                        <p class="truncate">
                            {{
                                selected_desk().location ||
                                    selected_desk().zone?.display_name ||
                                    selected_desk().zone?.name
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
        IconComponent,
        TranslatePipe,
    ],
})
export class DeskFlowSelectMapComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly selected_items = input<string[]>([]);
    public readonly active = input<string>(undefined);
    public readonly is_displayed = input(false);
    public readonly item_selected = output<Space>();

    public readonly zoom = signal(1);
    public readonly center = signal({ x: 0.5, y: 0.5 });
    public readonly coordinates = signal(undefined);

    private _selectedItem = (s) => () => this.item_selected.emit(s);
    public readonly setOptions = (o) => this._booking_form.setOptions(o);
    public readonly level = signal<BuildingLevel>(null);
    public readonly available_resources = toSignal(
        this._booking_form.available_resources,
    );
    public readonly form_value = toSignal(
        this._booking_form.form.valueChanges,
        { initialValue: this._booking_form.form.value },
    );

    // Include currently booked resource in edit mode
    private readonly current_available = computed(() => {
        const available = this.available_resources();
        const form = this.form_value();
        const resources = form.resources || [];

        // If in edit mode and we have a resource selected, ensure it's in the list
        if (form.id && resources.length > 0) {
            const existing_ids = available.map((r) => r.id);
            const missing_resources = resources.filter(
                (r) => !existing_ids.includes(r.id),
            );

            if (missing_resources.length > 0) {
                // Add the currently booked desk(s) to the available list
                return [...missing_resources, ...available];
            }
        }

        return available;
    });

    public readonly map_url = computed(() => this.level()?.map_id || '');
    public readonly resource_list = toSignal(this._booking_form.resources);
    public readonly features = signal([]);

    public readonly selected_desk = computed(() => {
        const selected_ids = this.selected_items();
        if (!selected_ids?.length) return null;
        const available = this.current_available();
        return available.find((desk) => selected_ids.includes(desk.id)) || null;
    });
    public readonly actions = computed(() =>
        this.current_available().map((space) => ({
            id: space.map_id,
            action: ['touchend', 'mouseup'],
            callback: this._selectedItem(space),
        })),
    );

    public readonly styles = computed(() => {
        const free_spaces = this.current_available();
        const spaces = this.resource_list();
        return spaces.reduce((styles, space) => {
            const colours = this._settings.get('app.explore.colors') || {};
            const status = free_spaces.find((_) => _.id === space.id)
                ? this.selected_items().includes(space.id)
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
            this._booking_form.options.subscribe((details) => {
                const level = this._org.levelWithID(
                    (details as any).zones || [details.zone_id],
                );
                if (level) this.level.set(level);
            }),
        );
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

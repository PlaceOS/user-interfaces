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
import {
    AsyncHandler,
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { DEFAULT_COLOURS } from '@placeos/explore';

@Component({
    selector: 'meeting-flow-space-map',
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
    `,
    styles: [``],
    imports: [InteractiveMapComponent],
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
    public readonly available_spaces = toSignal(
        this._event_form.available_spaces,
    );

    public readonly map_url = computed(() => this.level()?.map_id || '');
    public readonly space_list = toSignal(this._event_form.spaces$);
    public readonly features = signal([]);
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

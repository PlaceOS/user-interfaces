import { AsyncPipe } from '@angular/common';
import { Component, inject, input, OnInit, output } from '@angular/core';
import {
    AsyncHandler,
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { InteractiveMapComponent, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { DEFAULT_COLOURS } from '@placeos/explore';
import { NewSpaceLocationPinComponent } from 'libs/events/src/lib/new-space-select-modal/new-space-location-pin.component';
import { BehaviorSubject, combineLatest, debounceTime, map, tap } from 'rxjs';

@Component({
    selector: 'meeting-flow-space-map',
    template: `
        <div class="absolute inset-0 w-full flex-1">
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
    styles: [``],
    imports: [AsyncPipe, InteractiveMapComponent, TranslatePipe],
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

    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };
    public coordinates = undefined;

    private _seletedSpace = (s) => () => {
        this.space_selected.emit(s);
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
                (lvl) => !lvl.tags.includes('parking'),
            );
            if (!this.level && viewable_levels.length) {
                this.level = viewable_levels[0];
            }
            return viewable_levels.sort(
                (a, b) =>
                    a.parent_id.localeCompare(b.parent_id) ||
                    (a.display_name || '').localeCompare(b.display_name || ''),
            );
        }),
        tap((l) => console.log('Levels:', l)),
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
                content: NewSpaceLocationPinComponent,
                data: {
                    ...space,
                    active: this.active() === space.id,
                    selected: this.selected_spaces().includes(space.id),
                },
            })),
        ),
    );

    public readonly actions = this._event_form.available_spaces.pipe(
        map((l) =>
            l.map((space) => ({
                id: space.map_id,
                action: ['touchend', 'mouseup'],
                callback: this._seletedSpace(space),
            })),
        ),
    );

    public readonly styles = combineLatest([
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

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this.subscription(
            'levels_update',
            this._event_form.options$.subscribe(({ zones }) => {
                const level = this._org.levelWithID(zones);
                if (level) this.level = level;
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

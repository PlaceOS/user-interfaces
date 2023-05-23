import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, SettingsService, unique } from '@placeos/common';
import { map } from 'rxjs/operators';

import { BookingAsset, BookingFormService } from '../booking-form.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { ExploreDeskInfoComponent } from 'libs/explore/src/lib/explore-desk-info.component';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';

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
        <div class="bg-white p-2 border-b border-gray-200 w-full">
            <mat-form-field
                levels
                appearance="outline"
                class="w-full h-[3.25rem]"
            >
                <mat-select
                    [(ngModel)]="level"
                    [ngModelOptions]="{ standalone: true }"
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        {{ lvl.display_name || lvl.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div class="relative flex-1 w-full">
            <i-map
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [features]="features | async"
                [styles]="styles | async"
                [actions]="actions | async"
            ></i-map>
        </div>
        <div
            zoom
            class="absolute bottom-2 right-2 rounded-lg border border-gray-200 bg-white flex flex-col overflow-hidden"
        >
            <button zoom-in icon matRipple (click)="setZoom(zoom * 1.1)">
                <app-icon>zoom_in</app-icon>
            </button>
            <div class="border-t border-gray-200 w-full"></div>
            <button zoom-out icon matRipple (click)="setZoom(zoom * (1 / 1.1))">
                <app-icon>zoom_out</app-icon>
            </button>
            <div class="border-t border-gray-200 w-full"></div>
            <button reset icon matRipple (click)="resetMap()">
                <app-icon>refresh</app-icon>
            </button>
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

    private _change = new BehaviorSubject(0);

    public readonly setOptions = (o) => this._state.setOptions(o);

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly levels = this._state.available_resources.pipe(
        map((desks) =>
            unique(
                desks.map((desk) => desk.zone as any as BuildingLevel),
                'id'
            )
        )
    );

    public readonly actions = this._state.available_resources.pipe(
        map((desks) =>
            desks.map((desk) => ({
                id: desk.map_id || desk.id,
                action: ['touchend', 'mouseup'],
                callback: () => this.selectDesk(desk as any),
            }))
        )
    );

    public readonly features = this._state.resources.pipe(
        map((desks) => {
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
                        : 'busy';
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

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'levels_update',
            this.levels.subscribe((levels) => {
                if (!levels.find((_) => _.id === this.level?.id)) {
                    this.level = levels[0];
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

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(0.5, Math.min(10, new_zoom));
    }

    public resetMap() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}

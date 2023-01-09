import { Component, OnInit } from '@angular/core';
import { ExploreDesksService, ExploreStateService } from '@placeos/explore';

import { DesksStateService } from './desks-state.service';
import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'desk-map-view',
    template: `
        <div map class="h-full w-full relative">
            <i-map
                [src]="url | async"
                [zoom]="(positions | async).zoom"
                [center]="(positions | async).center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
            ></i-map>
            <explore-zoom-controls
                class="absolute bottom-2 right-2"
            ></explore-zoom-controls>
            <div class="absolute top-0 left-0 p-2 text-black">
                <a-user-search-field
                    [ngModel]="null"
                    (ngModelChange)="setHost($event)"
                    class="white"
                    placeholder="User for bookings..."
                ></a-user-search-field>
            </div>
            <div
                info
                class="absolute bottom-0 rounded p-2 m-2 bg-white dark:bg-neutral-700 shadow text-center"
            >
                Click/Tap an available desk to book it.
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                position: relative;
                height: 100%;
                width: 100%;
            }

            [info] {
                left: 50%;
                transform: translateX(-50%);
            }
        `,
    ],
    providers: [ExploreDesksService],
})
export class DeskMapViewComponent extends BaseClass implements OnInit {
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;

    public readonly setHost = (u) => this._desks_state.setOptions({ host: u });

    constructor(
        private _state: ExploreStateService,
        private _desk: DesksStateService,
        private _desks_state: ExploreDesksService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('desk_polling', this._desks_state.startPolling());
        this.subscription(
            'date',
            this._desk.filters.subscribe((opts) => {
                const level = this._org.levelWithID(opts.zones);
                if (level) this._state.setLevel(level.id);
                this._desks_state.setOptions({
                    date: opts.date ? new Date(opts.date) : new Date(),
                    zones: opts.zones,
                });
            })
        );
    }
}

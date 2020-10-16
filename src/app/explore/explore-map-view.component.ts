import { Component } from '@angular/core';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpacesService } from './explore-spaces.service';
import { ExploreZonesService } from './explore-zones.service';
import { ExploreDesksService } from './explore-desks.service';

@Component({
    selector: 'explore-map-view',
    template: `
        <i-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
        ></i-map>
        <explore-zoom-controls class="absolute bottom-0 right-0"></explore-zoom-controls>
        <explore-map-controls class="absolute top-0 left-0"></explore-map-controls>
        <explore-search class="absolute top-0 right-0"></explore-search>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    providers: [ExploreSpacesService, ExploreDesksService, ExploreZonesService],
})
export class ExploreMapViewComponent {
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;

    constructor(
        private _state: ExploreStateService,
        private _spaces: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService
    ) {}
}

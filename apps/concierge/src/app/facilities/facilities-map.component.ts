import { Component } from '@angular/core';

import { BaseClass } from '@user-interfaces/common';
import { ExploreStateService } from '@user-interfaces/explore';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'facilities-map',
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
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class FacilitiesMapComponent extends BaseClass {
    /** Observable for the active map */
    public readonly url = this._explore.map_url;
    /** Observable for the active map */
    public readonly styles = this._explore.map_styles;
    /** Observable for the active map */
    public readonly positions = this._explore.map_positions;
    /** Observable for the active map */
    public readonly features = this._explore.map_features;
    /** Observable for the active map */
    public readonly actions = this._explore.map_actions;

    constructor(private _explore: ExploreStateService, private _state: EventsStateService) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'active_zone',
            this._state.zones.subscribe((z) => this._explore.setLevel(z[0]))
        );
    }
}

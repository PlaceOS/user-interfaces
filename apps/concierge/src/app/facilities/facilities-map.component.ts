import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AsyncHandler } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import {
    ExploreStateService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'facilities-map',
    template: `
        <interactive-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
        />
        <explore-zoom-controls class="absolute bottom-2 right-2" />
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
    imports: [
        CommonModule,
        InteractiveMapComponent,
        ExploreZoomControlComponent,
    ],
})
export class FacilitiesMapComponent extends AsyncHandler implements OnInit {
    private _explore = inject(ExploreStateService);
    private _state = inject(EventsStateService);

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

    public ngOnInit() {
        this.subscription(
            'active_zone',
            this._state.zones.subscribe((z) => this._explore.setLevel(z[0])),
        );
    }
}

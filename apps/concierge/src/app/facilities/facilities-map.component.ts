import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

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
            [src]="url()"
            [zoom]="positions().zoom"
            [center]="positions().center"
            [styles]="styles()"
            [features]="features()"
            [actions]="actions()"
        />
        <explore-zoom-controls class="absolute right-2 bottom-2" />
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
    imports: [InteractiveMapComponent, ExploreZoomControlComponent],
})
export class FacilitiesMapComponent extends AsyncHandler {
    private _explore = inject(ExploreStateService);
    private _state = inject(EventsStateService);

    /** Signal for the active map */
    public readonly url = this._explore.map_url;
    /** Signal for the active map */
    public readonly styles = this._explore.map_styles;
    /** Signal for the active map */
    public readonly positions = this._explore.map_positions;
    /** Signal for the active map */
    public readonly features = this._explore.map_features;
    /** Signal for the active map */
    public readonly actions = this._explore.map_actions;
    private readonly _zones = toSignal(this._state.zones, { initialValue: [] });

    constructor() {
        super();
        effect(() => {
            const [zone] = this._zones();
            if (zone) this._explore.setLevel(zone);
        });
    }
}

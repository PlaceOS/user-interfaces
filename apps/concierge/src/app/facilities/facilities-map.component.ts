import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

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
    imports: [
        CommonModule,
        InteractiveMapComponent,
        ExploreZoomControlComponent,
    ],
})
export class FacilitiesMapComponent extends AsyncHandler {
    private _explore = inject(ExploreStateService);
    private _state = inject(EventsStateService);

    /** Observable for the active map */
    public readonly url = toSignal(this._explore.map_url, { initialValue: '' });
    /** Observable for the active map */
    public readonly styles = toSignal(this._explore.map_styles, {
        initialValue: { text: { display: '' } } as any,
    });
    /** Observable for the active map */
    public readonly positions = toSignal(this._explore.map_positions, {
        initialValue: { zoom: 1, center: null } as any,
    });
    /** Observable for the active map */
    public readonly features = toSignal(this._explore.map_features, {
        initialValue: [],
    });
    /** Observable for the active map */
    public readonly actions = toSignal(this._explore.map_actions, {
        initialValue: [],
    });
    private readonly _zones = toSignal(this._state.zones, { initialValue: [] });

    constructor() {
        super();
        effect(() => {
            const [zone] = this._zones();
            if (zone) this._explore.setLevel(zone);
        });
    }
}

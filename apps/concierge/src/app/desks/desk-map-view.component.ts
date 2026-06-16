import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    OnInit,
} from '@angular/core';
import {
    ExploreDesksService,
    ExploreStateService,
    ExploreZoomControlComponent,
} from '@placeos/explore';

import { FormsModule } from '@angular/forms';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desk-map-view',
    template: `
        <div map class="relative h-full w-full">
            <interactive-map
                [src]="url()"
                [zoom]="positions()?.zoom"
                [center]="positions()?.center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
            ></interactive-map>
            <explore-zoom-controls
                class="absolute right-2 bottom-2"
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
                class="bg-base-100 absolute bottom-0 m-2 rounded-sm p-2 text-center shadow-sm"
            >
                Click or Tap an available desk to book it.
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        InteractiveMapComponent,
        ExploreZoomControlComponent,
        UserSearchFieldComponent,
        FormsModule,
    ],
})
export class DeskMapViewComponent extends AsyncHandler implements OnInit {
    private _state = inject(ExploreStateService);
    private _desk = inject(DesksStateService);
    private _desks_state = inject(ExploreDesksService);
    private _org = inject(OrganisationService);

    /** Signal for the active map */
    public readonly url = this._state.map_url;
    /** Signal for the active map */
    public readonly styles = this._state.map_styles;
    /** Signal for the active map */
    public readonly positions = this._state.map_positions;
    /** Signal for the active map */
    public readonly actions = this._state.map_actions;
    /** Signal for the active map */
    public readonly features = this._state.map_features;

    public readonly setHost = (u) => this._desks_state.setOptions({ host: u });

    private _filtersEffect = effect(() => {
        const opts = this._desk.filters();
        const level = this._org.levelWithID(opts.zones);
        if (level) this._state.setLevel(level.id);
        this._desks_state.setOptions({
            date: opts.date || Date.now(),
            all_day: true,
            zones: opts.zones,
        });
    });

    public ngOnInit(): void {
        this._desks_state.setOptions({ use_api: true });
    }
}

import { Component } from '@angular/core';
import {
    ExploreDesksService,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'explore-map-stack',
    template: `
        <div
            class="absolute inset-0 overflow-hidden bg-base-200"
            [class.hide-levels]="(options | async)?.show_levels"
        >
            <interactive-map
                class="absolute inset-0"
                [src]="lvl?.map_id"
                *ngFor="let lvl of levels | async; let i = index"
                [class.active]="i === active_index"
                [style.top]="-50 * (i - active_index) + '%'"
                [style.bottom]="50 * (i - active_index) + '%'"
                [zoom]="(positions | async).zoom"
                [center]="(positions | async).center"
                [styles]="i === active_index ? (styles | async) : {}"
                [features]="i === active_index ? (features | async) : []"
                [actions]="i === active_index ? (actions | async) : []"
                [labels]="i === active_index ? (labels | async) : []"
            >
            </interactive-map>
        </div>
    `,
    styles: [
        `
            div:not(.hide-levels) interactive-map {
                transform: perspective(500px) rotateX(50deg) scale(0.9);
            }

            .hide-levels > div:not(.active) {
                display: none;
            }

            interactive-map {
                transition: transform 200ms, opacity 200ms;
                opacity: 0.1;
                pointer-events: none;
                height: 100vw;
                width: 100vw;
            }

            .active {
                opacity: 1 !important;
                pointer-events: auto;
            }
        `,
    ],
})
export class ExploreMapStackComponent {
    public readonly levels = this._orgs.active_levels;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._state.map_labels;
    /** Observable for the active map */
    public readonly options = this._state.options;

    public get active_index(): number {
        const index = this._orgs
            .levelsForBuilding(this._orgs.building)
            .findIndex(
                (lvl) => this._state.active_level?.map_id === lvl.map_id
            );
        return Math.max(0, index);
    }

    constructor(
        private _orgs: OrganisationService,
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService
    ) {}
}

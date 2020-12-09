import { Component, OnInit } from '@angular/core';
import { ExploreStateService } from '@user-interfaces/explore';

import { DesksStateService } from './desks-state.service';
import { DeskFlowStateService } from '../../../../workplace/src/app/bookings/desk-flow/desk-flow-state.service';
import { BaseClass } from '@user-interfaces/common';

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
                class="absolute bottom-0 right-0"
            ></explore-zoom-controls>
            <div class="absolute top-0 left-0 p-2 text-black">
                <a-user-search-field [ngModel]="null" (ngModelChange)="setHost($event)" placeholder="User for bookings..."></a-user-search-field>
            </div>
            <div
                info
                class="absolute bottom-0 rounded p-2 m-2 bg-white shadow text-center"
            >
                Click/Tap an available desk to book it.
            </div>
            <ng-container *ngIf="loading | async">
                <div
                    load-state
                    class="absolute inset-0 flex flex-col justify-center items-center"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                </div>
            </ng-container>
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
    /** Observable for the active map */
    public readonly loading = this._flow.loading;
    /** Observable for the active map */
    public readonly options = this._flow.options;

    public readonly setHost = (u) => this._flow.setHost(u)

    constructor(
        private _state: ExploreStateService,
        private _desk: DesksStateService,
        private _flow: DeskFlowStateService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'date',
            this._desk.filters.subscribe((opts) =>
                this._flow.setOptions({ date: opts.date, zones: opts.zones })
            )
        );
    }
}

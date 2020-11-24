import { Component, OnInit } from '@angular/core';
import { ExploreStateService } from '@user-interfaces/explore';
import { StaffService } from '@user-interfaces/users';

import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'app-desk-flow',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main class="flex flex-1 flex-col relative">
            <div class="w-full text-center p-2 bg-white shadow z-10 relative">
                Request a Desk
            </div>
            <div map class="flex-1 w-full relative">
                <i-map
                    [src]="url | async"
                    [zoom]="(positions | async).zoom"
                    [center]="(positions | async).center"
                    [styles]="styles | async"
                    [actions]="actions | async"
                ></i-map>
                <explore-zoom-controls
                    class="absolute bottom-0 right-0"
                ></explore-zoom-controls>
                <explore-map-controls full
                    class="absolute top-0 left-0"
                ></explore-map-controls>
                <div info class="absolute bottom-0 rounded p-2 bg-white shadow text-center">
                    Click/Tap an available desk to book it.
                </div>
                <div date class="absolute top-0 left-0 sm:right-0 sm:left-auto p-2">
                    <a-date-field class="w-full" [ngModel]="(options | async).date" (ngModelChange)="setDate($event)"></a-date-field>
                </div>
                <ng-container *ngIf="loading | async">
                    <div load-state class="absolute inset-0 flex flex-col justify-center items-center">
                        <mat-spinner [diameter]="48"></mat-spinner>
                    </div>
                </ng-container>
            </div>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            [info] {
                left: 50%;
                transform: translate(-50%, -1rem);
                max-width: 50%;
            }

            [load-state] {
                background-color: rgba(255,255,255,.5);
            }

            @media screen and (max-width: 640px) {
                [date] {
                    transform: translateY(60%);
                    width: 100%;
                }
            }
        `,
    ],
    providers: [],
})
export class DeskFlowComponent implements OnInit {
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the active map */
    public readonly loading = this._desks.loading;
    /** Observable for the active map */
    public readonly options = this._desks.options;

    public show_menu: boolean = false;

    public readonly setDate = (date) => this._desks.setOptions({ date });

    constructor(
        private _state: ExploreStateService,
        private _desks: DeskFlowStateService,
        private _staff: StaffService
    ) {}

    public ngOnInit() {
        this._desks.setHost(this._staff.current);
    }
}

import { Component } from '@angular/core';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: `explore-zoom-controls`,
    template: `
        <button z-in mat-icon-button class="bg-white" (click)="zoomIn()">
            <app-icon>add</app-icon>
        </button>
        <button z-out mat-icon-button class="bg-white" (click)="zoomOut()">
            <app-icon>remove</app-icon>
        </button>
        <button reset mat-icon-button class="bg-white" (click)="reset()">
            <app-icon>autorenew</app-icon>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                padding: 0.5rem;
            }

            button {
                border: 1px solid #ccc;
                border-radius: 0;
            }

            button:first-child {
                border-radius: 0.25rem 0.25rem 0 0;
                border-bottom: none;
            }

            button:last-child {
                border-radius: 0 0 0.25rem 0.25rem;
                border-top: none;
            }
        `,
    ],
})
export class ExploreZoomControlComponent {
    public readonly zoomIn = () =>
        this._state.setPositions(
            Math.min(10, this._state.positions.zoom * 1.2),
            this._state.positions.center
        );
    public readonly zoomOut = () =>
        this._state.setPositions(
            Math.max(1, this._state.positions.zoom * (1 / 1.2)),
            this._state.positions.center
        );
    public readonly reset = () =>
        this._state.setPositions(1, { x: 0.5, y: 0.5 });

    constructor(private _state: ExploreStateService) {}
}

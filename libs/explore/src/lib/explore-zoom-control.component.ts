import { Component } from '@angular/core';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: `explore-zoom-controls`,
    template: `
        <button
            z-in
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomIn()"
            matTooltip="Zoom In"
            i18n-matTooltip
        >
            <app-icon>add</app-icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            matTooltip="Zoom Out"
            i18n-matTooltip
        >
            <app-icon>remove</app-icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            matTooltip="Reset Zoom & Center"
            i18n-matTooltip
        >
            <app-icon>autorenew</app-icon>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }

            button {
                border: 1px solid #9998;
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

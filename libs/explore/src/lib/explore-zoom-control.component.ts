import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
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
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
        >
            <icon>add</icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
        >
            <icon>remove</icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
        >
            <icon>autorenew</icon>
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
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
    ],
})
export class ExploreZoomControlComponent {
    public readonly zoomIn = () =>
        this._state.setPositions(
            Math.min(10, this._state.positions.zoom * 1.2),
            this._state.positions.center,
        );
    public readonly zoomOut = () =>
        this._state.setPositions(
            Math.max(1, this._state.positions.zoom * (1 / 1.2)),
            this._state.positions.center,
        );
    public readonly reset = () =>
        this._state.setPositions(1, { x: 0.5, y: 0.5 });

    constructor(private _state: ExploreStateService) {}
}

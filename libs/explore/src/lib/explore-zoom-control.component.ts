import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: `explore-zoom-controls`,
    template: `
        <div
            class="bg-base-100 divide-base-300 border-base-300 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
        >
            <button
                z-in
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="zoomIn()"
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
            >
                <icon>add</icon>
            </button>
            <button
                z-out
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="zoomOut()"
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
            >
                <icon>remove</icon>
            </button>
            <button
                reset
                icon
                matRipple
                class="hover:bg-base-200"
                (click)="reset()"
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
            >
                <icon>autorenew</icon>
            </button>
        </div>
    `,
    styles: [``],
    imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule],
})
export class ExploreZoomControlComponent {
    private _state = inject(ExploreStateService);

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
}

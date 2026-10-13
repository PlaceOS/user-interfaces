import { Component, model } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'map-zoom-controls',
    template: `
        <div
            class="bg-base-100 divide-base-300 border-base-300 absolute right-2 bottom-16 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
        >
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * 1.1); $event.stopPropagation()"
            >
                <icon>add</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * (10 / 11)); $event.stopPropagation()"
            >
                <icon>remove</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="reset.set(reset() + 1); $event.stopPropagation()"
            >
                <icon>refresh</icon>
            </button>
        </div>
    `,
    styles: [
        `
            button {
                border-radius: 0;
            }
        `,
    ],
    imports: [IconComponent, TranslatePipe, MatRippleModule, MatTooltipModule],
})
export class MapZoomControlsComponent {
    public zoom = model(1);
    public reset = model(0);
}

import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'map-zoom-controls',
    template: `
        <button
            icon
            matRipple
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
            matTooltipPosition="left"
            class="rounded-none"
            (click)="zoom.set(zoom() * 1.1); $event.stopPropagation()"
        >
            <icon>add</icon>
        </button>
        <button
            icon
            matRipple
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
            matTooltipPosition="left"
            class="rounded-none"
            (click)="zoom.set(zoom() * (10 / 11)); $event.stopPropagation()"
        >
            <icon>remove</icon>
        </button>
        <button
            icon
            matRipple
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
            matTooltipPosition="left"
            class="rounded-none"
            (click)="reset.set(reset() + 1); $event.stopPropagation()"
        >
            <icon>refresh</icon>
        </button>
    `,
    host: {
        class: 'divide-base-200 border-base-200 bg-base-100 text-base-content absolute right-1 bottom-16 z-40 flex flex-col divide-y overflow-hidden rounded-sm border shadow-sm',
    },
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IconComponent, TranslatePipe, MatRippleModule, MatTooltipModule],
})
export class MapZoomControlsComponent {
    public zoom = model(1);
    public reset = model(0);
}

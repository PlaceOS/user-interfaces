import { Component, input, model, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/** How many times closer or further one step of the zoom takes the map */
export const MAP_ZOOM_STEP = 1.25;

@Component({
    selector: 'map-zoom-controls',
    template: `
        <div class="absolute right-2 bottom-16 flex flex-col gap-2">
            <!-- The view controls and the zoom controls are separate groups -->
            @if (can3d()) {
                <div
                    view-group
                    class="bg-base-100 divide-base-300 border-base-300 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
                >
                    <button
                        icon
                        matRipple
                        toggle-3d
                        [matTooltip]="
                            (loading3d()
                                ? 'EXPLORE.VIEW_3D_LOADING'
                                : mode() === '3d'
                                  ? 'EXPLORE.VIEW_2D'
                                  : 'EXPLORE.VIEW_3D'
                            ) | translate
                        "
                        [attr.aria-label]="
                            (loading3d()
                                ? 'EXPLORE.VIEW_3D_LOADING'
                                : mode() === '3d'
                                  ? 'EXPLORE.VIEW_2D'
                                  : 'EXPLORE.VIEW_3D'
                            ) | translate
                        "
                        [attr.aria-busy]="loading3d()"
                        matTooltipPosition="left"
                        class="hover:bg-base-200 text-sm font-semibold"
                        (click)="
                            mode.set(mode() === '3d' ? '2d' : '3d');
                            $event.stopPropagation()
                        "
                    >
                        @if (loading3d()) {
                            <mat-spinner class="mx-auto" [diameter]="16" />
                        } @else {
                            {{ mode() === '3d' ? '2D' : '3D' }}
                        }
                    </button>
                    <!-- The 3D controls do nothing until the 3D view is on show -->
                    @if (mode() === '3d' && !loading3d()) {
                        <button
                            icon
                            matRipple
                            toggle-isometric
                            [matTooltip]="
                                (isometric()
                                    ? 'EXPLORE.ISOMETRIC_UNLOCK'
                                    : 'EXPLORE.ISOMETRIC_LOCK'
                                ) | translate
                            "
                            [attr.aria-label]="
                                (isometric()
                                    ? 'EXPLORE.ISOMETRIC_UNLOCK'
                                    : 'EXPLORE.ISOMETRIC_LOCK'
                                ) | translate
                            "
                            matTooltipPosition="left"
                            class="hover:bg-base-200"
                            [class.bg-base-200]="isometric()"
                            [class.text-secondary]="isometric()"
                            (click)="
                                isometric.set(!isometric());
                                $event.stopPropagation()
                            "
                        >
                            <icon>{{
                                isometric() ? 'lock' : 'view_in_ar'
                            }}</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            rotate-left
                            [matTooltip]="'EXPLORE.ROTATE_LEFT' | translate"
                            [attr.aria-label]="
                                'EXPLORE.ROTATE_LEFT' | translate
                            "
                            matTooltipPosition="left"
                            class="hover:bg-base-200"
                            (click)="rotate.emit(-45); $event.stopPropagation()"
                        >
                            <icon>rotate_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            rotate-right
                            [matTooltip]="'EXPLORE.ROTATE_RIGHT' | translate"
                            [attr.aria-label]="
                                'EXPLORE.ROTATE_RIGHT' | translate
                            "
                            matTooltipPosition="left"
                            class="hover:bg-base-200"
                            (click)="rotate.emit(45); $event.stopPropagation()"
                        >
                            <icon>rotate_right</icon>
                        </button>
                    }
                </div>
            }
            <div
                class="bg-base-100 divide-base-300 border-base-300 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
            >
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                    [attr.aria-label]="'EXPLORE.ZOOM_IN' | translate"
                    matTooltipPosition="left"
                    class="hover:bg-base-200"
                    (click)="zoom.set(zoom() * step); $event.stopPropagation()"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                    [attr.aria-label]="'EXPLORE.ZOOM_OUT' | translate"
                    matTooltipPosition="left"
                    class="hover:bg-base-200"
                    (click)="zoom.set(zoom() / step); $event.stopPropagation()"
                >
                    <icon>remove</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                    [attr.aria-label]="'EXPLORE.ZOOM_RESET' | translate"
                    matTooltipPosition="left"
                    class="hover:bg-base-200"
                    (click)="reset.set(reset() + 1); $event.stopPropagation()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            button {
                border-radius: 0;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
})
export class MapZoomControlsComponent {
    public readonly step = MAP_ZOOM_STEP;
    public zoom = model(1);
    public reset = model(0);
    public mode = model<'2d' | '3d'>('2d');
    /** Whether the 3D view is locked to an isometric one */
    public isometric = model(false);
    /** Whether the map on show has a 3D view to switch to */
    public can3d = input(false);
    /** Whether the 3D view is still loading after the switch to it */
    public loading3d = input(false);
    /** Degrees clockwise to turn the 3D view by */
    public rotate = output<number>();
}

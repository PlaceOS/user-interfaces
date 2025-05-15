import { Component } from '@angular/core';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';

import {
    ControlStateService,
    EnvironmentSource,
} from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-4 shadow"
        >
            <div hidden *ngIf="!!(lights | async)[0]">
                <i
                    binding
                    [(model)]="light"
                    [sys]="id"
                    mod="System"
                    [bind]="'lights/' + (lights | async)[0]"
                ></i>
            </div>
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.LIGHTING' | translate }}
            </h3>
            <ng-container *ngIf="light?.states?.length; else empty_state">
                <button
                    state
                    btn
                    matRipple
                    class="w-64"
                    *ngFor="let state of light.states"
                    [class.inverse]="state === light.state"
                    binding
                    onEvent="click"
                    [sys]="id"
                    mod="System"
                    exec="environment"
                    [params]="[(lights | async)[0], state]"
                >
                    {{ state }}
                </button>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>{{ 'APP.CONTROL.LIGHTING_EMPTY' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class LightingTooltipComponent {
    public light: EnvironmentSource;

    public readonly lights = this._state.lights;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData,
    ) {}
}

import { Component, inject } from '@angular/core';
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
            @if (!!(lights | async)[0]) {
                <div hidden>
                    <i
                        binding
                        [(model)]="light"
                        [sys]="id"
                        mod="System"
                        [bind]="'lights/' + (lights | async)[0]"
                    ></i>
                </div>
            }
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.LIGHTING' | translate }}
            </h3>
            @if (light?.states?.length) {
                @for (state of light.states; track state) {
                    <button
                        state
                        btn
                        matRipple
                        class="w-64"
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
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHTING_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class LightingTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    public light: EnvironmentSource;

    public readonly lights = this._state.lights;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }
}

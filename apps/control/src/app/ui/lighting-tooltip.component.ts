import { Component } from '@angular/core';
import { CustomTooltipData } from '@user-interfaces/components';

import {
    ControlStateService,
    EnvironmentSource,
} from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2"
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
            <h3 class="mb-2 text-xl font-medium">Lighting Presets</h3>
            <ng-container *ngIf="light?.states?.length">
                <button
                    mat-button
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
    `,
    styles: [``],
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
        private _tooltip: CustomTooltipData
    ) {}
}

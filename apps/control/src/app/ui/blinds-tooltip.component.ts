import { Component } from "@angular/core";
import { CustomTooltipData } from "@placeos/components";

import { ControlStateService, EnvironmentSource } from "../control-state.service";

@Component({
    selector: 'blinds-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2"
        >
            <div hidden *ngIf="!!(blinds | async)[0]">
                <i
                    binding
                    [(model)]="blind"
                    [sys]="id"
                    mod="System"
                    [bind]="'blinds/' + (blinds | async)[0]"
                ></i>
            </div>
            <h3 class="mb-2 text-xl font-medium">Blinds Presets</h3>
            <ng-container *ngIf="blind?.states?.length; else empty_state">
                <button
                    state
                    mat-button
                    class="w-64"
                    *ngFor="let state of blind.states"
                    [class.inverse]="state === blind.state"
                    binding
                    onEvent="click"
                    [sys]="id"
                    mod="System"
                    exec="environment"
                    [params]="[(blinds | async)[0], state]"
                >
                    {{ state }}
                </button>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>No presets available for blinds</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class BlindsTooltipComponent {
    public blind: EnvironmentSource;

    public readonly blinds = this._state.blinds;
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

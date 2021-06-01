import { Component } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'power-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 font-medium text-center">
                Are you sure you want to shutdown <br />the system?
            </h3>
            <button mat-button class="w-64" (click)="shutdown()">
                Yes, I'm sure
            </button>
            <button mat-button class="w-64 inverse" (click)="close()">No, go back</button>
        </div>
    `,
    styles: [``],
})
export class PowerTooltipComponent {
    /** Shutdown the system */
    public readonly shutdown = () => this._state.powerOff();
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    constructor(private _state: ControlStateService, private _tooltip: CustomTooltipData) {}
}

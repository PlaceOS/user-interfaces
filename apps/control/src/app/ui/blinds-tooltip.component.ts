import { Component } from "@angular/core";
import { CustomTooltipData } from "@user-interfaces/components";

import { ControlStateService } from "../control-state.service";

@Component({
    selector: 'blinds-tooltip',
    template: `
        <div class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2">
            <h3 class="mb-2 text-xl font-medium">Blinds Presets</h3>
            <button mat-button class="w-64">Off</button>
            <button mat-button class="w-64">Presentation</button>
            <button mat-button class="w-64">Meeting</button>
        </div>
    `,
    styles: [``]
})
export class BlindsTooltipComponent {
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    constructor(private _state: ControlStateService, private _tooltip: CustomTooltipData) {}

}

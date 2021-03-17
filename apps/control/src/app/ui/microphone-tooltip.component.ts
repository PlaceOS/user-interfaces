import { Component } from '@angular/core';
import { CustomTooltipData } from '@user-interfaces/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'microphone-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 text-xl font-medium">Microphones</h3>
            <div>
                <label for="mic-1">Lectern Mic</label>
                <div class="flex items-center space-x-2 w-64">
                    <button mat-icon-button><app-icon>volume_up</app-icon></button>
                    <mat-slider class="flex-1"></mat-slider>
                </div>
            </div>
            <div>
                <label for="mic-1">Lapel Mic</label>
                <div class="flex items-center space-x-2 w-64">
                    <button mat-icon-button><app-icon>volume_up</app-icon></button>
                    <mat-slider class="flex-1"></mat-slider>
                </div>
            </div>
            <div>
                <label for="mic-1">Handheld Mic</label>
                <div class="flex items-center space-x-2 w-64">
                    <button mat-icon-button><app-icon>volume_up</app-icon></button>
                    <mat-slider class="flex-1"></mat-slider>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class MicrophoneTooltipComponent {
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {}
}

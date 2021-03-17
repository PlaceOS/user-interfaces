import { Component } from '@angular/core';
import { CustomTooltipData } from '@user-interfaces/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'camera-tooltip',
    template: `
        <div class="my-2 bg-white shadow rounded flex">
            <div
                class="flex flex-col items-center border-r border-gray-400 p-4 space-y-2"
            >
                <h3 class="mb-2 text-xl font-medium">Camera Presets</h3>
                <button mat-button class="w-48">Off</button>
                <button mat-button class="w-48">Presentation</button>
                <button mat-button class="w-48">Meeting</button>
            </div>
            <div class="p-4">
                <h3 class="mb-2 text-xl font-medium">Camera Controls</h3>
                <div class="flex items-center space-x-2">
                    <div
                        panning
                        class="relative h-48 w-48 rounded-full bg-gray-600 text-white"
                    >
                        <div
                            class="absolute inset-0 flex text-5xl items-center"
                        >
                            <app-icon style="transform: translateX(-.5rem)"
                                >chevron_left</app-icon
                            >
                        </div>
                        <div
                            class="absolute inset-0 flex text-5xl items-center justify-end"
                        >
                            <app-icon style="transform: translateX(.5rem)"
                                >chevron_right</app-icon
                            >
                        </div>
                        <div
                            class="absolute inset-0 flex text-5xl justify-center"
                        >
                            <app-icon style="transform: translateY(-.5rem)"
                                >expand_less</app-icon
                            >
                        </div>
                        <div
                            class="absolute inset-0 flex text-5xl items-end justify-center"
                        >
                            <app-icon style="transform: translateY(.5rem)"
                                >expand_more</app-icon
                            >
                        </div>
                        <div
                            class="absolute top-12 left-12 right-12 bottom-12 bg-white rounded-full"
                        >
                            <div></div>
                        </div>
                    </div>
                    <div
                        zoom
                        class="flex flex-col items-center border border-gray-600 rounded"
                    >
                        <button mat-icon-button class="rounded">
                            <app-icon>add</app-icon>
                        </button>
                        <div
                            class="text-xs h-10 w-10 flex items-center justify-center border-t border-b border-gray-600"
                        >
                            Zoom
                        </div>

                        <button mat-icon-button class="rounded">
                            <app-icon>remove</app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class CameraTooltipComponent {
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {}
}

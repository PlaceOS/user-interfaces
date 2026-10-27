import { Component, inject } from '@angular/core';
import {
    CustomTooltipData,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';

import { MatRippleModule } from '@angular/material/core';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'power-tooltip',
    template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm max-sm:my-0 max-sm:flex-1 max-sm:rounded-none max-sm:shadow-none"
        >
            <h3
                class="mb-2 text-center font-medium"
                [innerHTML]="'APP.CONTROL.POWER_MSG' | translate | sanitize"
            ></h3>
            <button
                btn
                matRipple
                class="w-64 max-sm:w-full"
                (click)="shutdown(true)"
            >
                {{ 'APP.CONTROL.POWER_CONFIRM' | translate }}
            </button>
            <button
                btn
                matRipple
                class="inverse w-64 max-sm:w-full"
                (click)="close()"
            >
                {{ 'APP.CONTROL.POWER_CANCEL' | translate }}
            </button>
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, SanitizePipe, MatRippleModule],
})
export class PowerTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    /** Shutdown the system */
    public readonly shutdown = (t = false) => this._state.powerOff(t);
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();
}

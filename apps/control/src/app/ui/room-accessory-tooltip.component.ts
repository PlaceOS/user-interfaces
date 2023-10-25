import { Component } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'room-accessory-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 text-xl font-medium">Room Accessories</h3>
            <ng-container *ngIf="(list | async)?.length; else empty_state">
                <div
                    class="flex items-center space-x-2 w-full"
                    *ngFor="let item of list | async"
                >
                    <div class="flex-1 pr-8 font-medium">{{ item.name }}</div>
                    <button
                        state
                        icon
                        matRipple
                        *ngFor="let ctrl of item.controls"
                        class="border border-solid border-primary text-primary rounded"
                        (click)="
                            performAction(
                                item.module,
                                ctrl.function_name,
                                ctrl.arguments
                            )
                        "
                    >
                        <app-icon>{{ ctrl.icon }}</app-icon>
                    </button>
                </div>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>No room accessories available to control</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class RoomAccessoryTooltipComponent {
    public readonly list = this._state.room_accessories;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {}

    public performAction(module: string, method: string, args: any[]) {
        const mod = getModule(this.id, module);
        if (!mod) return;
        mod.execute(method, args);
    }
}

import { Component } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'room-accessory-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-4 shadow"
        >
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.ACCESSORIES' | translate }}
            </h3>
            <ng-container *ngIf="(list | async)?.length; else empty_state">
                <div
                    class="flex w-full items-center space-x-2"
                    *ngFor="let item of list | async"
                >
                    <div class="flex-1 pr-8 font-medium">{{ item.name }}</div>
                    <button
                        state
                        icon
                        matRipple
                        *ngFor="let ctrl of item.controls"
                        class="rounded border border-solid border-primary text-primary"
                        (click)="performAction(item.name, ctrl.name)"
                    >
                        <icon>{{ ctrl.icon }}</icon>
                    </button>
                </div>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>{{ 'APP.CONTROL.ACCESSORIES_EMPTY' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
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
        private _tooltip: CustomTooltipData,
    ) {}

    public performAction(name: string, method: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('accessory_exec', [name, method]);
    }
}

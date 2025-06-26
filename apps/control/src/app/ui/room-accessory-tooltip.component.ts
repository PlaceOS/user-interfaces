import { Component, inject } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';

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
            @if ((list | async)?.length) {
                @for (item of list | async; track item) {
                    <div class="flex w-full items-center space-x-2">
                        <div class="flex-1 pr-8 font-medium">
                            {{ item.name }}
                        </div>
                        @for (ctrl of item.controls; track ctrl) {
                            <button
                                state
                                icon
                                matRipple
                                class="rounded border border-solid border-primary text-primary"
                                (click)="performAction(item.name, ctrl.name)"
                            >
                                <icon>{{ ctrl.icon }}</icon>
                            </button>
                        }
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.ACCESSORIES_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RoomAccessoryTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    public readonly list = this._state.room_accessories;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    public performAction(name: string, method: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('accessory_exec', [name, method]);
    }
}

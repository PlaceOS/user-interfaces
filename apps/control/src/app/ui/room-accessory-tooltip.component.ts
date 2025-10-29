import { Component, inject } from '@angular/core';
import {
    CustomTooltipData,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'room-accessory-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-2 shadow"
        >
            <h3
                class="w-full rounded bg-base-200 px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACCESSORIES' | translate }}
            </h3>
            @if ((list | async)?.length) {
                @for (item of list | async; track item) {
                    <div
                        class="flex w-full min-w-[20rem] items-center space-x-2 rounded border border-base-300 p-2"
                    >
                        <div class="flex-1 pl-2 pr-8 font-medium">
                            {{ item.name }}
                        </div>
                        @for (ctrl of item.controls; track ctrl) {
                            <button
                                state
                                icon
                                matRipple
                                class="rounded border border-solid border-primary text-primary"
                                (click)="performAction(item.name, ctrl.name)"
                                [matTooltip]="ctrl.name"
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
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
    ],
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

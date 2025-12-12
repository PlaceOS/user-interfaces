import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    BindingDirective,
    CustomTooltipData,
    TranslatePipe,
} from '@placeos/components';

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-4 rounded-sm bg-base-100 p-2 shadow-sm"
        >
            <h3
                class="w-full rounded-sm bg-base-200 px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.LIGHTING_LEVELS' | translate }}
            </h3>
            @if (lights().length > 0) {
                @for (light of lights(); track light.binding) {
                    <div
                        class="relative min-w-[20rem] rounded-sm border border-base-300 px-4"
                    >
                        <div
                            class="absolute left-2 top-0 -translate-y-1/2 rounded-sm bg-base-100 px-2 py-1 text-sm font-medium"
                        >
                            {{ light?.name }}
                        </div>
                        <i
                            class="hidden"
                            binding
                            [(model)]="light.value"
                            [sys]="id"
                            mod="Lighting"
                            [bind]="light?.binding"
                        ></i>
                        <mat-slider class="mt-2 w-[calc(100%-1rem)]">
                            <input
                                matSliderThumb
                                [ngModel]="lights()?.value"
                                (ngModelChange)="setLevel(lights(), $event)"
                            />
                        </mat-slider>
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHTING_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, MatSliderModule, FormsModule, BindingDirective],
})
export class LightingLevelsTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    private _level_timeout: any;

    public readonly system = toSignal(this._state.system_id);
    public readonly lights = toSignal(this._state.lighting_levels);
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    public setLevel(level: any, value: number) {
        clearTimeout(this._level_timeout);
        this._level_timeout = setTimeout(async () => {
            const sys_id = this.system();
            if (!sys_id) return;
            const mod = getModule(sys_id, 'Lighting');
            if (!mod) return;
            await mod.execute('set_lighting_level', [value, level?.area]);
        }, 50);
    }
}

import { Component, inject } from '@angular/core';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';

import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-2 shadow"
        >
            <h3
                class="mb-2 w-full rounded bg-base-200 px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.LIGHTING_LEVELS' | translate }}
            </h3>
            @if ((lights | async)?.length) {
                @for (level of lights | async; track state) {
                    <div
                        class="relative min-w-[20rem] rounded border border-base-300 px-4"
                    >
                        <div
                            class="absolute left-2 top-0 -translate-y-1/2 rounded rounded-full bg-base-100 px-2 py-1 text-sm font-medium"
                        >
                            {{ level.name }}
                        </div>
                        <i
                            class="hidden"
                            binding
                            [(model)]="level.value"
                            [sys]="id"
                            mod="Lighting"
                            [bind]="level.binding"
                        ></i>
                        <mat-slider class="mt-2 w-[calc(100%-1rem)]">
                            <input
                                matSliderThumb
                                [ngModel]="level.value"
                                (ngModelChange)="setLevel(level, $event)"
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
    standalone: false,
})
export class LightingLevelsTooltipComponent extends AsyncHandler {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    public readonly system = this._state.system_id;
    public readonly lights = this._state.lighting_levels;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    public setLevel(level: any, value: number) {
        this.timeout(
            `level_${level.name}`,
            async () => {
                const sys_id = await nextValueFrom(this._state.system_id);
                const mod = getModule(sys_id, 'Lighting');
                if (!mod) return;
                await mod.execute('set_lighting_level', [level.area, value]);
            },
            50,
        );
    }
}

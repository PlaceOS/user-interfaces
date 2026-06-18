import { Component, inject } from '@angular/core';
import {
    CustomTooltipData,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { MatRippleModule } from '@angular/material/core';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm px-2 pt-2 pb-4 shadow-sm"
        >
            <h3
                class="bg-base-200 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_LIGHT_SCENES' | translate }}
            </h3>
            @if (scenes()?.length) {
                @for (item of scenes(); track item) {
                    <button
                        state
                        btn
                        matRipple
                        class="mx-2 w-64"
                        [class.inverse]="scene() !== item.id"
                        (click)="setScene(item.name)"
                    >
                        <div class="flex flex-1 items-center space-x-4">
                            <icon [style.opacity]="item.opacity || 1">{{
                                item.icon
                            }}</icon>
                            <div class="flex-1">{{ item.name }}</div>
                        </div>
                    </button>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.LIGHT_SCENES_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, IconComponent, MatRippleModule],
})
export class LightingSceneTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    public readonly scene = this._state.lighting_scene;
    public readonly scenes = this._state.lighting_scenes;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    public setScene(name: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('select_lighting_scene', [name]);
    }
}

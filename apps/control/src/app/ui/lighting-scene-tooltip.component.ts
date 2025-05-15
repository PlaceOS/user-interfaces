import { Component } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'lighting-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-4 shadow"
        >
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.ACTION_LIGHT_SCENES' | translate }}
            </h3>
            <ng-container *ngIf="(scenes | async).length; else empty_state">
                <button
                    state
                    btn
                    matRipple
                    class="w-64"
                    *ngFor="let item of scenes | async"
                    [class.inverse]="(scene | async) !== item.id"
                    (click)="setScene(item.name)"
                >
                    <div class="flex flex-1 items-center space-x-4">
                        <icon [style.opacity]="item.opacity || 1">{{
                            item.icon
                        }}</icon>
                        <div class="flex-1">{{ item.name }}</div>
                    </div>
                </button>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>{{ 'APP.CONTROL.LIGHT_SCENES_EMPTY' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class LightingSceneTooltipComponent {
    public readonly scene = this._state.lighting_scene;
    public readonly scenes = this._state.lighting_scenes;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData,
    ) {}

    public setScene(name: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('select_lighting_scene', [name]);
    }
}

import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncHandler } from '@placeos/common';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomOutput } from '../control-state.service';

export const ICON_MAP = {
    Display: 'deskotp_windows',
    PC: 'desktop_windows',
    Laptop: 'laptop_chromebook',
    Camera: 'videocam',
    TV: 'tv',
};

@Component({
    selector: 'output-display',
    template: `
        @if (item()) {
            <div class="bg-base-100 m-2 rounded-sm p-4 text-black shadow-sm">
                <div
                    view
                    matRipple
                    class="border-base-200 relative mb-2 flex h-48 flex-col items-center justify-center space-y-2 rounded-sm border"
                    [class.opacity-60]="!input()"
                    [class.bg-base-200]="!input()"
                    (click)="switchSource()"
                >
                    <div
                        class="bg-secondary absolute top-1 left-1 rounded-sm px-2 py-1 text-white shadow-sm"
                    >
                        {{ item()?.name }}
                    </div>
                    <icon class="text-7xl">{{
                        input()?.icon || icons[input()?.type] || 'add_to_queue'
                    }}</icon>
                    <p class="font-medium">
                        {{ input()?.name || 'Click to select input source' }}
                    </p>
                    <p class="text-xs">
                        @if (input()?.name) {
                            <span class="opacity-50">
                                {{ 'APP.CONTROL.OUTPUT_SWITCH' | translate }}
                            </span>
                        }
                    </p>
                </div>
                <div class="flex w-full items-center space-x-2">
                    <button icon matRipple (click)="setMute(!item().mute)">
                        <icon>{{
                            item().mute
                                ? 'volume_off'
                                : item().volume > 0
                                  ? 'volume_up'
                                  : 'volume_mute'
                        }}</icon>
                    </button>
                    <mat-slider class="flex-1"
                        ><input
                            matSliderThumb
                            [ngModel]="!item().mute ? item().volume : 0"
                            (ngModelChange)="setVolume($event)"
                    /></mat-slider>
                </div>
            </div>
        }
    `,
    styles: [
        `
            [view] {
                width: 28vw;
            }
        `,
    ],
    imports: [
        MatSliderModule,
        FormsModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class OutputDisplayComponent extends AsyncHandler {
    private _state = inject(ControlStateService);
    private _available_inputs = toSignal(this._state.available_inputs, {
        initialValue: [],
    });

    public readonly item = input<RoomOutput>(undefined);
    /** Details of the associated input */
    public readonly input = computed(() => {
        const input_id = this.item()?.source || '';
        return this._available_inputs().find(
            (_) => _.id === input_id || _.ref === input_id,
        );
    });

    public readonly icons = ICON_MAP;

    public readonly switchSource = () =>
        this._state.switchSource(this.item().id);
    public readonly setVolume = (v) =>
        this.timeout('volume', () => this._state.setVolume(v, this.item().id));
    public readonly setMute = (s) => this._state.setMute(s, this.item().id);

    public get id(): string {
        return this._state.id;
    }
}

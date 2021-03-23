import { Component } from '@angular/core';
import { CustomTooltipData } from '@user-interfaces/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'microphone-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-white shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 text-xl font-medium">Microphones</h3>
            <div *ngFor="let mic of mic_list | async">
                <label for="mic-1">{{ mic.name }}</label>
                <div class="flex items-center space-x-2 w-64">
                    <button mat-icon-button (click)="mute[mic.id] = !mute[mic.id]">
                        <app-icon>{{
                            mute[mic.id]
                                ? 'volume_off'
                                : volume[mic.id] > 0
                                ? 'volume_up'
                                : 'volume_mute'
                        }}</app-icon>
                    </button>
                    <mat-slider
                        [ngModel]="!mute[mic.id] ? volume[mic.id] : 0"
                        (ngModelChange)="volume[mic.id] = $event; mute[mic.id] = false"
                        class="flex-1"
                    ></mat-slider>
                </div>
                <div hidden *ngIf="mic?.module">
                    <i
                        binding
                        [sys]="id"
                        [mod]="mic.module"
                        bind="volume"
                        exec="volume"
                        [(model)]="volume[mic.id]"
                    ></i>
                    <i
                        binding
                        [sys]="id"
                        [mod]="mic.module"
                        bind="mute"
                        exec="mute"
                        [(model)]="mute[mic.id]"
                    ></i>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class MicrophoneTooltipComponent {
    /** List of microphones */
    public readonly mic_list = this._state.mic_list;
    /** Mapping of microphones to their volume */
    public readonly volume = {};
    /** Mapping of microphones to their mute state */
    public readonly mute = {};
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {}
}

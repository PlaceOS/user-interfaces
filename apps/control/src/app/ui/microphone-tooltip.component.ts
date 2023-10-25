import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'microphone-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2 max-h-[65vh] overflow-x-hidden overflow-y-auto"
        >
            <h3 class="mb-2 text-xl font-medium">Microphones</h3>
            <ng-container
                *ngIf="
                    (mic_list | async)?.length || (microphones | async)?.length;
                    else empty_state
                "
            >
                <div *ngFor="let mic of mic_list | async">
                    <label [for]="mic.id">{{ mic.name }}</label>
                    <div
                        class="flex items-center space-x-2 w-64"
                        [attr.name]="mic.id"
                    >
                        <button
                            mute
                            icon
                            matRipple
                            (click)="mute[mic.id] = !mute[mic.id]"
                        >
                            <app-icon>{{
                                mute[mic.id]
                                    ? 'volume_off'
                                    : volume[mic.id] > 0
                                    ? 'volume_up'
                                    : 'volume_mute'
                            }}</app-icon>
                        </button>
                        <mat-slider class="flex-1">
                            <input
                                matSliderThumb
                                [ngModel]="!mute[mic.id] ? volume[mic.id] : 0"
                                (ngModelChange)="
                                    setVolume(mic.id, $event); onChange()
                                "
                            />
                        </mat-slider>
                    </div>
                    <div hidden *ngIf="mic?.mod">
                        <i
                            binding
                            [sys]="id"
                            [mod]="mic.mod"
                            bind="volume"
                            exec="volume"
                            [ignore]="changing"
                            [(model)]="volume[mic.id]"
                        ></i>
                        <i
                            binding
                            [sys]="id"
                            [mod]="mic.mod"
                            bind="mute"
                            exec="mute"
                            [(model)]="mute[mic.id]"
                        ></i>
                    </div>
                </div>
                <div *ngFor="let mic of microphones | async; let i = index">
                    <label [for]="mic.name">{{ mic.name }}</label>
                    <div
                        class="flex items-center space-x-2 w-64"
                        [attr.name]="mic.name"
                    >
                        <button
                            mute
                            icon
                            matRipple
                            [disabled]="!mic.mute_id?.length"
                            (click)="mute[i] = !mute[i]"
                        >
                            <app-icon>{{
                                mute[i]
                                    ? 'volume_off'
                                    : volume[i] > 0
                                    ? 'volume_up'
                                    : 'volume_mute'
                            }}</app-icon>
                        </button>
                        <mat-slider
                            [disabled]="!mic.level_id?.length"
                            [min]="mic.min_level || 0"
                            [max]="mic.max_level || 100"
                            class="flex-1"
                        >
                            <input
                                matSliderThumb
                                [ngModel]="!mute[i] ? volume[i] : 0"
                                (ngModelChange)="
                                    setVolume(i, $event); onChange()
                                "
                        /></mat-slider>
                    </div>
                    <div hidden *ngIf="mic.module_id">
                        <i
                            binding
                            [sys]="id"
                            [mod]="mic.module_id"
                            [bind]="mic.level_feedback"
                            exec="fader"
                            [ignore]="changing"
                            [params]="[mic.level_id, volume[i]]"
                            [(model)]="volume[i]"
                        ></i>
                        <i
                            binding
                            [sys]="id"
                            [mod]="mic.module_id"
                            [bind]="mic.mute_feedback"
                            exec="mute"
                            [params]="[mic.mute_id, mute[i]]"
                            [(model)]="mute[i]"
                        ></i>
                    </div>
                </div>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="flex items-center justify-center p-8">
                <p>No microphones available for system</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class MicrophoneTooltipComponent extends AsyncHandler {
    /** List of microphone inputs */
    public readonly mic_list = this._state.mic_list;
    /** List of microphones */
    public readonly microphones = this._state.microphones;
    /** Mapping of microphones to their volume */
    public readonly volume = {};
    /** Mapping of microphones to their mute state */
    public readonly mute = {};
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public changing = false;

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {
        super();
    }

    public setVolume(idx: number, value: number) {
        this.volume[idx] = value;
        this.mute[idx] = false;
    }

    public onChange() {
        this.changing = true;
        this.timeout('change', () => (this.changing = false), 1000);
    }
}

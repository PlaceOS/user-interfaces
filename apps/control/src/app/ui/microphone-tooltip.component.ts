import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';

import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'microphone-tooltip',
    template: `
        <div
            class="my-2 flex max-h-[65vh] max-w-[32rem] flex-col items-center space-y-2 overflow-y-auto overflow-x-hidden rounded bg-base-100 p-4 shadow"
        >
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.ACTION_MICS' | translate }}
            </h3>
            <ng-container
                *ngIf="
                    (mic_list | async)?.length || (microphones | async)?.length;
                    else empty_state
                "
            >
                <div class="w-full" *ngFor="let mic of mic_list | async">
                    <label [for]="mic.id">{{ mic.name }}</label>
                    <div class="flex flex-wrap" *ngIf="mic.rooms">
                        @for (room of mic.rooms; track room.name) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.module_id || mic.mod"
                                    [bind]="mic.binding"
                                    [(model)]="room.muted"
                                ></i>
                            </div>
                            <settings-toggle
                                [toggle]="true"
                                [ngModel]="room.muted !== mic.falsy_value"
                                (ngModelChange)="
                                    setRoomMute(
                                        mic.module_id || mic.mod,
                                        room,
                                        !$event
                                    )
                                "
                            >
                                {{ room.name }}
                            </settings-toggle>
                        }
                    </div>
                    <div
                        class="flex w-64 items-center space-x-2"
                        [attr.name]="mic.id"
                    >
                        <button
                            mute
                            icon
                            matRipple
                            (click)="mute[mic.id] = !mute[mic.id]"
                        >
                            <icon>{{
                                mute[mic.id]
                                    ? 'volume_off'
                                    : volume[mic.id] > 0
                                      ? 'volume_up'
                                      : 'volume_mute'
                            }}</icon>
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
                <div
                    class="w-full"
                    *ngFor="let mic of microphones | async; let i = index"
                >
                    <label [for]="mic.name">{{ mic.name }}</label>
                    <div
                        class="mt-2 flex flex-wrap space-x-2"
                        *ngIf="mic.rooms"
                    >
                        @for (room of mic.rooms; track room.name) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.module_id || mic.mod"
                                    [bind]="mic.binding"
                                    [(model)]="room.muted"
                                ></i>
                            </div>
                            <settings-toggle
                                [toggle]="true"
                                [ngModel]="!room.muted"
                                (ngModelChange)="
                                    setRoomMute(
                                        mic.module_id || mic.mod,
                                        room,
                                        !$event
                                    )
                                "
                            >
                                {{ room.name }}
                            </settings-toggle>
                        }
                    </div>
                    <div
                        class="flex min-w-64 items-center space-x-2"
                        [attr.name]="mic.name"
                    >
                        <button
                            mute
                            icon
                            matRipple
                            [disabled]="!mic.mute_id?.length"
                            (click)="mute[i] = !mute[i]"
                        >
                            <icon>{{
                                mute[i]
                                    ? 'volume_off'
                                    : volume[i] > 0
                                      ? 'volume_up'
                                      : 'volume_mute'
                            }}</icon>
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
                <p>{{ 'APP.CONTROL.MICS_EMPTY' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
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
        private _tooltip: CustomTooltipData,
    ) {
        super();
    }

    public setRoomMute(mod_id: string, room: { ids: string[] }, state: string) {
        const mod = getModule(this.id, mod_id);
        if (!mod) return;
        mod.execute('mute', [room.ids, state]);
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

import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'microphone-tooltip',
    template: `
        <div
            class="bg-base-100 my-2 flex max-h-[65vh] max-w-md flex-col items-center space-y-5 overflow-x-hidden overflow-y-auto rounded-sm p-2 shadow-sm"
        >
            <h3
                class="bg-base-200 sticky top-0 z-20 w-full rounded-sm px-4 py-2 text-xl font-medium"
            >
                {{ 'APP.CONTROL.ACTION_MICS' | translate }}
            </h3>
            @if (mic_list()?.length || microphones()?.length) {
                @for (mic of mic_list(); track mic) {
                    <div
                        class="border-base-300 relative min-w-[20rem] rounded-sm border p-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 rounded-full rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ mic.name }}
                        </div>
                        @if (mic.rooms) {
                            <div class="flex flex-wrap">
                                @for (room of mic.rooms; track room.name) {
                                    <div hidden>
                                        <i
                                            binding
                                            [sys]="id"
                                            [mod]="mic.module_id || mic.mod"
                                            [bind]="mic.binding"
                                            [(model)]="room.state"
                                        ></i>
                                    </div>
                                    <settings-toggle
                                        class="m-1 flex-1"
                                        [toggle]="true"
                                        [ngModel]="
                                            room.state !== mic.falsy_value
                                        "
                                        (ngModelChange)="
                                            setRoomMute(
                                                mic.name,
                                                room.name,
                                                !$event
                                            )
                                        "
                                    >
                                        {{ room.name }}
                                    </settings-toggle>
                                }
                            </div>
                        }
                        <div
                            class="mt-1 flex w-64 items-center space-x-2 p-4"
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
                                    [ngModel]="
                                        !mute[mic.id] ? volume[mic.id] : 0
                                    "
                                    (ngModelChange)="
                                        setVolume(mic.id, $event); onChange()
                                    "
                                />
                            </mat-slider>
                        </div>
                        @if (mic?.mod) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.mod"
                                    bind="volume"
                                    exec="volume"
                                    [ignore]="changing()"
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
                        }
                    </div>
                }
                @for (mic of microphones(); track mic; let i = $index) {
                    <div
                        class="border-base-300 relative min-w-[20rem] rounded-sm border p-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-2 -translate-y-1/2 rounded-full rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ mic.name }}
                        </div>
                        @if (mic.rooms) {
                            <div class="mt-2 flex flex-wrap">
                                @for (room of mic.rooms; track room.name) {
                                    <div hidden>
                                        <i
                                            binding
                                            [sys]="id"
                                            [mod]="mic.module_id || mic.mod"
                                            [bind]="mic.binding"
                                            [(model)]="room.state"
                                        ></i>
                                    </div>
                                    <settings-toggle
                                        class="m-1 min-w-[40%] flex-1"
                                        [toggle]="true"
                                        [ngModel]="
                                            room.state !== mic.falsy_value
                                        "
                                        (ngModelChange)="
                                            setRoomMute(
                                                mic.name,
                                                room.name,
                                                !$event
                                            )
                                        "
                                    >
                                        {{ room.name }}
                                    </settings-toggle>
                                }
                            </div>
                        }
                        <div
                            class="mt-1 flex min-w-64 items-center space-x-2 pr-4"
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
                        @if (mic.module_id) {
                            <div hidden>
                                <i
                                    binding
                                    [sys]="id"
                                    [mod]="mic.module_id"
                                    [bind]="mic.level_feedback"
                                    exec="fader"
                                    [ignore]="changing()"
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
                        }
                    </div>
                }
            } @else {
                <div class="flex items-center justify-center p-8">
                    <p>{{ 'APP.CONTROL.MICS_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        BindingDirective,
        MatSliderModule,
        FormsModule,
        MatRippleModule,
        SettingsToggleComponent,
        IconComponent,
    ],
})
export class MicrophoneTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    private _change_timeout: any;

    /** List of microphone inputs */
    public readonly mic_list = toSignal(this._state.mic_list, {
        initialValue: [] as any[],
    });
    /** List of microphones */
    public readonly microphones = toSignal(this._state.microphones, {
        initialValue: [] as any[],
    });
    /** Mapping of microphones to their volume */
    public readonly volume: Record<string | number, number> = {};
    /** Mapping of microphones to their mute state */
    public readonly mute: Record<string | number, boolean> = {};
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public readonly changing = signal(false);

    public get id(): string {
        return this._state.id;
    }

    public setRoomMute(mic_name: string, room_name: string, state: boolean) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('mic_room_selection', [mic_name, room_name, state]);
    }

    public setVolume(idx: number | string, value: number) {
        this.volume[idx] = value;
        this.mute[idx] = false;
    }

    public onChange() {
        this.changing.set(true);
        clearTimeout(this._change_timeout);
        this._change_timeout = setTimeout(() => this.changing.set(false), 1000);
    }
}

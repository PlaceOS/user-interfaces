import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {
    BindingDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { map } from 'rxjs/operators';
import { ControlStateService } from './control-state.service';
import { DurationPipe } from './ui/duration.pipe';

@Component({
    selector: 'control-status-bar',
    template: `
        @if (capture_mod()) {
            <div
                recording
                class="flex items-center divide-x divide-base-200 text-xs text-white"
            >
                <div hidden>
                    <i
                        binding
                        [(model)]="rec_status"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="status"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_title"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="title"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_remaining"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="remaining"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_current"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="current"
                    ></i>
                    <i
                        binding
                        [(model)]="rec_next"
                        [sys]="id"
                        [mod]="capture_mod()?.mod"
                        bind="current"
                    ></i>
                </div>
                <div
                    class="flex h-12 w-24 items-center justify-center p-2 text-center"
                >
                    {{ rec_title || '~Unnamed Recording~' }}
                </div>
                <div class="flex h-12 w-12 items-center justify-center">
                    <button icon matRipple mute class="rounded-none">
                        <icon>fiber_manual_record</icon>
                    </button>
                </div>
                <div class="flex h-12 w-12 items-center justify-center">
                    <button
                        [attr.place-action]="
                            rec_status === 'playing' ? 'pause' : 'start'
                        "
                        icon
                        matRipple
                        class="rounded-none"
                        binding
                        [sys]="id"
                        mod="Capture"
                        onEvent="click"
                        [exec]="rec_status === 'playing' ? 'pause' : 'start'"
                    >
                        <icon>{{
                            rec_status === 'playing' ? 'pause' : 'play_arrow'
                        }}</icon>
                    </button>
                </div>
                <div class="flex h-12 w-32 flex-col p-2">
                    <div
                        class="rounded-sm p-2 text-center uppercase"
                        [class.bg-error]="rec_status === 'playing'"
                        [class.bg-warning]="rec_status === 'paused'"
                        [class.bg-base-300]="rec_status === 'stopped'"
                    >
                        {{
                            (rec_status === 'playing'
                                ? 'APP.CONTROL.STATE_RECORDING'
                                : rec_status === 'paused'
                                  ? 'APP.CONTROL.STATE_PAUSED'
                                  : 'APP.CONTROL.STATE_IDLE'
                            ) | translate
                        }}
                    </div>
                </div>
                <div class="h-12 p-2">
                    <label>{{ 'APP.CONTROL.REMAINING' | translate }}</label>
                    <div class="">{{ rec_remaining | duration }}</div>
                </div>
                <div class="h-12 p-2">
                    <label>{{
                        'APP.CONTROL.NEXT_RECORDING' | translate
                    }}</label>
                    <div class="">{{ rec_current | duration }}</div>
                </div>
            </div>
        }
        <div class="flex-1"></div>
        @if (has_master_audio() !== false) {
            <div
                class="flex w-lg max-w-[50%] items-center space-x-2 px-4 py-2 text-base-content"
            >
                <button icon matRipple (click)="toggleMute()">
                    <icon>{{ volume_icon() }}</icon>
                </button>
                <mat-slider class="flex-1">
                    <input
                        matSliderThumb
                        [ngModel]="system()?.volume || 0"
                        (ngModelChange)="setVolume($event)"
                        [disabled]="system()?.mute"
                /></mat-slider>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                height: 3.5rem;
                overflow: hidden;
            }
        `,
    ],
    imports: [
        BindingDirective,
        MatSliderModule,
        FormsModule,
        MatRippleModule,
        IconComponent,
        DurationPipe,
        TranslatePipe,
    ],
})
export class ControlStatusBarComponent {
    private _state = inject(ControlStateService);

    /** Details of the active system */
    public readonly system = toSignal(this._state.system, {
        initialValue: {} as any,
    });
    public readonly has_master_audio = toSignal(this._state.has_master_audio, {
        initialValue: false,
    });

    public readonly capture_mod = toSignal(
        this._state.capture_list.pipe(map((_) => _[0])),
    );

    public readonly volume_icon = computed(() => {
        const sys = this.system();
        if (sys?.mute) return 'volume_off';
        return sys?.volume > 0 ? 'volume_up' : 'volume_mute';
    });

    public rec_status: string;
    public rec_title: string;
    public rec_remaining: number;
    public rec_current: number;
    public rec_next: number;

    public readonly setVolume = (v: number) => this._state.setVolume(v);
    public readonly toggleMute = () => {
        const sys = this.system();
        this._state.setMute(!sys?.mute);
    };

    public get id() {
        return this._state.id;
    }
}

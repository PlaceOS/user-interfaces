import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { ControlStateService } from './control-state.service';

@Component({
    selector: 'control-status-bar',
    template: `
        <div
            recording
            *ngIf="!!(capture_mod | async)"
            class="text-xs divide-x divide-base-200 text-white flex items-center"
        >
            <div hidden>
                <i
                    binding
                    [(model)]="rec_status"
                    [sys]="id"
                    [mod]="(capture_mod | async)?.mod"
                    bind="status"
                ></i>
                <i
                    binding
                    [(model)]="rec_title"
                    [sys]="id"
                    [mod]="(capture_mod | async)?.mod"
                    bind="title"
                ></i>
                <i
                    binding
                    [(model)]="rec_remaining"
                    [sys]="id"
                    [mod]="(capture_mod | async)?.mod"
                    bind="remaining"
                ></i>
                <i
                    binding
                    [(model)]="rec_current"
                    [sys]="id"
                    [mod]="(capture_mod | async)?.mod"
                    bind="current"
                ></i>
                <i
                    binding
                    [(model)]="rec_next"
                    [sys]="id"
                    [mod]="(capture_mod | async)?.mod"
                    bind="current"
                ></i>
            </div>
            <div
                class="h-12 p-2 w-24 flex items-center justify-center text-center"
            >
                {{ rec_title || '~Unnamed Recording~' }}
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
                <button icon matRipple mute class="rounded-none">
                    <app-icon>fiber_manual_record</app-icon>
                </button>
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
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
                    <app-icon>{{
                        rec_status === 'playing' ? 'pause' : 'play_arrow'
                    }}</app-icon>
                </button>
            </div>
            <div class="h-12 flex flex-col p-2 w-32">
                <div
                    class="p-2 rounded uppercase text-center"
                    [class.bg-error]="rec_status === 'playing'"
                    [class.bg-warning]="rec_status === 'paused'"
                    [class.bg-base-300]="rec_status === 'stopped'"
                >
                    {{
                        rec_status === 'playing'
                            ? 'Recording'
                            : rec_status === 'paused'
                            ? 'Paused'
                            : 'Idle'
                    }}
                </div>
            </div>
            <div class="h-12 p-2">
                <label>Remaining</label>
                <div class="">{{ rec_remaining | duration }}</div>
            </div>
            <div class="h-12 p-2">
                <label>Next Recording</label>
                <div class="">{{ rec_current | duration }}</div>
            </div>
        </div>
        <div class="flex-1"></div>
        <div
            class="flex items-center space-x-2 w-[32rem] max-w-[50%] py-2 px-4"
        >
            <button icon matRipple (click)="toggleMute()">
                <app-icon>{{
                    (system | async).mute
                        ? 'volume_off'
                        : (system | async).volume > 0
                        ? 'volume_up'
                        : 'volume_mute'
                }}</app-icon>
            </button>
            <mat-slider white class="flex-1">
                <input
                    matSliderThumb
                    [ngModel]="(system | async).volume || 0"
                    (ngModelChange)="setVolume($event); mute = false"
                    [disabled]="(system | async).mute"
            /></mat-slider>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                height: 3rem;
                overflow: hidden;
            }
        `,
    ],
})
export class ControlStatusBarComponent extends AsyncHandler {
    /** Details of the active system */
    public readonly system = this._state.system;

    public readonly capture_mod = this._state.capture_list.pipe(
        map((_) => _[0])
    );

    public mute: boolean;
    public rec_status: string;
    public rec_title: string;

    public readonly setVolume = (v) => this._state.setVolume(v);
    public readonly toggleMute = async () => {
        const sys = await this.system.pipe(take(1)).toPromise();
        this._state.setMute(!sys.mute);
    };

    public get id() {
        return this._state.id;
    }

    constructor(private _state: ControlStateService) {
        super();
    }
}

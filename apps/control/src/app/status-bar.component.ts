import { Component } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { ControlStateService } from './control-state.service';

@Component({
    selector: 'control-status-bar',
    template: `
        <div
            recording
            *ngIf="(system | async)?.recording"
            class="text-xs divide-x divide-gray-100 text-white flex items-center"
        >
            <div hidden>
                <i
                    binding
                    [(model)]="rec_status"
                    [sys]="id"
                    mod="Capture"
                    bind="status"
                ></i>
                <i
                    binding
                    [(model)]="rec_title"
                    [sys]="id"
                    mod="Capture"
                    bind="title"
                ></i>
                <i
                    binding
                    [(model)]="rec_remaining"
                    [sys]="id"
                    mod="Capture"
                    bind="remaining"
                ></i>
                <i
                    binding
                    [(model)]="rec_current"
                    [sys]="id"
                    mod="Capture"
                    bind="current"
                ></i>
                <i
                    binding
                    [(model)]="rec_next"
                    [sys]="id"
                    mod="Capture"
                    bind="current"
                ></i>
            </div>
            <div
                class="h-12 p-2 w-24 flex items-center justify-center text-center"
            >
                {{ rec_title || '~Unnamed Recording~' }}
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
                <button mat-icon-button mute class="rounded-none">
                    <app-icon>fiber_manual_record</app-icon>
                </button>
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
                <button
                    [attr.place-action]="
                        rec_status === 'playing' ? 'pause' : 'start'
                    "
                    mat-icon-button
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
                    [class.bg-pending]="rec_status === 'paused'"
                    [class.bg-gray-400]="rec_status === 'stopped'"
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
        <div class="flex items-center space-x-2 w-64 py-2 px-4">
            <button mat-icon-button (click)="mute = !mute">
                <app-icon>{{
                    mute
                        ? 'volume_off'
                        : (volume | async) > 0
                        ? 'volume_up'
                        : 'volume_mute'
                }}</app-icon>
            </button>
            <mat-slider
                white
                [ngModel]="!mute ? (volume | async) : 0"
                (ngModelChange)="setVolume($event); mute = false"
                class="flex-1"
            ></mat-slider>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc8;
                height: 3rem;
                overflow: hidden;
            }
        `,
    ],
})
export class ControlStatusBarComponent extends BaseClass {
    /** Current global volume for system */
    public readonly volume = this._state.volume;
    /** Details of the active system */
    public readonly system = this._state.system;

    public mute: boolean;
    public rec_status: string;
    public rec_title: string;

    public readonly setVolume = (v) => this._state.setVolume('all', v);

    public get id() {
        return this._state.id;
    }

    constructor(private _state: ControlStateService) {
        super();
    }
}

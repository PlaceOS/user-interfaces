import { Component, Renderer2 } from '@angular/core';
import { BaseClass } from '@user-interfaces/common';
import { CustomTooltipData } from '@user-interfaces/components';

import { ControlStateService, RoomInput } from '../control-state.service';
import { JoystickPan, JoystickTilt } from './joystick.component';

export enum ZoomDirection {
    In,
    Out,
    Stop,
}
@Component({
    selector: 'camera-tooltip',
    template: `
        <div class="my-2 bg-white shadow rounded flex flex-col" *ngIf="(camera_list | async)?.length; else empty_state">
            <mat-form-field appearance="outline" class="m-4 h-12">
                <mat-select
                    [(ngModel)]="active_camera"
                    placeholder="Select Camera"
                >
                    <mat-option
                        *ngFor="let cam of camera_list | async"
                        [value]="cam"
                    >
                        {{ cam.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div class="flex relative border-t border-gray-400 mt-1">
                <div
                    class="flex flex-col items-center border-r border-gray-400 p-4 space-y-2"
                >
                    <h3 class="mb-2 text-xl font-medium">Presets</h3>
                    <ng-container *ngIf="presets?.length; else no_presets">
                        <button
                            preset
                            mat-button
                            class="w-48"
                            [class.inverse]="preset === name"
                            *ngFor="let name of presets"
                            (click)="preset = name"
                        >
                            {{ name }}
                        </button>
                    </ng-container>
                    <ng-template #no_presets>
                        <p>No presets for this camera</p>
                    </ng-template>
                </div>
                <div class="p-4">
                    <h3 class="mb-2 text-xl font-medium">Controls</h3>
                    <div class="flex items-center space-x-2">
                        <joystick [(pan)]="pan" [(tilt)]="tilt"></joystick>
                        <div
                            zoom
                            class="flex flex-col items-center border border-gray-600 rounded"
                        >
                            <button
                                zoom-in
                                mat-icon-button
                                class="rounded"
                                (mousedown)="startZoom('in', $event)"
                                (touchstart)="startZoom('in', $event)"
                                (contextmenu)="$event.preventDefault()"
                            >
                                <app-icon>add</app-icon>
                            </button>
                            <div
                                class="text-xs h-10 w-10 flex items-center justify-center border-t border-b border-gray-600"
                            >
                                Zoom
                            </div>

                            <button
                            zoom-out
                                mat-icon-button
                                class="rounded"
                                (mousedown)="startZoom('out', $event)"
                                (touchstart)="startZoom('out', $event)"
                                (contextmenu)="$event.preventDefault()"
                            >
                                <app-icon>remove</app-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center"
                    *ngIf="!active_camera"
                >
                    <p>Select a camera to control.</p>
                </div>
            </div>
        </div>
        <div hidden *ngIf="active_camera?.module">
            <i
                binding
                [model]="zoom"
                [sys]="id"
                [mod]="active_camera.module"
                bind="zoom"
                exec="zoom"
            ></i>
            <i
                binding
                [model]="pan"
                [sys]="id"
                [mod]="active_camera.module"
                bind="pan"
                exec="pan"
            ></i>
            <i
                binding
                [model]="tilt"
                [sys]="id"
                [mod]="active_camera.module"
                bind="tilt"
                exec="tilt"
            ></i>
            <i
                binding
                [(model)]="presets"
                [sys]="id"
                [mod]="active_camera.module"
                bind="presets"
            ></i>
            <i
                binding
                [(model)]="preset"
                [sys]="id"
                [mod]="active_camera.module"
                bind="preset"
                exec="recall"
            ></i>
        </div>
        <ng-template #empty_state>
            <div  class="my-2 bg-white shadow rounded flex flex-col p-8 text-center">
                <p>No cameras available for this system</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class CameraTooltipComponent extends BaseClass {
    /** Currently active camera */
    public active_camera: RoomInput;
    /** List of available presets for the active camera */
    public presets: string[] = [];
    /** Currently active preset */
    public preset: string = '';
    /** Current zoom value for camera */
    public zoom: ZoomDirection = ZoomDirection.Stop;
    /** Current panning value for camera */
    public pan: JoystickPan = JoystickPan.Stop;
    /** Current tilting value for camera */
    public tilt: JoystickTilt = JoystickTilt.Stop;
    /** List of available cameras to select from */
    public readonly camera_list = this._state.camera_list;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData,
        private _renderer: Renderer2
    ) {
        super();
    }

    public startZoom(dir: 'in' | 'out', e: MouseEvent | TouchEvent) {
        const end_event = e instanceof MouseEvent ? 'mouseup' : 'touchend';
        this.zoom = dir === 'in' ? ZoomDirection.In : ZoomDirection.Out;
        this.subscription(
            'on_end',
            this._renderer.listen('window', end_event, (_) => {
                this.unsub('on_move');
                this.unsub('on_end');
                this.zoom = ZoomDirection.Stop;
            })
        );
    }
}

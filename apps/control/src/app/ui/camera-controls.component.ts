import { Component, Renderer2 } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { combineLatest } from 'rxjs';

import { ControlStateService, RoomInput } from '../control-state.service';
import { JoystickPan, JoystickTilt } from './joystick.component';

export enum ZoomDirection {
    In = 'in',
    Out = 'out',
    Stop = 'stop',
}
@Component({
    selector: 'camera-controls',
    template: `
        <div class="flex flex-col" *ngIf="(camera_list | async)?.length">
            <mat-form-field appearance="outline" class="m-4 h-12">
                <mat-select
                    [(ngModel)]="active_camera"
                    (ngModelChange)="selectCamera($event)"
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
            <div class="p-4">
                <h3 class="mb-2 text-xl font-medium">Controls</h3>
                <div class="flex items-center space-x-2">
                    <joystick
                        [(pan)]="pan"
                        [(tilt)]="tilt"
                        (panChange)="moveCamera()"
                        (tiltChange)="moveCamera()"
                    ></joystick>
                    <div
                        zoom
                        class="flex flex-col items-center border border-base-200 rounded"
                    >
                        <button
                            zoom-in
                            icon
                            matRipple
                            class="rounded"
                            (mousedown)="startZoom('in', $event)"
                            (touchstart)="startZoom('in', $event)"
                            (contextmenu)="$event.preventDefault()"
                        >
                            <app-icon>add</app-icon>
                        </button>
                        <div
                            class="text-xs h-10 w-10 flex items-center justify-center border-t border-b border-base-200"
                        >
                            Zoom
                        </div>

                        <button
                            zoom-out
                            icon
                            matRipple
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
                class="absolute inset-0 bg-base-100 bg-opacity-75 flex items-center justify-center"
                *ngIf="!active_camera"
            >
                <p>Select a camera to control.</p>
            </div>
        </div>
    `,
    styles: [``],
})
export class CameraControlsComponent extends AsyncHandler {
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

    public get id(): string {
        return this._state.id;
    }

    constructor(
        private _state: ControlStateService,
        private _renderer: Renderer2
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'camera_list',
            combineLatest([
                this.camera_list,
                this._state.selected_camera,
            ]).subscribe(([l, cam]) => {
                if (!l?.length) return;
                this.active_camera =
                    l.find((_) => _.id === cam) || this.active_camera || l[0];
            })
        );
    }

    public selectCamera(camera: RoomInput) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('selected_camera', [camera.id]);
    }

    public recallPreset(preset: string) {
        const mod = getModule(this.id, this.active_camera.mod);
        if (!mod) return;
        mod.execute('recall', [preset]);
    }

    public addPreset(preset: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('add_preset', [preset, this.active_camera.id]);
    }

    public removePreset(preset: string) {
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('remove_preset', [preset, this.active_camera.id]);
    }

    public moveCamera() {
        if (!this.active_camera) return;
        this.timeout(
            'move',
            async () => {
                const { index } = this.active_camera;
                const mod = getModule(this.id, this.active_camera.mod);
                if (!mod) return;
                await mod.execute('stop', index ? [index] : []);
                if (this.tilt !== JoystickTilt.Stop)
                    await mod.execute(
                        'tilt',
                        index ? [this.tilt, index] : [this.tilt]
                    );
                if (this.pan !== JoystickPan.Stop)
                    await mod.execute(
                        'pan',
                        index ? [this.pan, index] : [this.pan]
                    );
            },
            50
        );
    }

    public async startZoom(dir: 'in' | 'out', e: MouseEvent | TouchEvent) {
        const mod = getModule(this.id, this.active_camera.mod);
        if (!mod) return;
        const end_event = e instanceof MouseEvent ? 'mouseup' : 'touchend';
        this.zoom = dir === 'in' ? ZoomDirection.In : ZoomDirection.Out;
        const { index } = this.active_camera;
        await mod.execute('zoom', index ? [this.zoom, index] : [this.zoom]);
        this.subscription(
            'on_end',
            this._renderer.listen('window', end_event, (_) => {
                this.unsub('on_move');
                this.unsub('on_end');
                this.zoom = ZoomDirection.Stop;
                mod.execute('zoom', index ? [this.zoom, index] : [this.zoom]);
            })
        );
    }
}

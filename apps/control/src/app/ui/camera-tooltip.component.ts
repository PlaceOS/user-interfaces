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
    selector: 'camera-tooltip',
    template: `
        <div
            class="my-2 bg-base-100 shadow rounded flex flex-col"
            *ngIf="(camera_list | async)?.length; else empty_state"
        >
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
            <div class="flex relative border-t border-base-200 mt-1">
                <div
                    class="flex flex-col items-center border-r border-base-200 p-4 space-y-2 relative"
                >
                    <h3 class="mb-2 text-xl font-medium pr-12">Presets</h3>
                    <ng-container *ngIf="presets?.length; else no_presets">
                        <div
                            class="flex items-center space-x-2"
                            *ngFor="let name of presets"
                        >
                            <button
                                preset
                                btn
                                matRipple
                                class="w-48"
                                [class.inverse]="preset === name"
                                (click)="recallPreset(name)"
                            >
                                {{ name }}
                            </button>
                            <button
                                icon
                                matRipple
                                *ngIf="presets?.length > 1"
                                class="rounded bg-error text-white"
                                (click)="removePreset(name)"
                            >
                                <app-icon>delete</app-icon>
                            </button>
                        </div>
                    </ng-container>
                    <ng-template #no_presets>
                        <p>No presets for this camera</p>
                    </ng-template>
                    <button
                        icon
                        matRipple
                        class="absolute top-1 right-4"
                        [matMenuTriggerFor]="menu"
                    >
                        <app-icon>add</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <div class="px-2 w-full flex flex-col">
                            <mat-form-field
                                appearance="outline"
                                class="w-full h-[3.5rem]"
                                (click)="$event.stopPropagation()"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="new_preset"
                                    placeholder="New preset name"
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                [disabled]="!new_preset"
                                class="w-full"
                                (click)="addPreset(new_preset); new_preset = ''"
                            >
                                Save Preset
                            </button>
                        </div>
                    </mat-menu>
                </div>
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
        </div>
        <div hidden *ngIf="active_camera?.mod">
            <i
                binding
                (modelChange)="
                    presets = active_camera.index
                        ? ($event || [])[active_camera.index]
                        : $event
                "
                [sys]="id"
                [mod]="active_camera.mod"
                [bind]="active_camera.index ? 'camera_presets' : 'presets'"
            ></i>
        </div>
        <ng-template #empty_state>
            <div
                class="my-2 bg-base-100 shadow rounded flex flex-col p-8 text-center"
            >
                <p>No cameras available for this system</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class CameraTooltipComponent extends AsyncHandler {
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

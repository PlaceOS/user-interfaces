import { Component, DestroyRef, effect, inject, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomInput } from '../control-state.service';
import {
    moveCamera,
    selectCamera,
    zoomCamera,
    ZoomDirection,
} from './camera-commands';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt,
} from './joystick.component';

@Component({
    selector: 'camera-controls',
    template: `
        @if (camera_list()?.length) {
            <div class="flex flex-col">
                <mat-form-field appearance="outline" class="m-4 h-12">
                    <mat-select
                        [ngModel]="active_camera()"
                        (ngModelChange)="selectCamera($event)"
                        [placeholder]="'APP.CONTROL.CAMERA_SELECT' | translate"
                    >
                        @for (cam of camera_list(); track cam) {
                            <mat-option [value]="cam">
                                {{ cam.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <div class="relative p-4">
                    <h3 class="mb-2 text-xl font-medium">
                        {{ 'APP.CONTROL.CONTROLS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <joystick
                            [pan]="pan()"
                            [tilt]="tilt()"
                            (panChange)="pan.set($event); moveCamera()"
                            (tiltChange)="tilt.set($event); moveCamera()"
                        ></joystick>
                        <div
                            zoom
                            class="border-base-200 flex flex-col items-center rounded-sm border"
                        >
                            <button
                                zoom-in
                                icon
                                matRipple
                                class="touch-none rounded-sm select-none"
                                (pointerdown)="startZoom('in', $event)"
                                (pointerup)="stopZoom()"
                                (pointercancel)="stopZoom()"
                                (lostpointercapture)="stopZoom()"
                                (contextmenu)="$event.preventDefault()"
                            >
                                <icon>add</icon>
                            </button>
                            <div
                                class="border-base-200 flex h-10 w-10 items-center justify-center border-t border-b text-xs"
                            >
                                {{ 'APP.CONTROL.ZOOM' | translate }}
                            </div>
                            <button
                                zoom-out
                                icon
                                matRipple
                                class="touch-none rounded-sm select-none"
                                (pointerdown)="startZoom('out', $event)"
                                (pointerup)="stopZoom()"
                                (pointercancel)="stopZoom()"
                                (lostpointercapture)="stopZoom()"
                                (contextmenu)="$event.preventDefault()"
                            >
                                <icon>remove</icon>
                            </button>
                        </div>
                    </div>
                    @if (!active_camera()) {
                        <div
                            no-camera
                            class="bg-base-100/75 absolute inset-0 flex items-center justify-center"
                        >
                            <p>
                                {{
                                    'APP.CONTROL.CAMERA_SELECT_MSG' | translate
                                }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        JoystickComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class CameraControlsComponent {
    private _state = inject(ControlStateService);

    /** Currently active camera */
    public readonly active_camera = signal<RoomInput | undefined>(undefined);
    /** Current zoom value for camera */
    public readonly zoom = signal<ZoomDirection>(ZoomDirection.Stop);
    /** Current panning value for camera */
    public readonly pan = signal<JoystickPan>(JoystickPan.Stop);
    /** Current tilting value for camera */
    public readonly tilt = signal<JoystickTilt>(JoystickTilt.Stop);
    /** List of available cameras to select from */
    public readonly camera_list = this._state.camera_list;

    private readonly _selected_camera = this._state.selected_camera;

    private _move_timeout?: ReturnType<typeof setTimeout>;
    private _zoom_timeout?: ReturnType<typeof setTimeout>;

    public get id(): string {
        return this._state.id;
    }

    constructor() {
        inject(DestroyRef).onDestroy(() => this.stopZoom());
        effect(() => {
            const list = this.camera_list();
            const cam = this._selected_camera();
            this.active_camera.set(list?.find((_) => _.id === cam));
        });
    }

    public selectCamera(camera: RoomInput) {
        this.active_camera.set(camera);
        selectCamera(this.id, camera.id);
    }

    public moveCamera() {
        const cam = this.active_camera();
        if (!cam) return;
        clearTimeout(this._move_timeout);
        this._move_timeout = setTimeout(
            () => moveCamera(this.id, cam, this.pan(), this.tilt()),
            50,
        );
    }

    /** Start zooming. Pointer capture makes sure the button receives the release. */
    public async startZoom(dir: 'in' | 'out', e: PointerEvent) {
        (e.currentTarget as Element | null)?.setPointerCapture?.(e.pointerId);
        const cam = this.active_camera();
        if (!cam) return;
        this.zoom.set(dir === 'in' ? ZoomDirection.In : ZoomDirection.Out);
        await zoomCamera(this.id, cam, this.zoom()).catch(() => null);
    }

    public stopZoom() {
        clearTimeout(this._zoom_timeout);
        this._zoom_timeout = setTimeout(() => {
            if (this.zoom() === ZoomDirection.Stop) return;
            const cam = this.active_camera();
            if (!cam) return;
            this.zoom.set(ZoomDirection.Stop);
            zoomCamera(this.id, cam, ZoomDirection.Stop);
        }, 50);
    }
}

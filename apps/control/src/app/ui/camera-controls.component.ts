import {
    Component,
    DestroyRef,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { getModule } from '@placeos/ts-client';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomInput } from '../control-state.service';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt,
} from './joystick.component';

export enum ZoomDirection {
    In = 'in',
    Out = 'out',
    Stop = 'stop',
}

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
                <div class="p-4">
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
                                class="rounded-sm"
                                (mousedown)="startZoom('in', $event)"
                                (touchstart)="startZoom('in', $event)"
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
                                class="rounded-sm"
                                (mousedown)="startZoom('out', $event)"
                                (touchstart)="startZoom('out', $event)"
                                (contextmenu)="$event.preventDefault()"
                                (window:mouseup)="stopZoom()"
                                (window:touchend)="stopZoom()"
                            >
                                <icon>remove</icon>
                            </button>
                        </div>
                    </div>
                </div>
                @if (!active_camera()) {
                    <div
                        class="bg-base-100 bg-opacity-75 absolute inset-0 flex items-center justify-center"
                    >
                        <p>{{ 'APP.CONTROL.CAMERA_SELECT_MSG' | translate }}</p>
                    </div>
                }
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
export class CameraControlsComponent implements OnInit {
    private _state = inject(ControlStateService);
    private _destroyRef = inject(DestroyRef);

    /** Currently active camera */
    public readonly active_camera = signal<RoomInput | undefined>(undefined);
    /** List of available presets for the active camera */
    public readonly presets = signal<string[]>([]);
    /** Currently active preset */
    public readonly preset = signal('');
    /** Current zoom value for camera */
    public readonly zoom = signal<ZoomDirection>(ZoomDirection.Stop);
    /** Current panning value for camera */
    public readonly pan = signal<JoystickPan>(JoystickPan.Stop);
    /** Current tilting value for camera */
    public readonly tilt = signal<JoystickTilt>(JoystickTilt.Stop);
    /** List of available cameras to select from */
    public readonly camera_list = this._state.camera_list;

    private readonly _selected_camera = this._state.selected_camera;

    private _move_timeout: any;
    private _zoom_timeout: any;

    public get id(): string {
        return this._state.id;
    }

    constructor() {
        effect(() => {
            const list = this.camera_list();
            const cam = this._selected_camera();
            this.active_camera.set(list?.find((_) => _.id === cam));
        });
    }

    public ngOnInit() {
        // Effect handles camera selection
    }

    public selectCamera(camera: RoomInput) {
        this.active_camera.set(camera);
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('selected_camera', [camera.id]);
    }

    public recallPreset(preset: string) {
        const cam = this.active_camera();
        if (!cam) return;
        const mod = getModule(this.id, cam.mod);
        if (!mod) return;
        mod.execute('recall', [preset]);
    }

    public addPreset(preset: string) {
        const cam = this.active_camera();
        if (!cam) return;
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('add_preset', [preset, cam.id]);
    }

    public removePreset(preset: string) {
        const cam = this.active_camera();
        if (!cam) return;
        const mod = getModule(this.id, 'System');
        if (!mod) return;
        mod.execute('remove_preset', [preset, cam.id]);
    }

    public moveCamera() {
        const cam = this.active_camera();
        if (!cam) return;
        clearTimeout(this._move_timeout);
        this._move_timeout = setTimeout(async () => {
            const { index } = cam;
            const mod = getModule(this.id, cam.mod);
            if (!mod) return;
            await mod.execute('stop', index ? [index] : []);
            if (this.tilt() !== JoystickTilt.Stop)
                await mod.execute(
                    'tilt',
                    index ? [this.tilt(), index] : [this.tilt()],
                );
            if (this.pan() !== JoystickPan.Stop)
                await mod.execute(
                    'pan',
                    index ? [this.pan(), index] : [this.pan()],
                );
        }, 50);
    }

    public async startZoom(dir: 'in' | 'out', e: MouseEvent | TouchEvent) {
        const cam = this.active_camera();
        if (!cam) return;
        const mod = getModule(this.id, cam.mod);
        if (!mod) return;
        this.zoom.set(dir === 'in' ? ZoomDirection.In : ZoomDirection.Out);
        const { index } = cam;
        await mod
            .execute('zoom', index ? [this.zoom(), index] : [this.zoom()])
            .catch();
    }

    public stopZoom() {
        clearTimeout(this._zoom_timeout);
        this._zoom_timeout = setTimeout(() => {
            if (this.zoom() === ZoomDirection.Stop) return;
            const cam = this.active_camera();
            if (!cam) return;
            const mod = getModule(this.id, cam.mod);
            if (!mod) return;
            const { index } = cam;
            this.zoom.set(ZoomDirection.Stop);
            mod.execute('zoom', index ? [this.zoom(), index] : [this.zoom()]);
        }, 50);
    }
}

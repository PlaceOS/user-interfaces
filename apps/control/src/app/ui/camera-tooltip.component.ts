import { Component, OnInit, Renderer2 } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';
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
        @if ((camera_list | async)?.length) {
            <div class="my-2 flex flex-col rounded bg-base-100 shadow">
                <mat-form-field appearance="outline" class="no-subscript m-2">
                    <mat-select
                        [(ngModel)]="active_camera"
                        (ngModelChange)="selectCamera($event)"
                        [placeholder]="'APP.CONTROL.CAMERA_SELECT' | translate"
                    >
                        @for (cam of camera_list | async; track cam) {
                            <mat-option [value]="cam">
                                {{ cam.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <div
                    class="relative mt-1 flex flex-col border-t border-base-200 sm:flex-row"
                >
                    <div
                        class="relative flex flex-col items-center space-y-2 border-b border-base-200 p-4 sm:border-b-0 sm:border-r"
                    >
                        <h3 class="mb-2 w-full pr-12 text-xl font-medium">
                            {{ 'APP.CONTROL.CAMERA_PRESETS' | translate }}
                        </h3>
                        @if (presets?.length) {
                            @for (name of presets; track name) {
                                <div class="flex items-center space-x-2">
                                    <button
                                        preset
                                        btn
                                        matRipple
                                        class="w-48"
                                        [class.inverse]="preset !== name"
                                        (click)="recallPreset(name)"
                                    >
                                        {{ name }}
                                    </button>
                                    @if (presets?.length > 1) {
                                        <button
                                            icon
                                            matRipple
                                            class="h-12 w-12 rounded border border-error bg-base-100 text-error"
                                            (click)="removePreset(name)"
                                        >
                                            <icon>delete</icon>
                                        </button>
                                    }
                                </div>
                            }
                        } @else {
                            <p
                                class="w-full rounded bg-base-300 p-8 opacity-30"
                            >
                                {{
                                    'APP.CONTROL.CAMERA_PRESETS_EMPTY'
                                        | translate
                                }}
                            </p>
                        }
                        <button
                            icon
                            matRipple
                            class="absolute right-4 top-1"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>add</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div class="flex w-full flex-col px-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="h-[3.5rem] w-full"
                                    (click)="$event.stopPropagation()"
                                >
                                    <input
                                        matInput
                                        [(ngModel)]="new_preset"
                                        [placeholder]="
                                            'APP.CONTROL.CAMERA_PRESETS_NEW'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    [disabled]="!new_preset"
                                    class="w-full"
                                    (click)="
                                        addPreset(new_preset); new_preset = ''
                                    "
                                >
                                    {{
                                        'APP.CONTROL.CAMERA_PRESETS_SAVE'
                                            | translate
                                    }}
                                </button>
                            </div>
                        </mat-menu>
                    </div>
                    <div class="p-4">
                        <h3 class="mb-2 text-xl font-medium">
                            {{ 'APP.CONTROL.CONTROLS' | translate }}
                        </h3>
                        <div class="flex items-center space-x-2">
                            <joystick
                                [(pan)]="pan"
                                [(tilt)]="tilt"
                                (panChange)="moveCamera()"
                                (tiltChange)="moveCamera()"
                            ></joystick>
                            <div
                                zoom
                                class="flex flex-col items-center rounded border border-base-200"
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
                                    <icon>add</icon>
                                </button>
                                <div
                                    class="flex h-10 w-10 items-center justify-center border-b border-t border-base-200 text-xs"
                                >
                                    {{ 'APP.CONTROL.ZOOM' | translate }}
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
                                    <icon>remove</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    @if (!active_camera) {
                        <div
                            class="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-75"
                        >
                            <p>
                                {{
                                    'APP.CONTROLS.CAMERA_SELECT_MSG' | translate
                                }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="my-2 flex flex-col rounded bg-base-100 p-8 text-center shadow"
            >
                <p>{{ 'APP.CONTROL.CAMERAS_EMPTY' | translate }}</p>
            </div>
        }
        @if (active_camera?.mod) {
            <div hidden>
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
        }
    `,
    styles: [``],
    standalone: false,
})
export class CameraTooltipComponent extends AsyncHandler implements OnInit {
    /** Currently active camera */
    public active_camera: RoomInput;
    /** List of available presets for the active camera */
    public presets: string[] = [];
    /** Currently active preset */
    public preset = '';
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
        private _renderer: Renderer2,
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
            }),
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
                        index ? [this.tilt, index] : [this.tilt],
                    );
                if (this.pan !== JoystickPan.Stop)
                    await mod.execute(
                        'pan',
                        index ? [this.pan, index] : [this.pan],
                    );
            },
            50,
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
            this._renderer.listen('window', end_event, () => {
                this.unsub('on_move');
                this.unsub('on_end');
                this.zoom = ZoomDirection.Stop;
                mod.execute('zoom', index ? [this.zoom, index] : [this.zoom]);
            }),
        );
    }
}

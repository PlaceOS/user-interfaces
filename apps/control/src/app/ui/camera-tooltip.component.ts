import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { getModule } from '@placeos/ts-client';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
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
    selector: 'camera-tooltip',
    template: `
        @if (camera_list()?.length) {
            <div class="bg-base-100 my-2 flex flex-col rounded-sm shadow-sm">
                <mat-form-field appearance="outline" class="no-subscript m-2">
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
                <div
                    class="border-base-200 relative mt-1 flex flex-col border-t sm:flex-row"
                >
                    <div
                        class="border-base-200 relative flex flex-col items-center space-y-2 border-b p-4 sm:border-r sm:border-b-0"
                    >
                        <h3 class="mb-2 w-full pr-12 text-xl font-medium">
                            {{ 'APP.CONTROL.CAMERA_PRESETS' | translate }}
                        </h3>
                        @if (presets().length) {
                            @for (name of presets(); track name) {
                                <div class="flex items-center space-x-2">
                                    <button
                                        preset
                                        btn
                                        matRipple
                                        class="w-48"
                                        [class.inverse]="preset() !== name"
                                        (click)="recallPreset(name)"
                                    >
                                        {{ name }}
                                    </button>
                                    @if (presets().length > 1) {
                                        <button
                                            icon
                                            matRipple
                                            class="border-error bg-base-100 text-error h-12 w-12 rounded-sm border"
                                            (click)="removePreset(name)"
                                        >
                                            <icon>delete</icon>
                                        </button>
                                    }
                                </div>
                            }
                        } @else {
                            <p
                                class="bg-base-300 w-full rounded-sm p-8 opacity-30"
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
                            class="absolute top-1 right-4"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>add</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div class="flex w-full flex-col px-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="h-14 w-full"
                                    (click)="$event.stopPropagation()"
                                >
                                    <input
                                        matInput
                                        [ngModel]="new_preset()"
                                        (ngModelChange)="new_preset.set($event)"
                                        [placeholder]="
                                            'APP.CONTROL.CAMERA_PRESETS_NEW'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    [disabled]="!new_preset()"
                                    class="w-full"
                                    (click)="
                                        addPreset(new_preset());
                                        new_preset.set('')
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
        } @else {
            <div
                class="bg-base-100 my-2 flex flex-col rounded-sm p-8 text-center shadow-sm"
            >
                <p>{{ 'APP.CONTROL.CAMERAS_EMPTY' | translate }}</p>
            </div>
        }
        @if (active_camera()?.mod) {
            <div hidden>
                <i
                    binding
                    (modelChange)="
                        presets.set(
                            active_camera()?.index
                                ? ($event || [])[active_camera()?.index]
                                : $event || []
                        )
                    "
                    [sys]="id"
                    [mod]="active_camera()?.mod"
                    [bind]="
                        active_camera()?.index ? 'camera_presets' : 'presets'
                    "
                ></i>
            </div>
        }
    `,
    styles: [``],
    imports: [
        BindingDirective,
        FormsModule,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        JoystickComponent,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class CameraTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    private _move_timeout?: ReturnType<typeof setTimeout>;
    private _stop_zoom_timeout?: ReturnType<typeof setTimeout>;

    /** Currently active camera */
    public readonly active_camera = signal<RoomInput | undefined>(undefined);
    /** List of available presets for the active camera */
    public readonly presets = signal<string[]>([]);
    /** Last preset recalled from this panel */
    public readonly preset = signal('');
    /** Current zoom value for camera */
    public zoom: ZoomDirection = ZoomDirection.Stop;
    /** Current panning value for camera */
    public pan: JoystickPan = JoystickPan.Stop;
    /** Current tilting value for camera */
    public tilt: JoystickTilt = JoystickTilt.Stop;
    /** New preset name input */
    public readonly new_preset = signal('');
    /** List of available cameras to select from */
    public readonly camera_list = this._state.available_cameras;
    private readonly _selected_camera = this._state.selected_camera;
    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    public get id(): string {
        return this._state.id;
    }

    constructor() {
        inject(DestroyRef).onDestroy(() => this.stopZoom());
        effect(() => {
            const l = this.camera_list();
            const cam = this._selected_camera();
            this.active_camera.set(l?.find((_) => _.id === cam));
        });
    }

    public selectCamera(camera: RoomInput) {
        this.active_camera.set(camera);
        this.preset.set('');
        selectCamera(this.id, camera.id);
    }

    public recallPreset(preset: string) {
        const camera = this.active_camera();
        if (!camera?.mod) return;
        this.preset.set(preset);
        getModule(this.id, camera.mod).execute('recall', [preset]);
    }

    public addPreset(preset: string) {
        const camera = this.active_camera();
        if (!camera) return;
        getModule(this.id, 'System').execute('add_preset', [preset, camera.id]);
    }

    public removePreset(preset: string) {
        const camera = this.active_camera();
        if (!camera) return;
        getModule(this.id, 'System').execute('remove_preset', [
            preset,
            camera.id,
        ]);
    }

    public moveCamera() {
        const camera = this.active_camera();
        if (!camera) return;
        clearTimeout(this._move_timeout);
        this._move_timeout = setTimeout(
            () => moveCamera(this.id, camera, this.pan, this.tilt),
            50,
        );
    }

    /** Start zooming. Pointer capture makes sure the button receives the release. */
    public async startZoom(dir: 'in' | 'out', e: PointerEvent) {
        (e.currentTarget as Element | null)?.setPointerCapture?.(e.pointerId);
        const camera = this.active_camera();
        if (!camera?.mod) return;
        this.zoom = dir === 'in' ? ZoomDirection.In : ZoomDirection.Out;
        await zoomCamera(this.id, camera, this.zoom).catch(() => null);
    }

    public stopZoom() {
        clearTimeout(this._stop_zoom_timeout);
        this._stop_zoom_timeout = setTimeout(() => {
            if (this.zoom === ZoomDirection.Stop) return;
            const camera = this.active_camera();
            if (!camera?.mod) return;
            this.zoom = ZoomDirection.Stop;
            zoomCamera(this.id, camera, ZoomDirection.Stop);
        }, 50);
    }
}

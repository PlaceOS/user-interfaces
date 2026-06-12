import {
    Component,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { filter } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { DialpadComponent } from '../ui/dialpad.component';
import { VideoCallStateService, VideoLayout } from './video-call-state.service';

@Component({
    selector: '[video-call-page]',
    template: `
        @if (!loading()) {
            <div class="h-full w-full p-2">
                <div class="flex h-1/2 flex-1">
                    <div
                        class="flex flex-1 flex-col items-center justify-center space-y-2 p-2"
                    >
                        @if (camera_list()?.length > 1) {
                            <mat-form-field
                                appearance="outline"
                                class="h-12 w-full"
                            >
                                <mat-select
                                    [ngModel]="selected_camera()"
                                    (ngModelChange)="selectCamera($event)"
                                    placeholder="Select Camera"
                                >
                                    @for (cam of camera_list(); track cam) {
                                        <mat-option [value]="cam.id">
                                            {{ cam.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (present_output() && presentables()) {
                            <mat-form-field
                                appearance="outline"
                                class="h-14 w-full"
                            >
                                <mat-select
                                    ngModel
                                    (ngModelChange)="
                                        setPresentationSource($event)
                                    "
                                    placeholder="Select presentation source"
                                >
                                    @for (opt of presentables(); track opt) {
                                        <mat-option [value]="opt">{{
                                            opt.name
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <p class="pb-2">
                            {{ 'APP.CONTROL.VC_CONTENT_DEST' | translate }}
                        </p>
                        <mat-form-field
                            appearance="outline"
                            class="h-14 w-full"
                        >
                            <mat-select
                                [ngModel]="presentation_mode()"
                                (ngModelChange)="setPresentationMode($event)"
                                placeholder="Select HDMI content destination"
                            >
                                <mat-option value="None">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_HIDE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="Local">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_LOCAL'
                                        | translate
                                }}</mat-option>
                                <mat-option value="Remote">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_ALL'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <p class="pb-2">
                            {{ 'APP.CONTROL.VC_LAYOUT' | translate }}
                        </p>
                        <mat-form-field
                            appearance="outline"
                            class="h-14 w-full"
                        >
                            <mat-select
                                [ngModel]="video_layout()"
                                (ngModelChange)="setVideoLayout($event)"
                                [placeholder]="
                                    'APP.CONTROL.VC_LAYOUT_SELECT' | translate
                                "
                            >
                                @for (layout of video_layouts; track layout) {
                                    <mat-option [value]="layout">
                                        {{ layout }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 items-center justify-center p-2">
                        <dialpad
                            [backspace]="false"
                            (pressed)="sentDTMF($event)"
                        ></dialpad>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center space-y-4 p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="error w-full"
                            (click)="endCall()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>call_end</icon>
                                <span>{{
                                    'APP.CONTROL.VC_END_CALL' | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="toggleMute()"
                            [class.inverse]="!mic_mute()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    mic_mute() ? 'mic_off' : 'mic'
                                }}</icon>
                                <span>{{
                                    (mic_mute()
                                        ? 'APP.CONTROL.VC_MICS_UNMUTE'
                                        : 'APP.CONTROL.VC_MICS_MUTE'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            [class.inverse]="call()?.Status !== 'OnHold'"
                            (click)="toggleOnHold()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    call()?.Status !== 'OnHold'
                                        ? 'stop'
                                        : 'play_arrow'
                                }}</icon>
                                <span>{{
                                    (call()?.Status !== 'OnHold'
                                        ? 'APP.CONTROL.VC_ON_HOLD'
                                        : 'APP.CONTROL.VC_RESUME'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="toggleCamera()"
                            [class.inverse]="show_camera_pip()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    !show_camera_pip()
                                        ? 'visibility_off'
                                        : 'visibility'
                                }}</icon>
                                <span>{{
                                    (show_camera_pip()
                                        ? 'APP.CONTROL.VC_PIP_HIDE'
                                        : 'APP.CONTROL.VC_PIP_SHOW'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-24 text-black"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading() }}</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    imports: [
        FormsModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        DialpadComponent,
    ],
})
export class VideoCallPageComponent extends AsyncHandler implements OnInit {
    private _state = inject(VideoCallStateService);
    private _control = inject(ControlStateService);
    private _router = inject(Router);

    public readonly redirect = input(true);
    public readonly present_output = input('');
    public readonly loading = signal('');
    public readonly call = toSignal(this._state.call, {
        initialValue: null,
    });
    private readonly _show_camera_pip = toSignal(this._state.show_camera_pip, {
        initialValue: null,
    });
    public readonly show_camera_pip = computed(() => !!this._show_camera_pip());
    private readonly _mic_mute = toSignal(this._state.mic_mute, {
        initialValue: null,
    });
    public readonly mic_mute = computed(() => !!this._mic_mute());
    public readonly video_layout = toSignal(this._state.video_layout as never, {
        initialValue: null as VideoLayout | null,
    });
    public readonly presentation_mode = toSignal(
        this._state.presentation_mode as never,
        {
            initialValue: null as 'None' | 'Local' | 'Remote' | null,
        },
    );
    public readonly presentables = toSignal(this._control.presentables$, {
        initialValue: [],
    });
    /** List of available cameras to select from */
    public readonly camera_list = toSignal(this._control.camera_list, {
        initialValue: [],
    });
    public readonly video_layouts = [
        'Auto',
        'Equal',
        'Overlay',
        'Prominent',
        'Single',
    ] satisfies VideoLayout[];

    public readonly selected_camera = toSignal(this._control.selected_camera, {
        initialValue: '',
    });

    public readonly sentDTMF = (d) => this._state.sendDTMF(d);
    public readonly setPresentationSource = (i) =>
        this._control.setRoute(i.id, this.present_output(), false);
    public readonly setPresentationMode = (d) =>
        this._state.setPresentationMode(d);
    public readonly setVideoLayout = (d) => this._state.setVideoLayout(d);
    public readonly toggleCamera = async () =>
        this._state.showCameraPIP(!this.show_camera_pip());
    public readonly toggleMute = async () =>
        this._state.muteMicrophone(!this.mic_mute());
    public readonly toggleOnHold = () => this._state.toggleCallOnHold();
    public readonly endCall = async () => {
        this.loading.set(i18n('APP.CONTROL.VC_LEAVE_LOADING'));
        await this._state.hangup().catch((_) => {
            this.loading.set('');
            notifyError(i18n('APP.CONTROL.VC_LEAVE_ERROR', { error: _ }));
            throw _;
        });
        this._onCallEnded();
    };

    public async ngOnInit() {
        this.loading.set(i18n('APP.CONTROL.VC_LOADING'));
        this.timeout(
            'check_call',
            () => {
                notifyError(i18n('APP.CONTROL.VC_JOIN_ERROR'));
                this._onCallEnded();
            },
            5000,
        );
        await nextValueFrom(this._state.call.pipe(filter((_) => !!_)));
        this.loading.set('');
        this.clearTimeout('check_call');
    }

    public selectCamera(camera: string) {
        const mod = getModule(this._control.id, 'System');
        if (!mod) return;
        mod.execute('selected_camera', [camera]);
    }

    private _onCallEnded() {
        if (this.redirect())
            this._router.navigate(['/panel', this._control.id]);
    }
}

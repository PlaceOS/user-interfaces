import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { filter } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from './video-call-state.service';

@Component({
    selector: '[video-call-page]',
    template: `
        <div class="h-full w-full p-2" *ngIf="!loading; else load_state">
            <div class="flex h-1/2 flex-1">
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-2"
                >
                    <mat-form-field
                        appearance="outline"
                        class="h-12 w-full"
                        *ngIf="(camera_list | async)?.length > 1"
                    >
                        <mat-select
                            [ngModel]="selected_camera"
                            (ngModelChange)="selectCamera($event)"
                            placeholder="Select Camera"
                        >
                            <mat-option
                                *ngFor="let cam of camera_list | async"
                                [value]="cam.id"
                            >
                                {{ cam.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        *ngIf="present_output && (presentables$ | async)"
                        class="h-[3.5rem] w-full"
                    >
                        <mat-select
                            ngModel
                            (ngModelChange)="setPresentationSource($event)"
                            placeholder="Select presentation source"
                        >
                            <mat-option
                                *ngFor="let opt of presentables$ | async"
                                [value]="opt"
                                >{{ opt.name }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                    <p class="pb-2">
                        {{ 'APP.CONTROL.VC_CONTENT_DEST' | translate }}
                    </p>
                    <mat-form-field
                        appearance="outline"
                        class="h-[3.5rem] w-full"
                    >
                        <mat-select
                            [ngModel]="presentation_mode | async"
                            (ngModelChange)="setPresentationMode($event)"
                            placeholder="Select HDMI content destination"
                        >
                            <mat-option value="None">{{
                                'APP.CONTROL.VC_CONTENT_DEST_HIDE' | translate
                            }}</mat-option>
                            <mat-option value="Local">{{
                                'APP.CONTROL.VC_CONTENT_DEST_LOCAL' | translate
                            }}</mat-option>
                            <mat-option value="Remote">{{
                                'APP.CONTROL.VC_CONTENT_DEST_ALL'
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <p class="pb-2">
                        {{ 'APP.CONTROL.VC_LAYOUT' | translate }}
                    </p>
                    <mat-form-field
                        appearance="outline"
                        class="h-[3.5rem] w-full"
                    >
                        <mat-select
                            [ngModel]="video_layout | async"
                            (ngModelChange)="setVideoLayout($event)"
                            [placeholder]="
                                'APP.CONTROL.VC_LAYOUT_SELECT' | translate
                            "
                        >
                            <mat-option
                                *ngFor="let layout of video_layouts"
                                [value]="layout"
                            >
                                {{ layout }}
                            </mat-option>
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
                            <app-icon>call_end</app-icon>
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
                        [class.inverse]="!(mic_mute | async)"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>{{
                                (mic_mute | async) ? 'mic_off' : 'mic'
                            }}</app-icon>
                            <span>{{
                                ((mic_mute | async)
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
                        [class.inverse]="(call | async)?.Status !== 'OnHold'"
                        (click)="toggleOnHold()"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>{{
                                (call | async)?.Status !== 'OnHold'
                                    ? 'stop'
                                    : 'play_arrow'
                            }}</app-icon>
                            <span>{{
                                ((call | async)?.Status !== 'OnHold'
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
                        [class.inverse]="show_camera_pip | async"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>{{
                                !(show_camera_pip | async)
                                    ? 'visibility_off'
                                    : 'visibility'
                            }}</app-icon>
                            <span>{{
                                ((show_camera_pip | async)
                                    ? 'APP.CONTROL.VC_PIP_HIDE'
                                    : 'APP.CONTROL.VC_PIP_SHOW'
                                ) | translate
                            }}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-24 text-black"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    standalone: false,
})
export class VideoCallPageComponent extends AsyncHandler implements OnInit {
    @Input() public redirect = true;
    @Input() public present_output = '';
    public loading = '';
    public readonly call = this._state.call;
    public readonly show_camera_pip = this._state.show_camera_pip;
    public readonly mic_mute = this._state.mic_mute;
    public readonly video_layout = this._state.video_layout;
    public readonly presentation_mode = this._state.presentation_mode;
    public readonly presentables$ = this._control.presentables$;
    /** List of available cameras to select from */
    public readonly camera_list = this._control.camera_list;
    public readonly video_layouts = [
        'Auto',
        'Equal',
        'Overlay',
        'Prominent',
        'Single',
    ];

    public readonly selected_camera = this._control.selected_camera;

    public readonly sentDTMF = (d) => this._state.sendDTMF(d);
    public readonly setPresentationSource = (i) =>
        this._control.setRoute(i.id, this.present_output, false);
    public readonly setPresentationMode = (d) =>
        this._state.setPresentationMode(d);
    public readonly setVideoLayout = (d) => this._state.setVideoLayout(d);
    public readonly toggleCamera = async () =>
        this._state.showCameraPIP(!(await nextValueFrom(this.show_camera_pip)));
    public readonly toggleMute = async () =>
        this._state.muteMicrophone(!(await nextValueFrom(this.mic_mute)));
    public readonly toggleOnHold = () => this._state.toggleCallOnHold();
    public readonly endCall = async () => {
        this.loading = i18n('APP.CONTROL.VC_LEAVE_LOADING');
        await this._state.hangup().catch((_) => {
            this.loading = '';
            notifyError(i18n('APP.CONTROL.VC_LEAVE_ERROR', { error: _ }));
            throw _;
        });
        this._onCallEnded();
    };

    constructor(
        private _state: VideoCallStateService,
        private _control: ControlStateService,
        private _router: Router,
    ) {
        super();
    }

    public async ngOnInit() {
        this.loading = i18n('APP.CONTROL.VC_LOADING');
        this.timeout(
            'check_call',
            () => {
                notifyError(i18n('APP.CONTROL.VC_JOIN_ERROR'));
                this._onCallEnded();
            },
            5000,
        );
        await nextValueFrom(this._state.call.pipe(filter((_) => !!_)));
        this.loading = '';
        this.clearTimeout('check_call');
    }

    public selectCamera(camera: string) {
        const mod = getModule(this._control.id, 'System');
        if (!mod) return;
        mod.execute('selected_camera', [camera]);
    }

    private _onCallEnded() {
        if (this.redirect) this._router.navigate(['/panel', this._control.id]);
    }
}

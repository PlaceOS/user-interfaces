import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, notifyError } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { filter, take } from 'rxjs/operators';
import { ControlStateService, RoomInput } from '../control-state.service';
import { VideoCallStateService } from './video-call-state.service';

@Component({
    selector: '[video-call-page]',
    template: `
        <div class="p-2 h-full w-full" *ngIf="!loading; else load_state">
            <div class="flex h-1/2 flex-1">
                <div
                    class="flex-1 p-2 flex flex-col items-center justify-center space-y-2"
                >
                    <mat-form-field
                        appearance="outline"
                        class="w-full h-12"
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
                        class="w-full h-[3.5rem]"
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
                    <p class="pb-2">HDMI Content Destination:</p>
                    <mat-form-field
                        appearance="outline"
                        class="w-full h-[3.5rem]"
                    >
                        <mat-select
                            [ngModel]="presentation_mode | async"
                            (ngModelChange)="setPresentationMode($event)"
                            placeholder="Select HDMI content destination"
                        >
                            <mat-option value="None"
                                >Hide Presentation</mat-option
                            >
                            <mat-option value="Local"
                                >Present Locally</mat-option
                            >
                            <mat-option value="Remote"
                                >Present to All</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                    <p class="pb-2">Video Layout:</p>
                    <mat-form-field
                        appearance="outline"
                        class="w-full h-[3.5rem]"
                    >
                        <mat-select
                            [ngModel]="video_layout | async"
                            (ngModelChange)="setVideoLayout($event)"
                            placeholder="Select Video layout"
                        >
                            <mat-option
                                *ngFor="let layout of video_layouts"
                                [value]="layout"
                                >{{ layout }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex-1 p-2 flex items-center justify-center">
                    <dialpad
                        [backspace]="false"
                        (pressed)="sentDTMF($event)"
                    ></dialpad>
                </div>
                <div
                    class="flex-1 p-2 flex flex-col items-center justify-center space-y-4"
                >
                    <button
                        btn
                        matRipple
                        class="error w-full"
                        (click)="endCall()"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>call_end</app-icon>
                            <span>End Call</span>
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
                                (mic_mute | async)
                                    ? 'Unmute Microphones'
                                    : 'Mute Microphones'
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
                                (call | async)?.Status !== 'OnHold'
                                    ? 'Place on Hold'
                                    : 'Resume Call'
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
                                (show_camera_pip | async)
                                    ? 'Hide Camera PIP'
                                    : 'Show Camera PIP'
                            }}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 text-black p-24"
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
})
export class VideoCallPageComponent extends AsyncHandler {
    @Input() public redirect = true;
    @Input() public present_output = '';
    public loading = 'Loading call details...';
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
        this._state.showCameraPIP(
            !(await this.show_camera_pip.pipe(take(1)).toPromise())
        );
    public readonly toggleMute = async () =>
        this._state.muteMicrophone(
            !(await this.mic_mute.pipe(take(1)).toPromise())
        );
    public readonly toggleOnHold = () => this._state.toggleCallOnHold();
    public readonly endCall = async () => {
        this.loading = 'Hanging up call...';
        await this._state.hangup().catch((_) => {
            this.loading = '';
            notifyError('Error hanging up call.');
            throw _;
        });
        this._onCallEnded();
    };

    constructor(
        private _state: VideoCallStateService,
        private _control: ControlStateService,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        this.timeout(
            'check_call',
            () => {
                notifyError('Unable to find active video conference.');
                this._onCallEnded();
            },
            5000
        );
        await this._state.call
            .pipe(
                filter((_) => !!_),
                take(1)
            )
            .toPromise();
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass, notifyError } from '@placeos/common';
import { filter, take } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from './video-call-state.service';

@Component({
    selector: '[video-call-page]',
    template: `
        <div
            class="text-black p-2 h-full w-full"
            *ngIf="!loading; else load_state"
        >
            <h2 class="w-full text-center font-medium text-xl">Video Conference</h2>
            <div class="flex h-1/2 flex-1">
                <div
                    class="flex-1 p-2 flex flex-col items-center justify-center space-y-4"
                >
                    <p>Content Destination:</p>
                    <button
                        mat-button
                        class="w-full"
                        [class.inverse]="(presentation_mode | async) !== 'None'"
                        (click)="setPresentationMode('None')"
                    >
                        None
                    </button>
                    <button
                        mat-button
                        class="w-full"
                        [class.inverse]="
                            (presentation_mode | async) !== 'Local'
                        "
                        (click)="setPresentationMode('Local')"
                    >
                        Local Only
                    </button>
                    <button
                        mat-button
                        class="w-full"
                        [class.inverse]="
                            (presentation_mode | async) !== 'Remote'
                        "
                        (click)="setPresentationMode('Remote')"
                    >
                        All Sites
                    </button>
                </div>
                <div class="flex-1 p-2 flex items-center justify-center">
                    <dialpad (pressed)="sentDTMF($event)"></dialpad>
                </div>
                <div
                    class="flex-1 p-2 flex flex-col items-center justify-center space-y-4"
                >
                    <button
                        mat-button
                        class="bg-error w-full"
                        (click)="endCall()"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>call_end</app-icon>
                            <span>End Call</span>
                        </div>
                    </button>
                    <button
                        mat-button
                        class="w-full"
                        (click)="toggleMute()"
                        [class.inverse]="mic_mute | async"
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
                        mat-button
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
                        mat-button
                        class="w-full"
                        (click)="toggleCamera()"
                        [class.inverse]="!(show_camera_pip | async)"
                    >
                        <div class="flex items-center space-x-4">
                            <app-icon>{{
                                (show_camera_pip | async)
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
                class="w-full h-full flex flex-col items-center justify-center space-y-2 text-black"
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
export class VideoCallPageComponent extends BaseClass {
    public loading = 'Loading call details...';
    public readonly call = this._state.call;
    public readonly show_camera_pip = this._state.show_camera_pip;
    public readonly mic_mute = this._state.mic_mute;
    public readonly video_layout = this._state.video_layout;
    public readonly presentation_mode = this._state.presentation_mode;

    public readonly sentDTMF = (d) => this._state.sendDTMF(d);
    public readonly setPresentationMode = (d) =>
        this._state.setPresentationMode(d);
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

    private _onCallEnded() {
        this._router.navigate(['/panel', this._control.id]);
    }
}

import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    Signal,
} from '@angular/core';
import { AsyncHandler, i18n, notifyError } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

export type VideoLayout = 'Auto' | 'Equal' | 'Overlay' | 'Prominent' | 'Single';
export type PresentationMode = 'None' | 'Local' | 'Remote';
export type CallStatus =
    | 'Idle'
    | 'Dialling'
    | 'Ringing'
    | 'Connecting'
    | 'Connected'
    | 'Disconnecting'
    | 'OnHold'
    | 'EarlyMedia'
    | 'Preserved'
    | 'RemotePreserved';

export interface VideoCallDetails {
    AnswerState: string;
    CallType: string;
    CallbackNumber: string;
    DeviceType: string;
    Direction: string;
    DisplayName: string;
    Duration: number;
    'Encryption/Type': string;
    FacilityServiceId: number;
    HoldReason: string;
    PlacedOnHold: boolean;
    Protocol: string;
    ReceiveCallRate: number;
    RemoteNumber: string;
    Status: CallStatus;
    TransmitCallRate: number;
    Ice: string;
}

/** Statuses that do not count as a live call */
const INACTIVE_STATUSES: readonly CallStatus[] = ['Idle', 'Disconnecting'];

@Injectable({
    providedIn: 'root',
})
export class VideoCallStateService extends AsyncHandler {
    private _control = inject(ControlStateService);

    public readonly connected = this._bindTo<VideoCallDetails | null>(
        'connected',
    );
    private readonly _calls =
        this._bindTo<Record<string, VideoCallDetails>>('calls');
    public readonly call = computed<VideoCallDetails | null>(() => {
        const calls = this._calls();
        for (const key in calls) {
            const status = calls[key]?.Status;
            if (status && !INACTIVE_STATUSES.includes(status))
                return calls[key];
        }
        return null;
    });
    public readonly mic_mute = this._bindTo<boolean>('mic_mute');
    public readonly presentation_mode =
        this._bindTo<PresentationMode>('presentation_mode');
    public readonly video_layout = this._bindTo<VideoLayout>('video_layout');
    public readonly show_camera_pip = this._bindTo<boolean>('selfview');
    private readonly _speaker_track =
        this._bindTo<Record<string, boolean>>('speaker_track');
    public readonly speaker_track = computed(
        () =>
            (this._speaker_track() || {})[
                'Status/Cameras/SpeakerTrack/Availability'
            ],
    );

    public showCameraPIP(state: boolean) {
        return this._exec('show_camera_pip', [state]);
    }

    public muteMicrophone(state: boolean) {
        return this._exec('mic_mute', [state]);
    }

    public setVideoLayout(layout: VideoLayout) {
        return this._exec('video_layout', [layout]);
    }

    public setPresentationMode(mode: PresentationMode) {
        return this._exec('presentation_mode', [mode]);
    }

    public async hangup() {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('hangup', []);
    }

    public sendDTMF(digit: string) {
        return this._exec('dtmf_send', [digit]);
    }

    public toggleCallOnHold() {
        const call = this.call();
        if (!call) return;
        return this._exec(
            call.Status === 'OnHold' ? 'call_resume' : 'call_place_on_hold',
        );
    }

    /** Run a VidConf method. Shows an error and resolves when it fails. */
    private async _exec(method: string, args: unknown[] = []) {
        const id = this._control.id;
        if (!id) return;
        try {
            return await getModule(id, 'VidConf').execute(method, args);
        } catch (error) {
            notifyError(i18n('APP.CONTROL.VC_COMMAND_ERROR', { error }));
        }
    }

    /**
     * Create an Angular signal that mirrors a video conferencing status
     * variable binding, rebinding whenever the active system changes.
     */
    private _bindTo<T>(name: string, mod_name = 'VidConf'): Signal<T | null> {
        const value = signal<T | null>(null);
        effect((onCleanup) => {
            const id = this._control.system_id();
            if (!id) {
                value.set(null);
                return;
            }
            const binding = getModule(id, mod_name).variable(name);
            const unbind = binding.bind();
            const listener = binding.listen();
            const update = () => value.set(listener() ?? null);
            update();
            const unsubscribe = listener.subscribe(() => update());
            onCleanup(() => {
                unsubscribe();
                unbind();
            });
        });
        return value.asReadonly();
    }
}

import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    Signal,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

export type VideoLayout = 'Auto' | 'Equal' | 'Overlay' | 'Prominent' | 'Single';
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
    DisplayName: number;
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
            if (calls[key].Status) return calls[key];
        }
        return null;
    });
    public readonly mic_mute = this._bindTo<VideoCallDetails | null>(
        'mic_mute',
    );
    public readonly presentation_mode = this._bindTo<VideoCallDetails | null>(
        'presentation_mode',
    );
    public readonly video_layout = this._bindTo<VideoCallDetails | null>(
        'video_layout',
    );
    public readonly show_camera_pip = this._bindTo<VideoCallDetails | null>(
        'selfview',
    );
    private readonly _speaker_track =
        this._bindTo<Record<string, boolean>>('speaker_track');
    public readonly speaker_track = computed(
        () =>
            (this._speaker_track() || {})[
                'Status/Cameras/SpeakerTrack/Availability'
            ],
    );

    public async showCameraPIP(state: boolean) {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('show_camera_pip', [state]);
    }

    public async muteMicrophone(state: boolean) {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('mic_mute', [state]);
    }

    public async setVideoLayout(layout: VideoLayout) {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('video_layout', [layout]);
    }

    public async setPresentationMode(mod: 'None' | 'Local' | 'Remote') {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('presentation_mode', [mod]);
    }

    public async hangup() {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('hangup', []);
    }

    public async sendDTMF(digit: string) {
        const id = this._control.id;
        if (!id) return;
        return getModule(id, 'VidConf').execute('dtmf_send', [digit]);
    }

    public async toggleCallOnHold() {
        const id = this._control.id;
        if (!id) return;
        const call = this.call();
        if (!call) return;
        return getModule(id, 'VidConf').execute(
            call.Status === 'OnHold' ? 'call_resume' : 'call_place_on_hold',
            [],
        );
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

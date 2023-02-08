import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import {
    VideoCallDetails,
    VideoLayout,
} from 'libs/mocks/src/lib/realtime/video-conference';
import { Observable } from 'rxjs';
import {
    distinctUntilChanged,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';

@Injectable({
    providedIn: 'root',
})
export class VideoCallStateService extends AsyncHandler {
    public readonly connected: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'connected')),
            shareReplay(1)
        );
    public readonly call: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'calls')),
            map((_) => {
                for (const key in _) {
                    if (_[key].Status) return _[key];
                }
                return null;
            }),
            shareReplay(1)
        );
    public readonly mic_mute: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'mic_mute')),
            shareReplay(1)
        );
    public readonly presentation_mode: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'presentation_mode')),
            shareReplay(1)
        );
    public readonly video_layout: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'video_layout')),
            shareReplay(1)
        );
    public readonly show_camera_pip: Observable<VideoCallDetails | null> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'selfview')),
            shareReplay(1)
        );
    public readonly speaker_track: Observable<boolean> =
        this._control.system_id.pipe(
            distinctUntilChanged(),
            switchMap((id) => this.bindTo(id, 'speaker_track')),
            map((_) => (_ || {})['Status/Cameras/SpeakerTrack/Availability']),
            shareReplay(1)
        );

    constructor(private _control: ControlStateService) {
        super();
    }

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
        const call = await this.call.pipe(take(1)).toPromise();
        if (!call) return;
        return getModule(id, 'VidConf').execute(
            call.Status === 'OnHold' ? 'call_resume' : 'call_place_on_hold',
            []
        );
    }

    private bindTo(id: string, name: string, mod_name: string = 'VidConf') {
        const mod = getModule(id, mod_name);
        const binding = mod.binding(name);
        const unbind = binding.bind();
        this.subscription(`binding:${name}`, unbind);
        return binding.listen();
    }
}

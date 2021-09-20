import { HashMap } from '@placeos/common';

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

class VideoConferenceModule {
    mic_mute: boolean = false;
    selfview: boolean = false;
    video_layout: VideoLayout = 'Auto';
    presentation_mode: 'None' | 'Local' | 'Remote' = 'None';
    presentation: false | 'Sending';
    calls: Record<string, VideoCallDetails> = {
        test: {
            Status: 'Connected',
        },
    } as any;

    $show_camera_pip(visible: boolean) {
        this.selfview = visible;
    }

    $mic_mute(visible: boolean) {
        this.mic_mute = visible;
    }
    $presentation_mode(state: 'None' | 'Local' | 'Remote') {
        this.presentation_mode = state;
    }
    $hangup() {}
    $call_place_on_hold() {
        for (const key in this.calls) {
            if (this.calls[key].Status) {
                this.calls[key].Status = 'OnHold';
                this.calls = { ...this.calls };
                return;
            }
        }
    }
    $call_resume() {
        for (const key in this.calls) {
            if (this.calls[key].Status) {
                this.calls[key].Status = 'Idle';
                this.calls = { ...this.calls };
                return;
            }
        }
    }
    $video_layout(layout: VideoLayout) {
        this.video_layout = layout;
    }
    $dtmf_send(digit: string) {}
    $dial(dial_number: string) {
        return new Promise<void>((r) => setTimeout(() => r(), 1000));
    }

    constructor(_) {}
}

export const createVideoConferenceModule = (
    space: HashMap = {},
    overrides: HashMap = {}
) => new VideoConferenceModule({ ...space, ...overrides });

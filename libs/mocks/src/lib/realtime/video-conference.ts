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
    presentation: false | 'Sending' = false;
    calls: Record<string, VideoCallDetails> = {};
    call_status: CallStatus = 'Idle';

    // Track DTMF digits sent
    dtmf_history: string[] = [];

    $show_camera_pip(visible: boolean) {
        this.selfview = visible;
    }

    $mic_mute(state: boolean) {
        this.mic_mute = state;
    }

    $presentation_mode(state: 'None' | 'Local' | 'Remote') {
        this.presentation_mode = state;
        this.presentation = state === 'Local' ? 'Sending' : false;
    }

    $hangup() {
        this.calls = {};
        this.call_status = 'Idle';
        this.presentation_mode = 'None';
        this.presentation = false;
    }

    $call_place_on_hold() {
        for (const key in this.calls) {
            if (this.calls[key].Status) {
                this.calls[key].Status = 'OnHold';
                this.calls[key].PlacedOnHold = true;
                this.calls = { ...this.calls };
                this.call_status = 'OnHold';
                return;
            }
        }
    }

    $call_resume() {
        for (const key in this.calls) {
            if (this.calls[key].Status) {
                this.calls[key].Status = 'Connected';
                this.calls[key].PlacedOnHold = false;
                this.calls = { ...this.calls };
                this.call_status = 'Connected';
                return;
            }
        }
    }

    $video_layout(layout: VideoLayout) {
        this.video_layout = layout;
    }

    $dtmf_send(digit: string) {
        this.dtmf_history.push(digit);
    }

    $dial(dial_number: string) {
        this.call_status = 'Dialling';
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                this.call_status = 'Connected';
                const call_id = `call-${Date.now()}`;
                this.calls = {
                    [call_id]: {
                        AnswerState: 'Answered',
                        CallType: 'Video',
                        CallbackNumber: dial_number,
                        DeviceType: 'Endpoint',
                        Direction: 'Outgoing',
                        DisplayName: 0,
                        Duration: 0,
                        'Encryption/Type': 'AES-256',
                        FacilityServiceId: 0,
                        HoldReason: '',
                        PlacedOnHold: false,
                        Protocol: 'SIP',
                        ReceiveCallRate: 4096,
                        RemoteNumber: dial_number,
                        Status: 'Connected',
                        TransmitCallRate: 4096,
                        Ice: '',
                    },
                };
                resolve();
            }, 1000);
        });
    }

    constructor(_) {}
}

export const createVideoConferenceModule = (
    space: HashMap = {},
    overrides: HashMap = {},
) => new VideoConferenceModule({ ...space, ...overrides });

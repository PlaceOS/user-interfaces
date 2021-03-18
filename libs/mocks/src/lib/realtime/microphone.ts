import { HashMap } from '@user-interfaces/common';

class MicrophoneModule {
    mute: boolean;
    volume: number;

    $mute(state: boolean = true) {
        this.mute = state;
    }

    $volume(value: number) {
        this.volume = value;
    }

    constructor(_) {}
}

export const createMicrophoneModule = (
    space: HashMap,
    overrides: HashMap = {}
) => new MicrophoneModule({ ...space, ...overrides });

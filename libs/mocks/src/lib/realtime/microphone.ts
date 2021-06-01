import { HashMap, randomInt } from '@placeos/common';

class MicrophoneModule {
    mute: boolean;
    volume: number;

    $mute(state: boolean = true) {
        this.mute = state;
    }

    $volume(value: number) {
        this.volume = value;
    }

    constructor(_) {
        this.volume = randomInt(100);
    }
}

export const createMicrophoneModule = (
    space: HashMap,
    overrides: HashMap = {}
) => new MicrophoneModule({ ...space, ...overrides });

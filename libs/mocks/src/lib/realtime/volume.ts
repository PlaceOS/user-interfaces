import { randomInt } from '@placeos/common';

/** Mock for modules with mute and volume controls (Display and Microphone) */
export class VolumeModule {
    mute: boolean;
    volume = randomInt(100);

    $mute(state: boolean = true) {
        this.mute = state;
    }

    $volume(value: number) {
        this.volume = value;
    }
}

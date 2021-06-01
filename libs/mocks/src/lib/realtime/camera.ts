import { HashMap } from '@placeos/common';

export enum CameraTilt {
    Down,
    Up,
    Stop,
}

export enum CameraPan {
    Left,
    Right,
    Stop,
}

class CameraModule {
    pan: number;
    tilt: number;
    zoom: number;

    pan_speed: number;
    tilt_speed: number;
    zoom_speed: number;

    presets: string[];

    constructor(_) {
        this.presets = ['Preset One', 'Preset 2', 'Preset Three'];
    }

    $pan(dir: CameraPan) {}

    $tilt(tilt: CameraTilt) {}

    $recall(name: string) {}

    $save_preset(name: string) {}
}

export const createCameraModule = (space: HashMap, overrides: HashMap = {}) =>
    new CameraModule({ ...space, ...overrides });

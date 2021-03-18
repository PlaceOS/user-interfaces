import { HashMap } from '@user-interfaces/common';

enum CameraTilt {
    Down,
    Up,
    Stop,
}

enum CameraPan {
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

    constructor(_) {}

    $pan(dir: CameraPan) {}

    $tilt(tilt: CameraTilt) {}
}

export const createCameraModule = (space: HashMap, overrides: HashMap = {}) =>
    new CameraModule({ ...space, ...overrides });

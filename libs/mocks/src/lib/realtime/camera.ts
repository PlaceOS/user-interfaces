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
    pan: number = 0;
    tilt: number = 0;
    zoom: number = 50;

    pan_speed: number = 5;
    tilt_speed: number = 5;
    zoom_speed: number = 5;

    presets: string[];

    // Track if camera is currently moving
    moving: boolean = false;

    constructor(_) {
        this.presets = ['Preset One', 'Preset 2', 'Preset Three', 'Wide Shot', 'Close Up'];
    }

    $pan(dir: CameraPan) {
        if (dir === CameraPan.Left) {
            this.pan = Math.max(-100, this.pan - this.pan_speed);
        } else if (dir === CameraPan.Right) {
            this.pan = Math.min(100, this.pan + this.pan_speed);
        }
        this.moving = dir !== CameraPan.Stop;
    }

    $tilt(dir: CameraTilt) {
        if (dir === CameraTilt.Up) {
            this.tilt = Math.min(100, this.tilt + this.tilt_speed);
        } else if (dir === CameraTilt.Down) {
            this.tilt = Math.max(-100, this.tilt - this.tilt_speed);
        }
        this.moving = dir !== CameraTilt.Stop;
    }

    $zoom(direction: 'in' | 'out' | 'stop') {
        if (direction === 'in') {
            this.zoom = Math.min(100, this.zoom + this.zoom_speed);
        } else if (direction === 'out') {
            this.zoom = Math.max(0, this.zoom - this.zoom_speed);
        }
    }

    $recall(name: string) {
        // Simulate recalling a preset position
        if (this.presets.includes(name)) {
            this.pan = 0;
            this.tilt = 0;
            this.zoom = 50;
        }
    }

    $save_preset(name: string) {
        if (!this.presets.includes(name)) {
            this.presets = [...this.presets, name];
        }
    }
}

export const createCameraModule = (space: HashMap, overrides: HashMap = {}) =>
    new CameraModule({ ...space, ...overrides });

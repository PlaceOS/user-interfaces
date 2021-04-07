import { HashMap, randomInt } from "@placeos/common";

let interval;

export class CaptureModule {

    status: 'playing' | 'stopped' | 'paused' = 'stopped';
    title: string;
    live: boolean = false;
    remaining: number;
    current: number;
    next: number;

    constructor(_) {
        this.remaining = randomInt(24 * 60 * 60);
    }

    $start() {
        this.status = 'playing';
        interval = setInterval(() => {
            if (this.remaining < 1) clearInterval(interval);
            this.remaining = this.remaining - 1;
            this.current = this.current + 1;
        }, 3000);
    }

    $pause() {
        this.status = 'paused';
        clearInterval(interval);
    }

    $resume() {
        this.$start();
    }

    $stop() {
        this.status = 'stopped';
        this.current = 0;
        clearInterval(interval);
    }

}

export const createCaptureModule = (space: HashMap, overrides: HashMap = {}) =>
    new CaptureModule({ ...space, ...overrides });

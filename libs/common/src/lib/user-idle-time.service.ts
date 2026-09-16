import { Injectable, signal } from '@angular/core';

const EVENT_NAMES = [
    'keydown',
    'mousemove',
    'pointermove',
    'touchmove',
    'scroll',
    'wheel',
] as const;

@Injectable({
    providedIn: 'root',
})
export class UserIdleTimeService {
    private readonly _last_action = signal(Date.now());
    private readonly _update = () => this._last_action.set(Date.now());
    private _listening = false;

    public readonly last_action = this._last_action.asReadonly();
    public readonly idle_time = () => Date.now() - this._last_action();

    public startListening(): () => void {
        this.stopListening();
        this._last_action.set(Date.now());
        this._listening = true;
        for (const name of EVENT_NAMES) {
            document.body.addEventListener(name, this._update, {
                passive: true,
            });
        }
        return () => this.stopListening();
    }

    public stopListening(): void {
        if (!this._listening) return;
        this._listening = false;
        for (const name of EVENT_NAMES) {
            document.body.removeEventListener(name, this._update);
        }
    }

    /** Resolve true after no user input for the requested time. */
    public idleFor(
        time_ms: number,
        abort_signal?: AbortSignal,
    ): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (abort_signal?.aborted) {
                resolve(false);
                return;
            }

            let timer: ReturnType<typeof setTimeout> | null = null;
            let settled = false;
            const stop = this.startListening();

            const cleanup = () => {
                if (timer) clearTimeout(timer);
                timer = null;
                stop();
                abort_signal?.removeEventListener('abort', cancel);
            };
            const finish = (did_idle: boolean) => {
                if (settled) return;
                settled = true;
                cleanup();
                resolve(did_idle);
            };
            const check = () => {
                const remaining = time_ms - this.idle_time();
                if (remaining <= 0) {
                    finish(true);
                    return;
                }
                timer = setTimeout(check, remaining);
            };
            const cancel = () => finish(false);

            abort_signal?.addEventListener('abort', cancel, { once: true });
            timer = setTimeout(check, Math.max(0, time_ms));
        });
    }
}

import { DestroyRef, inject, Signal, signal } from '@angular/core';
import { startOfMinute } from 'date-fns';

/**
 * Current time rounded down to the minute, as epoch milliseconds. The signal
 * changes once per minute, at the start of the minute, so templates that show
 * the clock refresh only when the shown time changes. Call in an injection
 * context. The timer stops when the context is destroyed.
 */
export function minuteClock(): Signal<number> {
    const now = signal(startOfMinute(Date.now()).valueOf());
    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
        // Wake just after the next minute starts
        const delay = 60_000 - (Date.now() % 60_000) + 50;
        timer = setTimeout(() => {
            now.set(startOfMinute(Date.now()).valueOf());
            schedule();
        }, delay);
    };
    schedule();
    inject(DestroyRef).onDestroy(() => clearTimeout(timer));
    return now.asReadonly();
}

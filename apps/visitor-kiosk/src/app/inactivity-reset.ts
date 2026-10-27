import { DestroyRef, inject, Signal, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { settingSignal } from '@placeos/common';

import { CheckinStateService } from './checkin/checkin-state.service';

/** Default for the `inactivity_timeout_secs` setting */
export const DEFAULT_INACTIVITY_TIMEOUT_SECS = 120;
/** Time before the reset that the kiosk warns the visitor (WCAG 2.2.1) */
export const IDLE_WARNING_SECS = 20;
/** Routes that can stay open with no visitor activity */
const IDLE_ROUTES = ['/welcome', '/bootstrap', '/unauthorised'];
/** Events that show a visitor is using the kiosk */
const ACTIVITY_EVENTS = ['pointerdown', 'keydown', 'wheel'] as const;

/** State of the inactivity reset, for the warning that the app shows */
export interface IdleReset {
    /** Seconds until the reset while the warning shows, otherwise `0` */
    readonly warning_secs: Signal<number>;
    /** Restart the timeout, which also hides the warning */
    readonly stay: () => void;
}

/**
 * Return the kiosk to the welcome page when a visitor leaves it mid-flow.
 * This stops the camera on the scan pages and removes visitor details from
 * the screen. The `inactivity_timeout_secs` setting sets the delay. A value
 * of `0` turns the reset off. The warning starts `IDLE_WARNING_SECS` before
 * the reset, so the visitor can ask for more time. Call in an injection
 * context.
 */
export function returnToWelcomeWhenIdle(): IdleReset {
    const router = inject(Router);
    const checkin = inject(CheckinStateService);
    const timeout_secs = settingSignal<number>(
        'inactivity_timeout_secs',
        DEFAULT_INACTIVITY_TIMEOUT_SECS,
    );
    const warning_secs = signal(0);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let warning_timer: ReturnType<typeof setTimeout> | undefined;
    let countdown: ReturnType<typeof setInterval> | undefined;

    const isIdleRoute = () => {
        const path = router.url.split('?')[0];
        return IDLE_ROUTES.some(
            (route) => path === route || path.startsWith(`${route}/`),
        );
    };
    const clear = () => {
        clearTimeout(timer);
        clearTimeout(warning_timer);
        clearInterval(countdown);
        timer = warning_timer = countdown = undefined;
        warning_secs.set(0);
    };
    const restart = () => {
        clear();
        const secs = timeout_secs();
        if (!(secs > 0) || isIdleRoute()) return;
        const warn_secs = Math.min(IDLE_WARNING_SECS, secs);
        warning_timer = setTimeout(
            () => {
                warning_secs.set(warn_secs);
                // Stops at 1, because the reset clears the warning at 0
                countdown = setInterval(
                    () => warning_secs.update((left) => Math.max(left - 1, 1)),
                    1000,
                );
            },
            (secs - warn_secs) * 1000,
        );
        timer = setTimeout(() => {
            clear();
            if (isIdleRoute()) return;
            checkin.clear();
            router.navigate(['/welcome']);
        }, secs * 1000);
    };

    const navigation = router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) restart();
    });
    for (const name of ACTIVITY_EVENTS) {
        document.addEventListener(name, restart, {
            capture: true,
            passive: true,
        });
    }
    inject(DestroyRef).onDestroy(() => {
        clear();
        navigation.unsubscribe();
        for (const name of ACTIVITY_EVENTS) {
            document.removeEventListener(name, restart, { capture: true });
        }
    });
    return { warning_secs: warning_secs.asReadonly(), stay: restart };
}

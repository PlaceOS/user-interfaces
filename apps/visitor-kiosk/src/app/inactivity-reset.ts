import { DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { settingSignal } from '@placeos/common';

import { CheckinStateService } from './checkin/checkin-state.service';

/** Default for the `inactivity_timeout_secs` setting */
export const DEFAULT_INACTIVITY_TIMEOUT_SECS = 120;
/** Routes that can stay open with no visitor activity */
const IDLE_ROUTES = ['/welcome', '/bootstrap', '/unauthorised'];
/** Events that show a visitor is using the kiosk */
const ACTIVITY_EVENTS = ['pointerdown', 'keydown', 'wheel'] as const;

/**
 * Return the kiosk to the welcome page when a visitor leaves it mid-flow.
 * This stops the camera on the scan pages and removes visitor details from
 * the screen. The `inactivity_timeout_secs` setting sets the delay. A value
 * of `0` turns the reset off. Call in an injection context.
 */
export function returnToWelcomeWhenIdle(): void {
    const router = inject(Router);
    const checkin = inject(CheckinStateService);
    const timeout_secs = settingSignal<number>(
        'inactivity_timeout_secs',
        DEFAULT_INACTIVITY_TIMEOUT_SECS,
    );
    let timer: ReturnType<typeof setTimeout> | undefined;

    const isIdleRoute = () => {
        const path = router.url.split('?')[0];
        return IDLE_ROUTES.some(
            (route) => path === route || path.startsWith(`${route}/`),
        );
    };
    const restart = () => {
        clearTimeout(timer);
        timer = undefined;
        const secs = timeout_secs();
        if (!(secs > 0) || isIdleRoute()) return;
        timer = setTimeout(() => {
            timer = undefined;
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
        clearTimeout(timer);
        navigation.unsubscribe();
        for (const name of ACTIVITY_EVENTS) {
            document.removeEventListener(name, restart, { capture: true });
        }
    });
}

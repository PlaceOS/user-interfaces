import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { Subject } from 'rxjs';

import { CheckinStateService } from '../app/checkin/checkin-state.service';
import { IdleReset, returnToWelcomeWhenIdle } from '../app/inactivity-reset';

describe('returnToWelcomeWhenIdle', () => {
    const events = new Subject<unknown>();
    const router = { url: '/welcome', events, navigate: vi.fn() };
    const checkin = { clear: vi.fn() };
    let idle: IdleReset;

    function navigateTo(url: string) {
        router.url = url;
        events.next(new NavigationEnd(1, url, url));
    }

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        settingSignal<number>('inactivity_timeout_secs', 120).set(120);
        TestBed.configureTestingModule({
            providers: [
                { provide: Router, useValue: router },
                { provide: CheckinStateService, useValue: checkin },
            ],
        });
        idle = runInInjectionContext(TestBed.inject(Injector), () =>
            returnToWelcomeWhenIdle(),
        );
    });

    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
    });

    it('should return to the welcome page after the timeout', () => {
        navigateTo('/checkin/scan');
        vi.advanceTimersByTime(119_999);
        expect(router.navigate).not.toHaveBeenCalled();
        vi.advanceTimersByTime(1);
        expect(checkin.clear).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['/welcome']);
    });

    it('should restart the timeout when the visitor touches the screen', () => {
        navigateTo('/register');
        vi.advanceTimersByTime(100_000);
        document.dispatchEvent(new Event('pointerdown'));
        vi.advanceTimersByTime(100_000);
        expect(router.navigate).not.toHaveBeenCalled();
        vi.advanceTimersByTime(20_000);
        expect(router.navigate).toHaveBeenCalledWith(['/welcome']);
    });

    it('should warn the visitor 20 seconds before the reset', () => {
        navigateTo('/checkin/details');
        vi.advanceTimersByTime(99_999);
        expect(idle.warning_secs()).toBe(0);
        vi.advanceTimersByTime(1);
        expect(idle.warning_secs()).toBe(20);
        vi.advanceTimersByTime(5_000);
        expect(idle.warning_secs()).toBe(15);
        idle.stay();
        expect(idle.warning_secs()).toBe(0);
        vi.advanceTimersByTime(119_999);
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should stay on the welcome and setup pages', () => {
        navigateTo('/welcome?osk=true');
        vi.advanceTimersByTime(600_000);
        navigateTo('/bootstrap');
        vi.advanceTimersByTime(600_000);
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should not reset when the timeout is 0', () => {
        settingSignal<number>('inactivity_timeout_secs', 120).set(0);
        navigateTo('/checkin/details');
        vi.advanceTimersByTime(600_000);
        expect(router.navigate).not.toHaveBeenCalled();
    });
});

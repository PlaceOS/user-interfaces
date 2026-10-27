import {
    createEnvironmentInjector,
    EnvironmentInjector,
    runInInjectionContext,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { minuteClock } from '../app/minute-clock';

describe('minuteClock', () => {
    const minute = (m: number) => new Date(2026, 0, 1, 9, m).valueOf();
    let injector: EnvironmentInjector;

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 0, 1, 9, 30, 20));
        injector = createEnvironmentInjector(
            [],
            TestBed.inject(EnvironmentInjector),
        );
    });

    afterEach(() => {
        if (!injector.destroyed) injector.destroy();
        vi.useRealTimers();
    });

    it('should change only when a new minute starts', () => {
        const now = runInInjectionContext(injector, () => minuteClock());
        expect(now()).toBe(minute(30));
        vi.advanceTimersByTime(39_000);
        expect(now()).toBe(minute(30));
        vi.advanceTimersByTime(1_100);
        expect(now()).toBe(minute(31));
        vi.advanceTimersByTime(60_000);
        expect(now()).toBe(minute(32));
    });

    it('should stop when the context is destroyed', () => {
        runInInjectionContext(injector, () => minuteClock());
        expect(vi.getTimerCount()).toBe(1);
        injector.destroy();
        expect(vi.getTimerCount()).toBe(0);
    });
});

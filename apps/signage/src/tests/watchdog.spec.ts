import {
    clearApplicationCache,
    recordFatalError,
    recordHeartbeat,
    requestRecovery,
    resetBootRetries,
    resetWatchdog,
    scheduleBootRetry,
    stalledSignals,
    startWatchdog,
    watchdogState,
} from '../app/watchdog';

const MINUTE = 60 * 1000;

describe('recovery watchdog', () => {
    let reload: any;
    let clear_cache: any;
    let stop: () => void;

    let expected_to_run: boolean;

    const start = () => {
        stop?.();
        stop = startWatchdog({
            reload,
            clearCache: clear_cache,
            isExpectedToRun: () => expected_to_run,
        });
    };

    const beat = () => {
        recordHeartbeat('poll');
        recordHeartbeat('schedule');
        recordHeartbeat('playback');
        recordHeartbeat('visible');
    };

    /** Keep every signal checking in for `minutes`, a check interval at a time */
    const runHealthy = async (minutes: number) => {
        for (let i = 0; i < minutes * 2; i++) {
            beat();
            await vi.advanceTimersByTimeAsync(30 * 1000);
        }
    };

    /**
     * Let everything go quiet for long enough that a recovery is due. Playback
     * is stale after three minutes and the grace period is five, so ten covers
     * detection and recovery while keeping repeated stalls inside the hour the
     * recovery limit is counted over.
     */
    const runStalled = async (minutes = 10) => {
        await vi.advanceTimersByTimeAsync(minutes * MINUTE);
    };

    /**
     * The device sleeps: the clocks move on, but no timer runs. Moves the
     * clock the heartbeats use as well as the device time.
     */
    const suspend = (ms: number) => {
        const now = performance.now.bind(performance);
        vi.spyOn(performance, 'now').mockImplementation(() => now() + ms);
        vi.setSystemTime(Date.now() + ms);
    };

    /** A fresh stall, as though the player had restarted and stalled again */
    const stallAgain = async () => {
        resetWatchdog();
        start();
        beat();
        await runStalled();
    };

    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
        resetWatchdog();
        // A reload that works ends the page, and the watchdog with it
        reload = vi.fn(() => stop());
        clear_cache = vi.fn(async () => true);
        expected_to_run = true;
        stop = () => undefined;
        start();
    });

    afterEach(() => {
        stop();
        resetWatchdog();
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('should recover when the player never reaches a visible state', async () => {
        // Nothing ever checks in: the app never got as far as showing content
        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        // A failed boot is most often a bad cached build, so it goes straight
        // to clearing the cache rather than spending plain reloads first
        expect(clear_cache).toHaveBeenCalledTimes(1);
        expect(clear_cache).toHaveBeenCalledBefore(reload);
        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should give the player time to boot before recovering', async () => {
        await vi.advanceTimersByTimeAsync(4 * MINUTE);

        expect(clear_cache).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });

    it('should not treat an un-bootstrapped device as a failed boot', async () => {
        expected_to_run = false;

        await vi.advanceTimersByTimeAsync(60 * MINUTE);

        expect(clear_cache).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });

    it('should not reload the display picker after the display is cleared', async () => {
        await runHealthy(2);

        // Someone clears the display and stays on the picker; the player
        // that was checking in has gone
        expected_to_run = false;
        await vi.advanceTimersByTimeAsync(30 * MINUTE);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().stalled).toEqual([]);
    });

    it('should give a display picked later the full boot deadline', async () => {
        expected_to_run = false;
        await vi.advanceTimersByTimeAsync(20 * MINUTE);

        expected_to_run = true;
        await vi.advanceTimersByTimeAsync(4 * MINUTE);
        expect(clear_cache).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(2 * MINUTE);
        expect(clear_cache).toHaveBeenCalledTimes(1);
    });

    it('should stop watching for a failed boot once content is visible', async () => {
        await vi.advanceTimersByTimeAsync(2 * MINUTE);
        recordHeartbeat('visible');
        expect(watchdogState().booted).toBe(true);

        await vi.advanceTimersByTimeAsync(4 * MINUTE);

        expect(clear_cache).not.toHaveBeenCalled();
    });

    it('should recover when content stops being visible', async () => {
        beat();
        // Everything underneath keeps running; only visibility goes quiet
        for (let i = 0; i < 40; i++) {
            recordHeartbeat('poll');
            recordHeartbeat('schedule');
            recordHeartbeat('playback');
            await vi.advanceTimersByTimeAsync(30 * 1000);
        }

        expect(watchdogState().stalled).toEqual(['visible']);
        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should recover when the player cannot get any content on screen', async () => {
        beat();
        recordHeartbeat('content');
        // Every loop keeps running; the player just never manages to show
        // anything, which is what a broken media cache looks like
        for (let i = 0; i < 40; i++) {
            beat();
            await vi.advanceTimersByTimeAsync(30 * 1000);
        }

        expect(watchdogState().stalled).toEqual(['content']);
        expect(reload).toHaveBeenCalledTimes(1);
        expect(watchdogState().last_recovery_detail?.reasons).toEqual([
            'content',
        ]);
    });

    it('should give the player a long time to get content on screen', async () => {
        beat();
        recordHeartbeat('content');
        for (let i = 0; i < 28; i++) {
            beat();
            await vi.advanceTimersByTimeAsync(30 * 1000);
        }

        expect(reload).not.toHaveBeenCalled();
    });

    it('should fall back to a plain reload when a failed boot cannot clear the cache', async () => {
        clear_cache = vi.fn(async () => false);
        start();

        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        expect(clear_cache).toHaveBeenCalledTimes(1);
        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should not reload while everything is healthy', async () => {
        await runHealthy(30);

        expect(reload).not.toHaveBeenCalled();
    });

    it('should reload on a stall with no error at all', async () => {
        beat();

        await runStalled();

        expect(reload).toHaveBeenCalledTimes(1);
        expect(watchdogState().last_error).toBeNull();
    });

    it('should ignore signals that have never checked in', () => {
        recordHeartbeat('poll');

        const now = performance.timeOrigin + performance.now();
        expect(stalledSignals(now + 30 * MINUTE)).toEqual(['poll']);
    });

    it('should not reload if the stall recovers within the grace period', async () => {
        beat();
        // Quiet long enough to be noticed across several checks, but not long
        // enough to use up the grace period
        await vi.advanceTimersByTimeAsync(6 * MINUTE);
        expect(watchdogState().stalled).toContain('playback');
        expect(reload).not.toHaveBeenCalled();

        await runHealthy(10);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().stalled).toEqual([]);
    });

    it('should skip a round when the watchdog itself was delayed', async () => {
        beat();
        // The device suspends: no timers run, then everything resumes at once
        suspend(4 * 60 * MINUTE);
        await vi.advanceTimersByTimeAsync(30 * 1000);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().stalled).toEqual([]);
        expect(watchdogState().stalled_since).toBe('never');
    });

    it('should still recover if the stall continues after a delay', async () => {
        beat();
        suspend(4 * 60 * MINUTE);
        await vi.advanceTimersByTimeAsync(30 * 1000);

        await runStalled();

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should still notice a stall after the device clock is set back', async () => {
        beat();
        // The clock is corrected a day back as the player stops
        vi.setSystemTime(Date.now() - 24 * 60 * MINUTE);

        await runStalled();

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should recover when the history is ahead of the device clock', () => {
        // Recoveries recorded while the clock was right, before the device
        // started again with its clock days behind
        const later = Date.now() + 3 * 24 * 60 * MINUTE;
        localStorage.setItem(
            'PlaceOS.SIGNAGE.watchdog_reloads',
            JSON.stringify({
                at: [later, later + MINUTE, later + 2 * MINUTE],
                throttled: true,
                last: null,
            }),
        );

        expect(requestRecovery('init-error')).toBe(true);

        expect(reload).toHaveBeenCalledTimes(1);
        expect(watchdogState().recoveries_in_last_hour).toBe(1);
    });

    it('should allow three recoveries in an hour and no more', async () => {
        for (let attempt = 0; attempt < 3; attempt++) await stallAgain();
        expect(reload).toHaveBeenCalledTimes(3);

        await stallAgain();

        expect(reload).toHaveBeenCalledTimes(3);
        expect(watchdogState().recoveries_throttled).toBe(true);
    });

    it('should not recover again within the hour once throttled', async () => {
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        expect(watchdogState().recoveries_throttled).toBe(true);
        reload.mockClear();
        clear_cache.mockClear();

        // Half an hour later, still stalled
        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(30 * MINUTE);
        beat();
        await runStalled();

        expect(reload).not.toHaveBeenCalled();
        expect(clear_cache).not.toHaveBeenCalled();
    });

    it('should clear the application cache once recoveries are throttled', async () => {
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        expect(clear_cache).not.toHaveBeenCalled();
        expect(watchdogState().recoveries_throttled).toBe(true);

        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(61 * MINUTE);
        beat();
        await runStalled();

        expect(clear_cache).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a plain reload when the cache cannot be cleared', async () => {
        clear_cache = vi.fn(async () => false);
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        reload.mockClear();

        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(61 * MINUTE);
        beat();
        await runStalled();

        expect(clear_cache).toHaveBeenCalledTimes(1);
        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should go back to three an hour after two quiet hours', async () => {
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        expect(watchdogState().recoveries_throttled).toBe(true);

        // Two hours pass with no recovery at all
        stop();
        resetWatchdog();
        await vi.advanceTimersByTimeAsync(2 * 60 * MINUTE + MINUTE);
        start();
        beat();
        await runStalled();

        expect(watchdogState().recoveries_throttled).toBe(false);
        expect(watchdogState().recoveries_in_last_hour).toBe(1);
        // Back to plain reloads rather than cache clearing
        expect(reload).toHaveBeenCalledTimes(4);
        expect(clear_cache).not.toHaveBeenCalled();
    });

    it('should reload anyway when clearing the cache never finishes', async () => {
        clear_cache = vi.fn(() => new Promise<boolean>(() => undefined));
        // Nor does the reload that follows: the server never answers it
        reload = vi.fn();
        start();

        // The failed boot is recovered at five minutes and never completes
        await vi.advanceTimersByTimeAsync(6 * MINUTE);
        expect(clear_cache).toHaveBeenCalledTimes(1);
        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().recovering).toBe(true);

        // Two minutes after it started, it reloads anyway and lets go
        await vi.advanceTimersByTimeAsync(MINUTE);
        expect(reload).toHaveBeenCalledTimes(1);
        expect(watchdogState().recovering).toBe(false);

        // So the next check can try again instead of waiting forever
        await vi.advanceTimersByTimeAsync(30 * 1000);
        expect(clear_cache).toHaveBeenCalledTimes(2);
    });

    it('should not reload again when an abandoned cache clear finishes late', async () => {
        let finish: (cleared: boolean) => void = () => undefined;
        clear_cache = vi.fn(
            () => new Promise<boolean>((resolve) => (finish = resolve)),
        );
        // The reload never completes either, so this page stays
        reload = vi.fn();
        start();

        await vi.advanceTimersByTimeAsync(7 * MINUTE);
        expect(reload).toHaveBeenCalledTimes(1);

        // The first attempt finally gives up while the fallback reload is
        // still loading; it must not start a competing reload
        finish(false);
        await vi.advanceTimersByTimeAsync(0);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a plain reload when clearing the cache throws', async () => {
        clear_cache = vi.fn(async () => {
            throw new Error('denied');
        });
        start();

        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should allow a recovery to be requested directly', () => {
        expect(requestRecovery('init-error')).toBe(true);

        expect(reload).toHaveBeenCalledTimes(1);
        expect(watchdogState().recoveries_in_last_hour).toBe(1);
    });

    it('should hold a repeatedly requested recovery to the same limits', async () => {
        for (let attempt = 0; attempt < 6; attempt++) {
            resetWatchdog();
            start();
            requestRecovery('init-error');
            await vi.advanceTimersByTimeAsync(MINUTE);
        }

        // Three in the hour, then throttled to one an hour
        expect(reload).toHaveBeenCalledTimes(3);
        expect(watchdogState().recoveries_throttled).toBe(true);
    });

    it('should persist why it recovered across the reload it causes', async () => {
        recordFatalError('boom');
        beat();
        for (let i = 0; i < 40; i++) {
            recordHeartbeat('poll');
            recordHeartbeat('schedule');
            recordHeartbeat('playback');
            await vi.advanceTimersByTimeAsync(30 * 1000);
        }
        expect(reload).toHaveBeenCalledTimes(1);

        // The reload wipes everything held in memory
        resetWatchdog();
        start();
        const detail = watchdogState().last_recovery_detail;

        expect(watchdogState().last_error).toBeNull();
        expect(detail?.reasons).toEqual(['visible']);
        expect(detail?.error?.message).toBe('boom');
        expect(detail?.cache_clear_attempted).toBe(false);
        expect(detail?.at).not.toBe('never');
    });

    it('should record a failed boot and that it cleared the cache', async () => {
        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        resetWatchdog();
        start();
        const detail = watchdogState().last_recovery_detail;

        expect(detail?.reasons).toEqual(['boot']);
        expect(detail?.cache_clear_attempted).toBe(true);
        expect(detail?.error).toBeNull();
    });

    it('should record a directly requested recovery', () => {
        requestRecovery('init-error');

        resetWatchdog();
        start();

        expect(watchdogState().last_recovery_detail?.reasons).toEqual([
            'init-error',
        ]);
    });

    it('should not overwrite the recovery detail when an attempt is refused', async () => {
        // Use up the allowance so the next attempt is refused
        for (let attempt = 0; attempt < 3; attempt++) {
            resetWatchdog();
            start();
            requestRecovery('init-error');
            await vi.advanceTimersByTimeAsync(MINUTE);
        }
        resetWatchdog();
        start();

        expect(requestRecovery('a-later-failure')).toBe(false);

        expect(watchdogState().last_recovery_detail?.reasons).toEqual([
            'init-error',
        ]);
    });

    it('should keep the recovery limit through a small clock correction', () => {
        // The allowance is used up, then the clock is set back a minute
        const now = Date.now();
        localStorage.setItem(
            'PlaceOS.SIGNAGE.watchdog_reloads',
            JSON.stringify({
                at: [now - 2 * MINUTE, now - MINUTE, now + MINUTE],
                throttled: false,
                last: null,
            }),
        );

        expect(requestRecovery('init-error')).toBe(false);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().recoveries_throttled).toBe(true);
    });

    it('should show heartbeats in device time after the clock is corrected', () => {
        recordHeartbeat('poll');

        vi.setSystemTime(Date.now() - 24 * 60 * MINUTE);

        expect(watchdogState().heartbeats.poll).toBe(
            new Date(Date.now()).toISOString(),
        );
    });

    it('should read recovery history written by an earlier build', () => {
        localStorage.setItem(
            'PlaceOS.SIGNAGE.watchdog_reloads',
            JSON.stringify([Date.now() - 1000]),
        );

        const state = watchdogState();

        expect(state.recoveries_in_last_hour).toBe(1);
        expect(state.recoveries_throttled).toBe(false);
        expect(state.last_recovery_detail).toBeNull();
    });

    it('should record errors as context without needing them to act', () => {
        recordFatalError('boom');

        const state = watchdogState();
        expect(state.error_count).toBe(1);
        expect(state.last_error?.message).toBe('boom');
    });

    it('should report its state for diagnostics', () => {
        recordHeartbeat('poll');

        const state = watchdogState();

        expect(state.running).toBe(true);
        expect(state.heartbeats.poll).not.toBe('never');
        expect(state.heartbeats.playback).toBe('never');
        expect(state.recoveries_in_last_hour).toBe(0);
        expect(state.recoveries_throttled).toBe(false);
    });
});

describe('cache clearing recovery', () => {
    let reload: any;
    let stop: () => void;
    let unregister: any;
    let delete_cache: any;

    beforeEach(() => {
        reload = vi.fn();
        unregister = vi.fn(async () => true);
        delete_cache = vi.fn(async () => true);
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({ ok: true })),
        );
        vi.stubGlobal('caches', {
            keys: async () => ['ngsw:db', 'ngsw:assets'],
            delete: delete_cache,
        });
        Object.defineProperty(navigator, 'serviceWorker', {
            value: { getRegistrations: async () => [{ unregister }] },
            configurable: true,
        });
        resetWatchdog();
        stop = startWatchdog({ reload });
    });

    afterEach(() => {
        stop();
        resetWatchdog();
        vi.unstubAllGlobals();
    });

    it('should remove the service worker and its caches, leaving the reload to the caller', async () => {
        expect(await clearApplicationCache()).toBe(true);

        expect(unregister).toHaveBeenCalledTimes(1);
        expect(delete_cache).toHaveBeenCalledTimes(2);
        expect(reload).not.toHaveBeenCalled();
    });

    it('should carry on when the caches cannot be deleted', async () => {
        vi.stubGlobal('caches', {
            keys: async () => {
                throw new Error('denied');
            },
        });

        expect(await clearApplicationCache()).toBe(true);
    });

    it('should not clear the cache when the server cannot be reached', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => {
                throw new Error('offline');
            }),
        );

        expect(await clearApplicationCache()).toBe(false);

        expect(unregister).not.toHaveBeenCalled();
        expect(delete_cache).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });

    it('should not clear the cache when the server never answers', async () => {
        vi.useFakeTimers();
        vi.stubGlobal(
            'fetch',
            vi.fn(
                (_: string, init: RequestInit) =>
                    new Promise((_resolve, reject) =>
                        init.signal?.addEventListener('abort', () =>
                            reject(new Error('aborted')),
                        ),
                    ),
            ),
        );

        const result = clearApplicationCache();
        await vi.advanceTimersByTimeAsync(15 * 1000);

        expect(await result).toBe(false);
        expect(unregister).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should not clear the cache when the server errors', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({ ok: false })),
        );

        expect(await clearApplicationCache()).toBe(false);

        expect(unregister).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });
});

describe('boot retry', () => {
    let console_error: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        vi.useFakeTimers();
        sessionStorage.clear();
        console_error = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        sessionStorage.clear();
        console_error.mockRestore();
        vi.useRealTimers();
    });

    it('should reload after a failed start, waiting longer each time up to a cap', () => {
        const reload = vi.fn();

        const delays = Array.from({ length: 8 }, () =>
            scheduleBootRetry(reload),
        );

        expect(delays).toEqual([
            10_000, 20_000, 40_000, 80_000, 160_000, 300_000, 300_000, 300_000,
        ]);
        vi.advanceTimersByTime(300_000);
        expect(reload).toHaveBeenCalledTimes(8);
        // Printed without debug mode, which needs settings that never loaded
        expect(console_error).toHaveBeenCalledWith(
            expect.stringContaining(
                'Application failed to start; reloading in 10s',
            ),
        );
    });

    it('should start from the shortest wait again after a successful start', () => {
        scheduleBootRetry(vi.fn());
        scheduleBootRetry(vi.fn());

        resetBootRetries();

        expect(scheduleBootRetry(vi.fn())).toBe(10_000);
    });
});

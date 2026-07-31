import {
    recordFatalError,
    recordHeartbeat,
    resetWatchdog,
    stalledSignals,
    startWatchdog,
    watchdogState,
} from '../app/watchdog';

const MINUTE = 60 * 1000;

describe('recovery watchdog', () => {
    let reload: any;
    let hard_reload: any;
    let stop: () => void;

    let expected_to_run: boolean;

    const start = () => {
        stop?.();
        stop = startWatchdog({
            reload,
            hardReload: hard_reload,
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
        reload = vi.fn();
        hard_reload = vi.fn(async () => true);
        expected_to_run = true;
        stop = () => undefined;
        start();
    });

    afterEach(() => {
        stop();
        resetWatchdog();
        vi.useRealTimers();
    });

    it('should recover when the player never reaches a visible state', async () => {
        // Nothing ever checks in: the app never got as far as showing content
        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        // A failed boot is most often a bad cached build, so it goes straight
        // to clearing the cache rather than spending plain reloads first
        expect(hard_reload).toHaveBeenCalledTimes(1);
        expect(reload).not.toHaveBeenCalled();
    });

    it('should give the player time to boot before recovering', async () => {
        await vi.advanceTimersByTimeAsync(4 * MINUTE);

        expect(hard_reload).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });

    it('should not treat an un-bootstrapped device as a failed boot', async () => {
        expected_to_run = false;

        await vi.advanceTimersByTimeAsync(60 * MINUTE);

        expect(hard_reload).not.toHaveBeenCalled();
        expect(reload).not.toHaveBeenCalled();
    });

    it('should stop watching for a failed boot once content is visible', async () => {
        await vi.advanceTimersByTimeAsync(2 * MINUTE);
        recordHeartbeat('visible');
        expect(watchdogState().booted).toBe(true);

        await vi.advanceTimersByTimeAsync(4 * MINUTE);

        expect(hard_reload).not.toHaveBeenCalled();
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

    it('should fall back to a plain reload when a failed boot cannot clear the cache', async () => {
        hard_reload = vi.fn(async () => false);
        start();

        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        expect(hard_reload).toHaveBeenCalledTimes(1);
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

        expect(stalledSignals(Date.now() + 30 * MINUTE)).toEqual(['poll']);
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
        vi.setSystemTime(Date.now() + 4 * 60 * MINUTE);
        await vi.advanceTimersByTimeAsync(30 * 1000);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().stalled).toEqual([]);
        expect(watchdogState().stalled_since).toBe('never');
    });

    it('should still recover if the stall continues after a delay', async () => {
        beat();
        vi.setSystemTime(Date.now() + 4 * 60 * MINUTE);
        await vi.advanceTimersByTimeAsync(30 * 1000);

        await runStalled();

        expect(reload).toHaveBeenCalledTimes(1);
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
        hard_reload.mockClear();

        // Half an hour later, still stalled
        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(30 * MINUTE);
        beat();
        await runStalled();

        expect(reload).not.toHaveBeenCalled();
        expect(hard_reload).not.toHaveBeenCalled();
    });

    it('should clear the application cache once recoveries are throttled', async () => {
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        expect(hard_reload).not.toHaveBeenCalled();
        expect(watchdogState().recoveries_throttled).toBe(true);

        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(61 * MINUTE);
        beat();
        await runStalled();

        expect(hard_reload).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a plain reload when the cache cannot be cleared', async () => {
        hard_reload = vi.fn(async () => false);
        for (let attempt = 0; attempt < 4; attempt++) await stallAgain();
        reload.mockClear();

        resetWatchdog();
        start();
        beat();
        await vi.advanceTimersByTimeAsync(61 * MINUTE);
        beat();
        await runStalled();

        expect(hard_reload).toHaveBeenCalledTimes(1);
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
        expect(hard_reload).not.toHaveBeenCalled();
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

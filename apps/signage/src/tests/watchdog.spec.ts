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
    let reload: () => void;
    let stop: () => void;

    /** Keep every signal checking in for `minutes`, a check interval at a time */
    const runHealthy = async (minutes: number) => {
        for (let i = 0; i < minutes * 2; i++) {
            recordHeartbeat('poll');
            recordHeartbeat('schedule');
            recordHeartbeat('playback');
            await vi.advanceTimersByTimeAsync(30_000);
        }
    };

    beforeEach(() => {
        vi.useFakeTimers();
        localStorage.clear();
        resetWatchdog();
        reload = vi.fn() as any;
        stop = startWatchdog(reload);
    });

    afterEach(() => {
        stop();
        resetWatchdog();
        vi.useRealTimers();
    });

    it('should not reload while everything is healthy', async () => {
        recordFatalError('something went wrong');

        await runHealthy(10);

        expect(reload).not.toHaveBeenCalled();
    });

    it('should not reload when machinery stalls without an error', async () => {
        recordHeartbeat('poll');
        recordHeartbeat('schedule');
        recordHeartbeat('playback');

        await vi.advanceTimersByTimeAsync(30 * MINUTE);

        expect(stalledSignals()).toEqual(['poll', 'schedule', 'playback']);
        expect(reload).not.toHaveBeenCalled();
    });

    it('should reload when machinery stalls after an error', async () => {
        recordHeartbeat('poll');
        recordHeartbeat('schedule');
        recordHeartbeat('playback');
        recordFatalError('boom');

        await vi.advanceTimersByTimeAsync(30 * MINUTE);

        expect(reload).toHaveBeenCalledTimes(1);
    });

    it('should not reload if the stall recovers within the grace period', async () => {
        recordHeartbeat('playback');
        recordFatalError('boom');
        // Quiet long enough to be noticed, and to stay noticed across several
        // checks, but not long enough to use up the grace period
        await vi.advanceTimersByTimeAsync(150 * 1000);
        expect(watchdogState().stalled).toContain('playback');
        expect(reload).not.toHaveBeenCalled();

        // ...then comes back before the grace period is up
        await runHealthy(5);

        expect(reload).not.toHaveBeenCalled();
        expect(watchdogState().stalled).toEqual([]);
    });

    it('should ignore signals that have never checked in', () => {
        recordHeartbeat('poll');

        expect(stalledSignals(Date.now() + 30 * MINUTE)).toEqual(['poll']);
    });

    it('should stop reloading after repeated recoveries in the same window', async () => {
        // Five stalls inside an hour; only three recoveries are allowed
        for (let attempt = 0; attempt < 5; attempt++) {
            resetWatchdog();
            stop();
            stop = startWatchdog(reload);
            recordHeartbeat('poll');
            recordHeartbeat('schedule');
            recordHeartbeat('playback');
            recordFatalError('boom');
            await vi.advanceTimersByTimeAsync(6 * MINUTE);
        }

        expect(reload).toHaveBeenCalledTimes(3);
    });

    it('should allow recoveries again once the window has passed', async () => {
        for (let attempt = 0; attempt < 4; attempt++) {
            resetWatchdog();
            stop();
            stop = startWatchdog(reload);
            recordHeartbeat('poll');
            recordHeartbeat('schedule');
            recordHeartbeat('playback');
            recordFatalError('boom');
            await vi.advanceTimersByTimeAsync(6 * MINUTE);
        }
        expect(reload).toHaveBeenCalledTimes(3);

        // An hour later the earlier recoveries no longer count. The watchdog
        // is stopped over the gap so it is not the one filling it.
        stop();
        resetWatchdog();
        await vi.advanceTimersByTimeAsync(61 * MINUTE);
        stop = startWatchdog(reload);
        recordHeartbeat('poll');
        recordHeartbeat('schedule');
        recordHeartbeat('playback');
        recordFatalError('boom');
        await vi.advanceTimersByTimeAsync(6 * MINUTE);

        expect(reload).toHaveBeenCalledTimes(4);
    });

    it('should record errors from unhandled rejections', () => {
        window.dispatchEvent(
            new CustomEvent('unhandledrejection', {
                detail: null,
            } as any),
        );
        recordFatalError('explicit');

        expect(watchdogState().error_count).toBeGreaterThan(0);
        expect(watchdogState().last_error?.message).toBe('explicit');
    });

    it('should report its state for diagnostics', () => {
        recordHeartbeat('poll');

        const state = watchdogState();

        expect(state.running).toBe(true);
        expect(state.heartbeats.poll).not.toBe('never');
        expect(state.heartbeats.playback).toBe('never');
        expect(state.recent_reloads).toBe(0);
    });
});

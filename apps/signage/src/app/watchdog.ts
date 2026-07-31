import { MINUTES, scoped_log, SECONDS } from '@placeos/common';

/**
 * Recovery watchdog for an unattended player.
 *
 * Reloading on any error would be worse than the errors - a fault that
 * reproduces on startup turns into a reload loop, and most errors do not stop
 * the player doing its job. So this only acts on evidence of both: a fatal
 * error has been seen, *and* the machinery that error might have broken has
 * stopped moving.
 *
 * The three signals are the loops the player cannot work without: fetching the
 * display, re-evaluating schedules, and driving playback. Each is expected to
 * check in far more often than its stall threshold, so a stalled one means that
 * timer chain is dead rather than merely idle.
 */
export type WatchdogSignal = 'poll' | 'schedule' | 'playback';

/** How long a signal may go without checking in before it counts as stalled */
const STALE_AFTER_MS: Record<WatchdogSignal, number> = {
    // Polls every minute
    poll: 5 * MINUTES,
    // Ticks every 15 seconds
    schedule: 2 * MINUTES,
    // Runs every 50ms
    playback: 1 * MINUTES,
};
/** How long the machinery must stay stalled before a reload is attempted */
const RECOVERY_GRACE_MS = 2 * MINUTES;
/** How often the watchdog looks */
const CHECK_INTERVAL_MS = 30 * SECONDS;
/** Window over which automatic recoveries are counted */
const RELOAD_WINDOW_MS = 60 * MINUTES;
/** Most automatic recoveries allowed inside that window */
const MAX_RELOADS_IN_WINDOW = 3;
const RELOAD_LOG_KEY = 'PlaceOS.SIGNAGE.watchdog_reloads';

const log = scoped_log('Watchdog');

const heartbeats: Record<WatchdogSignal, number> = {
    poll: 0,
    schedule: 0,
    playback: 0,
};
let _last_error: { at: number; message: string } | null = null;
let _error_count = 0;
let _stalled_since = 0;
let _timer: ReturnType<typeof setInterval> | undefined;
let _listening = false;
let _reloading = false;

/** Record that a piece of core machinery is still running */
export function recordHeartbeat(signal: WatchdogSignal) {
    heartbeats[signal] = Date.now();
}

/** Record an error serious enough to have broken something */
export function recordFatalError(message: string) {
    _error_count++;
    _last_error = { at: Date.now(), message: `${message}`.slice(0, 500) };
    log.error('Fatal error recorded.', _last_error.message);
}

/** Signals that have not checked in recently enough */
export function stalledSignals(now = Date.now()): WatchdogSignal[] {
    return (Object.keys(heartbeats) as WatchdogSignal[]).filter((signal) => {
        const last = heartbeats[signal];
        // A signal that has never checked in is not yet expected to
        if (!last) return false;
        return now - last > STALE_AFTER_MS[signal];
    });
}

function recentReloads(now: number): number[] {
    try {
        const stored = JSON.parse(
            localStorage.getItem(RELOAD_LOG_KEY) || '[]',
        ) as number[];
        return stored.filter((at) => now - at < RELOAD_WINDOW_MS);
    } catch {
        return [];
    }
}

function recordReload(now: number) {
    try {
        localStorage.setItem(
            RELOAD_LOG_KEY,
            JSON.stringify([...recentReloads(now), now]),
        );
    } catch {
        // Ignore quota and privacy-mode failures.
    }
}

function check(reload: () => void) {
    const now = Date.now();
    // A reload has been asked for; the page is on its way out
    if (_reloading) return;
    if (!_last_error) return;
    const stalled = stalledSignals(now);
    if (!stalled.length) {
        // The error did not stop anything, or whatever stalled has recovered
        _stalled_since = 0;
        return;
    }
    if (!_stalled_since) {
        _stalled_since = now;
        log.warn('Core machinery has stalled.', stalled);
        return;
    }
    if (now - _stalled_since < RECOVERY_GRACE_MS) return;
    const reloads = recentReloads(now);
    if (reloads.length >= MAX_RELOADS_IN_WINDOW) {
        // Reloading has not fixed it, so stop trying and leave the evidence
        log.error('Stalled, but too many recent recoveries to reload again.', {
            stalled,
            reloads: reloads.length,
            last_error: _last_error,
        });
        _stalled_since = now;
        return;
    }
    log.error('Reloading to recover from a stall.', {
        stalled,
        last_error: _last_error,
    });
    recordReload(now);
    _reloading = true;
    reload();
}

/**
 * Start watching. Returns a callback that stops it again.
 */
export function startWatchdog(reload: () => void = () => location.reload()) {
    stopWatchdog();
    if (!_listening) {
        _listening = true;
        window.addEventListener('error', onWindowError);
        window.addEventListener('unhandledrejection', onRejection);
    }
    _timer = setInterval(() => check(reload), CHECK_INTERVAL_MS);
    return () => stopWatchdog();
}

export function stopWatchdog() {
    if (_timer) clearInterval(_timer);
    _timer = undefined;
    if (_listening) {
        _listening = false;
        window.removeEventListener('error', onWindowError);
        window.removeEventListener('unhandledrejection', onRejection);
    }
}

/** Reset all watchdog state. Intended for tests. */
export function resetWatchdog() {
    stopWatchdog();
    heartbeats.poll = 0;
    heartbeats.schedule = 0;
    heartbeats.playback = 0;
    _last_error = null;
    _error_count = 0;
    _stalled_since = 0;
    _reloading = false;
}

/** Snapshot of the watchdog for diagnostics */
export function watchdogState() {
    const now = Date.now();
    return {
        running: !!_timer,
        reloading: _reloading,
        error_count: _error_count,
        last_error: _last_error,
        stalled: stalledSignals(now),
        stalled_since: _stalled_since
            ? new Date(_stalled_since).toISOString()
            : 'never',
        recent_reloads: recentReloads(now).length,
        heartbeats: {
            poll: heartbeats.poll ? new Date(heartbeats.poll).toISOString() : 'never',
            schedule: heartbeats.schedule
                ? new Date(heartbeats.schedule).toISOString()
                : 'never',
            playback: heartbeats.playback
                ? new Date(heartbeats.playback).toISOString()
                : 'never',
        },
    };
}

function onWindowError(event: ErrorEvent) {
    recordFatalError(event.message || 'Unhandled error');
}

function onRejection(event: PromiseRejectionEvent) {
    const reason = event.reason;
    recordFatalError(reason?.message || reason || 'Unhandled rejection');
}

import { MINUTES, scoped_log, SECONDS } from '@placeos/common';

/**
 * Recovery watchdog for an unattended player.
 *
 * Watches the loops the player cannot work without - fetching the display,
 * re-evaluating schedules, driving playback - and reloads the page if one of
 * them stops running. Each checks in far more often than its stall threshold,
 * so a stalled signal means that timer chain is dead rather than merely idle.
 *
 * The heartbeats measure the player's own machinery, not the backend. The poll
 * signal checks in when a fetch is *attempted*, so a backend that has been down
 * for hours still beats normally and never triggers a recovery. That is what
 * makes acting on a stall alone safe: the only thing that goes quiet is code
 * that has stopped running.
 *
 * Fatal errors are recorded for context but are not required. Most stalls worth
 * recovering from - a promise that never settles, a timer chain that quietly
 * stopped - raise no error at all, which is exactly the case this exists for.
 */
export type WatchdogSignal = 'poll' | 'schedule' | 'playback' | 'visible';

/** How long a signal may go without checking in before it counts as stalled */
const STALE_AFTER_MS: Record<WatchdogSignal, number> = {
    // Polls every minute
    poll: 10 * MINUTES,
    // Ticks every 15 seconds
    schedule: 5 * MINUTES,
    // Runs every 50ms
    playback: 3 * MINUTES,
    // Checked every second while content is on screen
    visible: 5 * MINUTES,
};
/**
 * How long after starting the player has to reach a visible, playing state.
 * Nothing before this point is covered by the stall signals - they only report
 * once they have checked in at least once - so a boot that never completes
 * needs its own deadline.
 */
const BOOT_TIMEOUT_MS = 5 * MINUTES;
/** How long the machinery must stay stalled before a reload is attempted */
const RECOVERY_GRACE_MS = 5 * MINUTES;
/** How often the watchdog looks */
const CHECK_INTERVAL_MS = 30 * SECONDS;
/**
 * A check this far apart means the watchdog itself did not run - the device was
 * suspended, or the clock moved. Every heartbeat looks stale after that through
 * no fault of the player, so the round is skipped rather than acted on.
 */
const CLOCK_JUMP_MS = 3 * CHECK_INTERVAL_MS;
/** Window over which automatic recoveries are counted */
const RECOVERY_WINDOW_MS = 60 * MINUTES;
/** Recoveries allowed inside that window before they are throttled */
const MAX_RECOVERIES_PER_WINDOW = 3;
/** Minimum spacing between recoveries once throttled */
const RECOVERY_THROTTLE_MS = 60 * MINUTES;
/** Quiet period after which the recovery history is forgotten */
const RECOVERY_RESET_MS = 2 * 60 * MINUTES;
const RECOVERY_KEY = 'PlaceOS.SIGNAGE.watchdog_reloads';

const log = scoped_log('Watchdog');

interface RecoveryHistory {
    /** Timestamps of recent automatic recoveries */
    at: number[];
    /** Whether recoveries are currently spaced an hour apart */
    throttled: boolean;
}

const heartbeats: Record<WatchdogSignal, number> = {
    poll: 0,
    schedule: 0,
    playback: 0,
    visible: 0,
};
let _last_error: { at: number; message: string } | null = null;
let _error_count = 0;
let _stalled_since = 0;
let _last_check = 0;
let _started_at = 0;
let _timer: ReturnType<typeof setInterval> | undefined;
let _listening = false;
let _recovering = false;
let _reload: () => void = () => location.reload();
let _hard_reload: () => Promise<boolean> = () => clearCachesAndReload();

/** Record that a piece of core machinery is still running */
export function recordHeartbeat(signal: WatchdogSignal) {
    heartbeats[signal] = Date.now();
}

/** Record an error serious enough to be worth reporting alongside a stall */
export function recordFatalError(message: string) {
    _error_count++;
    _last_error = { at: Date.now(), message: `${message}`.slice(0, 500) };
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

function readHistory(): RecoveryHistory {
    try {
        const stored = JSON.parse(localStorage.getItem(RECOVERY_KEY) || 'null');
        if (stored instanceof Array) return { at: stored, throttled: false };
        return {
            at: stored?.at instanceof Array ? stored.at : [],
            throttled: !!stored?.throttled,
        };
    } catch {
        return { at: [], throttled: false };
    }
}

function writeHistory(history: RecoveryHistory) {
    try {
        localStorage.setItem(RECOVERY_KEY, JSON.stringify(history));
    } catch {
        // Ignore quota and privacy-mode failures.
    }
}

/** The recovery history, forgotten entirely after a long quiet period */
function recoveryHistory(now: number): RecoveryHistory {
    const history = readHistory();
    const last = history.at[history.at.length - 1] || 0;
    if (last && now - last >= RECOVERY_RESET_MS) {
        const reset = { at: [], throttled: false };
        writeHistory(reset);
        return reset;
    }
    return history;
}

/**
 * Whether another automatic recovery is allowed. Three are permitted in an
 * hour; after that they are spaced an hour apart, because reloading has
 * evidently not fixed whatever is wrong and hammering it will not either.
 */
function claimRecovery(now: number): boolean {
    const history = recoveryHistory(now);
    const last = history.at[history.at.length - 1] || 0;
    if (history.throttled) {
        if (last && now - last < RECOVERY_THROTTLE_MS) return false;
        writeHistory({ at: [...history.at.slice(-9), now], throttled: true });
        return true;
    }
    const in_window = history.at.filter((at) => now - at < RECOVERY_WINDOW_MS);
    if (in_window.length >= MAX_RECOVERIES_PER_WINDOW) {
        log.warn('Recovery limit reached; spacing further attempts an hour.');
        writeHistory({ ...history, throttled: true });
        return false;
    }
    writeHistory({ at: [...history.at.slice(-9), now], throttled: false });
    return true;
}

function resetHeartbeats(now: number) {
    for (const signal of Object.keys(heartbeats) as WatchdogSignal[]) {
        if (heartbeats[signal]) heartbeats[signal] = now;
    }
}

/**
 * Reload, clearing the application cache first. Used once plain reloads have
 * failed to shift the problem, in case the cached build is what is wrong.
 * Only clears the cache when the server can be reached, so a player is never
 * left with no cached application and no way to fetch a new one.
 */
async function clearCachesAndReload(): Promise<boolean> {
    let reachable = false;
    try {
        const response = await fetch(location.href, { cache: 'reload' });
        reachable = response.ok;
    } catch {
        reachable = false;
    }
    if (!reachable) {
        log.warn('Server unreachable; not clearing the application cache.');
        return false;
    }
    try {
        const registrations =
            (await navigator.serviceWorker?.getRegistrations?.()) || [];
        await Promise.all(
            registrations.map((_) => _.unregister().catch(() => false)),
        );
        const keys = (await caches?.keys?.()) || [];
        await Promise.all(keys.map((_) => caches.delete(_).catch(() => false)));
        log.warn('Cleared the application cache.');
    } catch (error) {
        log.warn('Failed to clear the application cache.', error);
    }
    location.href = `${location.origin}${location.pathname}`;
    return true;
}

function check(expected_to_run: () => boolean) {
    const now = Date.now();
    const since_last_check = _last_check ? now - _last_check : 0;
    _last_check = now;
    // The watchdog itself did not run, so every heartbeat looks stale
    if (since_last_check > CLOCK_JUMP_MS) {
        log.warn('Watchdog was delayed; assuming the device was suspended.', {
            delayed_by_ms: since_last_check,
        });
        resetHeartbeats(now);
        _stalled_since = 0;
        return;
    }
    // A recovery has been asked for; the page is on its way out
    if (_recovering) return;
    // Boot never completed. Nothing has ever been on screen, so none of the
    // stall signals apply - this is the only thing watching startup.
    if (!heartbeats.visible && expected_to_run()) {
        if (now - _started_at < BOOT_TIMEOUT_MS) return;
        // A boot that never completes is most often a bad cached build,
        // especially straight after an update, so skip the plain reloads.
        recover(now, ['boot'], true);
        return;
    }
    const stalled = stalledSignals(now);
    if (!stalled.length) {
        _stalled_since = 0;
        return;
    }
    if (!_stalled_since) {
        _stalled_since = now;
        log.warn('Core machinery has stalled.', stalled);
        return;
    }
    if (now - _stalled_since < RECOVERY_GRACE_MS) return;
    if (!recover(now, stalled, false)) _stalled_since = now;
}

/**
 * Reload to recover, if one is due. `prefer_hard` skips straight to clearing
 * the application cache; otherwise that only happens once plain reloads have
 * been tried and throttled.
 */
function recover(now: number, reasons: string[], prefer_hard: boolean) {
    const throttled = recoveryHistory(now).throttled;
    if (!claimRecovery(now)) {
        log.error('Recovery needed, but not due yet.', {
            reasons,
            last_error: _last_error,
        });
        return false;
    }
    log.error('Reloading to recover.', {
        reasons,
        throttled,
        clearing_cache: prefer_hard || throttled,
        last_error: _last_error,
    });
    _recovering = true;
    // Only clear the application cache when the server can serve a
    // replacement; `hardReload` checks that and reports back.
    if (!prefer_hard && !throttled) {
        _reload();
        return true;
    }
    _hard_reload().then((cleared) => {
        if (!cleared) _reload();
    });
    return true;
}

/**
 * Ask for a recovery from outside the stall checks, for a failure the caller
 * has already decided is fatal. Subject to the same limits, so a caller that
 * keeps asking cannot restart the player faster than the watchdog would.
 */
export function requestRecovery(reason: string, prefer_hard = false) {
    if (_recovering) return false;
    return recover(Date.now(), [reason], prefer_hard);
}

export interface WatchdogActions {
    reload?: () => void;
    hardReload?: () => Promise<boolean>;
    /**
     * Whether this device is supposed to be showing content. A player that has
     * never been bootstrapped is legitimately waiting for someone to pick a
     * display, and must not be reloaded for never starting.
     */
    isExpectedToRun?: () => boolean;
}

/** Start watching. Returns a callback that stops it again. */
export function startWatchdog(actions: WatchdogActions = {}) {
    _reload = actions.reload || (() => location.reload());
    _hard_reload = actions.hardReload || clearCachesAndReload;
    const expectedToRun = actions.isExpectedToRun || (() => false);
    stopWatchdog();
    if (!_listening) {
        _listening = true;
        window.addEventListener('error', onWindowError);
        window.addEventListener('unhandledrejection', onRejection);
    }
    _last_check = Date.now();
    _started_at = Date.now();
    _timer = setInterval(() => check(expectedToRun), CHECK_INTERVAL_MS);
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

/** Reset all in-memory watchdog state. Intended for tests. */
export function resetWatchdog() {
    stopWatchdog();
    heartbeats.poll = 0;
    heartbeats.schedule = 0;
    heartbeats.playback = 0;
    heartbeats.visible = 0;
    _last_error = null;
    _error_count = 0;
    _stalled_since = 0;
    _last_check = 0;
    _started_at = 0;
    _recovering = false;
}

/** Snapshot of the watchdog for diagnostics */
export function watchdogState() {
    const now = Date.now();
    const history = readHistory();
    const asTime = (value: number) =>
        value ? new Date(value).toISOString() : 'never';
    return {
        running: !!_timer,
        recovering: _recovering,
        error_count: _error_count,
        last_error: _last_error,
        stalled: stalledSignals(now),
        stalled_since: asTime(_stalled_since),
        recoveries_in_last_hour: history.at.filter(
            (at) => now - at < RECOVERY_WINDOW_MS,
        ).length,
        recoveries_throttled: history.throttled,
        last_recovery: asTime(history.at[history.at.length - 1] || 0),
        started_at: asTime(_started_at),
        booted: !!heartbeats.visible,
        heartbeats: {
            poll: asTime(heartbeats.poll),
            schedule: asTime(heartbeats.schedule),
            playback: asTime(heartbeats.playback),
            visible: asTime(heartbeats.visible),
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

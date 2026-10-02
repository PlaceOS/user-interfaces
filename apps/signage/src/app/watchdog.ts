import { MINUTES, scoped_log, SECONDS } from '@placeos/common';

/**
 * Recovery watchdog for an unattended player.
 *
 * Watches the loops the player cannot work without - fetching the display,
 * re-evaluating schedules, driving playback - and reloads the page if one of
 * them stops running. Each checks in far more often than its stall threshold,
 * so a stalled signal means that timer chain is dead rather than merely idle.
 * The content signal is the exception: it checks in while the player is idle
 * or showing something it managed to load, so it goes quiet when the player
 * is meant to be playing but nothing it tries will show. That is the failure
 * the timer signals cannot see, because every timer underneath it keeps
 * running perfectly.
 *
 * The heartbeats measure the player's own machinery, not the backend. The poll
 * signal checks in when a fetch is *attempted*, so a backend that has been down
 * for hours still beats normally. That is what makes acting on a stall alone
 * safe: apart from content, the only thing that goes quiet is code that has
 * stopped running. Content can go quiet because of the backend - a player with
 * nothing cached cannot show anything while the server is down - so an outage
 * can cause recoveries, held to the same limits as every other.
 *
 * Heartbeats are timed on a clock that setting the device time cannot move, so
 * a clock corrected backwards cannot hide a stall. The recovery history has to
 * survive reloads, so it uses the device time. It is forgotten when it holds
 * an entry more than an hour in that time's future, and diagnostics show
 * heartbeats in device time.
 *
 * Fatal errors are recorded for context but are not required. Most stalls worth
 * recovering from - a promise that never settles, a timer chain that quietly
 * stopped - raise no error at all, which is exactly the case this exists for.
 */
export type WatchdogSignal =
    | 'poll'
    | 'schedule'
    | 'playback'
    | 'visible'
    | 'content';

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
    // Checked every 50ms while the player is idle or showing an item it
    // managed to load. Generous, because the player itself skips media that
    // will not load and only a run of failures across the whole playlist
    // should count as the player being stuck.
    content: 10 * MINUTES,
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
/**
 * How far ahead of the device clock a recorded recovery may be before the
 * history is forgotten. Smaller corrections keep the limits: the entries just
 * count as recent for a little longer.
 */
const FUTURE_HISTORY_MS = RECOVERY_THROTTLE_MS;
/** Longest wait for the server check before clearing the application cache */
const REACHABLE_TIMEOUT_MS = 15 * SECONDS;
/**
 * How long a recovery may take before it counts as failed. A reload that
 * works replaces the page well before this.
 */
const RECOVERY_TIMEOUT_MS = 2 * MINUTES;
const RECOVERY_KEY = 'PlaceOS.SIGNAGE.watchdog_reloads';
/** Consecutive failed application starts, for the boot retry backoff */
const BOOT_FAILURES_KEY = 'SIGNAGE.boot_failures';
/** First wait before reloading after a failed start; doubles each time */
const BOOT_RETRY_BASE_MS = 10 * SECONDS;
const BOOT_RETRY_MAX_MS = 5 * MINUTES;

const log = scoped_log('Watchdog');

interface RecoveryRecord {
    at: number;
    /** What triggered it: stalled signal names, `boot`, or a caller's reason */
    reasons: string[];
    /** Whether the application cache was cleared as part of it */
    cache_clear_attempted: boolean;
    /** The last error seen before it, if there was one */
    error: { at: number; message: string } | null;
}

interface RecoveryHistory {
    /** Timestamps of recent automatic recoveries */
    at: number[];
    /** Whether recoveries are currently spaced an hour apart */
    throttled: boolean;
    /**
     * Why the most recent recovery happened. Persisted because the reload it
     * triggers takes the console with it - the one place the reason was
     * reported - so a player found restarting itself could say that it had,
     * but not what for.
     */
    last: RecoveryRecord | null;
}

const heartbeats: Record<WatchdogSignal, number> = {
    poll: 0,
    schedule: 0,
    playback: 0,
    visible: 0,
    content: 0,
};
let _last_error: { at: number; message: string } | null = null;
let _error_count = 0;
let _stalled_since = 0;
let _last_check = 0;
let _started_at = 0;
let _timer: ReturnType<typeof setInterval> | undefined;
let _recovery_timer: ReturnType<typeof setTimeout> | undefined;
/** Increments for each recovery; only the newest one may reload the page */
let _recovery_generation = 0;
let _listening = false;
let _recovering = false;
/** Whether the device was expected to show content at the last check */
let _was_expected_to_run = false;
let _reload: () => void = () => location.reload();
let _clear_cache: () => Promise<boolean> = () => clearApplicationCache();

/**
 * Milliseconds on a clock that only moves forward. Setting the device time
 * does not move it. Reads as a timestamp, for diagnostics.
 */
function monotonicNow() {
    return performance.timeOrigin + performance.now();
}

/** Record that a piece of core machinery is still running */
export function recordHeartbeat(signal: WatchdogSignal) {
    heartbeats[signal] = monotonicNow();
}

/** Record an error serious enough to be worth reporting alongside a stall */
export function recordFatalError(message: string) {
    _error_count++;
    _last_error = { at: Date.now(), message: `${message}`.slice(0, 500) };
}

/** Signals that have not checked in recently enough */
export function stalledSignals(now = monotonicNow()): WatchdogSignal[] {
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
        // Earlier builds stored a bare list of timestamps
        if (stored instanceof Array) {
            return { at: stored, throttled: false, last: null };
        }
        return {
            at: stored?.at instanceof Array ? stored.at : [],
            throttled: !!stored?.throttled,
            last: stored?.last || null,
        };
    } catch {
        return { at: [], throttled: false, last: null };
    }
}

function writeHistory(history: RecoveryHistory) {
    try {
        localStorage.setItem(RECOVERY_KEY, JSON.stringify(history));
    } catch {
        // Ignore quota and privacy-mode failures.
    }
}

/**
 * The recovery history, forgotten entirely after a long quiet period. Also
 * forgotten when it holds a recovery well after `now`: the device clock has
 * been set far back, for example on a device that starts with no time source.
 * Kept, it would refuse every recovery until the clock caught up.
 */
function recoveryHistory(now: number): RecoveryHistory {
    const history = readHistory();
    const last = history.at[history.at.length - 1] || 0;
    const from_future = history.at.some((at) => at - now > FUTURE_HISTORY_MS);
    if (from_future || (last && now - last >= RECOVERY_RESET_MS)) {
        // Only the rate limiting is forgotten; why it last recovered is still
        // worth knowing when someone finally looks at the player.
        const reset = { at: [], throttled: false, last: history.last };
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
function claimRecovery(now: number, record: RecoveryRecord): boolean {
    const history = recoveryHistory(now);
    const last = history.at[history.at.length - 1] || 0;
    if (history.throttled) {
        if (last && now - last < RECOVERY_THROTTLE_MS) return false;
        writeHistory({
            at: [...history.at.slice(-9), now],
            throttled: true,
            last: record,
        });
        return true;
    }
    const in_window = history.at.filter((at) => now - at < RECOVERY_WINDOW_MS);
    if (in_window.length >= MAX_RECOVERIES_PER_WINDOW) {
        log.warn('Recovery limit reached; spacing further attempts an hour.');
        writeHistory({ ...history, throttled: true });
        return false;
    }
    writeHistory({
        at: [...history.at.slice(-9), now],
        throttled: false,
        last: record,
    });
    return true;
}

function resetHeartbeats(now: number) {
    for (const signal of Object.keys(heartbeats) as WatchdogSignal[]) {
        if (heartbeats[signal]) heartbeats[signal] = now;
    }
}

/** Forget every heartbeat, as though no signal had ever checked in */
function clearHeartbeats() {
    for (const signal of Object.keys(heartbeats) as WatchdogSignal[]) {
        heartbeats[signal] = 0;
    }
}

/**
 * Clear the application cache before a recovery reload. Used once plain
 * reloads have failed to shift the problem, in case the cached build is what
 * is wrong. Only clears the cache when the server can be reached, so a player
 * is never left with no cached application and no way to fetch a new one. A
 * server that accepts the request but never answers counts as unreachable.
 * Returns whether the cache was cleared; the caller reloads either way.
 */
export async function clearApplicationCache(): Promise<boolean> {
    let reachable = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REACHABLE_TIMEOUT_MS);
    try {
        const response = await fetch(location.href, {
            cache: 'reload',
            signal: controller.signal,
        });
        reachable = response.ok;
    } catch {
        reachable = false;
    } finally {
        clearTimeout(timeout);
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
    return true;
}

function check(expected_to_run: () => boolean) {
    const now = monotonicNow();
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
    const expected = expected_to_run();
    if (expected !== _was_expected_to_run) {
        // Bootstrapped to a display, or cleared back to the display picker.
        // The heartbeats belong to a screen that has gone: left in place they
        // would read as a stall and reload the picker under whoever is using
        // it. A display picked now gets the full boot deadline, however long
        // the picker was up.
        _was_expected_to_run = expected;
        clearHeartbeats();
        _stalled_since = 0;
        _started_at = now;
    }
    // Boot never completed. Nothing has ever been on screen, so none of the
    // stall signals apply - this is the only thing watching startup.
    if (!heartbeats.visible && expected) {
        if (now - _started_at < BOOT_TIMEOUT_MS) return;
        // A boot that never completes is most often a bad cached build,
        // especially straight after an update, so skip the plain reloads.
        recover(['boot'], true);
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
    if (!recover(stalled, false)) _stalled_since = now;
}

/**
 * Reload to recover, if one is due. `prefer_hard` skips straight to clearing
 * the application cache; otherwise that only happens once plain reloads have
 * been tried and throttled.
 */
function recover(reasons: string[], prefer_hard: boolean) {
    // The history outlives the page, so it is kept in device time
    const now = Date.now();
    const throttled = recoveryHistory(now).throttled;
    const record: RecoveryRecord = {
        at: now,
        reasons,
        cache_clear_attempted: prefer_hard || throttled,
        error: _last_error,
    };
    if (!claimRecovery(now, record)) {
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
    const generation = ++_recovery_generation;
    // If the page is still here after the timeout, the reload never happened:
    // a cache clear that hung, or a navigation the server never answered.
    // Reload again and let the checks run, so a failed recovery cannot leave
    // the watchdog latched off until someone power-cycles the device.
    clearTimeout(_recovery_timer);
    _recovery_timer = setTimeout(() => {
        log.error('Recovery did not reload the page; trying again.');
        // A cache clear still running belongs to the abandoned attempt and
        // must not start a second reload when it finishes
        _recovery_generation++;
        _recovering = false;
        _reload();
    }, RECOVERY_TIMEOUT_MS);
    // Reloads the current URL rather than navigating to the base path: the
    // route that says which display to show, and whether in debug mode, is
    // in the hash. Dropping it leaves the player on the display picker.
    if (!prefer_hard && !throttled) {
        _reload();
        return true;
    }
    // Reload whether or not the cache could be cleared; the clear itself
    // only goes ahead when the server can serve a replacement
    _clear_cache()
        .catch(() => false)
        .then(() => {
            if (generation === _recovery_generation) _reload();
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
    return recover([reason], prefer_hard);
}

export interface WatchdogActions {
    reload?: () => void;
    clearCache?: () => Promise<boolean>;
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
    _clear_cache = actions.clearCache || clearApplicationCache;
    const expectedToRun = actions.isExpectedToRun || (() => false);
    stopWatchdog();
    _was_expected_to_run = expectedToRun();
    if (!_listening) {
        _listening = true;
        window.addEventListener('error', onWindowError);
        window.addEventListener('unhandledrejection', onRejection);
    }
    _last_check = monotonicNow();
    _started_at = _last_check;
    _timer = setInterval(() => check(expectedToRun), CHECK_INTERVAL_MS);
    return () => stopWatchdog();
}

export function stopWatchdog() {
    if (_timer) clearInterval(_timer);
    _timer = undefined;
    // The latch must not outlive the timer that releases it, and a stopped
    // watchdog must not reload when an earlier cache clear finishes
    clearTimeout(_recovery_timer);
    _recovery_timer = undefined;
    _recovery_generation++;
    _recovering = false;
    if (_listening) {
        _listening = false;
        window.removeEventListener('error', onWindowError);
        window.removeEventListener('unhandledrejection', onRejection);
    }
}

/** Reset all in-memory watchdog state. Intended for tests. */
export function resetWatchdog() {
    stopWatchdog();
    clearHeartbeats();
    _was_expected_to_run = false;
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
    // Heartbeats and their timers are on the monotonic clock. Shown as the
    // same age before the device time, so they line up with the other times
    // here after the device clock has been corrected.
    const monotonic_now = monotonicNow();
    const asMonotonicTime = (value: number) =>
        asTime(value ? now - (monotonic_now - value) : 0);
    return {
        running: !!_timer,
        recovering: _recovering,
        error_count: _error_count,
        last_error: _last_error,
        stalled: stalledSignals(),
        stalled_since: asMonotonicTime(_stalled_since),
        recoveries_in_last_hour: history.at.filter(
            (at) => now - at < RECOVERY_WINDOW_MS,
        ).length,
        recoveries_throttled: history.throttled,
        last_recovery: asTime(history.at[history.at.length - 1] || 0),
        // Survives the reload it caused, unlike `last_error` above, which only
        // covers errors seen since this page loaded
        last_recovery_detail: history.last
            ? {
                  ...history.last,
                  at: asTime(history.last.at),
                  error: history.last.error
                      ? {
                            ...history.last.error,
                            at: asTime(history.last.error.at),
                        }
                      : null,
              }
            : null,
        started_at: asMonotonicTime(_started_at),
        booted: !!heartbeats.visible,
        heartbeats: {
            poll: asMonotonicTime(heartbeats.poll),
            schedule: asMonotonicTime(heartbeats.schedule),
            playback: asMonotonicTime(heartbeats.playback),
            visible: asMonotonicTime(heartbeats.visible),
            content: asMonotonicTime(heartbeats.content),
        },
    };
}

/**
 * Reload after the application failed to start. The watchdog starts inside
 * the application, so a start that fails never reaches it and nothing else
 * would recover the blank screen. The wait doubles with each consecutive
 * failure, up to a cap, and the count lives in session storage so it survives
 * the reloads it causes. Returns the wait in milliseconds.
 */
export function scheduleBootRetry(
    reload: () => void = () => location.reload(),
) {
    let failures = 0;
    try {
        failures = Number(sessionStorage.getItem(BOOT_FAILURES_KEY)) || 0;
        sessionStorage.setItem(BOOT_FAILURES_KEY, `${failures + 1}`);
    } catch {
        // Ignore privacy-mode failures; retry at the base delay.
    }
    const delay = Math.min(
        BOOT_RETRY_BASE_MS * 2 ** Math.min(failures, 10),
        BOOT_RETRY_MAX_MS,
    );
    // Not the scoped log: it prints only once settings enable debug, and
    // settings never load when the application fails to start.
    console.error(
        `[Watchdog] Application failed to start; reloading in ${delay / 1000}s.`,
    );
    setTimeout(reload, delay);
    return delay;
}

/** Forget earlier failed starts. Called once the application has started. */
export function resetBootRetries() {
    try {
        sessionStorage.removeItem(BOOT_FAILURES_KEY);
    } catch {
        // Ignore privacy-mode failures.
    }
}

function onWindowError(event: ErrorEvent) {
    recordFatalError(event.message || 'Unhandled error');
}

function onRejection(event: PromiseRejectionEvent) {
    const reason = event.reason;
    recordFatalError(reason?.message || reason || 'Unhandled rejection');
}

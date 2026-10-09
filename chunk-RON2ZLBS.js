import {
  MINUTES,
  SECONDS
} from "./chunk-UMHXZB4F.js";
import {
  scoped_log
} from "./chunk-CHOQN2TC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage/src/app/debug-state.ts
var DEBUG_STORAGE_KEY = "SIGNAGE.debug";
function isDebugEnabled(value) {
  return value !== null && value !== "false";
}
function isDebugMode() {
  try {
    const query = location.hash.split("?")[1] || location.search.slice(1);
    const params = new URLSearchParams(query);
    if (params.has("debug"))
      return isDebugEnabled(params.get("debug"));
    return isDebugEnabled(sessionStorage.getItem(DEBUG_STORAGE_KEY));
  } catch {
    return false;
  }
}

// apps/signage/src/app/watchdog.ts
var STALE_AFTER_MS = {
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
  content: 10 * MINUTES
};
var BOOT_TIMEOUT_MS = 5 * MINUTES;
var RECOVERY_GRACE_MS = 5 * MINUTES;
var CHECK_INTERVAL_MS = 30 * SECONDS;
var CLOCK_JUMP_MS = 3 * CHECK_INTERVAL_MS;
var RECOVERY_WINDOW_MS = 60 * MINUTES;
var MAX_RECOVERIES_PER_WINDOW = 3;
var RECOVERY_THROTTLE_MS = 60 * MINUTES;
var RECOVERY_RESET_MS = 2 * 60 * MINUTES;
var FUTURE_HISTORY_MS = RECOVERY_THROTTLE_MS;
var REACHABLE_TIMEOUT_MS = 15 * SECONDS;
var RECOVERY_TIMEOUT_MS = 2 * MINUTES;
var RECOVERY_KEY = "PlaceOS.SIGNAGE.watchdog_reloads";
var BOOT_FAILURES_KEY = "SIGNAGE.boot_failures";
var BOOT_RETRY_BASE_MS = 10 * SECONDS;
var BOOT_RETRY_MAX_MS = 5 * MINUTES;
var log = scoped_log("Watchdog");
var heartbeats = {
  poll: 0,
  schedule: 0,
  playback: 0,
  visible: 0,
  content: 0
};
var _last_error = null;
var _error_count = 0;
var _stalled_since = 0;
var _last_check = 0;
var _started_at = 0;
var _timer;
var _recovery_timer;
var _recovery_generation = 0;
var _listening = false;
var _recovering = false;
var _was_expected_to_run = false;
var _reload = () => location.reload();
var _clear_cache = () => clearApplicationCache();
function monotonicNow() {
  return performance.timeOrigin + performance.now();
}
function recordHeartbeat(signal) {
  heartbeats[signal] = monotonicNow();
}
function recordFatalError(message) {
  _error_count++;
  _last_error = { at: Date.now(), message: `${message}`.slice(0, 500) };
}
function stalledSignals(now = monotonicNow()) {
  return Object.keys(heartbeats).filter((signal) => {
    const last = heartbeats[signal];
    if (!last)
      return false;
    return now - last > STALE_AFTER_MS[signal];
  });
}
function readHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem(RECOVERY_KEY) || "null");
    if (stored instanceof Array) {
      return { at: stored, throttled: false, last: null };
    }
    return {
      at: stored?.at instanceof Array ? stored.at : [],
      throttled: !!stored?.throttled,
      last: stored?.last || null
    };
  } catch {
    return { at: [], throttled: false, last: null };
  }
}
function writeHistory(history) {
  try {
    localStorage.setItem(RECOVERY_KEY, JSON.stringify(history));
  } catch {
  }
}
function recoveryHistory(now) {
  const history = readHistory();
  const last = history.at[history.at.length - 1] || 0;
  const from_future = history.at.some((at) => at - now > FUTURE_HISTORY_MS);
  if (from_future || last && now - last >= RECOVERY_RESET_MS) {
    const reset = { at: [], throttled: false, last: history.last };
    writeHistory(reset);
    return reset;
  }
  return history;
}
function claimRecovery(now, record) {
  const history = recoveryHistory(now);
  const last = history.at[history.at.length - 1] || 0;
  if (history.throttled) {
    if (last && now - last < RECOVERY_THROTTLE_MS)
      return false;
    writeHistory({
      at: [...history.at.slice(-9), now],
      throttled: true,
      last: record
    });
    return true;
  }
  const in_window = history.at.filter((at) => now - at < RECOVERY_WINDOW_MS);
  if (in_window.length >= MAX_RECOVERIES_PER_WINDOW) {
    log.warn("Recovery limit reached; spacing further attempts an hour.");
    writeHistory(__spreadProps(__spreadValues({}, history), { throttled: true }));
    return false;
  }
  writeHistory({
    at: [...history.at.slice(-9), now],
    throttled: false,
    last: record
  });
  return true;
}
function resetHeartbeats(now) {
  for (const signal of Object.keys(heartbeats)) {
    if (heartbeats[signal])
      heartbeats[signal] = now;
  }
}
function clearHeartbeats() {
  for (const signal of Object.keys(heartbeats)) {
    heartbeats[signal] = 0;
  }
}
async function clearApplicationCache() {
  let reachable = false;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REACHABLE_TIMEOUT_MS);
  try {
    const response = await fetch(location.href, {
      cache: "reload",
      signal: controller.signal
    });
    reachable = response.ok;
  } catch {
    reachable = false;
  } finally {
    clearTimeout(timeout);
  }
  if (!reachable) {
    log.warn("Server unreachable; not clearing the application cache.");
    return false;
  }
  try {
    const registrations = await navigator.serviceWorker?.getRegistrations?.() || [];
    await Promise.all(registrations.map((_) => _.unregister().catch(() => false)));
    const keys = await caches?.keys?.() || [];
    await Promise.all(keys.map((_) => caches.delete(_).catch(() => false)));
    log.warn("Cleared the application cache.");
  } catch (error) {
    log.warn("Failed to clear the application cache.", error);
  }
  return true;
}
function check(expected_to_run) {
  const now = monotonicNow();
  const since_last_check = _last_check ? now - _last_check : 0;
  _last_check = now;
  if (since_last_check > CLOCK_JUMP_MS) {
    log.warn("Watchdog was delayed; assuming the device was suspended.", {
      delayed_by_ms: since_last_check
    });
    resetHeartbeats(now);
    _stalled_since = 0;
    return;
  }
  if (_recovering)
    return;
  const expected = expected_to_run();
  if (expected !== _was_expected_to_run) {
    _was_expected_to_run = expected;
    clearHeartbeats();
    _stalled_since = 0;
    _started_at = now;
  }
  if (!heartbeats.visible && expected) {
    if (now - _started_at < BOOT_TIMEOUT_MS)
      return;
    recover(["boot"], true);
    return;
  }
  const stalled = stalledSignals(now);
  if (!stalled.length) {
    _stalled_since = 0;
    return;
  }
  if (!_stalled_since) {
    _stalled_since = now;
    log.warn("Core machinery has stalled.", stalled);
    return;
  }
  if (now - _stalled_since < RECOVERY_GRACE_MS)
    return;
  if (!recover(stalled, false))
    _stalled_since = now;
}
function recover(reasons, prefer_hard) {
  const now = Date.now();
  const throttled = recoveryHistory(now).throttled;
  const record = {
    at: now,
    reasons,
    cache_clear_attempted: prefer_hard || throttled,
    error: _last_error
  };
  if (!claimRecovery(now, record)) {
    log.error("Recovery needed, but not due yet.", {
      reasons,
      last_error: _last_error
    });
    return false;
  }
  log.error("Reloading to recover.", {
    reasons,
    throttled,
    clearing_cache: prefer_hard || throttled,
    last_error: _last_error
  });
  _recovering = true;
  const generation = ++_recovery_generation;
  clearTimeout(_recovery_timer);
  _recovery_timer = setTimeout(() => {
    log.error("Recovery did not reload the page; trying again.");
    _recovery_generation++;
    _recovering = false;
    _reload();
  }, RECOVERY_TIMEOUT_MS);
  if (!prefer_hard && !throttled) {
    _reload();
    return true;
  }
  _clear_cache().catch(() => false).then(() => {
    if (generation === _recovery_generation)
      _reload();
  });
  return true;
}
function requestRecovery(reason, prefer_hard = false) {
  if (_recovering)
    return false;
  return recover([reason], prefer_hard);
}
function startWatchdog(actions = {}) {
  _reload = actions.reload || (() => location.reload());
  _clear_cache = actions.clearCache || clearApplicationCache;
  const expectedToRun = actions.isExpectedToRun || (() => false);
  stopWatchdog();
  _was_expected_to_run = expectedToRun();
  if (!_listening) {
    _listening = true;
    window.addEventListener("error", onWindowError);
    window.addEventListener("unhandledrejection", onRejection);
  }
  _last_check = monotonicNow();
  _started_at = _last_check;
  _timer = setInterval(() => check(expectedToRun), CHECK_INTERVAL_MS);
  return () => stopWatchdog();
}
function stopWatchdog() {
  if (_timer)
    clearInterval(_timer);
  _timer = void 0;
  clearTimeout(_recovery_timer);
  _recovery_timer = void 0;
  _recovery_generation++;
  _recovering = false;
  if (_listening) {
    _listening = false;
    window.removeEventListener("error", onWindowError);
    window.removeEventListener("unhandledrejection", onRejection);
  }
}
function watchdogState() {
  const now = Date.now();
  const history = readHistory();
  const asTime = (value) => value ? new Date(value).toISOString() : "never";
  const monotonic_now = monotonicNow();
  const asMonotonicTime = (value) => asTime(value ? now - (monotonic_now - value) : 0);
  return {
    running: !!_timer,
    recovering: _recovering,
    error_count: _error_count,
    last_error: _last_error,
    stalled: stalledSignals(),
    stalled_since: asMonotonicTime(_stalled_since),
    recoveries_in_last_hour: history.at.filter((at) => now - at < RECOVERY_WINDOW_MS).length,
    recoveries_throttled: history.throttled,
    last_recovery: asTime(history.at[history.at.length - 1] || 0),
    // Survives the reload it caused, unlike `last_error` above, which only
    // covers errors seen since this page loaded
    last_recovery_detail: history.last ? __spreadProps(__spreadValues({}, history.last), {
      at: asTime(history.last.at),
      error: history.last.error ? __spreadProps(__spreadValues({}, history.last.error), {
        at: asTime(history.last.error.at)
      }) : null
    }) : null,
    started_at: asMonotonicTime(_started_at),
    booted: !!heartbeats.visible,
    heartbeats: {
      poll: asMonotonicTime(heartbeats.poll),
      schedule: asMonotonicTime(heartbeats.schedule),
      playback: asMonotonicTime(heartbeats.playback),
      visible: asMonotonicTime(heartbeats.visible),
      content: asMonotonicTime(heartbeats.content)
    }
  };
}
function scheduleBootRetry(reload = () => location.reload()) {
  let failures = 0;
  try {
    failures = Number(sessionStorage.getItem(BOOT_FAILURES_KEY)) || 0;
    sessionStorage.setItem(BOOT_FAILURES_KEY, `${failures + 1}`);
  } catch {
  }
  const delay = Math.min(BOOT_RETRY_BASE_MS * 2 ** Math.min(failures, 10), BOOT_RETRY_MAX_MS);
  console.error(`[Watchdog] Application failed to start; reloading in ${delay / 1e3}s.`);
  setTimeout(reload, delay);
  return delay;
}
function resetBootRetries() {
  try {
    sessionStorage.removeItem(BOOT_FAILURES_KEY);
  } catch {
  }
}
function onWindowError(event) {
  recordFatalError(event.message || "Unhandled error");
}
function onRejection(event) {
  const reason = event.reason;
  recordFatalError(reason?.message || reason || "Unhandled rejection");
}

export {
  DEBUG_STORAGE_KEY,
  isDebugEnabled,
  isDebugMode,
  recordHeartbeat,
  recordFatalError,
  requestRecovery,
  startWatchdog,
  watchdogState,
  scheduleBootRetry,
  resetBootRetries
};
//# debugId=279d6d0e-a82d-5df3-bb8d-f3752b4a26e4
//# sourceMappingURL=chunk-RON2ZLBS.js.map

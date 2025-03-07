let _wake_lock: WakeLockSentinel | null = null;

export async function requestScreenWakeLock() {
    if (_wake_lock) {
        await _wake_lock.release();
    }
    // create an async function to request a wake lock
    try {
        _wake_lock = await navigator.wakeLock.request('screen');
    } catch (err) {
        throw err;
    }
}

document.addEventListener('visibilitychange', async () => {
    if (_wake_lock !== null && document.visibilityState === 'visible') {
        _wake_lock = await navigator.wakeLock.request('screen');
    }
});

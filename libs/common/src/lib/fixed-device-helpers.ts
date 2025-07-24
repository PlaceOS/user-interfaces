import { isFixedDevice } from '@placeos/ts-client';

let _wake_lock: WakeLockSentinel | null = null;

export async function requestScreenWakeLock() {
    if (!isFixedDevice()) return;
    if (_wake_lock) await _wake_lock.release();
    // create an async function to request a wake lock
    if (document.visibilityState === 'visible') {
        _wake_lock = await navigator.wakeLock.request('screen');
    } else {
        setTimeout(() => requestScreenWakeLock(), 1000);
    }
}

document.addEventListener('visibilitychange', async () => {
    if (_wake_lock !== null && document.visibilityState === 'visible') {
        _wake_lock = await navigator.wakeLock.request('screen');
    }
});

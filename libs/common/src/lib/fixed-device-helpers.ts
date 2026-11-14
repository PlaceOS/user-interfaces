import { isFixedDevice } from '@placeos/ts-client';
import { scoped_log } from './general';

const log = scoped_log('FIXED_DEV')

let _wake_lock: WakeLockSentinel | null = null;

export async function requestScreenWakeLock() {
    try {
        if (!isFixedDevice()) return;
        if (_wake_lock) await _wake_lock.release();
        // create an async function to request a wake lock
        if (document.visibilityState === 'visible') {
            _wake_lock = await navigator.wakeLock.request('screen');
        } else {
            setTimeout(() => requestScreenWakeLock(), 1000);
        }
    } catch (e) {
        log.error("Failed to acquire screen wake lock.", e)
    }
}

document.addEventListener('visibilitychange', async () => {
    if (_wake_lock !== null && document.visibilityState === 'visible') {
        _wake_lock = await navigator.wakeLock.request('screen');
    }
});

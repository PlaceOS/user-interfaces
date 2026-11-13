/** Local storage key that holds the ID of this device */
const DEVICE_ID_KEY = 'PLACEOS.DEVICE_ID';

let _device_id = '';

/** New device ID: `DEV-` and 12 uppercase hex characters, such as `DEV-3F9A0C12B7E4` */
function newDeviceId() {
    const bytes = crypto.getRandomValues(new Uint8Array(6));
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'));
    return `DEV-${hex.join('').toUpperCase()}`;
}

/**
 * ID of this device. The ID is made on first use and kept in local storage,
 * so it stays the same across reloads. A device keeps an ID that it already
 * has, also if the ID has an older format. Remote logging and remote setup
 * use it to find the device.
 */
export function deviceId(): string {
    if (_device_id) return _device_id;
    try {
        _device_id = localStorage.getItem(DEVICE_ID_KEY) || '';
    } catch {
        // Storage can be blocked. The ID then lasts until the page reloads.
    }
    if (!_device_id) {
        _device_id = newDeviceId();
        try {
            localStorage.setItem(DEVICE_ID_KEY, _device_id);
        } catch {
            // Ignore quota and privacy-mode failures.
        }
    }
    return _device_id;
}

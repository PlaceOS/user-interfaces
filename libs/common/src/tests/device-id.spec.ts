import { deviceId } from '../lib/device-id';

describe('deviceId', () => {
    it('should make a DEV- ID with 12 uppercase hex characters and keep it', () => {
        const id = deviceId();

        expect(id).toMatch(/^DEV-[0-9A-F]{12}$/);
        expect(localStorage.getItem('PLACEOS.DEVICE_ID')).toBe(id);
        expect(deviceId()).toBe(id);
    });
});

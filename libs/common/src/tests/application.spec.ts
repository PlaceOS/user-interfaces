import { fakeAsync, tick } from '@angular/core/testing';
import { clearCacheCheck, setupCache } from '../lib/application';

describe('Application Methods', () => {
    describe('setupCache', () => {
        it('should setup cache', fakeAsync(() => {
            const sw_update = {
                isEnabled: false,
                checkForUpdate: jest.fn(),
                activateUpdate: jest.fn(),
            };
            setupCache(sw_update as any, 2);
            expect(sw_update.checkForUpdate).not.toHaveBeenCalled();
            expect(sw_update.activateUpdate).not.toHaveBeenCalled();
            sw_update.isEnabled = true;
            setupCache(sw_update as any, 2);
            tick(3);
            expect(sw_update.checkForUpdate).toHaveBeenCalled();
            expect(sw_update.activateUpdate).not.toHaveBeenCalled();
            sw_update.checkForUpdate.mockImplementation(async () => true);
            tick(2);
            expect(sw_update.activateUpdate).toHaveBeenCalled();
            clearCacheCheck();
        }));
    });
});

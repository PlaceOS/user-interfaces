import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { setupCache } from '../lib/application';

describe('Application Methods', () => {
    describe('setupCache', () => {
        it('should setup cache', () => {
            const sw_update = {
                isEnabled: false,
                available: { subscribe: jest.fn() },
                activated: { subscribe: jest.fn() },
            };
            setupCache(sw_update as any);
            expect(sw_update.available.subscribe).not.toHaveBeenCalled();
            expect(sw_update.activated.subscribe).not.toHaveBeenCalled();
            sw_update.isEnabled = true;
            setupCache(sw_update as any);
            expect(sw_update.available.subscribe).toHaveBeenCalled();
            expect(sw_update.activated.subscribe).toHaveBeenCalled();
        });
    });
});

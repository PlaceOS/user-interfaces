import { Router } from '@angular/router';

import {
    BOOKING_STORE_KEY,
    bookingRemoteSetup,
    EVENT_KEY,
} from '../app/remote-setup-target';

describe('bookingRemoteSetup', () => {
    const navigate = vi.fn(() => Promise.resolve(true));
    const target = bookingRemoteSetup({ navigate } as unknown as Router);

    afterEach(() => {
        localStorage.clear();
        navigate.mockClear();
    });

    it('should read the system from storage', () => {
        expect(target.system_id()).toBeNull();
        localStorage.setItem(BOOKING_STORE_KEY, 'sys-1');
        expect(target.system_id()).toBe('sys-1');
    });

    it('should open the events view through the bootstrap route', async () => {
        await target.apply({ system_id: 'sys-1', event_view: true });
        expect(navigate).toHaveBeenCalledWith(['/bootstrap'], {
            queryParams: { system_id: 'sys-1', event: true },
        });
    });

    it('should remove a saved events view that the setup turns off', async () => {
        localStorage.setItem(EVENT_KEY, 'true');
        await target.apply({ system_id: 'sys-1' });
        expect(localStorage.getItem(EVENT_KEY)).toBeNull();
        expect(navigate).toHaveBeenCalledWith(['/bootstrap'], {
            queryParams: { system_id: 'sys-1' },
        });
    });

    it('should clear the setup through the bootstrap route', async () => {
        localStorage.setItem(EVENT_KEY, 'true');
        await target.apply(null);
        expect(localStorage.getItem(EVENT_KEY)).toBeNull();
        expect(navigate).toHaveBeenCalledWith(['/bootstrap'], {
            queryParams: { clear: true },
        });
    });
});

import { Router } from '@angular/router';

import { STORE_DISPLAY_KEY, STORE_TEMPLATE_KEY } from '../app/bootstrap-state';
import { signageRemoteSetup } from '../app/remote-setup-target';

describe('signageRemoteSetup', () => {
    const navigate = vi.fn(() => Promise.resolve(true));
    const target = signageRemoteSetup({ navigate } as unknown as Router);

    afterEach(() => {
        localStorage.clear();
        navigate.mockClear();
    });

    it('should read the display and the template from storage', () => {
        expect(target.current()).toBeNull();
        localStorage.setItem(STORE_DISPLAY_KEY, 'sys-1');
        localStorage.setItem(STORE_TEMPLATE_KEY, 'tpl-1');
        expect(target.current()).toEqual({
            system_id: 'sys-1',
            template_id: 'tpl-1',
        });
    });

    it('should send the display and the template to the bootstrap route', async () => {
        await target.apply({ system_id: 'sys-1', template_id: 'tpl-1' });
        expect(navigate).toHaveBeenCalledWith(['/bootstrap'], {
            queryParams: { display: 'sys-1', template: 'tpl-1' },
        });
        await target.apply(null);
        expect(navigate).toHaveBeenLastCalledWith(['/bootstrap'], {
            queryParams: { clear: true },
        });
    });
});

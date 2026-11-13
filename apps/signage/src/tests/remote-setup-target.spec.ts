import { Router } from '@angular/router';

import { signageRemoteSetup } from '../app/remote-setup-target';

describe('signageRemoteSetup', () => {
    const navigate = vi.fn(() => Promise.resolve(true));
    const target = signageRemoteSetup({ navigate } as unknown as Router);

    afterEach(() => {
        localStorage.clear();
        navigate.mockClear();
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

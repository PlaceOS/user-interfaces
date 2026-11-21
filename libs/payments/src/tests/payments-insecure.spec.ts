/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "http://placeos.example.com/" }
 */
import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';

import { Building, OrganisationService } from '@placeos/common';

import { PAYMENT_CHECKOUT, PaymentsService } from '../lib/payments.service';

describe('PaymentsService on an insecure page', () => {
    const execute = vi.fn();
    const createService = createServiceFactory({
        service: PaymentsService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal(new Building({ id: 'bld-1' })),
                initialised: signal(true),
                module: vi.fn(() => ({
                    execute,
                })) as unknown as OrganisationService['module'],
            }),
            MockProvider(MatDialog),
            { provide: PAYMENT_CHECKOUT, useValue: true },
        ],
    });

    it('is disabled and does not call the driver, also with a binding', async () => {
        const { service } = createService();
        expect(location.hostname).toBe('placeos.example.com');
        expect(service.enabled).toBe(false);
        expect(service.can_checkout).toBe(false);
        await expect(service.call('get_config')).rejects.toBe(
            'PAYMENTS.NOT_ENABLED',
        );
        expect(execute).not.toHaveBeenCalled();
    });
});

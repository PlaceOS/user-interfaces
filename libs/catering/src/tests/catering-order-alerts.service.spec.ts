import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { CateringOrder, PushNotificationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of, Subject } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { CateringOrderAlertsService } from '../lib/catering-order-alerts.service';
import { OrderChanges } from '../lib/catering-order-tools';
import { CateringOrdersService } from '../lib/catering-orders.service';

describe('CateringOrderAlertsService', () => {
    let spectator: SpectatorService<CateringOrderAlertsService>;
    const order_changes = new Subject<OrderChanges>();
    const notify_open = vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    }));
    const createService = createServiceFactory({
        service: CateringOrderAlertsService,
        providers: [
            MockProvider(CateringOrdersService, { order_changes } as any),
            MockProvider(PushNotificationService, {
                notify: vi.fn(),
                requestPermission: vi.fn().mockResolvedValue(true),
            }),
        ],
    });
    const changes = { added: [new CateringOrder()], cancelled: [] };
    const setHidden = (hidden: boolean) => {
        Object.defineProperty(document, 'hidden', {
            configurable: true,
            get: () => hidden,
        });
        document.dispatchEvent(new Event('visibilitychange'));
    };

    beforeEach(() => {
        localStorage.removeItem('PLACEOS.catering.alerts');
        document.title = 'Catering';
        notify_open.mockClear();
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createService();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        setHidden(false);
    });

    it('should stay quiet when alerts are off', () => {
        order_changes.next(changes);
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should count unseen changes in the tab title while hidden', async () => {
        await spectator.service.setEnabled(true);
        setHidden(true);

        order_changes.next(changes);

        expect(notify_open).toHaveBeenCalled();
        expect(document.title).toBe('(1) Catering');
        expect(
            spectator.inject(PushNotificationService).notify,
        ).toHaveBeenCalled();

        setHidden(false);
        expect(document.title).toBe('Catering');
    });

    it('should remember the setting on this device', async () => {
        await spectator.service.setEnabled(true);
        expect(localStorage.getItem('PLACEOS.catering.alerts')).toBe('true');
    });
});

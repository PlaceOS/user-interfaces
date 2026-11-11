import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CateringOrder,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { CateringOrdersService } from '../lib/catering-orders.service';
import { CateringPrepSummaryComponent } from '../lib/catering-prep-summary.component';

describe('CateringPrepSummaryComponent', () => {
    let spectator: Spectator<CateringPrepSummaryComponent>;
    const updateStatus = vi.fn();
    const notify_open = vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    }));
    const createComponent = createComponentFactory({
        component: CateringPrepSummaryComponent,
        providers: [
            MockProvider(CateringOrdersService, {
                matching: signal<CateringOrder[]>([]),
                updateStatus,
            }),
            MockProvider(OrganisationService, { levelWithID: vi.fn() }),
            MockProvider(SettingsService, {
                time_format_signal: signal('h:mm a'),
            }),
        ],
    });

    beforeEach(() => {
        updateStatus.mockReset();
        notify_open.mockClear();
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should try every order in a run and show an error if one fails', async () => {
        const orders = ['1', '2'].map((id) => new CateringOrder({ id }));
        updateStatus
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValueOnce(undefined);

        await spectator.component.markDelivered(orders);

        expect(updateStatus.mock.calls).toEqual([
            [orders[0], 'delivered'],
            [orders[1], 'delivered'],
        ]);
        expect(notify_open).toHaveBeenCalledTimes(1);
        expect(notify_open.mock.calls[0]).toContain(
            'CATERING.ORDERS_STATUS_ERROR',
        );
    });

    it('should show success when every order in a run is delivered', async () => {
        updateStatus.mockResolvedValue(undefined);

        await spectator.component.markDelivered([new CateringOrder()]);

        expect(notify_open.mock.calls[0]).toContain(
            'CATERING.DELIVERY_RUN_DELIVERED',
        );
    });
});

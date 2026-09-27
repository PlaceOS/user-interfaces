import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CateringItem,
    CateringOrder,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { CateringKitchenBoardComponent } from '../lib/catering-kitchen-board.component';
import { CateringOrderAlertsService } from '../lib/catering-order-alerts.service';
import { CateringOrdersService } from '../lib/catering-orders.service';

describe('CateringKitchenBoardComponent', () => {
    let spectator: Spectator<CateringKitchenBoardComponent>;
    const matching = signal<CateringOrder[]>([]);
    const changeStatus = vi.fn();
    const createComponent = createComponentFactory({
        component: CateringKitchenBoardComponent,
        providers: [
            MockProvider(CateringOrdersService, {
                matching,
                load_error: signal(false),
                filters: {},
                startPolling: vi.fn(() => () => null),
                changeStatus,
            } as any),
            MockProvider(CateringOrderAlertsService, {
                enabled: signal(false),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                time_format_signal: signal('h:mm a'),
            } as any),
        ],
    });
    const order = (id: string, status: CateringOrder['status']) =>
        new CateringOrder({
            id,
            status,
            items: [new CateringItem({ name: 'Coffee', quantity: 1 })],
        });

    beforeEach(() => {
        changeStatus.mockReset();
        matching.set([
            order('1', 'pending'),
            order('2', 'preparing'),
            order('3', 'delivered'),
        ]);
        spectator = createComponent();
    });

    it('should show open orders in status columns', () => {
        const columns = spectator.component.columns();
        expect(columns.map((c) => c.status.id)).toEqual([
            'pending',
            'accepted',
            'preparing',
            'ready',
        ]);
        expect(spectator.queryAll('[kitchen-card]').length).toBe(2);
        expect(spectator.component.done_counts().delivered).toBe(1);
    });

    it('should move an order to the next status', () => {
        spectator.click('[kitchen-card] button[next-status]');
        expect(changeStatus).toHaveBeenCalledWith(matching()[0], 'accepted');
    });
});

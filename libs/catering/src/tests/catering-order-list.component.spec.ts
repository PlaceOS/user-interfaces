import { signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { CateringOrder, SettingsService } from '@placeos/common';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { CateringOrderListComponent } from '../lib/catering-order-list.component';
import { CateringOrdersService } from '../lib/catering-orders.service';

describe('CateringOrderListComponent', () => {
    let spectator: Spectator<CateringOrderListComponent>;
    const load_error = signal(false);
    const filtered = signal<CateringOrder[]>([]);
    const updateStatus = vi.fn();
    const createComponent = createComponentFactory({
        component: CateringOrderListComponent,
        declarations: [MockComponent(SimpleTableComponent)],
        providers: [
            MockProvider(CateringOrdersService, {
                filtered,
                status_counts: signal({}),
                loading: signal(false),
                load_error,
                last_updated: signal(0),
                order_filters: signal({}),
                caterers: signal([]),
                startPolling: vi.fn(),
                stopPolling: vi.fn(),
                changeStatus: vi.fn(),
                updateStatus,
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MockModule(MatProgressBarModule)],
    });

    beforeEach(() => {
        load_error.set(false);
        filtered.set([]);
        updateStatus.mockReset();
        updateStatus.mockResolvedValue(undefined);
        spectator = createComponent();
    });

    it('should show a banner when orders fail to load', () => {
        expect('[load-error]').not.toExist();
        load_error.set(true);
        spectator.detectChanges();
        expect('[load-error]').toExist();
    });

    it('should change the status of the selected listed orders', async () => {
        const orders = ['a', 'b', 'c'].map((id) => new CateringOrder({ id }));
        filtered.set(orders);
        updateStatus.mockRejectedValueOnce(new Error('offline'));
        // Orders that are no longer listed are not changed
        spectator.component.selected.set(['a', 'c', 'gone']);

        await spectator.component.setSelectedStatus('ready');

        expect(updateStatus).toHaveBeenCalledTimes(2);
        expect(updateStatus).toHaveBeenCalledWith(orders[0], 'ready');
        expect(updateStatus).toHaveBeenCalledWith(orders[2], 'ready');
        expect(spectator.component.selected()).toEqual([]);
        expect(spectator.component.bulk_busy()).toBe(false);
    });

    it('should expand and collapse every listed order', () => {
        filtered.set([
            new CateringOrder({ id: 'a' }),
            new CateringOrder({ id: 'b' }),
        ]);
        spectator.component.toggleExpanded('a');
        expect(spectator.component.all_expanded()).toBe(false);

        spectator.component.toggleAllExpanded();
        expect(spectator.component.all_expanded()).toBe(true);

        spectator.component.toggleAllExpanded();
        expect(spectator.component.show_children()).toEqual({});
    });
});

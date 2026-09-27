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
    const changeStatus = vi.fn();
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
                changeStatus,
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MockModule(MatProgressBarModule)],
    });

    beforeEach(() => {
        load_error.set(false);
        filtered.set([]);
        changeStatus.mockReset();
        spectator = createComponent();
    });

    it('should show loading bar', () => {
        expect('mat-progress-bar').toExist();
    });

    it('should show table', () => {
        expect('simple-table').toExist();
    });

    it('should show a banner when orders fail to load', () => {
        expect('[load-error]').not.toExist();
        load_error.set(true);
        spectator.detectChanges();
        expect('[load-error]').toExist();
    });

    it('should change status through the orders service', async () => {
        const order = new CateringOrder({ status: 'accepted' });
        await spectator.component.updateStatus(order, 'ready');
        expect(changeStatus).toHaveBeenCalledWith(order, 'ready');
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

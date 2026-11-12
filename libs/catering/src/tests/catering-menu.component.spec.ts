import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem } from '@placeos/common';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { CateringMenuComponent } from '../lib/catering-menu.component';
import { CateringOrdersService } from '../lib/catering-orders.service';
import { CateringStateService } from '../lib/catering-state.service';

describe('CateringMenuComponent', () => {
    const menu = signal<CateringItem[]>([]);
    const order_filters = signal<Record<string, string>>({});
    const createComponent = createComponentFactory({
        component: CateringMenuComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        providers: [
            MockProvider(CateringStateService, {
                menu,
                currency: signal('USD'),
                categories: [],
                caterer_list: [],
                zone: 'z1',
                updateItem: vi.fn(),
            }),
            MockProvider(CateringOrdersService, {
                filters: {},
                order_filters,
            }),
        ],
        imports: [MockModule(MatTabsModule)],
    });

    let spectator: Spectator<CateringMenuComponent>;

    beforeEach(() => {
        menu.set([]);
        order_filters.set({});
        spectator = createComponent();
    });

    it('should only show items that match the search', () => {
        menu.set([
            new CateringItem({ id: '1', name: 'Coffee', category: 'Drinks' }),
            new CateringItem({ id: '2', name: 'Muffin', category: 'Bakery' }),
        ]);
        order_filters.set({ search: 'drinks' });

        expect(spectator.component.menu().map((i) => i.id)).toEqual(['1']);
    });

    it('should only show items from the chosen caterer', () => {
        menu.set([
            new CateringItem({ id: '1', caterer: 'Cafe' }),
            new CateringItem({ id: '2', caterer: 'Deli' }),
            new CateringItem({ id: '3' }),
        ]);

        order_filters.set({ caterer: 'Cafe' });
        expect(spectator.component.menu().map((i) => i.id)).toEqual(['1']);
        order_filters.set({ caterer: '<empty>' });
        expect(spectator.component.menu().map((i) => i.id)).toEqual(['3']);
    });

    it('should stop and allow ordering of an item from the current zone', () => {
        const update = vi.mocked(
            spectator.inject(CateringStateService).updateItem,
        );
        const item = new CateringItem({ id: '1', hide_for_zones: ['z2'] });

        spectator.component.setEnabled(item, false);
        expect(update.mock.lastCall[0].hide_for_zones).toEqual(['z2', 'z1']);

        const hidden = new CateringItem({ id: '1', hide_for_zones: ['z1'] });
        expect(spectator.component.isEnabled(hidden)).toBe(false);
        spectator.component.setEnabled(hidden, true);
        expect(update.mock.lastCall[0].hide_for_zones).toEqual([]);
    });
});

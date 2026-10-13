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

    it('should show table', () => {
        expect('simple-table').toExist();
    });

    it('should only show items that match the search', () => {
        menu.set([
            new CateringItem({ id: '1', name: 'Coffee', category: 'Drinks' }),
            new CateringItem({ id: '2', name: 'Muffin', category: 'Bakery' }),
        ]);
        order_filters.set({ search: 'drinks' });

        expect(spectator.component.menu().map((i) => i.id)).toEqual(['1']);
    });
});

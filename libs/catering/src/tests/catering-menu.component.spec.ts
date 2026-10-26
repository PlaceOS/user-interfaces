import { signal } from '@angular/core';
import { createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { CateringMenuComponent } from '../lib/catering-menu.component';
import { CateringOrdersService } from '../lib/catering-orders.service';
import { CateringStateService } from '../lib/catering-state.service';

describe('CateringMenuComponent', () => {
    const createComponent = createComponentFactory({
        component: CateringMenuComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        providers: [
            MockProvider(CateringStateService, {
                menu: signal([]),
                currency: signal('USD'),
                categories: [],
                caterer_list: [],
            }),
            MockProvider(CateringOrdersService, {
                filters: {},
                order_filters: signal({}),
            }),
        ],
        imports: [MockModule(MatTabsModule)],
    });

    beforeEach(() => createComponent());

    it('should show table', () => {
        expect('simple-table').toExist();
    });
});

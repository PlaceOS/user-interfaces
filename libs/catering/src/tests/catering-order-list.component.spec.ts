import { signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { CateringOrderListComponent } from '../lib/catering-order-list.component';
import { CateringOrdersService } from '../lib/catering-orders.service';

describe('CateringOrderListComponent', () => {
    const createComponent = createComponentFactory({
        component: CateringOrderListComponent,
        declarations: [MockComponent(SimpleTableComponent)],
        providers: [
            MockProvider(CateringOrdersService, {
                filtered: signal([]),
                loading: signal(false),
                order_filters: signal({}),
                caterers: signal([]),
                startPolling: vi.fn(),
                stopPolling: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MockModule(MatProgressBarModule)],
    });

    beforeEach(() => createComponent());

    it('should show loading bar', () => {
        expect('mat-progress-bar').toExist();
    });

    it('should show table', () => {
        expect('simple-table').toExist();
    });
});

import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem, CateringOrder, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import {
    CateringDocketsService,
    CateringOrderDocketsComponent,
} from '../lib/catering-order-dockets.component';

describe('CateringOrderDocketsComponent', () => {
    let spectator: Spectator<CateringOrderDocketsComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderDocketsComponent,
        providers: [
            MockProvider(SettingsService, {
                time_format_signal: signal('h:mm a'),
            } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));
    afterEach(() => vi.useRealTimers());

    it('should render one docket per order and open the print dialog', () => {
        vi.useFakeTimers();
        const print = vi.spyOn(window, 'print').mockImplementation(() => null);
        const orders = ['1', '2'].map(
            (id) =>
                new CateringOrder({
                    id,
                    notes: 'No nuts',
                    items: [new CateringItem({ name: 'Coffee', quantity: 2 })],
                }),
        );

        spectator.inject(CateringDocketsService).print(orders);
        spectator.detectChanges();
        vi.runAllTimers();

        expect(spectator.queryAll('[docket]').length).toBe(2);
        expect(spectator.query('[docket]')).toContainText('2× Coffee');
        expect(spectator.query('[docket]')).toContainText('No nuts');
        expect(print).toHaveBeenCalled();
    });
});

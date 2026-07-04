import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SimpleTableComponent,
} from '@placeos/components';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { addMonths } from 'date-fns';

import { DealsListComponent } from '../../app/deals/deals-list.component';
import { DealsService } from '../../app/deals/deals.service';

describe('DealsListComponent', () => {
    let spectator: SpectatorRouting<DealsListComponent>;
    let deals: ReturnType<typeof signal<any[]>>;
    let remove_deal: jest.Mock;
    let view_deal: jest.Mock;

    const createComponent = createRoutingFactory({
        component: DealsListComponent,
        imports: [NoopAnimationsModule],
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(DealsService, {
                get deals() {
                    return deals;
                },
                removeDeal: (...args: any[]) => remove_deal(...args),
                viewDeal: (...args: any[]) => view_deal(...args),
            } as any),
        ],
    });

    beforeEach(() => {
        remove_deal = jest.fn();
        view_deal = jest.fn();
        deals = signal([
            {
                id: 'deal-1',
                name: 'A',
                type: 'food',
                expires_at: addMonths(Date.now(), 1).valueOf(),
            },
            {
                id: 'deal-2',
                name: 'B',
                type: 'drink',
                expires_at: addMonths(Date.now(), 5).valueOf(),
            },
            {
                id: 'deal-3',
                name: 'C',
                type: 'food',
                expires_at: Date.now() - 2 * 24 * 60 * 60 * 1000,
            },
        ]);
        spectator = createComponent();
    });

    it('should list the unique deal types', () => {
        expect(spectator.component.types()).toEqual(
            expect.arrayContaining(['food', 'drink']),
        );
        expect(spectator.component.types()).toHaveLength(2);
    });

    it('should filter deals expiring within the selected window', () => {
        spectator.component.expires.set(3);
        expect(spectator.component.filtered_deals().map((d) => d.id)).toEqual([
            'deal-1',
        ]);
    });

    it('should filter to only expired deals when set to -1', () => {
        spectator.component.expires.set(-1);
        expect(spectator.component.filtered_deals().map((d) => d.id)).toEqual([
            'deal-3',
        ]);
    });

    it('should filter deals by type', () => {
        spectator.component.type.set('food');
        expect(spectator.component.filtered_deals().map((d) => d.id)).toEqual([
            'deal-1',
            'deal-3',
        ]);
    });

    it('should delegate remove and view to the deals service', () => {
        const deal = deals()[0];
        spectator.component.remove(deal);
        spectator.component.view(deal);
        expect(remove_deal).toHaveBeenCalledWith(deal);
        expect(view_deal).toHaveBeenCalledWith(deal);
    });

    it('should toggle the display mode via the toolbar buttons', () => {
        expect(spectator.component.display()).toBe('list');
        spectator.click('button[name="deals-grid"]');
        expect(spectator.component.display()).toBe('grid');
    });
});

import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { MockComponent, MockProvider } from 'ng-mocks';

import { DealsManageComponent } from '../../app/deals/deals-manage.component';
import { DealsService } from '../../app/deals/deals.service';
import { UploadButtonComponent } from '../../app/ui/app-settings/upload-button.component';

describe('DealsManageComponent', () => {
    let spectator: SpectatorRouting<DealsManageComponent>;
    let get_deals: any;
    let save_deal: any;

    const createComponent = createRoutingFactory({
        component: DealsManageComponent,
        imports: [NoopAnimationsModule],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DateFieldComponent),
            MockComponent(UploadButtonComponent),
        ],
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: () => Promise.resolve(),
                initialised: signal(true) as any,
            } as any),
            MockProvider(DealsService, {
                getDeals: (...args: any[]) => get_deals(...args),
                saveDeal: (...args: any[]) => save_deal(...args),
            } as any),
        ],
    });

    beforeEach(() => {
        get_deals = vi.fn(async () => []);
        save_deal = vi.fn(async (deal: any) => deal);
        spectator = createComponent();
    });

    it('should not save when required fields are missing', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            name: '',
            type: '',
        }));

        await spectator.component.save();

        expect(save_deal).not.toHaveBeenCalled();
    });

    it('should save and navigate when the form is valid', async () => {
        const navigate = vi.spyOn(spectator.router, 'navigate');
        spectator.component.model.update((m) => ({
            ...m,
            name: 'Coffee Deal',
            type: 'food',
        }));

        await spectator.component.save();

        expect(save_deal).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'Coffee Deal', type: 'food' }),
        );
        expect(navigate).toHaveBeenCalledWith(['/deals-n-offers']);
    });

    it('should keep the loading flag cleared when a save succeeds', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            name: 'Coffee Deal',
            type: 'food',
        }));

        await spectator.component.save();

        expect(spectator.component.loading()).toBe('');
    });

    it('should load an existing deal into the model when a route id is present', async () => {
        get_deals.mockResolvedValue([
            { id: 'deal-1', name: 'Existing', type: 'food' },
        ]);

        spectator.setRouteParam('id', 'deal-1');
        await spectator.fixture.whenStable();
        await Promise.resolve();
        await spectator.fixture.whenStable();

        expect(get_deals).toHaveBeenCalled();
        expect(spectator.component.model().id).toBe('deal-1');
        expect(spectator.component.model().name).toBe('Existing');
    });
});

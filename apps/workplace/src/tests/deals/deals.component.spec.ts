import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { DealsComponent } from '../../app/deals/deals.component';
import { DealsService } from '../../app/deals/deals.service';

const NOW = Date.now();
const future = (offset = 100000) => NOW + offset;

describe('DealsComponent', () => {
    let spectator: SpectatorRouting<DealsComponent>;
    const deals = signal<any[]>([]);
    const view_deal = jest.fn();
    const settings_get = jest.fn();
    const createComponent = createRoutingFactory({
        component: DealsComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(DealsService, {
                deals,
                viewDeal: view_deal,
            } as any),
            MockProvider(OrganisationService, {
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
            } as any),
            MockProvider(SettingsService, {
                initialised: of(true),
                get: settings_get,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        jest.clearAllMocks();
        deals.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should exclude expired deals from the deals list', () => {
        deals.set([
            { id: 'a', type: 'food', name: 'A', expires_at: future() },
            { id: 'b', type: 'food', name: 'B', expires_at: NOW - 100000 },
        ]);

        expect(spectator.component.deals().map((_) => _.id)).toEqual(['a']);
    });

    it('should derive a unique sorted list of deal types', () => {
        deals.set([
            { id: 'a', type: 'travel', name: 'A', expires_at: future() },
            { id: 'b', type: 'food', name: 'B', expires_at: future() },
            { id: 'c', type: 'food', name: 'C', expires_at: future() },
        ]);

        expect(spectator.component.types()).toEqual(['food', 'travel']);
    });

    it('should filter deals by the selected type', () => {
        deals.set([
            { id: 'a', type: 'travel', name: 'A', expires_at: future() },
            { id: 'b', type: 'food', name: 'B', expires_at: future() },
        ]);

        spectator.component.type.set('food');

        expect(spectator.component.filtered_deals().map((_) => _.id)).toEqual([
            'b',
        ]);
    });

    it('should sort filtered deals ascending by expiry when sort is date_asc', () => {
        deals.set([
            { id: 'a', type: 'food', name: 'A', expires_at: future(300000) },
            { id: 'b', type: 'food', name: 'B', expires_at: future(100000) },
        ]);

        spectator.component.sort('date_asc');

        expect(spectator.component.filtered_deals().map((_) => _.id)).toEqual([
            'b',
            'a',
        ]);
    });

    it('should sort filtered deals descending by expiry when sort is date_desc', () => {
        deals.set([
            { id: 'a', type: 'food', name: 'A', expires_at: future(100000) },
            { id: 'b', type: 'food', name: 'B', expires_at: future(300000) },
        ]);

        spectator.component.sort('date_desc');

        expect(spectator.component.filtered_deals().map((_) => _.id)).toEqual([
            'b',
            'a',
        ]);
    });

    it('should delegate viewing a deal to the service', () => {
        const deal = { id: 'a', type: 'food', name: 'A', expires_at: future() };
        spectator.component.view(deal);

        expect(view_deal).toHaveBeenCalledWith(deal);
    });

    it('should redirect to home when the deals feature is disabled', async () => {
        settings_get.mockReturnValue(['some-other-feature']);
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate').mockResolvedValue(true);

        await spectator.component.ngOnInit();

        expect(navigate).toHaveBeenCalledWith(['/']);
    });

    it('should stay on the page when the deals feature is enabled', async () => {
        settings_get.mockReturnValue(['deals-n-offers']);
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate').mockResolvedValue(true);

        await spectator.component.ngOnInit();

        expect(navigate).not.toHaveBeenCalled();
    });
});

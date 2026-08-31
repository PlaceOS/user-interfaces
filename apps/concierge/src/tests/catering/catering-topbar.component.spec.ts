import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CateringOrdersService, CateringStateService } from '@placeos/catering';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { CateringTopbarComponent } from '../../app/catering/catering-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('CateringTopbarComponent', () => {
    let spectator: SpectatorRouting<CateringTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: CateringTopbarComponent,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
                active_levels: signal([]),
                levelWithID: vi.fn(),
                active_building: signal({}),
                active_region: signal({}),
            } as any),
            MockProvider(CateringStateService, {
                caterers: signal([]),
            }),
            MockProvider(CateringOrdersService, {
                filters: new BehaviorSubject({}),
                order_filters: signal({}),
            } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        declarations: [
            MockComponent(DateOptionsComponent),
            MockComponent(SearchbarComponent),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle query parameters', () => {
        expect(spectator.component.zones()).toEqual([]);
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        expect(spectator.component.zones()).toEqual(['zone-1234', 'zone-2345']);
    });

    it('should handle route parameters', () => {
        expect(spectator.component.page()).toBeFalsy();
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.component.page()).toBe('orders');
    });

    it('should keep selected levels as a flat list', () => {
        spectator.component.updateZones(['lvl-1', 'lvl-2']);

        expect(spectator.component.zones()).toEqual(['lvl-1', 'lvl-2']);
        const filters = spectator.inject(CateringOrdersService).filters as {
            zones?: string[];
        };
        expect(filters.zones).toEqual(['lvl-1', 'lvl-2']);
    });

    it('should clear the selected level when switching catering views', () => {
        spectator.component.page.set('menu');
        spectator.component.zones.set(['lvl-1']);

        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();

        expect(spectator.component.zones()).toEqual([]);
    });
});

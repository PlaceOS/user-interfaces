import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CateringOrdersService, CateringStateService } from '@placeos/catering';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { CateringTopbarComponent } from '../../app/catering/catering-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';
import { SettingsService } from '@placeos/common';

describe('CateringTopbarComponent', () => {
    let spectator: SpectatorRouting<CateringTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: CateringTopbarComponent,
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_levels: new BehaviorSubject([]),
                levelWithID: jest.fn(),
                active_building: new BehaviorSubject({}),
                active_region: new BehaviorSubject({}),
            } as any),
            MockProvider(CateringStateService, {}),
            MockProvider(CateringOrdersService, {
                filters: new BehaviorSubject({}),
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
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
        expect(spectator.component.zones).toEqual([]);
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        expect(spectator.component.zones).toEqual(['zone-1234', 'zone-2345']);
    });

    it('should handle route parameters', () => {
        expect(spectator.component.page).toBeFalsy();
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.component.page).toBe('orders');
    });
});

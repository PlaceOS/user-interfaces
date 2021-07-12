import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CateringOrdersService, CateringStateService } from '@placeos/catering';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { CateringTopbarComponent } from '../../app/catering/catering-topbar.component';

describe('CateringTopbarComponent', () => {
    let spectator: SpectatorRouting<CateringTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: CateringTopbarComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    active_levels: new BehaviorSubject([]),
                    levelWithID: jest.fn(),
                },
            },
            { provide: CateringStateService, useValue: {} },
            { provide: CateringOrdersService, useValue: {} },
            { provide: MatDialog, useValue: { open: jest.fn() } },
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

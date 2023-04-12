import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of, timer } from 'rxjs';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

jest.mock('@placeos/bookings');

import * as booking_mod from '@placeos/bookings';
import { MatDialog } from '@angular/material/dialog';

describe('DesksTopbarComponent', () => {
    let spectator: SpectatorRouting<DesksTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: DesksTopbarComponent,
        declarations: [
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        providers: [
            MockProvider(DesksStateService, {
                filters: new BehaviorSubject({}),
                setFilters: jest.fn(),
                approveDesk: jest.fn(),
                rejectDesk: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                active_levels: of([]),
                initialised: of(true),
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(MatDialog, {
                open: jest.fn(
                    () => ({ afterClosed: jest.fn(() => of()) } as any)
                ),
            }),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            MatProgressBarModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle zone_ids query param', async () => {
        jest.spyOn(spectator.component, 'updateZones');
        expect(spectator.component.updateZones).not.toBeCalled();
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(spectator.component.updateZones).toBeCalledWith([
            'zone-1234',
            'zone-2345',
        ]);
    });

    it('should handle approve query param', async () => {
        (booking_mod.showBooking as any) = jest.fn(() => of({}));
        spectator.setRouteQueryParam('approve', 'bkn-123');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(spectator.inject(DesksStateService).approveDesk).toBeCalled();
    });

    it('should handle reject query param', async () => {
        (booking_mod.showBooking as any) = jest.fn(() => of({}));
        spectator.setRouteQueryParam('reject', 'bkn-123');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(spectator.inject(DesksStateService).rejectDesk).toBeCalled();
    });
});

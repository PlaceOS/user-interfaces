import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of, timer } from 'rxjs';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

import { MatDialog } from '@angular/material/dialog';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

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
                filters: signal({}),
                levels: signal([]),
                setFilters: vi.fn(),
                approveDesk: vi.fn(),
                rejectDesk: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_levels: signal([]),
                initialised: signal(true),
                levelWithID: vi.fn(),
                buildings: [],
            }),
            MockProvider(MatDialog, {
                open: vi.fn(
                    () => ({ afterClosed: vi.fn(() => of()) }) as any,
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

    beforeEach(() => {
        // showBooking() reads via ts-client `get`; resolve a booking so the
        // approve/reject flow reaches the state service.
        vi.mocked(ts_client.get).mockResolvedValue({ id: 'bkn-123' } as any);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle zone_ids query param', async () => {
        vi.spyOn(spectator.component, 'updateZones');
        expect(spectator.component.updateZones).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(spectator.component.updateZones).toHaveBeenCalledWith([
            'zone-1234',
            'zone-2345',
        ]);
    });

    it('should handle approve query param', async () => {
        spectator.setRouteQueryParam('approve', 'bkn-123');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(
            spectator.inject(DesksStateService).approveDesk,
        ).toHaveBeenCalled();
    });

    it('should handle reject query param', async () => {
        spectator.setRouteQueryParam('reject', 'bkn-123');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(
            spectator.inject(DesksStateService).rejectDesk,
        ).toHaveBeenCalled();
    });
});

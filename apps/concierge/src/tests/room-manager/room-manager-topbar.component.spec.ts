import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of, timer } from 'rxjs';

import { BookingRulesModalComponent } from '../../app/ui/booking-rules-modal.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';
import { RoomManagerTopbarComponent } from '../../app/room-manager/room-manager-topbar.component';
import { RoomManagementService } from '../../app/room-manager/room-management.service';

describe('RoomManagerTopbarComponent', () => {
    let spectator: SpectatorRouting<RoomManagerTopbarComponent>;
    let settings_map: Record<string, any>;

    const createComponent = createRoutingFactory({
        component: RoomManagerTopbarComponent,
        declarations: [MockComponent(SearchbarComponent)],
        providers: [
            MockProvider(RoomManagementService, {
                options: signal({}),
                setFilters: jest.fn(),
                setSearchString: jest.fn(),
                editRoom: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                active_region: signal({ id: 'region-1' }),
                levelsForBuilding: jest.fn(() => [{ id: 'lvl-1' }]),
                levelsForRegion: jest.fn(() => []),
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
                building: { id: 'bld-1' },
                region: { id: 'region-1' },
            } as any),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(MatDialog, {
                open: jest.fn(() => ({ afterClosed: () => of() }) as any),
            }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        settings_map = { 'app.use_region': false };
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should open a new room modal', () => {
        spectator.component.newRoom();
        expect(
            spectator.inject(RoomManagementService).editRoom,
        ).toHaveBeenCalledWith();
    });

    it('should apply zone_ids from the query params once initialised', async () => {
        spectator.setRouteQueryParam('zone_ids', 'lvl-1,lvl-2');
        spectator.detectChanges();
        await timer(5).toPromise();
        expect(
            spectator.inject(RoomManagementService).setFilters,
        ).toHaveBeenCalledWith({ zones: ['lvl-1', 'lvl-2'] });
    });

    it('should open the booking rules modal for rooms', () => {
        spectator.component.manageRestrictions();
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            BookingRulesModalComponent,
            { data: { type: 'room' } },
        );
    });

    it('should list building levels when regions are disabled', () => {
        expect(spectator.component.levels()).toEqual([{ id: 'lvl-1' }]);
        expect(
            spectator.inject(OrganisationService).levelsForBuilding,
        ).toHaveBeenCalled();
    });
});

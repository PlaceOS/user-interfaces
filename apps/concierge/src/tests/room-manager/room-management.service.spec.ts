import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { PlaceSystem } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { RoomManagementService } from '../../app/room-manager/room-management.service';
import { RoomAlertModalComponent } from '../../app/room-manager/room-alert-modal.component';
import { RoomBookingHistoryModalComponent } from '../../app/room-manager/room-booking-history-modal.component';
import { RoomModalComponent } from '../../app/room-manager/room-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('RoomManagementService', () => {
    let spectator: SpectatorService<RoomManagementService>;
    let dialog_open: any;
    let settings_map: Record<string, any>;

    const organisation_service: any = {
        organisation: { id: 'org-1' },
        active_building: signal({ id: 'bld-1' }),
        active_region: signal({ id: 'region-1' }),
        levelWithID: vi.fn(() => ({ id: 'lvl-1' })),
    };

    const createService = createServiceFactory({
        service: RoomManagementService,
        providers: [
            MockProvider(OrganisationService, organisation_service),
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(MatDialog, {} as any),
        ],
    });

    beforeEach(() => {
        settings_map = { 'app.use_region': false };
        organisation_service.active_building = signal({ id: 'bld-1' });
        organisation_service.active_region = signal({ id: 'region-1' });
        dialog_open = vi.fn(() => ({ afterClosed: () => of(null) }) as any);
        vi.clearAllMocks();
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: {},
        });
        (ts_client_mod.querySystems as any).mockReturnValue(
            Promise.resolve({ data: [] }),
        );
        spectator = createService();
        (spectator.inject(MatDialog) as any).open = dialog_open;
    });

    it('should merge partial filter updates into the current options', () => {
        spectator.service.setFilters({ zones: ['lvl-1'] });
        spectator.service.setSearchString('board');
        expect(spectator.service.options()).toEqual({
            zones: ['lvl-1'],
            search: 'board',
        });
    });

    it('should open the room modal when editing a room', () => {
        const room = new PlaceSystem({ id: 'sys-1' });
        spectator.service.editRoom(room);
        expect(dialog_open).toHaveBeenCalledWith(RoomModalComponent, {
            data: { room },
        });
    });

    it('should open the alert modal, ignoring empty rooms', () => {
        spectator.service.setRoomAlert(null as any);
        expect(dialog_open).not.toHaveBeenCalled();

        const room = new PlaceSystem({ id: 'sys-1' });
        spectator.service.setRoomAlert(room);
        expect(dialog_open).toHaveBeenCalledWith(RoomAlertModalComponent, {
            data: { room },
        });
    });

    it('should open a fullscreen booking history modal', () => {
        spectator.service.viewBookingHistory(null as any);
        expect(dialog_open).not.toHaveBeenCalled();

        const room = new PlaceSystem({ id: 'sys-1' });
        spectator.service.viewBookingHistory(room);
        expect(dialog_open).toHaveBeenCalledWith(
            RoomBookingHistoryModalComponent,
            expect.objectContaining({
                data: { room },
                panelClass: 'fullscreen-dialog',
                width: '100vw',
                height: '100vh',
            }),
        );
    });

    it('should apply search and zone filters to the loaded room list', async () => {
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: {},
        });
        (ts_client_mod.querySystems as any).mockReturnValue(
            Promise.resolve({
                data: [
                    { id: 'a', name: 'Alpha', zones: ['bld-1', 'lvl-1'] },
                    { id: 'b', name: 'Beta', zones: ['bld-1', 'lvl-2'] },
                ],
            }),
        );

        spectator = createService();
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            await new Promise((r) => setTimeout(r, 5));
        }

        expect(spectator.service.room_list()).toHaveLength(2);

        spectator.service.setFilters({ zones: ['lvl-2'] });
        expect(spectator.service.filtered_rooms()).toEqual([
            expect.objectContaining({ id: 'b' }),
        ]);

        spectator.service.setFilters({ zones: [], search: 'alph' });
        expect(spectator.service.filtered_rooms()).toEqual([
            expect.objectContaining({ id: 'a' }),
        ]);
    });

    it('should apply saved alerts onto matching rooms in the list', async () => {
        (ts_client_mod.showMetadata as any).mockResolvedValue({
            details: { a: ['warn', 'Closed for maintenance'] },
        });
        (ts_client_mod.querySystems as any).mockReturnValue(
            Promise.resolve({
                data: [{ id: 'a', name: 'Alpha', zones: ['bld-1'] }],
            }),
        );

        spectator = createService();
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            await new Promise((r) => setTimeout(r, 5));
        }

        expect((spectator.service.room_list()[0] as any).alert).toEqual({
            status: 'warn',
            message: 'Closed for maintenance',
        });
    });
});

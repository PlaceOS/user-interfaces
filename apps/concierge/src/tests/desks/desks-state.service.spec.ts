import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { lastValueFrom, of } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { DesksStateService } from '../../app/desks/desks-state.service';
import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';

jest.mock('@placeos/bookings');
jest.mock('@placeos/common');
jest.mock('@placeos/components');

describe('DesksStateService', () => {
    let spectator: SpectatorService<DesksStateService>;
    const createService = createServiceFactory({
        service: DesksStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                active_levels: of([]),
                initialised: of(true),
                levelWithID: jest.fn(),
                buildings: [],
            }),
        ],
    });

    beforeEach(() => {
        (booking_mod as any).queryPagedBookings = jest.fn(() =>
            of({ data: [], total: 0, next: null }),
        );
        (booking_mod as any).removeBooking = jest.fn(() => of(undefined));
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        (common_mod as any).nextValueFrom = jest.fn((obs) =>
            lastValueFrom(obs),
        );
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should cancel only one recurring booking instance', async () => {
        const booking = {
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        } as any;

        await spectator.service.cancelBooking(booking);

        expect(booking_mod.removeBooking).toHaveBeenCalledWith('booking-1', {
            instance: true,
            start_time: 1_740_000_000,
        });
    });

    it('should delete recurring booking series by parent booking id', async () => {
        const booking = {
            id: 'booking-1',
            parent_id: 'booking-parent',
            instance: 1_740_000_000,
        } as any;

        await spectator.service.cancelBooking(booking, true);

        expect(booking_mod.removeBooking).toHaveBeenCalledWith(
            'booking-parent',
            {},
        );
    });

    it.todo('should handle loading desk bookings');
    it.todo('should handle loading desk list');
    it.todo('should handle filtering of desk bookings');
    it.todo('should handle filtering of desk list');
    it.todo('should allow for polling of desk bookings');
    it.todo('should allow checking in of bookings');
    it.todo('should allow approving of bookings');
    it.todo('should allow rejection of bookings');
    it.todo('should allow toggling of access state for booking users');
    it.todo('should allow rejection of all displayed bookings');
});

import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { StaffStateService } from '../../app/staff/staff-state.service';

describe('StaffStateService', () => {
    let spectator: SpectatorService<StaffStateService>;
    const createService = createServiceFactory({
        service: StaffStateService,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal(null),
                    active_levels: signal([]),
                    initialised: signal(true),
                    levelWithID: vi.fn(),
                    buildings: [],
                },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create sevice', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should allow for polling');
    it.todo('should load user list');
    it.todo('should load user checkin events');
    it.todo('should allow filtering users');
    it.todo('should allow checking in users');
    it.todo('should allow checking out users');
});

import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { StaffStateService } from '../../app/staff/staff-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

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
    it('should keep an empty user list when the directory call fails', async () => {
        vi.spyOn(ts_client, 'get').mockRejectedValue(new Error('500'));

        await (spectator.service as any).loadUsers();

        expect(spectator.service.filtered_users()).toEqual([]);
    });
    it.todo('should load user checkin events');
    it('should filter users without matching case', () => {
        (spectator.service as any)._users.set([
            { name: 'Jane Doe', email: 'jane@place.tech' },
            { name: 'John Smith', email: 'john@place.tech' },
        ]);

        spectator.service.setSearchString('JOHN');

        expect(
            spectator.service.filtered_users().map((_) => _.name),
        ).toEqual(['John Smith']);
    });
    it.todo('should allow checking in users');
    it.todo('should allow checking out users');
});

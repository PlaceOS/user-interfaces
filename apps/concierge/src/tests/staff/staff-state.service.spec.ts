import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { StaffStateService } from '../../app/staff/staff-state.service';

vi.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

// `get` is overloaded; use the JSON form so mocks accept response bodies.
const get = vi.mocked(ts_client.get as (url: string) => Promise<unknown>);

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

    beforeEach(() => {
        get.mockResolvedValue([]);
        spectator = createService();
    });

    it('should create sevice', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should allow for polling');
    it('should flag a failed directory load', async () => {
        get.mockRejectedValue(new Error('500'));

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(true);
        expect(spectator.service.filtered_users()).toEqual([]);
    });
    it('should clear the error when a retry succeeds', async () => {
        get.mockRejectedValue(new Error('500'));
        await spectator.service.loadUsers();
        get.mockResolvedValue([{ name: 'Jim', email: 'jim@place.tech' }]);

        await spectator.service.loadUsers();

        expect(spectator.service.users_error()).toBe(false);
        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'Jim',
        ]);
    });
    it.todo('should load user checkin events');
    it('should filter users without matching case', () => {
        (spectator.service as any)._users.set([
            { name: 'Jane Doe', email: 'jane@place.tech' },
            { name: 'John Smith', email: 'john@place.tech' },
        ]);

        spectator.service.setSearchString('JOHN');

        expect(spectator.service.filtered_users().map((_) => _.name)).toEqual([
            'John Smith',
        ]);
    });
    it.todo('should allow checking in users');
    it.todo('should allow checking out users');
});

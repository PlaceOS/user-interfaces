import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
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
    it('should stop the progress bar when the check-in load fails', async () => {
        get.mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();

        expect(spectator.service.loading()).toBe(false);
    });
    it('should notify once for a run of failed check-in loads', async () => {
        const snackbar = { open: vi.fn(() => ({ onAction: () => ({ subscribe: vi.fn() }) })) };
        setNotifyOutlet(snackbar as any);
        get.mockRejectedValue(new Error('500'));

        await (spectator.service as any)._loadEvents();
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(1);

        get.mockResolvedValue([]);
        await (spectator.service as any)._loadEvents();
        get.mockRejectedValue(new Error('500'));
        await (spectator.service as any)._loadEvents();
        expect(snackbar.open).toHaveBeenCalledTimes(2);
        setNotifyOutlet(null);
    });
    it('should ignore a directory load while one is in progress', async () => {
        let resolve: (value: unknown) => void;
        get.mockClear();
        get.mockReturnValue(new Promise((r) => (resolve = r)));

        const first = spectator.service.loadUsers();
        const second = spectator.service.loadUsers();
        expect(spectator.service.users_loading()).toBe(true);
        expect(get).toHaveBeenCalledTimes(1);

        resolve([]);
        await Promise.all([first, second]);
        expect(spectator.service.users_loading()).toBe(false);
    });
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

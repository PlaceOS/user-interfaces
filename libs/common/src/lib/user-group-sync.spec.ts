vi.mock('@placeos/ts-client', { spy: true });

import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import * as ts_client from '@placeos/ts-client';
import { PlaceUser } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { StaffUser } from './types/user.class';
import { watchUserGroupSync } from './user-group-sync';
import { setCurrentUser } from './user-state';

describe('watchUserGroupSync', () => {
    const events = new Subject<NavigationEnd>();
    const router = { events, url: '/unauthorised', navigateByUrl: vi.fn() };

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        TestBed.configureTestingModule({
            providers: [{ provide: Router, useValue: router }],
        });
        setCurrentUser(
            new StaffUser({ id: 'user-1', email: 'a@b.c', groups: [] }),
        );
        vi.mocked(ts_client.currentGroups).mockResolvedValue([]);
        vi.mocked(ts_client.showUser).mockResolvedValue(
            new PlaceUser({ id: 'user-1', groups: ['staff'] }),
        );
    });

    afterEach(() => vi.useRealTimers());

    it('retries access 2 seconds after the first page is shown when groups change', async () => {
        TestBed.runInInjectionContext(() => watchUserGroupSync());
        events.next(new NavigationEnd(1, '/-', '/-?mock=true'));
        await vi.advanceTimersByTimeAsync(1_000);
        events.next(new NavigationEnd(2, '/unauthorised', '/unauthorised'));

        await vi.advanceTimersByTimeAsync(1_999);
        expect(ts_client.showUser).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(1);
        expect(ts_client.showUser).toHaveBeenCalledWith('current');
        expect(router.navigateByUrl).toHaveBeenCalledWith('/');
    });
});

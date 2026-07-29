import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { PlaceSystem, querySystems } from '@placeos/ts-client';

import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

type SignageServiceTestAccess = SignageService & Record<string, any>;

/** Display search runs on the backend so the results paginate like the list */
describe('SignageService display search', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    const pageOf = (ids: string[], total = ids.length, next: any = null) => ({
        data: ids.map(
            (id) => new PlaceSystem({ id, name: id, signage: true } as any),
        ),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        // Displays are only queried for a user allowed to see group data
        setCurrentUser({ id: 'user-1', email: 'a@b.c', sys_admin: true } as any);
        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: {} },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_n: string, d?: any) => signal(d),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: signal(true),
                        organisation: { id: 'org-1' },
                    },
                },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
    });

    afterEach(() => vi.useRealTimers());

    const init = async () => {
        (querySystems as any).mockResolvedValue(pageOf(['lobby', 'cafe']));
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        TestBed.tick();
        await flush();
        return service;
    };

    it('should query the backend for the search term', async () => {
        const service = await init();
        (querySystems as any).mockResolvedValue(pageOf(['lobby'], 1));

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        const params = (querySystems as any).mock.calls.at(-1)[0];
        expect(params.q).toBe('lobby');
        expect(params.limit).toBe(200);
        expect(service.filtered_displays().map((_: any) => _.id)).toEqual([
            'lobby',
        ]);
    });

    it('should page the search results', async () => {
        const service = await init();
        (querySystems as any).mockResolvedValue(
            pageOf(['lobby-1'], 2, pageOf(['lobby-2'], 2)),
        );

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();
        expect(service.displays_has_more()).toBe(true);

        service.loadMoreDisplays();
        await flush();

        expect(service.filtered_displays().map((_: any) => _.id)).toEqual([
            'lobby-1',
            'lobby-2',
        ]);
        expect(service.displays_has_more()).toBe(false);
    });

    // Zone/schedule views resolve displays by id, so a search must not take
    // displays away from them.
    it('should keep loaded displays available for id lookups while searching', async () => {
        const service = await init();
        expect(service.displays().map((_: any) => _.id)).toEqual([
            'cafe',
            'lobby',
        ]);
        (querySystems as any).mockResolvedValue(pageOf(['lobby'], 1));

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        expect(service.filtered_displays().map((_: any) => _.id)).toEqual([
            'lobby',
        ]);
        expect(service.displays().map((_: any) => _.id)).toEqual([
            'cafe',
            'lobby',
        ]);
    });
});

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { querySignagePlaylists, SignagePlaylist } from '@placeos/ts-client';

import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

type SignageServiceTestAccess = SignageService & Record<string, any>;

/** Playlist search runs on the backend so the results paginate like displays. */
describe('SignageService playlist search', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    const pageOf = (ids: string[], total = ids.length, next: any = null) => ({
        data: ids.map((id) => new SignagePlaylist({ id, name: id } as any)),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: {} },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_name: string, default_value?: any) =>
                            signal(default_value),
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
        (querySignagePlaylists as any).mockResolvedValue(
            pageOf(['news', 'events']),
        );
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        TestBed.tick();
        await flush();
        return service;
    };

    it('queries the backend for the search term', async () => {
        const service = await init();
        (querySignagePlaylists as any).mockResolvedValue(pageOf(['news'], 1));

        service.playlist_search_term.set('news');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        const params = (querySignagePlaylists as any).mock.calls.at(-1)[0];
        expect(params.q).toBe('news');
        expect(params.limit).toBe(200);
        expect(
            service.filtered_playlists().map((item: any) => item.id),
        ).toEqual(['news']);
    });

    it('pages the search results', async () => {
        const service = await init();
        (querySignagePlaylists as any).mockResolvedValue(
            pageOf(['news-1'], 2, pageOf(['news-2'], 2)),
        );

        service.playlist_search_term.set('news');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();
        expect(service.playlists_has_more()).toBe(true);

        service.loadMorePlaylists();
        await flush();

        expect(
            service.filtered_playlists().map((item: any) => item.id),
        ).toEqual(['news-1', 'news-2']);
        expect(service.playlists_has_more()).toBe(false);
    });

    it('keeps loaded playlists available for id lookups while searching', async () => {
        const service = await init();
        expect(service.playlists().map((item: any) => item.id)).toEqual([
            'events',
            'news',
        ]);
        (querySignagePlaylists as any).mockResolvedValue(pageOf(['news'], 1));

        service.playlist_search_term.set('news');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        expect(
            service.filtered_playlists().map((item: any) => item.id),
        ).toEqual(['news']);
        expect(service.playlists().map((item: any) => item.id)).toEqual([
            'events',
            'news',
        ]);
    });
});

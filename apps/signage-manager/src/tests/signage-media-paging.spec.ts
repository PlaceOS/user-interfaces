import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { querySignageMedia, SignageMedia } from '@placeos/ts-client';

import { SignageMediaService } from '../app/media/signage-media.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Covers the media library being paged in as the user scrolls the list. */
describe('SignageMediaService media paging', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    /**
     * Build a page whose `next` yields the following page, API style. Ids are
     * single letters and timestamps descend with them, so the list order the
     * service sorts into is alphabetical no matter which page an item is on.
     */
    const pageOf = (ids: string[], total: number, next: any = null) => ({
        data: ids.map(
            (id) =>
                new SignageMedia({ id, created_at: 1000 - id.charCodeAt(0) }),
        ),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    const idsOf = (service: SignageMediaService) =>
        service.media().map((item) => item.id);

    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.configureTestingModule({
            providers: [
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

    /** Inject the service and settle it on `first_page` as its first page. */
    const loadFirstPage = async (first_page: unknown) => {
        // The library loads for users who can query, such as system admins
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        (querySignageMedia as any).mockResolvedValue(first_page);
        const service = TestBed.inject(SignageMediaService);
        TestBed.tick();
        await flush();
        return service;
    };

    it('should keep the list ordered by newest first across pages', async () => {
        const service = await loadFirstPage({
            data: [new SignageMedia({ id: 'old', created_at: 1 })],
            total: 2,
            next: () =>
                Promise.resolve({
                    data: [new SignageMedia({ id: 'new', created_at: 9 })],
                    total: 2,
                    next: null,
                }),
        });

        service.loadMoreMedia();
        await flush();

        expect(idsOf(service)).toEqual(['new', 'old']);
    });

    // Filtering loaded pages would miss media that has not been fetched yet
    it('should send the search term to the backend and report its total', async () => {
        vi.useFakeTimers({ shouldAdvanceTime: true });
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        (querySignageMedia as any).mockResolvedValue(pageOf(['a', 'b'], 9));
        const service = TestBed.inject(SignageMediaService);
        TestBed.tick();
        await flush();
        (querySignageMedia as any).mockResolvedValue(pageOf(['c'], 5));

        service.search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();
        vi.useRealTimers();

        const params = (querySignageMedia as any).mock.calls.at(-1)[0];
        expect(params.q).toBe('lobby');
        expect(idsOf(service)).toEqual(['c']);
        expect(service.media_total()).toBe(5);
    });

    // Sorts and filters run in the browser, so they need every page
    it('should load the remaining pages while a sort or filter is active', async () => {
        const service = await loadFirstPage(
            pageOf(['a'], 3, pageOf(['b'], 3, pageOf(['c'], 3))),
        );
        expect(service.media_has_more()).toBe(true);

        service.media_view.set({ sort: 'name', type: null, expiry: null });
        for (let i = 0; i < 5; i++) {
            TestBed.tick();
            await flush();
        }

        expect(idsOf(service)).toEqual(['a', 'b', 'c']);
        expect(service.media_has_more()).toBe(false);
    });

    it('should fetch the first page again when it failed', async () => {
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        (querySignageMedia as any)
            .mockRejectedValueOnce(new Error('offline'))
            .mockResolvedValue(pageOf(['a'], 1));
        const service = TestBed.inject(SignageMediaService);
        TestBed.tick();
        await flush();

        expect(service.media_error()).toBe(true);

        service.retryMedia();
        TestBed.tick();
        await flush();

        expect(service.media_error()).toBe(false);
        expect(idsOf(service)).toEqual(['a']);
    });
});

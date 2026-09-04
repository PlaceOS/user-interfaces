import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { querySignageMedia, SignageMedia } from '@placeos/ts-client';

import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

type SignageServiceTestAccess = SignageService & Record<string, any>;

/** Covers the media library being paged in as the user scrolls the list. */
describe('SignageService media paging', () => {
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

    const idsOf = (service: SignageService) =>
        service.media().map((item) => item.id);

    beforeEach(() => {
        vi.clearAllMocks();
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

    /** Inject the service and settle it on `first_page` as its first page. */
    const loadFirstPage = async (first_page: any) => {
        (querySignageMedia as any).mockResolvedValue(first_page);
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        // The reload effect bumps the token on its first run; let it settle so
        // the page below is not discarded as stale.
        await flush();
        await service['_fetchMediaPage'](
            Promise.resolve(first_page),
            service['_media_token'],
        );
        return service;
    };

    it('should load one page up front and leave the rest for scrolling', async () => {
        const service = await loadFirstPage(
            pageOf(['a', 'b'], 4, pageOf(['c', 'd'], 4)),
        );

        expect(idsOf(service)).toEqual(['a', 'b']);
        expect(service.media_has_more()).toBe(true);
        expect(service.media_loading()).toBe(false);
    });

    it('should append the next page when the list is scrolled', async () => {
        const service = await loadFirstPage(
            pageOf(['a', 'b'], 4, pageOf(['c', 'd'], 4)),
        );

        service.loadMoreMedia();
        await flush();

        expect(idsOf(service)).toEqual(['a', 'b', 'c', 'd']);
        expect(service.media_has_more()).toBe(false);
        expect(service.media_loading()).toBe(false);
    });

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

    it('should not request the next page twice while one is in flight', async () => {
        const service = await loadFirstPage(pageOf(['a'], 3));
        // Hold the next page open so both calls land while it is loading
        const next = vi.fn(() => new Promise(() => {}));
        service['_media_next'] = next as any;
        service['_media_has_more'].set(true);

        service.loadMoreMedia();
        service.loadMoreMedia();

        expect(next).toHaveBeenCalledTimes(1);
    });

    it('should not request anything once the last page is loaded', async () => {
        const service = await loadFirstPage(pageOf(['a', 'b'], 2));
        const next = vi.fn();
        service['_media_next'] = next as any;

        expect(service.media_has_more()).toBe(false);
        service.loadMoreMedia();

        expect(next).not.toHaveBeenCalled();
    });

    it('should not duplicate an item already held when its page arrives', async () => {
        const service = await loadFirstPage(
            pageOf(['a', 'b'], 3, pageOf(['b', 'c'], 3)),
        );

        service.loadMoreMedia();
        await flush();

        expect(idsOf(service).sort()).toEqual(['a', 'b', 'c']);
    });

    it('should discard pages from a superseded query', async () => {
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        const stale_token = service['_media_token'];
        service['_media_token'] = stale_token + 1;

        await service['_fetchMediaPage'](
            Promise.resolve(pageOf(['a'], 1)),
            stale_token,
        );

        expect(service.media()).toEqual([]);
    });
});

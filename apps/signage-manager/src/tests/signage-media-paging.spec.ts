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

/**
 * Covers the temporary workaround that loads the whole media library up front.
 * Delete alongside _fetchAllMediaPages once the backend pagination is fixed.
 */
describe('SignageService media paging', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    /** Build a page whose `next` yields the following page, API style */
    const pageOf = (ids: string[], total: number, next: any = null) => ({
        data: ids.map((id) => new SignageMedia({ id, created_at: 1 })),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

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

    const loadAll = async (first_page: any) => {
        (querySignageMedia as any).mockResolvedValue(first_page);
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        // The reload effect bumps the token on its first run; let it settle so
        // the pages below are not discarded as stale.
        await flush();
        await service['_fetchAllMediaPages'](
            Promise.resolve(first_page),
            service['_media_token'],
        );
        return service;
    };

    it('should pull every page without waiting for a scroll', async () => {
        const service = await loadAll(
            pageOf(['a', 'b'], 6, pageOf(['c', 'd'], 6, pageOf(['e', 'f'], 6))),
        );
        await flush();

        expect(
            service
                .media()
                .map((item) => item.id)
                .sort(),
        ).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
        expect(service.media_has_more()).toBe(false);
        expect(service.media_loading()).toBe(false);
    });

    it('should not duplicate items when pages overlap', async () => {
        const service = await loadAll(
            pageOf(['a', 'b'], 4, pageOf(['b', 'c'], 4)),
        );

        expect(
            service
                .media()
                .map((item) => item.id)
                .sort(),
        ).toEqual(['a', 'b', 'c']);
    });

    // The endpoint being worked around is the one handing out these cursors,
    // so a page that repeats itself must not spin forever.
    it('should stop when a page adds nothing new', async () => {
        const repeating: any = { data: [], total: 99, next: null };
        repeating.data = [new SignageMedia({ id: 'a', created_at: 1 })];
        repeating.next = () => Promise.resolve(repeating);

        const service = await loadAll(repeating);

        expect(service.media().map((item) => item.id)).toEqual(['a']);
        expect(service.media_has_more()).toBe(false);
    });

    it('should stop at the page cap', async () => {
        // Every page reports a distinct item and always offers another page
        let index = 0;
        const nextPage: any = () => {
            index += 1;
            return Promise.resolve({
                data: [new SignageMedia({ id: `m-${index}`, created_at: 1 })],
                total: 10_000,
                next: nextPage,
            });
        };
        const service = await loadAll({
            data: [new SignageMedia({ id: 'm-0', created_at: 1 })],
            total: 10_000,
            next: nextPage,
        });

        expect(service.media().length).toBe(
            (SignageService as any).MAX_MEDIA_PAGES,
        );
        expect(service.media_has_more()).toBe(false);
    });

    it('should discard pages from a superseded query', async () => {
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        const stale_token = service['_media_token'];
        service['_media_token'] = stale_token + 1;

        await service['_fetchAllMediaPages'](
            Promise.resolve(pageOf(['a'], 1)),
            stale_token,
        );

        expect(service.media()).toEqual([]);
    });
});

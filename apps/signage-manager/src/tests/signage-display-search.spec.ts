import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    playlist,
    playlist_media,
    signage_templates,
    systems,
    zones,
} from '@placeos/ts-client';
import { mockPage } from '@placeos/ts-client/compat';

import { SignageDisplayService } from '../app/displays/signage-display.service';
import { CommandPaletteService } from '../app/shared/command-palette.service';
import { signageSystem } from '../app/signage-models';

vi.mock('@placeos/ts-client', { spy: true });

type SignageDisplayServiceTestAccess = SignageDisplayService &
    Record<string, unknown>;

/** Display search runs on the backend so the results paginate like the list */
describe('SignageDisplayService display search', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    const pageOf = (
        ids: string[],
        total = ids.length,
        next: unknown = null,
    ) => ({
        data: ids.map((id) => signageSystem({ id, name: id, signage: true })),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    /** Serve the display list query with a page */
    const mockDisplayList = (page: ReturnType<typeof pageOf>) =>
        vi.mocked(systems.query).mockResolvedValue(mockPage(page));
    const lastDisplayQuery = () =>
        vi.mocked(systems.query).mock.calls.at(-1)![0];

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        // Displays are only queried for a user allowed to see group data
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        TestBed.configureTestingModule({
            providers: [
                { provide: UploadsService, useValue: {} },
                {
                    provide: SettingsService,
                    useValue: {
                        get: vi.fn(),
                        signal: (_n: string, d?: unknown) => signal(d),
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
        mockDisplayList(pageOf(['lobby', 'cafe']));
        const service = TestBed.inject(
            SignageDisplayService,
        ) as unknown as SignageDisplayServiceTestAccess;
        TestBed.tick();
        await flush();
        return service;
    };

    it('should query the backend for the search term', async () => {
        const service = await init();
        mockDisplayList(pageOf(['lobby'], 1));

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        const params = lastDisplayQuery();
        expect(params.q).toBe('lobby');
        expect(params.limit).toBe(200);
        expect(service.filtered_displays().map((_) => _.id)).toEqual(['lobby']);
    });

    it('loads the first page again after it failed', async () => {
        mockDisplayList(pageOf(['lobby'], 1));
        vi.mocked(systems.query).mockRejectedValueOnce(new Error('offline'));
        const service = TestBed.inject(SignageDisplayService);
        TestBed.tick();
        await flush();
        expect(service.displays_error()).toBe(true);

        service.retryDisplays();
        TestBed.tick();
        await flush();

        expect(service.displays_error()).toBe(false);
        expect(service.filtered_displays().map(({ id }) => id)).toEqual([
            'lobby',
        ]);
    });

    it('should page the search results', async () => {
        const service = await init();
        mockDisplayList(pageOf(['lobby-1'], 2, pageOf(['lobby-2'], 2)));

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();
        expect(service.displays_has_more()).toBe(true);

        service.loadMoreDisplays();
        await flush();

        expect(service.filtered_displays().map((_) => _.id)).toEqual([
            'lobby-1',
            'lobby-2',
        ]);
        expect(service.displays_has_more()).toBe(false);
    });

    // Zone/schedule views resolve displays by id, so a search must not take
    // displays away from them.
    it('should keep loaded displays available for id lookups while searching', async () => {
        const service = await init();
        expect(service.displays().map((_) => _.id)).toEqual(['cafe', 'lobby']);
        mockDisplayList(pageOf(['lobby'], 1));

        service.display_search_term.set('lobby');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        expect(service.filtered_displays().map((_) => _.id)).toEqual(['lobby']);
        expect(service.displays().map((_) => _.id)).toEqual(['cafe', 'lobby']);
    });

    it('searches every signage type with a small limit for the command palette', async () => {
        await init();
        const palette = TestBed.inject(CommandPaletteService);
        vi.clearAllMocks();
        mockDisplayList(pageOf(['lobby']));
        for (const query of [
            playlist.query,
            playlist_media.query,
            signage_templates.query,
            zones.query,
        ]) {
            (query as any).mockResolvedValue(mockPage({ data: [], total: 0 }));
        }

        expect(await palette.searchAll('  ')).toMatchObject({ displays: [] });
        expect(systems.query).not.toHaveBeenCalled();

        const results = await palette.searchAll('lobby');

        expect(results.displays.map(({ id }) => id)).toEqual(['lobby']);
        expect(lastDisplayQuery()).toMatchObject({
            q: 'lobby',
            limit: 5,
            signage: true,
        });
    });
});

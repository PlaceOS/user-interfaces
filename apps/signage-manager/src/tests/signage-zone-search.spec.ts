import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { PlaceZone, queryZones } from '@placeos/ts-client';
import { SignageZoneService } from '../app/zones/signage-zone.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageZoneService zone search', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        setCurrentUser({
            id: 'user-1',
            email: 'a@b.c',
            sys_admin: true,
        } as any);
        (queryZones as any).mockResolvedValue({ data: [], total: 0 });
        TestBed.configureTestingModule({
            providers: [
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

    it('queries zones by search term under the selected zone', async () => {
        const service = TestBed.inject(SignageZoneService);
        TestBed.tick();
        await flush();
        (queryZones as any).mockResolvedValue({
            data: [new PlaceZone({ id: 'lobby', display_name: 'Lobby' })],
            total: 1,
        });

        service.selected_zone.set(new PlaceZone({ id: 'parent-1' }));
        service.zone_search_term.set(' lobby ');
        await vi.advanceTimersByTimeAsync(500);
        TestBed.tick();
        await flush();

        expect((queryZones as any).mock.calls.at(-1)[0]).toEqual({
            q: 'lobby',
            parent_id: 'parent-1',
            limit: 2500,
            include_children_count: true,
        });
        expect(service.filtered_zones().map((zone) => zone.id)).toEqual([
            'lobby',
        ]);
    });

    it('reports a failed zone load and loads it again on retry', async () => {
        vi.mocked(queryZones).mockRejectedValue(new Error('offline'));
        const service = TestBed.inject(SignageZoneService);
        TestBed.tick();
        await flush();
        expect(service.zones_error()).toBe(true);
        expect(service.all_zones()).toEqual([]);

        vi.mocked(queryZones).mockResolvedValue({
            data: [new PlaceZone({ id: 'z1', tags: ['signage'] })],
            total: 7,
            next: null,
        });
        service.reloadZones();
        TestBed.tick();
        await flush();

        expect(service.zones_error()).toBe(false);
        expect(service.all_zones().map(({ id }) => id)).toEqual(['z1']);
        // The header count reads the signage zone list, so it reloads too
        expect(service.signage_zone_count()).toBe(7);
    });

    it('counts signage zones from the server total', async () => {
        vi.mocked(queryZones).mockResolvedValue({
            data: [new PlaceZone({ id: 'z1', tags: ['signage'] })],
            total: 7,
            next: null,
        });
        const service = TestBed.inject(SignageZoneService);
        TestBed.tick();
        await flush();

        expect(service.signage_zone_count()).toBe(7);
        expect(queryZones).toHaveBeenCalledWith(
            expect.objectContaining({ tags: 'signage' }),
        );
    });

    // The tree loads from other lists, so it can look complete without it
    it('reports a failed signage zone count and loads it again on retry', async () => {
        let fail_count = true;
        vi.mocked(queryZones).mockImplementation(async (params) => {
            if (params?.tags === 'signage' && fail_count) {
                throw new Error('offline');
            }
            return {
                data: [new PlaceZone({ id: 'z1', tags: ['signage'] })],
                total: 7,
                next: null,
            };
        });
        const service = TestBed.inject(SignageZoneService);
        TestBed.tick();
        await flush();

        expect(service.all_zones().map(({ id }) => id)).toEqual(['z1']);
        expect(service.signage_zone_count()).toBeNull();
        expect(service.zones_error()).toBe(true);

        fail_count = false;
        service.reloadZones();
        TestBed.tick();
        await flush();

        expect(service.signage_zone_count()).toBe(7);
        expect(service.zones_error()).toBe(false);
    });

    it('searches selectable zones beneath the selected zone', () => {
        const service = TestBed.inject(SignageZoneService);

        service.querySelectableZones(' lobby ', 'parent-1');

        expect((queryZones as any).mock.calls.at(-1)[0]).toEqual({
            q: 'lobby',
            parent_id: 'parent-1',
            limit: 2500,
            include_children_count: true,
        });
    });

    it('does not promote an updated child zone into the root zone list', async () => {
        (queryZones as any).mockImplementation((params: any) =>
            Promise.resolve({
                data:
                    params.parent_id === 'root'
                        ? [
                              new PlaceZone({
                                  id: 'org-1',
                                  display_name: 'Organisation',
                              }),
                          ]
                        : [],
                total: params.parent_id === 'root' ? 1 : 0,
            }),
        );
        const service = TestBed.inject(SignageZoneService);
        TestBed.tick();
        await flush();

        (service as any)._cacheZone(
            new PlaceZone({ id: 'level-1', display_name: 'Level 1' }),
        );

        expect(service.root_zones().map((zone) => zone.id)).toEqual(['org-1']);
    });
});

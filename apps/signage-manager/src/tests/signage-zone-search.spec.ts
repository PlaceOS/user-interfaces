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
import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageService zone search', () => {
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

    it('queries zones by search term under the selected zone', async () => {
        const service = TestBed.inject(SignageService);
        TestBed.tick();
        await flush();
        (queryZones as any).mockResolvedValue({
            data: [new PlaceZone({ id: 'lobby', display_name: 'Lobby' })],
            total: 1,
        });

        service.selected_zone.set({ id: 'parent-1' });
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
});

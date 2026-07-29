import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageService } from '../../app/signage.service';
import { ZoneContentComponent } from '../../app/zones/zone-content.component';

const NOW_S = Math.floor(Date.now() / 1000);

describe('ZoneContentComponent', () => {
    const selected_zone = signal<any>(null);
    const playlists = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_thumbnail_media = signal<Record<string, string[]>>({});
    const can_update = signal(true);
    const add_playlist = vi.fn();
    const remove_playlist = vi.fn();
    const add_display = vi.fn();
    const service_stub = {
        selected_zone,
        playlists,
        displays,
        playlist_approval_status,
        playlist_thumbnail_media,
        can_update,
        addPlaylistToZone: add_playlist,
        removePlaylistFromZone: remove_playlist,
        addDisplayToZone: add_display,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [ZoneContentComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(ZoneContentComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(ZoneContentComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_zone.set(null);
        playlists.set([]);
        displays.set([]);
        playlist_approval_status.set({});
    });

    it('filters playlists assigned to the zone and displays that reference it', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }]);
        displays.set([
            { id: 'd1', zones: ['z1'] },
            { id: 'd2', zones: ['z9'] },
        ]);
        selected_zone.set({ id: 'z1', playlists: ['p2'] });
        const component = await make();

        expect(component.zone_playlists().map((p: any) => p.id)).toEqual([
            'p2',
        ]);
        expect(component.zone_displays().map((d: any) => d.id)).toEqual(['d1']);
    });

    it('returns nothing when no zone is selected', async () => {
        const component = await make();
        expect(component.zone_playlists()).toEqual([]);
        expect(component.zone_displays()).toEqual([]);
    });

    it('classifies playlist status by validity window and approval state', async () => {
        playlist_approval_status.set({ p_wait: false });
        const component = await make();

        expect(
            component.getStatus({ id: 'p', valid_until: NOW_S - 10 } as any),
        ).toBe('expired');
        expect(
            component.getStatus({ id: 'p', valid_from: NOW_S + 10 } as any),
        ).toBe('pending');
        expect(component.getStatus({ id: 'p_wait' } as any)).toBe(
            'awaiting_approval',
        );
        expect(component.getStatus({ id: 'p' } as any)).toBeNull();
    });

    it('routes add/remove actions through the service for the selected zone', async () => {
        const zone = { id: 'z1', playlists: ['p1'] };
        selected_zone.set(zone);
        const component = await make();
        const event = {
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        };

        component.addPlaylist();
        component.addDisplay();
        component.removePlaylist(event as any, 'p1');

        expect(add_playlist).toHaveBeenCalledWith(zone);
        expect(add_display).toHaveBeenCalledWith(zone);
        expect(remove_playlist).toHaveBeenCalledWith(zone, 'p1');
        expect(event.preventDefault).toHaveBeenCalled();
    });
});

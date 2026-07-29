import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DisplayContentComponent } from '../../app/displays/display-content.component';
import { SignageService } from '../../app/signage.service';

const NOW_S = Math.floor(Date.now() / 1000);

describe('DisplayContentComponent', () => {
    const selected_display = signal<any>(null);
    const playlists = signal<any[]>([]);
    const zones = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_thumbnail_media = signal<Record<string, string[]>>({});
    const can_update = signal(true);
    const add_playlist = vi.fn();
    const remove_playlist = vi.fn();
    const service_stub = {
        selected_display,
        playlists,
        zones,
        playlist_approval_status,
        playlist_thumbnail_media,
        can_update,
        addPlaylistToDisplay: add_playlist,
        removePlaylistFromDisplay: remove_playlist,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [DisplayContentComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(DisplayContentComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(DisplayContentComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_display.set(null);
        playlists.set([]);
        zones.set([]);
        playlist_approval_status.set({});
    });

    it('filters playlists and zones to the ones assigned to the display', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }]);
        zones.set([{ id: 'z1' }, { id: 'z2' }]);
        selected_display.set({
            id: 'd1',
            playlists: ['p1', 'p3'],
            zones: ['z2'],
        });
        const component = await make();

        expect(component.display_playlists().map((p: any) => p.id)).toEqual([
            'p1',
            'p3',
        ]);
        expect(component.display_zones().map((z: any) => z.id)).toEqual(['z2']);
    });

    it('returns nothing when no display is selected', async () => {
        const component = await make();
        expect(component.display_playlists()).toEqual([]);
        expect(component.display_zones()).toEqual([]);
    });

    it('marks playlists past their valid_until window as expired', async () => {
        const component = await make();
        expect(
            component.getStatus({
                id: 'p1',
                valid_until: NOW_S - 3600,
            } as any),
        ).toBe('expired');
    });

    it('marks playlists before their valid_from window as pending', async () => {
        const component = await make();
        expect(
            component.getStatus({
                id: 'p1',
                valid_from: NOW_S + 3600,
            } as any),
        ).toBe('pending');
    });

    it('marks unapproved playlists as awaiting approval', async () => {
        playlist_approval_status.set({ p1: false });
        const component = await make();
        expect(component.getStatus({ id: 'p1' } as any)).toBe(
            'awaiting_approval',
        );
    });

    it('returns no status for an approved, in-window playlist', async () => {
        playlist_approval_status.set({ p1: true });
        const component = await make();
        expect(component.getStatus({ id: 'p1' } as any)).toBeNull();
    });

    it('adds a playlist to the selected display via the service', async () => {
        const display = { id: 'd1', playlists: [] };
        selected_display.set(display);
        const component = await make();

        component.addPlaylist();

        expect(add_playlist).toHaveBeenCalledWith(display);
    });

    it('removes a playlist from the display and stops the click event', async () => {
        const display = { id: 'd1', playlists: ['p1'] };
        selected_display.set(display);
        const component = await make();
        const event = {
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        };

        component.removePlaylist(event as any, 'p1');

        expect(event.preventDefault).toHaveBeenCalled();
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(remove_playlist).toHaveBeenCalledWith(display, 'p1');
    });
});

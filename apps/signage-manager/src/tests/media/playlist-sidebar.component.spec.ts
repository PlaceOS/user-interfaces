import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaylistSidebarComponent } from '../../app/media/playlist-sidebar.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistSidebarComponent', () => {
    const playlists = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_approval_requested_status = signal<Record<string, boolean>>(
        {},
    );
    const playlists_has_more = signal(false);
    const load_more = vi.fn();
    const add_playlist = vi.fn();
    const add_media_to_playlist = vi.fn().mockResolvedValue(undefined);

    const service_stub = {
        playlists,
        playlist_search_term: signal(''),
        filtered_playlists: playlists,
        can_create: signal(true),
        playlists_loading: signal(false),
        playlist_thumbnail_media: signal<Record<string, string[]>>({}),
        playlist_approval_status,
        playlist_approval_requested_status,
        playlists_has_more,
        loadMorePlaylists: load_more,
        addPlaylist: add_playlist,
        addMediaToPlaylist: add_media_to_playlist,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistSidebarComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(PlaylistSidebarComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(PlaylistSidebarComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        playlists.set([]);
        service_stub.playlist_search_term.set('');
        playlist_approval_status.set({});
        playlist_approval_requested_status.set({});
    });

    it('returns the full list when no search term is set', async () => {
        playlists.set([
            { id: 'a', name: 'News' },
            { id: 'b', name: 'Ads' },
        ]);
        const component = await make();
        expect(component.filtered_playlists().length).toBe(2);
    });

    it('uses the service search state for backend searching', async () => {
        const component = await make();
        component.search.set('new');
        expect(service_stub.playlist_search_term()).toBe('new');
    });

    it('derives an awaiting-review status once approval is requested', async () => {
        playlist_approval_status.set({ p: false });
        playlist_approval_requested_status.set({ p: true });
        const component = await make();
        expect(component.getStatus({ id: 'p' } as any)).toBe('awaiting_review');
    });

    it('derives an awaiting-approval status before a request is sent', async () => {
        playlist_approval_status.set({ p: false });
        const component = await make();
        expect(component.getStatus({ id: 'p' } as any)).toBe(
            'awaiting_approval',
        );
    });

    it('adds dropped media to the target playlist', async () => {
        const component = await make();
        const playlist = { id: 'pl-1' } as any;
        const event = {
            previousIndex: 0,
            previousContainer: { data: [{ id: 'm-1' }] },
        } as any;
        await component.onDrop(playlist, event);
        expect(add_media_to_playlist).toHaveBeenCalledWith('pl-1', 'm-1');
    });

    it('ignores drops without a valid playlist or media', async () => {
        const component = await make();
        const event = {
            previousIndex: 0,
            previousContainer: { data: [{ id: 'm-1' }] },
        } as any;
        await component.onDrop({} as any, event);
        expect(add_media_to_playlist).not.toHaveBeenCalled();
    });

    it('delegates create, load-more and add-playlist to the service', async () => {
        const component = await make();
        component.loadMore();
        component.addPlaylist();
        expect(load_more).toHaveBeenCalledTimes(1);
        expect(add_playlist).toHaveBeenCalledTimes(1);
    });
});

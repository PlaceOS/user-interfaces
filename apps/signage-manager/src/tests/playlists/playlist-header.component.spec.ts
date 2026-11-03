import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlaylistHeaderComponent } from '../../app/playlists/playlist-header.component';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';

describe('PlaylistHeaderComponent', () => {
    const playlists_total = signal(0);
    const can_create = signal(false);
    const add_playlist = vi.fn();
    const context_stub = { can_create };
    const playlist_stub = {
        playlists_total,
        addPlaylist: add_playlist,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistHeaderComponent],
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        })
            .overrideComponent(PlaylistHeaderComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(PlaylistHeaderComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        playlists_total.set(0);
        can_create.set(false);
    });

    it('counts every matching playlist, not only the loaded pages', async () => {
        playlists_total.set(450);
        const component = await make();
        expect(component.total_count()).toBe(450);
    });

    it('mirrors the service create permission', async () => {
        can_create.set(true);
        const component = await make();
        expect(component.can_create()).toBe(true);
    });

    it('opens the playlist it creates', async () => {
        add_playlist.mockResolvedValue({ id: 'playlist-new' });
        const component = await make();
        const navigate = vi
            .spyOn(TestBed.inject(Router), 'navigate')
            .mockResolvedValue(true);
        await component.addPlaylist();
        expect(navigate).toHaveBeenCalledWith(['/playlists', 'playlist-new'], {
            queryParamsHandling: 'merge',
        });
    });

    it('stays put when no playlist is created', async () => {
        add_playlist.mockResolvedValue(null);
        const component = await make();
        const navigate = vi.spyOn(TestBed.inject(Router), 'navigate');
        await component.addPlaylist();
        expect(navigate).not.toHaveBeenCalled();
    });
});

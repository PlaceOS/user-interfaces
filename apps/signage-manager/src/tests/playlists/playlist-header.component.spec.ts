import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaylistHeaderComponent } from '../../app/playlists/playlist-header.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistHeaderComponent', () => {
    const playlists_total = signal(0);
    const can_create = signal(false);
    const add_playlist = vi.fn();
    const service_stub = {
        playlists_total,
        can_create,
        addPlaylist: add_playlist,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistHeaderComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
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

    it('delegates new playlist creation to the service', async () => {
        const component = await make();
        component.addPlaylist();
        expect(add_playlist).toHaveBeenCalledTimes(1);
    });
});

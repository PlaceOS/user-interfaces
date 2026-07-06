import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaylistHeaderComponent } from '../../app/playlists/playlist-header.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistHeaderComponent', () => {
    const filtered_playlists = signal<any[]>([]);
    const can_create = signal(false);
    const add_playlist = vi.fn();
    const service_stub = {
        filtered_playlists,
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
        filtered_playlists.set([]);
        can_create.set(false);
    });

    it('counts the filtered playlists', async () => {
        filtered_playlists.set([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
        const component = await make();
        expect(component.total_count()).toBe(3);
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

import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LocaleService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
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

    it('passes the count as the plural so one playlist reads "1 item"', async () => {
        playlists_total.set(1);
        // Plural 1 picks the ITEM_COUNT_1 form, as the locale service does
        const locale = {
            get: (key: string, args: { count?: number }, plural?: number) =>
                key === 'COMMON.ITEM_COUNT'
                    ? `${args.count} ${plural === 1 ? 'item' : 'items'}`
                    : key,
        };
        await TestBed.configureTestingModule({
            imports: [PlaylistHeaderComponent],
            providers: [
                { provide: LocaleService, useValue: locale },
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        })
            .overrideComponent(PlaylistHeaderComponent, {
                set: { imports: [TranslatePipe], schemas: [NO_ERRORS_SCHEMA] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(PlaylistHeaderComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain('1 item');
        expect(fixture.nativeElement.textContent).not.toContain('1 items');
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

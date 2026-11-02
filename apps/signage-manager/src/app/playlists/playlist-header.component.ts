import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SignageContextService } from '../signage-context.service';
import { SignagePlaylistService } from './signage-playlist.service';

@Component({
    selector: 'playlist-header',
    template: `
        <section-header
            heading="SIGNAGE_MANAGER.PLAYLISTS_PAGE_TITLE"
            [count]="total_count()"
            [can_add]="can_create()"
            add_label="SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST"
            add_tooltip="SIGNAGE_MANAGER.NEW_PLAYLIST"
            (add)="addPlaylist()"
        />
    `,
    imports: [SectionHeaderComponent],
})
export class PlaylistHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);

    public readonly total_count = this._playlist_service.playlists_total;
    public readonly can_create = this._context.can_create;

    public addPlaylist() {
        this._playlist_service.addPlaylist();
    }
}

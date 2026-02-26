import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SignageService } from '../signage.service';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { PlaylistHeaderComponent } from './playlist-header.component';
import { PlaylistItemDetailsComponent } from './playlist-item-details.component';
import { PlaylistItemsComponent } from './playlist-items.component';
import { PlaylistListComponent } from './playlist-list.component';

@Component({
    selector: 'playlists-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <playlist-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <playlist-list />
                    <playlist-items class="w-px flex-1" />
                    <playlist-item-details class="bg-base-100" />
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [``],
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        PlaylistHeaderComponent,
        PlaylistListComponent,
        PlaylistItemsComponent,
        PlaylistItemDetailsComponent,
    ],
})
export class PlaylistsSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _route_id = toSignal(
        this._route.paramMap.pipe(map((p) => p.get('id') || '')),
        { initialValue: '' },
    );

    private _route_resolved = false;

    constructor() {
        // Sync selected playlist from route param
        effect(() => {
            const id = this._route_id();
            const list = this._playlists();
            if (!list.length) return;
            if (id) {
                const match = list.find((p) => p.id === id);
                if (match && this._service.selected_playlist()?.id !== match.id) {
                    this._service.selected_playlist.set(match);
                    this._service.selected_playlist_item.set(null);
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._service.selected_playlist.set(null);
                this._service.selected_playlist_item.set(null);
            }
        });
    }
}

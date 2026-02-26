import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { MediaListHeaderComponent } from './media-list-header.component';
import { MediaListComponent } from './media-list.component';
import { PlaylistSidebarComponent } from './playlist-sidebar.component';
import { SignageService } from '../signage.service';

@Component({
    selector: 'media-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <media-list-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <main class="flex-1 overflow-auto">
                        <media-list
                            class="relative z-0"
                            [playlist_count]="playlists()?.length"
                        />
                    </main>
                    <playlist-sidebar />
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [``],
    imports: [
        NavSidebarComponent,
        MediaListComponent,
        MediaListHeaderComponent,
        PlaylistSidebarComponent,
        NavFooterComponent,
    ],
})
export class MediaSectionComponent {
    private readonly _service = inject(SignageService);
    public readonly playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
}

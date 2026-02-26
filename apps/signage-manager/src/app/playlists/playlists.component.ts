import { Component } from '@angular/core';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';

@Component({
    selector: 'playlists-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <nav-sidebar class="h-full" />
            <main class="h-full w-1/2 flex-1"></main>
        </div>
    `,
    styles: [``],
    imports: [NavSidebarComponent],
})
export class PlaylistsSectionComponent {}

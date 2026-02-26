import { Component } from '@angular/core';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { MediaListHeaderComponent } from './media-list-header.component';
import { MediaListComponent } from './media-list.component';

@Component({
    selector: 'media-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <nav-sidebar class="h-full" />
            <main class="h-full w-1/2 flex-1 overflow-auto">
                <media-list-header class="relative z-10" />
                <media-list class="relative z-0" />
            </main>
        </div>
    `,
    styles: [``],
    imports: [
        NavSidebarComponent,
        MediaListComponent,
        MediaListHeaderComponent,
    ],
})
export class MediaSectionComponent {}

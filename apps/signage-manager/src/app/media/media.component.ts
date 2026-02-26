import { Component } from '@angular/core';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { MediaListHeaderComponent } from './media-list-header.component';
import { MediaListComponent } from './media-list.component';

@Component({
    selector: 'media-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <main class="h w-full flex-1 overflow-auto sm:w-1/2">
                <media-list-header class="relative z-10" />
                <media-list class="relative z-0" />
            </main>
            <nav-footer />
        </div>
    `,
    styles: [``],
    imports: [
        NavSidebarComponent,
        MediaListComponent,
        MediaListHeaderComponent,
        NavFooterComponent,
    ],
})
export class MediaSectionComponent {}

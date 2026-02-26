import { Component } from '@angular/core';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';

@Component({
    selector: 'displays-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <main class="h w-full flex-1 overflow-auto sm:w-1/2"></main>
            <nav-footer />
        </div>
    `,
    styles: [``],
    imports: [NavSidebarComponent, NavFooterComponent],
})
export class DisplaysSectionComponent {}

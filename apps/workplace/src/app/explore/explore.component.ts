import { Component } from '@angular/core';

@Component({
    selector: 'app-explore',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main class="flex flex-1 w-full relative">
            <explore-map-view></explore-map-view>
        </main>
        <footer class="flex w-full">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
})
export class ExploreComponent {
    public show_menu: boolean = false;
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-schedule',
    template: `
        <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        <router-outlet></router-outlet>
        <a-footer-menu class="w-full"></a-footer-menu>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class ScheduleComponent {
    /** Name of the page to render */
    public page: string;
    /** Whether to show menu */
    public show_menu = false;
}

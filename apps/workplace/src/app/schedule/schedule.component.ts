import { Component } from '@angular/core';

@Component({
    selector: 'app-schedule',
    template: `
        <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        <ng-container [ngSwitch]="page">
            <ng-container *ngSwitchCase="'view'">
                <schedule-view-event class="flex-1 h-1/2"></schedule-view-event>
            </ng-container>
            <ng-container *ngSwitchDefault>
                <schedule-event-list class="flex-1 h-1/2"></schedule-event-list>
            </ng-container>
        </ng-container>
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

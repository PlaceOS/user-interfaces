import { Component, OnInit } from '@angular/core';
import { BaseClass, SettingsService } from '@placeos/common';
import { clearEventFormState } from '../bookings/space-flow/space-flow.service';

@Component({
    selector: 'app-control',
    template: `
        <a-topbar-header class="w-full" [(menu)]="show_menu"></a-topbar-header>
        <main class="flex-1 h-1/2 w-full">
            <a-control-space-list></a-control-space-list>
        </main>
        <a-footer-menu></a-footer-menu>
        <a-overlay-menu class="w-full" [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }
    `],
})
export class ControlComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Control';
        clearEventFormState();
    }
}

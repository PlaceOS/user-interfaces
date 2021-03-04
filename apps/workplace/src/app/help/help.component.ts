import { Component, OnInit } from '@angular/core';

import { BaseClass, SettingsService } from '@user-interfaces/common';

@Component({
    selector: 'app-help',
    template: `
        <div class="help absolute inset-0 flex flex-col items-center">
            <header class="w-full">
                <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
            </header>
            <main class="w-full flex-1 h-1/2 z-0">
                <a-help-option-list></a-help-option-list>
            </main>
            <footer class="w-full">
                <a-footer-menu></a-footer-menu>
            </footer>
        </div>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [``],
})
export class HelpComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Help';
    }
}

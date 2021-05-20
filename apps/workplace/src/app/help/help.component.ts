import { Component, OnInit } from '@angular/core';

import { SettingsService } from '@placeos/common';

@Component({
    selector: 'app-help',
    template: `
        <topbar></topbar>
        <div class="flex-1 flex sm:flex-row flex-col-reverse h-1/2">
            <nav-menu class="relative z-10"></nav-menu>
            <main
                class="relative z-0 flex flex-col flex-1 h-1/2 sm:h-auto overflow-hidden"
            >
                <a-help-option-list class="h-full"></a-help-option-list>
            </main>
        </div>
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
export class HelpComponent implements OnInit {
    constructor(private _settings: SettingsService) {}

    public ngOnInit(): void {
        this._settings.title = 'Help';
    }
}

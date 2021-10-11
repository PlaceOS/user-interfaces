import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Component({
    selector: '[app-control]',
    template: `
        <topbar></topbar>
        <div class="flex-1 flex sm:flex-row flex-col-reverse h-1/2">
            <main
                class="relative z-0 flex flex-col flex-1 h-1/2 sm:h-auto overflow-hidden"
            >
                <a-control-space-list></a-control-space-list>
            </main>
        </div>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background: #f0f0f0;
            }
        `,
    ],
})
export class ControlComponent implements OnInit {
    constructor(private _settings: SettingsService) {}

    public ngOnInit(): void {
        this._settings.title = 'Control';
    }
}

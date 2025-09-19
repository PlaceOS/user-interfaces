import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { ControlSpaceListComponent } from './space-list.component';

@Component({
    selector: '[app-control]',
    template: `
        <topbar />
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <a-control-space-list></a-control-space-list>
            </main>
        </div>
        <footer-menu />
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
    imports: [TopbarComponent, FooterMenuComponent, ControlSpaceListComponent],
})
export class ControlComponent implements OnInit {
    private _settings = inject(SettingsService);

    public ngOnInit(): void {
        this._settings.title = 'Control';
    }
}

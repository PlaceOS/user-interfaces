import { Component, inject, OnInit } from '@angular/core';
import { PlaceOS_Service, setMocks } from '@placeos/common';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    template: `
        <a class="skip-link" href="#stagehand-page-content">
            Skip to page content
        </a>
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat) {
            <global-chat />
        }
        <global-loading />
        <!-- <debug-console *ngIf="debug"></debug-console> -->
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
    standalone: false,
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);

    public get has_chat(): boolean {
        return this._placeos.has_chat;
    }

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init();
    }
}

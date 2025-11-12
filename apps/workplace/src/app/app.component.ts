import { Component, inject, OnInit } from '@angular/core';
import {
    currentUser,
    PlaceOS_Service,
    setDefaultCreator,
    setMocks,
    settingSignal,
    UploadsService,
} from '@placeos/common';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat()) {
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
    private _uploads = inject(UploadsService);

    public readonly has_chat = settingSignal('chat.enabled');

    public async ngOnInit() {
        setMocks(mocksInit);
        await this._placeos.init();
        if (this._placeos.has_uploads) this._uploads.init();
        setDefaultCreator(currentUser());
    }
}

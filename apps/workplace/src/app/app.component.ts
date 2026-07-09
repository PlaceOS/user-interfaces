import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    PlaceOS_Service,
    setMocks,
    settingSignal,
    UploadsService,
} from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    SettingsDebugPanelComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';
import * as SETTINGS_SCHEMA from '../environments/settings.schema.json';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        GlobalBannerComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelComponent,
        ChatComponent,
    ],
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat()) {
            <global-chat />
        }
        <global-loading />
        <settings-debug-panel [schema]="settings_schema" />
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
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);
    private _uploads = inject(UploadsService);

    public readonly has_chat = settingSignal('chat.enabled', false);
    public readonly settings_schema = SETTINGS_SCHEMA as any;

    public async ngOnInit() {
        setMocks(mocksInit);
        await this._placeos.init();
        if (this._placeos.has_uploads) this._uploads.init();
    }
}

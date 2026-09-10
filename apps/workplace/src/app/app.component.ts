import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    PlaceOS_Service,
    setMocks,
    settingSignal,
    UploadsService,
} from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { ChatComponent } from '@placeos/components/chat';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        GlobalBannerComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelLauncherComponent,
        ChatComponent,
    ],
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @defer (when has_chat()) {
            <global-chat />
        }
        <global-loading />
        <settings-debug-panel-launcher [loadSchema]="load_settings_schema" />
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
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');

    public async ngOnInit() {
        setMocks(mocksInit);

        await this._placeos.init();
        if (this._placeos.has_uploads) this._uploads.init();
    }
}

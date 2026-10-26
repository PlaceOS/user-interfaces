import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, settingSignal } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { ChatComponent } from '@placeos/components/chat';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
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
    imports: [
        RouterOutlet,
        ChatComponent,
        GlobalBannerComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelLauncherComponent,
    ],
})
export class AppComponent implements OnInit {
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');
    public readonly has_chat = settingSignal('chat.enabled', false);

    private _placeos = inject(PlaceOS_Service);

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init();
    }
}

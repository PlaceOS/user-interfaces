import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, settingSignal } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    SettingsDebugPanelComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';
import { parseTokenFromUrl } from './checkin/token-from-url';

import * as SETTINGS_SCHEMA from '../environments/settings.schema.json';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        GlobalBannerComponent,
        ChatComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelComponent,
    ],
    template: `
        <global-banner />
        <div content class="relative h-1/2 w-full flex-1 overflow-hidden">
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
                overflow: hidden;
            }

            [content] > * {
                overflow: hidden;
            }
        `,
    ],
})
export class AppComponent implements OnInit {
    public readonly settings_schema = SETTINGS_SCHEMA as any;

    private _placeos = inject(PlaceOS_Service);
    private _has_chat = settingSignal<boolean>('chat.enabled', false);

    public readonly has_chat = computed(() => !!this._has_chat());

    public ngOnInit(): void {
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        const on_public = window.location.href.includes('public=true');
        if (on_public) {
            const url_token = parseTokenFromUrl(window.location.href);
            if (url_token) this._placeos.setInitialToken(url_token);
        }

        setMocks(mocksInit);
        this._placeos.init();
    }
}

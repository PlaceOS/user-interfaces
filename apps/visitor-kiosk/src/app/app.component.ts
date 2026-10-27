import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, settingSignal } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { ChatComponent } from '@placeos/components/chat';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
import { mocksInit } from '@placeos/mocks';
import { parseTokenFromUrl } from './checkin/token-from-url';
import { returnToWelcomeWhenIdle } from './inactivity-reset';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        GlobalBannerComponent,
        ChatComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelLauncherComponent,
        TranslatePipe,
    ],
    template: `
        <global-banner />
        <div content class="relative h-1/2 w-full flex-1 overflow-hidden">
            <router-outlet></router-outlet>
        </div>
        @if (idle.warning_secs(); as seconds) {
            <div
                role="alert"
                class="bg-base-100 text-base-content fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-sm p-4 shadow-lg"
            >
                <p>
                    {{
                        'APP.VISITOR_KIOSK.IDLE_WARNING'
                            | translate: { seconds: seconds }
                    }}
                </p>
                <button btn class="w-32" (click)="idle.stay()">
                    {{ 'COMMON.CONTINUE' | translate }}
                </button>
            </div>
        }
        @defer (when has_chat()) {
            <global-chat />
        }
        <global-loading />
        @defer (on idle) {
            <settings-debug-panel-launcher
                [loadSchema]="load_settings_schema"
            />
        }
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
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');

    private _placeos = inject(PlaceOS_Service);
    private _has_chat = settingSignal<boolean>('chat.enabled', false);

    public readonly has_chat = computed(() => !!this._has_chat());
    public readonly idle = returnToWelcomeWhenIdle();

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

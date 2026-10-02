import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    continueTeamsSignIn,
    PlaceOS_Service,
    setMocks,
    settingSignal,
    teamsSignInRequired,
    UploadsService,
    watchUserGroupSync,
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
        @if (teams_sign_in_required()) {
            <div
                class="fixed inset-0 z-9999 flex items-center justify-center p-4"
            >
                <div
                    class="border-base-300 bg-base-100 w-[24rem] max-w-full rounded-lg border p-4 text-center text-sm shadow-sm"
                >
                    <p>Sign in to continue.</p>
                    <button
                        btn
                        type="button"
                        class="mt-3 w-full"
                        (click)="signInWithTeams()"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        }
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
    /** Set when a Teams or Microsoft 365 host needs a click to open sign in */
    public readonly teams_sign_in_required = teamsSignInRequired();
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');

    constructor() {
        watchUserGroupSync();
    }

    public async ngOnInit() {
        setMocks(mocksInit);

        await this._placeos.init();
        if (this._placeos.has_uploads) this._uploads.init();
    }

    public signInWithTeams() {
        continueTeamsSignIn();
    }
}

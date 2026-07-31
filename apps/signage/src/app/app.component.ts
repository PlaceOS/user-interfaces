import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    OrganisationService,
    PlaceOS_Service,
    setInitReloadHandler,
    setMocks,
} from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    SettingsDebugPanelComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';

import * as SETTINGS_SCHEMA from '../environments/settings.schema.json';
import { hasStoredApiKey } from './api-key';
import { hasBootstrappedDisplay } from './bootstrap-state';
import { requestRecovery, startWatchdog } from './watchdog';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        GlobalBannerComponent,
        GlobalLoadingComponent,
        SettingsDebugPanelComponent,
    ],
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (!uses_api_key) {
            <global-loading />
        }
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
    public readonly settings_schema = SETTINGS_SCHEMA as any;
    /**
     * A device signing in with an api key needs no interactive authentication,
     * so the loading overlay has nothing to wait for that the player cannot
     * carry on without. Left in place for every other sign-in, where it covers
     * a real authentication step.
     */
    public readonly uses_api_key = hasStoredApiKey();

    private _placeos = inject(PlaceOS_Service);
    private _org = inject(OrganisationService);

    public ngOnInit(): void {
        // Started before anything else so it covers startup itself. The route
        // guard, organisation data and settings all sit between here and the
        // player, and a failure in any of them used to leave a screen with
        // nothing watching it.
        startWatchdog({ isExpectedToRun: hasBootstrappedDisplay });
        // Initialisation gives up and restarts if the current user cannot be
        // loaded. On its own that restarts every thirty seconds for as long as
        // the failure lasts, so it goes through the same limits as every other
        // automatic recovery.
        setInitReloadHandler(() => requestRecovery('init-error'));
        setMocks(mocksInit);
        this._placeos.init();
    }
}

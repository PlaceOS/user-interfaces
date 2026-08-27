import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, UploadsService } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    SettingsDebugPanelComponent,
    TranslatePipe,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';
import { authority } from '@placeos/ts-client';

import { AiImageService } from './ai/ai-image.service';

import * as SETTINGS_SCHEMA from '../environments/settings.schema.json';

@Component({
    selector: 'app-root',
    template: `
        <a class="skip-link" href="#main-content">{{
            'SIGNAGE_MANAGER.SKIP_TO_CONTENT' | translate
        }}</a>
        <global-banner />
        <main
            id="main-content"
            tabindex="-1"
            class="relative h-1/2 w-full flex-1"
        >
            <router-outlet></router-outlet>
        </main>
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
    imports: [
        GlobalBannerComponent,
        RouterOutlet,
        GlobalLoadingComponent,
        SettingsDebugPanelComponent,
        TranslatePipe,
    ],
})
export class AppComponent implements OnInit {
    public readonly settings_schema = SETTINGS_SCHEMA as any;

    private _placeos = inject(PlaceOS_Service);
    private _uploads = inject(UploadsService);
    private _ai = inject(AiImageService);

    public async ngOnInit() {
        setMocks(mocksInit);
        await this._placeos.init();
        this._uploads.init();
        // asks the backend once whether image generation is available here, so
        // the entry points can hide themselves on a domain without a provider
        this._ai.load(authority()?.config?.org_zone);
    }
}

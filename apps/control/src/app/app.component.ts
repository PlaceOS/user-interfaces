import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    template: `
        <settings-debug-panel-launcher />

        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        <global-loading />
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
        SettingsDebugPanelLauncherComponent,
        RouterOutlet,
        GlobalBannerComponent,
        GlobalLoadingComponent,
    ],
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init({ allow_mdm_restart: true });
    }
}

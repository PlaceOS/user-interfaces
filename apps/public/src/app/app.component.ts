import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

@Component({
    imports: [SettingsDebugPanelLauncherComponent, RouterModule],
    selector: 'placeos-root',
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        } @error {
            <!-- The launcher is optional. If its chunk fails to download
                 (for example while offline), show nothing and do not
                 report an uncaught NG0750 error. -->
        }
        <router-outlet />
    `,
    styles: [
        `
            :host {
                display: block;
                min-height: 100%;
            }
        `,
    ],
})
export class AppComponent {}

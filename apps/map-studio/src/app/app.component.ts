import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

@Component({
    selector: 'app-root',
    imports: [SettingsDebugPanelLauncherComponent, RouterOutlet],
    // The debug launcher pulls in Material menu, forms and locale data.
    // Load it after the app is idle so it stays out of the initial bundle.
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        }
        <router-outlet />
    `,
})
export class AppComponent {}

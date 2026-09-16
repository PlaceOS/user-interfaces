import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

@Component({
    selector: 'app-root',
    imports: [SettingsDebugPanelLauncherComponent, RouterOutlet],
    template: ` <settings-debug-panel-launcher />
        <router-outlet />`,
})
export class AppComponent {}

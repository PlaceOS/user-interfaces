import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

@Component({
    imports: [SettingsDebugPanelLauncherComponent, RouterModule],
    selector: 'placeos-root',
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        }
        <router-outlet />
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
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

import { Component } from '@angular/core';

import { SystemBootstrapComponent } from '@placeos/components';
import { CONTROL_STORE_KEY } from './control-store-key';

/** Setup screen that binds the control panel to a system */
@Component({
    selector: '[app-bootstrap]',
    template: `
        <system-bootstrap
            [store_key]="store_key"
            heading="APP.CONTROL.BOOTSTRAP_TITLE"
            submit_label="COMMON.SUBMIT"
            [system_route]="systemRoute"
        />
    `,
    imports: [SystemBootstrapComponent],
})
export class BootstrapComponent {
    public readonly store_key = CONTROL_STORE_KEY;

    /** Open the tabbed control view for the system */
    public readonly systemRoute = (system_id: string) => ['/tabbed', system_id];
}

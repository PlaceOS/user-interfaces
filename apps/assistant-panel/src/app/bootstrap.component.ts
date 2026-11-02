import { Component } from '@angular/core';

import { SystemBootstrapComponent } from '@placeos/components';

/** Setup screen that binds the assistant panel to a system */
@Component({
    selector: 'app-bootstrap',
    template: `
        <system-bootstrap
            store_key="PLACEOS.ASSISTANT.system"
            heading="COMMON.BOOTSTRAP_ASSISTANT"
            description="COMMON.BOOTSTRAP_ASSISTANT_INFO"
            submit_label="COMMON.CONTINUE"
            [system_route]="systemRoute"
        />
    `,
    imports: [SystemBootstrapComponent],
})
export class BootstrapComponent {
    /** Open the assistant panel for the system */
    public readonly systemRoute = (system_id: string) => ['/panel', system_id];
}

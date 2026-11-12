import { Component } from '@angular/core';

import { RemoteSetupApp } from '@placeos/common';
import { RemoteSetupFlowComponent } from '@placeos/components';

/**
 * Remote setup of booking panels and control panels. A device opens this page
 * from its setup QR code. The page has no sidebar so it fits a phone screen.
 */
@Component({
    selector: 'app-remote-setup',
    template: `<remote-setup-flow [apps]="apps" />`,
    imports: [RemoteSetupFlowComponent],
})
export class RemoteSetupComponent {
    public readonly apps: RemoteSetupApp[] = ['booking-panel', 'control'];
}

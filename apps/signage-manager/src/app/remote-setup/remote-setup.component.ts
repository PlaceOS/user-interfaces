import { Component } from '@angular/core';

import { RemoteSetupApp } from '@placeos/common';
import { RemoteSetupFlowComponent } from '@placeos/components';

/**
 * Remote setup of signage players. A player opens this page from its setup
 * QR code. The page has no navigation so it fits a phone screen.
 */
@Component({
    selector: 'app-remote-setup',
    template: `<remote-setup-flow [apps]="apps" />`,
    imports: [RemoteSetupFlowComponent],
})
export class RemoteSetupComponent {
    public readonly apps: RemoteSetupApp[] = ['signage'];
}

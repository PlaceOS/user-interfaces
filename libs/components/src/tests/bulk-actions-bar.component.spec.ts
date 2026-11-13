import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';

import { BulkActionsBarComponent } from '../lib/bulk-actions-bar.component';

@Component({ selector: 'test-host', template: '', standalone: false })
class HostComponent {
    public count = 0;
    public cleared = 0;
}

describe('BulkActionsBarComponent', () => {
    let spectator: SpectatorHost<BulkActionsBarComponent, HostComponent>;
    const createHost = createHostFactory({
        component: BulkActionsBarComponent,
        host: HostComponent,
    });

    beforeEach(() => {
        spectator = createHost(
            `<bulk-actions-bar [count]="count" (clear)="cleared = cleared + 1">
                <button delete>Delete</button>
            </bulk-actions-bar>`,
        );
    });

    it('should show the actions only while rows are selected', () => {
        expect('[role="toolbar"]').not.toExist();

        spectator.setHostInput({ count: 3 });
        expect('[role="toolbar"]').toExist();
        expect('[role="toolbar"] [delete]').toExist();

        spectator.setHostInput({ count: 0 });
        expect('[role="toolbar"]').not.toExist();
    });

    it('should ask the list to clear the selection', () => {
        spectator.setHostInput({ count: 2 });

        spectator.click('[role="toolbar"] button:last-child');

        expect(spectator.hostComponent.cleared).toBe(1);
    });
});

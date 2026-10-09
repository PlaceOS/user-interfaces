import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';

import { LoadErrorComponent } from '../lib/load-error.component';

@Component({ selector: 'test-host', template: '', standalone: false })
class HostComponent {
    public retried = 0;
    public submitted = 0;
}

describe('LoadErrorComponent', () => {
    let spectator: SpectatorHost<LoadErrorComponent, HostComponent>;

    const createHost = createHostFactory({
        component: LoadErrorComponent,
        host: HostComponent,
    });

    it('should retry without submitting a form it sits in', () => {
        spectator = createHost(
            `<form (submit)="$event.preventDefault(); submitted = submitted + 1">
                <load-error (retry)="retried = retried + 1" />
            </form>`,
        );

        spectator.click('button');

        expect(spectator.hostComponent.retried).toBe(1);
        expect(spectator.hostComponent.submitted).toBe(0);
    });
});

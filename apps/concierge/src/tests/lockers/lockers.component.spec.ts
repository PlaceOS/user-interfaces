import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { of } from 'rxjs';

import { LockersComponent } from '../../app/lockers/lockers.component';
import { LockerStateService } from '../../app/lockers/locker-state.service';

describe('LockersComponent', () => {
    let spectator: Spectator<LockersComponent>;
    let state: any;
    let router: any;

    const createComponent = createComponentFactory({
        component: LockersComponent,
        detectChanges: false,
        overrideComponents: [
            [LockersComponent, { set: { template: '', imports: [] } }],
        ],
    });

    beforeEach(() => {
        router = {
            events: of({}),
            url: '/lockers/events',
        };
        state = {
            loading: signal(''),
            refresh: vi.fn(),
        };
        spectator = createComponent({
            providers: [
                { provide: Router, useValue: router },
                { provide: LockerStateService, useValue: state },
            ],
        });
    });

    it('should derive the active path from the router url', () => {
        expect(spectator.component.path()).toBe('events');
    });

    it('should refresh locker state on init', () => {
        spectator.component.ngOnInit();
        expect(state.refresh).toHaveBeenCalledTimes(1);
    });
});

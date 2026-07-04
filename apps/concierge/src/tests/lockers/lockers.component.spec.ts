import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
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
        providers: [
            MockProvider(ActivatedRoute, {} as any),
            MockProvider(MatDialog, { open: jest.fn() } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            } as any),
        ],
    });

    beforeEach(() => {
        router = {
            events: of({}),
            url: '/lockers/events',
            navigate: jest.fn(),
        };
        state = {
            loading: signal(''),
            filters: signal({}),
            levels: signal([]),
            refresh: jest.fn(),
            setFilters: jest.fn(),
            rejectAllLockers: jest.fn(),
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

    it('should navigate with zone query params and update filters', () => {
        spectator.component.updateZones(['z1', 'z2']);

        expect(router.navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: 'z1,z2' },
                queryParamsHandling: 'merge',
            }),
        );
        expect(state.setFilters).toHaveBeenCalledWith({ zones: ['z1', 'z2'] });
    });

    it('should open the booking rules modal for lockers', () => {
        spectator.component.manageRestrictions();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            expect.anything(),
            { data: { type: 'locker' } },
        );
    });
});

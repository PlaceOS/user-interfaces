import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockerListComponent } from '../../app/lockers/locker-list.component';
import { LockerStateService } from '../../app/lockers/locker-state.service';

describe('LockerListComponent', () => {
    let spectator: Spectator<LockerListComponent>;
    let state: any;
    let clipboard: { copy: any };

    const createComponent = createComponentFactory({
        component: LockerListComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => {
        clipboard = { copy: vi.fn(() => true) };
        state = {
            filtered_banks: signal([]),
            filtered_lockers: signal([
                { id: 'l1', assigned_to: 'a@x.com' },
                { id: 'l2', assigned_to: 'b@x.com' },
                { id: 'l3', assigned_to: 'c@x.com' },
                { id: 'l4', assigned_to: '' },
                { id: 'l5', assigned_to: '' },
            ]),
            filters: signal({}),
            loading: signal(''),
            search: signal(''),
            bookings: signal([
                { asset_id: 'l2', user_email: 'b@x.com', status: 'approved' },
                { asset_id: 'l3', user_email: 'd@x.com', status: 'approved' },
                { asset_id: 'l4', user_email: 'e@x.com', status: 'approved' },
            ]),
            has_driver: true,
            editLocker: vi.fn(),
            editLockerBank: vi.fn(),
            releaseLocker: vi.fn(),
        };
        spectator = createComponent({
            providers: [
                { provide: LockerStateService, useValue: state },
                MockProvider(Clipboard, clipboard as any),
            ],
        });
    });

    it('should toggle child visibility for a bank id', () => {
        expect(spectator.component.show_children()['bank-1']).toBeFalsy();

        spectator.component.toggleChildren('bank-1');
        expect(spectator.component.show_children()['bank-1']).toBe(true);

        spectator.component.toggleChildren('bank-1');
        expect(spectator.component.show_children()['bank-1']).toBe(false);
    });

    it('should copy the provided value to the clipboard', () => {
        spectator.component.copyToClipboard('locker-id');
        expect(clipboard.copy).toHaveBeenCalledWith('locker-id');
    });

    it('should classify locker occupancy statuses', () => {
        const status = spectator.component.locker_status();
        expect(status['l1']).toBe('assigned_free');
        expect(status['l2']).toBe('assigned_busy');
        expect(status['l3']).toBe('reuse_busy');
        expect(status['l4']).toBe('busy');
        expect(status['l5']).toBe('free');
    });

    it('should map statuses to their tooltip keys', () => {
        expect(spectator.component.statusTooltip('assigned_busy')).toBe(
            'APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_BUSY',
        );
        expect(spectator.component.statusTooltip('busy')).toBe(
            'APP.CONCIERGE.LOCKERS_STATUS_BUSY',
        );
        expect(spectator.component.statusTooltip('anything-else')).toBe(
            'APP.CONCIERGE.LOCKERS_STATUS_FREE',
        );
    });

    it('should release lockers via the state service with force flag', () => {
        const locker = { id: 'l1' };
        spectator.component.releaseLocker(locker);
        expect(state.releaseLocker).toHaveBeenCalledWith(locker, true);
    });
});

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
            loading: signal(''),
            search: signal(''),
            has_driver: true,
            editLocker: vi.fn(),
            editLockerBank: vi.fn(),
            releaseLocker: vi.fn(),
        };
        spectator = createComponent({
            providers: [
                { provide: LockerStateService, useValue: state },
                MockProvider(Clipboard, clipboard),
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

    it('should release lockers via the state service with force flag', () => {
        const locker = { id: 'l1' };
        spectator.component.releaseLocker(locker);
        expect(state.releaseLocker).toHaveBeenCalledWith(locker, true);
    });
});

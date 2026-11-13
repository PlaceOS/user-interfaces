import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from '@placeos/common';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreLockerBankInfoComponent } from '../lib/explore-locker-bank-info.component';
import { ExploreLockerBankModalComponent } from '../lib/explore-locker-bank-modal.component';

describe('ExploreLockerBankInfoComponent', () => {
    let spectator: Spectator<ExploreLockerBankInfoComponent>;
    const bank = {
        id: 'bank-1',
        map_id: 'map-bank-1',
        name: 'Locker Bank 1',
        lockers: [{ id: 'l1' }, { id: 'l2' }, { id: 'l3' }],
    };
    const details = {
        bank,
        lockers: bank.lockers,
        in_use_count: 2,
        locker_count: 3,
    };
    const open = vi.fn();
    const createComponent = createComponentFactory({
        component: ExploreLockerBankInfoComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAP_FEATURE_DATA, details),
            MockProvider(MatDialog, { open }),
        ],
    });

    beforeEach(() => open.mockClear());
    afterEach(() => vi.useRealTimers());

    it('should open the bank modal with the feature data on click', () => {
        spectator = createComponent();
        spectator.click('button');
        expect(open).toHaveBeenCalledWith(ExploreLockerBankModalComponent, {
            data: details,
        });
    });

    it('should place the tooltip away from the map edge nearest the bank', () => {
        vi.useFakeTimers();
        spectator = createComponent();
        // Map features sit two elements inside a positioned overlay
        const overlay = document.createElement('div');
        overlay.style.top = '60%';
        overlay.style.left = '20%';
        const inner = document.createElement('div');
        overlay.appendChild(inner);
        inner.appendChild(spectator.element);
        document.body.appendChild(overlay);

        vi.advanceTimersByTime(200);

        expect(spectator.component.y_pos()).toBe('bottom');
        expect(spectator.component.x_pos()).toBe('left');
        overlay.remove();
    });
});

import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
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
    const open = jest.fn();
    const createComponent = createComponentFactory({
        component: ExploreLockerBankInfoComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAP_FEATURE_DATA, details),
            MockProvider(MatDialog, { open }),
        ],
    });

    beforeEach(() => {
        open.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the bank and in-use count', () => {
        expect(spectator.component.bank()).toEqual(bank);
        expect(spectator.component.in_use_count()).toBe(2);
    });

    it('should default the tooltip position to top left', () => {
        expect(spectator.component.y_pos()).toBe('top');
        expect(spectator.component.x_pos()).toBe('left');
    });

    it('should open the bank modal with the feature data', () => {
        spectator.component.openBankModal();
        expect(open).toHaveBeenCalledWith(
            ExploreLockerBankModalComponent,
            expect.objectContaining({ data: expect.objectContaining(details) }),
        );
    });

    it('should open the bank modal when the button is clicked', () => {
        spectator.click('button');
        expect(open).toHaveBeenCalledWith(
            ExploreLockerBankModalComponent,
            expect.anything(),
        );
    });
});
